# Reference

> Source: [GoogleCloudBuildClient](src/client.ts)

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsCreate(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsCreate({
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
| <code>connectionId?</code> | <code>string</code> | Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. |
| <code>body</code> | <code>[Connection](src/models/connection.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsDelete(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>etag?</code> | <code>string</code> | The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned. |
| <code>validateOnly?</code> | <code>boolean</code> | If set, validate the request, but do not actually post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest, options?: RequestOptions): ApiPromise&lt;FetchLinkableRepositoriesResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  });
  // TODO: Handle 'response' of type FetchLinkableRepositoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FetchLinkableRepositoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>pageSize?</code> | <code>number</code> | Number of results to return in the list. Default to 20. |
| <code>pageToken?</code> | <code>string</code> | Page start. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(request)`

- **OnSuccess**: <code>[FetchLinkableRepositoriesResponse](src/models/fetch-linkable-repositories-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FetchLinkableRepositoriesResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError&gt;</code>, with `result.value` of type <code>[FetchLinkableRepositoriesResponse](src/models/fetch-linkable-repositories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetRequest, options?: RequestOptions): ApiPromise&lt;Connection, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  });
  // TODO: Handle 'response' of type Connection
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Connection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsGet(request)`

- **OnSuccess**: <code>[Connection](src/models/connection.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Connection, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError&gt;</code>, with `result.value` of type <code>[Connection](src/models/connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsGetIamPolicy(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.cloudbuildProjectsLocationsConnectionsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsList(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListRequest, options?: RequestOptions): ApiPromise&lt;ListConnectionsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Connections in a given project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListConnectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListConnectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pageSize?</code> | <code>number</code> | Number of results to return in the list. |
| <code>pageToken?</code> | <code>string</code> | Page start. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsList(request)`

- **OnSuccess**: <code>[ListConnectionsResponse](src/models/list-connections-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListConnectionsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError&gt;</code>, with `result.value` of type <code>[ListConnectionsResponse](src/models/list-connections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsPatch(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>allowMissing?</code> | <code>boolean</code> | If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). |
| <code>etag?</code> | <code>string</code> | The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned. |
| <code>updateMask?</code> | <code>string</code> | The list of fields to be updated. |
| <code>body</code> | <code>[Connection](src/models/connection.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsProcessWebhook(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ProcessWebhook is called by the external SCM for notifying of events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsProcessWebhook({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsProcessWebhook({
    projectsId: "some example string",
    locationsId: "some example string",
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
| <code>webhookKey?</code> | <code>string</code> | Arbitrary additional key to find the matching repository for a webhook event if needed. |
| <code>body</code> | <code>[HttpBody](src/models/http-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsProcessWebhook(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsProcessWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest, options?: RequestOptions): ApiPromise&lt;FetchReadTokenResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches read token of a given repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FetchReadTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FetchReadTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>repositoriesId</code> | <code>string</code> | Resource name segment (repositoriesId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(request)`

- **OnSuccess**: <code>[FetchReadTokenResponse](src/models/fetch-read-token-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FetchReadTokenResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError&gt;</code>, with `result.value` of type <code>[FetchReadTokenResponse](src/models/fetch-read-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest, options?: RequestOptions): ApiPromise&lt;FetchReadWriteTokenResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches read/write token of a given repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FetchReadWriteTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FetchReadWriteTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>repositoriesId</code> | <code>string</code> | Resource name segment (repositoriesId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(request)`

- **OnSuccess**: <code>[FetchReadWriteTokenResponse](src/models/fetch-read-write-token-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FetchReadWriteTokenResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError&gt;</code>, with `result.value` of type <code>[FetchReadWriteTokenResponse](src/models/fetch-read-write-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple repositories inside a connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[BatchCreateRepositoriesRequest](src/models/batch-create-repositories-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesCreate(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>repositoryId?</code> | <code>string</code> | Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. |
| <code>body</code> | <code>[Repository](src/models/repository.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesDelete(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>repositoriesId</code> | <code>string</code> | Resource name segment (repositoriesId). |
| <code>etag?</code> | <code>string</code> | The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned. |
| <code>validateOnly?</code> | <code>boolean</code> | If set, validate the request, but do not actually post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest, options?: RequestOptions): ApiPromise&lt;FetchGitRefsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the list of branches or tags for a given repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
  });
  // TODO: Handle 'response' of type FetchGitRefsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FetchGitRefsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>repositoriesId</code> | <code>string</code> | Resource name segment (repositoriesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Number of results to return in the list. Default to 20. |
| <code>pageToken?</code> | <code>string</code> | Optional. Page start. |
| <code>refType?</code> | <code>[RefType](src/models/ref-type.ts)</code> | Type of refs to fetch |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(request)`

- **OnSuccess**: <code>[FetchGitRefsResponse](src/models/fetch-git-refs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FetchGitRefsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError&gt;</code>, with `result.value` of type <code>[FetchGitRefsResponse](src/models/fetch-git-refs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest, options?: RequestOptions): ApiPromise&lt;Repository, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
  });
  // TODO: Handle 'response' of type Repository
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    repositoriesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Repository
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>repositoriesId</code> | <code>string</code> | Resource name segment (repositoriesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesGet(request)`

- **OnSuccess**: <code>[Repository](src/models/repository.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Repository, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError&gt;</code>, with `result.value` of type <code>[Repository](src/models/repository.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsRepositoriesList(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListRequest, options?: RequestOptions): ApiPromise&lt;ListRepositoriesResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Repositories in a given connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudbuildProjectsLocationsConnectionsRepositoriesList({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  });
  // TODO: Handle 'response' of type ListRepositoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsRepositoriesList({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListRepositoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>filter?</code> | <code>string</code> | A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`. |
| <code>pageSize?</code> | <code>number</code> | Number of results to return in the list. |
| <code>pageToken?</code> | <code>string</code> | Page start. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesList(request)`

- **OnSuccess**: <code>[ListRepositoriesResponse](src/models/list-repositories-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsRepositoriesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListRepositoriesResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError&gt;</code>, with `result.value` of type <code>[ListRepositoriesResponse](src/models/list-repositories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsSetIamPolicy(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError&gt;</code></summary>

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
  const response = await client.cloudbuildProjectsLocationsConnectionsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsConnectionsTestIamPermissions(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.cloudbuildProjectsLocationsConnectionsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsConnectionsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    connectionsId: "some example string",
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
| <code>connectionsId</code> | <code>string</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudbuildProjectsLocationsConnectionsTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsConnectionsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise&lt;Location, GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError&gt;</code></summary>

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
  const response = await client.cloudbuildProjectsLocationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type Location
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsGet({ projectsId: "some example string", locationsId: "some example string" })
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

**Direct**: `await client.cloudbuildProjectsLocationsGet(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location, GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsList(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsListRequest, options?: RequestOptions): ApiPromise&lt;ListLocationsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsListError&gt;</code></summary>

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
  const response = await client.cloudbuildProjectsLocationsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsList({ projectsId: "some example string" })
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

**Direct**: `await client.cloudbuildProjectsLocationsList(request)`

- **OnSuccess**: <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsListError&gt;</code>, with `result.value` of type <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsOperationsCancel(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError&gt;</code></summary>

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
  const response = await client.cloudbuildProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsOperationsCancel({
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

**Direct**: `await client.cloudbuildProjectsLocationsOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloudbuildProjectsLocationsOperationsGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError&gt;</code></summary>

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
  const response = await client.cloudbuildProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .cloudbuildProjectsLocationsOperationsGet({
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

**Direct**: `await client.cloudbuildProjectsLocationsOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudbuildProjectsLocationsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

