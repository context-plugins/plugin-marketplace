# Reference

> Source: [GoogleCloudStorageTransferServiceClient](src/client.ts)

## GoogleServiceAccounts

> Source: [GoogleServiceAccounts](src/resources/google-service-accounts.ts)

<details>
<summary><code>storagetransferGoogleServiceAccountsGet(request: GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleServiceAccount, GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googleServiceAccounts.storagetransferGoogleServiceAccountsGet({
    projectId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleServiceAccount
} catch (err) {
  // TODO: Handle 'err' of type GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googleServiceAccounts
  .storagetransferGoogleServiceAccountsGet({ projectId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleServiceAccount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud project that the Google service account is associated with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googleServiceAccounts.storagetransferGoogleServiceAccountsGet(request)`

- **OnSuccess**: <code>[GoogleServiceAccount](src/models/google-service-account.ts)</code>
- **OnError**: throws <code>[GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError](src/resources/google-service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googleServiceAccounts.storagetransferGoogleServiceAccountsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleServiceAccount, GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError&gt;</code>, with `result.value` of type <code>[GoogleServiceAccount](src/models/google-service-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>storagetransferProjectsAgentPoolsCreate(request: Projects.StoragetransferProjectsAgentPoolsCreateRequest, options?: RequestOptions): ApiPromise&lt;AgentPool, Projects.StoragetransferProjectsAgentPoolsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an agent pool resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.storagetransferProjectsAgentPoolsCreate({
    projectsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AgentPool
} catch (err) {
  // TODO: Handle 'err' of type Projects.StoragetransferProjectsAgentPoolsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .storagetransferProjectsAgentPoolsCreate({ projectsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentPool
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>agentPoolId?</code> | <code>string</code> | Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`. |
| <code>body</code> | <code>[AgentPool](src/models/agent-pool.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.storagetransferProjectsAgentPoolsCreate(request)`

- **OnSuccess**: <code>[AgentPool](src/models/agent-pool.ts)</code>
- **OnError**: throws <code>[Projects.StoragetransferProjectsAgentPoolsCreateError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.storagetransferProjectsAgentPoolsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentPool, Projects.StoragetransferProjectsAgentPoolsCreateError&gt;</code>, with `result.value` of type <code>[AgentPool](src/models/agent-pool.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferProjectsAgentPoolsDelete(request: Projects.StoragetransferProjectsAgentPoolsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Projects.StoragetransferProjectsAgentPoolsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an agent pool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.storagetransferProjectsAgentPoolsDelete({
    projectsId: "some example string",
    agentPoolsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Projects.StoragetransferProjectsAgentPoolsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .storagetransferProjectsAgentPoolsDelete({
    projectsId: "some example string",
    agentPoolsId: "some example string",
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
| <code>agentPoolsId</code> | <code>string</code> | Resource name segment (agentPoolsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.storagetransferProjectsAgentPoolsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Projects.StoragetransferProjectsAgentPoolsDeleteError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.storagetransferProjectsAgentPoolsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Projects.StoragetransferProjectsAgentPoolsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferProjectsAgentPoolsGet(request: Projects.StoragetransferProjectsAgentPoolsGetRequest, options?: RequestOptions): ApiPromise&lt;AgentPool, Projects.StoragetransferProjectsAgentPoolsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an agent pool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.storagetransferProjectsAgentPoolsGet({
    projectsId: "some example string",
    agentPoolsId: "some example string",
  });
  // TODO: Handle 'response' of type AgentPool
} catch (err) {
  // TODO: Handle 'err' of type Projects.StoragetransferProjectsAgentPoolsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .storagetransferProjectsAgentPoolsGet({
    projectsId: "some example string",
    agentPoolsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentPool
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>agentPoolsId</code> | <code>string</code> | Resource name segment (agentPoolsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.storagetransferProjectsAgentPoolsGet(request)`

- **OnSuccess**: <code>[AgentPool](src/models/agent-pool.ts)</code>
- **OnError**: throws <code>[Projects.StoragetransferProjectsAgentPoolsGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.storagetransferProjectsAgentPoolsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentPool, Projects.StoragetransferProjectsAgentPoolsGetError&gt;</code>, with `result.value` of type <code>[AgentPool](src/models/agent-pool.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferProjectsAgentPoolsList(request: Projects.StoragetransferProjectsAgentPoolsListRequest, options?: RequestOptions): ApiPromise&lt;ListAgentPoolsResponse, Projects.StoragetransferProjectsAgentPoolsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists agent pools.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.storagetransferProjectsAgentPoolsList({
    projectsId: "some example string",
  });
  // TODO: Handle 'response' of type ListAgentPoolsResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.StoragetransferProjectsAgentPoolsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .storagetransferProjectsAgentPoolsList({ projectsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAgentPoolsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project. |
| <code>pageSize?</code> | <code>number</code> | The list page size. The max allowed value is `256`. |
| <code>pageToken?</code> | <code>string</code> | The list page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.storagetransferProjectsAgentPoolsList(request)`

- **OnSuccess**: <code>[ListAgentPoolsResponse](src/models/list-agent-pools-response.ts)</code>
- **OnError**: throws <code>[Projects.StoragetransferProjectsAgentPoolsListError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.storagetransferProjectsAgentPoolsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAgentPoolsResponse, Projects.StoragetransferProjectsAgentPoolsListError&gt;</code>, with `result.value` of type <code>[ListAgentPoolsResponse](src/models/list-agent-pools-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferProjectsAgentPoolsPatch(request: Projects.StoragetransferProjectsAgentPoolsPatchRequest, options?: RequestOptions): ApiPromise&lt;AgentPool, Projects.StoragetransferProjectsAgentPoolsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing agent pool resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.storagetransferProjectsAgentPoolsPatch({
    projectsId: "some example string",
    agentPoolsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AgentPool
} catch (err) {
  // TODO: Handle 'err' of type Projects.StoragetransferProjectsAgentPoolsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .storagetransferProjectsAgentPoolsPatch({
    projectsId: "some example string",
    agentPoolsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentPool
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>agentPoolsId</code> | <code>string</code> | Resource name segment (agentPoolsId). |
| <code>updateMask?</code> | <code>string</code> | The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit |
| <code>body</code> | <code>[AgentPool](src/models/agent-pool.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.storagetransferProjectsAgentPoolsPatch(request)`

- **OnSuccess**: <code>[AgentPool](src/models/agent-pool.ts)</code>
- **OnError**: throws <code>[Projects.StoragetransferProjectsAgentPoolsPatchError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.storagetransferProjectsAgentPoolsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentPool, Projects.StoragetransferProjectsAgentPoolsPatchError&gt;</code>, with `result.value` of type <code>[AgentPool](src/models/agent-pool.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransferJobs

> Source: [TransferJobs](src/resources/transfer-jobs.ts)

<details>
<summary><code>storagetransferTransferJobsCreate(request: TransferJobs.StoragetransferTransferJobsCreateRequest, options?: RequestOptions): ApiPromise&lt;TransferJob, TransferJobs.StoragetransferTransferJobsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a transfer job that runs periodically.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferJobs.storagetransferTransferJobsCreate({ body: {} });
  // TODO: Handle 'response' of type TransferJob
} catch (err) {
  // TODO: Handle 'err' of type TransferJobs.StoragetransferTransferJobsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferJobs.storagetransferTransferJobsCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferJob
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferJob](src/models/transfer-job.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferJobs.storagetransferTransferJobsCreate(request)`

- **OnSuccess**: <code>[TransferJob](src/models/transfer-job.ts)</code>
- **OnError**: throws <code>[TransferJobs.StoragetransferTransferJobsCreateError](src/resources/transfer-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferJobs.storagetransferTransferJobsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferJob, TransferJobs.StoragetransferTransferJobsCreateError&gt;</code>, with `result.value` of type <code>[TransferJob](src/models/transfer-job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferJobsDelete(request: TransferJobs.StoragetransferTransferJobsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TransferJobs.StoragetransferTransferJobsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferJobs.storagetransferTransferJobsDelete({
    transferJobsId: "some example string",
    projectId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type TransferJobs.StoragetransferTransferJobsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferJobs
  .storagetransferTransferJobsDelete({
    transferJobsId: "some example string",
    projectId: "some example string",
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
| <code>transferJobsId</code> | <code>string</code> | Resource name segment (transferJobsId). |
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud project that owns the job. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferJobs.storagetransferTransferJobsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[TransferJobs.StoragetransferTransferJobsDeleteError](src/resources/transfer-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferJobs.storagetransferTransferJobsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, TransferJobs.StoragetransferTransferJobsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferJobsGet(request: TransferJobs.StoragetransferTransferJobsGetRequest, options?: RequestOptions): ApiPromise&lt;TransferJob, TransferJobs.StoragetransferTransferJobsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a transfer job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferJobs.storagetransferTransferJobsGet({
    transferJobsId: "some example string",
    projectId: "some example string",
  });
  // TODO: Handle 'response' of type TransferJob
} catch (err) {
  // TODO: Handle 'err' of type TransferJobs.StoragetransferTransferJobsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferJobs
  .storagetransferTransferJobsGet({ transferJobsId: "some example string", projectId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferJob
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferJobsId</code> | <code>string</code> | Resource name segment (transferJobsId). |
| <code>projectId</code> | <code>string</code> | Required. The ID of the Google Cloud project that owns the job. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferJobs.storagetransferTransferJobsGet(request)`

- **OnSuccess**: <code>[TransferJob](src/models/transfer-job.ts)</code>
- **OnError**: throws <code>[TransferJobs.StoragetransferTransferJobsGetError](src/resources/transfer-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferJobs.storagetransferTransferJobsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferJob, TransferJobs.StoragetransferTransferJobsGetError&gt;</code>, with `result.value` of type <code>[TransferJob](src/models/transfer-job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferJobsList(request: TransferJobs.StoragetransferTransferJobsListRequest, options?: RequestOptions): ApiPromise&lt;ListTransferJobsResponse, TransferJobs.StoragetransferTransferJobsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists transfer jobs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferJobs.storagetransferTransferJobsList({
    filter: "some example string",
  });
  // TODO: Handle 'response' of type ListTransferJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type TransferJobs.StoragetransferTransferJobsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferJobs
  .storagetransferTransferJobsList({ filter: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTransferJobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter</code> | <code>string</code> | Required. A list of query parameters specified as JSON text in the form of: ``` { "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS", "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ``` The JSON formatting in the example is for display only; provide the query parameters without spaces or line breaks. * `projectId` is required. * Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `jobNames` and `jobStatuses` are optional. Valid values are case-insensitive: * ENABLED * DISABLED * DELETED * Specify `"dataBackend":"QUERY_REPLICATION_CONFIGS"` to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket with `sourceBucket` and/or to a particular bucket with `sinkBucket`. |
| <code>pageSize?</code> | <code>number</code> | The list page size. The max allowed value is 256. |
| <code>pageToken?</code> | <code>string</code> | The list page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferJobs.storagetransferTransferJobsList(request)`

- **OnSuccess**: <code>[ListTransferJobsResponse](src/models/list-transfer-jobs-response.ts)</code>
- **OnError**: throws <code>[TransferJobs.StoragetransferTransferJobsListError](src/resources/transfer-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferJobs.storagetransferTransferJobsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTransferJobsResponse, TransferJobs.StoragetransferTransferJobsListError&gt;</code>, with `result.value` of type <code>[ListTransferJobsResponse](src/models/list-transfer-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferJobsPatch(request: TransferJobs.StoragetransferTransferJobsPatchRequest, options?: RequestOptions): ApiPromise&lt;TransferJob, TransferJobs.StoragetransferTransferJobsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferJobs.storagetransferTransferJobsPatch({
    transferJobsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TransferJob
} catch (err) {
  // TODO: Handle 'err' of type TransferJobs.StoragetransferTransferJobsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferJobs
  .storagetransferTransferJobsPatch({ transferJobsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferJob
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferJobsId</code> | <code>string</code> | Resource name segment (transferJobsId). |
| <code>body</code> | <code>[UpdateTransferJobRequest](src/models/update-transfer-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferJobs.storagetransferTransferJobsPatch(request)`

- **OnSuccess**: <code>[TransferJob](src/models/transfer-job.ts)</code>
- **OnError**: throws <code>[TransferJobs.StoragetransferTransferJobsPatchError](src/resources/transfer-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferJobs.storagetransferTransferJobsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferJob, TransferJobs.StoragetransferTransferJobsPatchError&gt;</code>, with `result.value` of type <code>[TransferJob](src/models/transfer-job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferJobsRun(request: TransferJobs.StoragetransferTransferJobsRunRequest, options?: RequestOptions): ApiPromise&lt;Operation, TransferJobs.StoragetransferTransferJobsRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferJobs.storagetransferTransferJobsRun({
    transferJobsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type TransferJobs.StoragetransferTransferJobsRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferJobs
  .storagetransferTransferJobsRun({ transferJobsId: "some example string", body: {} })
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
| <code>transferJobsId</code> | <code>string</code> | Resource name segment (transferJobsId). |
| <code>body</code> | <code>[RunTransferJobRequest](src/models/run-transfer-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferJobs.storagetransferTransferJobsRun(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[TransferJobs.StoragetransferTransferJobsRunError](src/resources/transfer-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferJobs.storagetransferTransferJobsRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, TransferJobs.StoragetransferTransferJobsRunError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransferOperations

> Source: [TransferOperations](src/resources/transfer-operations.ts)

<details>
<summary><code>storagetransferTransferOperationsCancel(request: TransferOperations.StoragetransferTransferOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TransferOperations.StoragetransferTransferOperationsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOperations.storagetransferTransferOperationsCancel({
    transferOperationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type TransferOperations.StoragetransferTransferOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOperations
  .storagetransferTransferOperationsCancel({ transferOperationsId: "some example string", body: {} })
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
| <code>transferOperationsId</code> | <code>string</code> | Resource name segment (transferOperationsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOperations.storagetransferTransferOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[TransferOperations.StoragetransferTransferOperationsCancelError](src/resources/transfer-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOperations.storagetransferTransferOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, TransferOperations.StoragetransferTransferOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferOperationsGet(request: TransferOperations.StoragetransferTransferOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, TransferOperations.StoragetransferTransferOperationsGetError&gt;</code></summary>

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
  const response = await client.transferOperations.storagetransferTransferOperationsGet({
    transferOperationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type TransferOperations.StoragetransferTransferOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOperations
  .storagetransferTransferOperationsGet({ transferOperationsId: "some example string" })
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
| <code>transferOperationsId</code> | <code>string</code> | Resource name segment (transferOperationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOperations.storagetransferTransferOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[TransferOperations.StoragetransferTransferOperationsGetError](src/resources/transfer-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOperations.storagetransferTransferOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, TransferOperations.StoragetransferTransferOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferOperationsList(request: TransferOperations.StoragetransferTransferOperationsListRequest, options?: RequestOptions): ApiPromise&lt;ListOperationsResponse, TransferOperations.StoragetransferTransferOperationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOperations.storagetransferTransferOperationsList({
    filter: "some example string",
  });
  // TODO: Handle 'response' of type ListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type TransferOperations.StoragetransferTransferOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOperations
  .storagetransferTransferOperationsList({ filter: "some example string" })
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
| <code>filter</code> | <code>string</code> | Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern": "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern": "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime": "max_creation_time", "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is the only argument that is required. If specified, `jobNamePattern` and `operationNamePattern` must match the full job or operation name respectively. '*' is a wildcard matching 0 or more characters. `minCreationTime` and `maxCreationTime` should be timestamps encoded as a string in the [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED. |
| <code>pageSize?</code> | <code>number</code> | The list page size. The max allowed value is 256. |
| <code>pageToken?</code> | <code>string</code> | The list page token. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOperations.storagetransferTransferOperationsList(request)`

- **OnSuccess**: <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: throws <code>[TransferOperations.StoragetransferTransferOperationsListError](src/resources/transfer-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOperations.storagetransferTransferOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOperationsResponse, TransferOperations.StoragetransferTransferOperationsListError&gt;</code>, with `result.value` of type <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferOperationsPause(request: TransferOperations.StoragetransferTransferOperationsPauseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TransferOperations.StoragetransferTransferOperationsPauseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pauses a transfer operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOperations.storagetransferTransferOperationsPause({
    transferOperationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type TransferOperations.StoragetransferTransferOperationsPauseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOperations
  .storagetransferTransferOperationsPause({ transferOperationsId: "some example string", body: {} })
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
| <code>transferOperationsId</code> | <code>string</code> | Resource name segment (transferOperationsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOperations.storagetransferTransferOperationsPause(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[TransferOperations.StoragetransferTransferOperationsPauseError](src/resources/transfer-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOperations.storagetransferTransferOperationsPause(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, TransferOperations.StoragetransferTransferOperationsPauseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storagetransferTransferOperationsResume(request: TransferOperations.StoragetransferTransferOperationsResumeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TransferOperations.StoragetransferTransferOperationsResumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resumes a transfer operation that is paused.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOperations.storagetransferTransferOperationsResume({
    transferOperationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type TransferOperations.StoragetransferTransferOperationsResumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOperations
  .storagetransferTransferOperationsResume({ transferOperationsId: "some example string", body: {} })
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
| <code>transferOperationsId</code> | <code>string</code> | Resource name segment (transferOperationsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOperations.storagetransferTransferOperationsResume(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[TransferOperations.StoragetransferTransferOperationsResumeError](src/resources/transfer-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOperations.storagetransferTransferOperationsResume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, TransferOperations.StoragetransferTransferOperationsResumeError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudStorageTransferServiceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

