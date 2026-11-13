# Reference

> Source: [GristApiClient](src/client.ts)

## Orgs

> Source: [Orgs](src/resources/orgs.ts)

<details>
<summary><code>deleteOrg(request: Orgs.DeleteOrgRequest, options?: RequestOptions): ApiPromise&lt;OrgsResponse, Orgs.DeleteOrgError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orgs.deleteOrg({ orgId: 1, name: "some example string" });
  // TODO: Handle 'response' of type OrgsResponse
} catch (err) {
  // TODO: Handle 'err' of type Orgs.DeleteOrgError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orgs.deleteOrg({ orgId: 1, name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrgsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |
| <code>name</code> | <code>string</code> | The organization name |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orgs.deleteOrg(request)`

- **OnSuccess**: <code>[OrgsResponse](src/models/unions/orgs-response.ts)</code>
- **OnError**: throws <code>[Orgs.DeleteOrgError](src/resources/orgs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orgs.deleteOrg(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrgsResponse, Orgs.DeleteOrgError&gt;</code>, with `result.value` of type <code>[OrgsResponse](src/models/unions/orgs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeOrg(request: Orgs.DescribeOrgRequest, options?: RequestOptions): ApiPromise&lt;Org, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orgs.describeOrg({ orgId: 1 });
  // TODO: Handle 'response' of type Org
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orgs.describeOrg({ orgId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Org
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orgs.describeOrg(request)`

- **OnSuccess**: <code>[Org](src/models/org.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orgs.describeOrg(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Org, ApiError&gt;</code>, with `result.value` of type <code>[Org](src/models/org.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrgUsage(request: Orgs.GetOrgUsageRequest, options?: RequestOptions): ApiPromise&lt;OrgsUsageResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get usage statistics for all non-deleted documents in the organization.
Only accessible to organization owners.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orgs.getOrgUsage({ orgId: 1 });
  // TODO: Handle 'response' of type OrgsUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orgs.getOrgUsage({ orgId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrgsUsageResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orgs.getOrgUsage(request)`

- **OnSuccess**: <code>[OrgsUsageResponse](src/models/orgs-usage-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orgs.getOrgUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrgsUsageResponse, ApiError&gt;</code>, with `result.value` of type <code>[OrgsUsageResponse](src/models/orgs-usage-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrgAccess(request: Orgs.ListOrgAccessRequest, options?: RequestOptions): ApiPromise&lt;OrgAccessRead, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orgs.listOrgAccess({ orgId: 1 });
  // TODO: Handle 'response' of type OrgAccessRead
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orgs.listOrgAccess({ orgId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrgAccessRead
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orgs.listOrgAccess(request)`

- **OnSuccess**: <code>[OrgAccessRead](src/models/org-access-read.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orgs.listOrgAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrgAccessRead, ApiError&gt;</code>, with `result.value` of type <code>[OrgAccessRead](src/models/org-access-read.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrgs(options?: RequestOptions): ApiPromise&lt;Org[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This enumerates all the team sites or personal areas available.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orgs.listOrgs();
  // TODO: Handle 'response' of type Org[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orgs.listOrgs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Org[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orgs.listOrgs()`

- **OnSuccess**: <code>[Org](src/models/org.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orgs.listOrgs().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Org[], ApiError&gt;</code>, with `result.value` of type <code>[Org](src/models/org.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyOrg(request: Orgs.ModifyOrgRequest, options?: RequestOptions): ApiPromise&lt;OrgsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orgs.modifyOrg({ orgId: 1, body: {} });
  // TODO: Handle 'response' of type OrgsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orgs.modifyOrg({ orgId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrgsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |
| <code>body</code> | <code>[OrgParameters](src/models/org-parameters.ts)</code> | the changes to make |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orgs.modifyOrg(request)`

- **OnSuccess**: <code>[OrgsResponse](src/models/unions/orgs-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orgs.modifyOrg(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrgsResponse, ApiError&gt;</code>, with `result.value` of type <code>[OrgsResponse](src/models/unions/orgs-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyOrgAccess(request: Orgs.ModifyOrgAccessRequest, options?: RequestOptions): ApiPromise&lt;OrgsAccessResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orgs.modifyOrgAccess({
    orgId: 1,
    body: { delta: { users: { key: Users.Owners } } },
  });
  // TODO: Handle 'response' of type OrgsAccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orgs
  .modifyOrgAccess({ orgId: 1, body: { delta: { users: { key: Users.Owners } } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrgsAccessResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |
| <code>body</code> | <code>[OrgsAccessRequest](src/models/orgs-access-request.ts)</code> | the changes to make |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orgs.modifyOrgAccess(request)`

- **OnSuccess**: <code>[OrgsAccessResponse](src/models/unions/orgs-access-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orgs.modifyOrgAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrgsAccessResponse, ApiError&gt;</code>, with `result.value` of type <code>[OrgsAccessResponse](src/models/unions/orgs-access-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/resources/workspaces.ts)

<details>
<summary><code>createWorkspace(request: Workspaces.CreateWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;number, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.createWorkspace({ orgId: 1, body: {} });
  // TODO: Handle 'response' of type number
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.createWorkspace({ orgId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |
| <code>body</code> | <code>[WorkspaceParameters](src/models/workspace-parameters.ts)</code> | settings for the workspace |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.createWorkspace(request)`

- **OnSuccess**: <code>number</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.createWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number, ApiError&gt;</code>, with `result.value` of type <code>number</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWorkspace(request: Workspaces.DeleteWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.deleteWorkspace({ workspaceId: 1 });
  // TODO: Handle 'response' of type WorkspacesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.deleteWorkspace({ workspaceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.deleteWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesResponse](src/models/unions/workspaces-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.deleteWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesResponse, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesResponse](src/models/unions/workspaces-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeWorkspace(request: Workspaces.DescribeWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceWithDocsAndOrg, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.describeWorkspace({ workspaceId: 1 });
  // TODO: Handle 'response' of type WorkspaceWithDocsAndOrg
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.describeWorkspace({ workspaceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceWithDocsAndOrg
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.describeWorkspace(request)`

- **OnSuccess**: <code>[WorkspaceWithDocsAndOrg](src/models/workspace-with-docs-and-org.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.describeWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceWithDocsAndOrg, ApiError&gt;</code>, with `result.value` of type <code>[WorkspaceWithDocsAndOrg](src/models/workspace-with-docs-and-org.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkspaceAccess(request: Workspaces.ListWorkspaceAccessRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceAccessRead, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.listWorkspaceAccess({ workspaceId: 1 });
  // TODO: Handle 'response' of type WorkspaceAccessRead
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.listWorkspaceAccess({ workspaceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceAccessRead
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.listWorkspaceAccess(request)`

- **OnSuccess**: <code>[WorkspaceAccessRead](src/models/workspace-access-read.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.listWorkspaceAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceAccessRead, ApiError&gt;</code>, with `result.value` of type <code>[WorkspaceAccessRead](src/models/workspace-access-read.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkspaces(request: Workspaces.ListWorkspacesRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceWithDocsAndDomain[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.listWorkspaces({ orgId: 1 });
  // TODO: Handle 'response' of type WorkspaceWithDocsAndDomain[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.listWorkspaces({ orgId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceWithDocsAndDomain[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgId</code> | <code>[OrgId](src/models/unions/org-id.ts)</code> | This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.listWorkspaces(request)`

- **OnSuccess**: <code>[WorkspaceWithDocsAndDomain](src/models/workspace-with-docs-and-domain.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.listWorkspaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceWithDocsAndDomain[], ApiError&gt;</code>, with `result.value` of type <code>[WorkspaceWithDocsAndDomain](src/models/workspace-with-docs-and-domain.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyWorkspace(request: Workspaces.ModifyWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.modifyWorkspace({ workspaceId: 1, body: {} });
  // TODO: Handle 'response' of type WorkspacesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.modifyWorkspace({ workspaceId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |
| <code>body</code> | <code>[WorkspaceParameters](src/models/workspace-parameters.ts)</code> | the changes to make |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.modifyWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesResponse](src/models/unions/workspaces-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.modifyWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesResponse, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesResponse](src/models/unions/workspaces-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyWorkspaceAccess(request: Workspaces.ModifyWorkspaceAccessRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesAccessResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.modifyWorkspaceAccess({ workspaceId: 1, body: { delta: {} } });
  // TODO: Handle 'response' of type WorkspacesAccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .modifyWorkspaceAccess({ workspaceId: 1, body: { delta: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesAccessResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |
| <code>body</code> | <code>[WorkspacesAccessRequest](src/models/workspaces-access-request.ts)</code> | the changes to make |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.modifyWorkspaceAccess(request)`

- **OnSuccess**: <code>[WorkspacesAccessResponse](src/models/unions/workspaces-access-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.modifyWorkspaceAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesAccessResponse, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesAccessResponse](src/models/unions/workspaces-access-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeWorkspace(request: Workspaces.RemoveWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesRemoveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-delete the workspace by moving it to trash. The workspace can be
restored using the unremove endpoint. If the `permanent` query parameter
is set to true, the workspace is permanently deleted instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.removeWorkspace({ workspaceId: 1 });
  // TODO: Handle 'response' of type WorkspacesRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.removeWorkspace({ workspaceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesRemoveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |
| <code>permanent?</code> | <code>boolean</code> | If true, permanently delete instead of moving to trash |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.removeWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesRemoveResponse](src/models/unions/workspaces-remove-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.removeWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesRemoveResponse, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesRemoveResponse](src/models/unions/workspaces-remove-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unremoveWorkspace(request: Workspaces.UnremoveWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesUnremoveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recover a workspace that was previously soft-deleted. Only works if the
workspace is still in the trash.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.unremoveWorkspace({ workspaceId: 1 });
  // TODO: Handle 'response' of type WorkspacesUnremoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.unremoveWorkspace({ workspaceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesUnremoveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.unremoveWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesUnremoveResponse](src/models/unions/workspaces-unremove-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.unremoveWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesUnremoveResponse, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesUnremoveResponse](src/models/unions/workspaces-unremove-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Docs

> Source: [Docs](src/resources/docs.ts)

<details>
<summary><code>applyProposal(request: Docs.ApplyProposalRequest, options?: RequestOptions): ApiPromise&lt;DocsProposalsApplyResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Apply a proposal's changes to the document. This merges the fork's
changes into the trunk document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.applyProposal({ docId: "some example string", proposalId: 1 });
  // TODO: Handle 'response' of type DocsProposalsApplyResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.applyProposal({ docId: "some example string", proposalId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsProposalsApplyResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>proposalId</code> | <code>number</code> | ID of the proposal to apply |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.applyProposal(request)`

- **OnSuccess**: <code>[DocsProposalsApplyResponse](src/models/docs-proposals-apply-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.applyProposal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsProposalsApplyResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsProposalsApplyResponse](src/models/docs-proposals-apply-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>applyUserActions(request: Docs.ApplyUserActionsRequest, options?: RequestOptions): ApiPromise&lt;DocsApplyResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Apply a sequence of user actions to a document. This is a low-level endpoint
for making batch changes using Grist's internal action format.

Each action is an array where the first element is the action type.
Common action types:
- `["AddRecord", tableId, rowId, {column: value}]` - Add a row (use null for auto-assigned rowId)
- `["UpdateRecord", tableId, rowId, {column: value}]` - Update a row
- `["RemoveRecord", tableId, rowId]` - Delete a row
- `["BulkAddRecord", tableId, [rowIds], {column: [values]}]` - Add multiple rows
- `["BulkUpdateRecord", tableId, [rowIds], {column: [values]}]` - Update multiple rows
- `["BulkRemoveRecord", tableId, [rowIds]]` - Delete multiple rows
- `["AddColumn", tableId, colId, {type, ...}]` - Add a column
- `["RemoveColumn", tableId, colId]` - Remove a column
- `["RenameColumn", tableId, oldColId, newColId]` - Rename a column
- `["AddTable", tableId, [{id, type, ...}]]` - Add a table
- `["RemoveTable", tableId]` - Remove a table


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.applyUserActions({ docId: "some example string", body: [[{}]] });
  // TODO: Handle 'response' of type DocsApplyResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs
  .applyUserActions({ docId: "some example string", body: [[{}]] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsApplyResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>noparse?</code> | <code>boolean</code> | If true, string values are stored as-is without parsing (e.g. dates won't be auto-converted) |
| <code>body</code> | <code>Record&lt;string, unknown&gt;[][]</code> | An array of user actions to apply |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.applyUserActions(request)`

- **OnSuccess**: <code>[DocsApplyResponse](src/models/docs-apply-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.applyUserActions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsApplyResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsApplyResponse](src/models/docs-apply-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assignDoc(request: Docs.AssignDocRequest, options?: RequestOptions): ApiPromise&lt;boolean, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Administrative endpoint that checks if a document is assigned to the expected
worker group and frees it for reassignment if not. Used for load balancing
and maintenance operations.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.assignDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type boolean
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.assignDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>group?</code> | <code>string</code> | Update the document's worker group (requires special permit) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.assignDoc(request)`

- **OnSuccess**: <code>boolean</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.assignDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean, ApiError&gt;</code>, with `result.value` of type <code>boolean</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>compareDocuments(request: Docs.CompareDocumentsRequest, options?: RequestOptions): ApiPromise&lt;DocComparison, Docs.CompareDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compare this document with another document. Useful for comparing
a fork with its trunk document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.compareDocuments({
    docId: "some example string",
    docId2: "some example string",
  });
  // TODO: Handle 'response' of type DocComparison
} catch (err) {
  // TODO: Handle 'err' of type Docs.CompareDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs
  .compareDocuments({ docId: "some example string", docId2: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocComparison
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>docId2</code> | <code>string</code> | ID of the document to compare with |
| <code>detail?</code> | <code>boolean</code> | If true, include detailed change information |
| <code>maxRows?</code> | <code>number</code> | Maximum number of row changes to include |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.compareDocuments(request)`

- **OnSuccess**: <code>[DocComparison](src/models/doc-comparison.ts)</code>
- **OnError**: throws <code>[Docs.CompareDocumentsError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.compareDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocComparison, Docs.CompareDocumentsError&gt;</code>, with `result.value` of type <code>[DocComparison](src/models/doc-comparison.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>compareVersions(request: Docs.CompareVersionsRequest, options?: RequestOptions): ApiPromise&lt;DocComparison, Docs.CompareVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compare two versions of the same document by their state hashes.
Returns details about what changed between the versions.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.compareVersions({ docId: "some example string" });
  // TODO: Handle 'response' of type DocComparison
} catch (err) {
  // TODO: Handle 'err' of type Docs.CompareVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.compareVersions({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocComparison
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>left?</code> | <code>string</code> | Hash of the left version to compare (defaults to HEAD) |
| <code>right?</code> | <code>string</code> | Hash of the right version to compare (defaults to HEAD) |
| <code>maxRows?</code> | <code>number</code> | Maximum number of row changes to include in details |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.compareVersions(request)`

- **OnSuccess**: <code>[DocComparison](src/models/doc-comparison.ts)</code>
- **OnError**: throws <code>[Docs.CompareVersionsError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.compareVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocComparison, Docs.CompareVersionsError&gt;</code>, with `result.value` of type <code>[DocComparison](src/models/doc-comparison.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>copyDoc(request: Docs.CopyDocRequest, options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.copyDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.copyDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsCopyRequest](src/models/docs-copy-request.ts)</code> | the target workspace |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.copyDoc(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.copyDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDoc(request: Docs.CreateDocRequest, options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.createDoc({ workspaceId: 1, body: {} });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.createDoc({ workspaceId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |
| <code>body</code> | <code>[DocParameters](src/models/doc-parameters.ts)</code> | settings for the document |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.createDoc(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.createDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDocUnified(request?: Docs.CreateDocUnifiedRequest, options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A unified endpoint for creating documents. Can create an empty document,
copy an existing document, or import a file.

- To create an empty unsaved document: provide no parameters
- To create an empty saved document: provide `workspaceId`
- To copy an existing document: provide `sourceDocumentId`, `workspaceId`, and `documentName`
- To import a file: use multipart/form-data with a file upload and optional `workspaceId`


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.createDocUnified();
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.createDocUnified().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>upload?</code> | <code>FileInput</code> | File to import (.grist, .xlsx, .csv, etc.) |
| <code>workspaceId?</code> | <code>number</code> | The workspace to save the document in |
| <code>documentName?</code> | <code>string</code> | Name for the imported document |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.createDocUnified(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.createDocUnified(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProposal(request: Docs.CreateProposalRequest, options?: RequestOptions): ApiPromise&lt;DocsProposeResponse, Docs.CreateProposalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a proposal from a fork to its trunk document. The proposal contains
the comparison of changes between the fork and trunk.
This endpoint can only be called on a fork document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.createProposal({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsProposeResponse
} catch (err) {
  // TODO: Handle 'err' of type Docs.CreateProposalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.createProposal({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsProposeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsProposeRequest](src/models/docs-propose-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.createProposal(request)`

- **OnSuccess**: <code>[DocsProposeResponse](src/models/docs-propose-response.ts)</code>
- **OnError**: throws <code>[Docs.CreateProposalError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.createProposal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsProposeResponse, Docs.CreateProposalError&gt;</code>, with `result.value` of type <code>[DocsProposeResponse](src/models/docs-propose-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteActions(request: Docs.DeleteActionsRequest, options?: RequestOptions): ApiPromise&lt;DocsStatesRemoveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.deleteActions({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsStatesRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.deleteActions({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsStatesRemoveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsStatesRemoveRequest](src/models/docs-states-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.deleteActions(request)`

- **OnSuccess**: <code>[DocsStatesRemoveResponse](src/models/unions/docs-states-remove-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.deleteActions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsStatesRemoveResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsStatesRemoveResponse](src/models/unions/docs-states-remove-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDoc(request: Docs.DeleteDocRequest, options?: RequestOptions): ApiPromise&lt;DocsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.deleteDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.deleteDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.deleteDoc(request)`

- **OnSuccess**: <code>[DocsResponse](src/models/unions/docs-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.deleteDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsResponse](src/models/unions/docs-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDoc(request: Docs.DescribeDocRequest, options?: RequestOptions): ApiPromise&lt;DocWithWorkspace, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.describeDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocWithWorkspace
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.describeDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocWithWorkspace
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.describeDoc(request)`

- **OnSuccess**: <code>[DocWithWorkspace](src/models/doc-with-workspace.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.describeDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocWithWorkspace, ApiError&gt;</code>, with `result.value` of type <code>[DocWithWorkspace](src/models/doc-with-workspace.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableDoc(request: Docs.DisableDocRequest, options?: RequestOptions): ApiPromise&lt;DocsDisableResponse, Docs.DisableDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disabled documents cannot be accessed or modified. Moving and
renaming a disabled doc is also forbidden, as well as
accessing or submitting published forms associated to a
disabled document.

Disabled documents, however, can be moved to and restored from
the trash.

The operation is non-destructive. Disabled documents can be
re-enabled.

Only admin accounts can disable a document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.disableDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsDisableResponse
} catch (err) {
  // TODO: Handle 'err' of type Docs.DisableDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.disableDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsDisableResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.disableDoc(request)`

- **OnSuccess**: <code>[DocsDisableResponse](src/models/unions/docs-disable-response.ts)</code>
- **OnError**: throws <code>[Docs.DisableDocError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.disableDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsDisableResponse, Docs.DisableDocError&gt;</code>, with `result.value` of type <code>[DocsDisableResponse](src/models/unions/docs-disable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadDoc(request: Docs.DownloadDocRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.docs.downloadDoc({ docId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.downloadDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>nohistory?</code> | <code>boolean</code> | - |
| <code>template?</code> | <code>boolean</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.downloadDoc(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.downloadDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadDocCsv(request: Docs.DownloadDocCsvRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.docs.downloadDocCsv({ docId: "some example string", tableId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs
  .downloadDocCsv({ docId: "some example string", tableId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | - |
| <code>header?</code> | <code>[Header](src/models/header.ts)</code> | Format for headers. Labels tend to be more human-friendly while colIds are more normalized. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.downloadDocCsv(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.downloadDocCsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadDocDsv(request: Docs.DownloadDocDsvRequest, options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download table data using a custom delimiter (💩).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.downloadDocDsv({
    docId: "some example string",
    tableId: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs
  .downloadDocDsv({ docId: "some example string", tableId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | - |
| <code>header?</code> | <code>[Header](src/models/header.ts)</code> | Format for headers. Labels tend to be more human-friendly while colIds are more normalized. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.downloadDocDsv(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.downloadDocDsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadDocTsv(request: Docs.DownloadDocTsvRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download table data as tab-separated values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.docs.downloadDocTsv({ docId: "some example string", tableId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs
  .downloadDocTsv({ docId: "some example string", tableId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | - |
| <code>header?</code> | <code>[Header](src/models/header.ts)</code> | Format for headers. Labels tend to be more human-friendly while colIds are more normalized. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.downloadDocTsv(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.downloadDocTsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadDocXlsx(request: Docs.DownloadDocXlsxRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.docs.downloadDocXlsx({ docId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.downloadDocXlsx({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>header?</code> | <code>[Header](src/models/header.ts)</code> | Format for headers. Labels tend to be more human-friendly while colIds are more normalized. |
| <code>tableId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.downloadDocXlsx(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.downloadDocXlsx(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadTableSchema(request: Docs.DownloadTableSchemaRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The schema follows [frictionlessdata's table-schema standard](https://specs.frictionlessdata.io/table-schema/).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.docs.downloadTableSchema({ docId: "some example string", tableId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs
  .downloadTableSchema({ docId: "some example string", tableId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | - |
| <code>header?</code> | <code>[Header](src/models/header.ts)</code> | Format for headers. Labels tend to be more human-friendly while colIds are more normalized. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.downloadTableSchema(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.downloadTableSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableDoc(request: Docs.EnableDocRequest, options?: RequestOptions): ApiPromise&lt;DocsEnableResponse, Docs.EnableDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If a document has been previously disabled, this will restore
all former access to a document, including access to its
associated published forms.

Only admin accounts can enable a document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.enableDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsEnableResponse
} catch (err) {
  // TODO: Handle 'err' of type Docs.EnableDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.enableDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsEnableResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.enableDoc(request)`

- **OnSuccess**: <code>[DocsEnableResponse](src/models/unions/docs-enable-response.ts)</code>
- **OnError**: throws <code>[Docs.EnableDocError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.enableDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsEnableResponse, Docs.EnableDocError&gt;</code>, with `result.value` of type <code>[DocsEnableResponse](src/models/unions/docs-enable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>flushDoc(request: Docs.FlushDocRequest, options?: RequestOptions): ApiPromise&lt;boolean, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ensure all pending changes to the document are written to persistent storage.
Returns true if the document was flushed, false if the document was not open.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.flushDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type boolean
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.flushDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.flushDoc(request)`

- **OnSuccess**: <code>boolean</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.flushDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean, ApiError&gt;</code>, with `result.value` of type <code>boolean</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>forceReload(request: Docs.ForceReloadRequest, options?: RequestOptions): ApiPromise&lt;DocsForceReloadResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closes and reopens the document, forcing the python engine to restart.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.forceReload({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsForceReloadResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.forceReload({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsForceReloadResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.forceReload(request)`

- **OnSuccess**: <code>[DocsForceReloadResponse](src/models/unions/docs-force-reload-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.forceReload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsForceReloadResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsForceReloadResponse](src/models/unions/docs-force-reload-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>forkDoc(request: Docs.ForkDocRequest, options?: RequestOptions): ApiPromise&lt;DocsForkResponse, Docs.ForkDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a fork of a document. A fork is a personal copy that tracks its relationship
to the original document. Forks can be used to experiment with changes before
applying them to the original.

The fork will have a new docId and urlId that encode the relationship to the trunk
(original) document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.forkDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsForkResponse
} catch (err) {
  // TODO: Handle 'err' of type Docs.ForkDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.forkDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsForkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.forkDoc(request)`

- **OnSuccess**: <code>[DocsForkResponse](src/models/docs-fork-response.ts)</code>
- **OnError**: throws <code>[Docs.ForkDocError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.forkDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsForkResponse, Docs.ForkDocError&gt;</code>, with `result.value` of type <code>[DocsForkResponse](src/models/docs-fork-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStates(request: Docs.GetStatesRequest, options?: RequestOptions): ApiPromise&lt;DocsStatesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of document states representing the action history.
Each state has a sequential number (n) and a hash (h) that uniquely
identifies that point in history. Most recent state is first.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.getStates({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsStatesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.getStates({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsStatesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.getStates(request)`

- **OnSuccess**: <code>[DocsStatesResponse](src/models/docs-states-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.getStates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsStatesResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsStatesResponse](src/models/docs-states-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTimingStatus(request: Docs.GetTimingStatusRequest, options?: RequestOptions): ApiPromise&lt;DocsTimingResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if formula timing is enabled for a document and retrieve timing data
if available. Only document owners can access timing information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.getTimingStatus({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsTimingResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.getTimingStatus({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTimingResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.getTimingStatus(request)`

- **OnSuccess**: <code>[DocsTimingResponse](src/models/docs-timing-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.getTimingStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTimingResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTimingResponse](src/models/docs-timing-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersForViewAs(request: Docs.GetUsersForViewAsRequest, options?: RequestOptions): ApiPromise&lt;DocsUsersForViewAsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get users that can be used with the "View As" feature for testing access rules.
Only document owners can call this endpoint.

Users are drawn from:
- Users the document is shared with
- Users mentioned in user attribute tables
- Predefined example users


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.getUsersForViewAs({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsUsersForViewAsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.getUsersForViewAs({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsUsersForViewAsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.getUsersForViewAs(request)`

- **OnSuccess**: <code>[DocsUsersForViewAsResponse](src/models/docs-users-for-view-as-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.getUsersForViewAs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsUsersForViewAsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsUsersForViewAsResponse](src/models/docs-users-for-view-as-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importDoc(request: Docs.ImportDocRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesImportResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.importDoc({ workspaceId: 1, documentName: "Example Doc" });
  // TODO: Handle 'response' of type WorkspacesImportResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.importDoc({ workspaceId: 1, documentName: "Example Doc" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesImportResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | An integer id |
| <code>upload?</code> | <code>FileInput</code> | Contents of a .grist file, as a standard multipart/form-data file entry |
| <code>documentName?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.importDoc(request)`

- **OnSuccess**: <code>[WorkspacesImportResponse](src/models/workspaces-import-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.importDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesImportResponse, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesImportResponse](src/models/workspaces-import-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocAccess(request: Docs.ListDocAccessRequest, options?: RequestOptions): ApiPromise&lt;DocAccessRead, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.listDocAccess({ docId: "some example string" });
  // TODO: Handle 'response' of type DocAccessRead
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.listDocAccess({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocAccessRead
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.listDocAccess(request)`

- **OnSuccess**: <code>[DocAccessRead](src/models/doc-access-read.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.listDocAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocAccessRead, ApiError&gt;</code>, with `result.value` of type <code>[DocAccessRead](src/models/doc-access-read.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProposals(request: Docs.ListProposalsRequest, options?: RequestOptions): ApiPromise&lt;DocsProposalsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List proposals associated with a document. Proposals are suggested changes
from forks that can be reviewed and applied to the trunk document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.listProposals({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsProposalsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.listProposals({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsProposalsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>outgoing?</code> | <code>boolean</code> | If true, list proposals where this document is the source. Otherwise list proposals where this document is the destination. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.listProposals(request)`

- **OnSuccess**: <code>[DocsProposalsResponse](src/models/docs-proposals-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.listProposals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsProposalsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsProposalsResponse](src/models/docs-proposals-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSnapshots(request: Docs.ListSnapshotsRequest, options?: RequestOptions): ApiPromise&lt;DocsSnapshotsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of snapshots (backups) of the document. Snapshots are created
automatically as the document is edited. Most recent snapshots are listed first.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.listSnapshots({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsSnapshotsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.listSnapshots({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsSnapshotsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>raw?</code> | <code>boolean</code> | If true, returns all snapshots including those not in the snapshot inventory |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.listSnapshots(request)`

- **OnSuccess**: <code>[DocsSnapshotsResponse](src/models/docs-snapshots-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.listSnapshots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsSnapshotsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsSnapshotsResponse](src/models/docs-snapshots-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyDoc(request: Docs.ModifyDocRequest, options?: RequestOptions): ApiPromise&lt;DocsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.modifyDoc({ docId: "some example string", body: {} });
  // TODO: Handle 'response' of type DocsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.modifyDoc({ docId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body</code> | <code>[DocParameters](src/models/doc-parameters.ts)</code> | the changes to make |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.modifyDoc(request)`

- **OnSuccess**: <code>[DocsResponse](src/models/unions/docs-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.modifyDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsResponse](src/models/unions/docs-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyDocAccess(request: Docs.ModifyDocAccessRequest, options?: RequestOptions): ApiPromise&lt;DocsAccessResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.modifyDocAccess({ docId: "some example string", body: { delta: {} } });
  // TODO: Handle 'response' of type DocsAccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs
  .modifyDocAccess({ docId: "some example string", body: { delta: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAccessResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body</code> | <code>[DocsAccessRequest](src/models/docs-access-request.ts)</code> | the changes to make |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.modifyDocAccess(request)`

- **OnSuccess**: <code>[DocsAccessResponse](src/models/unions/docs-access-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.modifyDocAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAccessResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsAccessResponse](src/models/unions/docs-access-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moveDoc(request: Docs.MoveDocRequest, options?: RequestOptions): ApiPromise&lt;DocsMoveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.moveDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsMoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.moveDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsMoveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsMoveRequest](src/models/docs-move-request.ts)</code> | the target workspace |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.moveDoc(request)`

- **OnSuccess**: <code>[DocsMoveResponse](src/models/unions/docs-move-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.moveDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsMoveResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsMoveResponse](src/models/unions/docs-move-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pinDoc(request: Docs.PinDocRequest, options?: RequestOptions): ApiPromise&lt;DocsPinResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pin the document so it appears in a prominent location. Pinned documents
are displayed at the top of workspace listings for easy access.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.pinDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsPinResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.pinDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsPinResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.pinDoc(request)`

- **OnSuccess**: <code>[DocsPinResponse](src/models/unions/docs-pin-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.pinDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsPinResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsPinResponse](src/models/unions/docs-pin-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recoverDoc(request: Docs.RecoverDocRequest, options?: RequestOptions): ApiPromise&lt;DocsRecoverResponse, Docs.RecoverDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Controls the recovery mode of a document. Recovery mode helps in recovering from errors or corrupted states. Only document owners can control recovery mode.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.recoverDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsRecoverResponse
} catch (err) {
  // TODO: Handle 'err' of type Docs.RecoverDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.recoverDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsRecoverResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsRecoverRequest](src/models/docs-recover-request.ts)</code> | Recovery mode settings |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.recoverDoc(request)`

- **OnSuccess**: <code>[DocsRecoverResponse](src/models/docs-recover-response.ts)</code>
- **OnError**: throws <code>[Docs.RecoverDocError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.recoverDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsRecoverResponse, Docs.RecoverDocError&gt;</code>, with `result.value` of type <code>[DocsRecoverResponse](src/models/docs-recover-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeDoc(request: Docs.RemoveDocRequest, options?: RequestOptions): ApiPromise&lt;DocsRemoveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-delete the document by moving it to trash. The document can be
restored using the unremove endpoint. If the `permanent` query parameter
is set to true, the document is permanently deleted instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.removeDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.removeDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsRemoveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>permanent?</code> | <code>boolean</code> | If true, permanently delete instead of moving to trash |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.removeDoc(request)`

- **OnSuccess**: <code>[DocsRemoveResponse](src/models/unions/docs-remove-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.removeDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsRemoveResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsRemoveResponse](src/models/unions/docs-remove-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeSnapshots(request: Docs.RemoveSnapshotsRequest, options?: RequestOptions): ApiPromise&lt;DocsSnapshotsRemoveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove specific snapshots from a document's backup history.
Only document owners can remove snapshots.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.removeSnapshots({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsSnapshotsRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.removeSnapshots({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsSnapshotsRemoveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsSnapshotsRemoveRequest](src/models/docs-snapshots-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.removeSnapshots(request)`

- **OnSuccess**: <code>[DocsSnapshotsRemoveResponse](src/models/docs-snapshots-remove-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.removeSnapshots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsSnapshotsRemoveResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsSnapshotsRemoveResponse](src/models/docs-snapshots-remove-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceDoc(request: Docs.ReplaceDocRequest, options?: RequestOptions): ApiPromise&lt;DocsReplaceResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the current document content with content from another source.
Can restore from a snapshot or copy from another document.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.replaceDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsReplaceResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.replaceDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsReplaceResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsReplaceRequest](src/models/docs-replace-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.replaceDoc(request)`

- **OnSuccess**: <code>[DocsReplaceResponse](src/models/unions/docs-replace-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.replaceDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsReplaceResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsReplaceResponse](src/models/unions/docs-replace-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTiming(request: Docs.StartTimingRequest, options?: RequestOptions): ApiPromise&lt;DocsTimingStartResponse, Docs.StartTimingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start collecting timing information for formula calculations.
Only document owners can start timing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.startTiming({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsTimingStartResponse
} catch (err) {
  // TODO: Handle 'err' of type Docs.StartTimingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.startTiming({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTimingStartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.startTiming(request)`

- **OnSuccess**: <code>[DocsTimingStartResponse](src/models/unions/docs-timing-start-response.ts)</code>
- **OnError**: throws <code>[Docs.StartTimingError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.startTiming(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTimingStartResponse, Docs.StartTimingError&gt;</code>, with `result.value` of type <code>[DocsTimingStartResponse](src/models/unions/docs-timing-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopTiming(request: Docs.StopTimingRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Docs.StopTimingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop collecting timing information and return the collected data.
Only document owners can stop timing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.stopTiming({ docId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Docs.StopTimingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.stopTiming({ docId: "some example string" }).asApiResult();
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
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.stopTiming(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Docs.StopTimingError](src/resources/docs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.docs.stopTiming(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Docs.StopTimingError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpinDoc(request: Docs.UnpinDocRequest, options?: RequestOptions): ApiPromise&lt;DocsUnpinResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the pinned status from a document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.unpinDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsUnpinResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.unpinDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsUnpinResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.unpinDoc(request)`

- **OnSuccess**: <code>[DocsUnpinResponse](src/models/unions/docs-unpin-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.unpinDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsUnpinResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsUnpinResponse](src/models/unions/docs-unpin-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unremoveDoc(request: Docs.UnremoveDocRequest, options?: RequestOptions): ApiPromise&lt;DocsUnremoveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recover a document that was previously soft-deleted. Only works if the
document is still in the trash.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.docs.unremoveDoc({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsUnremoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.docs.unremoveDoc({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsUnremoveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.docs.unremoveDoc(request)`

- **OnSuccess**: <code>[DocsUnremoveResponse](src/models/unions/docs-unremove-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.docs.unremoveDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsUnremoveResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsUnremoveResponse](src/models/unions/docs-unremove-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Records

> Source: [Records](src/resources/records.ts)

<details>
<summary><code>addRecords(request: Records.AddRecordsRequest, options?: RequestOptions): ApiPromise&lt;RecordsWithoutFields, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.addRecords({
    docId: "some example string",
    tableId: "some example string",
    body: { records: [{ fields: {} }] },
  });
  // TODO: Handle 'response' of type RecordsWithoutFields
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .addRecords({
    docId: "some example string",
    tableId: "some example string",
    body: { records: [{ fields: {} }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordsWithoutFields
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>noparse?</code> | <code>boolean</code> | Set to true to prohibit parsing strings according to the column type. |
| <code>body</code> | <code>[RecordsWithoutId](src/models/records-without-id.ts)</code> | the records to add |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.addRecords(request)`

- **OnSuccess**: <code>[RecordsWithoutFields](src/models/records-without-fields.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.records.addRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordsWithoutFields, ApiError&gt;</code>, with `result.value` of type <code>[RecordsWithoutFields](src/models/records-without-fields.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteRecords(request: Records.DeleteRecordsRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesRecordsDeleteResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.deleteRecords({
    docId: "some example string",
    tableId: "some example string",
    body: [1],
  });
  // TODO: Handle 'response' of type DocsTablesRecordsDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .deleteRecords({ docId: "some example string", tableId: "some example string", body: [1] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesRecordsDeleteResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>body</code> | <code>number[]</code> | the IDs of records to remove |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.deleteRecords(request)`

- **OnSuccess**: <code>[DocsTablesRecordsDeleteResponse](src/models/unions/docs-tables-records-delete-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.records.deleteRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesRecordsDeleteResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesRecordsDeleteResponse](src/models/unions/docs-tables-records-delete-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecords(request: Records.ListRecordsRequest, options?: RequestOptions): ApiPromise&lt;RecordsList, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.listRecords({
    docId: "some example string",
    tableId: "some example string",
    filter: '{"pet": ["cat", "dog"]}',
    sort: "pet,-age",
    limit: 5,
    xSort: "pet,-age",
    xLimit: 5,
  });
  // TODO: Handle 'response' of type RecordsList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .listRecords({
    docId: "some example string",
    tableId: "some example string",
    filter: '{"pet": ["cat", "dog"]}',
    sort: "pet,-age",
    limit: 5,
    xSort: "pet,-age",
    xLimit: 5,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordsList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>filter?</code> | <code>string</code> | This is a JSON object mapping column names to arrays of allowed values.  For example, to filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat", "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to url-encode them.  For this example, the url-encoding is `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously small"]}`. |
| <code>sort?</code> | <code>string</code> | Order in which to return results. If a single column name is given (e.g. `pet`), results are placed in ascending order of values in that column. To get results in an order that was previously prepared manually in Grist, use the special `manualSort` column name. Multiple columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options append them after a colon (e.g. `pet,-age:naturalSort;emptyLast,owner`). Available options are: `orderByChoice`, `naturalSort`, `emptyLast`. Without the `sort` parameter, the order of results is unspecified. |
| <code>limit?</code> | <code>number</code> | Return at most this number of rows.  A value of 0 is equivalent to having no limit. |
| <code>hidden?</code> | <code>boolean</code> | Set to true to include the hidden columns (like "manualSort") |
| <code>cellFormat?</code> | <code>[CellFormat](src/models/cell-format.ts)</code> | With "typed", every cell value is returned in a self-describing typed form, e.g. a Date as `["d", timestamp]` and a Reference as `["R", tableId, rowId]`, and formula errors are returned inline as `["E", ...]` values. The default "normal" format uses compact values whose interpretation depends on the column type. See [Grist data format](https://github.com/gristlabs/grist-core/blob/main/documentation/grist-data-format.md) for details. |
| <code>xSort?</code> | <code>string</code> | Same as `sort` query parameter. |
| <code>xLimit?</code> | <code>number</code> | Same as `limit` query parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.listRecords(request)`

- **OnSuccess**: <code>[RecordsList](src/models/records-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.records.listRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordsList, ApiError&gt;</code>, with `result.value` of type <code>[RecordsList](src/models/records-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyRecords(request: Records.ModifyRecordsRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesRecordsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.modifyRecords({
    docId: "some example string",
    tableId: "some example string",
    body: { records: [{ id: 1.5, fields: {} }] },
  });
  // TODO: Handle 'response' of type DocsTablesRecordsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .modifyRecords({
    docId: "some example string",
    tableId: "some example string",
    body: { records: [{ id: 1.5, fields: {} }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesRecordsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>noparse?</code> | <code>boolean</code> | Set to true to prohibit parsing strings according to the column type. |
| <code>body</code> | <code>[RecordsList](src/models/records-list.ts)</code> | the records to change, with ids |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.modifyRecords(request)`

- **OnSuccess**: <code>[DocsTablesRecordsResponse](src/models/unions/docs-tables-records-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.records.modifyRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesRecordsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesRecordsResponse](src/models/unions/docs-tables-records-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceRecords(request: Records.ReplaceRecordsRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesRecordsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.replaceRecords({
    docId: "some example string",
    tableId: "some example string",
    body: { records: [{ require: {} }] },
  });
  // TODO: Handle 'response' of type DocsTablesRecordsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .replaceRecords({
    docId: "some example string",
    tableId: "some example string",
    body: { records: [{ require: {} }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesRecordsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>noparse?</code> | <code>boolean</code> | Set to true to prohibit parsing strings according to the column type. |
| <code>onmany?</code> | <code>[Onmany](src/models/onmany.ts)</code> | - |
| <code>noadd?</code> | <code>boolean</code> | - |
| <code>noupdate?</code> | <code>boolean</code> | - |
| <code>allowEmptyRequire?</code> | <code>boolean</code> | - |
| <code>body</code> | <code>[RecordsWithRequire](src/models/records-with-require.ts)</code> | The records to add or update. Instead of an id, a `require` object is provided, with the same structure as `fields`. If no query parameter options are set, then the operation is as follows. First, we check if a record exists matching the values specified for columns in `require`. If so, we update it by setting the values specified for columns in `fields`. If not, we create a new record with a combination of the values in `require` and `fields`, with `fields` taking priority if the same column is specified in both. The query parameters allow for variations on this behavior. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.replaceRecords(request)`

- **OnSuccess**: <code>[DocsTablesRecordsResponse](src/models/unions/docs-tables-records-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.records.replaceRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesRecordsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesRecordsResponse](src/models/unions/docs-tables-records-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tables

> Source: [Tables](src/resources/tables.ts)

<details>
<summary><code>addTables(request: Tables.AddTablesRequest, options?: RequestOptions): ApiPromise&lt;TablesWithoutFields, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tables.addTables({
    docId: "some example string",
    body: { tables: [{ columns: [{}] }] },
  });
  // TODO: Handle 'response' of type TablesWithoutFields
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tables
  .addTables({ docId: "some example string", body: { tables: [{ columns: [{}] }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TablesWithoutFields
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body</code> | <code>[CreateTables](src/models/create-tables.ts)</code> | the tables to add |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tables.addTables(request)`

- **OnSuccess**: <code>[TablesWithoutFields](src/models/tables-without-fields.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tables.addTables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TablesWithoutFields, ApiError&gt;</code>, with `result.value` of type <code>[TablesWithoutFields](src/models/tables-without-fields.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTables(request: Tables.ListTablesRequest, options?: RequestOptions): ApiPromise&lt;TablesList, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tables.listTables({ docId: "some example string" });
  // TODO: Handle 'response' of type TablesList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tables.listTables({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TablesList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>expand?</code> | <code>[Expand](src/models/expand.ts)</code> | Set to "column" to include column metadata for each table in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tables.listTables(request)`

- **OnSuccess**: <code>[TablesList](src/models/tables-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tables.listTables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TablesList, ApiError&gt;</code>, with `result.value` of type <code>[TablesList](src/models/tables-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyTables(request: Tables.ModifyTablesRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modify metadata for existing tables. This endpoint is primarily useful for:
- Renaming tables (via the `tableId` field)
- Setting on-demand loading (via the `onDemand` field)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tables.modifyTables({
    docId: "some example string",
    body: { tables: [{ id: "some example string", fields: {} }] },
  });
  // TODO: Handle 'response' of type DocsTablesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tables
  .modifyTables({
    docId: "some example string",
    body: { tables: [{ id: "some example string", fields: {} }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body</code> | <code>[UpdateTables](src/models/update-tables.ts)</code> | the tables to modify, identified by their current id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tables.modifyTables(request)`

- **OnSuccess**: <code>[DocsTablesResponse](src/models/unions/docs-tables-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tables.modifyTables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesResponse](src/models/unions/docs-tables-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Columns

> Source: [Columns](src/resources/columns.ts)

<details>
<summary><code>addColumns(request: Columns.AddColumnsRequest, options?: RequestOptions): ApiPromise&lt;ColumnsWithoutFields, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.columns.addColumns({
    docId: "some example string",
    tableId: "some example string",
    body: { columns: [{}] },
  });
  // TODO: Handle 'response' of type ColumnsWithoutFields
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.columns
  .addColumns({ docId: "some example string", tableId: "some example string", body: { columns: [{}] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ColumnsWithoutFields
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>body</code> | <code>[CreateColumns](src/models/create-columns.ts)</code> | the columns to add |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.columns.addColumns(request)`

- **OnSuccess**: <code>[ColumnsWithoutFields](src/models/columns-without-fields.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.columns.addColumns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ColumnsWithoutFields, ApiError&gt;</code>, with `result.value` of type <code>[ColumnsWithoutFields](src/models/columns-without-fields.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteColumn(request: Columns.DeleteColumnRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesColumnsColIdResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.columns.deleteColumn({
    docId: "some example string",
    tableId: "some example string",
    colId: "some example string",
  });
  // TODO: Handle 'response' of type DocsTablesColumnsColIdResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.columns
  .deleteColumn({
    docId: "some example string",
    tableId: "some example string",
    colId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesColumnsColIdResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>colId</code> | <code>string</code> | The column id (without the starting `$`) as shown in the column configuration below the label |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.columns.deleteColumn(request)`

- **OnSuccess**: <code>[DocsTablesColumnsColIdResponse](src/models/unions/docs-tables-columns-col-id-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.columns.deleteColumn(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesColumnsColIdResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesColumnsColIdResponse](src/models/unions/docs-tables-columns-col-id-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listColumns(request: Columns.ListColumnsRequest, options?: RequestOptions): ApiPromise&lt;ColumnsList, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.columns.listColumns({
    docId: "some example string",
    tableId: "some example string",
  });
  // TODO: Handle 'response' of type ColumnsList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.columns
  .listColumns({ docId: "some example string", tableId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ColumnsList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>hidden?</code> | <code>boolean</code> | Set to true to include the hidden columns (like "manualSort") |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.columns.listColumns(request)`

- **OnSuccess**: <code>[ColumnsList](src/models/columns-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.columns.listColumns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ColumnsList, ApiError&gt;</code>, with `result.value` of type <code>[ColumnsList](src/models/columns-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyColumns(request: Columns.ModifyColumnsRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesColumnsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.columns.modifyColumns({
    docId: "some example string",
    tableId: "some example string",
    body: { columns: [{ id: "some example string", fields: {} }] },
  });
  // TODO: Handle 'response' of type DocsTablesColumnsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.columns
  .modifyColumns({
    docId: "some example string",
    tableId: "some example string",
    body: { columns: [{ id: "some example string", fields: {} }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesColumnsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>body</code> | <code>[UpdateColumns](src/models/update-columns.ts)</code> | the columns to change, with ids |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.columns.modifyColumns(request)`

- **OnSuccess**: <code>[DocsTablesColumnsResponse](src/models/unions/docs-tables-columns-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.columns.modifyColumns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesColumnsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesColumnsResponse](src/models/unions/docs-tables-columns-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceColumns(request: Columns.ReplaceColumnsRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesColumnsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.columns.replaceColumns({
    docId: "some example string",
    tableId: "some example string",
    body: { columns: [{ id: "some example string", fields: {} }] },
  });
  // TODO: Handle 'response' of type DocsTablesColumnsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.columns
  .replaceColumns({
    docId: "some example string",
    tableId: "some example string",
    body: { columns: [{ id: "some example string", fields: {} }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesColumnsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>noadd?</code> | <code>boolean</code> | - |
| <code>noupdate?</code> | <code>boolean</code> | - |
| <code>replaceall?</code> | <code>boolean</code> | - |
| <code>body</code> | <code>[UpdateColumns](src/models/update-columns.ts)</code> | The columns to add or update. We check whether the specified column ID exists: if so, the column is updated with the provided data, otherwise a new column is created.<br>Also note that some query parameters alter this behavior. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.columns.replaceColumns(request)`

- **OnSuccess**: <code>[DocsTablesColumnsResponse](src/models/unions/docs-tables-columns-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.columns.replaceColumns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesColumnsResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesColumnsResponse](src/models/unions/docs-tables-columns-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataApi

> Source: [DataApi](src/resources/data-api.ts)

<details>
<summary><code>addRows(request: DataApi.AddRowsRequest, options?: RequestOptions): ApiPromise&lt;number[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated in favor of `records` endpoints. We have no immediate plans to remove these endpoints, but consider `records` a better starting point for new projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.addRows({
    docId: "some example string",
    tableId: "some example string",
    body: { key: {} },
  });
  // TODO: Handle 'response' of type number[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .addRows({ docId: "some example string", tableId: "some example string", body: { key: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>noparse?</code> | <code>boolean</code> | Set to true to prohibit parsing strings according to the column type. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | the data to add |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.addRows(request)`

- **OnSuccess**: <code>number[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataApi.addRows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number[], ApiError&gt;</code>, with `result.value` of type <code>number[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteRows(request: DataApi.DeleteRowsRequest, options?: RequestOptions): ApiPromise&lt;DocsTablesDataDeleteResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.deleteRows({
    docId: "some example string",
    tableId: "some example string",
    body: [1],
  });
  // TODO: Handle 'response' of type DocsTablesDataDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .deleteRows({ docId: "some example string", tableId: "some example string", body: [1] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsTablesDataDeleteResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>body</code> | <code>number[]</code> | the IDs of rows to remove |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.deleteRows(request)`

- **OnSuccess**: <code>[DocsTablesDataDeleteResponse](src/models/unions/docs-tables-data-delete-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataApi.deleteRows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsTablesDataDeleteResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsTablesDataDeleteResponse](src/models/unions/docs-tables-data-delete-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTableData(request: DataApi.GetTableDataRequest, options?: RequestOptions): ApiPromise&lt;Data, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated in favor of `records` endpoints. We have no immediate plans to remove these endpoints, but consider `records` a better starting point for new projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.getTableData({
    docId: "some example string",
    tableId: "some example string",
    filter: '{"pet": ["cat", "dog"]}',
    sort: "pet,-age",
    limit: 5,
    xSort: "pet,-age",
    xLimit: 5,
  });
  // TODO: Handle 'response' of type Data
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .getTableData({
    docId: "some example string",
    tableId: "some example string",
    filter: '{"pet": ["cat", "dog"]}',
    sort: "pet,-age",
    limit: 5,
    xSort: "pet,-age",
    xLimit: 5,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Data
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>filter?</code> | <code>string</code> | This is a JSON object mapping column names to arrays of allowed values.  For example, to filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat", "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to url-encode them.  For this example, the url-encoding is `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously small"]}`. |
| <code>sort?</code> | <code>string</code> | Order in which to return results. If a single column name is given (e.g. `pet`), results are placed in ascending order of values in that column. To get results in an order that was previously prepared manually in Grist, use the special `manualSort` column name. Multiple columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options append them after a colon (e.g. `pet,-age:naturalSort;emptyLast,owner`). Available options are: `orderByChoice`, `naturalSort`, `emptyLast`. Without the `sort` parameter, the order of results is unspecified. |
| <code>limit?</code> | <code>number</code> | Return at most this number of rows.  A value of 0 is equivalent to having no limit. |
| <code>cellFormat?</code> | <code>[CellFormat](src/models/cell-format.ts)</code> | With "typed", every cell value is returned in a self-describing typed form, e.g. a Date as `["d", timestamp]` and a Reference as `["R", tableId, rowId]`, and formula errors are returned inline as `["E", ...]` values. The default "normal" format uses compact values whose interpretation depends on the column type. See [Grist data format](https://github.com/gristlabs/grist-core/blob/main/documentation/grist-data-format.md) for details. |
| <code>xSort?</code> | <code>string</code> | Same as `sort` query parameter. |
| <code>xLimit?</code> | <code>number</code> | Same as `limit` query parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.getTableData(request)`

- **OnSuccess**: <code>[Data](src/models/data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataApi.getTableData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Data, ApiError&gt;</code>, with `result.value` of type <code>[Data](src/models/data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyRows(request: DataApi.ModifyRowsRequest, options?: RequestOptions): ApiPromise&lt;number[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated in favor of `records` endpoints. We have no immediate plans to remove these endpoints, but consider `records` a better starting point for new projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.modifyRows({
    docId: "some example string",
    tableId: "some example string",
    body: { id: [1] },
  });
  // TODO: Handle 'response' of type number[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .modifyRows({ docId: "some example string", tableId: "some example string", body: { id: [1] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>tableId</code> | <code>string</code> | normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` |
| <code>noparse?</code> | <code>boolean</code> | Set to true to prohibit parsing strings according to the column type. |
| <code>body</code> | <code>[Data](src/models/data.ts)</code> | the data to change, with ids |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.modifyRows(request)`

- **OnSuccess**: <code>number[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataApi.modifyRows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number[], ApiError&gt;</code>, with `result.value` of type <code>number[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AttachmentsApi

> Source: [AttachmentsApi](src/resources/attachments-api.ts)

<details>
<summary><code>downloadAttachment(request: AttachmentsApi.DownloadAttachmentRequest, options?: RequestOptions): ApiPromise&lt;DocsAttachmentsDownloadResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.downloadAttachment({
    docId: "some example string",
    attachmentId: 1.5,
  });
  // TODO: Handle 'response' of type DocsAttachmentsDownloadResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .downloadAttachment({ docId: "some example string", attachmentId: 1.5 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAttachmentsDownloadResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>attachmentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.downloadAttachment(request)`

- **OnSuccess**: <code>[DocsAttachmentsDownloadResponse](src/models/unions/docs-attachments-download-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.downloadAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAttachmentsDownloadResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsAttachmentsDownloadResponse](src/models/unions/docs-attachments-download-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadAttachments(request: AttachmentsApi.DownloadAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;DocsAttachmentsArchiveResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.downloadAttachments({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsAttachmentsArchiveResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .downloadAttachments({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAttachmentsArchiveResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>format?</code> | <code>[Format12](src/models/format12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.downloadAttachments(request)`

- **OnSuccess**: <code>[DocsAttachmentsArchiveResponse1](src/models/unions/docs-attachments-archive-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.downloadAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAttachmentsArchiveResponse1, ApiError&gt;</code>, with `result.value` of type <code>[DocsAttachmentsArchiveResponse1](src/models/unions/docs-attachments-archive-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAttachmentMetadata(request: AttachmentsApi.GetAttachmentMetadataRequest, options?: RequestOptions): ApiPromise&lt;AttachmentMetadata, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.getAttachmentMetadata({
    docId: "some example string",
    attachmentId: 1.5,
  });
  // TODO: Handle 'response' of type AttachmentMetadata
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .getAttachmentMetadata({ docId: "some example string", attachmentId: 1.5 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentMetadata
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>attachmentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.getAttachmentMetadata(request)`

- **OnSuccess**: <code>[AttachmentMetadata](src/models/attachment-metadata.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.getAttachmentMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentMetadata, ApiError&gt;</code>, with `result.value` of type <code>[AttachmentMetadata](src/models/attachment-metadata.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAttachmentTransferStatus(request: AttachmentsApi.GetAttachmentTransferStatusRequest, options?: RequestOptions): ApiPromise&lt;AttachmentsTransferStatus, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.getAttachmentTransferStatus({ docId: "some example string" });
  // TODO: Handle 'response' of type AttachmentsTransferStatus
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .getAttachmentTransferStatus({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentsTransferStatus
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.getAttachmentTransferStatus(request)`

- **OnSuccess**: <code>[AttachmentsTransferStatus](src/models/attachments-transfer-status.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.getAttachmentTransferStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentsTransferStatus, ApiError&gt;</code>, with `result.value` of type <code>[AttachmentsTransferStatus](src/models/attachments-transfer-status.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocumentAttachmentStore(request: AttachmentsApi.GetDocumentAttachmentStoreRequest, options?: RequestOptions): ApiPromise&lt;DocumentStoreSetting, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.getDocumentAttachmentStore({ docId: "some example string" });
  // TODO: Handle 'response' of type DocumentStoreSetting
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .getDocumentAttachmentStore({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentStoreSetting
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.getDocumentAttachmentStore(request)`

- **OnSuccess**: <code>[DocumentStoreSetting](src/models/document-store-setting.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.getDocumentAttachmentStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentStoreSetting, ApiError&gt;</code>, with `result.value` of type <code>[DocumentStoreSetting](src/models/document-store-setting.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAttachmentStores(request: AttachmentsApi.ListAttachmentStoresRequest, options?: RequestOptions): ApiPromise&lt;DocumentStoreSetting, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.listAttachmentStores({ docId: "some example string" });
  // TODO: Handle 'response' of type DocumentStoreSetting
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .listAttachmentStores({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentStoreSetting
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.listAttachmentStores(request)`

- **OnSuccess**: <code>[DocumentStoreSetting](src/models/document-store-setting.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.listAttachmentStores(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentStoreSetting, ApiError&gt;</code>, with `result.value` of type <code>[DocumentStoreSetting](src/models/document-store-setting.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAttachments(request: AttachmentsApi.ListAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;AttachmentMetadataList, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.listAttachments({
    docId: "some example string",
    filter: '{"pet": ["cat", "dog"]}',
    sort: "pet,-age",
    limit: 5,
    xSort: "pet,-age",
    xLimit: 5,
  });
  // TODO: Handle 'response' of type AttachmentMetadataList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .listAttachments({
    docId: "some example string",
    filter: '{"pet": ["cat", "dog"]}',
    sort: "pet,-age",
    limit: 5,
    xSort: "pet,-age",
    xLimit: 5,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentMetadataList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>filter?</code> | <code>string</code> | This is a JSON object mapping column names to arrays of allowed values.  For example, to filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat", "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to url-encode them.  For this example, the url-encoding is `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously small"]}`. |
| <code>sort?</code> | <code>string</code> | Order in which to return results. If a single column name is given (e.g. `pet`), results are placed in ascending order of values in that column. To get results in an order that was previously prepared manually in Grist, use the special `manualSort` column name. Multiple columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options append them after a colon (e.g. `pet,-age:naturalSort;emptyLast,owner`). Available options are: `orderByChoice`, `naturalSort`, `emptyLast`. Without the `sort` parameter, the order of results is unspecified. |
| <code>limit?</code> | <code>number</code> | Return at most this number of rows.  A value of 0 is equivalent to having no limit. |
| <code>xSort?</code> | <code>string</code> | Same as `sort` query parameter. |
| <code>xLimit?</code> | <code>number</code> | Same as `limit` query parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.listAttachments(request)`

- **OnSuccess**: <code>[AttachmentMetadataList](src/models/attachment-metadata-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.listAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentMetadataList, ApiError&gt;</code>, with `result.value` of type <code>[AttachmentMetadataList](src/models/attachment-metadata-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeUnusedAttachments(request: AttachmentsApi.RemoveUnusedAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;DocsAttachmentsRemoveUnusedResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When an uploaded attachment is no longer used in a Grist document,  it's retained for a period of time in case it's needed again (e.g. to facilitate an "undo").
This removes all of these retained attachments, reducing the amount of storage used. This is particularly useful if a document has hit its attachment storage limit.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.removeUnusedAttachments({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsAttachmentsRemoveUnusedResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .removeUnusedAttachments({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAttachmentsRemoveUnusedResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>expiredOnly?</code> | <code>boolean</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.removeUnusedAttachments(request)`

- **OnSuccess**: <code>[DocsAttachmentsRemoveUnusedResponse](src/models/unions/docs-attachments-remove-unused-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.removeUnusedAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAttachmentsRemoveUnusedResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsAttachmentsRemoveUnusedResponse](src/models/unions/docs-attachments-remove-unused-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setDocumentAttachmentStore(request: AttachmentsApi.SetDocumentAttachmentStoreRequest, options?: RequestOptions): ApiPromise&lt;DocsAttachmentsStoreResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.setDocumentAttachmentStore({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsAttachmentsStoreResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .setDocumentAttachmentStore({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAttachmentsStoreResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocumentStoreSetting](src/models/document-store-setting.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.setDocumentAttachmentStore(request)`

- **OnSuccess**: <code>[DocsAttachmentsStoreResponse](src/models/docs-attachments-store-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.setDocumentAttachmentStore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAttachmentsStoreResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsAttachmentsStoreResponse](src/models/docs-attachments-store-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAttachmentTransfer(request: AttachmentsApi.StartAttachmentTransferRequest, options?: RequestOptions): ApiPromise&lt;AttachmentsTransferStatus, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.startAttachmentTransfer({ docId: "some example string" });
  // TODO: Handle 'response' of type AttachmentsTransferStatus
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .startAttachmentTransfer({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentsTransferStatus
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.startAttachmentTransfer(request)`

- **OnSuccess**: <code>[AttachmentsTransferStatus](src/models/attachments-transfer-status.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.startAttachmentTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentsTransferStatus, ApiError&gt;</code>, with `result.value` of type <code>[AttachmentsTransferStatus](src/models/attachments-transfer-status.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUsedAttachments(request: AttachmentsApi.UpdateUsedAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;DocsAttachmentsUpdateUsedResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recalculate which attachments are in use by scanning the document.
This is mostly used for testing and maintenance.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.updateUsedAttachments({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsAttachmentsUpdateUsedResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .updateUsedAttachments({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAttachmentsUpdateUsedResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.updateUsedAttachments(request)`

- **OnSuccess**: <code>[DocsAttachmentsUpdateUsedResponse](src/models/unions/docs-attachments-update-used-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.updateUsedAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAttachmentsUpdateUsedResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsAttachmentsUpdateUsedResponse](src/models/unions/docs-attachments-update-used-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadAttachments(request: AttachmentsApi.UploadAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;number[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.uploadAttachments({ docId: "some example string" });
  // TODO: Handle 'response' of type number[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi.uploadAttachments({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>upload?</code> | <code>FileInput</code> | File to add. Grist accepts several "upload" parts per request; APIMatic codegen does not support an array of files, so this is one file per call. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.uploadAttachments(request)`

- **OnSuccess**: <code>number[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.uploadAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number[], ApiError&gt;</code>, with `result.value` of type <code>number[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadMissingAttachments(request: AttachmentsApi.UploadMissingAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;DocsAttachmentsArchiveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores attachments which are missing from external storage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.uploadMissingAttachments({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsAttachmentsArchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .uploadMissingAttachments({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAttachmentsArchiveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>file?</code> | <code>FileInput</code> | The .tar file. Must have `Content-Type=application/x-tar` set. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.uploadMissingAttachments(request)`

- **OnSuccess**: <code>[DocsAttachmentsArchiveResponse](src/models/docs-attachments-archive-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.uploadMissingAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAttachmentsArchiveResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsAttachmentsArchiveResponse](src/models/docs-attachments-archive-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyAttachmentFiles(request: AttachmentsApi.VerifyAttachmentFilesRequest, options?: RequestOptions): ApiPromise&lt;DocsAttachmentsVerifyFilesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify that attachment records match the actual stored files.
This is a maintenance endpoint to check for data consistency.
Only document owners can call this endpoint.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentsApi.verifyAttachmentFiles({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsAttachmentsVerifyFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentsApi
  .verifyAttachmentFiles({ docId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsAttachmentsVerifyFilesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentsApi.verifyAttachmentFiles(request)`

- **OnSuccess**: <code>[DocsAttachmentsVerifyFilesResponse](src/models/unions/docs-attachments-verify-files-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.attachmentsApi.verifyAttachmentFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsAttachmentsVerifyFilesResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsAttachmentsVerifyFilesResponse](src/models/unions/docs-attachments-verify-files-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>clearWebhookQueue(request: Webhooks.ClearWebhookQueueRequest, options?: RequestOptions): ApiPromise&lt;DocsWebhooksQueueResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear all pending webhook deliveries for this document. Use this
if the queue has built up due to unreachable endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.clearWebhookQueue({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsWebhooksQueueResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.clearWebhookQueue({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsWebhooksQueueResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.clearWebhookQueue(request)`

- **OnSuccess**: <code>[DocsWebhooksQueueResponse1](src/models/unions/docs-webhooks-queue-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.clearWebhookQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsWebhooksQueueResponse1, ApiError&gt;</code>, with `result.value` of type <code>[DocsWebhooksQueueResponse1](src/models/unions/docs-webhooks-queue-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clearWebhookQueueForWebhook(request: Webhooks.ClearWebhookQueueForWebhookRequest, options?: RequestOptions): ApiPromise&lt;DocsWebhooksQueueResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the queue of pending payloads for a specific webhook.
Only document owners can call this endpoint.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.clearWebhookQueueForWebhook({
    docId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type DocsWebhooksQueueResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .clearWebhookQueueForWebhook({ docId: "some example string", webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsWebhooksQueueResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>webhookId</code> | <code>string</code> | ID of the webhook |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.clearWebhookQueueForWebhook(request)`

- **OnSuccess**: <code>[DocsWebhooksQueueResponse](src/models/docs-webhooks-queue-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.clearWebhookQueueForWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsWebhooksQueueResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsWebhooksQueueResponse](src/models/docs-webhooks-queue-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createWebhooks(request: Webhooks.CreateWebhooksRequest, options?: RequestOptions): ApiPromise&lt;DocsWebhooksResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates one or more webhooks that will POST to specified URLs when
data in the document changes. Returns the IDs of the created webhooks.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhooks({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsWebhooksResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.createWebhooks({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsWebhooksResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsWebhooksRequest](src/models/docs-webhooks-request.ts)</code> | an array of webhook settings |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhooks(request)`

- **OnSuccess**: <code>[DocsWebhooksResponse1](src/models/docs-webhooks-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.createWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsWebhooksResponse1, ApiError&gt;</code>, with `result.value` of type <code>[DocsWebhooksResponse1](src/models/docs-webhooks-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;DocsWebhooksResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a webhook. Any pending deliveries in the queue
for this webhook will also be removed.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteWebhook({
    docId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type DocsWebhooksResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .deleteWebhook({ docId: "some example string", webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsWebhooksResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>webhookId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>[DocsWebhooksResponse2](src/models/docs-webhooks-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsWebhooksResponse2, ApiError&gt;</code>, with `result.value` of type <code>[DocsWebhooksResponse2](src/models/docs-webhooks-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(request: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;DocsWebhooksResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all webhooks configured for this document, including their
settings and delivery statistics.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks({ docId: "some example string" });
  // TODO: Handle 'response' of type DocsWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhooks({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsWebhooksResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhooks(request)`

- **OnSuccess**: <code>[DocsWebhooksResponse](src/models/docs-webhooks-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.listWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsWebhooksResponse, ApiError&gt;</code>, with `result.value` of type <code>[DocsWebhooksResponse](src/models/docs-webhooks-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyWebhook(request: Webhooks.ModifyWebhookRequest, options?: RequestOptions): ApiPromise&lt;DocsWebhooksResponse21, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the configuration of an existing webhook, such as its URL,
enabled state, or event types.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.modifyWebhook({
    docId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type DocsWebhooksResponse21
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .modifyWebhook({ docId: "some example string", webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsWebhooksResponse21
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>webhookId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[WebhookPartialFields](src/models/webhook-partial-fields.ts)</code> | the changes to make |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.modifyWebhook(request)`

- **OnSuccess**: <code>[DocsWebhooksResponse21](src/models/unions/docs-webhooks-response21.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.modifyWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsWebhooksResponse21, ApiError&gt;</code>, with `result.value` of type <code>[DocsWebhooksResponse21](src/models/unions/docs-webhooks-response21.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sql

> Source: [Sql](src/resources/sql.ts)

<details>
<summary><code>runSql(request: Sql.RunSqlRequest, options?: RequestOptions): ApiPromise&lt;SqlResultSet, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Execute a read-only SQL SELECT query with support for parameterized queries
and custom timeouts. All Grist documents are SQLite databases, and queries
are executed directly against SQLite with security restrictions.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sql.runSql({ docId: "some example string" });
  // TODO: Handle 'response' of type SqlResultSet
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sql.runSql({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SqlResultSet
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>body?</code> | <code>[DocsSqlRequest](src/models/docs-sql-request.ts)</code> | Query options |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sql.runSql(request)`

- **OnSuccess**: <code>[SqlResultSet](src/models/sql-result-set.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.sql.runSql(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SqlResultSet, ApiError&gt;</code>, with `result.value` of type <code>[SqlResultSet](src/models/sql-result-set.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runSqlGet(request: Sql.RunSqlGetRequest, options?: RequestOptions): ApiPromise&lt;SqlResultSet, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Execute a read-only SQL SELECT query against the document's SQLite database.
This is a simplified endpoint for basic queries. For queries with parameters
or custom timeouts, use the POST endpoint instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sql.runSqlGet({ docId: "some example string" });
  // TODO: Handle 'response' of type SqlResultSet
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sql.runSqlGet({ docId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SqlResultSet
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>q?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sql.runSqlGet(request)`

- **OnSuccess**: <code>[SqlResultSet](src/models/sql-result-set.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.sql.runSqlGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SqlResultSet, ApiError&gt;</code>, with `result.value` of type <code>[SqlResultSet](src/models/sql-result-set.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UsersApi

> Source: [UsersApi](src/resources/users-api.ts)

<details>
<summary><code>deleteUser(request: UsersApi.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;UsersResponse, UsersApi.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This action also deletes the user's personal organisation and all the workspaces and documents it contains.
Currently, only the users themselves are allowed to delete their own accounts.

⚠️ **This action cannot be undone, please be cautious when using this endpoint** ⚠️


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersApi.deleteUser({ userId: 1 });
  // TODO: Handle 'response' of type UsersResponse
} catch (err) {
  // TODO: Handle 'err' of type UsersApi.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersApi.deleteUser({ userId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | A user id |
| <code>body?</code> | <code>[UsersRequest](src/models/users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersApi.deleteUser(request)`

- **OnSuccess**: <code>[UsersResponse](src/models/unions/users-response.ts)</code>
- **OnError**: throws <code>[UsersApi.DeleteUserError](src/resources/users-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersApi.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersResponse, UsersApi.DeleteUserError&gt;</code>, with `result.value` of type <code>[UsersResponse](src/models/unions/users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableUser(request: UsersApi.DisableUserRequest, options?: RequestOptions): ApiPromise&lt;UsersDisableResponse, UsersApi.DisableUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A disabled user can not log in and loses access to all pages,
including public ones, as well as API access. The operation is
non-destructive. Disabled users can be re-enabled.

Only admin accounts can disable a user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersApi.disableUser({ userId: 1 });
  // TODO: Handle 'response' of type UsersDisableResponse
} catch (err) {
  // TODO: Handle 'err' of type UsersApi.DisableUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersApi.disableUser({ userId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersDisableResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | A user id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersApi.disableUser(request)`

- **OnSuccess**: <code>[UsersDisableResponse](src/models/unions/users-disable-response.ts)</code>
- **OnError**: throws <code>[UsersApi.DisableUserError](src/resources/users-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersApi.disableUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersDisableResponse, UsersApi.DisableUserError&gt;</code>, with `result.value` of type <code>[UsersDisableResponse](src/models/unions/users-disable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableUser(request: UsersApi.EnableUserRequest, options?: RequestOptions): ApiPromise&lt;UsersEnableResponse, UsersApi.EnableUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If a user has been disabled, this will restore their access, including API access.

Only admin accounts can enable a user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersApi.enableUser({ userId: 1 });
  // TODO: Handle 'response' of type UsersEnableResponse
} catch (err) {
  // TODO: Handle 'err' of type UsersApi.EnableUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersApi.enableUser({ userId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersEnableResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | A user id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersApi.enableUser(request)`

- **OnSuccess**: <code>[UsersEnableResponse](src/models/unions/users-enable-response.ts)</code>
- **OnError**: throws <code>[UsersApi.EnableUserError](src/resources/users-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersApi.enableUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersEnableResponse, UsersApi.EnableUserError&gt;</code>, with `result.value` of type <code>[UsersEnableResponse](src/models/unions/users-enable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceAccounts

> Source: [ServiceAccounts](src/resources/service-accounts.ts)

<details>
<summary><code>createServiceAccount(request?: ServiceAccounts.CreateServiceAccountRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountResultWithApiKey, ServiceAccounts.CreateServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This creates a new service account with a new API key.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.createServiceAccount();
  // TODO: Handle 'response' of type ServiceAccountResultWithApiKey
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.CreateServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.createServiceAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountResultWithApiKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateServiceAccount](src/models/create-service-account.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.createServiceAccount(request)`

- **OnSuccess**: <code>[ServiceAccountResultWithApiKey](src/models/service-account-result-with-api-key.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.CreateServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.createServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountResultWithApiKey, ServiceAccounts.CreateServiceAccountError&gt;</code>, with `result.value` of type <code>[ServiceAccountResultWithApiKey](src/models/service-account-result-with-api-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteServiceAccount(request: ServiceAccounts.DeleteServiceAccountRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountsResponse, ServiceAccounts.DeleteServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This deletes a given service account.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.deleteServiceAccount({ saId: 1 });
  // TODO: Handle 'response' of type ServiceAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.DeleteServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.deleteServiceAccount({ saId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>saId</code> | <code>number</code> | A service account id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.deleteServiceAccount(request)`

- **OnSuccess**: <code>[ServiceAccountsResponse](src/models/unions/service-accounts-response.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.DeleteServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.deleteServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountsResponse, ServiceAccounts.DeleteServiceAccountError&gt;</code>, with `result.value` of type <code>[ServiceAccountsResponse](src/models/unions/service-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteServiceAccountApiKey(request: ServiceAccounts.DeleteServiceAccountApiKeyRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountsApikeyResponse, ServiceAccounts.DeleteServiceAccountApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the API key for a service account. The service account will
no longer be able to authenticate until a new key is generated.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.deleteServiceAccountApiKey({ saId: 1 });
  // TODO: Handle 'response' of type ServiceAccountsApikeyResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.DeleteServiceAccountApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.deleteServiceAccountApiKey({ saId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountsApikeyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>saId</code> | <code>number</code> | A service account id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.deleteServiceAccountApiKey(request)`

- **OnSuccess**: <code>[ServiceAccountsApikeyResponse](src/models/unions/service-accounts-apikey-response.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.DeleteServiceAccountApiKeyError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.deleteServiceAccountApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountsApikeyResponse, ServiceAccounts.DeleteServiceAccountApiKeyError&gt;</code>, with `result.value` of type <code>[ServiceAccountsApikeyResponse](src/models/unions/service-accounts-apikey-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getServiceAccount(request: ServiceAccounts.GetServiceAccountRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountResult, ServiceAccounts.GetServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This reports the details of a service account.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.getServiceAccount({ saId: 1 });
  // TODO: Handle 'response' of type ServiceAccountResult
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.GetServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.getServiceAccount({ saId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>saId</code> | <code>number</code> | A service account id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.getServiceAccount(request)`

- **OnSuccess**: <code>[ServiceAccountResult](src/models/service-account-result.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.GetServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.getServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountResult, ServiceAccounts.GetServiceAccountError&gt;</code>, with `result.value` of type <code>[ServiceAccountResult](src/models/service-account-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listServiceAccounts(options?: RequestOptions): ApiPromise&lt;ServiceAccountResult[], ServiceAccounts.ListServiceAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This lists all your service accounts with their details.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.listServiceAccounts();
  // TODO: Handle 'response' of type ServiceAccountResult[]
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.ListServiceAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.listServiceAccounts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountResult[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.listServiceAccounts()`

- **OnSuccess**: <code>[ServiceAccountResult](src/models/service-account-result.ts)[]</code>
- **OnError**: throws <code>[ServiceAccounts.ListServiceAccountsError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.listServiceAccounts().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountResult[], ServiceAccounts.ListServiceAccountsError&gt;</code>, with `result.value` of type <code>[ServiceAccountResult](src/models/service-account-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyServiceAccount(request: ServiceAccounts.ModifyServiceAccountRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountsResponse, ServiceAccounts.ModifyServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This updates a service account's label, description or expiration date.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.modifyServiceAccount({ saId: 1 });
  // TODO: Handle 'response' of type ServiceAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.ModifyServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.modifyServiceAccount({ saId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>saId</code> | <code>number</code> | A service account id |
| <code>body?</code> | <code>[ServiceAccountBody](src/models/service-account-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.modifyServiceAccount(request)`

- **OnSuccess**: <code>[ServiceAccountsResponse](src/models/unions/service-accounts-response.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.ModifyServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.modifyServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountsResponse, ServiceAccounts.ModifyServiceAccountError&gt;</code>, with `result.value` of type <code>[ServiceAccountsResponse](src/models/unions/service-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>regenerateServiceAccountApiKey(request: ServiceAccounts.RegenerateServiceAccountApiKeyRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountResultWithApiKey, ServiceAccounts.RegenerateServiceAccountApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This renews an api key of a given service account.
Useful especially to change the API key when it has been leaked.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.regenerateServiceAccountApiKey({ saId: 1 });
  // TODO: Handle 'response' of type ServiceAccountResultWithApiKey
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.RegenerateServiceAccountApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.regenerateServiceAccountApiKey({ saId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountResultWithApiKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>saId</code> | <code>number</code> | A service account id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.regenerateServiceAccountApiKey(request)`

- **OnSuccess**: <code>[ServiceAccountResultWithApiKey](src/models/service-account-result-with-api-key.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.RegenerateServiceAccountApiKeyError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.regenerateServiceAccountApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountResultWithApiKey, ServiceAccounts.RegenerateServiceAccountApiKeyError&gt;</code>, with `result.value` of type <code>[ServiceAccountResultWithApiKey](src/models/service-account-result-with-api-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Scim

> Source: [Scim](src/resources/scim.ts)

<details>
<summary><code>bulkOperation(options?: RequestOptions): ApiPromise&lt;ScimV2BulkResponse, Scim.BulkOperationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scim.bulkOperation();
  // TODO: Handle 'response' of type ScimV2BulkResponse
} catch (err) {
  // TODO: Handle 'err' of type Scim.BulkOperationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.bulkOperation().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimV2BulkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.bulkOperation()`

- **OnSuccess**: <code>[ScimV2BulkResponse](src/models/unions/scim-v2-bulk-response.ts)</code>
- **OnError**: throws <code>[Scim.BulkOperationError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.bulkOperation().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimV2BulkResponse, Scim.BulkOperationError&gt;</code>, with `result.value` of type <code>[ScimV2BulkResponse](src/models/unions/scim-v2-bulk-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGroup(options?: RequestOptions): ApiPromise&lt;undefined, Scim.CreateGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.createGroup();
} catch (err) {
  // TODO: Handle 'err' of type Scim.CreateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.createGroup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.createGroup()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.CreateGroupError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.createGroup().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.CreateGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUser(options?: RequestOptions): ApiPromise&lt;undefined, Scim.CreateUserError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.createUser();
} catch (err) {
  // TODO: Handle 'err' of type Scim.CreateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.createUser().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.createUser()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.CreateUserError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.createUser().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.CreateUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGroupById(request: Scim.DeleteGroupByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.DeleteGroupByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **This action cannot be undone, please be cautious when using this endpoint** ⚠️

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.deleteGroupById({ groupId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.DeleteGroupByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.deleteGroupById({ groupId: 1 }).asApiResult();
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
| <code>groupId</code> | <code>number</code> | A group id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.deleteGroupById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.DeleteGroupByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.deleteGroupById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.DeleteGroupByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUserById(request: Scim.DeleteUserByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.DeleteUserByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **This action cannot be undone, please be cautious when using this endpoint** ⚠️

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.deleteUserById({ userId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.DeleteUserByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.deleteUserById({ userId: 1 }).asApiResult();
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
| <code>userId</code> | <code>number</code> | A user id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.deleteUserById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.DeleteUserByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.deleteUserById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.DeleteUserByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupById(request: Scim.GetGroupByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.GetGroupByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.getGroupById({ groupId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetGroupByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.getGroupById({ groupId: 1 }).asApiResult();
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
| <code>groupId</code> | <code>number</code> | A group id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getGroupById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.GetGroupByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getGroupById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.GetGroupByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroups(request?: Scim.GetGroupsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.GetGroupsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.getGroups({ startIndex: 1, count: 10, filter: "displayName pr" });
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim
  .getGroups({ startIndex: 1, count: 10, filter: "displayName pr" })
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
| <code>startIndex?</code> | <code>number</code> | The starting index for pagination. |
| <code>count?</code> | <code>number</code> | The number of resources to retrieve. |
| <code>filter?</code> | <code>string</code> | Filter resources based on specific criteria. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.GetGroupsError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.GetGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMe(options?: RequestOptions): ApiPromise&lt;undefined, Scim.GetMeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When SCIM is enabled, this endpoint is accessible by anyone authentified in Grist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.getMe();
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetMeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.getMe().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getMe()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.GetMeError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getMe().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.GetMeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourceTypes(options?: RequestOptions): ApiPromise&lt;ScimV2ResourceTypesResponse, Scim.GetResourceTypesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scim.getResourceTypes();
  // TODO: Handle 'response' of type ScimV2ResourceTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetResourceTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.getResourceTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimV2ResourceTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getResourceTypes()`

- **OnSuccess**: <code>[ScimV2ResourceTypesResponse](src/models/unions/scim-v2-resource-types-response.ts)</code>
- **OnError**: throws <code>[Scim.GetResourceTypesError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getResourceTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimV2ResourceTypesResponse, Scim.GetResourceTypesError&gt;</code>, with `result.value` of type <code>[ScimV2ResourceTypesResponse](src/models/unions/scim-v2-resource-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRoleById(request: Scim.GetRoleByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.GetRoleByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.getRoleById({ roleId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetRoleByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.getRoleById({ roleId: 1 }).asApiResult();
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
| <code>roleId</code> | <code>number</code> | A role id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getRoleById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.GetRoleByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getRoleById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.GetRoleByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRoles(request?: Scim.GetRolesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.GetRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Roles are system-defined entities giving particular permissions to a given resource (document, workspace or organization).
This API returns by default all these roles associated to all the resources.
You may use the parameters to filter the results.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.getRoles({ startIndex: 1, count: 10, filter: "displayName pr" });
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim
  .getRoles({ startIndex: 1, count: 10, filter: "displayName pr" })
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
| <code>startIndex?</code> | <code>number</code> | The starting index for pagination. |
| <code>count?</code> | <code>number</code> | The number of resources to retrieve. |
| <code>filter?</code> | <code>string</code> | Filter resources based on specific criteria. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getRoles(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.GetRolesError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.GetRolesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSchemas(options?: RequestOptions): ApiPromise&lt;ScimV2SchemasResponse, Scim.GetSchemasError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scim.getSchemas();
  // TODO: Handle 'response' of type ScimV2SchemasResponse
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetSchemasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.getSchemas().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimV2SchemasResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getSchemas()`

- **OnSuccess**: <code>[ScimV2SchemasResponse](src/models/unions/scim-v2-schemas-response.ts)</code>
- **OnError**: throws <code>[Scim.GetSchemasError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getSchemas().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimV2SchemasResponse, Scim.GetSchemasError&gt;</code>, with `result.value` of type <code>[ScimV2SchemasResponse](src/models/unions/scim-v2-schemas-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getServiceProviderConfig(options?: RequestOptions): ApiPromise&lt;ScimV2ServiceProviderConfigResponse, Scim.GetServiceProviderConfigError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scim.getServiceProviderConfig();
  // TODO: Handle 'response' of type ScimV2ServiceProviderConfigResponse
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetServiceProviderConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.getServiceProviderConfig().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimV2ServiceProviderConfigResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getServiceProviderConfig()`

- **OnSuccess**: <code>[ScimV2ServiceProviderConfigResponse](src/models/unions/scim-v2-service-provider-config-response.ts)</code>
- **OnError**: throws <code>[Scim.GetServiceProviderConfigError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getServiceProviderConfig().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimV2ServiceProviderConfigResponse, Scim.GetServiceProviderConfigError&gt;</code>, with `result.value` of type <code>[ScimV2ServiceProviderConfigResponse](src/models/unions/scim-v2-service-provider-config-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserById(request: Scim.GetUserByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.GetUserByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.getUserById({ userId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetUserByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.getUserById({ userId: 1 }).asApiResult();
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
| <code>userId</code> | <code>number</code> | A user id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getUserById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.GetUserByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getUserById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.GetUserByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsers(request?: Scim.GetUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.GetUsersError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.getUsers({ startIndex: 1, count: 10, filter: "displayName pr" });
} catch (err) {
  // TODO: Handle 'err' of type Scim.GetUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim
  .getUsers({ startIndex: 1, count: 10, filter: "displayName pr" })
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
| <code>startIndex?</code> | <code>number</code> | The starting index for pagination. |
| <code>count?</code> | <code>number</code> | The number of resources to retrieve. |
| <code>filter?</code> | <code>string</code> | Filter resources based on specific criteria. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.getUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.GetUsersError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.getUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.GetUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchGroupById(request: Scim.PatchGroupByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.PatchGroupByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.patchGroupById({ groupId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.PatchGroupByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.patchGroupById({ groupId: 1 }).asApiResult();
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
| <code>groupId</code> | <code>number</code> | A group id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.patchGroupById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.PatchGroupByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.patchGroupById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.PatchGroupByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchRoleById(request: Scim.PatchRoleByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.PatchRoleByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only the memberships are authorized to be modified through this endpoint, other properties will be ignored.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.patchRoleById({ roleId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.PatchRoleByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.patchRoleById({ roleId: 1 }).asApiResult();
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
| <code>roleId</code> | <code>number</code> | A role id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.patchRoleById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.PatchRoleByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.patchRoleById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.PatchRoleByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchUserById(request: Scim.PatchUserByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.PatchUserByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.patchUserById({ userId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.PatchUserByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.patchUserById({ userId: 1 }).asApiResult();
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
| <code>userId</code> | <code>number</code> | A user id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.patchUserById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.PatchUserByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.patchUserById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.PatchUserByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchGroups(options?: RequestOptions): ApiPromise&lt;undefined, Scim.SearchGroupsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.searchGroups();
} catch (err) {
  // TODO: Handle 'err' of type Scim.SearchGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.searchGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.searchGroups()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.SearchGroupsError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.searchGroups().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.SearchGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchUsers(options?: RequestOptions): ApiPromise&lt;undefined, Scim.SearchUsersError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.searchUsers();
} catch (err) {
  // TODO: Handle 'err' of type Scim.SearchUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.searchUsers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.searchUsers()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.SearchUsersError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.searchUsers().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.SearchUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroupById(request: Scim.UpdateGroupByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.UpdateGroupByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ This operation overwrites all the group's information. In order to pass only some properties to update, please use [PATCH](#tag/scim/operation/patchGroupById) instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.updateGroupById({ groupId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.UpdateGroupByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.updateGroupById({ groupId: 1 }).asApiResult();
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
| <code>groupId</code> | <code>number</code> | A group id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.updateGroupById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.UpdateGroupByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.updateGroupById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.UpdateGroupByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRoleById(request: Scim.UpdateRoleByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.UpdateRoleByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ This operation overwrites all the memberships (the "members" property). In order to update part of the membership, please use [PATCH](#tag/scim/operation/patchRoleById) instead.
Only the memberships are authorized to be modified through this endpoint, other properties will be ignored.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.updateRoleById({ roleId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.UpdateRoleByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.updateRoleById({ roleId: 1 }).asApiResult();
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
| <code>roleId</code> | <code>number</code> | A role id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.updateRoleById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.UpdateRoleByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.updateRoleById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.UpdateRoleByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUserById(request: Scim.UpdateUserByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Scim.UpdateUserByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️  This operation overwrites all the user's information. In order to pass only some properties to update, please use [PATCH](#tag/scim/operation/patchUserById) instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scim.updateUserById({ userId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Scim.UpdateUserByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scim.updateUserById({ userId: 1 }).asApiResult();
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
| <code>userId</code> | <code>number</code> | A user id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scim.updateUserById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scim.UpdateUserByIdError](src/resources/scim.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scim.updateUserById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scim.UpdateUserByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/resources/templates.ts)

<details>
<summary><code>getTemplate(request: Templates.GetTemplateRequest, options?: RequestOptions): ApiPromise&lt;DocWithWorkspace, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific template.

**Note:** Requires a template organization to be configured on the server.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.getTemplate({ templateId: "some example string" });
  // TODO: Handle 'response' of type DocWithWorkspace
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates.getTemplate({ templateId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocWithWorkspace
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | ID of the template |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.getTemplate(request)`

- **OnSuccess**: <code>[DocWithWorkspace](src/models/doc-with-workspace.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.templates.getTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocWithWorkspace, ApiError&gt;</code>, with `result.value` of type <code>[DocWithWorkspace](src/models/doc-with-workspace.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTemplates(options?: RequestOptions): ApiPromise&lt;WorkspaceWithDocsAndDomain[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all available templates. Templates are organized by workspace within
a template organization configured on the server.

**Note:** Requires a template organization to be configured on the server.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.listTemplates();
  // TODO: Handle 'response' of type WorkspaceWithDocsAndDomain[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates.listTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceWithDocsAndDomain[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.listTemplates()`

- **OnSuccess**: <code>[WorkspaceWithDocsAndDomain](src/models/workspace-with-docs-and-domain.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.templates.listTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceWithDocsAndDomain[], ApiError&gt;</code>, with `result.value` of type <code>[WorkspaceWithDocsAndDomain](src/models/workspace-with-docs-and-domain.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Widgets

> Source: [Widgets](src/resources/widgets.ts)

<details>
<summary><code>listWidgets(options?: RequestOptions): ApiPromise&lt;WidgetsResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all widget definitions from the configured widget repository.
Custom widgets extend Grist's functionality with specialized views.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.widgets.listWidgets();
  // TODO: Handle 'response' of type WidgetsResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.widgets.listWidgets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WidgetsResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.widgets.listWidgets()`

- **OnSuccess**: <code>[WidgetsResponse](src/models/widgets-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.widgets.listWidgets().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WidgetsResponse[], ApiError&gt;</code>, with `result.value` of type <code>[WidgetsResponse](src/models/widgets-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Forms

> Source: [Forms](src/resources/forms.ts)

<details>
<summary><code>getFormData(request: Forms.GetFormDataRequest, options?: RequestOptions): ApiPromise&lt;DocsFormsResponse, Forms.GetFormDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the form configuration for a specific view section. Forms are
a special view type that allows external users to submit data.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.forms.getFormData({ docId: "some example string", viewSectionId: 1 });
  // TODO: Handle 'response' of type DocsFormsResponse
} catch (err) {
  // TODO: Handle 'err' of type Forms.GetFormDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forms
  .getFormData({ docId: "some example string", viewSectionId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsFormsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | A string id (UUID) |
| <code>viewSectionId</code> | <code>number</code> | ID of the view section (form) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forms.getFormData(request)`

- **OnSuccess**: <code>[DocsFormsResponse](src/models/docs-forms-response.ts)</code>
- **OnError**: throws <code>[Forms.GetFormDataError](src/resources/forms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forms.getFormData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsFormsResponse, Forms.GetFormDataError&gt;</code>, with `result.value` of type <code>[DocsFormsResponse](src/models/docs-forms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Profile

> Source: [Profile](src/resources/profile.ts)

<details>
<summary><code>createApiKey(request?: Profile.CreateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new API key or regenerate an existing one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profile.createApiKey();
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profile.createApiKey().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ProfileApikeyRequest](src/models/profile-apikey-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profile.createApiKey(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.profile.createApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiKey(options?: RequestOptions): ApiPromise&lt;ProfileApikeyResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the current user's API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profile.deleteApiKey();
  // TODO: Handle 'response' of type ProfileApikeyResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profile.deleteApiKey().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileApikeyResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profile.deleteApiKey()`

- **OnSuccess**: <code>[ProfileApikeyResponse](src/models/unions/profile-apikey-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.profile.deleteApiKey().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileApikeyResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProfileApikeyResponse](src/models/unions/profile-apikey-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiKey(options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current user's API key if one exists.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profile.getApiKey();
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profile.getApiKey().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profile.getApiKey()`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.profile.getApiKey().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProfile(options?: RequestOptions): ApiPromise&lt;User, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the profile information of the currently authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profile.getProfile();
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profile.getProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profile.getProfile()`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.profile.getProfile().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, ApiError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUserLocale(request?: Profile.UpdateUserLocaleRequest, options?: RequestOptions): ApiPromise&lt;ProfileUserLocaleResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the locale preference for the current user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profile.updateUserLocale();
  // TODO: Handle 'response' of type ProfileUserLocaleResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profile.updateUserLocale().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileUserLocaleResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ProfileUserLocaleRequest](src/models/profile-user-locale-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profile.updateUserLocale(request)`

- **OnSuccess**: <code>[ProfileUserLocaleResponse](src/models/unions/profile-user-locale-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.profile.updateUserLocale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileUserLocaleResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProfileUserLocaleResponse](src/models/unions/profile-user-locale-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUserName(request?: Profile.UpdateUserNameRequest, options?: RequestOptions): ApiPromise&lt;ProfileUserNameResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the display name for the current user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profile.updateUserName();
  // TODO: Handle 'response' of type ProfileUserNameResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profile.updateUserName().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileUserNameResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ProfileUserNameRequest](src/models/profile-user-name-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profile.updateUserName(request)`

- **OnSuccess**: <code>[ProfileUserNameResponse](src/models/unions/profile-user-name-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.profile.updateUserName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileUserNameResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProfileUserNameResponse](src/models/unions/profile-user-name-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Session

> Source: [Session](src/resources/session.ts)

<details>
<summary><code>getActiveSession(options?: RequestOptions): ApiPromise&lt;SessionAccessActiveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the active user and organization for the current session.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.session.getActiveSession();
  // TODO: Handle 'response' of type SessionAccessActiveResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.session.getActiveSession().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionAccessActiveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.session.getActiveSession()`

- **OnSuccess**: <code>[SessionAccessActiveResponse](src/models/session-access-active-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.session.getActiveSession().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionAccessActiveResponse, ApiError&gt;</code>, with `result.value` of type <code>[SessionAccessActiveResponse](src/models/session-access-active-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllSessions(options?: RequestOptions): ApiPromise&lt;SessionAccessAllResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all user profiles logged into the current session and all
organizations they can access.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.session.getAllSessions();
  // TODO: Handle 'response' of type SessionAccessAllResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.session.getAllSessions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionAccessAllResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.session.getAllSessions()`

- **OnSuccess**: <code>[SessionAccessAllResponse](src/models/session-access-all-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.session.getAllSessions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionAccessAllResponse, ApiError&gt;</code>, with `result.value` of type <code>[SessionAccessAllResponse](src/models/session-access-all-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setActiveUser(request?: Session.SetActiveUserRequest, options?: RequestOptions): ApiPromise&lt;SessionAccessActiveResponse1, Session.SetActiveUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Switch which user account is active for a given organization.
Useful when a user has multiple accounts logged in.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.session.setActiveUser();
  // TODO: Handle 'response' of type SessionAccessActiveResponse1
} catch (err) {
  // TODO: Handle 'err' of type Session.SetActiveUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.session.setActiveUser().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionAccessActiveResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SessionAccessActiveRequest](src/models/session-access-active-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.session.setActiveUser(request)`

- **OnSuccess**: <code>[SessionAccessActiveResponse1](src/models/session-access-active-response1.ts)</code>
- **OnError**: throws <code>[Session.SetActiveUserError](src/resources/session.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.session.setActiveUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionAccessActiveResponse1, Session.SetActiveUserError&gt;</code>, with `result.value` of type <code>[SessionAccessActiveResponse1](src/models/session-access-active-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GristApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

