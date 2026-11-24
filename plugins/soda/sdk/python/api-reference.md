# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [SodaClient](soda/client.py)

## Attributes

> Source: [Attributes](soda/apis/attributes.py)

<details>
<summary><code>def delete_api_v1_attributes_attribute_id(attribute_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteAttributeResponse</code></summary>

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
try:
    response = client.attributes.delete_api_v1_attributes_attribute_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteAttributeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1AttributesAttributeIdErrorBody
```

**Async**

```python
try:
    response = await async_client.attributes.delete_api_v1_attributes_attribute_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteAttributeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1AttributesAttributeIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteAttributeResponse](soda/models/public_api_delete_attribute_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1AttributesAttributeIdErrorBody](soda/errors/delete_api_v1_attributes_attribute_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_attributes(*, page: int | None = None, resource_type: AttributeResourceTypeDtoOrStr | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListAttributesResponse</code></summary>

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
try:
    response = client.attributes.get_api_v1_attributes()
    # TODO: Handle 'response' of type PublicApiListAttributesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1AttributesErrorBody
```

**Async**

```python
try:
    response = await async_client.attributes.get_api_v1_attributes()
    # TODO: Handle 'response' of type PublicApiListAttributesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1AttributesErrorBody
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

**OnSuccess**: <code>[PublicApiListAttributesResponse](soda/models/public_api_list_attributes_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1AttributesErrorBody](soda/errors/get_api_v1_attributes_error.py)&#93;</code>

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
<summary><code>def post_api_v1_attributes(body: PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateAttributeResponse</code></summary>

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
try:
    response = client.attributes.post_api_v1_attributes(
        PublicApiCreateAttributeRequestDto(
            label="some example string",
            name="some example string",
            resource_type=AttributeResourceTypeDto.DATASET,
            type_=AttributeTypeDto.TEXT,
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateAttributeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AttributesErrorBody
```

**Async**

```python
try:
    response = await async_client.attributes.post_api_v1_attributes(
        PublicApiCreateAttributeRequestDto(
            label="some example string",
            name="some example string",
            resource_type=AttributeResourceTypeDto.DATASET,
            type_=AttributeTypeDto.TEXT,
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateAttributeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AttributesErrorBody
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

**OnSuccess**: <code>[PublicApiCreateAttributeResponse](soda/models/public_api_create_attribute_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1AttributesErrorBody](soda/errors/post_api_v1_attributes_error.py)&#93;</code>

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
<summary><code>def post_api_v1_attributes_attribute_id(attribute_id: str, body: PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateAttributeResponse</code></summary>

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
try:
    response = client.attributes.post_api_v1_attributes_attribute_id(
        "some example string", PublicApiUpdateAttributeRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiUpdateAttributeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AttributesAttributeIdErrorBody
```

**Async**

```python
try:
    response = await async_client.attributes.post_api_v1_attributes_attribute_id(
        "some example string", PublicApiUpdateAttributeRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiUpdateAttributeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AttributesAttributeIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateAttributeResponse](soda/models/public_api_update_attribute_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1AttributesAttributeIdErrorBody](soda/errors/post_api_v1_attributes_attribute_id_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_checks_check_id(check_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.checks.delete_api_v1_checks_check_id("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1ChecksCheckIdErrorBody
```

**Async**

```python
try:
    await async_client.checks.delete_api_v1_checks_check_id("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1ChecksCheckIdErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1ChecksCheckIdErrorBody](soda/errors/delete_api_v1_checks_check_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_checks(*, check_ids: str | None = None, data_standard_id: str | None = None, dataset_id: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiChecksResponse</code></summary>

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
try:
    response = client.checks.get_api_v1_checks()
    # TODO: Handle 'response' of type PublicApiChecksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ChecksErrorBody
```

**Async**

```python
try:
    response = await async_client.checks.get_api_v1_checks()
    # TODO: Handle 'response' of type PublicApiChecksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ChecksErrorBody
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

**OnSuccess**: <code>[PublicApiChecksResponse](soda/models/public_api_checks_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ChecksErrorBody](soda/errors/get_api_v1_checks_error.py)&#93;</code>

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
<summary><code>def get_api_v1_contracts(*, dataset_id: str | None = None, dataset_qualified_name: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListContractsResponse</code></summary>

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
try:
    response = client.contracts.get_api_v1_contracts()
    # TODO: Handle 'response' of type PublicApiListContractsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.get_api_v1_contracts()
    # TODO: Handle 'response' of type PublicApiListContractsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsErrorBody
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

**OnSuccess**: <code>[PublicApiListContractsResponse](soda/models/public_api_list_contracts_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ContractsErrorBody](soda/errors/get_api_v1_contracts_error.py)&#93;</code>

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
<summary><code>def get_api_v1_contracts_actions_create_skeleton_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateSkeletonContractStatusResponse</code></summary>

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
try:
    response = client.contracts.get_api_v1_contracts_actions_create_skeleton_operation_id("some example string")
    # TODO: Handle 'response' of type PublicApiCreateSkeletonContractStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.get_api_v1_contracts_actions_create_skeleton_operation_id(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiCreateSkeletonContractStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody
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

**OnSuccess**: <code>[PublicApiCreateSkeletonContractStatusResponse](soda/models/public_api_create_skeleton_contract_status_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody](soda/errors/get_api_v1_contracts_actions_create_skeleton_operation_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_contracts_actions_generate_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiGenerateContractStatusResponse</code></summary>

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
try:
    response = client.contracts.get_api_v1_contracts_actions_generate_operation_id("some example string")
    # TODO: Handle 'response' of type PublicApiGenerateContractStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsActionsGenerateOperationIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.get_api_v1_contracts_actions_generate_operation_id("some example string")
    # TODO: Handle 'response' of type PublicApiGenerateContractStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsActionsGenerateOperationIdErrorBody
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

**OnSuccess**: <code>[PublicApiGenerateContractStatusResponse](soda/models/public_api_generate_contract_status_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ContractsActionsGenerateOperationIdErrorBody](soda/errors/get_api_v1_contracts_actions_generate_operation_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_contracts_contract_id(contract_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiGetContractResponse</code></summary>

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
try:
    response = client.contracts.get_api_v1_contracts_contract_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsContractIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.get_api_v1_contracts_contract_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsContractIdErrorBody
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

**OnSuccess**: <code>[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ContractsContractIdErrorBody](soda/errors/get_api_v1_contracts_contract_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_contracts_contract_id_versions(contract_id: str, *, created_before: RFC3339DateTime | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListContractVersionsResponse</code></summary>

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
try:
    response = client.contracts.get_api_v1_contracts_contract_id_versions("some example string")
    # TODO: Handle 'response' of type PublicApiListContractVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsContractIdVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.get_api_v1_contracts_contract_id_versions("some example string")
    # TODO: Handle 'response' of type PublicApiListContractVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ContractsContractIdVersionsErrorBody
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

**OnSuccess**: <code>[PublicApiListContractVersionsResponse](soda/models/public_api_list_contract_versions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ContractsContractIdVersionsErrorBody](soda/errors/get_api_v1_contracts_contract_id_versions_error.py)&#93;</code>

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
<summary><code>def post_api_v1_contracts(body: PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiGetContractResponse</code></summary>

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
try:
    response = client.contracts.post_api_v1_contracts(PublicApiCreateContractRequestDto(contents="some example string"))
    # TODO: Handle 'response' of type PublicApiGetContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.post_api_v1_contracts(
        PublicApiCreateContractRequestDto(contents="some example string")
    )
    # TODO: Handle 'response' of type PublicApiGetContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsErrorBody
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

**OnSuccess**: <code>[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1ContractsErrorBody](soda/errors/post_api_v1_contracts_error.py)&#93;</code>

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
<summary><code>def post_api_v1_contracts_actions_create_skeleton(body: PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.contracts.post_api_v1_contracts_actions_create_skeleton(PublicApiCreateSkeletonContractRequestDto())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsActionsCreateSkeletonErrorBody
```

**Async**

```python
try:
    await async_client.contracts.post_api_v1_contracts_actions_create_skeleton(
        PublicApiCreateSkeletonContractRequestDto()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsActionsCreateSkeletonErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1ContractsActionsCreateSkeletonErrorBody](soda/errors/post_api_v1_contracts_actions_create_skeleton_error.py)&#93;</code>

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
<summary><code>def post_api_v1_contracts_actions_generate(body: PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.contracts.post_api_v1_contracts_actions_generate(PublicApiGenerateContractRequestDto())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsActionsGenerateErrorBody
```

**Async**

```python
try:
    await async_client.contracts.post_api_v1_contracts_actions_generate(PublicApiGenerateContractRequestDto())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsActionsGenerateErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1ContractsActionsGenerateErrorBody](soda/errors/post_api_v1_contracts_actions_generate_error.py)&#93;</code>

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
<summary><code>def post_api_v1_contracts_contract_id(contract_id: str, body: PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiGetContractResponse</code></summary>

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
try:
    response = client.contracts.post_api_v1_contracts_contract_id(
        "some example string", PublicApiPublishContractRequestDto(contents="some example string")
    )
    # TODO: Handle 'response' of type PublicApiGetContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsContractIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.post_api_v1_contracts_contract_id(
        "some example string", PublicApiPublishContractRequestDto(contents="some example string")
    )
    # TODO: Handle 'response' of type PublicApiGetContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsContractIdErrorBody
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

**OnSuccess**: <code>[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1ContractsContractIdErrorBody](soda/errors/post_api_v1_contracts_contract_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_contracts_contract_id_verify(contract_id: str, body: PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.contracts.post_api_v1_contracts_contract_id_verify(
        "some example string", PublicApiVerifyContractRequestDto()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsContractIdVerifyErrorBody
```

**Async**

```python
try:
    await async_client.contracts.post_api_v1_contracts_contract_id_verify(
        "some example string", PublicApiVerifyContractRequestDto()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ContractsContractIdVerifyErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1ContractsContractIdVerifyErrorBody](soda/errors/post_api_v1_contracts_contract_id_verify_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_datasources_roles_role_id(role_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteDatasourceRoleResponse</code></summary>

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
try:
    response = client.data_sources.delete_api_v1_datasources_roles_role_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasourceRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasourcesRolesRoleIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.delete_api_v1_datasources_roles_role_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasourceRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasourcesRolesRoleIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteDatasourceRoleResponse](soda/models/public_api_delete_datasource_role_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1DatasourcesRolesRoleIdErrorBody](soda/errors/delete_api_v1_datasources_roles_role_id_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_datasources_datasource_id(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteDatasourceResponse</code></summary>

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
try:
    response = client.data_sources.delete_api_v1_datasources_datasource_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasourcesDatasourceIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.delete_api_v1_datasources_datasource_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasourcesDatasourceIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteDatasourceResponse](soda/models/public_api_delete_datasource_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1DatasourcesDatasourceIdErrorBody](soda/errors/delete_api_v1_datasources_datasource_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasources(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListDatasourcesResponse</code></summary>

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
try:
    response = client.data_sources.get_api_v1_datasources()
    # TODO: Handle 'response' of type PublicApiListDatasourcesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.get_api_v1_datasources()
    # TODO: Handle 'response' of type PublicApiListDatasourcesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesErrorBody
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

**OnSuccess**: <code>[PublicApiListDatasourcesResponse](soda/models/public_api_list_datasources_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasourcesErrorBody](soda/errors/get_api_v1_datasources_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasources_actions_test_connection_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiTestConnectionStatusResponse</code></summary>

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
try:
    response = client.data_sources.get_api_v1_datasources_actions_test_connection_operation_id("some example string")
    # TODO: Handle 'response' of type PublicApiTestConnectionStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.get_api_v1_datasources_actions_test_connection_operation_id(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiTestConnectionStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody
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

**OnSuccess**: <code>[PublicApiTestConnectionStatusResponse](soda/models/public_api_test_connection_status_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody](soda/errors/get_api_v1_datasources_actions_test_connection_operation_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasources_roles(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasourceRolesResponse</code></summary>

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
try:
    response = client.data_sources.get_api_v1_datasources_roles()
    # TODO: Handle 'response' of type PublicApiDatasourceRolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.get_api_v1_datasources_roles()
    # TODO: Handle 'response' of type PublicApiDatasourceRolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesRolesErrorBody
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

**OnSuccess**: <code>[PublicApiDatasourceRolesResponse](soda/models/public_api_datasource_roles_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasourcesRolesErrorBody](soda/errors/get_api_v1_datasources_roles_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasources_datasource_id(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiGetDatasourceResponse</code></summary>

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
try:
    response = client.data_sources.get_api_v1_datasources_datasource_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.get_api_v1_datasources_datasource_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdErrorBody
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

**OnSuccess**: <code>[PublicApiGetDatasourceResponse](soda/models/public_api_get_datasource_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasourcesDatasourceIdErrorBody](soda/errors/get_api_v1_datasources_datasource_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasources_datasource_id_diagnostics_warehouse(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasourceDiagnosticsWarehouseResponse</code></summary>

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
try:
    response = client.data_sources.get_api_v1_datasources_datasource_id_diagnostics_warehouse("some example string")
    # TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.get_api_v1_datasources_datasource_id_diagnostics_warehouse(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
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

**OnSuccess**: <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](soda/models/public_api_datasource_diagnostics_warehouse_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody](soda/errors/get_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(datasource_id: str, operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiOnboardDatasetsStatusResponse</code></summary>

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
try:
    response = client.data_sources.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PublicApiOnboardDatasetsStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PublicApiOnboardDatasetsStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody
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

**OnSuccess**: <code>[PublicApiOnboardDatasetsStatusResponse](soda/models/public_api_onboard_datasets_status_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody](soda/errors/get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasources_datasource_id_responsibilities(datasource_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasourceResponsibilitiesResponse</code></summary>

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
try:
    response = client.data_sources.get_api_v1_datasources_datasource_id_responsibilities("some example string")
    # TODO: Handle 'response' of type PublicApiDatasourceResponsibilitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.get_api_v1_datasources_datasource_id_responsibilities(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiDatasourceResponsibilitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
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

**OnSuccess**: <code>[PublicApiDatasourceResponsibilitiesResponse](soda/models/public_api_datasource_responsibilities_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody](soda/errors/get_api_v1_datasources_datasource_id_responsibilities_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources(body: PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateDatasourceResponse</code></summary>

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
try:
    response = client.data_sources.post_api_v1_datasources(
        PublicApiCreateDatasourceRequestDto(configuration_file_contents="some example string")
    )
    # TODO: Handle 'response' of type PublicApiCreateDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.post_api_v1_datasources(
        PublicApiCreateDatasourceRequestDto(configuration_file_contents="some example string")
    )
    # TODO: Handle 'response' of type PublicApiCreateDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesErrorBody
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

**OnSuccess**: <code>[PublicApiCreateDatasourceResponse](soda/models/public_api_create_datasource_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesErrorBody](soda/errors/post_api_v1_datasources_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_actions_test_connection(body: PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.data_sources.post_api_v1_datasources_actions_test_connection(
        PublicApiTestConnectionRequestDto(
            configuration_file_contents="some example string", runner_id="some example string"
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesActionsTestConnectionErrorBody
```

**Async**

```python
try:
    await async_client.data_sources.post_api_v1_datasources_actions_test_connection(
        PublicApiTestConnectionRequestDto(
            configuration_file_contents="some example string", runner_id="some example string"
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesActionsTestConnectionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesActionsTestConnectionErrorBody](soda/errors/post_api_v1_datasources_actions_test_connection_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_roles(body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateDatasourceRoleResponse</code></summary>

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
try:
    response = client.data_sources.post_api_v1_datasources_roles(
        PublicApiDatasourceRoleRequestDto(name="some example string")
    )
    # TODO: Handle 'response' of type PublicApiCreateDatasourceRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.post_api_v1_datasources_roles(
        PublicApiDatasourceRoleRequestDto(name="some example string")
    )
    # TODO: Handle 'response' of type PublicApiCreateDatasourceRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesRolesErrorBody
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

**OnSuccess**: <code>[PublicApiCreateDatasourceRoleResponse](soda/models/public_api_create_datasource_role_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesRolesErrorBody](soda/errors/post_api_v1_datasources_roles_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_roles_role_id(role_id: str, body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateDatasourceRoleResponse</code></summary>

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
try:
    response = client.data_sources.post_api_v1_datasources_roles_role_id(
        "some example string", PublicApiDatasourceRoleRequestDto(name="some example string")
    )
    # TODO: Handle 'response' of type PublicApiUpdateDatasourceRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesRolesRoleIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.post_api_v1_datasources_roles_role_id(
        "some example string", PublicApiDatasourceRoleRequestDto(name="some example string")
    )
    # TODO: Handle 'response' of type PublicApiUpdateDatasourceRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesRolesRoleIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateDatasourceRoleResponse](soda/models/public_api_update_datasource_role_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesRolesRoleIdErrorBody](soda/errors/post_api_v1_datasources_roles_role_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_datasource_id(datasource_id: str, body: PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateDatasourceResponse</code></summary>

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
try:
    response = client.data_sources.post_api_v1_datasources_datasource_id(
        "some example string", PublicApiUpdateDatasourceRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiUpdateDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.post_api_v1_datasources_datasource_id(
        "some example string", PublicApiUpdateDatasourceRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiUpdateDatasourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateDatasourceResponse](soda/models/public_api_update_datasource_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesDatasourceIdErrorBody](soda/errors/post_api_v1_datasources_datasource_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_datasource_id_diagnostics_warehouse(datasource_id: str, body: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasourceDiagnosticsWarehouseResponse</code></summary>

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
try:
    response = client.data_sources.post_api_v1_datasources_datasource_id_diagnostics_warehouse(
        "some example string", PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
```

**Async**

```python
try:
    response = await async_client.data_sources.post_api_v1_datasources_datasource_id_diagnostics_warehouse(
        "some example string", PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
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

**OnSuccess**: <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](soda/models/public_api_datasource_diagnostics_warehouse_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody](soda/errors/post_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_datasource_id_discover(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.data_sources.post_api_v1_datasources_datasource_id_discover("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdDiscoverErrorBody
```

**Async**

```python
try:
    await async_client.data_sources.post_api_v1_datasources_datasource_id_discover("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdDiscoverErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesDatasourceIdDiscoverErrorBody](soda/errors/post_api_v1_datasources_datasource_id_discover_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_datasource_id_onboard_datasets(datasource_id: str, body: PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.data_sources.post_api_v1_datasources_datasource_id_onboard_datasets(
        "some example string", PublicApiOnboardDatasetsRequestDto(discovered_dataset_ids=["some example string"])
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody
```

**Async**

```python
try:
    await async_client.data_sources.post_api_v1_datasources_datasource_id_onboard_datasets(
        "some example string", PublicApiOnboardDatasetsRequestDto(discovered_dataset_ids=["some example string"])
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody](soda/errors/post_api_v1_datasources_datasource_id_onboard_datasets_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasources_datasource_id_responsibilities(datasource_id: str, body: PublicApiUpdateDatasourceResponsibilitiesRequestDto | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.data_sources.post_api_v1_datasources_datasource_id_responsibilities(
        "some example string",
        PublicApiUpdateDatasourceResponsibilitiesRequestDto(
            responsibilities=[
                DatasourceResponsibilityContentRequestDto(
                    role_id="some example string", type_=ResponsibilityTypeDto.USER
                ),
            ],
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
```

**Async**

```python
try:
    await async_client.data_sources.post_api_v1_datasources_datasource_id_responsibilities(
        "some example string",
        PublicApiUpdateDatasourceResponsibilitiesRequestDto(
            responsibilities=[
                DatasourceResponsibilityContentRequestDto(
                    role_id="some example string", type_=ResponsibilityTypeDto.USER
                ),
            ],
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody](soda/errors/post_api_v1_datasources_datasource_id_responsibilities_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_data_standards_data_standard_id(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteDataStandardResponse</code></summary>

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
try:
    response = client.data_standards.delete_api_v1_data_standards_data_standard_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DataStandardsDataStandardIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.delete_api_v1_data_standards_data_standard_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DataStandardsDataStandardIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteDataStandardResponse](soda/models/public_api_delete_data_standard_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1DataStandardsDataStandardIdErrorBody](soda/errors/delete_api_v1_data_standards_data_standard_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_data_standards(*, page: int | None = None, search: str | None = None, size: int | None = None, sort: DataStandardSortFieldDtoOrStr | None = None, status: DataStandardStatusDtoOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListDataStandardsResponse</code></summary>

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
try:
    response = client.data_standards.get_api_v1_data_standards()
    # TODO: Handle 'response' of type PublicApiListDataStandardsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.get_api_v1_data_standards()
    # TODO: Handle 'response' of type PublicApiListDataStandardsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsErrorBody
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

**OnSuccess**: <code>[PublicApiListDataStandardsResponse](soda/models/public_api_list_data_standards_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DataStandardsErrorBody](soda/errors/get_api_v1_data_standards_error.py)&#93;</code>

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
<summary><code>def get_api_v1_data_standards_activity(*, request_options: RequestOptionsOrDict | None = None) -> PublicApiDataStandardsActivityResponse</code></summary>

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
try:
    response = client.data_standards.get_api_v1_data_standards_activity()
    # TODO: Handle 'response' of type PublicApiDataStandardsActivityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsActivityErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.get_api_v1_data_standards_activity()
    # TODO: Handle 'response' of type PublicApiDataStandardsActivityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsActivityErrorBody
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

**OnSuccess**: <code>[PublicApiDataStandardsActivityResponse](soda/models/public_api_data_standards_activity_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DataStandardsActivityErrorBody](soda/errors/get_api_v1_data_standards_activity_error.py)&#93;</code>

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
<summary><code>def get_api_v1_data_standards_data_standard_id(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiGetDataStandardResponse</code></summary>

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
try:
    response = client.data_standards.get_api_v1_data_standards_data_standard_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsDataStandardIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.get_api_v1_data_standards_data_standard_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsDataStandardIdErrorBody
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

**OnSuccess**: <code>[PublicApiGetDataStandardResponse](soda/models/public_api_get_data_standard_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DataStandardsDataStandardIdErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_data_standards_data_standard_id_checks(data_standard_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListDataStandardChecksResponse</code></summary>

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
try:
    response = client.data_standards.get_api_v1_data_standards_data_standard_id_checks("some example string")
    # TODO: Handle 'response' of type PublicApiListDataStandardChecksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsDataStandardIdChecksErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.get_api_v1_data_standards_data_standard_id_checks(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiListDataStandardChecksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsDataStandardIdChecksErrorBody
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

**OnSuccess**: <code>[PublicApiListDataStandardChecksResponse](soda/models/public_api_list_data_standard_checks_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DataStandardsDataStandardIdChecksErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_checks_error.py)&#93;</code>

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
<summary><code>def get_api_v1_data_standards_data_standard_id_datasets(data_standard_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListDataStandardDatasetsResponse</code></summary>

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
try:
    response = client.data_standards.get_api_v1_data_standards_data_standard_id_datasets("some example string")
    # TODO: Handle 'response' of type PublicApiListDataStandardDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsDataStandardIdDatasetsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.get_api_v1_data_standards_data_standard_id_datasets(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiListDataStandardDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DataStandardsDataStandardIdDatasetsErrorBody
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

**OnSuccess**: <code>[PublicApiListDataStandardDatasetsResponse](soda/models/public_api_list_data_standard_datasets_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DataStandardsDataStandardIdDatasetsErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_datasets_error.py)&#93;</code>

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
<summary><code>def post_api_v1_data_standards(body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateDataStandardResponse</code></summary>

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
try:
    response = client.data_standards.post_api_v1_data_standards(
        PublicApiDataStandardRequestDto(
            contents="some example string",
            name="some example string",
            owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
            status=DataStandardStatusDto.DRAFT,
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.post_api_v1_data_standards(
        PublicApiDataStandardRequestDto(
            contents="some example string",
            name="some example string",
            owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
            status=DataStandardStatusDto.DRAFT,
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsErrorBody
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

**OnSuccess**: <code>[PublicApiCreateDataStandardResponse](soda/models/public_api_create_data_standard_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DataStandardsErrorBody](soda/errors/post_api_v1_data_standards_error.py)&#93;</code>

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
<summary><code>def post_api_v1_data_standards_actions_execute(body: PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiExecuteDataStandardsResponse</code></summary>

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
try:
    response = client.data_standards.post_api_v1_data_standards_actions_execute(
        PublicApiExecuteDataStandardsRequestDto(dataset_id="some example string")
    )
    # TODO: Handle 'response' of type PublicApiExecuteDataStandardsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsActionsExecuteErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.post_api_v1_data_standards_actions_execute(
        PublicApiExecuteDataStandardsRequestDto(dataset_id="some example string")
    )
    # TODO: Handle 'response' of type PublicApiExecuteDataStandardsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsActionsExecuteErrorBody
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

**OnSuccess**: <code>[PublicApiExecuteDataStandardsResponse](soda/models/public_api_execute_data_standards_response.py)</code> -- Created

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DataStandardsActionsExecuteErrorBody](soda/errors/post_api_v1_data_standards_actions_execute_error.py)&#93;</code>

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
<summary><code>def post_api_v1_data_standards_actions_preview_scope(body: PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiPreviewDataStandardScopeResponse</code></summary>

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
try:
    response = client.data_standards.post_api_v1_data_standards_actions_preview_scope(
        PublicApiPreviewDataStandardScopeRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiPreviewDataStandardScopeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsActionsPreviewScopeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.post_api_v1_data_standards_actions_preview_scope(
        PublicApiPreviewDataStandardScopeRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiPreviewDataStandardScopeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsActionsPreviewScopeErrorBody
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

**OnSuccess**: <code>[PublicApiPreviewDataStandardScopeResponse](soda/models/public_api_preview_data_standard_scope_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DataStandardsActionsPreviewScopeErrorBody](soda/errors/post_api_v1_data_standards_actions_preview_scope_error.py)&#93;</code>

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
<summary><code>def post_api_v1_data_standards_actions_test(body: PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiTestDataStandardResponse</code></summary>

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
try:
    response = client.data_standards.post_api_v1_data_standards_actions_test(
        PublicApiTestDataStandardRequestDto(contents="some example string", dataset_id="some example string")
    )
    # TODO: Handle 'response' of type PublicApiTestDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsActionsTestErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.post_api_v1_data_standards_actions_test(
        PublicApiTestDataStandardRequestDto(contents="some example string", dataset_id="some example string")
    )
    # TODO: Handle 'response' of type PublicApiTestDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsActionsTestErrorBody
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

**OnSuccess**: <code>[PublicApiTestDataStandardResponse](soda/models/public_api_test_data_standard_response.py)</code> -- Created

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DataStandardsActionsTestErrorBody](soda/errors/post_api_v1_data_standards_actions_test_error.py)&#93;</code>

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
<summary><code>def post_api_v1_data_standards_data_standard_id(data_standard_id: str, body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateDataStandardResponse</code></summary>

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
try:
    response = client.data_standards.post_api_v1_data_standards_data_standard_id(
        "some example string",
        PublicApiDataStandardRequestDto(
            contents="some example string",
            name="some example string",
            owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
            status=DataStandardStatusDto.DRAFT,
        ),
    )
    # TODO: Handle 'response' of type PublicApiUpdateDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsDataStandardIdErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.post_api_v1_data_standards_data_standard_id(
        "some example string",
        PublicApiDataStandardRequestDto(
            contents="some example string",
            name="some example string",
            owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
            status=DataStandardStatusDto.DRAFT,
        ),
    )
    # TODO: Handle 'response' of type PublicApiUpdateDataStandardResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsDataStandardIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateDataStandardResponse](soda/models/public_api_update_data_standard_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DataStandardsDataStandardIdErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiEvaluateDataStandardScopeResponse</code></summary>

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
try:
    response = client.data_standards.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiEvaluateDataStandardScopeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiEvaluateDataStandardScopeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody
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

**OnSuccess**: <code>[PublicApiEvaluateDataStandardScopeResponse](soda/models/public_api_evaluate_data_standard_scope_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error.py)&#93;</code>

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
<summary><code>def post_api_v1_data_standards_data_standard_id_actions_status(data_standard_id: str, body: PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateDataStandardStatusResponse</code></summary>

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
try:
    response = client.data_standards.post_api_v1_data_standards_data_standard_id_actions_status(
        "some example string", PublicApiUpdateDataStandardStatusRequestDto(status=DataStandardStatusDto.DRAFT)
    )
    # TODO: Handle 'response' of type PublicApiUpdateDataStandardStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.data_standards.post_api_v1_data_standards_data_standard_id_actions_status(
        "some example string", PublicApiUpdateDataStandardStatusRequestDto(status=DataStandardStatusDto.DRAFT)
    )
    # TODO: Handle 'response' of type PublicApiUpdateDataStandardStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateDataStandardStatusResponse](soda/models/public_api_update_data_standard_status_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_actions_status_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_datasets_roles_role_id(role_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteDatasetResponse</code></summary>

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
try:
    response = client.datasets.delete_api_v1_datasets_roles_role_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsRolesRoleIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.delete_api_v1_datasets_roles_role_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsRolesRoleIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1DatasetsRolesRoleIdErrorBody](soda/errors/delete_api_v1_datasets_roles_role_id_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_datasets_dataset_id(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteDatasetResponse</code></summary>

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
try:
    response = client.datasets.delete_api_v1_datasets_dataset_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsDatasetIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.delete_api_v1_datasets_dataset_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsDatasetIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1DatasetsDatasetIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteDatasetResponse</code></summary>

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
try:
    response = client.datasets.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteDatasetResponse</code></summary>

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
try:
    response = client.datasets.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets(*, datasource_name: str | None = None, from_: RFC3339DateTime | None = None, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasetsResponse</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets()
    # TODO: Handle 'response' of type PublicApiDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets()
    # TODO: Handle 'response' of type PublicApiDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsErrorBody
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

**OnSuccess**: <code>[PublicApiDatasetsResponse](soda/models/public_api_datasets_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsErrorBody](soda/errors/get_api_v1_datasets_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(dataset_qualified_name: str, *, request_options: RequestOptionsOrDict | None = None) -> DatasetsContentDto</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
        "some example string"
    )
    # TODO: Handle 'response' of type DatasetsContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
        "some example string"
    )
    # TODO: Handle 'response' of type DatasetsContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody
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

**OnSuccess**: <code>[DatasetsContentDto](soda/models/datasets_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody](soda/errors/get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_roles(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasetRolesResponse</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_roles()
    # TODO: Handle 'response' of type PublicApiDatasetRolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_roles()
    # TODO: Handle 'response' of type PublicApiDatasetRolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsRolesErrorBody
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

**OnSuccess**: <code>[PublicApiDatasetRolesResponse](soda/models/public_api_dataset_roles_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsRolesErrorBody](soda/errors/get_api_v1_datasets_roles_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_dataset_id(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DatasetsContentDto</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_dataset_id("some example string")
    # TODO: Handle 'response' of type DatasetsContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_dataset_id("some example string")
    # TODO: Handle 'response' of type DatasetsContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdErrorBody
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

**OnSuccess**: <code>[DatasetsContentDto](soda/models/datasets_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsDatasetIdErrorBody](soda/errors/get_api_v1_datasets_dataset_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_dataset_id_columns(dataset_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListDatasetColumnsResponse</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_dataset_id_columns("some example string")
    # TODO: Handle 'response' of type PublicApiListDatasetColumnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdColumnsErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_dataset_id_columns("some example string")
    # TODO: Handle 'response' of type PublicApiListDatasetColumnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdColumnsErrorBody
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

**OnSuccess**: <code>[PublicApiListDatasetColumnsResponse](soda/models/public_api_list_dataset_columns_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsDatasetIdColumnsErrorBody](soda/errors/get_api_v1_datasets_dataset_id_columns_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_dataset_id_compute_warehouse(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DatasetComputeWarehouseConfigurationDto</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_dataset_id_compute_warehouse("some example string")
    # TODO: Handle 'response' of type DatasetComputeWarehouseConfigurationDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_dataset_id_compute_warehouse("some example string")
    # TODO: Handle 'response' of type DatasetComputeWarehouseConfigurationDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody
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

**OnSuccess**: <code>[DatasetComputeWarehouseConfigurationDto](soda/models/dataset_compute_warehouse_configuration_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody](soda/errors/get_api_v1_datasets_dataset_id_compute_warehouse_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_dataset_id_diagnostics_warehouse(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasetDiagnosticsWarehouseResponse</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_dataset_id_diagnostics_warehouse("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetDiagnosticsWarehouseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_dataset_id_diagnostics_warehouse("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetDiagnosticsWarehouseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody
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

**OnSuccess**: <code>[PublicApiDatasetDiagnosticsWarehouseResponse](soda/models/public_api_dataset_diagnostics_warehouse_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody](soda/errors/get_api_v1_datasets_dataset_id_diagnostics_warehouse_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_dataset_id_metric_monitoring(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasetMetricMonitoringResponse</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_dataset_id_metric_monitoring("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetMetricMonitoringResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_dataset_id_metric_monitoring("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetMetricMonitoringResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody
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

**OnSuccess**: <code>[PublicApiDatasetMetricMonitoringResponse](soda/models/public_api_dataset_metric_monitoring_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody](soda/errors/get_api_v1_datasets_dataset_id_metric_monitoring_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_dataset_id_profiling(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasetProfilingResponse</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_dataset_id_profiling("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetProfilingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdProfilingErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_dataset_id_profiling("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetProfilingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdProfilingErrorBody
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

**OnSuccess**: <code>[PublicApiDatasetProfilingResponse](soda/models/public_api_dataset_profiling_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsDatasetIdProfilingErrorBody](soda/errors/get_api_v1_datasets_dataset_id_profiling_error.py)&#93;</code>

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
<summary><code>def get_api_v1_datasets_dataset_id_responsibilities(dataset_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiDatasetResponsibilitiesResponse</code></summary>

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
try:
    response = client.datasets.get_api_v1_datasets_dataset_id_responsibilities("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetResponsibilitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.get_api_v1_datasets_dataset_id_responsibilities("some example string")
    # TODO: Handle 'response' of type PublicApiDatasetResponsibilitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody
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

**OnSuccess**: <code>[PublicApiDatasetResponsibilitiesResponse](soda/models/public_api_dataset_responsibilities_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody](soda/errors/get_api_v1_datasets_dataset_id_responsibilities_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_roles(body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateDatasetRoleResponse</code></summary>

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
try:
    response = client.datasets.post_api_v1_datasets_roles(PublicApiDatasetRoleRequestDto(name="some example string"))
    # TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.post_api_v1_datasets_roles(
        PublicApiDatasetRoleRequestDto(name="some example string")
    )
    # TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsRolesErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateDatasetRoleResponse](soda/models/public_api_update_dataset_role_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsRolesErrorBody](soda/errors/post_api_v1_datasets_roles_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_roles_role_id(role_id: str, body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateDatasetRoleResponse</code></summary>

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
try:
    response = client.datasets.post_api_v1_datasets_roles_role_id(
        "some example string", PublicApiDatasetRoleRequestDto(name="some example string")
    )
    # TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsRolesRoleIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.post_api_v1_datasets_roles_role_id(
        "some example string", PublicApiDatasetRoleRequestDto(name="some example string")
    )
    # TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsRolesRoleIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateDatasetRoleResponse](soda/models/public_api_update_dataset_role_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsRolesRoleIdErrorBody](soda/errors/post_api_v1_datasets_roles_role_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id(dataset_id: str, body: PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> DatasetsContentDto</code></summary>

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
try:
    response = client.datasets.post_api_v1_datasets_dataset_id("some example string", PublicApiUpdateDatasetDto())
    # TODO: Handle 'response' of type DatasetsContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.post_api_v1_datasets_dataset_id(
        "some example string", PublicApiUpdateDatasetDto()
    )
    # TODO: Handle 'response' of type DatasetsContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdErrorBody
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

**OnSuccess**: <code>[DatasetsContentDto](soda/models/datasets_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id_column_attributes(dataset_id: str, body: PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.datasets.post_api_v1_datasets_dataset_id_column_attributes(
        "some example string", PublicApiSetColumnAttributesRequestDto(column_attributes={})
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdColumnAttributesErrorBody
```

**Async**

```python
try:
    await async_client.datasets.post_api_v1_datasets_dataset_id_column_attributes(
        "some example string", PublicApiSetColumnAttributesRequestDto(column_attributes={})
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdColumnAttributesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdColumnAttributesErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_attributes_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id_column_metric_monitors(dataset_id: str, body: PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateColumnMetricMonitorResponse</code></summary>

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
try:
    response = client.datasets.post_api_v1_datasets_dataset_id_column_metric_monitors(
        "some example string",
        PublicApiCreateColumnMetricMonitorRequestDto(
            column_metric_monitor_configuration=ColumnMetricMonitorConfigurationDto(
                configuration=ColumnMonitorConfigurationDto(), metric_type=ColumnMonitorMetricTypeDto.MISSING_PERCENTAGE
            ),
            column_name="some example string",
        ),
    )
    # TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.post_api_v1_datasets_dataset_id_column_metric_monitors(
        "some example string",
        PublicApiCreateColumnMetricMonitorRequestDto(
            column_metric_monitor_configuration=ColumnMetricMonitorConfigurationDto(
                configuration=ColumnMonitorConfigurationDto(), metric_type=ColumnMonitorMetricTypeDto.MISSING_PERCENTAGE
            ),
            column_name="some example string",
        ),
    )
    # TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateColumnMetricMonitorResponse](soda/models/public_api_update_column_metric_monitor_response.py)</code> -- Created

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(dataset_id: str, monitor_id: str, body: PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateColumnMetricMonitorResponse</code></summary>

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
try:
    response = client.datasets.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        "some example string",
        "some example string",
        PublicApiUpdateColumnMetricMonitorRequestDto(configuration=ColumnMonitorConfigurationDto()),
    )
    # TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        "some example string",
        "some example string",
        PublicApiUpdateColumnMetricMonitorRequestDto(configuration=ColumnMonitorConfigurationDto()),
    )
    # TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateColumnMetricMonitorResponse](soda/models/public_api_update_column_metric_monitor_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id_custom_sql_monitors(dataset_id: str, body: PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateCustomSqlMonitorResponse</code></summary>

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
try:
    response = client.datasets.post_api_v1_datasets_dataset_id_custom_sql_monitors(
        "some example string",
        PublicApiCreateCustomSqlMonitorRequestDto(
            configuration=CustomSqlMonitorConfigurationDto(
                result_metric="some example string", sql_query="some example string"
            ),
            monitor_name="some example string",
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateCustomSqlMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.post_api_v1_datasets_dataset_id_custom_sql_monitors(
        "some example string",
        PublicApiCreateCustomSqlMonitorRequestDto(
            configuration=CustomSqlMonitorConfigurationDto(
                result_metric="some example string", sql_query="some example string"
            ),
            monitor_name="some example string",
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateCustomSqlMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody
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

**OnSuccess**: <code>[PublicApiCreateCustomSqlMonitorResponse](soda/models/public_api_create_custom_sql_monitor_response.py)</code> -- Created

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody](soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(dataset_id: str, monitor_id: str, body: PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateCustomSqlMonitorResponse</code></summary>

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
try:
    response = client.datasets.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        "some example string", "some example string", PublicApiUpdateCustomSqlMonitorRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiUpdateCustomSqlMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
```

**Async**

```python
try:
    response = await async_client.datasets.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        "some example string", "some example string", PublicApiUpdateCustomSqlMonitorRequestDto()
    )
    # TODO: Handle 'response' of type PublicApiUpdateCustomSqlMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateCustomSqlMonitorResponse](soda/models/public_api_update_custom_sql_monitor_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.datasets.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
        "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody
```

**Async**

```python
try:
    await async_client.datasets.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
        "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody](soda/errors/post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error.py)&#93;</code>

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
<summary><code>def post_api_v1_datasets_dataset_id_responsibilities(dataset_id: str, body: PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.datasets.post_api_v1_datasets_dataset_id_responsibilities(
        "some example string",
        PublicApiUpdateDatasetResponsibilitiesRequestDto(
            responsibilities=[
                DatasetResponsibilityContentRequestDto(role_id="some example string", type_=ResponsibilityTypeDto.USER)
            ],
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody
```

**Async**

```python
try:
    await async_client.datasets.post_api_v1_datasets_dataset_id_responsibilities(
        "some example string",
        PublicApiUpdateDatasetResponsibilitiesRequestDto(
            responsibilities=[
                DatasetResponsibilityContentRequestDto(role_id="some example string", type_=ResponsibilityTypeDto.USER)
            ],
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody](soda/errors/post_api_v1_datasets_dataset_id_responsibilities_error.py)&#93;</code>

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
<summary><code>def get_api_v1_discovered_datasets(*, datasource_id: str | None = None, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiDiscoveredDatasetsResponse</code></summary>

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
try:
    response = client.discovered_datasets.get_api_v1_discovered_datasets()
    # TODO: Handle 'response' of type PublicApiDiscoveredDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DiscoveredDatasetsErrorBody
```

**Async**

```python
try:
    response = await async_client.discovered_datasets.get_api_v1_discovered_datasets()
    # TODO: Handle 'response' of type PublicApiDiscoveredDatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DiscoveredDatasetsErrorBody
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

**OnSuccess**: <code>[PublicApiDiscoveredDatasetsResponse](soda/models/public_api_discovered_datasets_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1DiscoveredDatasetsErrorBody](soda/errors/get_api_v1_discovered_datasets_error.py)&#93;</code>

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
<summary><code>def get_api_v1_incidents(*, dataset_id: str | None = None, from_: RFC3339DateTime | None = None, incident_ids: str | None = None, lead_id: str | None = None, page: int | None = None, severity: str | None = None, size: int | None = None, status: str | None = None, to: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiIncidentsResponse</code></summary>

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
try:
    response = client.incidents.get_api_v1_incidents()
    # TODO: Handle 'response' of type PublicApiIncidentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1IncidentsErrorBody
```

**Async**

```python
try:
    response = await async_client.incidents.get_api_v1_incidents()
    # TODO: Handle 'response' of type PublicApiIncidentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1IncidentsErrorBody
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

**OnSuccess**: <code>[PublicApiIncidentsResponse](soda/models/public_api_incidents_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1IncidentsErrorBody](soda/errors/get_api_v1_incidents_error.py)&#93;</code>

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
<summary><code>def get_api_v1_incidents_incident_id_rca_report(incident_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiRcaReportContentDto</code></summary>

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
try:
    response = client.incidents.get_api_v1_incidents_incident_id_rca_report("some example string")
    # TODO: Handle 'response' of type PublicApiRcaReportContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1IncidentsIncidentIdRcaReportErrorBody
```

**Async**

```python
try:
    response = await async_client.incidents.get_api_v1_incidents_incident_id_rca_report("some example string")
    # TODO: Handle 'response' of type PublicApiRcaReportContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1IncidentsIncidentIdRcaReportErrorBody
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

**OnSuccess**: <code>[PublicApiRcaReportContentDto](soda/models/public_api_rca_report_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1IncidentsIncidentIdRcaReportErrorBody](soda/errors/get_api_v1_incidents_incident_id_rca_report_error.py)&#93;</code>

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
<summary><code>def post_api_v1_incidents(body: PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> IncidentContentDto</code></summary>

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
try:
    response = client.incidents.post_api_v1_incidents(
        PublicApiCreateIncidentDto(
            description="some example string",
            monitor_result_ids=["some example string"],
            severity=IncidentSeverityDto.MINOR,
            title="some example string",
        ),
    )
    # TODO: Handle 'response' of type IncidentContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1IncidentsErrorBody
```

**Async**

```python
try:
    response = await async_client.incidents.post_api_v1_incidents(
        PublicApiCreateIncidentDto(
            description="some example string",
            monitor_result_ids=["some example string"],
            severity=IncidentSeverityDto.MINOR,
            title="some example string",
        ),
    )
    # TODO: Handle 'response' of type IncidentContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1IncidentsErrorBody
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

**OnSuccess**: <code>[IncidentContentDto](soda/models/incident_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1IncidentsErrorBody](soda/errors/post_api_v1_incidents_error.py)&#93;</code>

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
<summary><code>def post_api_v1_incidents_incident_id(incident_id: str, body: PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> IncidentContentDto</code></summary>

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
try:
    response = client.incidents.post_api_v1_incidents_incident_id("some example string", PublicApiUpdateIncidentDto())
    # TODO: Handle 'response' of type IncidentContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1IncidentsIncidentIdErrorBody
```

**Async**

```python
try:
    response = await async_client.incidents.post_api_v1_incidents_incident_id(
        "some example string", PublicApiUpdateIncidentDto()
    )
    # TODO: Handle 'response' of type IncidentContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1IncidentsIncidentIdErrorBody
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

**OnSuccess**: <code>[IncidentContentDto](soda/models/incident_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1IncidentsIncidentIdErrorBody](soda/errors/post_api_v1_incidents_incident_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_incidents_incident_id_rca_report(incident_id: str, body: PublicApiRcaReportDto | PublicApiRcaReportDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiRcaReportContentDto</code></summary>

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
try:
    response = client.incidents.post_api_v1_incidents_incident_id_rca_report(
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
    # TODO: Handle 'response' of type PublicApiRcaReportContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1IncidentsIncidentIdRcaReportErrorBody
```

**Async**

```python
try:
    response = await async_client.incidents.post_api_v1_incidents_incident_id_rca_report(
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
    # TODO: Handle 'response' of type PublicApiRcaReportContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1IncidentsIncidentIdRcaReportErrorBody
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

**OnSuccess**: <code>[PublicApiRcaReportContentDto](soda/models/public_api_rca_report_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1IncidentsIncidentIdRcaReportErrorBody](soda/errors/post_api_v1_incidents_incident_id_rca_report_error.py)&#93;</code>

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
<summary><code>def get_api_v1_licensing_spu_consumption(*, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiSpuConsumptionResponse</code></summary>

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
try:
    response = client.licensing.get_api_v1_licensing_spu_consumption()
    # TODO: Handle 'response' of type PublicApiSpuConsumptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1LicensingSpuConsumptionErrorBody
```

**Async**

```python
try:
    response = await async_client.licensing.get_api_v1_licensing_spu_consumption()
    # TODO: Handle 'response' of type PublicApiSpuConsumptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1LicensingSpuConsumptionErrorBody
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

**OnSuccess**: <code>[PublicApiSpuConsumptionResponse](soda/models/public_api_spu_consumption_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1LicensingSpuConsumptionErrorBody](soda/errors/get_api_v1_licensing_spu_consumption_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_notification_rules_notification_rule_id(notification_rule_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteNotificationRuleResponse</code></summary>

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
try:
    response = client.notification_rules.delete_api_v1_notification_rules_notification_rule_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteNotificationRuleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1NotificationRulesNotificationRuleIdErrorBody
```

**Async**

```python
try:
    response = await async_client.notification_rules.delete_api_v1_notification_rules_notification_rule_id(
        "some example string"
    )
    # TODO: Handle 'response' of type PublicApiDeleteNotificationRuleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1NotificationRulesNotificationRuleIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteNotificationRuleResponse](soda/models/public_api_delete_notification_rule_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1NotificationRulesNotificationRuleIdErrorBody](soda/errors/delete_api_v1_notification_rules_notification_rule_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_notification_rules(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListNotificationRulesResponse</code></summary>

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
try:
    response = client.notification_rules.get_api_v1_notification_rules()
    # TODO: Handle 'response' of type PublicApiListNotificationRulesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1NotificationRulesErrorBody
```

**Async**

```python
try:
    response = await async_client.notification_rules.get_api_v1_notification_rules()
    # TODO: Handle 'response' of type PublicApiListNotificationRulesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1NotificationRulesErrorBody
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

**OnSuccess**: <code>[PublicApiListNotificationRulesResponse](soda/models/public_api_list_notification_rules_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1NotificationRulesErrorBody](soda/errors/get_api_v1_notification_rules_error.py)&#93;</code>

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
<summary><code>def post_api_v1_notification_rules(body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiNotificationRuleDto</code></summary>

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
try:
    response = client.notification_rules.post_api_v1_notification_rules(
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
    # TODO: Handle 'response' of type PublicApiNotificationRuleDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1NotificationRulesErrorBody
```

**Async**

```python
try:
    response = await async_client.notification_rules.post_api_v1_notification_rules(
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
    # TODO: Handle 'response' of type PublicApiNotificationRuleDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1NotificationRulesErrorBody
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

**OnSuccess**: <code>[PublicApiNotificationRuleDto](soda/models/public_api_notification_rule_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1NotificationRulesErrorBody](soda/errors/post_api_v1_notification_rules_error.py)&#93;</code>

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
<summary><code>def post_api_v1_notification_rules_notification_rule_id(notification_rule_id: str, body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiNotificationRuleDto</code></summary>

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
try:
    response = client.notification_rules.post_api_v1_notification_rules_notification_rule_id(
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
    # TODO: Handle 'response' of type PublicApiNotificationRuleDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1NotificationRulesNotificationRuleIdErrorBody
```

**Async**

```python
try:
    response = await async_client.notification_rules.post_api_v1_notification_rules_notification_rule_id(
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
    # TODO: Handle 'response' of type PublicApiNotificationRuleDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1NotificationRulesNotificationRuleIdErrorBody
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

**OnSuccess**: <code>[PublicApiNotificationRuleDto](soda/models/public_api_notification_rule_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1NotificationRulesNotificationRuleIdErrorBody](soda/errors/post_api_v1_notification_rules_notification_rule_id_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_runners_runner_id(runner_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.runners.delete_api_v1_runners_runner_id("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1RunnersRunnerIdErrorBody
```

**Async**

```python
try:
    response = await async_client.runners.delete_api_v1_runners_runner_id("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1RunnersRunnerIdErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1RunnersRunnerIdErrorBody](soda/errors/delete_api_v1_runners_runner_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_runners(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListRunnersResponse</code></summary>

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
try:
    response = client.runners.get_api_v1_runners()
    # TODO: Handle 'response' of type PublicApiListRunnersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1RunnersErrorBody
```

**Async**

```python
try:
    response = await async_client.runners.get_api_v1_runners()
    # TODO: Handle 'response' of type PublicApiListRunnersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1RunnersErrorBody
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

**OnSuccess**: <code>[PublicApiListRunnersResponse](soda/models/public_api_list_runners_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1RunnersErrorBody](soda/errors/get_api_v1_runners_error.py)&#93;</code>

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
<summary><code>def get_api_v1_runners_runner_id(runner_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiGetRunnerResponse</code></summary>

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
try:
    response = client.runners.get_api_v1_runners_runner_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetRunnerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1RunnersRunnerIdErrorBody
```

**Async**

```python
try:
    response = await async_client.runners.get_api_v1_runners_runner_id("some example string")
    # TODO: Handle 'response' of type PublicApiGetRunnerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1RunnersRunnerIdErrorBody
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

**OnSuccess**: <code>[PublicApiGetRunnerResponse](soda/models/public_api_get_runner_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1RunnersRunnerIdErrorBody](soda/errors/get_api_v1_runners_runner_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_runners(*, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateRunnerResponse</code></summary>

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
try:
    response = client.runners.post_api_v1_runners()
    # TODO: Handle 'response' of type PublicApiCreateRunnerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1RunnersErrorBody
```

**Async**

```python
try:
    response = await async_client.runners.post_api_v1_runners()
    # TODO: Handle 'response' of type PublicApiCreateRunnerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1RunnersErrorBody
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

**OnSuccess**: <code>[PublicApiCreateRunnerResponse](soda/models/public_api_create_runner_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1RunnersErrorBody](soda/errors/post_api_v1_runners_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_scans_scan_id(scan_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.scans.delete_api_v1_scans_scan_id("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1ScansScanIdErrorBody
```

**Async**

```python
try:
    await async_client.scans.delete_api_v1_scans_scan_id("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1ScansScanIdErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1ScansScanIdErrorBody](soda/errors/delete_api_v1_scans_scan_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_scans_scan_id(scan_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiScanStatusResponse</code></summary>

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
try:
    response = client.scans.get_api_v1_scans_scan_id("some example string")
    # TODO: Handle 'response' of type PublicApiScanStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ScansScanIdErrorBody
```

**Async**

```python
try:
    response = await async_client.scans.get_api_v1_scans_scan_id("some example string")
    # TODO: Handle 'response' of type PublicApiScanStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ScansScanIdErrorBody
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

**OnSuccess**: <code>[PublicApiScanStatusResponse](soda/models/public_api_scan_status_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ScansScanIdErrorBody](soda/errors/get_api_v1_scans_scan_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_scans_scan_id_logs(scan_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiScanLogsResponse</code></summary>

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
try:
    response = client.scans.get_api_v1_scans_scan_id_logs("some example string")
    # TODO: Handle 'response' of type PublicApiScanLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ScansScanIdLogsErrorBody
```

**Async**

```python
try:
    response = await async_client.scans.get_api_v1_scans_scan_id_logs("some example string")
    # TODO: Handle 'response' of type PublicApiScanLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ScansScanIdLogsErrorBody
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

**OnSuccess**: <code>[PublicApiScanLogsResponse](soda/models/public_api_scan_logs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1ScansScanIdLogsErrorBody](soda/errors/get_api_v1_scans_scan_id_logs_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_secrets_secret_id(secret_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiDeleteSecretResponse</code></summary>

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
try:
    response = client.secrets.delete_api_v1_secrets_secret_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1SecretsSecretIdErrorBody
```

**Async**

```python
try:
    response = await async_client.secrets.delete_api_v1_secrets_secret_id("some example string")
    # TODO: Handle 'response' of type PublicApiDeleteSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1SecretsSecretIdErrorBody
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

**OnSuccess**: <code>[PublicApiDeleteSecretResponse](soda/models/public_api_delete_secret_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1SecretsSecretIdErrorBody](soda/errors/delete_api_v1_secrets_secret_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_secrets(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiListSecretsResponse</code></summary>

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
try:
    response = client.secrets.get_api_v1_secrets()
    # TODO: Handle 'response' of type PublicApiListSecretsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1SecretsErrorBody
```

**Async**

```python
try:
    response = await async_client.secrets.get_api_v1_secrets()
    # TODO: Handle 'response' of type PublicApiListSecretsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1SecretsErrorBody
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

**OnSuccess**: <code>[PublicApiListSecretsResponse](soda/models/public_api_list_secrets_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1SecretsErrorBody](soda/errors/get_api_v1_secrets_error.py)&#93;</code>

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
<summary><code>def get_api_v1_secrets_public_key(*, request_options: RequestOptionsOrDict | None = None) -> PublicApiGetEncryptionKeyResponse</code></summary>

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
try:
    response = client.secrets.get_api_v1_secrets_public_key()
    # TODO: Handle 'response' of type PublicApiGetEncryptionKeyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1SecretsPublicKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.secrets.get_api_v1_secrets_public_key()
    # TODO: Handle 'response' of type PublicApiGetEncryptionKeyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1SecretsPublicKeyErrorBody
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

**OnSuccess**: <code>[PublicApiGetEncryptionKeyResponse](soda/models/public_api_get_encryption_key_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1SecretsPublicKeyErrorBody](soda/errors/get_api_v1_secrets_public_key_error.py)&#93;</code>

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
<summary><code>def post_api_v1_secrets(body: PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiCreateSecretResponse</code></summary>

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
try:
    response = client.secrets.post_api_v1_secrets(
        PublicApiCreateSecretRequestDto(
            encrypted_value="some example string", encryption_key="some example string", name="some example string"
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SecretsErrorBody
```

**Async**

```python
try:
    response = await async_client.secrets.post_api_v1_secrets(
        PublicApiCreateSecretRequestDto(
            encrypted_value="some example string", encryption_key="some example string", name="some example string"
        ),
    )
    # TODO: Handle 'response' of type PublicApiCreateSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SecretsErrorBody
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

**OnSuccess**: <code>[PublicApiCreateSecretResponse](soda/models/public_api_create_secret_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1SecretsErrorBody](soda/errors/post_api_v1_secrets_error.py)&#93;</code>

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
<summary><code>def post_api_v1_secrets_secret_id(secret_id: str, body: PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiUpdateSecretResponse</code></summary>

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
try:
    response = client.secrets.post_api_v1_secrets_secret_id(
        "some example string",
        PublicApiUpdateSecretRequestDto(encrypted_value="some example string", encryption_key="some example string"),
    )
    # TODO: Handle 'response' of type PublicApiUpdateSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SecretsSecretIdErrorBody
```

**Async**

```python
try:
    response = await async_client.secrets.post_api_v1_secrets_secret_id(
        "some example string",
        PublicApiUpdateSecretRequestDto(encrypted_value="some example string", encryption_key="some example string"),
    )
    # TODO: Handle 'response' of type PublicApiUpdateSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SecretsSecretIdErrorBody
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

**OnSuccess**: <code>[PublicApiUpdateSecretResponse](soda/models/public_api_update_secret_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1SecretsSecretIdErrorBody](soda/errors/post_api_v1_secrets_secret_id_error.py)&#93;</code>

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
<summary><code>def delete_api_v1_user_groups_user_group_id(user_group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.users.delete_api_v1_user_groups_user_group_id("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1UserGroupsUserGroupIdErrorBody
```

**Async**

```python
try:
    response = await async_client.users.delete_api_v1_user_groups_user_group_id("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1UserGroupsUserGroupIdErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[DeleteApiV1UserGroupsUserGroupIdErrorBody](soda/errors/delete_api_v1_user_groups_user_group_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_user_groups(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiUserGroupsResponse</code></summary>

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
try:
    response = client.users.get_api_v1_user_groups()
    # TODO: Handle 'response' of type PublicApiUserGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1UserGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_api_v1_user_groups()
    # TODO: Handle 'response' of type PublicApiUserGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1UserGroupsErrorBody
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

**OnSuccess**: <code>[PublicApiUserGroupsResponse](soda/models/public_api_user_groups_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1UserGroupsErrorBody](soda/errors/get_api_v1_user_groups_error.py)&#93;</code>

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
<summary><code>def get_api_v1_user_groups_user_group_id(user_group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> UserGroupContentDto</code></summary>

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
try:
    response = client.users.get_api_v1_user_groups_user_group_id("some example string")
    # TODO: Handle 'response' of type UserGroupContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1UserGroupsUserGroupIdErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_api_v1_user_groups_user_group_id("some example string")
    # TODO: Handle 'response' of type UserGroupContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1UserGroupsUserGroupIdErrorBody
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

**OnSuccess**: <code>[UserGroupContentDto](soda/models/user_group_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1UserGroupsUserGroupIdErrorBody](soda/errors/get_api_v1_user_groups_user_group_id_error.py)&#93;</code>

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
<summary><code>def get_api_v1_users(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PublicApiUsersResponse</code></summary>

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
try:
    response = client.users.get_api_v1_users()
    # TODO: Handle 'response' of type PublicApiUsersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1UsersErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_api_v1_users()
    # TODO: Handle 'response' of type PublicApiUsersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1UsersErrorBody
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

**OnSuccess**: <code>[PublicApiUsersResponse](soda/models/public_api_users_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1UsersErrorBody](soda/errors/get_api_v1_users_error.py)&#93;</code>

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
<summary><code>def post_api_v1_user_groups(body: PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.users.post_api_v1_user_groups(PublicApiCreateUserGroupRequestDto(name="some example string"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UserGroupsErrorBody
```

**Async**

```python
try:
    await async_client.users.post_api_v1_user_groups(PublicApiCreateUserGroupRequestDto(name="some example string"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UserGroupsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1UserGroupsErrorBody](soda/errors/post_api_v1_user_groups_error.py)&#93;</code>

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
<summary><code>def post_api_v1_user_groups_user_group_id(user_group_id: str, body: PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> UserGroupContentDto</code></summary>

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
try:
    response = client.users.post_api_v1_user_groups_user_group_id(
        "some example string", PublicApiUpdateUserGroupRequestDto()
    )
    # TODO: Handle 'response' of type UserGroupContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UserGroupsUserGroupIdErrorBody
```

**Async**

```python
try:
    response = await async_client.users.post_api_v1_user_groups_user_group_id(
        "some example string", PublicApiUpdateUserGroupRequestDto()
    )
    # TODO: Handle 'response' of type UserGroupContentDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UserGroupsUserGroupIdErrorBody
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

**OnSuccess**: <code>[UserGroupContentDto](soda/models/user_group_content_dto.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1UserGroupsUserGroupIdErrorBody](soda/errors/post_api_v1_user_groups_user_group_id_error.py)&#93;</code>

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
<summary><code>def post_api_v1_users(body: PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PublicApiInviteUserResponse</code></summary>

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
try:
    response = client.users.post_api_v1_users(PublicApiInviteUserRequestDto(emails=["some example string"]))
    # TODO: Handle 'response' of type PublicApiInviteUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UsersErrorBody
```

**Async**

```python
try:
    response = await async_client.users.post_api_v1_users(PublicApiInviteUserRequestDto(emails=["some example string"]))
    # TODO: Handle 'response' of type PublicApiInviteUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UsersErrorBody
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

**OnSuccess**: <code>[PublicApiInviteUserResponse](soda/models/public_api_invite_user_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1UsersErrorBody](soda/errors/post_api_v1_users_error.py)&#93;</code>

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
<summary><code>def post_api_v1_users_user_id_disable(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.users.post_api_v1_users_user_id_disable("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UsersUserIdDisableErrorBody
```

**Async**

```python
try:
    response = await async_client.users.post_api_v1_users_user_id_disable("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1UsersUserIdDisableErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[PostApiV1UsersUserIdDisableErrorBody](soda/errors/post_api_v1_users_user_id_disable_error.py)&#93;</code>

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
<summary><code>def get_api_v1_test_login(*, request_options: RequestOptionsOrDict | None = None) -> PublicApiTestLoginResponse</code></summary>

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
try:
    response = client.utility.get_api_v1_test_login()
    # TODO: Handle 'response' of type PublicApiTestLoginResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TestLoginErrorBody
```

**Async**

```python
try:
    response = await async_client.utility.get_api_v1_test_login()
    # TODO: Handle 'response' of type PublicApiTestLoginResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TestLoginErrorBody
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

**OnSuccess**: <code>[PublicApiTestLoginResponse](soda/models/public_api_test_login_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](soda/core/exceptions.py)&#91;[GetApiV1TestLoginErrorBody](soda/errors/get_api_v1_test_login_error.py)&#93;</code>

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

