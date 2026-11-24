# Reference

> Source: [GoogleCloudDataprocClient](src/client.ts)

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateRequest, options?: RequestOptions): ApiPromise&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new autoscaling policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AutoscalingPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutoscalingPolicy
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
| <code>body</code> | <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesCreate(request)`

- **OnSuccess**: <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError&gt;</code>, with `result.value` of type <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
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
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetRequest, options?: RequestOptions): ApiPromise&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves autoscaling policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
  });
  // TODO: Handle 'response' of type AutoscalingPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutoscalingPolicy
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
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesGet(request)`

- **OnSuccess**: <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError&gt;</code>, with `result.value` of type <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListRequest, options?: RequestOptions): ApiPromise&lt;ListAutoscalingPoliciesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists autoscaling policies in the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAutoscalingPoliciesResponse
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
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token, returned by a previous call, to request the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesList(request)`

- **OnSuccess**: <code>[ListAutoscalingPoliciesResponse](src/models/list-autoscaling-policies-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAutoscalingPoliciesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError&gt;</code>, with `result.value` of type <code>[ListAutoscalingPoliciesResponse](src/models/list-autoscaling-policies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsAutoscalingPoliciesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest, options?: RequestOptions): ApiPromise&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsAutoscalingPoliciesUpdate({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AutoscalingPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsAutoscalingPoliciesUpdate({
    projectsId: "some example string",
    locationsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutoscalingPolicy
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
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsAutoscalingPoliciesUpdate(request)`

