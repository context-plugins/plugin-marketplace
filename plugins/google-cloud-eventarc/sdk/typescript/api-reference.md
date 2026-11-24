# Reference

> Source: [GoogleCloudEventarcClient](src/client.ts)

<details>
<summary><code>eventarcProjectsLocationsChannelConnectionsCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new ChannelConnection in a particular project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelConnectionsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelConnectionsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>channelConnectionId?</code> | <code>string</code> | Required. The user-provided ID to be assigned to the channel connection. |
| <code>body</code> | <code>[ChannelConnection](src/models/channel-connection.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelConnectionsCreate(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelConnectionsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelConnectionsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single ChannelConnection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelConnectionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelConnectionsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>channelConnectionsId</code> | <code>string</code> | Resource name segment (channelConnectionsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelConnectionsDelete(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelConnectionsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelConnectionsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetRequest, options?: RequestOptions): ApiPromise&lt;ChannelConnection, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single ChannelConnection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelConnectionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
  });
  // TODO: Handle 'response' of type ChannelConnection
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelConnectionsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChannelConnection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>channelConnectionsId</code> | <code>string</code> | Resource name segment (channelConnectionsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelConnectionsGet(request)`

- **OnSuccess**: <code>[ChannelConnection](src/models/channel-connection.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelConnectionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChannelConnection, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError&gt;</code>, with `result.value` of type <code>[ChannelConnection](src/models/channel-connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelConnectionsGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsChannelConnectionsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelConnectionsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
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
| <code>channelConnectionsId</code> | <code>string</code> | Resource name segment (channelConnectionsId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelConnectionsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelConnectionsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelConnectionsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListRequest, options?: RequestOptions): ApiPromise&lt;ListChannelConnectionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List channel connections.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelConnectionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListChannelConnectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelConnectionsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListChannelConnectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pageSize?</code> | <code>number</code> | The maximum number of channel connections to return on each page. Note: The service may send fewer responses. |
| <code>pageToken?</code> | <code>string</code> | The page token; provide the value from the `next_page_token` field in a previous `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelConnetions` match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelConnectionsList(request)`

- **OnSuccess**: <code>[ListChannelConnectionsResponse](src/models/list-channel-connections-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelConnectionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListChannelConnectionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError&gt;</code>, with `result.value` of type <code>[ListChannelConnectionsResponse](src/models/list-channel-connections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelConnectionsSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsChannelConnectionsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelConnectionsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
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
| <code>channelConnectionsId</code> | <code>string</code> | Resource name segment (channelConnectionsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelConnectionsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelConnectionsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelConnectionsTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsChannelConnectionsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelConnectionsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    channelConnectionsId: "some example string",
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
| <code>channelConnectionsId</code> | <code>string</code> | Resource name segment (channelConnectionsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelConnectionsTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelConnectionsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new channel in a particular project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>channelId?</code> | <code>string</code> | Required. The user-provided ID to be assigned to the channel. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Channel](src/models/channel.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsCreate(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>channelsId</code> | <code>string</code> | Resource name segment (channelsId). |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsDelete(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetRequest, options?: RequestOptions): ApiPromise&lt;Channel, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
  });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>channelsId</code> | <code>string</code> | Resource name segment (channelsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsGet(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsChannelsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
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
| <code>channelsId</code> | <code>string</code> | Resource name segment (channelsId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListRequest, options?: RequestOptions): ApiPromise&lt;ListChannelsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List channels.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListChannelsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListChannelsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>orderBy?</code> | <code>string</code> | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, channel_id`. |
| <code>pageSize?</code> | <code>number</code> | The maximum number of channels to return on each page. Note: The service may send fewer. |
| <code>pageToken?</code> | <code>string</code> | The page token; provide the value from the `next_page_token` field in a previous `ListChannels` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannels` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsList(request)`

- **OnSuccess**: <code>[ListChannelsResponse](src/models/list-channels-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListChannelsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError&gt;</code>, with `result.value` of type <code>[ListChannelsResponse](src/models/list-channels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsChannelsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>channelsId</code> | <code>string</code> | Resource name segment (channelsId). |
| <code>updateMask?</code> | <code>string</code> | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Channel](src/models/channel.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsPatch(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsChannelsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
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
| <code>channelsId</code> | <code>string</code> | Resource name segment (channelsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsChannelsTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsChannelsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsChannelsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    channelsId: "some example string",
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
| <code>channelsId</code> | <code>string</code> | Resource name segment (channelsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsChannelsTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsChannelsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Enrollment in a particular project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsEnrollmentsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>enrollmentId?</code> | <code>string</code> | Required. The user-provided ID to be assigned to the Enrollment. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Enrollment](src/models/enrollment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsCreate(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single Enrollment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsEnrollmentsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>enrollmentsId</code> | <code>string</code> | Resource name segment (enrollmentsId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the Enrollment is not found, the request will succeed but no action will be taken on the server. |
| <code>etag?</code> | <code>string</code> | Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the resource. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsDelete(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetRequest, options?: RequestOptions): ApiPromise&lt;Enrollment, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Enrollment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsEnrollmentsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
  });
  // TODO: Handle 'response' of type Enrollment
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Enrollment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>enrollmentsId</code> | <code>string</code> | Resource name segment (enrollmentsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsGet(request)`

- **OnSuccess**: <code>[Enrollment](src/models/enrollment.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Enrollment, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError&gt;</code>, with `result.value` of type <code>[Enrollment](src/models/enrollment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsEnrollmentsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
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
| <code>enrollmentsId</code> | <code>string</code> | Resource name segment (enrollmentsId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListRequest, options?: RequestOptions): ApiPromise&lt;ListEnrollmentsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Enrollments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsEnrollmentsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListEnrollmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEnrollmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. |
| <code>orderBy?</code> | <code>string</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsList(request)`

- **OnSuccess**: <code>[ListEnrollmentsResponse](src/models/list-enrollments-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEnrollmentsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError&gt;</code>, with `result.value` of type <code>[ListEnrollmentsResponse](src/models/list-enrollments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single Enrollment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsEnrollmentsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>enrollmentsId</code> | <code>string</code> | Resource name segment (enrollmentsId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created. In this situation, `update_mask` is ignored. |
| <code>updateMask?</code> | <code>string</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Enrollment](src/models/enrollment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsPatch(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsEnrollmentsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
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
| <code>enrollmentsId</code> | <code>string</code> | Resource name segment (enrollmentsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsEnrollmentsTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsEnrollmentsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsEnrollmentsTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    enrollmentsId: "some example string",
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
| <code>enrollmentsId</code> | <code>string</code> | Resource name segment (enrollmentsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsEnrollmentsTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsEnrollmentsTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise&lt;Location, GoogleCloudEventarcClient.EventarcProjectsLocationsGetError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type Location
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGet({ projectsId: "some example string", locationsId: "some example string" })
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

**Direct**: `await client.eventarcProjectsLocationsGet(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location, GoogleCloudEventarcClient.EventarcProjectsLocationsGetError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGetGoogleChannelConfig(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigRequest, options?: RequestOptions): ApiPromise&lt;GoogleChannelConfig, GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with projectID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsGetGoogleChannelConfig({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleChannelConfig
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGetGoogleChannelConfig({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleChannelConfig
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eventarcProjectsLocationsGetGoogleChannelConfig(request)`

- **OnSuccess**: <code>[GoogleChannelConfig](src/models/google-channel-config.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGetGoogleChannelConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleChannelConfig, GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError&gt;</code>, with `result.value` of type <code>[GoogleChannelConfig](src/models/google-channel-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new GoogleApiSource in a particular project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>googleApiSourceId?</code> | <code>string</code> | Required. The user-provided ID to be assigned to the GoogleApiSource. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[GoogleApiSource](src/models/google-api-source.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesCreate(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single GoogleApiSource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>googleApiSourcesId</code> | <code>string</code> | Resource name segment (googleApiSourcesId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the GoogleApiSource is not found, the request will succeed but no action will be taken on the server. |
| <code>etag?</code> | <code>string</code> | Optional. If provided, the GoogleApiSource will only be deleted if the etag matches the current etag on the resource. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesDelete(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleApiSource, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single GoogleApiSource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleApiSource
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleApiSource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>googleApiSourcesId</code> | <code>string</code> | Resource name segment (googleApiSourcesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesGet(request)`

- **OnSuccess**: <code>[GoogleApiSource](src/models/google-api-source.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleApiSource, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError&gt;</code>, with `result.value` of type <code>[GoogleApiSource](src/models/google-api-source.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
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
| <code>googleApiSourcesId</code> | <code>string</code> | Resource name segment (googleApiSourcesId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListRequest, options?: RequestOptions): ApiPromise&lt;ListGoogleApiSourcesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List GoogleApiSources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListGoogleApiSourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListGoogleApiSourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. |
| <code>orderBy?</code> | <code>string</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesList(request)`

- **OnSuccess**: <code>[ListGoogleApiSourcesResponse](src/models/list-google-api-sources-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListGoogleApiSourcesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError&gt;</code>, with `result.value` of type <code>[ListGoogleApiSourcesResponse](src/models/list-google-api-sources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single GoogleApiSource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>googleApiSourcesId</code> | <code>string</code> | Resource name segment (googleApiSourcesId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be created. In this situation, `update_mask` is ignored. |
| <code>updateMask?</code> | <code>string</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[GoogleApiSource](src/models/google-api-source.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesPatch(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
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
| <code>googleApiSourcesId</code> | <code>string</code> | Resource name segment (googleApiSourcesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    googleApiSourcesId: "some example string",
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
| <code>googleApiSourcesId</code> | <code>string</code> | Resource name segment (googleApiSourcesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsListRequest, options?: RequestOptions): ApiPromise&lt;ListLocationsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsListError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsList({ projectsId: "some example string" })
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

**Direct**: `await client.eventarcProjectsLocationsList(request)`

- **OnSuccess**: <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsListError&gt;</code>, with `result.value` of type <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new MessageBus in a particular project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsMessageBusesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>messageBusId?</code> | <code>string</code> | Required. The user-provided ID to be assigned to the MessageBus. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[MessageBus](src/models/message-bus.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesCreate(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single message bus.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsMessageBusesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>messageBusesId</code> | <code>string</code> | Resource name segment (messageBusesId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server. |
| <code>etag?</code> | <code>string</code> | Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesDelete(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetRequest, options?: RequestOptions): ApiPromise&lt;MessageBus, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single MessageBus.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsMessageBusesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
  });
  // TODO: Handle 'response' of type MessageBus
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageBus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>messageBusesId</code> | <code>string</code> | Resource name segment (messageBusesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesGet(request)`

- **OnSuccess**: <code>[MessageBus](src/models/message-bus.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageBus, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError&gt;</code>, with `result.value` of type <code>[MessageBus](src/models/message-bus.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsMessageBusesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
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
| <code>messageBusesId</code> | <code>string</code> | Resource name segment (messageBusesId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListRequest, options?: RequestOptions): ApiPromise&lt;ListMessageBusesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List message buses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsMessageBusesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListMessageBusesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMessageBusesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. |
| <code>orderBy?</code> | <code>string</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesList(request)`

- **OnSuccess**: <code>[ListMessageBusesResponse](src/models/list-message-buses-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMessageBusesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError&gt;</code>, with `result.value` of type <code>[ListMessageBusesResponse](src/models/list-message-buses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesListEnrollments(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsRequest, options?: RequestOptions): ApiPromise&lt;ListMessageBusEnrollmentsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List message bus enrollments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsMessageBusesListEnrollments({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
  });
  // TODO: Handle 'response' of type ListMessageBusEnrollmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesListEnrollments({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMessageBusEnrollmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>messageBusesId</code> | <code>string</code> | Resource name segment (messageBusesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesListEnrollments(request)`

- **OnSuccess**: <code>[ListMessageBusEnrollmentsResponse](src/models/list-message-bus-enrollments-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesListEnrollments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMessageBusEnrollmentsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError&gt;</code>, with `result.value` of type <code>[ListMessageBusEnrollmentsResponse](src/models/list-message-bus-enrollments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single message bus.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsMessageBusesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>messageBusesId</code> | <code>string</code> | Resource name segment (messageBusesId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created. In this situation, `update_mask` is ignored. |
| <code>updateMask?</code> | <code>string</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[MessageBus](src/models/message-bus.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesPatch(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsMessageBusesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
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
| <code>messageBusesId</code> | <code>string</code> | Resource name segment (messageBusesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsMessageBusesTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsMessageBusesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsMessageBusesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    messageBusesId: "some example string",
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
| <code>messageBusesId</code> | <code>string</code> | Resource name segment (messageBusesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsMessageBusesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsMessageBusesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsOperationsCancel(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsOperationsCancel({
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

**Direct**: `await client.eventarcProjectsLocationsOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsOperationsDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsOperationsDelete({
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

**Direct**: `await client.eventarcProjectsLocationsOperationsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsOperationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsOperationsGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eventarcProjectsLocationsOperationsGet(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsOperationsList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningListOperationsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningListOperationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eventarcProjectsLocationsOperationsList(request)`

- **OnSuccess**: <code>[GoogleLongrunningListOperationsResponse](src/models/google-longrunning-list-operations-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningListOperationsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningListOperationsResponse](src/models/google-longrunning-list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Pipeline in a particular project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsPipelinesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pipelineId?</code> | <code>string</code> | Required. The user-provided ID to be assigned to the Pipeline. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Pipeline](src/models/pipeline.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesCreate(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsPipelinesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pipelinesId</code> | <code>string</code> | Resource name segment (pipelinesId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the Pipeline is not found, the request will succeed but no action will be taken on the server. |
| <code>etag?</code> | <code>string</code> | Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag on the resource. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesDelete(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetRequest, options?: RequestOptions): ApiPromise&lt;Pipeline, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsPipelinesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
  });
  // TODO: Handle 'response' of type Pipeline
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pipelinesId</code> | <code>string</code> | Resource name segment (pipelinesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesGet(request)`

- **OnSuccess**: <code>[Pipeline](src/models/pipeline.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pipeline, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError&gt;</code>, with `result.value` of type <code>[Pipeline](src/models/pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsPipelinesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
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
| <code>pipelinesId</code> | <code>string</code> | Resource name segment (pipelinesId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListRequest, options?: RequestOptions): ApiPromise&lt;ListPipelinesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List pipelines.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsPipelinesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListPipelinesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPipelinesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | Optional. The filter field that the list request will filter on. Possible filters are described in https://google.aip.dev/160. |
| <code>orderBy?</code> | <code>string</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| <code>pageToken?</code> | <code>string</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesList(request)`

- **OnSuccess**: <code>[ListPipelinesResponse](src/models/list-pipelines-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPipelinesResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError&gt;</code>, with `result.value` of type <code>[ListPipelinesResponse](src/models/list-pipelines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsPipelinesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pipelinesId</code> | <code>string</code> | Resource name segment (pipelinesId). |
| <code>allowMissing?</code> | <code>boolean</code> | Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In this situation, `update_mask` is ignored. |
| <code>updateMask?</code> | <code>string</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Pipeline](src/models/pipeline.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesPatch(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsPipelinesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
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
| <code>pipelinesId</code> | <code>string</code> | Resource name segment (pipelinesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsPipelinesTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsPipelinesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsPipelinesTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    pipelinesId: "some example string",
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
| <code>pipelinesId</code> | <code>string</code> | Resource name segment (pipelinesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsPipelinesTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsPipelinesTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsProvidersGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetRequest, options?: RequestOptions): ApiPromise&lt;Provider, GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsProvidersGet({
    projectsId: "some example string",
    locationsId: "some example string",
    providersId: "some example string",
  });
  // TODO: Handle 'response' of type Provider
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsProvidersGet({
    projectsId: "some example string",
    locationsId: "some example string",
    providersId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Provider
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>providersId</code> | <code>string</code> | Resource name segment (providersId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsProvidersGet(request)`

- **OnSuccess**: <code>[Provider](src/models/provider.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsProvidersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Provider, GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError&gt;</code>, with `result.value` of type <code>[Provider](src/models/provider.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsProvidersList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListRequest, options?: RequestOptions): ApiPromise&lt;ListProvidersResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List providers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsProvidersList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListProvidersResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsProvidersList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListProvidersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | The filter field that the list request will filter on. |
| <code>orderBy?</code> | <code>string</code> | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting oder is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, _id`. |
| <code>pageSize?</code> | <code>number</code> | The maximum number of providers to return on each page. |
| <code>pageToken?</code> | <code>string</code> | The page token; provide the value from the `next_page_token` field in a previous `ListProviders` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListProviders` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsProvidersList(request)`

- **OnSuccess**: <code>[ListProvidersResponse](src/models/list-providers-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsProvidersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListProvidersResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError&gt;</code>, with `result.value` of type <code>[ListProvidersResponse](src/models/list-providers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersCreate(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new trigger in a particular project and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsTriggersCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>triggerId?</code> | <code>string</code> | Required. The user-provided ID to be assigned to the trigger. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Trigger](src/models/trigger.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersCreate(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersDelete(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single trigger.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsTriggersDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>triggersId</code> | <code>string</code> | Resource name segment (triggersId). |
| <code>allowMissing?</code> | <code>boolean</code> | If set to true, and the trigger is not found, the request will succeed but no action will be taken on the server. |
| <code>etag?</code> | <code>string</code> | If provided, the trigger will only be deleted if the etag matches the current etag on the resource. |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersDelete(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersGet(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetRequest, options?: RequestOptions): ApiPromise&lt;Trigger, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single trigger.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsTriggersGet({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
  });
  // TODO: Handle 'response' of type Trigger
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersGet({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Trigger
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>triggersId</code> | <code>string</code> | Resource name segment (triggersId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersGet(request)`

- **OnSuccess**: <code>[Trigger](src/models/trigger.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Trigger, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError&gt;</code>, with `result.value` of type <code>[Trigger](src/models/trigger.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersGetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsTriggersGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersGetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
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
| <code>triggersId</code> | <code>string</code> | Resource name segment (triggersId). |
| <code>optionsRequestedPolicyVersion?</code> | <code>number</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersGetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersGetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersList(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListRequest, options?: RequestOptions): ApiPromise&lt;ListTriggersResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List triggers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsTriggersList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListTriggersResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTriggersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>filter?</code> | <code>string</code> | Filter field. Used to filter the Triggers to be listed. Possible filters are described in https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a gke destination. |
| <code>orderBy?</code> | <code>string</code> | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, trigger_id`. |
| <code>pageSize?</code> | <code>number</code> | The maximum number of triggers to return on each page. Note: The service may send fewer. |
| <code>pageToken?</code> | <code>string</code> | The page token; provide the value from the `next_page_token` field in a previous `ListTriggers` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListTriggers` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersList(request)`

- **OnSuccess**: <code>[ListTriggersResponse](src/models/list-triggers-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTriggersResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError&gt;</code>, with `result.value` of type <code>[ListTriggersResponse](src/models/list-triggers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersPatch(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single trigger.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsTriggersPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleLongrunningOperation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleLongrunningOperation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>triggersId</code> | <code>string</code> | Resource name segment (triggersId). |
| <code>allowMissing?</code> | <code>boolean</code> | If set to true, and the trigger is not found, a new trigger will be created. In this situation, `update_mask` is ignored. |
| <code>updateMask?</code> | <code>string</code> | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| <code>validateOnly?</code> | <code>boolean</code> | Optional. If set, validate the request and preview the review, but do not post it. |
| <code>body</code> | <code>[Trigger](src/models/trigger.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersPatch(request)`

- **OnSuccess**: <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleLongrunningOperation, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError&gt;</code>, with `result.value` of type <code>[GoogleLongrunningOperation](src/models/google-longrunning-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersSetIamPolicy(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyRequest, options?: RequestOptions): ApiPromise&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsTriggersSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Policy
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersSetIamPolicy({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
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
| <code>triggersId</code> | <code>string</code> | Resource name segment (triggersId). |
| <code>body</code> | <code>[SetIamPolicyRequest](src/models/set-iam-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersSetIamPolicy(request)`

- **OnSuccess**: <code>[Policy](src/models/policy.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersSetIamPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError&gt;</code>, with `result.value` of type <code>[Policy](src/models/policy.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsTriggersTestIamPermissions(request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsRequest, options?: RequestOptions): ApiPromise&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError&gt;</code></summary>

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
  const response = await client.eventarcProjectsLocationsTriggersTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TestIamPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsTriggersTestIamPermissions({
    projectsId: "some example string",
    locationsId: "some example string",
    triggersId: "some example string",
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
| <code>triggersId</code> | <code>string</code> | Resource name segment (triggersId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](src/models/test-iam-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsTriggersTestIamPermissions(request)`

- **OnSuccess**: <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsTriggersTestIamPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestIamPermissionsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError&gt;</code>, with `result.value` of type <code>[TestIamPermissionsResponse](src/models/test-iam-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eventarcProjectsLocationsUpdateGoogleChannelConfig(request: GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigRequest, options?: RequestOptions): ApiPromise&lt;GoogleChannelConfig, GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single GoogleChannelConfig

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventarcProjectsLocationsUpdateGoogleChannelConfig({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleChannelConfig
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .eventarcProjectsLocationsUpdateGoogleChannelConfig({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleChannelConfig
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>updateMask?</code> | <code>string</code> | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| <code>body</code> | <code>[GoogleChannelConfig](src/models/google-channel-config.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventarcProjectsLocationsUpdateGoogleChannelConfig(request)`

- **OnSuccess**: <code>[GoogleChannelConfig](src/models/google-channel-config.ts)</code>
- **OnError**: throws <code>[GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventarcProjectsLocationsUpdateGoogleChannelConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleChannelConfig, GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError&gt;</code>, with `result.value` of type <code>[GoogleChannelConfig](src/models/google-channel-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudEventarcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

