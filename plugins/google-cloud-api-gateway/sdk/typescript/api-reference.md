# Reference

> Source: [GoogleCloudApiGatewayClient](src/client.ts)

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsCreate(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ApiConfig in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>apiConfigId?</code> | <code>string</code> | Required. Identifier to assign to the API Config. Must be unique within scope of the parent resource. |
| <code>body</code> | <code>[ApigatewayApiConfig](src/models/apigateway-api-config.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsCreate(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single ApiConfig.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>configsId</code> | <code>string</code> | Resource name segment (configsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsDelete(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayApiConfig, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single ApiConfig.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayApiConfig
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayApiConfig
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>configsId</code> | <code>string</code> | Resource name segment (configsId). |
| <code>view?</code> | <code>[View](src/models/view.ts)</code> | Optional. Specifies which fields of the API Config are returned in the response. Defaults to `BASIC` view. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsGet(request)`

- **OnSuccess**: <code>[ApigatewayApiConfig](src/models/apigateway-api-config.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayApiConfig, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError&gt;</code>, with `result.value` of type <code>[ApigatewayApiConfig](src/models/apigateway-api-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsGetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayPolicy
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>configsId</code> | <code>string</code> | Resource name segment (configsId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsGetIamPolicy(request)`

- **OnSuccess**: <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayListApiConfigsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists ApiConfigs in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsList({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayListApiConfigsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsList({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayListApiConfigsResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter. |
| <code>orderBy?</code> | <code>string</code> | Optional. Order by parameters. |
| <code>pageSize?</code> | <code>number</code> | Optional. Page size. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsList(request)`

- **OnSuccess**: <code>[ApigatewayListApiConfigsResponse](src/models/apigateway-list-api-configs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayListApiConfigsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError&gt;</code>, with `result.value` of type <code>[ApigatewayListApiConfigsResponse](src/models/apigateway-list-api-configs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsPatch(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single ApiConfig.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>configsId</code> | <code>string</code> | Resource name segment (configsId). |
| <code>updateMask?</code> | <code>string</code> | Optional. Field mask is used to specify the fields to be overwritten in the ApiConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The request fails if `update_mask` is missing or empty. |
| <code>body</code> | <code>[ApigatewayApiConfig](src/models/apigateway-api-config.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsPatch(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsSetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayPolicy
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>configsId</code> | <code>string</code> | Resource name segment (configsId). |
| <code>body</code> | <code>[ApigatewaySetIamPolicyRequest](src/models/apigateway-set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsSetIamPolicy(request)`

- **OnSuccess**: <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisConfigsTestIamPermissions(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisConfigsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayTestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisConfigsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    configsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayTestIamPermissionsResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>configsId</code> | <code>string</code> | Resource name segment (configsId). |
| <code>body</code> | <code>[ApigatewayTestIamPermissionsRequest](src/models/apigateway-test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisConfigsTestIamPermissions(request)`

- **OnSuccess**: <code>[ApigatewayTestIamPermissionsResponse](src/models/apigateway-test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisConfigsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[ApigatewayTestIamPermissionsResponse](src/models/apigateway-test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisCreate(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Api in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apiId?</code> | <code>string</code> | Required. Identifier to assign to the API. Must be unique within scope of the parent resource. |
| <code>body</code> | <code>[ApigatewayApi](src/models/apigateway-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisCreate(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Api.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisDelete(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayApi, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single Api.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisGet({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayApi
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisGet({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayApi
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisGet(request)`

- **OnSuccess**: <code>[ApigatewayApi](src/models/apigateway-api.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayApi, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError&gt;</code>, with `result.value` of type <code>[ApigatewayApi](src/models/apigateway-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisGetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayPolicy
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisGetIamPolicy(request)`

- **OnSuccess**: <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError&gt;</code>, with `result.value` of type <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayListApisResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Apis in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayListApisResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayListApisResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter. |
| <code>orderBy?</code> | <code>string</code> | Optional. Order by parameters. |
| <code>pageSize?</code> | <code>number</code> | Optional. Page size. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisList(request)`

- **OnSuccess**: <code>[ApigatewayListApisResponse](src/models/apigateway-list-apis-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayListApisResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError&gt;</code>, with `result.value` of type <code>[ApigatewayListApisResponse](src/models/apigateway-list-apis-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisPatch(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single Api.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>updateMask?</code> | <code>string</code> | Optional. Field mask is used to specify the fields to be overwritten in the Api resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The request fails if `update_mask` is missing or empty. |
| <code>body</code> | <code>[ApigatewayApi](src/models/apigateway-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisPatch(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisSetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayPolicy
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>body</code> | <code>[ApigatewaySetIamPolicyRequest](src/models/apigateway-set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisSetIamPolicy(request)`

- **OnSuccess**: <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError&gt;</code>, with `result.value` of type <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsApisTestIamPermissions(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsApisTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayTestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsApisTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    apisId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayTestIamPermissionsResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>apisId</code> | <code>string</code> | Resource name segment (apisId). |
| <code>body</code> | <code>[ApigatewayTestIamPermissionsRequest](src/models/apigateway-test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsApisTestIamPermissions(request)`

- **OnSuccess**: <code>[ApigatewayTestIamPermissionsResponse](src/models/apigateway-test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsApisTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[ApigatewayTestIamPermissionsResponse](src/models/apigateway-test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysCreate(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Gateway in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>gatewayId?</code> | <code>string</code> | Required. Identifier to assign to the Gateway. Must be unique within scope of the parent resource. |
| <code>body</code> | <code>[ApigatewayGateway](src/models/apigateway-gateway.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysCreate(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>gatewaysId</code> | <code>string</code> | Resource name segment (gatewaysId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysDelete(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayGateway, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single Gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysGet({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayGateway
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysGet({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayGateway
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>gatewaysId</code> | <code>string</code> | Resource name segment (gatewaysId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysGet(request)`

- **OnSuccess**: <code>[ApigatewayGateway](src/models/apigateway-gateway.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayGateway, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError&gt;</code>, with `result.value` of type <code>[ApigatewayGateway](src/models/apigateway-gateway.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysGetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayPolicy
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>gatewaysId</code> | <code>string</code> | Resource name segment (gatewaysId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysGetIamPolicy(request)`

- **OnSuccess**: <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError&gt;</code>, with `result.value` of type <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayListGatewaysResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Gateways in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayListGatewaysResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayListGatewaysResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter. |
| <code>orderBy?</code> | <code>string</code> | Optional. Order by parameters. |
| <code>pageSize?</code> | <code>number</code> | Optional. Page size. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysList(request)`

- **OnSuccess**: <code>[ApigatewayListGatewaysResponse](src/models/apigateway-list-gateways-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayListGatewaysResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError&gt;</code>, with `result.value` of type <code>[ApigatewayListGatewaysResponse](src/models/apigateway-list-gateways-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysPatch(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single Gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>gatewaysId</code> | <code>string</code> | Resource name segment (gatewaysId). |
| <code>updateMask?</code> | <code>string</code> | Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The request fails if `update_mask` is missing or empty. |
| <code>body</code> | <code>[ApigatewayGateway](src/models/apigateway-gateway.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysPatch(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysSetIamPolicy(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayPolicy
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>gatewaysId</code> | <code>string</code> | Resource name segment (gatewaysId). |
| <code>body</code> | <code>[ApigatewaySetIamPolicyRequest](src/models/apigateway-set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysSetIamPolicy(request)`

- **OnSuccess**: <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayPolicy, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError&gt;</code>, with `result.value` of type <code>[ApigatewayPolicy](src/models/apigateway-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGatewaysTestIamPermissions(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGatewaysTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ApigatewayTestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGatewaysTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    gatewaysId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayTestIamPermissionsResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>gatewaysId</code> | <code>string</code> | Resource name segment (gatewaysId). |
| <code>body</code> | <code>[ApigatewayTestIamPermissionsRequest](src/models/apigateway-test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGatewaysTestIamPermissions(request)`

- **OnSuccess**: <code>[ApigatewayTestIamPermissionsResponse](src/models/apigateway-test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGatewaysTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayTestIamPermissionsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[ApigatewayTestIamPermissionsResponse](src/models/apigateway-test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayLocation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayLocation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsGet({ projectsId: "some example string", locationsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayLocation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsGet(request)`

- **OnSuccess**: <code>[ApigatewayLocation](src/models/apigateway-location.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayLocation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError&gt;</code>, with `result.value` of type <code>[ApigatewayLocation](src/models/apigateway-location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayListLocationsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ApigatewayListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsList({ projectsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayListLocationsResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>extraLocationTypes?</code> | <code>string[]</code> | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| <code>filter?</code> | <code>string</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of results to return. If not set, the service selects a default. |
| <code>pageToken?</code> | <code>string</code> | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsList(request)`

- **OnSuccess**: <code>[ApigatewayListLocationsResponse](src/models/apigateway-list-locations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayListLocationsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError&gt;</code>, with `result.value` of type <code>[ApigatewayListLocationsResponse](src/models/apigateway-list-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsOperationsCancel(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  })
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsOperationsDelete(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsOperationsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsOperationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsOperationsGet(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayOperation
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsOperationsGet(request)`

- **OnSuccess**: <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError&gt;</code>, with `result.value` of type <code>[ApigatewayOperation](src/models/apigateway-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apigatewayProjectsLocationsOperationsList(request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise&lt;ApigatewayListOperationsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apigatewayProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ApigatewayListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .apigatewayProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApigatewayListOperationsResponse
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | The standard list filter. |
| <code>pageSize?</code> | <code>number</code> | The standard list page size. |
| <code>pageToken?</code> | <code>string</code> | The standard list page token. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apigatewayProjectsLocationsOperationsList(request)`

- **OnSuccess**: <code>[ApigatewayListOperationsResponse](src/models/apigateway-list-operations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apigatewayProjectsLocationsOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApigatewayListOperationsResponse, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError&gt;</code>, with `result.value` of type <code>[ApigatewayListOperationsResponse](src/models/apigateway-list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudApiGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