- **OnSuccess**: <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsAutoscalingPoliciesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError&gt;</code>, with `result.value` of type <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesAnalyze(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze a Batch for possible recommendations and insights.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesAnalyze({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesAnalyze({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>body</code> | <code>[AnalyzeBatchRequest](src/models/analyze-batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesAnalyze(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesAnalyze(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a batch workload that executes asynchronously.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>batchId?</code> | <code>string</code> | Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/. |
| <code>requestId?</code> | <code>string</code> | Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequests with the same request_id, the second request is ignored and the operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| <code>body</code> | <code>[Batch](src/models/batch.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetRequest, options?: RequestOptions): ApiPromise&lt;Batch, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the batch workload resource representation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
  });
  // TODO: Handle 'response' of type Batch
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Batch
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesGet(request)`

- **OnSuccess**: <code>[Batch](src/models/batch.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Batch, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError&gt;</code>, with `result.value` of type <code>[Batch](src/models/batch.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListRequest, options?: RequestOptions): ApiPromise&lt;ListBatchesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists batch workloads.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListBatchesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBatchesResponse
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
| <code>filter?</code> | <code>string</code> | Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields: * batch_id * batch_uuid * state * create_time * labels * runtime_info.cohort_info.cohort e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01. state = RUNNING and labels.environment=production filters for batches in state in a RUNNING state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons. |
| <code>orderBy?</code> | <code>string</code> | Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesList(request)`

- **OnSuccess**: <code>[ListBatchesResponse](src/models/list-batches-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBatchesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError&gt;</code>, with `result.value` of type <code>[ListBatchesResponse](src/models/list-batches-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccess(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information corresponding to a single Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccess({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccess({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccess(request)`

- **OnSuccess**: <code>[AccessSparkApplicationResponse](src/models/access-spark-application-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationResponse](src/models/access-spark-application-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationEnvironmentInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain environment details for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationEnvironmentInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationEnvironmentInfoResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(request)`

- **OnSuccess**: <code>[AccessSparkApplicationEnvironmentInfoResponse](src/models/access-spark-application-environment-info-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationEnvironmentInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationEnvironmentInfoResponse](src/models/access-spark-application-environment-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessJob(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationJobResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark job for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessJob({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationJobResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessJob({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationJobResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>jobId?</code> | <code>string</code> | Required. Job ID to fetch data for. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessJob(request)`

- **OnSuccess**: <code>[AccessSparkApplicationJobResponse](src/models/access-spark-application-job-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationJobResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationJobResponse](src/models/access-spark-application-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationNativeBuildInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain build data for Native Job

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationNativeBuildInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationNativeBuildInfoResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(request)`

- **OnSuccess**: <code>[AccessSparkApplicationNativeBuildInfoResponse](src/models/access-spark-application-native-build-info-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationNativeBuildInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationNativeBuildInfoResponse](src/models/access-spark-application-native-build-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationNativeSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular Native SQL Query for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationNativeSqlQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationNativeSqlQueryResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>executionId?</code> | <code>string</code> | Required. Execution ID |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(request)`

- **OnSuccess**: <code>[AccessSparkApplicationNativeSqlQueryResponse](src/models/access-spark-application-native-sql-query-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationNativeSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationNativeSqlQueryResponse](src/models/access-spark-application-native-sql-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationSqlSparkPlanGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationSqlSparkPlanGraphResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationSqlSparkPlanGraphResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>executionId?</code> | <code>string</code> | Required. Execution ID |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(request)`

- **OnSuccess**: <code>[AccessSparkApplicationSqlSparkPlanGraphResponse](src/models/access-spark-application-sql-spark-plan-graph-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationSqlSparkPlanGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationSqlSparkPlanGraphResponse](src/models/access-spark-application-sql-spark-plan-graph-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular SQL Query for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationSqlQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationSqlQueryResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>details?</code> | <code>boolean</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| <code>executionId?</code> | <code>string</code> | Required. Execution ID |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>planDescription?</code> | <code>boolean</code> | Optional. Enables/ disables physical plan description on demand |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(request)`

- **OnSuccess**: <code>[AccessSparkApplicationSqlQueryResponse](src/models/access-spark-application-sql-query-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationSqlQueryResponse](src/models/access-spark-application-sql-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationStageAttemptResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempt for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationStageAttemptResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationStageAttemptResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>stageAttemptId?</code> | <code>number</code> | Required. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |
| <code>summaryMetricsMask?</code> | <code>string</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(request)`

- **OnSuccess**: <code>[AccessSparkApplicationStageAttemptResponse](src/models/access-spark-application-stage-attempt-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationStageAttemptResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationStageAttemptResponse](src/models/access-spark-application-stage-attempt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest, options?: RequestOptions): ApiPromise&lt;AccessSparkApplicationStageRddOperationGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSparkApplicationStageRddOperationGraphResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSparkApplicationStageRddOperationGraphResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(request)`

- **OnSuccess**: <code>[AccessSparkApplicationStageRddOperationGraphResponse](src/models/access-spark-application-stage-rdd-operation-graph-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSparkApplicationStageRddOperationGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError&gt;</code>, with `result.value` of type <code>[AccessSparkApplicationStageRddOperationGraphResponse](src/models/access-spark-application-stage-rdd-operation-graph-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest, options?: RequestOptions): ApiPromise&lt;ComputeTuningConfigResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns autotuning configuration for a specific query plan id and cohort id. Called by Spark during query planning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type ComputeTuningConfigResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ComputeTuningConfigResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>executionId?</code> | <code>string</code> | Required. Spark execution ID for the query. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>semanticQueryId?</code> | <code>string</code> | Required. Spark semantic query ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(request)`

- **OnSuccess**: <code>[ComputeTuningConfigResponse](src/models/compute-tuning-config-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ComputeTuningConfigResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError&gt;</code>, with `result.value` of type <code>[ComputeTuningConfigResponse](src/models/compute-tuning-config-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearch(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information and list of Spark Applications corresponding to a batch

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearch({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearch({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationsResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>applicationStatus?</code> | <code>[ApplicationStatus](src/models/application-status.ts)</code> | Optional. Search only applications in the chosen state. |
| <code>maxEndTime?</code> | <code>string</code> | Optional. Latest end timestamp to list. |
| <code>maxTime?</code> | <code>string</code> | Optional. Latest start timestamp to list. |
| <code>minEndTime?</code> | <code>string</code> | Optional. Earliest end timestamp to list. |
| <code>minTime?</code> | <code>string</code> | Optional. Earliest start timestamp to list. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSparkApplications call. Provide this token to retrieve the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearch(request)`

- **OnSuccess**: <code>[SearchSparkApplicationsResponse](src/models/search-spark-applications-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationsResponse](src/models/search-spark-applications-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationExecutorStageSummaryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain executor summary with respect to a spark stage attempt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationExecutorStageSummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationExecutorStageSummaryResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>stageAttemptId?</code> | <code>number</code> | Required. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(request)`

- **OnSuccess**: <code>[SearchSparkApplicationExecutorStageSummaryResponse](src/models/search-spark-application-executor-stage-summary-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationExecutorStageSummaryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationExecutorStageSummaryResponse](src/models/search-spark-application-executor-stage-summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to executors for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationExecutorsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationExecutorsResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>executorStatus?</code> | <code>[ExecutorStatus](src/models/executor-status.ts)</code> | Optional. Filter to select whether active/ dead or all executors should be selected. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(request)`

- **OnSuccess**: <code>[SearchSparkApplicationExecutorsResponse](src/models/search-spark-application-executors-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationExecutorsResponse](src/models/search-spark-application-executors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain list of spark jobs corresponding to a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationJobsResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>jobStatus?</code> | <code>[JobStatus2](src/models/job-status2.ts)</code> | Optional. List only jobs in the specific state. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSparkApplicationJobs call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(request)`

- **OnSuccess**: <code>[SearchSparkApplicationJobsResponse](src/models/search-spark-application-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationJobsResponse](src/models/search-spark-application-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationNativeSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native SQL Queries for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationNativeSqlQueriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationNativeSqlQueriesResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSparkApplicationNativeSqlQueries call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(request)`

- **OnSuccess**: <code>[SearchSparkApplicationNativeSqlQueriesResponse](src/models/search-spark-application-native-sql-queries-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationNativeSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationNativeSqlQueriesResponse](src/models/search-spark-application-native-sql-queries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to SQL Queries for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationSqlQueriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationSqlQueriesResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>details?</code> | <code>boolean</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>planDescription?</code> | <code>boolean</code> | Optional. Enables/ disables physical plan description on demand |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(request)`

- **OnSuccess**: <code>[SearchSparkApplicationSqlQueriesResponse](src/models/search-spark-application-sql-queries-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationSqlQueriesResponse](src/models/search-spark-application-sql-queries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationStageAttemptTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationStageAttemptTasksResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous ListSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>sortRuntime?</code> | <code>boolean</code> | Optional. Sort the tasks by runtime. |
| <code>stageAttemptId?</code> | <code>number</code> | Optional. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Optional. Stage ID |
| <code>taskStatus?</code> | <code>[TaskStatus](src/models/task-status.ts)</code> | Optional. List only tasks in the state. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(request)`

- **OnSuccess**: <code>[SearchSparkApplicationStageAttemptTasksResponse](src/models/search-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationStageAttemptTasksResponse](src/models/search-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationStageAttemptsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempts for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationStageAttemptsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationStageAttemptsResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID for which attempts are to be fetched |
| <code>summaryMetricsMask?</code> | <code>string</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(request)`

- **OnSuccess**: <code>[SearchSparkApplicationStageAttemptsResponse](src/models/search-spark-application-stage-attempts-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationStageAttemptsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationStageAttemptsResponse](src/models/search-spark-application-stage-attempts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSearchStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest, options?: RequestOptions): ApiPromise&lt;SearchSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to stages for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStages({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSparkApplicationStagesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSearchStages({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSparkApplicationStagesResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous FetchSparkApplicationStagesList call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>stageStatus?</code> | <code>[StageStatus](src/models/stage-status.ts)</code> | Optional. List only stages in the given state. |
| <code>summaryMetricsMask?</code> | <code>string</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStages(request)`

- **OnSuccess**: <code>[SearchSparkApplicationStagesResponse](src/models/search-spark-application-stages-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSearchStages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError&gt;</code>, with `result.value` of type <code>[SearchSparkApplicationStagesResponse](src/models/search-spark-application-stages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Executor Summary for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSparkApplicationExecutorsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSparkApplicationExecutorsResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(request)`

- **OnSuccess**: <code>[SummarizeSparkApplicationExecutorsResponse](src/models/summarize-spark-application-executors-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError&gt;</code>, with `result.value` of type <code>[SummarizeSparkApplicationExecutorsResponse](src/models/summarize-spark-application-executors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Jobs for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSparkApplicationJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSparkApplicationJobsResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(request)`

- **OnSuccess**: <code>[SummarizeSparkApplicationJobsResponse](src/models/summarize-spark-application-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError&gt;</code>, with `result.value` of type <code>[SummarizeSparkApplicationJobsResponse](src/models/summarize-spark-application-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Tasks for a Spark Application Stage Attempt

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSparkApplicationStageAttemptTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSparkApplicationStageAttemptTasksResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |
| <code>stageAttemptId?</code> | <code>number</code> | Required. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(request)`

- **OnSuccess**: <code>[SummarizeSparkApplicationStageAttemptTasksResponse](src/models/summarize-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError&gt;</code>, with `result.value` of type <code>[SummarizeSparkApplicationStageAttemptTasksResponse](src/models/summarize-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Stages for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSparkApplicationStagesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSparkApplicationStagesResponse
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Batch) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(request)`

- **OnSuccess**: <code>[SummarizeSparkApplicationStagesResponse](src/models/summarize-spark-application-stages-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError&gt;</code>, with `result.value` of type <code>[SummarizeSparkApplicationStagesResponse](src/models/summarize-spark-application-stages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsBatchesSparkApplicationsWrite(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Write wrapper objects from dataplane to spanner

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsBatchesSparkApplicationsWrite({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsBatchesSparkApplicationsWrite({
    projectsId: "some example string",
    locationsId: "some example string",
    batchesId: "some example string",
    sparkApplicationsId: "some example string",
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
| <code>batchesId</code> | <code>string</code> | Resource name segment (batchesId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>body</code> | <code>[WriteSparkApplicationContextRequest](src/models/write-spark-application-context-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsWrite(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsBatchesSparkApplicationsWrite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsOperationsCancel(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsOperationsCancel({
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

**Direct**: `await client.dataprocProjectsLocationsOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsOperationsDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsOperationsDelete({
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

**Direct**: `await client.dataprocProjectsLocationsOperationsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsOperationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsOperationsGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError&gt;</code></summary>

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
  const response = await client.dataprocProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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

**Direct**: `await client.dataprocProjectsLocationsOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsOperationsList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise&lt;ListOperationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListOperationsResponse
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
| <code>returnPartialSuccess?</code> | <code>boolean</code> | When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsOperationsList(request)`

- **OnSuccess**: <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOperationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError&gt;</code>, with `result.value` of type <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionTemplatesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateRequest, options?: RequestOptions): ApiPromise&lt;SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a session template synchronously.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionTemplatesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SessionTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionTemplatesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionTemplate
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
| <code>body</code> | <code>[SessionTemplate](src/models/session-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionTemplatesCreate(request)`

- **OnSuccess**: <code>[SessionTemplate](src/models/session-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionTemplatesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError&gt;</code>, with `result.value` of type <code>[SessionTemplate](src/models/session-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionTemplatesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a session template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionTemplatesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionTemplatesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionTemplatesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionTemplatesId: "some example string",
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
| <code>sessionTemplatesId</code> | <code>string</code> | Resource name segment (sessionTemplatesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionTemplatesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionTemplatesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionTemplatesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetRequest, options?: RequestOptions): ApiPromise&lt;SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a session template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionTemplatesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionTemplatesId: "some example string",
  });
  // TODO: Handle 'response' of type SessionTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionTemplatesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionTemplatesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionTemplate
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
| <code>sessionTemplatesId</code> | <code>string</code> | Resource name segment (sessionTemplatesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionTemplatesGet(request)`

- **OnSuccess**: <code>[SessionTemplate](src/models/session-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionTemplatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError&gt;</code>, with `result.value` of type <code>[SessionTemplate](src/models/session-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionTemplatesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListRequest, options?: RequestOptions): ApiPromise&lt;ListSessionTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists session templates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionTemplatesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListSessionTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionTemplatesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSessionTemplatesResponse
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
| <code>filter?</code> | <code>string</code> | Optional. A filter for the session templates to return in the response. Filters are case sensitive and have the following syntax:field = value AND field = value ... |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of sessions to return in each response. The service may return fewer than this value. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionTemplatesList(request)`

- **OnSuccess**: <code>[ListSessionTemplatesResponse](src/models/list-session-templates-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionTemplatesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSessionTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError&gt;</code>, with `result.value` of type <code>[ListSessionTemplatesResponse](src/models/list-session-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionTemplatesPatch(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchRequest, options?: RequestOptions): ApiPromise&lt;SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the session template synchronously.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionTemplatesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SessionTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionTemplatesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionTemplate
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
| <code>sessionTemplatesId</code> | <code>string</code> | Resource name segment (sessionTemplatesId). |
| <code>body</code> | <code>[SessionTemplate](src/models/session-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionTemplatesPatch(request)`

- **OnSuccess**: <code>[SessionTemplate](src/models/session-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionTemplatesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError&gt;</code>, with `result.value` of type <code>[SessionTemplate](src/models/session-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an interactive session asynchronously.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>requestId?</code> | <code>string</code> | Optional. A unique ID used to identify the request. If the service receives two CreateSessionRequests (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateSessionRequest)s with the same ID, the second request is ignored, and the first Session is created and stored in the backend.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| <code>sessionId?</code> | <code>string</code> | Required. The ID to use for the session, which becomes the final component of the session's resource name.This value must be 4-63 characters. Valid characters are /a-z-/. |
| <code>body</code> | <code>[Session](src/models/session.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A unique ID used to identify the request. If the service receives two DeleteSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetRequest, options?: RequestOptions): ApiPromise&lt;Session, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for an interactive session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
  });
  // TODO: Handle 'response' of type Session
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Session
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsGet(request)`

- **OnSuccess**: <code>[Session](src/models/session.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Session, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError&gt;</code>, with `result.value` of type <code>[Session](src/models/session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListRequest, options?: RequestOptions): ApiPromise&lt;ListSessionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists interactive sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListSessionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSessionsResponse
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
| <code>filter?</code> | <code>string</code> | Optional. A filter for the sessions to return in the response.A filter is a logical expression constraining the values of various fields in each session resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND, OR). Supported fields are session_id, session_uuid, state, create_time, and labels.Example: state = ACTIVE and create_time < "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state that were created before 2023-01-01. state = ACTIVE and labels.environment=production is a filter for sessions in an ACTIVE state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparators. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of sessions to return in each response. The service may return fewer than this value. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsList(request)`

- **OnSuccess**: <code>[ListSessionsResponse](src/models/list-sessions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSessionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError&gt;</code>, with `result.value` of type <code>[ListSessionsResponse](src/models/list-sessions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccess(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information corresponding to a single Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccess({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccess({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccess(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationResponse](src/models/access-session-spark-application-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationResponse](src/models/access-session-spark-application-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationEnvironmentInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain environment details for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationEnvironmentInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationEnvironmentInfoResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationEnvironmentInfoResponse](src/models/access-session-spark-application-environment-info-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationEnvironmentInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationEnvironmentInfoResponse](src/models/access-session-spark-application-environment-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessJob(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationJobResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark job for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessJob({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationJobResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessJob({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationJobResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>jobId?</code> | <code>string</code> | Required. Job ID to fetch data for. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessJob(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationJobResponse](src/models/access-session-spark-application-job-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationJobResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationJobResponse](src/models/access-session-spark-application-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationNativeBuildInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native Build Information for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationNativeBuildInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationNativeBuildInfoResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationNativeBuildInfoResponse](src/models/access-session-spark-application-native-build-info-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationNativeBuildInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationNativeBuildInfoResponse](src/models/access-session-spark-application-native-build-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationNativeSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular Native SQL Query for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationNativeSqlQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationNativeSqlQueryResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>executionId?</code> | <code>string</code> | Required. Execution ID |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationNativeSqlQueryResponse](src/models/access-session-spark-application-native-sql-query-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationNativeSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationNativeSqlQueryResponse](src/models/access-session-spark-application-native-sql-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationSqlSparkPlanGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationSqlSparkPlanGraphResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationSqlSparkPlanGraphResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>executionId?</code> | <code>string</code> | Required. Execution ID |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationSqlSparkPlanGraphResponse](src/models/access-session-spark-application-sql-spark-plan-graph-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationSqlSparkPlanGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationSqlSparkPlanGraphResponse](src/models/access-session-spark-application-sql-spark-plan-graph-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular SQL Query for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationSqlQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationSqlQueryResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>details?</code> | <code>boolean</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| <code>executionId?</code> | <code>string</code> | Required. Execution ID |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>planDescription?</code> | <code>boolean</code> | Optional. Enables/ disables physical plan description on demand |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationSqlQueryResponse](src/models/access-session-spark-application-sql-query-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationSqlQueryResponse](src/models/access-session-spark-application-sql-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationStageAttemptResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempt for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationStageAttemptResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationStageAttemptResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>stageAttemptId?</code> | <code>number</code> | Required. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |
| <code>summaryMetricsMask?</code> | <code>string</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationStageAttemptResponse](src/models/access-session-spark-application-stage-attempt-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationStageAttemptResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationStageAttemptResponse](src/models/access-session-spark-application-stage-attempt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest, options?: RequestOptions): ApiPromise&lt;AccessSessionSparkApplicationStageRddOperationGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type AccessSessionSparkApplicationStageRddOperationGraphResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessSessionSparkApplicationStageRddOperationGraphResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(request)`

- **OnSuccess**: <code>[AccessSessionSparkApplicationStageRddOperationGraphResponse](src/models/access-session-spark-application-stage-rdd-operation-graph-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessSessionSparkApplicationStageRddOperationGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError&gt;</code>, with `result.value` of type <code>[AccessSessionSparkApplicationStageRddOperationGraphResponse](src/models/access-session-spark-application-stage-rdd-operation-graph-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearch(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information and list of Spark Applications corresponding to a batch

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearch({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearch({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationsResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>applicationStatus?</code> | <code>[ApplicationStatus](src/models/application-status.ts)</code> | Optional. Search only applications in the chosen state. |
| <code>maxEndTime?</code> | <code>string</code> | Optional. Latest end timestamp to list. |
| <code>maxTime?</code> | <code>string</code> | Optional. Latest start timestamp to list. |
| <code>minEndTime?</code> | <code>string</code> | Optional. Earliest end timestamp to list. |
| <code>minTime?</code> | <code>string</code> | Optional. Earliest start timestamp to list. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplications call. Provide this token to retrieve the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearch(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationsResponse](src/models/search-session-spark-applications-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationsResponse](src/models/search-session-spark-applications-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationExecutorStageSummaryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain executor summary with respect to a spark stage attempt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorStageSummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationExecutorStageSummaryResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationExecutorStageSummary call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>stageAttemptId?</code> | <code>number</code> | Required. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationExecutorStageSummaryResponse](src/models/search-session-spark-application-executor-stage-summary-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationExecutorStageSummaryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationExecutorStageSummaryResponse](src/models/search-session-spark-application-executor-stage-summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to executors for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationExecutorsResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>executorStatus?</code> | <code>[ExecutorStatus](src/models/executor-status.ts)</code> | Optional. Filter to select whether active/ dead or all executors should be selected. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationExecutors call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationExecutorsResponse](src/models/search-session-spark-application-executors-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationExecutorsResponse](src/models/search-session-spark-application-executors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain list of spark jobs corresponding to a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationJobsResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>jobIds?</code> | <code>string[]</code> | Optional. List of Job IDs to filter by if provided. |
| <code>jobStatus?</code> | <code>[JobStatus2](src/models/job-status2.ts)</code> | Optional. List only jobs in the specific state. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationJobs call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationJobsResponse](src/models/search-session-spark-application-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationJobsResponse](src/models/search-session-spark-application-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationNativeSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native SQL Queries for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationNativeSqlQueriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationNativeSqlQueriesResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationNativeSqlQueriesResponse](src/models/search-session-spark-application-native-sql-queries-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationNativeSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationNativeSqlQueriesResponse](src/models/search-session-spark-application-native-sql-queries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to SQL Queries for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationSqlQueriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationSqlQueriesResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>details?</code> | <code>boolean</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. |
| <code>operationIds?</code> | <code>string[]</code> | Optional. List of Spark Connect operation IDs to filter by if provided. |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>planDescription?</code> | <code>boolean</code> | Optional. Enables/ disables physical plan description on demand |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationSqlQueriesResponse](src/models/search-session-spark-application-sql-queries-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationSqlQueriesResponse](src/models/search-session-spark-application-sql-queries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationStageAttemptTasksResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>sortRuntime?</code> | <code>boolean</code> | Optional. Sort the tasks by runtime. |
| <code>stageAttemptId?</code> | <code>number</code> | Optional. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Optional. Stage ID |
| <code>taskStatus?</code> | <code>[TaskStatus](src/models/task-status.ts)</code> | Optional. List only tasks in the state. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationStageAttemptTasksResponse](src/models/search-session-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationStageAttemptTasksResponse](src/models/search-session-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationStageAttemptsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempts for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationStageAttemptsResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID for which attempts are to be fetched |
| <code>summaryMetricsMask?</code> | <code>string</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationStageAttemptsResponse](src/models/search-session-spark-application-stage-attempts-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationStageAttemptsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationStageAttemptsResponse](src/models/search-session-spark-application-stage-attempts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSearchStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest, options?: RequestOptions): ApiPromise&lt;SearchSessionSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to stages for a Spark Application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStages({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SearchSessionSparkApplicationStagesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSearchStages({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSessionSparkApplicationStagesResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous SearchSessionSparkApplicationStages call. Provide this token to retrieve the subsequent page. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>stageIds?</code> | <code>string[]</code> | Optional. List of Stage IDs to filter by if provided. |
| <code>stageStatus?</code> | <code>[StageStatus](src/models/stage-status.ts)</code> | Optional. List only stages in the given state. |
| <code>summaryMetricsMask?</code> | <code>string</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStages(request)`

- **OnSuccess**: <code>[SearchSessionSparkApplicationStagesResponse](src/models/search-session-spark-application-stages-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSearchStages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSessionSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError&gt;</code>, with `result.value` of type <code>[SearchSessionSparkApplicationStagesResponse](src/models/search-session-spark-application-stages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSessionSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Executor Summary for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSessionSparkApplicationExecutorsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSessionSparkApplicationExecutorsResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(request)`

- **OnSuccess**: <code>[SummarizeSessionSparkApplicationExecutorsResponse](src/models/summarize-session-spark-application-executors-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSessionSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError&gt;</code>, with `result.value` of type <code>[SummarizeSessionSparkApplicationExecutorsResponse](src/models/summarize-session-spark-application-executors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSessionSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Jobs for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSessionSparkApplicationJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSessionSparkApplicationJobsResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>jobIds?</code> | <code>string[]</code> | Optional. List of Job IDs to filter by if provided. |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(request)`

- **OnSuccess**: <code>[SummarizeSessionSparkApplicationJobsResponse](src/models/summarize-session-spark-application-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSessionSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError&gt;</code>, with `result.value` of type <code>[SummarizeSessionSparkApplicationJobsResponse](src/models/summarize-session-spark-application-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSessionSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Tasks for a Spark Application Stage Attempt

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSessionSparkApplicationStageAttemptTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSessionSparkApplicationStageAttemptTasksResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>stageAttemptId?</code> | <code>number</code> | Required. Stage Attempt ID |
| <code>stageId?</code> | <code>string</code> | Required. Stage ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(request)`

- **OnSuccess**: <code>[SummarizeSessionSparkApplicationStageAttemptTasksResponse](src/models/summarize-session-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSessionSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError&gt;</code>, with `result.value` of type <code>[SummarizeSessionSparkApplicationStageAttemptTasksResponse](src/models/summarize-session-spark-application-stage-attempt-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest, options?: RequestOptions): ApiPromise&lt;SummarizeSessionSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Stages for a Spark Application

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  });
  // TODO: Handle 'response' of type SummarizeSessionSparkApplicationStagesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeSessionSparkApplicationStagesResponse
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>parent?</code> | <code>string</code> | Required. Parent (Session) resource reference. |
| <code>stageIds?</code> | <code>string[]</code> | Optional. List of Stage IDs to filter by if provided. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(request)`

- **OnSuccess**: <code>[SummarizeSessionSparkApplicationStagesResponse](src/models/summarize-session-spark-application-stages-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeSessionSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError&gt;</code>, with `result.value` of type <code>[SummarizeSessionSparkApplicationStagesResponse](src/models/summarize-session-spark-application-stages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsSparkApplicationsWrite(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Write wrapper objects from dataplane to spanner

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsSparkApplicationsWrite({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsSparkApplicationsWrite({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    sparkApplicationsId: "some example string",
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>sparkApplicationsId</code> | <code>string</code> | Resource name segment (sparkApplicationsId). |
| <code>body</code> | <code>[WriteSessionSparkApplicationContextRequest](src/models/write-session-spark-application-context-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsWrite(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsSparkApplicationsWrite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsSessionsTerminate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Terminates the interactive session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsSessionsTerminate({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsSessionsTerminate({
    projectsId: "some example string",
    locationsId: "some example string",
    sessionsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>sessionsId</code> | <code>string</code> | Resource name segment (sessionsId). |
| <code>body</code> | <code>[TerminateSessionRequest](src/models/terminate-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsSessionsTerminate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsSessionsTerminate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateRequest, options?: RequestOptions): ApiPromise&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new workflow template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type WorkflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowTemplate
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
| <code>body</code> | <code>[WorkflowTemplate](src/models/workflow-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesCreate(request)`

- **OnSuccess**: <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError&gt;</code>, with `result.value` of type <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workflow template. It does not cancel in-progress workflows.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
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
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>version?</code> | <code>number</code> | Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetRequest, options?: RequestOptions): ApiPromise&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
  });
  // TODO: Handle 'response' of type WorkflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowTemplate
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
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>version?</code> | <code>number</code> | Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesGet(request)`

- **OnSuccess**: <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError&gt;</code>, with `result.value` of type <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesInstantiate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesInstantiate({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesInstantiate({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[InstantiateWorkflowTemplateRequest](src/models/instantiate-workflow-template-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesInstantiate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesInstantiate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesInstantiateInline(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesInstantiateInline({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesInstantiateInline({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>requestId?</code> | <code>string</code> | Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| <code>body</code> | <code>[WorkflowTemplate](src/models/workflow-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesInstantiateInline(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesInstantiateInline(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListRequest, options?: RequestOptions): ApiPromise&lt;ListWorkflowTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists workflows that match the specified filter in the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListWorkflowTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListWorkflowTemplatesResponse
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
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return in each response. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token, returned by a previous call, to request the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesList(request)`

- **OnSuccess**: <code>[ListWorkflowTemplatesResponse](src/models/list-workflow-templates-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListWorkflowTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError&gt;</code>, with `result.value` of type <code>[ListWorkflowTemplatesResponse](src/models/list-workflow-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsLocationsWorkflowTemplatesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateRequest, options?: RequestOptions): ApiPromise&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsLocationsWorkflowTemplatesUpdate({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type WorkflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsLocationsWorkflowTemplatesUpdate({
    projectsId: "some example string",
    locationsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowTemplate
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
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[WorkflowTemplate](src/models/workflow-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsLocationsWorkflowTemplatesUpdate(request)`

- **OnSuccess**: <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsLocationsWorkflowTemplatesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError&gt;</code>, with `result.value` of type <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest, options?: RequestOptions): ApiPromise&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new autoscaling policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesCreate({
    projectsId: "some example string",
    regionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AutoscalingPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesCreate({
    projectsId: "some example string",
    regionsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutoscalingPolicy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>body</code> | <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesCreate(request)`

- **OnSuccess**: <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError&gt;</code>, with `result.value` of type <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesDelete({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesDelete({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetRequest, options?: RequestOptions): ApiPromise&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves autoscaling policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesGet({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
  });
  // TODO: Handle 'response' of type AutoscalingPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesGet({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutoscalingPolicy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesGet(request)`

- **OnSuccess**: <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError&gt;</code>, with `result.value` of type <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListRequest, options?: RequestOptions): ApiPromise&lt;ListAutoscalingPoliciesResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists autoscaling policies in the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesList({
    projectsId: "some example string",
    regionsId: "some example string",
  });
  // TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesList({
    projectsId: "some example string",
    regionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAutoscalingPoliciesResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token, returned by a previous call, to request the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesList(request)`

- **OnSuccess**: <code>[ListAutoscalingPoliciesResponse](src/models/list-autoscaling-policies-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAutoscalingPoliciesResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError&gt;</code>, with `result.value` of type <code>[ListAutoscalingPoliciesResponse](src/models/list-autoscaling-policies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsAutoscalingPoliciesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest, options?: RequestOptions): ApiPromise&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsAutoscalingPoliciesUpdate({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AutoscalingPolicy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsAutoscalingPoliciesUpdate({
    projectsId: "some example string",
    regionsId: "some example string",
    autoscalingPoliciesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutoscalingPolicy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>autoscalingPoliciesId</code> | <code>string</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsAutoscalingPoliciesUpdate(request)`

- **OnSuccess**: <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsAutoscalingPoliciesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError&gt;</code>, with `result.value` of type <code>[AutoscalingPolicy](src/models/autoscaling-policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersCreate({
    projectId: "some example string",
    region: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersCreate({
    projectId: "some example string",
    region: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>actionOnFailedPrimaryWorkers?</code> | <code>[ActionOnFailedPrimaryWorkers](src/models/action-on-failed-primary-workers.ts)</code> | Optional. Failure action when primary worker creation fails. |
| <code>requestId?</code> | <code>string</code> | Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| <code>body</code> | <code>[Cluster](src/models/cluster.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersDelete({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersDelete({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>clusterName</code> | <code>string</code> | Required. The cluster name. |
| <code>clusterUuid?</code> | <code>string</code> | Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist. |
| <code>gracefulTerminationTimeout?</code> | <code>string</code> | Optional. The graceful termination timeout for the deletion of the cluster. Indicate the time the request will wait to complete the running jobs on the cluster before its forceful deletion. Default value is 0 indicating that the user has not enabled the graceful termination. Value can be between 60 second and 6 Hours, in case the graceful termination is enabled. (There is no separate flag to check the enabling or disabling of graceful termination, it can be checked by the values in the field). |
| <code>requestId?</code> | <code>string</code> | Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersDiagnose(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersDiagnose({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersDiagnose({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>clusterName</code> | <code>string</code> | Required. The cluster name. |
| <code>body</code> | <code>[DiagnoseClusterRequest](src/models/diagnose-cluster-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersDiagnose(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersDiagnose(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetRequest, options?: RequestOptions): ApiPromise&lt;Cluster, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a cluster in a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersGet({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
  });
  // TODO: Handle 'response' of type Cluster
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersGet({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Cluster
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>clusterName</code> | <code>string</code> | Required. The cluster name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersGet(request)`

- **OnSuccess**: <code>[Cluster](src/models/cluster.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Cluster, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError&gt;</code>, with `result.value` of type <code>[Cluster](src/models/cluster.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError&gt;</code></summary>

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
  const response = await client.dataprocProjectsRegionsClustersGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersInjectCredentials(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersInjectCredentials({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersInjectCredentials({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[InjectCredentialsRequest](src/models/inject-credentials-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersInjectCredentials(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersInjectCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListRequest, options?: RequestOptions): ApiPromise&lt;ListClustersResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all regions/{region}/clusters in a project alphabetically.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersList({
    projectId: "some example string",
    region: "some example string",
  });
  // TODO: Handle 'response' of type ListClustersResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersList({ projectId: "some example string", region: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListClustersResponse
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>filter?</code> | <code>string</code> | Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be "*" to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, or STOPPED. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING, ERROR, STOPPING, and STOPPED states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = * |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of clusters to return in each response. The service may return fewer than this value. If unspecified, the default value is 200. The maximum value is 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token received from a previous ListClusters call. Provide this token to retrieve the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersList(request)`

- **OnSuccess**: <code>[ListClustersResponse](src/models/list-clusters-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListClustersResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError&gt;</code>, with `result.value` of type <code>[ListClustersResponse](src/models/list-clusters-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersNodeGroupsCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersNodeGroupsCreate({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersNodeGroupsCreate({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>nodeGroupId?</code> | <code>string</code> | Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters. |
| <code>parentOperationId?</code> | <code>string</code> | Optional. operation id of the parent operation sending the create request |
| <code>requestId?</code> | <code>string</code> | Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequest) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| <code>body</code> | <code>[NodeGroup](src/models/node-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersNodeGroupsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersNodeGroupsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersNodeGroupsGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetRequest, options?: RequestOptions): ApiPromise&lt;NodeGroup, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a node group in a cluster.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersNodeGroupsGet({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    nodeGroupsId: "some example string",
  });
  // TODO: Handle 'response' of type NodeGroup
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersNodeGroupsGet({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    nodeGroupsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NodeGroup
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>nodeGroupsId</code> | <code>string</code> | Resource name segment (nodeGroupsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersNodeGroupsGet(request)`

- **OnSuccess**: <code>[NodeGroup](src/models/node-group.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersNodeGroupsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NodeGroup, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError&gt;</code>, with `result.value` of type <code>[NodeGroup](src/models/node-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersNodeGroupsRepair(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repair nodes in a node group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersNodeGroupsRepair({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    nodeGroupsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersNodeGroupsRepair({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    nodeGroupsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>nodeGroupsId</code> | <code>string</code> | Resource name segment (nodeGroupsId). |
| <code>body</code> | <code>[RepairNodeGroupRequest](src/models/repair-node-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersNodeGroupsRepair(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersNodeGroupsRepair(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersNodeGroupsResize(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersNodeGroupsResize({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    nodeGroupsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersNodeGroupsResize({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    nodeGroupsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>nodeGroupsId</code> | <code>string</code> | Resource name segment (nodeGroupsId). |
| <code>body</code> | <code>[ResizeNodeGroupRequest](src/models/resize-node-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersNodeGroupsResize(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersNodeGroupsResize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersPatch(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersPatch({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersPatch({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>clusterName</code> | <code>string</code> | Required. The cluster name. |
| <code>gracefulDecommissionTimeout?</code> | <code>string</code> | Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Supported in image versions 1.2 and higher. |
| <code>requestId?</code> | <code>string</code> | Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| <code>updateMask?</code> | <code>string</code> | Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies |
| <code>body</code> | <code>[Cluster](src/models/cluster.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersRepair(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repairs a cluster.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersRepair({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersRepair({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>clusterName</code> | <code>string</code> | Required. The cluster name. |
| <code>body</code> | <code>[RepairClusterRequest](src/models/repair-cluster-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersRepair(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersRepair(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersStart(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a cluster in a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersStart({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersStart({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>clusterName</code> | <code>string</code> | Required. The cluster name. |
| <code>body</code> | <code>[StartClusterRequest](src/models/start-cluster-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersStart(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersStart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersStop(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a cluster in a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersStop({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersStop({
    projectId: "some example string",
    region: "some example string",
    clusterName: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>string</code> | Required. The region in which to handle the request. |
| <code>clusterName</code> | <code>string</code> | Required. The cluster name. |
| <code>body</code> | <code>[StopClusterRequest](src/models/stop-cluster-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersStop(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersStop(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsClustersTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsClustersTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsClustersTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    clustersId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>clustersId</code> | <code>string</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsClustersTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsClustersTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsCancel(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelRequest, options?: RequestOptions): ApiPromise&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsCancel({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsCancel({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>string</code> | Required. The Dataproc region in which to handle the request. |
| <code>jobId</code> | <code>string</code> | Required. The job ID. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsCancel(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsDelete({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsDelete({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>string</code> | Required. The Dataproc region in which to handle the request. |
| <code>jobId</code> | <code>string</code> | Required. The job ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetRequest, options?: RequestOptions): ApiPromise&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a job in a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsGet({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
  });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsGet({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>string</code> | Required. The Dataproc region in which to handle the request. |
| <code>jobId</code> | <code>string</code> | Required. The job ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsGet(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.dataprocProjectsRegionsJobsGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    jobsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    jobsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>jobsId</code> | <code>string</code> | Resource name segment (jobsId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListRequest, options?: RequestOptions): ApiPromise&lt;ListJobsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists regions/{region}/jobs in a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsList({
    projectId: "some example string",
    region: "some example string",
  });
  // TODO: Handle 'response' of type ListJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsList({ projectId: "some example string", region: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListJobsResponse
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>string</code> | Required. The Dataproc region in which to handle the request. |
| <code>clusterName?</code> | <code>string</code> | Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster. |
| <code>filter?</code> | <code>string</code> | Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or insertTime, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Allows insertTime to be a timestamp in RFC 3339 format in double quotes, such as 2025-01-01T00:00:00Z. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = * AND insertTime <= "2025-01-01T00:00:00Z" |
| <code>jobStateMatcher?</code> | <code>[JobStateMatcher](src/models/job-state-matcher.ts)</code> | Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored. |
| <code>pageSize?</code> | <code>number</code> | Optional. The number of results to return in each response. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token, returned by a previous call, to request the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsList(request)`

- **OnSuccess**: <code>[ListJobsResponse](src/models/list-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListJobsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError&gt;</code>, with `result.value` of type <code>[ListJobsResponse](src/models/list-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsPatch(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchRequest, options?: RequestOptions): ApiPromise&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a job in a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsPatch({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsPatch({
    projectId: "some example string",
    region: "some example string",
    jobId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>string</code> | Required. The Dataproc region in which to handle the request. |
| <code>jobId</code> | <code>string</code> | Required. The job ID. |
| <code>updateMask?</code> | <code>string</code> | Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated. |
| <code>body</code> | <code>[Job](src/models/job.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsPatch(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    jobsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    jobsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>jobsId</code> | <code>string</code> | Resource name segment (jobsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsSubmit(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitRequest, options?: RequestOptions): ApiPromise&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a job to a cluster.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsSubmit({
    projectId: "some example string",
    region: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsSubmit({
    projectId: "some example string",
    region: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>string</code> | Required. The Dataproc region in which to handle the request. |
| <code>body</code> | <code>[SubmitJobRequest](src/models/submit-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsSubmit(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsSubmit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsSubmitAsOperation(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits job to a cluster.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsSubmitAsOperation({
    projectId: "some example string",
    region: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsSubmitAsOperation({
    projectId: "some example string",
    region: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>string</code> | Required. The Dataproc region in which to handle the request. |
| <code>body</code> | <code>[SubmitJobRequest](src/models/submit-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsSubmitAsOperation(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsSubmitAsOperation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsJobsTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsJobsTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    jobsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsJobsTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    jobsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>jobsId</code> | <code>string</code> | Resource name segment (jobsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsJobsTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsJobsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsOperationsCancel(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsOperationsCancel({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsOperationsCancel({
    projectsId: "some example string",
    regionsId: "some example string",
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsOperationsDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsOperationsDelete({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsOperationsDelete({
    projectsId: "some example string",
    regionsId: "some example string",
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsOperationsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsOperationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsOperationsGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError&gt;</code></summary>

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
  const response = await client.dataprocProjectsRegionsOperationsGet({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsOperationsGet({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsOperationsGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.dataprocProjectsRegionsOperationsGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsOperationsGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsOperationsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsOperationsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsOperationsList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListRequest, options?: RequestOptions): ApiPromise&lt;ListOperationsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsOperationsList({
    projectsId: "some example string",
    regionsId: "some example string",
  });
  // TODO: Handle 'response' of type ListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsOperationsList({
    projectsId: "some example string",
    regionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListOperationsResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>filter?</code> | <code>string</code> | The standard list filter. |
| <code>pageSize?</code> | <code>number</code> | The standard list page size. |
| <code>pageToken?</code> | <code>string</code> | The standard list page token. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsOperationsList(request)`

- **OnSuccess**: <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOperationsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError&gt;</code>, with `result.value` of type <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsOperationsSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsOperationsSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsOperationsSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsOperationsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsOperationsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsOperationsTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsOperationsTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsOperationsTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    operationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsOperationsTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsOperationsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateRequest, options?: RequestOptions): ApiPromise&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new workflow template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesCreate({
    projectsId: "some example string",
    regionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type WorkflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesCreate({
    projectsId: "some example string",
    regionsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowTemplate
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>body</code> | <code>[WorkflowTemplate](src/models/workflow-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesCreate(request)`

- **OnSuccess**: <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError&gt;</code>, with `result.value` of type <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workflow template. It does not cancel in-progress workflows.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesDelete({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesDelete({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>version?</code> | <code>number</code> | Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetRequest, options?: RequestOptions): ApiPromise&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesGet({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
  });
  // TODO: Handle 'response' of type WorkflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesGet({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowTemplate
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>version?</code> | <code>number</code> | Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesGet(request)`

- **OnSuccess**: <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError&gt;</code>, with `result.value` of type <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesInstantiate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesInstantiate({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesInstantiate({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[InstantiateWorkflowTemplateRequest](src/models/instantiate-workflow-template-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesInstantiate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesInstantiate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesInstantiateInline({
    projectsId: "some example string",
    regionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesInstantiateInline({
    projectsId: "some example string",
    regionsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| <code>body</code> | <code>[WorkflowTemplate](src/models/workflow-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListRequest, options?: RequestOptions): ApiPromise&lt;ListWorkflowTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists workflows that match the specified filter in the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesList({
    projectsId: "some example string",
    regionsId: "some example string",
  });
  // TODO: Handle 'response' of type ListWorkflowTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesList({
    projectsId: "some example string",
    regionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListWorkflowTemplatesResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return in each response. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token, returned by a previous call, to request the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesList(request)`

- **OnSuccess**: <code>[ListWorkflowTemplatesResponse](src/models/list-workflow-templates-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListWorkflowTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError&gt;</code>, with `result.value` of type <code>[ListWorkflowTemplatesResponse](src/models/list-workflow-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataprocProjectsRegionsWorkflowTemplatesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest, options?: RequestOptions): ApiPromise&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataprocProjectsRegionsWorkflowTemplatesUpdate({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type WorkflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .dataprocProjectsRegionsWorkflowTemplatesUpdate({
    projectsId: "some example string",
    regionsId: "some example string",
    workflowTemplatesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowTemplate
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
| <code>regionsId</code> | <code>string</code> | Resource name segment (regionsId). |
| <code>workflowTemplatesId</code> | <code>string</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[WorkflowTemplate](src/models/workflow-template.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataprocProjectsRegionsWorkflowTemplatesUpdate(request)`

- **OnSuccess**: <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataprocProjectsRegionsWorkflowTemplatesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError&gt;</code>, with `result.value` of type <code>[WorkflowTemplate](src/models/workflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a metastore federation in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsFederationsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>federationId?</code> | <code>string</code> | Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |
| <code>body</code> | <code>[Federation](src/models/federation.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single federation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsFederationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>federationsId</code> | <code>string</code> | Resource name segment (federationsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetRequest, options?: RequestOptions): ApiPromise&lt;Federation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a single federation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsFederationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
  });
  // TODO: Handle 'response' of type Federation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Federation
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
| <code>federationsId</code> | <code>string</code> | Resource name segment (federationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsGet(request)`

- **OnSuccess**: <code>[Federation](src/models/federation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Federation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError&gt;</code>, with `result.value` of type <code>[Federation](src/models/federation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.metastoreProjectsLocationsFederationsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>federationsId</code> | <code>string</code> | Resource name segment (federationsId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListRequest, options?: RequestOptions): ApiPromise&lt;ListFederationsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists federations in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsFederationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListFederationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListFederationsResponse
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
| <code>filter?</code> | <code>string</code> | Optional. The filter to apply to list results. |
| <code>orderBy?</code> | <code>string</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of federations to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous ListFederationServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to ListFederationServices must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsList(request)`

- **OnSuccess**: <code>[ListFederationsResponse](src/models/list-federations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListFederationsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError&gt;</code>, with `result.value` of type <code>[ListFederationsResponse](src/models/list-federations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsPatch(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the fields of a federation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsFederationsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>federationsId</code> | <code>string</code> | Resource name segment (federationsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |
| <code>updateMask?</code> | <code>string</code> | Required. A field mask used to specify the fields to be overwritten in the metastore federation resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask. |
| <code>body</code> | <code>[Federation](src/models/federation.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsFederationsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>federationsId</code> | <code>string</code> | Resource name segment (federationsId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](src/models/set-iam-policy-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsFederationsTestIamPermissions(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsFederationsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsFederationsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    federationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>federationsId</code> | <code>string</code> | Resource name segment (federationsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsFederationsTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsFederationsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise&lt;Location, GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError&gt;</code></summary>

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
  const response = await client.metastoreProjectsLocationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type Location
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsGet({ projectsId: "some example string", locationsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Location
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

**Direct**: `await client.metastoreProjectsLocationsGet(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location, GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsListRequest, options?: RequestOptions): ApiPromise&lt;ListLocationsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service.This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: Global locations: If name is empty, the method lists the public locations available to all projects. Project-specific locations: If name follows the format projects/{project}, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project.For gRPC and client library implementations, the resource name is passed as the name field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsList({ projectsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLocationsResponse
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
| <code>filter?</code> | <code>string</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of results to return. If not set, the service selects a default. |
| <code>pageToken?</code> | <code>string</code> | A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsList(request)`

- **OnSuccess**: <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsListError&gt;</code>, with `result.value` of type <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesAlterLocation(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesAlterLocation({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesAlterLocation({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[AlterMetadataResourceLocationRequest](src/models/alter-metadata-resource-location-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesAlterLocation(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesAlterLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesAlterTableProperties(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Alter metadata table properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesAlterTableProperties({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesAlterTableProperties({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[AlterTablePropertiesRequest](src/models/alter-table-properties-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesAlterTableProperties(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesAlterTableProperties(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesBackupsCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new backup in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesBackupsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesBackupsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>backupId?</code> | <code>string</code> | Required. The ID of the backup, which is used as the final component of the backup's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |
| <code>body</code> | <code>[Backup](src/models/backup.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesBackupsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesBackupsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesBackupsDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single backup.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesBackupsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesBackupsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>backupsId</code> | <code>string</code> | Resource name segment (backupsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesBackupsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesBackupsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesBackupsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetRequest, options?: RequestOptions): ApiPromise&lt;Backup, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single backup.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesBackupsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
  });
  // TODO: Handle 'response' of type Backup
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesBackupsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Backup
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>backupsId</code> | <code>string</code> | Resource name segment (backupsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesBackupsGet(request)`

- **OnSuccess**: <code>[Backup](src/models/backup.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesBackupsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Backup, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError&gt;</code>, with `result.value` of type <code>[Backup](src/models/backup.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesBackupsGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.metastoreProjectsLocationsServicesBackupsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesBackupsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>backupsId</code> | <code>string</code> | Resource name segment (backupsId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesBackupsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesBackupsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesBackupsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListRequest, options?: RequestOptions): ApiPromise&lt;ListBackupsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists backups in a service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesBackupsList({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  });
  // TODO: Handle 'response' of type ListBackupsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesBackupsList({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBackupsResponse
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>filter?</code> | <code>string</code> | Optional. The filter to apply to list results. |
| <code>orderBy?</code> | <code>string</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of backups to return. The response may contain less than the maximum number. If unspecified, no more than 500 backups are returned. The maximum value is 1000; values above 1000 are changed to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous DataprocMetastore.ListBackups call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListBackups must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesBackupsList(request)`

- **OnSuccess**: <code>[ListBackupsResponse](src/models/list-backups-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesBackupsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBackupsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError&gt;</code>, with `result.value` of type <code>[ListBackupsResponse](src/models/list-backups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesBackupsSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesBackupsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesBackupsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    backupsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>backupsId</code> | <code>string</code> | Resource name segment (backupsId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](src/models/set-iam-policy-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesBackupsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesBackupsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesCancelMigration(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the ongoing Managed Migration process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesCancelMigration({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesCancelMigration({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesCancelMigration(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesCancelMigration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesCompleteMigration(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the managed migration process. The Dataproc Metastore service will switch to using its own backend database after successful migration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesCompleteMigration({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesCompleteMigration({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesCompleteMigration(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesCompleteMigration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a metastore service in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |
| <code>serviceId?</code> | <code>string</code> | Required. The ID of the metastore service, which is used as the final component of the metastore service's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens. |
| <code>body</code> | <code>[Service](src/models/service.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesDatabasesGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.metastoreProjectsLocationsServicesDatabasesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesDatabasesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>databasesId</code> | <code>string</code> | Resource name segment (databasesId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesDatabasesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesDatabasesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesDatabasesSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesDatabasesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesDatabasesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>databasesId</code> | <code>string</code> | Resource name segment (databasesId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](src/models/set-iam-policy-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesDatabasesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesDatabasesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
    tablesId: "some example string",
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
    tablesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>databasesId</code> | <code>string</code> | Resource name segment (databasesId). |
| <code>tablesId</code> | <code>string</code> | Resource name segment (tablesId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
    tablesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    databasesId: "some example string",
    tablesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>databasesId</code> | <code>string</code> | Resource name segment (databasesId). |
| <code>tablesId</code> | <code>string</code> | Resource name segment (tablesId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](src/models/set-iam-policy-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesExportMetadata(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports metadata from a service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesExportMetadata({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesExportMetadata({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[ExportMetadataRequest](src/models/export-metadata-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesExportMetadata(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesExportMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetRequest, options?: RequestOptions): ApiPromise&lt;Service, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a single service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  });
  // TODO: Handle 'response' of type Service
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Service
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesGet(request)`

- **OnSuccess**: <code>[Service](src/models/service.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Service, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError&gt;</code>, with `result.value` of type <code>[Service](src/models/service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.metastoreProjectsLocationsServicesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListRequest, options?: RequestOptions): ApiPromise&lt;ListServicesResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists services in a project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListServicesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListServicesResponse
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
| <code>filter?</code> | <code>string</code> | Optional. The filter to apply to list results. |
| <code>orderBy?</code> | <code>string</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of services to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesList(request)`

- **OnSuccess**: <code>[ListServicesResponse](src/models/list-services-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListServicesResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError&gt;</code>, with `result.value` of type <code>[ListServicesResponse](src/models/list-services-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMetadataImportsCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new MetadataImport in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMetadataImportsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMetadataImportsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>metadataImportId?</code> | <code>string</code> | Required. The ID of the metadata import, which is used as the final component of the metadata import's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens. |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |
| <code>body</code> | <code>[MetadataImport](src/models/metadata-import.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMetadataImportsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMetadataImportsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMetadataImportsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetRequest, options?: RequestOptions): ApiPromise&lt;MetadataImport, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single import.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMetadataImportsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    metadataImportsId: "some example string",
  });
  // TODO: Handle 'response' of type MetadataImport
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMetadataImportsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    metadataImportsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetadataImport
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>metadataImportsId</code> | <code>string</code> | Resource name segment (metadataImportsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMetadataImportsGet(request)`

- **OnSuccess**: <code>[MetadataImport](src/models/metadata-import.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMetadataImportsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetadataImport, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError&gt;</code>, with `result.value` of type <code>[MetadataImport](src/models/metadata-import.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMetadataImportsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListRequest, options?: RequestOptions): ApiPromise&lt;ListMetadataImportsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists imports in a service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMetadataImportsList({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  });
  // TODO: Handle 'response' of type ListMetadataImportsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMetadataImportsList({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMetadataImportsResponse
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>filter?</code> | <code>string</code> | Optional. The filter to apply to list results. |
| <code>orderBy?</code> | <code>string</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of imports to return. The response may contain less than the maximum number. If unspecified, no more than 500 imports are returned. The maximum value is 1000; values above 1000 are changed to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMetadataImportsList(request)`

- **OnSuccess**: <code>[ListMetadataImportsResponse](src/models/list-metadata-imports-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMetadataImportsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMetadataImportsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError&gt;</code>, with `result.value` of type <code>[ListMetadataImportsResponse](src/models/list-metadata-imports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMetadataImportsPatch(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single import. Only the description field of MetadataImport is supported to be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMetadataImportsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    metadataImportsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMetadataImportsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    metadataImportsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>metadataImportsId</code> | <code>string</code> | Resource name segment (metadataImportsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |
| <code>updateMask?</code> | <code>string</code> | Required. A field mask used to specify the fields to be overwritten in the metadata import resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask. |
| <code>body</code> | <code>[MetadataImport](src/models/metadata-import.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMetadataImportsPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMetadataImportsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMigrationExecutionsDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single migration execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMigrationExecutionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    migrationExecutionsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMigrationExecutionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    migrationExecutionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>migrationExecutionsId</code> | <code>string</code> | Resource name segment (migrationExecutionsId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMigrationExecutionsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMigrationExecutionsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMigrationExecutionsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest, options?: RequestOptions): ApiPromise&lt;MigrationExecution, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single migration execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMigrationExecutionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    migrationExecutionsId: "some example string",
  });
  // TODO: Handle 'response' of type MigrationExecution
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMigrationExecutionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    migrationExecutionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MigrationExecution
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>migrationExecutionsId</code> | <code>string</code> | Resource name segment (migrationExecutionsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMigrationExecutionsGet(request)`

- **OnSuccess**: <code>[MigrationExecution](src/models/migration-execution.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMigrationExecutionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MigrationExecution, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError&gt;</code>, with `result.value` of type <code>[MigrationExecution](src/models/migration-execution.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMigrationExecutionsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListRequest, options?: RequestOptions): ApiPromise&lt;ListMigrationExecutionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists migration executions on a service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMigrationExecutionsList({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  });
  // TODO: Handle 'response' of type ListMigrationExecutionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMigrationExecutionsList({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMigrationExecutionsResponse
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>filter?</code> | <code>string</code> | Optional. The filter to apply to list results. |
| <code>orderBy?</code> | <code>string</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of migration executions to return. The response may contain less than the maximum number. If unspecified, no more than 500 migration executions are returned. The maximum value is 1000; values above 1000 are changed to 1000. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous DataprocMetastore.ListMigrationExecutions call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListMigrationExecutions must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMigrationExecutionsList(request)`

- **OnSuccess**: <code>[ListMigrationExecutionsResponse](src/models/list-migration-executions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMigrationExecutionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMigrationExecutionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError&gt;</code>, with `result.value` of type <code>[ListMigrationExecutionsResponse](src/models/list-migration-executions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesMoveTableToDatabase(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a table to another database.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesMoveTableToDatabase({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesMoveTableToDatabase({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[MoveTableToDatabaseRequest](src/models/move-table-to-database-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesMoveTableToDatabase(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesMoveTableToDatabase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesPatch(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>requestId?</code> | <code>string</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. |
| <code>updateMask?</code> | <code>string</code> | Required. A field mask used to specify the fields to be overwritten in the metastore service resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask. |
| <code>body</code> | <code>[Service](src/models/service.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesQueryMetadata(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Dataproc Metastore metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesQueryMetadata({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesQueryMetadata({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[QueryMetadataRequest](src/models/query-metadata-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesQueryMetadata(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesQueryMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesRestore(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores a service from a backup.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesRestore({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesRestore({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[RestoreServiceRequest](src/models/restore-service-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesRestore(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesRestore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy2
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Policy2
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](src/models/set-iam-policy-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy2](src/models/policy2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesStartMigration(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the Managed Migration process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesStartMigration({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesStartMigration({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[StartMigrationRequest](src/models/start-migration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesStartMigration(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesStartMigration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metastoreProjectsLocationsServicesTestIamPermissions(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metastoreProjectsLocationsServicesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .metastoreProjectsLocationsServicesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    servicesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestIamPermissionsResponse
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
| <code>servicesId</code> | <code>string</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metastoreProjectsLocationsServicesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metastoreProjectsLocationsServicesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudDataprocError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

