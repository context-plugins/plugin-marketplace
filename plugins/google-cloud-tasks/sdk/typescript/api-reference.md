# Reference

> Source: [GoogleCloudTasksClient](src/client.ts)

<details>
<summary><code>cloudtasksProjectsLocationsGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise&lt;Location, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError&gt;</code></summary>

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
  const response = await client.cloudtasksProjectsLocationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type Location
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsGet({ projectsId: "some example string", locationsId: "some example string" })
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

**Direct**: `await client.cloudtasksProjectsLocationsGet(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsGetCmekConfig(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigRequest, options?: RequestOptions): ApiPromise&lt;CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the CMEK config. Gets the Customer Managed Encryption Key configured with the Cloud Tasks location. By default there is no `kms_key` configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsGetCmekConfig({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type CmekConfig
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsGetCmekConfig({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CmekConfig
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.cloudtasksProjectsLocationsGetCmekConfig(request)`

- **OnSuccess**: <code>[CmekConfig](src/models/cmek-config.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsGetCmekConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError&gt;</code>, with `result.value` of type <code>[CmekConfig](src/models/cmek-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsList(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsListRequest, options?: RequestOptions): ApiPromise&lt;ListLocationsResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsListError&gt;</code></summary>

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
  const response = await client.cloudtasksProjectsLocationsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsList({ projectsId: "some example string" })
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
| <code>filter?</code> | <code>string</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of results to return. If not set, the service selects a default. |
| <code>pageToken?</code> | <code>string</code> | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsList(request)`

- **OnSuccess**: <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationsResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsListError&gt;</code>, with `result.value` of type <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsOperationsGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError&gt;</code></summary>

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
  const response = await client.cloudtasksProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsOperationsGet({
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

**Direct**: `await client.cloudtasksProjectsLocationsOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesCreate(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateRequest, options?: RequestOptions): ApiPromise&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Queue
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Queue
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[Queue](src/models/queue.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesCreate(request)`

- **OnSuccess**: <code>[Queue](src/models/queue.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError&gt;</code>, with `result.value` of type <code>[Queue](src/models/queue.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesDelete(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue, you may be prevented from creating a new queue with the same name as the deleted queue for a tombstone window of up to 3 days. During this window, the CreateQueue operation may appear to recreate the queue, but this can be misleading. If you attempt to create a queue with the same name as one that is in the tombstone window, run GetQueue to confirm that the queue creation was successful. If GetQueue returns 200 response code, your queue was successfully created with the name of the previously deleted queue. Otherwise, your queue did not successfully recreate. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetRequest, options?: RequestOptions): ApiPromise&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a queue.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
  });
  // TODO: Handle 'response' of type Queue
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Queue
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesGet(request)`

- **OnSuccess**: <code>[Queue](src/models/queue.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError&gt;</code>, with `result.value` of type <code>[Queue](src/models/queue.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesGetIamPolicy(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following Google IAM permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](src/models/get-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesList(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListRequest, options?: RequestOptions): ApiPromise&lt;ListQueuesResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists queues. Queues are returned in lexicographical order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListQueuesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListQueuesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as described in [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters). Sample filter "state: PAUSED". Note that using filters might cause fewer queues than the requested page_size to be returned. |
| <code>pageSize?</code> | <code>number</code> | Requested page size. The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use the next_page_token in the response to determine if more queues exist. |
| <code>pageToken?</code> | <code>string</code> | A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListQueues method. It is an error to switch the value of the filter while iterating through pages. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesList(request)`

- **OnSuccess**: <code>[ListQueuesResponse](src/models/list-queues-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListQueuesResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError&gt;</code>, with `result.value` of type <code>[ListQueuesResponse](src/models/list-queues-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesPatch(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchRequest, options?: RequestOptions): ApiPromise&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Queue
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Queue
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>updateMask?</code> | <code>string</code> | A mask used to specify which fields of the queue are being updated. If empty, then all fields will be updated. |
| <code>body</code> | <code>[Queue](src/models/queue.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesPatch(request)`

- **OnSuccess**: <code>[Queue](src/models/queue.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError&gt;</code>, with `result.value` of type <code>[Queue](src/models/queue.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesPause(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseRequest, options?: RequestOptions): ApiPromise&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesPause({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Queue
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesPause({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Queue
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesPause(request)`

- **OnSuccess**: <code>[Queue](src/models/queue.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesPause(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError&gt;</code>, with `result.value` of type <code>[Queue](src/models/queue.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesPurge(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeRequest, options?: RequestOptions): ApiPromise&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesPurge({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Queue
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesPurge({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Queue
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesPurge(request)`

- **OnSuccess**: <code>[Queue](src/models/queue.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesPurge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError&gt;</code>, with `result.value` of type <code>[Queue](src/models/queue.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesResume(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeRequest, options?: RequestOptions): ApiPromise&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud Tasks Scaling Risks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesResume({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Queue
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesResume({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Queue
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesResume(request)`

- **OnSuccess**: <code>[Queue](src/models/queue.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesResume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError&gt;</code>, with `result.value` of type <code>[Queue](src/models/queue.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesSetIamPolicy(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following Google IAM permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksBatchCreate(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a batch of tasks and adds them to a queue. All tasks must be for the same queue. A maximum of 100 tasks can be created in a single batch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksBatchCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksBatchCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[BatchCreateTasksRequest](src/models/batch-create-tasks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksBatchCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksBatchCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksBatchDelete(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a batch of tasks. This is a non-atomic operation: if deletion fails for some tasks, it can still succeed for others. The metadata field of google.longrunning.Operation contains details of failed deletions. A maximum of 1000 tasks can be deleted in a batch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksBatchDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksBatchDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[BatchDeleteTasksRequest](src/models/batch-delete-tasks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksBatchDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksBatchDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksBuffer(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferRequest, options?: RequestOptions): ApiPromise&lt;BufferTaskResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksBuffer({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    taskId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type BufferTaskResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksBuffer({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    taskId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BufferTaskResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>taskId</code> | <code>string</code> | Optional. Task ID for the task being created. If not provided, Cloud Tasks generates an ID for the task. |
| <code>body</code> | <code>[BufferTaskRequest](src/models/buffer-task-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksBuffer(request)`

- **OnSuccess**: <code>[BufferTaskResponse](src/models/buffer-task-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksBuffer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BufferTaskResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError&gt;</code>, with `result.value` of type <code>[BufferTaskResponse](src/models/buffer-task-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksCreate(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateRequest, options?: RequestOptions): ApiPromise&lt;Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[CreateTaskRequest](src/models/create-task-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksCreate(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksDelete(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    tasksId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    tasksId: "some example string",
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>tasksId</code> | <code>string</code> | Resource name segment (tasksId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetRequest, options?: RequestOptions): ApiPromise&lt;Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a task. After a task is successfully executed or has exhausted its retry attempts, the task is deleted. A `GetTask` request for a deleted task returns a `NOT_FOUND` error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksGet({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    tasksId: "some example string",
  });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksGet({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    tasksId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>tasksId</code> | <code>string</code> | Resource name segment (tasksId). |
| <code>responseView?</code> | <code>[ResponseView2](src/models/response-view2.ts)</code> | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksGet(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksList(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListRequest, options?: RequestOptions): ApiPromise&lt;ListTasksResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksList({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
  });
  // TODO: Handle 'response' of type ListTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksList({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>pageSize?</code> | <code>number</code> | Maximum page size. Fewer tasks than requested might be returned, even if more tasks exist; use next_page_token in the response to determine if more tasks exist. The maximum page size is 1000. If unspecified, the page size will be the maximum. |
| <code>pageToken?</code> | <code>string</code> | A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListTasks method. The page token is valid for only 2 hours. |
| <code>responseView?</code> | <code>[ResponseView2](src/models/response-view2.ts)</code> | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksList(request)`

- **OnSuccess**: <code>[ListTasksResponse](src/models/list-tasks-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTasksResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError&gt;</code>, with `result.value` of type <code>[ListTasksResponse](src/models/list-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTasksRun(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunRequest, options?: RequestOptions): ApiPromise&lt;Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTasksRun({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    tasksId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTasksRun({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    tasksId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>tasksId</code> | <code>string</code> | Resource name segment (tasksId). |
| <code>body</code> | <code>[RunTaskRequest](src/models/run-task-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTasksRun(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTasksRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsQueuesTestIamPermissions(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsQueuesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsQueuesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    queuesId: "some example string",
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
| <code>queuesId</code> | <code>string</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsQueuesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsQueuesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudtasksProjectsLocationsUpdateCmekConfig(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigRequest, options?: RequestOptions): ApiPromise&lt;CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or Updates a CMEK config. Updates the Customer Managed Encryption Key associated with the Cloud Tasks location (Creates if the key does not already exist). All new tasks created in the location will be encrypted at-rest with the KMS-key provided in the config.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudtasksProjectsLocationsUpdateCmekConfig({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CmekConfig
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudtasksProjectsLocationsUpdateCmekConfig({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CmekConfig
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>updateMask?</code> | <code>string</code> | List of fields to be updated in this request. |
| <code>body</code> | <code>[CmekConfig](src/models/cmek-config.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudtasksProjectsLocationsUpdateCmekConfig(request)`

- **OnSuccess**: <code>[CmekConfig](src/models/cmek-config.ts)</code>
- **OnError**: throws <code>[GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudtasksProjectsLocationsUpdateCmekConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError&gt;</code>, with `result.value` of type <code>[CmekConfig](src/models/cmek-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTasksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

