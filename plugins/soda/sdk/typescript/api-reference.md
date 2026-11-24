# Reference

> Source: [SodaClient](src/client.ts)

## Attributes

> Source: [Attributes](src/resources/attributes.ts)

<details>
<summary><code>deleteApiV1AttributesAttributeId(request: Attributes.DeleteApiV1AttributesAttributeIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteAttributeResponse, Attributes.DeleteApiV1AttributesAttributeIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attributes.deleteApiV1AttributesAttributeId({
    attributeId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDeleteAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type Attributes.DeleteApiV1AttributesAttributeIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes
  .deleteApiV1AttributesAttributeId({ attributeId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteAttributeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attributeId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.deleteApiV1AttributesAttributeId(request)`

- **OnSuccess**: <code>[PublicApiDeleteAttributeResponse](src/models/public-api-delete-attribute-response.ts)</code>
- **OnError**: throws <code>[Attributes.DeleteApiV1AttributesAttributeIdError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.deleteApiV1AttributesAttributeId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteAttributeResponse, Attributes.DeleteApiV1AttributesAttributeIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteAttributeResponse](src/models/public-api-delete-attribute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Attributes(request?: Attributes.GetApiV1AttributesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListAttributesResponse, Attributes.GetApiV1AttributesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attributes.getApiV1Attributes();
  // TODO: Handle 'response' of type PublicApiListAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type Attributes.GetApiV1AttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes.getApiV1Attributes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListAttributesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>resourceType?</code> | <code>[AttributeResourceTypeDto](src/models/attribute-resource-type-dto.ts)</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.getApiV1Attributes(request)`

- **OnSuccess**: <code>[PublicApiListAttributesResponse](src/models/public-api-list-attributes-response.ts)</code>
- **OnError**: throws <code>[Attributes.GetApiV1AttributesError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.getApiV1Attributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListAttributesResponse, Attributes.GetApiV1AttributesError&gt;</code>, with `result.value` of type <code>[PublicApiListAttributesResponse](src/models/public-api-list-attributes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Attributes(request: Attributes.PostApiV1AttributesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiCreateAttributeResponse, Attributes.PostApiV1AttributesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attributes.postApiV1Attributes({
    body: {
      label: "some example string",
      name: "some example string",
      resourceType: AttributeResourceTypeDto.Dataset,
      type: AttributeTypeDto.Text,
    },
  });
  // TODO: Handle 'response' of type PublicApiCreateAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type Attributes.PostApiV1AttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes
  .postApiV1Attributes({
    body: {
      label: "some example string",
      name: "some example string",
      resourceType: AttributeResourceTypeDto.Dataset,
      type: AttributeTypeDto.Text,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateAttributeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateAttributeRequestDto](src/models/public-api-create-attribute-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.postApiV1Attributes(request)`

- **OnSuccess**: <code>[PublicApiCreateAttributeResponse](src/models/public-api-create-attribute-response.ts)</code>
- **OnError**: throws <code>[Attributes.PostApiV1AttributesError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.postApiV1Attributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateAttributeResponse, Attributes.PostApiV1AttributesError&gt;</code>, with `result.value` of type <code>[PublicApiCreateAttributeResponse](src/models/public-api-create-attribute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1AttributesAttributeId(request: Attributes.PostApiV1AttributesAttributeIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateAttributeResponse, Attributes.PostApiV1AttributesAttributeIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attributes.postApiV1AttributesAttributeId({
    attributeId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PublicApiUpdateAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type Attributes.PostApiV1AttributesAttributeIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes
  .postApiV1AttributesAttributeId({ attributeId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateAttributeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attributeId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateAttributeRequestDto](src/models/public-api-update-attribute-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.postApiV1AttributesAttributeId(request)`

- **OnSuccess**: <code>[PublicApiUpdateAttributeResponse](src/models/public-api-update-attribute-response.ts)</code>
- **OnError**: throws <code>[Attributes.PostApiV1AttributesAttributeIdError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.postApiV1AttributesAttributeId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateAttributeResponse, Attributes.PostApiV1AttributesAttributeIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateAttributeResponse](src/models/public-api-update-attribute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Checks

> Source: [Checks](src/resources/checks.ts)

<details>
<summary><code>deleteApiV1ChecksCheckId(request: Checks.DeleteApiV1ChecksCheckIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Checks.DeleteApiV1ChecksCheckIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.checks.deleteApiV1ChecksCheckId({ checkId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Checks.DeleteApiV1ChecksCheckIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checks.deleteApiV1ChecksCheckId({ checkId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>checkId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checks.deleteApiV1ChecksCheckId(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Checks.DeleteApiV1ChecksCheckIdError](src/resources/checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checks.deleteApiV1ChecksCheckId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Checks.DeleteApiV1ChecksCheckIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Checks(request?: Checks.GetApiV1ChecksRequest, options?: RequestOptions): ApiPromise&lt;PublicApiChecksResponse, Checks.GetApiV1ChecksError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checks.getApiV1Checks();
  // TODO: Handle 'response' of type PublicApiChecksResponse
} catch (err) {
  // TODO: Handle 'err' of type Checks.GetApiV1ChecksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checks.getApiV1Checks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiChecksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>checkIds?</code> | <code>string</code> | - |
| <code>dataStandardId?</code> | <code>string</code> | - |
| <code>datasetId?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checks.getApiV1Checks(request)`

- **OnSuccess**: <code>[PublicApiChecksResponse](src/models/public-api-checks-response.ts)</code>
- **OnError**: throws <code>[Checks.GetApiV1ChecksError](src/resources/checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checks.getApiV1Checks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiChecksResponse, Checks.GetApiV1ChecksError&gt;</code>, with `result.value` of type <code>[PublicApiChecksResponse](src/models/public-api-checks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Contracts

> Source: [Contracts](src/resources/contracts.ts)

<details>
<summary><code>getApiV1Contracts(request?: Contracts.GetApiV1ContractsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListContractsResponse, Contracts.GetApiV1ContractsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.getApiV1Contracts();
  // TODO: Handle 'response' of type PublicApiListContractsResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.GetApiV1ContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts.getApiV1Contracts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListContractsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId?</code> | <code>string</code> | - |
| <code>datasetQualifiedName?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.getApiV1Contracts(request)`

- **OnSuccess**: <code>[PublicApiListContractsResponse](src/models/public-api-list-contracts-response.ts)</code>
- **OnError**: throws <code>[Contracts.GetApiV1ContractsError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.getApiV1Contracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListContractsResponse, Contracts.GetApiV1ContractsError&gt;</code>, with `result.value` of type <code>[PublicApiListContractsResponse](src/models/public-api-list-contracts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ContractsActionsCreateSkeletonOperationId(request: Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiCreateSkeletonContractStatusResponse, Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.getApiV1ContractsActionsCreateSkeletonOperationId({
    operationId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiCreateSkeletonContractStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .getApiV1ContractsActionsCreateSkeletonOperationId({ operationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateSkeletonContractStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.getApiV1ContractsActionsCreateSkeletonOperationId(request)`

- **OnSuccess**: <code>[PublicApiCreateSkeletonContractStatusResponse](src/models/public-api-create-skeleton-contract-status-response.ts)</code>
- **OnError**: throws <code>[Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.getApiV1ContractsActionsCreateSkeletonOperationId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateSkeletonContractStatusResponse, Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError&gt;</code>, with `result.value` of type <code>[PublicApiCreateSkeletonContractStatusResponse](src/models/public-api-create-skeleton-contract-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ContractsActionsGenerateOperationId(request: Contracts.GetApiV1ContractsActionsGenerateOperationIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiGenerateContractStatusResponse, Contracts.GetApiV1ContractsActionsGenerateOperationIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.getApiV1ContractsActionsGenerateOperationId({
    operationId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiGenerateContractStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.GetApiV1ContractsActionsGenerateOperationIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .getApiV1ContractsActionsGenerateOperationId({ operationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGenerateContractStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.getApiV1ContractsActionsGenerateOperationId(request)`

- **OnSuccess**: <code>[PublicApiGenerateContractStatusResponse](src/models/public-api-generate-contract-status-response.ts)</code>
- **OnError**: throws <code>[Contracts.GetApiV1ContractsActionsGenerateOperationIdError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.getApiV1ContractsActionsGenerateOperationId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGenerateContractStatusResponse, Contracts.GetApiV1ContractsActionsGenerateOperationIdError&gt;</code>, with `result.value` of type <code>[PublicApiGenerateContractStatusResponse](src/models/public-api-generate-contract-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ContractsContractId(request: Contracts.GetApiV1ContractsContractIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiGetContractResponse, Contracts.GetApiV1ContractsContractIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.getApiV1ContractsContractId({ contractId: "some example string" });
  // TODO: Handle 'response' of type PublicApiGetContractResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.GetApiV1ContractsContractIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .getApiV1ContractsContractId({ contractId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGetContractResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contractId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.getApiV1ContractsContractId(request)`

- **OnSuccess**: <code>[PublicApiGetContractResponse](src/models/public-api-get-contract-response.ts)</code>
- **OnError**: throws <code>[Contracts.GetApiV1ContractsContractIdError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.getApiV1ContractsContractId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGetContractResponse, Contracts.GetApiV1ContractsContractIdError&gt;</code>, with `result.value` of type <code>[PublicApiGetContractResponse](src/models/public-api-get-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ContractsContractIdVersions(request: Contracts.GetApiV1ContractsContractIdVersionsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListContractVersionsResponse, Contracts.GetApiV1ContractsContractIdVersionsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.getApiV1ContractsContractIdVersions({
    contractId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiListContractVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.GetApiV1ContractsContractIdVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .getApiV1ContractsContractIdVersions({ contractId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListContractVersionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contractId</code> | <code>string</code> | - |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.getApiV1ContractsContractIdVersions(request)`

- **OnSuccess**: <code>[PublicApiListContractVersionsResponse](src/models/public-api-list-contract-versions-response.ts)</code>
- **OnError**: throws <code>[Contracts.GetApiV1ContractsContractIdVersionsError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.getApiV1ContractsContractIdVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListContractVersionsResponse, Contracts.GetApiV1ContractsContractIdVersionsError&gt;</code>, with `result.value` of type <code>[PublicApiListContractVersionsResponse](src/models/public-api-list-contract-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Contracts(request: Contracts.PostApiV1ContractsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiGetContractResponse, Contracts.PostApiV1ContractsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.postApiV1Contracts({ body: { contents: "some example string" } });
  // TODO: Handle 'response' of type PublicApiGetContractResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.PostApiV1ContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .postApiV1Contracts({ body: { contents: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGetContractResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateContractRequestDto](src/models/public-api-create-contract-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.postApiV1Contracts(request)`

- **OnSuccess**: <code>[PublicApiGetContractResponse](src/models/public-api-get-contract-response.ts)</code>
- **OnError**: throws <code>[Contracts.PostApiV1ContractsError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.postApiV1Contracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGetContractResponse, Contracts.PostApiV1ContractsError&gt;</code>, with `result.value` of type <code>[PublicApiGetContractResponse](src/models/public-api-get-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ContractsActionsCreateSkeleton(request: Contracts.PostApiV1ContractsActionsCreateSkeletonRequest, options?: RequestOptions): ApiPromise&lt;undefined, Contracts.PostApiV1ContractsActionsCreateSkeletonError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contracts.postApiV1ContractsActionsCreateSkeleton({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Contracts.PostApiV1ContractsActionsCreateSkeletonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts.postApiV1ContractsActionsCreateSkeleton({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateSkeletonContractRequestDto](src/models/public-api-create-skeleton-contract-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.postApiV1ContractsActionsCreateSkeleton(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Contracts.PostApiV1ContractsActionsCreateSkeletonError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.postApiV1ContractsActionsCreateSkeleton(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Contracts.PostApiV1ContractsActionsCreateSkeletonError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ContractsActionsGenerate(request: Contracts.PostApiV1ContractsActionsGenerateRequest, options?: RequestOptions): ApiPromise&lt;undefined, Contracts.PostApiV1ContractsActionsGenerateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contracts.postApiV1ContractsActionsGenerate({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Contracts.PostApiV1ContractsActionsGenerateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts.postApiV1ContractsActionsGenerate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiGenerateContractRequestDto](src/models/public-api-generate-contract-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.postApiV1ContractsActionsGenerate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Contracts.PostApiV1ContractsActionsGenerateError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.postApiV1ContractsActionsGenerate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Contracts.PostApiV1ContractsActionsGenerateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ContractsContractId(request: Contracts.PostApiV1ContractsContractIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiGetContractResponse, Contracts.PostApiV1ContractsContractIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.postApiV1ContractsContractId({
    contractId: "some example string",
    body: { contents: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiGetContractResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.PostApiV1ContractsContractIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .postApiV1ContractsContractId({
    contractId: "some example string",
    body: { contents: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGetContractResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contractId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiPublishContractRequestDto](src/models/public-api-publish-contract-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.postApiV1ContractsContractId(request)`

- **OnSuccess**: <code>[PublicApiGetContractResponse](src/models/public-api-get-contract-response.ts)</code>
- **OnError**: throws <code>[Contracts.PostApiV1ContractsContractIdError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.postApiV1ContractsContractId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGetContractResponse, Contracts.PostApiV1ContractsContractIdError&gt;</code>, with `result.value` of type <code>[PublicApiGetContractResponse](src/models/public-api-get-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ContractsContractIdVerify(request: Contracts.PostApiV1ContractsContractIdVerifyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Contracts.PostApiV1ContractsContractIdVerifyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contracts.postApiV1ContractsContractIdVerify({ contractId: "some example string", body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Contracts.PostApiV1ContractsContractIdVerifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .postApiV1ContractsContractIdVerify({ contractId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contractId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiVerifyContractRequestDto](src/models/public-api-verify-contract-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.postApiV1ContractsContractIdVerify(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Contracts.PostApiV1ContractsContractIdVerifyError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.postApiV1ContractsContractIdVerify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Contracts.PostApiV1ContractsContractIdVerifyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataSources

> Source: [DataSources](src/resources/data-sources.ts)

<details>
<summary><code>deleteApiV1DatasourcesRolesRoleId(request: DataSources.DeleteApiV1DatasourcesRolesRoleIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteDatasourceRoleResponse, DataSources.DeleteApiV1DatasourcesRolesRoleIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.deleteApiV1DatasourcesRolesRoleId({
    roleId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDeleteDatasourceRoleResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DeleteApiV1DatasourcesRolesRoleIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .deleteApiV1DatasourcesRolesRoleId({ roleId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteDatasourceRoleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>roleId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.deleteApiV1DatasourcesRolesRoleId(request)`

- **OnSuccess**: <code>[PublicApiDeleteDatasourceRoleResponse](src/models/public-api-delete-datasource-role-response.ts)</code>
- **OnError**: throws <code>[DataSources.DeleteApiV1DatasourcesRolesRoleIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.deleteApiV1DatasourcesRolesRoleId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteDatasourceRoleResponse, DataSources.DeleteApiV1DatasourcesRolesRoleIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteDatasourceRoleResponse](src/models/public-api-delete-datasource-role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiV1DatasourcesDatasourceId(request: DataSources.DeleteApiV1DatasourcesDatasourceIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteDatasourceResponse, DataSources.DeleteApiV1DatasourcesDatasourceIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.deleteApiV1DatasourcesDatasourceId({
    datasourceId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDeleteDatasourceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DeleteApiV1DatasourcesDatasourceIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .deleteApiV1DatasourcesDatasourceId({ datasourceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteDatasourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.deleteApiV1DatasourcesDatasourceId(request)`

- **OnSuccess**: <code>[PublicApiDeleteDatasourceResponse](src/models/public-api-delete-datasource-response.ts)</code>
- **OnError**: throws <code>[DataSources.DeleteApiV1DatasourcesDatasourceIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.deleteApiV1DatasourcesDatasourceId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteDatasourceResponse, DataSources.DeleteApiV1DatasourcesDatasourceIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteDatasourceResponse](src/models/public-api-delete-datasource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Datasources(request?: DataSources.GetApiV1DatasourcesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListDatasourcesResponse, DataSources.GetApiV1DatasourcesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getApiV1Datasources();
  // TODO: Handle 'response' of type PublicApiListDatasourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetApiV1DatasourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.getApiV1Datasources().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListDatasourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getApiV1Datasources(request)`

- **OnSuccess**: <code>[PublicApiListDatasourcesResponse](src/models/public-api-list-datasources-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetApiV1DatasourcesError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getApiV1Datasources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListDatasourcesResponse, DataSources.GetApiV1DatasourcesError&gt;</code>, with `result.value` of type <code>[PublicApiListDatasourcesResponse](src/models/public-api-list-datasources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasourcesActionsTestConnectionOperationId(request: DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiTestConnectionStatusResponse, DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getApiV1DatasourcesActionsTestConnectionOperationId({
    operationId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiTestConnectionStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .getApiV1DatasourcesActionsTestConnectionOperationId({ operationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiTestConnectionStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getApiV1DatasourcesActionsTestConnectionOperationId(request)`

- **OnSuccess**: <code>[PublicApiTestConnectionStatusResponse](src/models/public-api-test-connection-status-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getApiV1DatasourcesActionsTestConnectionOperationId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiTestConnectionStatusResponse, DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError&gt;</code>, with `result.value` of type <code>[PublicApiTestConnectionStatusResponse](src/models/public-api-test-connection-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasourcesRoles(request?: DataSources.GetApiV1DatasourcesRolesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasourceRolesResponse, DataSources.GetApiV1DatasourcesRolesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getApiV1DatasourcesRoles();
  // TODO: Handle 'response' of type PublicApiDatasourceRolesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetApiV1DatasourcesRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.getApiV1DatasourcesRoles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasourceRolesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getApiV1DatasourcesRoles(request)`

- **OnSuccess**: <code>[PublicApiDatasourceRolesResponse](src/models/public-api-datasource-roles-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetApiV1DatasourcesRolesError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getApiV1DatasourcesRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasourceRolesResponse, DataSources.GetApiV1DatasourcesRolesError&gt;</code>, with `result.value` of type <code>[PublicApiDatasourceRolesResponse](src/models/public-api-datasource-roles-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasourcesDatasourceId(request: DataSources.GetApiV1DatasourcesDatasourceIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiGetDatasourceResponse, DataSources.GetApiV1DatasourcesDatasourceIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getApiV1DatasourcesDatasourceId({
    datasourceId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiGetDatasourceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetApiV1DatasourcesDatasourceIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .getApiV1DatasourcesDatasourceId({ datasourceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGetDatasourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getApiV1DatasourcesDatasourceId(request)`

- **OnSuccess**: <code>[PublicApiGetDatasourceResponse](src/models/public-api-get-datasource-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetApiV1DatasourcesDatasourceIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getApiV1DatasourcesDatasourceId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGetDatasourceResponse, DataSources.GetApiV1DatasourcesDatasourceIdError&gt;</code>, with `result.value` of type <code>[PublicApiGetDatasourceResponse](src/models/public-api-get-datasource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request: DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasourceDiagnosticsWarehouseResponse, DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse({
    datasourceId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse({ datasourceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasourceDiagnosticsWarehouseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request)`

- **OnSuccess**: <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](src/models/public-api-datasource-diagnostics-warehouse-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasourceDiagnosticsWarehouseResponse, DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError&gt;</code>, with `result.value` of type <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](src/models/public-api-datasource-diagnostics-warehouse-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(request: DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiOnboardDatasetsStatusResponse, DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId({
    datasourceId: "some example string",
    operationId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiOnboardDatasetsStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId({
    datasourceId: "some example string",
    operationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiOnboardDatasetsStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |
| <code>operationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(request)`

- **OnSuccess**: <code>[PublicApiOnboardDatasetsStatusResponse](src/models/public-api-onboard-datasets-status-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiOnboardDatasetsStatusResponse, DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError&gt;</code>, with `result.value` of type <code>[PublicApiOnboardDatasetsStatusResponse](src/models/public-api-onboard-datasets-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasourcesDatasourceIdResponsibilities(request: DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasourceResponsibilitiesResponse, DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getApiV1DatasourcesDatasourceIdResponsibilities({
    datasourceId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDatasourceResponsibilitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .getApiV1DatasourcesDatasourceIdResponsibilities({ datasourceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasourceResponsibilitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getApiV1DatasourcesDatasourceIdResponsibilities(request)`

- **OnSuccess**: <code>[PublicApiDatasourceResponsibilitiesResponse](src/models/public-api-datasource-responsibilities-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getApiV1DatasourcesDatasourceIdResponsibilities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasourceResponsibilitiesResponse, DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError&gt;</code>, with `result.value` of type <code>[PublicApiDatasourceResponsibilitiesResponse](src/models/public-api-datasource-responsibilities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Datasources(request: DataSources.PostApiV1DatasourcesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiCreateDatasourceResponse, DataSources.PostApiV1DatasourcesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.postApiV1Datasources({
    body: { configurationFileContents: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiCreateDatasourceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1Datasources({ body: { configurationFileContents: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateDatasourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateDatasourceRequestDto](src/models/public-api-create-datasource-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1Datasources(request)`

- **OnSuccess**: <code>[PublicApiCreateDatasourceResponse](src/models/public-api-create-datasource-response.ts)</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1Datasources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateDatasourceResponse, DataSources.PostApiV1DatasourcesError&gt;</code>, with `result.value` of type <code>[PublicApiCreateDatasourceResponse](src/models/public-api-create-datasource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesActionsTestConnection(request: DataSources.PostApiV1DatasourcesActionsTestConnectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, DataSources.PostApiV1DatasourcesActionsTestConnectionError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dataSources.postApiV1DatasourcesActionsTestConnection({
    body: { configurationFileContents: "some example string", runnerId: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesActionsTestConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesActionsTestConnection({
    body: { configurationFileContents: "some example string", runnerId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiTestConnectionRequestDto](src/models/public-api-test-connection-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesActionsTestConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesActionsTestConnectionError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesActionsTestConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DataSources.PostApiV1DatasourcesActionsTestConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesRoles(request: DataSources.PostApiV1DatasourcesRolesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiCreateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.postApiV1DatasourcesRoles({
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiCreateDatasourceRoleResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesRoles({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateDatasourceRoleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiDatasourceRoleRequestDto](src/models/public-api-datasource-role-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesRoles(request)`

- **OnSuccess**: <code>[PublicApiCreateDatasourceRoleResponse](src/models/public-api-create-datasource-role-response.ts)</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesRolesError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesError&gt;</code>, with `result.value` of type <code>[PublicApiCreateDatasourceRoleResponse](src/models/public-api-create-datasource-role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesRolesRoleId(request: DataSources.PostApiV1DatasourcesRolesRoleIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesRoleIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.postApiV1DatasourcesRolesRoleId({
    roleId: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiUpdateDatasourceRoleResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesRolesRoleIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesRolesRoleId({ roleId: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateDatasourceRoleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>roleId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiDatasourceRoleRequestDto](src/models/public-api-datasource-role-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesRolesRoleId(request)`

- **OnSuccess**: <code>[PublicApiUpdateDatasourceRoleResponse](src/models/public-api-update-datasource-role-response.ts)</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesRolesRoleIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesRolesRoleId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesRoleIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateDatasourceRoleResponse](src/models/public-api-update-datasource-role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesDatasourceId(request: DataSources.PostApiV1DatasourcesDatasourceIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateDatasourceResponse, DataSources.PostApiV1DatasourcesDatasourceIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.postApiV1DatasourcesDatasourceId({
    datasourceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PublicApiUpdateDatasourceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesDatasourceIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesDatasourceId({ datasourceId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateDatasourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateDatasourceRequestDto](src/models/public-api-update-datasource-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesDatasourceId(request)`

- **OnSuccess**: <code>[PublicApiUpdateDatasourceResponse](src/models/public-api-update-datasource-response.ts)</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesDatasourceIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesDatasourceId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateDatasourceResponse, DataSources.PostApiV1DatasourcesDatasourceIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateDatasourceResponse](src/models/public-api-update-datasource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request: DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasourceDiagnosticsWarehouseResponse, DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse({
    datasourceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse({ datasourceId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasourceDiagnosticsWarehouseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto](src/models/public-api-update-datasource-diagnostics-warehouse-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request)`

- **OnSuccess**: <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](src/models/public-api-datasource-diagnostics-warehouse-response.ts)</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasourceDiagnosticsWarehouseResponse, DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError&gt;</code>, with `result.value` of type <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](src/models/public-api-datasource-diagnostics-warehouse-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesDatasourceIdDiscover(request: DataSources.PostApiV1DatasourcesDatasourceIdDiscoverRequest, options?: RequestOptions): ApiPromise&lt;undefined, DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dataSources.postApiV1DatasourcesDatasourceIdDiscover({ datasourceId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesDatasourceIdDiscover({ datasourceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesDatasourceIdDiscover(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesDatasourceIdDiscover(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesDatasourceIdOnboardDatasets(request: DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest, options?: RequestOptions): ApiPromise&lt;undefined, DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dataSources.postApiV1DatasourcesDatasourceIdOnboardDatasets({
    datasourceId: "some example string",
    body: { discoveredDatasetIds: ["some example string"] },
  });
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesDatasourceIdOnboardDatasets({
    datasourceId: "some example string",
    body: { discoveredDatasetIds: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiOnboardDatasetsRequestDto](src/models/public-api-onboard-datasets-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesDatasourceIdOnboardDatasets(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesDatasourceIdOnboardDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasourcesDatasourceIdResponsibilities(request: DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise&lt;undefined, DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dataSources.postApiV1DatasourcesDatasourceIdResponsibilities({
    datasourceId: "some example string",
    body: { responsibilities: [{ roleId: "some example string", type: ResponsibilityTypeDto.User }] },
  });
} catch (err) {
  // TODO: Handle 'err' of type DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .postApiV1DatasourcesDatasourceIdResponsibilities({
    datasourceId: "some example string",
    body: { responsibilities: [{ roleId: "some example string", type: ResponsibilityTypeDto.User }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateDatasourceResponsibilitiesRequestDto](src/models/public-api-update-datasource-responsibilities-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.postApiV1DatasourcesDatasourceIdResponsibilities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.postApiV1DatasourcesDatasourceIdResponsibilities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataStandards

> Source: [DataStandards](src/resources/data-standards.ts)

<details>
<summary><code>deleteApiV1DataStandardsDataStandardId(request: DataStandards.DeleteApiV1DataStandardsDataStandardIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteDataStandardResponse, DataStandards.DeleteApiV1DataStandardsDataStandardIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.deleteApiV1DataStandardsDataStandardId({
    dataStandardId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDeleteDataStandardResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.DeleteApiV1DataStandardsDataStandardIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .deleteApiV1DataStandardsDataStandardId({ dataStandardId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteDataStandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataStandardId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.deleteApiV1DataStandardsDataStandardId(request)`

- **OnSuccess**: <code>[PublicApiDeleteDataStandardResponse](src/models/public-api-delete-data-standard-response.ts)</code>
- **OnError**: throws <code>[DataStandards.DeleteApiV1DataStandardsDataStandardIdError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.deleteApiV1DataStandardsDataStandardId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteDataStandardResponse, DataStandards.DeleteApiV1DataStandardsDataStandardIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteDataStandardResponse](src/models/public-api-delete-data-standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DataStandards(request?: DataStandards.GetApiV1DataStandardsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListDataStandardsResponse, DataStandards.GetApiV1DataStandardsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.getApiV1DataStandards();
  // TODO: Handle 'response' of type PublicApiListDataStandardsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.GetApiV1DataStandardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards.getApiV1DataStandards().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListDataStandardsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>[DataStandardSortFieldDto](src/models/data-standard-sort-field-dto.ts)</code> | - |
| <code>status?</code> | <code>[DataStandardStatusDto](src/models/data-standard-status-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.getApiV1DataStandards(request)`

- **OnSuccess**: <code>[PublicApiListDataStandardsResponse](src/models/public-api-list-data-standards-response.ts)</code>
- **OnError**: throws <code>[DataStandards.GetApiV1DataStandardsError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.getApiV1DataStandards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListDataStandardsResponse, DataStandards.GetApiV1DataStandardsError&gt;</code>, with `result.value` of type <code>[PublicApiListDataStandardsResponse](src/models/public-api-list-data-standards-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DataStandardsActivity(options?: RequestOptions): ApiPromise&lt;PublicApiDataStandardsActivityResponse, DataStandards.GetApiV1DataStandardsActivityError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.getApiV1DataStandardsActivity();
  // TODO: Handle 'response' of type PublicApiDataStandardsActivityResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.GetApiV1DataStandardsActivityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards.getApiV1DataStandardsActivity().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDataStandardsActivityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.getApiV1DataStandardsActivity()`

- **OnSuccess**: <code>[PublicApiDataStandardsActivityResponse](src/models/public-api-data-standards-activity-response.ts)</code>
- **OnError**: throws <code>[DataStandards.GetApiV1DataStandardsActivityError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.getApiV1DataStandardsActivity().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDataStandardsActivityResponse, DataStandards.GetApiV1DataStandardsActivityError&gt;</code>, with `result.value` of type <code>[PublicApiDataStandardsActivityResponse](src/models/public-api-data-standards-activity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DataStandardsDataStandardId(request: DataStandards.GetApiV1DataStandardsDataStandardIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiGetDataStandardResponse, DataStandards.GetApiV1DataStandardsDataStandardIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.getApiV1DataStandardsDataStandardId({
    dataStandardId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiGetDataStandardResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.GetApiV1DataStandardsDataStandardIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .getApiV1DataStandardsDataStandardId({ dataStandardId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGetDataStandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataStandardId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.getApiV1DataStandardsDataStandardId(request)`

- **OnSuccess**: <code>[PublicApiGetDataStandardResponse](src/models/public-api-get-data-standard-response.ts)</code>
- **OnError**: throws <code>[DataStandards.GetApiV1DataStandardsDataStandardIdError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.getApiV1DataStandardsDataStandardId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGetDataStandardResponse, DataStandards.GetApiV1DataStandardsDataStandardIdError&gt;</code>, with `result.value` of type <code>[PublicApiGetDataStandardResponse](src/models/public-api-get-data-standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DataStandardsDataStandardIdChecks(request: DataStandards.GetApiV1DataStandardsDataStandardIdChecksRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListDataStandardChecksResponse, DataStandards.GetApiV1DataStandardsDataStandardIdChecksError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.getApiV1DataStandardsDataStandardIdChecks({
    dataStandardId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiListDataStandardChecksResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.GetApiV1DataStandardsDataStandardIdChecksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .getApiV1DataStandardsDataStandardIdChecks({ dataStandardId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListDataStandardChecksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataStandardId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.getApiV1DataStandardsDataStandardIdChecks(request)`

- **OnSuccess**: <code>[PublicApiListDataStandardChecksResponse](src/models/public-api-list-data-standard-checks-response.ts)</code>
- **OnError**: throws <code>[DataStandards.GetApiV1DataStandardsDataStandardIdChecksError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.getApiV1DataStandardsDataStandardIdChecks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListDataStandardChecksResponse, DataStandards.GetApiV1DataStandardsDataStandardIdChecksError&gt;</code>, with `result.value` of type <code>[PublicApiListDataStandardChecksResponse](src/models/public-api-list-data-standard-checks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DataStandardsDataStandardIdDatasets(request: DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListDataStandardDatasetsResponse, DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.getApiV1DataStandardsDataStandardIdDatasets({
    dataStandardId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiListDataStandardDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .getApiV1DataStandardsDataStandardIdDatasets({ dataStandardId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListDataStandardDatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataStandardId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.getApiV1DataStandardsDataStandardIdDatasets(request)`

- **OnSuccess**: <code>[PublicApiListDataStandardDatasetsResponse](src/models/public-api-list-data-standard-datasets-response.ts)</code>
- **OnError**: throws <code>[DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.getApiV1DataStandardsDataStandardIdDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListDataStandardDatasetsResponse, DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError&gt;</code>, with `result.value` of type <code>[PublicApiListDataStandardDatasetsResponse](src/models/public-api-list-data-standard-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DataStandards(request: DataStandards.PostApiV1DataStandardsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiCreateDataStandardResponse, DataStandards.PostApiV1DataStandardsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.postApiV1DataStandards({
    body: {
      contents: "some example string",
      name: "some example string",
      owners: [{ type: DatasetOwnerTypeDto.User }],
      status: DataStandardStatusDto.Draft,
    },
  });
  // TODO: Handle 'response' of type PublicApiCreateDataStandardResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.PostApiV1DataStandardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .postApiV1DataStandards({
    body: {
      contents: "some example string",
      name: "some example string",
      owners: [{ type: DatasetOwnerTypeDto.User }],
      status: DataStandardStatusDto.Draft,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateDataStandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiDataStandardRequestDto](src/models/public-api-data-standard-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.postApiV1DataStandards(request)`

- **OnSuccess**: <code>[PublicApiCreateDataStandardResponse](src/models/public-api-create-data-standard-response.ts)</code>
- **OnError**: throws <code>[DataStandards.PostApiV1DataStandardsError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.postApiV1DataStandards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateDataStandardResponse, DataStandards.PostApiV1DataStandardsError&gt;</code>, with `result.value` of type <code>[PublicApiCreateDataStandardResponse](src/models/public-api-create-data-standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DataStandardsActionsExecute(request: DataStandards.PostApiV1DataStandardsActionsExecuteRequest, options?: RequestOptions): ApiPromise&lt;PublicApiExecuteDataStandardsResponse, DataStandards.PostApiV1DataStandardsActionsExecuteError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.postApiV1DataStandardsActionsExecute({
    body: { datasetId: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiExecuteDataStandardsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.PostApiV1DataStandardsActionsExecuteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .postApiV1DataStandardsActionsExecute({ body: { datasetId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiExecuteDataStandardsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiExecuteDataStandardsRequestDto](src/models/public-api-execute-data-standards-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.postApiV1DataStandardsActionsExecute(request)`

- **OnSuccess**: <code>[PublicApiExecuteDataStandardsResponse](src/models/public-api-execute-data-standards-response.ts)</code>
- **OnError**: throws <code>[DataStandards.PostApiV1DataStandardsActionsExecuteError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.postApiV1DataStandardsActionsExecute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiExecuteDataStandardsResponse, DataStandards.PostApiV1DataStandardsActionsExecuteError&gt;</code>, with `result.value` of type <code>[PublicApiExecuteDataStandardsResponse](src/models/public-api-execute-data-standards-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DataStandardsActionsPreviewScope(request: DataStandards.PostApiV1DataStandardsActionsPreviewScopeRequest, options?: RequestOptions): ApiPromise&lt;PublicApiPreviewDataStandardScopeResponse, DataStandards.PostApiV1DataStandardsActionsPreviewScopeError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.postApiV1DataStandardsActionsPreviewScope({ body: {} });
  // TODO: Handle 'response' of type PublicApiPreviewDataStandardScopeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.PostApiV1DataStandardsActionsPreviewScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .postApiV1DataStandardsActionsPreviewScope({ body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiPreviewDataStandardScopeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiPreviewDataStandardScopeRequestDto](src/models/public-api-preview-data-standard-scope-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.postApiV1DataStandardsActionsPreviewScope(request)`

- **OnSuccess**: <code>[PublicApiPreviewDataStandardScopeResponse](src/models/public-api-preview-data-standard-scope-response.ts)</code>
- **OnError**: throws <code>[DataStandards.PostApiV1DataStandardsActionsPreviewScopeError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.postApiV1DataStandardsActionsPreviewScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiPreviewDataStandardScopeResponse, DataStandards.PostApiV1DataStandardsActionsPreviewScopeError&gt;</code>, with `result.value` of type <code>[PublicApiPreviewDataStandardScopeResponse](src/models/public-api-preview-data-standard-scope-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DataStandardsActionsTest(request: DataStandards.PostApiV1DataStandardsActionsTestRequest, options?: RequestOptions): ApiPromise&lt;PublicApiTestDataStandardResponse, DataStandards.PostApiV1DataStandardsActionsTestError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.postApiV1DataStandardsActionsTest({
    body: { contents: "some example string", datasetId: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiTestDataStandardResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.PostApiV1DataStandardsActionsTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .postApiV1DataStandardsActionsTest({
    body: { contents: "some example string", datasetId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiTestDataStandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiTestDataStandardRequestDto](src/models/public-api-test-data-standard-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.postApiV1DataStandardsActionsTest(request)`

- **OnSuccess**: <code>[PublicApiTestDataStandardResponse](src/models/public-api-test-data-standard-response.ts)</code>
- **OnError**: throws <code>[DataStandards.PostApiV1DataStandardsActionsTestError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.postApiV1DataStandardsActionsTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiTestDataStandardResponse, DataStandards.PostApiV1DataStandardsActionsTestError&gt;</code>, with `result.value` of type <code>[PublicApiTestDataStandardResponse](src/models/public-api-test-data-standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DataStandardsDataStandardId(request: DataStandards.PostApiV1DataStandardsDataStandardIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateDataStandardResponse, DataStandards.PostApiV1DataStandardsDataStandardIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.postApiV1DataStandardsDataStandardId({
    dataStandardId: "some example string",
    body: {
      contents: "some example string",
      name: "some example string",
      owners: [{ type: DatasetOwnerTypeDto.User }],
      status: DataStandardStatusDto.Draft,
    },
  });
  // TODO: Handle 'response' of type PublicApiUpdateDataStandardResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.PostApiV1DataStandardsDataStandardIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .postApiV1DataStandardsDataStandardId({
    dataStandardId: "some example string",
    body: {
      contents: "some example string",
      name: "some example string",
      owners: [{ type: DatasetOwnerTypeDto.User }],
      status: DataStandardStatusDto.Draft,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateDataStandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataStandardId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiDataStandardRequestDto](src/models/public-api-data-standard-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.postApiV1DataStandardsDataStandardId(request)`

- **OnSuccess**: <code>[PublicApiUpdateDataStandardResponse](src/models/public-api-update-data-standard-response.ts)</code>
- **OnError**: throws <code>[DataStandards.PostApiV1DataStandardsDataStandardIdError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.postApiV1DataStandardsDataStandardId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateDataStandardResponse, DataStandards.PostApiV1DataStandardsDataStandardIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateDataStandardResponse](src/models/public-api-update-data-standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DataStandardsDataStandardIdActionsEvaluateScope(request: DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest, options?: RequestOptions): ApiPromise&lt;PublicApiEvaluateDataStandardScopeResponse, DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.postApiV1DataStandardsDataStandardIdActionsEvaluateScope({
    dataStandardId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiEvaluateDataStandardScopeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .postApiV1DataStandardsDataStandardIdActionsEvaluateScope({ dataStandardId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiEvaluateDataStandardScopeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataStandardId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.postApiV1DataStandardsDataStandardIdActionsEvaluateScope(request)`

- **OnSuccess**: <code>[PublicApiEvaluateDataStandardScopeResponse](src/models/public-api-evaluate-data-standard-scope-response.ts)</code>
- **OnError**: throws <code>[DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.postApiV1DataStandardsDataStandardIdActionsEvaluateScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiEvaluateDataStandardScopeResponse, DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError&gt;</code>, with `result.value` of type <code>[PublicApiEvaluateDataStandardScopeResponse](src/models/public-api-evaluate-data-standard-scope-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DataStandardsDataStandardIdActionsStatus(request: DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateDataStandardStatusResponse, DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataStandards.postApiV1DataStandardsDataStandardIdActionsStatus({
    dataStandardId: "some example string",
    body: { status: DataStandardStatusDto.Draft },
  });
  // TODO: Handle 'response' of type PublicApiUpdateDataStandardStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataStandards
  .postApiV1DataStandardsDataStandardIdActionsStatus({
    dataStandardId: "some example string",
    body: { status: DataStandardStatusDto.Draft },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateDataStandardStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataStandardId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateDataStandardStatusRequestDto](src/models/public-api-update-data-standard-status-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataStandards.postApiV1DataStandardsDataStandardIdActionsStatus(request)`

- **OnSuccess**: <code>[PublicApiUpdateDataStandardStatusResponse](src/models/public-api-update-data-standard-status-response.ts)</code>
- **OnError**: throws <code>[DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError](src/resources/data-standards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataStandards.postApiV1DataStandardsDataStandardIdActionsStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateDataStandardStatusResponse, DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateDataStandardStatusResponse](src/models/public-api-update-data-standard-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Datasets

> Source: [Datasets](src/resources/datasets.ts)

<details>
<summary><code>deleteApiV1DatasetsRolesRoleId(request: Datasets.DeleteApiV1DatasetsRolesRoleIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsRolesRoleIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.deleteApiV1DatasetsRolesRoleId({ roleId: "some example string" });
  // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.DeleteApiV1DatasetsRolesRoleIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .deleteApiV1DatasetsRolesRoleId({ roleId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteDatasetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>roleId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.deleteApiV1DatasetsRolesRoleId(request)`

- **OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: throws <code>[Datasets.DeleteApiV1DatasetsRolesRoleIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.deleteApiV1DatasetsRolesRoleId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsRolesRoleIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiV1DatasetsDatasetId(request: Datasets.DeleteApiV1DatasetsDatasetIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.deleteApiV1DatasetsDatasetId({ datasetId: "some example string" });
  // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.DeleteApiV1DatasetsDatasetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .deleteApiV1DatasetsDatasetId({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteDatasetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.deleteApiV1DatasetsDatasetId(request)`

- **OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: throws <code>[Datasets.DeleteApiV1DatasetsDatasetIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.deleteApiV1DatasetsDatasetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request: Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteDatasetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>monitorId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request)`

- **OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: throws <code>[Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request: Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteDatasetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>monitorId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request)`

- **OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: throws <code>[Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteDatasetResponse](src/models/public-api-delete-dataset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Datasets(request?: Datasets.GetApiV1DatasetsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasetsResponse, Datasets.GetApiV1DatasetsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1Datasets();
  // TODO: Handle 'response' of type PublicApiDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets.getApiV1Datasets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceName?</code> | <code>string</code> | - |
| <code>from?</code> | <code>Date</code> (date-time) | - |
| <code>page?</code> | <code>number</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1Datasets(request)`

- **OnSuccess**: <code>[PublicApiDatasetsResponse](src/models/public-api-datasets-response.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1Datasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasetsResponse, Datasets.GetApiV1DatasetsError&gt;</code>, with `result.value` of type <code>[PublicApiDatasetsResponse](src/models/public-api-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(request: Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest, options?: RequestOptions): ApiPromise&lt;DatasetsContentDto, Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName({
    datasetQualifiedName: "some example string",
  });
  // TODO: Handle 'response' of type DatasetsContentDto
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName({ datasetQualifiedName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetsContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetQualifiedName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(request)`

- **OnSuccess**: <code>[DatasetsContentDto](src/models/datasets-content-dto.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetsContentDto, Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError&gt;</code>, with `result.value` of type <code>[DatasetsContentDto](src/models/datasets-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsRoles(request?: Datasets.GetApiV1DatasetsRolesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasetRolesResponse, Datasets.GetApiV1DatasetsRolesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsRoles();
  // TODO: Handle 'response' of type PublicApiDatasetRolesResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets.getApiV1DatasetsRoles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasetRolesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsRoles(request)`

- **OnSuccess**: <code>[PublicApiDatasetRolesResponse](src/models/public-api-dataset-roles-response.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsRolesError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasetRolesResponse, Datasets.GetApiV1DatasetsRolesError&gt;</code>, with `result.value` of type <code>[PublicApiDatasetRolesResponse](src/models/public-api-dataset-roles-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsDatasetId(request: Datasets.GetApiV1DatasetsDatasetIdRequest, options?: RequestOptions): ApiPromise&lt;DatasetsContentDto, Datasets.GetApiV1DatasetsDatasetIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsDatasetId({ datasetId: "some example string" });
  // TODO: Handle 'response' of type DatasetsContentDto
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsDatasetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsDatasetId({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetsContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsDatasetId(request)`

- **OnSuccess**: <code>[DatasetsContentDto](src/models/datasets-content-dto.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsDatasetIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsDatasetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetsContentDto, Datasets.GetApiV1DatasetsDatasetIdError&gt;</code>, with `result.value` of type <code>[DatasetsContentDto](src/models/datasets-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsDatasetIdColumns(request: Datasets.GetApiV1DatasetsDatasetIdColumnsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListDatasetColumnsResponse, Datasets.GetApiV1DatasetsDatasetIdColumnsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsDatasetIdColumns({
    datasetId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiListDatasetColumnsResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsDatasetIdColumnsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsDatasetIdColumns({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListDatasetColumnsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsDatasetIdColumns(request)`

- **OnSuccess**: <code>[PublicApiListDatasetColumnsResponse](src/models/public-api-list-dataset-columns-response.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsDatasetIdColumnsError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsDatasetIdColumns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListDatasetColumnsResponse, Datasets.GetApiV1DatasetsDatasetIdColumnsError&gt;</code>, with `result.value` of type <code>[PublicApiListDatasetColumnsResponse](src/models/public-api-list-dataset-columns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsDatasetIdComputeWarehouse(request: Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseRequest, options?: RequestOptions): ApiPromise&lt;DatasetComputeWarehouseConfigurationDto, Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsDatasetIdComputeWarehouse({
    datasetId: "some example string",
  });
  // TODO: Handle 'response' of type DatasetComputeWarehouseConfigurationDto
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsDatasetIdComputeWarehouse({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetComputeWarehouseConfigurationDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsDatasetIdComputeWarehouse(request)`

- **OnSuccess**: <code>[DatasetComputeWarehouseConfigurationDto](src/models/dataset-compute-warehouse-configuration-dto.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsDatasetIdComputeWarehouse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetComputeWarehouseConfigurationDto, Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError&gt;</code>, with `result.value` of type <code>[DatasetComputeWarehouseConfigurationDto](src/models/dataset-compute-warehouse-configuration-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsDatasetIdDiagnosticsWarehouse(request: Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasetDiagnosticsWarehouseResponse, Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsDatasetIdDiagnosticsWarehouse({
    datasetId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDatasetDiagnosticsWarehouseResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsDatasetIdDiagnosticsWarehouse({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasetDiagnosticsWarehouseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsDatasetIdDiagnosticsWarehouse(request)`

- **OnSuccess**: <code>[PublicApiDatasetDiagnosticsWarehouseResponse](src/models/public-api-dataset-diagnostics-warehouse-response.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsDatasetIdDiagnosticsWarehouse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasetDiagnosticsWarehouseResponse, Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError&gt;</code>, with `result.value` of type <code>[PublicApiDatasetDiagnosticsWarehouseResponse](src/models/public-api-dataset-diagnostics-warehouse-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsDatasetIdMetricMonitoring(request: Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasetMetricMonitoringResponse, Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsDatasetIdMetricMonitoring({
    datasetId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDatasetMetricMonitoringResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsDatasetIdMetricMonitoring({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasetMetricMonitoringResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsDatasetIdMetricMonitoring(request)`

- **OnSuccess**: <code>[PublicApiDatasetMetricMonitoringResponse](src/models/public-api-dataset-metric-monitoring-response.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsDatasetIdMetricMonitoring(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasetMetricMonitoringResponse, Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError&gt;</code>, with `result.value` of type <code>[PublicApiDatasetMetricMonitoringResponse](src/models/public-api-dataset-metric-monitoring-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsDatasetIdProfiling(request: Datasets.GetApiV1DatasetsDatasetIdProfilingRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasetProfilingResponse, Datasets.GetApiV1DatasetsDatasetIdProfilingError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsDatasetIdProfiling({
    datasetId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDatasetProfilingResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsDatasetIdProfilingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsDatasetIdProfiling({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasetProfilingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsDatasetIdProfiling(request)`

- **OnSuccess**: <code>[PublicApiDatasetProfilingResponse](src/models/public-api-dataset-profiling-response.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsDatasetIdProfilingError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsDatasetIdProfiling(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasetProfilingResponse, Datasets.GetApiV1DatasetsDatasetIdProfilingError&gt;</code>, with `result.value` of type <code>[PublicApiDatasetProfilingResponse](src/models/public-api-dataset-profiling-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1DatasetsDatasetIdResponsibilities(request: Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDatasetResponsibilitiesResponse, Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.getApiV1DatasetsDatasetIdResponsibilities({
    datasetId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDatasetResponsibilitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .getApiV1DatasetsDatasetIdResponsibilities({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDatasetResponsibilitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.getApiV1DatasetsDatasetIdResponsibilities(request)`

- **OnSuccess**: <code>[PublicApiDatasetResponsibilitiesResponse](src/models/public-api-dataset-responsibilities-response.ts)</code>
- **OnError**: throws <code>[Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.getApiV1DatasetsDatasetIdResponsibilities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDatasetResponsibilitiesResponse, Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError&gt;</code>, with `result.value` of type <code>[PublicApiDatasetResponsibilitiesResponse](src/models/public-api-dataset-responsibilities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsRoles(request: Datasets.PostApiV1DatasetsRolesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.postApiV1DatasetsRoles({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsRoles({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateDatasetRoleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiDatasetRoleRequestDto](src/models/public-api-dataset-role-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsRoles(request)`

- **OnSuccess**: <code>[PublicApiUpdateDatasetRoleResponse](src/models/public-api-update-dataset-role-response.ts)</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsRolesError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateDatasetRoleResponse](src/models/public-api-update-dataset-role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsRolesRoleId(request: Datasets.PostApiV1DatasetsRolesRoleIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesRoleIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.postApiV1DatasetsRolesRoleId({
    roleId: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsRolesRoleIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsRolesRoleId({ roleId: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateDatasetRoleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>roleId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiDatasetRoleRequestDto](src/models/public-api-dataset-role-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsRolesRoleId(request)`

- **OnSuccess**: <code>[PublicApiUpdateDatasetRoleResponse](src/models/public-api-update-dataset-role-response.ts)</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsRolesRoleIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsRolesRoleId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesRoleIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateDatasetRoleResponse](src/models/public-api-update-dataset-role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetId(request: Datasets.PostApiV1DatasetsDatasetIdRequest, options?: RequestOptions): ApiPromise&lt;DatasetsContentDto, Datasets.PostApiV1DatasetsDatasetIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.postApiV1DatasetsDatasetId({
    datasetId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type DatasetsContentDto
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetId({ datasetId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetsContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateDatasetDto](src/models/public-api-update-dataset-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetId(request)`

- **OnSuccess**: <code>[DatasetsContentDto](src/models/datasets-content-dto.ts)</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetsContentDto, Datasets.PostApiV1DatasetsDatasetIdError&gt;</code>, with `result.value` of type <code>[DatasetsContentDto](src/models/datasets-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetIdColumnAttributes(request: Datasets.PostApiV1DatasetsDatasetIdColumnAttributesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasets.postApiV1DatasetsDatasetIdColumnAttributes({
    datasetId: "some example string",
    body: { columnAttributes: {} },
  });
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetIdColumnAttributes({
    datasetId: "some example string",
    body: { columnAttributes: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiSetColumnAttributesRequestDto](src/models/public-api-set-column-attributes-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetIdColumnAttributes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetIdColumnAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetIdColumnMetricMonitors(request: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateColumnMetricMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.postApiV1DatasetsDatasetIdColumnMetricMonitors({
    datasetId: "some example string",
    body: {
      columnMetricMonitorConfiguration: {
        configuration: {},
        metricType: ColumnMonitorMetricTypeDto.MissingPercentage,
      },
      columnName: "some example string",
    },
  });
  // TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetIdColumnMetricMonitors({
    datasetId: "some example string",
    body: {
      columnMetricMonitorConfiguration: {
        configuration: {},
        metricType: ColumnMonitorMetricTypeDto.MissingPercentage,
      },
      columnName: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateColumnMetricMonitorResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiCreateColumnMetricMonitorRequestDto](src/models/public-api-create-column-metric-monitor-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetIdColumnMetricMonitors(request)`

- **OnSuccess**: <code>[PublicApiUpdateColumnMetricMonitorResponse](src/models/public-api-update-column-metric-monitor-response.ts)</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetIdColumnMetricMonitors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateColumnMetricMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateColumnMetricMonitorResponse](src/models/public-api-update-column-metric-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateColumnMetricMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
    body: { configuration: {} },
  });
  // TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
    body: { configuration: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateColumnMetricMonitorResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>monitorId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateColumnMetricMonitorRequestDto](src/models/public-api-update-column-metric-monitor-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request)`

- **OnSuccess**: <code>[PublicApiUpdateColumnMetricMonitorResponse](src/models/public-api-update-column-metric-monitor-response.ts)</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateColumnMetricMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateColumnMetricMonitorResponse](src/models/public-api-update-column-metric-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetIdCustomSqlMonitors(request: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiCreateCustomSqlMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.postApiV1DatasetsDatasetIdCustomSqlMonitors({
    datasetId: "some example string",
    body: {
      configuration: { resultMetric: "some example string", sqlQuery: "some example string" },
      monitorName: "some example string",
    },
  });
  // TODO: Handle 'response' of type PublicApiCreateCustomSqlMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetIdCustomSqlMonitors({
    datasetId: "some example string",
    body: {
      configuration: { resultMetric: "some example string", sqlQuery: "some example string" },
      monitorName: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateCustomSqlMonitorResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiCreateCustomSqlMonitorRequestDto](src/models/public-api-create-custom-sql-monitor-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetIdCustomSqlMonitors(request)`

- **OnSuccess**: <code>[PublicApiCreateCustomSqlMonitorResponse](src/models/public-api-create-custom-sql-monitor-response.ts)</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetIdCustomSqlMonitors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateCustomSqlMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError&gt;</code>, with `result.value` of type <code>[PublicApiCreateCustomSqlMonitorResponse](src/models/public-api-create-custom-sql-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateCustomSqlMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasets.postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PublicApiUpdateCustomSqlMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId({
    datasetId: "some example string",
    monitorId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateCustomSqlMonitorResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>monitorId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateCustomSqlMonitorRequestDto](src/models/public-api-update-custom-sql-monitor-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request)`

- **OnSuccess**: <code>[PublicApiUpdateCustomSqlMonitorResponse](src/models/public-api-update-custom-sql-monitor-response.ts)</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateCustomSqlMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateCustomSqlMonitorResponse](src/models/public-api-update-custom-sql-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(request: Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasets.postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection({
    datasetId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection({ datasetId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DatasetsDatasetIdResponsibilities(request: Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasets.postApiV1DatasetsDatasetIdResponsibilities({
    datasetId: "some example string",
    body: { responsibilities: [{ roleId: "some example string", type: ResponsibilityTypeDto.User }] },
  });
} catch (err) {
  // TODO: Handle 'err' of type Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .postApiV1DatasetsDatasetIdResponsibilities({
    datasetId: "some example string",
    body: { responsibilities: [{ roleId: "some example string", type: ResponsibilityTypeDto.User }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateDatasetResponsibilitiesRequestDto](src/models/public-api-update-dataset-responsibilities-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.postApiV1DatasetsDatasetIdResponsibilities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.postApiV1DatasetsDatasetIdResponsibilities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DiscoveredDatasets

> Source: [DiscoveredDatasets](src/resources/discovered-datasets.ts)

<details>
<summary><code>getApiV1DiscoveredDatasets(request?: DiscoveredDatasets.GetApiV1DiscoveredDatasetsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDiscoveredDatasetsResponse, DiscoveredDatasets.GetApiV1DiscoveredDatasetsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discoveredDatasets.getApiV1DiscoveredDatasets();
  // TODO: Handle 'response' of type PublicApiDiscoveredDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type DiscoveredDatasets.GetApiV1DiscoveredDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discoveredDatasets.getApiV1DiscoveredDatasets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDiscoveredDatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasourceId?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discoveredDatasets.getApiV1DiscoveredDatasets(request)`

- **OnSuccess**: <code>[PublicApiDiscoveredDatasetsResponse](src/models/public-api-discovered-datasets-response.ts)</code>
- **OnError**: throws <code>[DiscoveredDatasets.GetApiV1DiscoveredDatasetsError](src/resources/discovered-datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discoveredDatasets.getApiV1DiscoveredDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDiscoveredDatasetsResponse, DiscoveredDatasets.GetApiV1DiscoveredDatasetsError&gt;</code>, with `result.value` of type <code>[PublicApiDiscoveredDatasetsResponse](src/models/public-api-discovered-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Incidents

> Source: [Incidents](src/resources/incidents.ts)

<details>
<summary><code>getApiV1Incidents(request?: Incidents.GetApiV1IncidentsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiIncidentsResponse, Incidents.GetApiV1IncidentsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.getApiV1Incidents();
  // TODO: Handle 'response' of type PublicApiIncidentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Incidents.GetApiV1IncidentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents.getApiV1Incidents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiIncidentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasetId?</code> | <code>string</code> | - |
| <code>from?</code> | <code>Date</code> (date-time) | - |
| <code>incidentIds?</code> | <code>string</code> | - |
| <code>leadId?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>severity?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |
| <code>status?</code> | <code>string</code> | - |
| <code>to?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.getApiV1Incidents(request)`

- **OnSuccess**: <code>[PublicApiIncidentsResponse](src/models/public-api-incidents-response.ts)</code>
- **OnError**: throws <code>[Incidents.GetApiV1IncidentsError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.getApiV1Incidents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiIncidentsResponse, Incidents.GetApiV1IncidentsError&gt;</code>, with `result.value` of type <code>[PublicApiIncidentsResponse](src/models/public-api-incidents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1IncidentsIncidentIdRcaReport(request: Incidents.GetApiV1IncidentsIncidentIdRcaReportRequest, options?: RequestOptions): ApiPromise&lt;PublicApiRcaReportContentDto, Incidents.GetApiV1IncidentsIncidentIdRcaReportError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.getApiV1IncidentsIncidentIdRcaReport({
    incidentId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiRcaReportContentDto
} catch (err) {
  // TODO: Handle 'err' of type Incidents.GetApiV1IncidentsIncidentIdRcaReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents
  .getApiV1IncidentsIncidentIdRcaReport({ incidentId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiRcaReportContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incidentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.getApiV1IncidentsIncidentIdRcaReport(request)`

- **OnSuccess**: <code>[PublicApiRcaReportContentDto](src/models/public-api-rca-report-content-dto.ts)</code>
- **OnError**: throws <code>[Incidents.GetApiV1IncidentsIncidentIdRcaReportError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.getApiV1IncidentsIncidentIdRcaReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiRcaReportContentDto, Incidents.GetApiV1IncidentsIncidentIdRcaReportError&gt;</code>, with `result.value` of type <code>[PublicApiRcaReportContentDto](src/models/public-api-rca-report-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Incidents(request: Incidents.PostApiV1IncidentsRequest, options?: RequestOptions): ApiPromise&lt;IncidentContentDto, Incidents.PostApiV1IncidentsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.postApiV1Incidents({
    body: {
      description: "some example string",
      monitorResultIds: ["some example string"],
      severity: IncidentSeverityDto.Minor,
      title: "some example string",
    },
  });
  // TODO: Handle 'response' of type IncidentContentDto
} catch (err) {
  // TODO: Handle 'err' of type Incidents.PostApiV1IncidentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents
  .postApiV1Incidents({
    body: {
      description: "some example string",
      monitorResultIds: ["some example string"],
      severity: IncidentSeverityDto.Minor,
      title: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncidentContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateIncidentDto](src/models/public-api-create-incident-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.postApiV1Incidents(request)`

- **OnSuccess**: <code>[IncidentContentDto](src/models/incident-content-dto.ts)</code>
- **OnError**: throws <code>[Incidents.PostApiV1IncidentsError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.postApiV1Incidents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncidentContentDto, Incidents.PostApiV1IncidentsError&gt;</code>, with `result.value` of type <code>[IncidentContentDto](src/models/incident-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1IncidentsIncidentId(request: Incidents.PostApiV1IncidentsIncidentIdRequest, options?: RequestOptions): ApiPromise&lt;IncidentContentDto, Incidents.PostApiV1IncidentsIncidentIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.postApiV1IncidentsIncidentId({
    incidentId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type IncidentContentDto
} catch (err) {
  // TODO: Handle 'err' of type Incidents.PostApiV1IncidentsIncidentIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents
  .postApiV1IncidentsIncidentId({ incidentId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncidentContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incidentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateIncidentDto](src/models/public-api-update-incident-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.postApiV1IncidentsIncidentId(request)`

- **OnSuccess**: <code>[IncidentContentDto](src/models/incident-content-dto.ts)</code>
- **OnError**: throws <code>[Incidents.PostApiV1IncidentsIncidentIdError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.postApiV1IncidentsIncidentId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncidentContentDto, Incidents.PostApiV1IncidentsIncidentIdError&gt;</code>, with `result.value` of type <code>[IncidentContentDto](src/models/incident-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1IncidentsIncidentIdRcaReport(request: Incidents.PostApiV1IncidentsIncidentIdRcaReportRequest, options?: RequestOptions): ApiPromise&lt;PublicApiRcaReportContentDto, Incidents.PostApiV1IncidentsIncidentIdRcaReportError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.postApiV1IncidentsIncidentIdRcaReport({
    incidentId: "some example string",
    body: {
      agent: { name: "some example string" },
      rootCauseAnalysis: {
        confidence: RcaConfidenceDto.High,
        generatedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        status: RcaReportStatusDto.Completed,
        summary: "some example string",
      },
    },
  });
  // TODO: Handle 'response' of type PublicApiRcaReportContentDto
} catch (err) {
  // TODO: Handle 'err' of type Incidents.PostApiV1IncidentsIncidentIdRcaReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents
  .postApiV1IncidentsIncidentIdRcaReport({
    incidentId: "some example string",
    body: {
      agent: { name: "some example string" },
      rootCauseAnalysis: {
        confidence: RcaConfidenceDto.High,
        generatedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        status: RcaReportStatusDto.Completed,
        summary: "some example string",
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiRcaReportContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incidentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiRcaReportDto](src/models/public-api-rca-report-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.postApiV1IncidentsIncidentIdRcaReport(request)`

- **OnSuccess**: <code>[PublicApiRcaReportContentDto](src/models/public-api-rca-report-content-dto.ts)</code>
- **OnError**: throws <code>[Incidents.PostApiV1IncidentsIncidentIdRcaReportError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.postApiV1IncidentsIncidentIdRcaReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiRcaReportContentDto, Incidents.PostApiV1IncidentsIncidentIdRcaReportError&gt;</code>, with `result.value` of type <code>[PublicApiRcaReportContentDto](src/models/public-api-rca-report-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Licensing

> Source: [Licensing](src/resources/licensing.ts)

<details>
<summary><code>getApiV1LicensingSpuConsumption(request?: Licensing.GetApiV1LicensingSpuConsumptionRequest, options?: RequestOptions): ApiPromise&lt;PublicApiSpuConsumptionResponse, Licensing.GetApiV1LicensingSpuConsumptionError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.licensing.getApiV1LicensingSpuConsumption();
  // TODO: Handle 'response' of type PublicApiSpuConsumptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Licensing.GetApiV1LicensingSpuConsumptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.licensing.getApiV1LicensingSpuConsumption().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiSpuConsumptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from?</code> | <code>Date</code> (date-time) | - |
| <code>to?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.licensing.getApiV1LicensingSpuConsumption(request)`

- **OnSuccess**: <code>[PublicApiSpuConsumptionResponse](src/models/public-api-spu-consumption-response.ts)</code>
- **OnError**: throws <code>[Licensing.GetApiV1LicensingSpuConsumptionError](src/resources/licensing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.licensing.getApiV1LicensingSpuConsumption(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiSpuConsumptionResponse, Licensing.GetApiV1LicensingSpuConsumptionError&gt;</code>, with `result.value` of type <code>[PublicApiSpuConsumptionResponse](src/models/public-api-spu-consumption-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NotificationRules

> Source: [NotificationRules](src/resources/notification-rules.ts)

<details>
<summary><code>deleteApiV1NotificationRulesNotificationRuleId(request: NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteNotificationRuleResponse, NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationRules.deleteApiV1NotificationRulesNotificationRuleId({
    notificationRuleId: "some example string",
  });
  // TODO: Handle 'response' of type PublicApiDeleteNotificationRuleResponse
} catch (err) {
  // TODO: Handle 'err' of type NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationRules
  .deleteApiV1NotificationRulesNotificationRuleId({ notificationRuleId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteNotificationRuleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationRuleId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationRules.deleteApiV1NotificationRulesNotificationRuleId(request)`

- **OnSuccess**: <code>[PublicApiDeleteNotificationRuleResponse](src/models/public-api-delete-notification-rule-response.ts)</code>
- **OnError**: throws <code>[NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError](src/resources/notification-rules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationRules.deleteApiV1NotificationRulesNotificationRuleId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteNotificationRuleResponse, NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteNotificationRuleResponse](src/models/public-api-delete-notification-rule-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1NotificationRules(request?: NotificationRules.GetApiV1NotificationRulesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListNotificationRulesResponse, NotificationRules.GetApiV1NotificationRulesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationRules.getApiV1NotificationRules();
  // TODO: Handle 'response' of type PublicApiListNotificationRulesResponse
} catch (err) {
  // TODO: Handle 'err' of type NotificationRules.GetApiV1NotificationRulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationRules.getApiV1NotificationRules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListNotificationRulesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationRules.getApiV1NotificationRules(request)`

- **OnSuccess**: <code>[PublicApiListNotificationRulesResponse](src/models/public-api-list-notification-rules-response.ts)</code>
- **OnError**: throws <code>[NotificationRules.GetApiV1NotificationRulesError](src/resources/notification-rules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationRules.getApiV1NotificationRules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListNotificationRulesResponse, NotificationRules.GetApiV1NotificationRulesError&gt;</code>, with `result.value` of type <code>[PublicApiListNotificationRulesResponse](src/models/public-api-list-notification-rules-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1NotificationRules(request: NotificationRules.PostApiV1NotificationRulesRequest, options?: RequestOptions): ApiPromise&lt;PublicApiNotificationRuleDto, NotificationRules.PostApiV1NotificationRulesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationRules.postApiV1NotificationRules({
    body: {
      name: "some example string",
      recipients: [
        {
          triggers: [{ type: NotificationTriggerTypeDto.TestResultLevel }],
          type: NotificationRecipientTypeDto.Email,
        },
      ],
      ruleType: PublicApiRuleTypeDto.Check,
    },
  });
  // TODO: Handle 'response' of type PublicApiNotificationRuleDto
} catch (err) {
  // TODO: Handle 'err' of type NotificationRules.PostApiV1NotificationRulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationRules
  .postApiV1NotificationRules({
    body: {
      name: "some example string",
      recipients: [
        {
          triggers: [{ type: NotificationTriggerTypeDto.TestResultLevel }],
          type: NotificationRecipientTypeDto.Email,
        },
      ],
      ruleType: PublicApiRuleTypeDto.Check,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiNotificationRuleDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiNotificationRuleRequestDto](src/models/public-api-notification-rule-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationRules.postApiV1NotificationRules(request)`

- **OnSuccess**: <code>[PublicApiNotificationRuleDto](src/models/public-api-notification-rule-dto.ts)</code>
- **OnError**: throws <code>[NotificationRules.PostApiV1NotificationRulesError](src/resources/notification-rules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationRules.postApiV1NotificationRules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiNotificationRuleDto, NotificationRules.PostApiV1NotificationRulesError&gt;</code>, with `result.value` of type <code>[PublicApiNotificationRuleDto](src/models/public-api-notification-rule-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1NotificationRulesNotificationRuleId(request: NotificationRules.PostApiV1NotificationRulesNotificationRuleIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiNotificationRuleDto, NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationRules.postApiV1NotificationRulesNotificationRuleId({
    notificationRuleId: "some example string",
    body: {
      name: "some example string",
      recipients: [
        {
          triggers: [{ type: NotificationTriggerTypeDto.TestResultLevel }],
          type: NotificationRecipientTypeDto.Email,
        },
      ],
      ruleType: PublicApiRuleTypeDto.Check,
    },
  });
  // TODO: Handle 'response' of type PublicApiNotificationRuleDto
} catch (err) {
  // TODO: Handle 'err' of type NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationRules
  .postApiV1NotificationRulesNotificationRuleId({
    notificationRuleId: "some example string",
    body: {
      name: "some example string",
      recipients: [
        {
          triggers: [{ type: NotificationTriggerTypeDto.TestResultLevel }],
          type: NotificationRecipientTypeDto.Email,
        },
      ],
      ruleType: PublicApiRuleTypeDto.Check,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiNotificationRuleDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationRuleId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiNotificationRuleRequestDto](src/models/public-api-notification-rule-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationRules.postApiV1NotificationRulesNotificationRuleId(request)`

- **OnSuccess**: <code>[PublicApiNotificationRuleDto](src/models/public-api-notification-rule-dto.ts)</code>
- **OnError**: throws <code>[NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError](src/resources/notification-rules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationRules.postApiV1NotificationRulesNotificationRuleId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiNotificationRuleDto, NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError&gt;</code>, with `result.value` of type <code>[PublicApiNotificationRuleDto](src/models/public-api-notification-rule-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Runners

> Source: [Runners](src/resources/runners.ts)

<details>
<summary><code>deleteApiV1RunnersRunnerId(request: Runners.DeleteApiV1RunnersRunnerIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Runners.DeleteApiV1RunnersRunnerIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runners.deleteApiV1RunnersRunnerId({ runnerId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Runners.DeleteApiV1RunnersRunnerIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runners
  .deleteApiV1RunnersRunnerId({ runnerId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runnerId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runners.deleteApiV1RunnersRunnerId(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Runners.DeleteApiV1RunnersRunnerIdError](src/resources/runners.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runners.deleteApiV1RunnersRunnerId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Runners.DeleteApiV1RunnersRunnerIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Runners(request?: Runners.GetApiV1RunnersRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListRunnersResponse, Runners.GetApiV1RunnersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runners.getApiV1Runners();
  // TODO: Handle 'response' of type PublicApiListRunnersResponse
} catch (err) {
  // TODO: Handle 'err' of type Runners.GetApiV1RunnersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runners.getApiV1Runners().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListRunnersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runners.getApiV1Runners(request)`

- **OnSuccess**: <code>[PublicApiListRunnersResponse](src/models/public-api-list-runners-response.ts)</code>
- **OnError**: throws <code>[Runners.GetApiV1RunnersError](src/resources/runners.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runners.getApiV1Runners(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListRunnersResponse, Runners.GetApiV1RunnersError&gt;</code>, with `result.value` of type <code>[PublicApiListRunnersResponse](src/models/public-api-list-runners-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1RunnersRunnerId(request: Runners.GetApiV1RunnersRunnerIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiGetRunnerResponse, Runners.GetApiV1RunnersRunnerIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runners.getApiV1RunnersRunnerId({ runnerId: "some example string" });
  // TODO: Handle 'response' of type PublicApiGetRunnerResponse
} catch (err) {
  // TODO: Handle 'err' of type Runners.GetApiV1RunnersRunnerIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runners
  .getApiV1RunnersRunnerId({ runnerId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGetRunnerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runnerId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runners.getApiV1RunnersRunnerId(request)`

- **OnSuccess**: <code>[PublicApiGetRunnerResponse](src/models/public-api-get-runner-response.ts)</code>
- **OnError**: throws <code>[Runners.GetApiV1RunnersRunnerIdError](src/resources/runners.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runners.getApiV1RunnersRunnerId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGetRunnerResponse, Runners.GetApiV1RunnersRunnerIdError&gt;</code>, with `result.value` of type <code>[PublicApiGetRunnerResponse](src/models/public-api-get-runner-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Runners(options?: RequestOptions): ApiPromise&lt;PublicApiCreateRunnerResponse, Runners.PostApiV1RunnersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runners.postApiV1Runners();
  // TODO: Handle 'response' of type PublicApiCreateRunnerResponse
} catch (err) {
  // TODO: Handle 'err' of type Runners.PostApiV1RunnersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runners.postApiV1Runners().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateRunnerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runners.postApiV1Runners()`

- **OnSuccess**: <code>[PublicApiCreateRunnerResponse](src/models/public-api-create-runner-response.ts)</code>
- **OnError**: throws <code>[Runners.PostApiV1RunnersError](src/resources/runners.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runners.postApiV1Runners().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateRunnerResponse, Runners.PostApiV1RunnersError&gt;</code>, with `result.value` of type <code>[PublicApiCreateRunnerResponse](src/models/public-api-create-runner-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Scans

> Source: [Scans](src/resources/scans.ts)

<details>
<summary><code>deleteApiV1ScansScanId(request: Scans.DeleteApiV1ScansScanIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scans.DeleteApiV1ScansScanIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scans.deleteApiV1ScansScanId({ scanId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Scans.DeleteApiV1ScansScanIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans.deleteApiV1ScansScanId({ scanId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scanId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.deleteApiV1ScansScanId(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scans.DeleteApiV1ScansScanIdError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.deleteApiV1ScansScanId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scans.DeleteApiV1ScansScanIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ScansScanId(request: Scans.GetApiV1ScansScanIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiScanStatusResponse, Scans.GetApiV1ScansScanIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scans.getApiV1ScansScanId({ scanId: "some example string" });
  // TODO: Handle 'response' of type PublicApiScanStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Scans.GetApiV1ScansScanIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans.getApiV1ScansScanId({ scanId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiScanStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scanId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.getApiV1ScansScanId(request)`

- **OnSuccess**: <code>[PublicApiScanStatusResponse](src/models/public-api-scan-status-response.ts)</code>
- **OnError**: throws <code>[Scans.GetApiV1ScansScanIdError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.getApiV1ScansScanId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiScanStatusResponse, Scans.GetApiV1ScansScanIdError&gt;</code>, with `result.value` of type <code>[PublicApiScanStatusResponse](src/models/public-api-scan-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ScansScanIdLogs(request: Scans.GetApiV1ScansScanIdLogsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiScanLogsResponse, Scans.GetApiV1ScansScanIdLogsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scans.getApiV1ScansScanIdLogs({ scanId: "some example string" });
  // TODO: Handle 'response' of type PublicApiScanLogsResponse
} catch (err) {
  // TODO: Handle 'err' of type Scans.GetApiV1ScansScanIdLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans.getApiV1ScansScanIdLogs({ scanId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiScanLogsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scanId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.getApiV1ScansScanIdLogs(request)`

- **OnSuccess**: <code>[PublicApiScanLogsResponse](src/models/public-api-scan-logs-response.ts)</code>
- **OnError**: throws <code>[Scans.GetApiV1ScansScanIdLogsError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.getApiV1ScansScanIdLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiScanLogsResponse, Scans.GetApiV1ScansScanIdLogsError&gt;</code>, with `result.value` of type <code>[PublicApiScanLogsResponse](src/models/public-api-scan-logs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Secrets

> Source: [Secrets](src/resources/secrets.ts)

<details>
<summary><code>deleteApiV1SecretsSecretId(request: Secrets.DeleteApiV1SecretsSecretIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiDeleteSecretResponse, Secrets.DeleteApiV1SecretsSecretIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.secrets.deleteApiV1SecretsSecretId({ secretId: "some example string" });
  // TODO: Handle 'response' of type PublicApiDeleteSecretResponse
} catch (err) {
  // TODO: Handle 'err' of type Secrets.DeleteApiV1SecretsSecretIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.secrets
  .deleteApiV1SecretsSecretId({ secretId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiDeleteSecretResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secretId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.secrets.deleteApiV1SecretsSecretId(request)`

- **OnSuccess**: <code>[PublicApiDeleteSecretResponse](src/models/public-api-delete-secret-response.ts)</code>
- **OnError**: throws <code>[Secrets.DeleteApiV1SecretsSecretIdError](src/resources/secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.secrets.deleteApiV1SecretsSecretId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiDeleteSecretResponse, Secrets.DeleteApiV1SecretsSecretIdError&gt;</code>, with `result.value` of type <code>[PublicApiDeleteSecretResponse](src/models/public-api-delete-secret-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Secrets(request?: Secrets.GetApiV1SecretsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiListSecretsResponse, Secrets.GetApiV1SecretsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.secrets.getApiV1Secrets();
  // TODO: Handle 'response' of type PublicApiListSecretsResponse
} catch (err) {
  // TODO: Handle 'err' of type Secrets.GetApiV1SecretsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.secrets.getApiV1Secrets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiListSecretsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.secrets.getApiV1Secrets(request)`

- **OnSuccess**: <code>[PublicApiListSecretsResponse](src/models/public-api-list-secrets-response.ts)</code>
- **OnError**: throws <code>[Secrets.GetApiV1SecretsError](src/resources/secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.secrets.getApiV1Secrets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiListSecretsResponse, Secrets.GetApiV1SecretsError&gt;</code>, with `result.value` of type <code>[PublicApiListSecretsResponse](src/models/public-api-list-secrets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1SecretsPublicKey(options?: RequestOptions): ApiPromise&lt;PublicApiGetEncryptionKeyResponse, Secrets.GetApiV1SecretsPublicKeyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.secrets.getApiV1SecretsPublicKey();
  // TODO: Handle 'response' of type PublicApiGetEncryptionKeyResponse
} catch (err) {
  // TODO: Handle 'err' of type Secrets.GetApiV1SecretsPublicKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.secrets.getApiV1SecretsPublicKey().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiGetEncryptionKeyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.secrets.getApiV1SecretsPublicKey()`

- **OnSuccess**: <code>[PublicApiGetEncryptionKeyResponse](src/models/public-api-get-encryption-key-response.ts)</code>
- **OnError**: throws <code>[Secrets.GetApiV1SecretsPublicKeyError](src/resources/secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.secrets.getApiV1SecretsPublicKey().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiGetEncryptionKeyResponse, Secrets.GetApiV1SecretsPublicKeyError&gt;</code>, with `result.value` of type <code>[PublicApiGetEncryptionKeyResponse](src/models/public-api-get-encryption-key-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Secrets(request: Secrets.PostApiV1SecretsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiCreateSecretResponse, Secrets.PostApiV1SecretsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.secrets.postApiV1Secrets({
    body: {
      encryptedValue: "some example string",
      encryptionKey: "some example string",
      name: "some example string",
    },
  });
  // TODO: Handle 'response' of type PublicApiCreateSecretResponse
} catch (err) {
  // TODO: Handle 'err' of type Secrets.PostApiV1SecretsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.secrets
  .postApiV1Secrets({
    body: {
      encryptedValue: "some example string",
      encryptionKey: "some example string",
      name: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiCreateSecretResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateSecretRequestDto](src/models/public-api-create-secret-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.secrets.postApiV1Secrets(request)`

- **OnSuccess**: <code>[PublicApiCreateSecretResponse](src/models/public-api-create-secret-response.ts)</code>
- **OnError**: throws <code>[Secrets.PostApiV1SecretsError](src/resources/secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.secrets.postApiV1Secrets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiCreateSecretResponse, Secrets.PostApiV1SecretsError&gt;</code>, with `result.value` of type <code>[PublicApiCreateSecretResponse](src/models/public-api-create-secret-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1SecretsSecretId(request: Secrets.PostApiV1SecretsSecretIdRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUpdateSecretResponse, Secrets.PostApiV1SecretsSecretIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.secrets.postApiV1SecretsSecretId({
    secretId: "some example string",
    body: { encryptedValue: "some example string", encryptionKey: "some example string" },
  });
  // TODO: Handle 'response' of type PublicApiUpdateSecretResponse
} catch (err) {
  // TODO: Handle 'err' of type Secrets.PostApiV1SecretsSecretIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.secrets
  .postApiV1SecretsSecretId({
    secretId: "some example string",
    body: { encryptedValue: "some example string", encryptionKey: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUpdateSecretResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secretId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateSecretRequestDto](src/models/public-api-update-secret-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.secrets.postApiV1SecretsSecretId(request)`

- **OnSuccess**: <code>[PublicApiUpdateSecretResponse](src/models/public-api-update-secret-response.ts)</code>
- **OnError**: throws <code>[Secrets.PostApiV1SecretsSecretIdError](src/resources/secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.secrets.postApiV1SecretsSecretId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUpdateSecretResponse, Secrets.PostApiV1SecretsSecretIdError&gt;</code>, with `result.value` of type <code>[PublicApiUpdateSecretResponse](src/models/public-api-update-secret-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>deleteApiV1UserGroupsUserGroupId(request: Users.DeleteApiV1UserGroupsUserGroupIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Users.DeleteApiV1UserGroupsUserGroupIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.deleteApiV1UserGroupsUserGroupId({
    userGroupId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Users.DeleteApiV1UserGroupsUserGroupIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .deleteApiV1UserGroupsUserGroupId({ userGroupId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGroupId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deleteApiV1UserGroupsUserGroupId(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Users.DeleteApiV1UserGroupsUserGroupIdError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.deleteApiV1UserGroupsUserGroupId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Users.DeleteApiV1UserGroupsUserGroupIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1UserGroups(request?: Users.GetApiV1UserGroupsRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUserGroupsResponse, Users.GetApiV1UserGroupsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getApiV1UserGroups();
  // TODO: Handle 'response' of type PublicApiUserGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.GetApiV1UserGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getApiV1UserGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUserGroupsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getApiV1UserGroups(request)`

- **OnSuccess**: <code>[PublicApiUserGroupsResponse](src/models/public-api-user-groups-response.ts)</code>
- **OnError**: throws <code>[Users.GetApiV1UserGroupsError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getApiV1UserGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUserGroupsResponse, Users.GetApiV1UserGroupsError&gt;</code>, with `result.value` of type <code>[PublicApiUserGroupsResponse](src/models/public-api-user-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1UserGroupsUserGroupId(request: Users.GetApiV1UserGroupsUserGroupIdRequest, options?: RequestOptions): ApiPromise&lt;UserGroupContentDto, Users.GetApiV1UserGroupsUserGroupIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getApiV1UserGroupsUserGroupId({ userGroupId: "some example string" });
  // TODO: Handle 'response' of type UserGroupContentDto
} catch (err) {
  // TODO: Handle 'err' of type Users.GetApiV1UserGroupsUserGroupIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getApiV1UserGroupsUserGroupId({ userGroupId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserGroupContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGroupId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getApiV1UserGroupsUserGroupId(request)`

- **OnSuccess**: <code>[UserGroupContentDto](src/models/user-group-content-dto.ts)</code>
- **OnError**: throws <code>[Users.GetApiV1UserGroupsUserGroupIdError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getApiV1UserGroupsUserGroupId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserGroupContentDto, Users.GetApiV1UserGroupsUserGroupIdError&gt;</code>, with `result.value` of type <code>[UserGroupContentDto](src/models/user-group-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Users(request?: Users.GetApiV1UsersRequest, options?: RequestOptions): ApiPromise&lt;PublicApiUsersResponse, Users.GetApiV1UsersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getApiV1Users();
  // TODO: Handle 'response' of type PublicApiUsersResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.GetApiV1UsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getApiV1Users().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiUsersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getApiV1Users(request)`

- **OnSuccess**: <code>[PublicApiUsersResponse](src/models/public-api-users-response.ts)</code>
- **OnError**: throws <code>[Users.GetApiV1UsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getApiV1Users(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiUsersResponse, Users.GetApiV1UsersError&gt;</code>, with `result.value` of type <code>[PublicApiUsersResponse](src/models/public-api-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1UserGroups(request: Users.PostApiV1UserGroupsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.PostApiV1UserGroupsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.postApiV1UserGroups({ body: { name: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type Users.PostApiV1UserGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .postApiV1UserGroups({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateUserGroupRequestDto](src/models/public-api-create-user-group-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.postApiV1UserGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.PostApiV1UserGroupsError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.postApiV1UserGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.PostApiV1UserGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1UserGroupsUserGroupId(request: Users.PostApiV1UserGroupsUserGroupIdRequest, options?: RequestOptions): ApiPromise&lt;UserGroupContentDto, Users.PostApiV1UserGroupsUserGroupIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.postApiV1UserGroupsUserGroupId({
    userGroupId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type UserGroupContentDto
} catch (err) {
  // TODO: Handle 'err' of type Users.PostApiV1UserGroupsUserGroupIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .postApiV1UserGroupsUserGroupId({ userGroupId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserGroupContentDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGroupId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PublicApiUpdateUserGroupRequestDto](src/models/public-api-update-user-group-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.postApiV1UserGroupsUserGroupId(request)`

- **OnSuccess**: <code>[UserGroupContentDto](src/models/user-group-content-dto.ts)</code>
- **OnError**: throws <code>[Users.PostApiV1UserGroupsUserGroupIdError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.postApiV1UserGroupsUserGroupId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserGroupContentDto, Users.PostApiV1UserGroupsUserGroupIdError&gt;</code>, with `result.value` of type <code>[UserGroupContentDto](src/models/user-group-content-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Users(request: Users.PostApiV1UsersRequest, options?: RequestOptions): ApiPromise&lt;PublicApiInviteUserResponse, Users.PostApiV1UsersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.postApiV1Users({ body: { emails: ["some example string"] } });
  // TODO: Handle 'response' of type PublicApiInviteUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.PostApiV1UsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.postApiV1Users({ body: { emails: ["some example string"] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiInviteUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiInviteUserRequestDto](src/models/public-api-invite-user-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.postApiV1Users(request)`

- **OnSuccess**: <code>[PublicApiInviteUserResponse](src/models/public-api-invite-user-response.ts)</code>
- **OnError**: throws <code>[Users.PostApiV1UsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.postApiV1Users(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiInviteUserResponse, Users.PostApiV1UsersError&gt;</code>, with `result.value` of type <code>[PublicApiInviteUserResponse](src/models/public-api-invite-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1UsersUserIdDisable(request: Users.PostApiV1UsersUserIdDisableRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Users.PostApiV1UsersUserIdDisableError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.postApiV1UsersUserIdDisable({ userId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Users.PostApiV1UsersUserIdDisableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .postApiV1UsersUserIdDisable({ userId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.postApiV1UsersUserIdDisable(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Users.PostApiV1UsersUserIdDisableError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.postApiV1UsersUserIdDisable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Users.PostApiV1UsersUserIdDisableError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Utility

> Source: [Utility](src/resources/utility.ts)

<details>
<summary><code>getApiV1TestLogin(options?: RequestOptions): ApiPromise&lt;PublicApiTestLoginResponse, Utility.GetApiV1TestLoginError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.utility.getApiV1TestLogin();
  // TODO: Handle 'response' of type PublicApiTestLoginResponse
} catch (err) {
  // TODO: Handle 'err' of type Utility.GetApiV1TestLoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.utility.getApiV1TestLogin().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicApiTestLoginResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.utility.getApiV1TestLogin()`

- **OnSuccess**: <code>[PublicApiTestLoginResponse](src/models/public-api-test-login-response.ts)</code>
- **OnError**: throws <code>[Utility.GetApiV1TestLoginError](src/resources/utility.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.utility.getApiV1TestLogin().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicApiTestLoginResponse, Utility.GetApiV1TestLoginError&gt;</code>, with `result.value` of type <code>[PublicApiTestLoginResponse](src/models/public-api-test-login-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SodaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

