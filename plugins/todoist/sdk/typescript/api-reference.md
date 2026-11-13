# Reference

> Source: [TodoistApiClient](src/client.ts)

## Authorization

> Source: [Authorization](src/resources/authorization.ts)

<details>
<summary><code>migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost(request: Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostRequest, options?: RequestOptions): ApiPromise&lt;MigratePersonalTokenResponse, Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tokens obtained via the old email/password authentication method can be
migrated to the new OAuth access token. Migrating your users' personal tokens
will allow users to see your app in their Todoist Settings page and give them
the ability to manage their app authorization.

A successful response has `200 OK` status and `application/json` Content-Type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost({
    body: {
      clientId: "some example string",
      clientSecret: "some example string",
      personalToken: "some example string",
      scope: "some example string",
    },
  });
  // TODO: Handle 'response' of type MigratePersonalTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization
  .migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost({
    body: {
      clientId: "some example string",
      clientSecret: "some example string",
      personalToken: "some example string",
      scope: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MigratePersonalTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body30](src/models/body30.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost(request)`

- **OnSuccess**: <code>[MigratePersonalTokenResponse](src/models/migrate-personal-token-response.ts)</code>
- **OnError**: throws <code>[Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MigratePersonalTokenResponse, Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError&gt;</code>, with `result.value` of type <code>[MigratePersonalTokenResponse](src/models/migrate-personal-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeAccessTokenApiApiV1AccessTokensDelete(request: Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke the access tokens obtained via OAuth

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.authorization.revokeAccessTokenApiApiV1AccessTokensDelete({
    clientId: "0123456789abcdef",
    clientSecret: "abcdef0123456789abcdef0123456789",
    accessToken: "0123456789abcdef0123456789abcdef01234567",
  });
} catch (err) {
  // TODO: Handle 'err' of type Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization
  .revokeAccessTokenApiApiV1AccessTokensDelete({
    clientId: "0123456789abcdef",
    clientSecret: "abcdef0123456789abcdef0123456789",
    accessToken: "0123456789abcdef0123456789abcdef01234567",
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
| <code>clientId</code> | <code>string</code> | - |
| <code>clientSecret</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.revokeAccessTokenApiApiV1AccessTokensDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.revokeAccessTokenApiApiV1AccessTokensDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeTokenRfc7009CompliantApiV1RevokePost(request: Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke an access token according to RFC 7009 OAuth Token Revocation.

This endpoint accepts form-encoded data and follows the OAuth 2.0 Token Revocation specification.
The client must authenticate using HTTP Basic authentication with their client credentials.

Authentication is performed via the Authorization header with the format:
Authorization: Basic base64(client_id:client_secret)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.authorization.revokeTokenRfc7009CompliantApiV1RevokePost({
    body: { token: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization
  .revokeTokenRfc7009CompliantApiV1RevokePost({ body: { token: "some example string" } })
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
| <code>body</code> | <code>[Body25](src/models/body25.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.revokeTokenRfc7009CompliantApiV1RevokePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.revokeTokenRfc7009CompliantApiV1RevokePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Ids

> Source: [Ids](src/resources/ids.ts)

<details>
<summary><code>idMappingsApiV1IdMappingsObjNameObjIdsGet(request: Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetRequest, options?: RequestOptions): ApiPromise&lt;IdMapping[], Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates IDs from v1 to v2 or vice versa.

IDs are not unique across object types, hence the need to specify the object type.

When V1 ids are provided, the function will return the corresponding V2
ids, if they exist, and vice versa.

When no objects are found, an empty list is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ids.idMappingsApiV1IdMappingsObjNameObjIdsGet({
    objName: ObjName.Tasks,
    objIds: "6VfWjjjFg2xqX6Pa",
  });
  // TODO: Handle 'response' of type IdMapping[]
} catch (err) {
  // TODO: Handle 'err' of type Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ids
  .idMappingsApiV1IdMappingsObjNameObjIdsGet({ objName: ObjName.Tasks, objIds: "6VfWjjjFg2xqX6Pa" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdMapping[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objName</code> | <code>[ObjName](src/models/obj-name.ts)</code> | - |
| <code>objIds</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ids.idMappingsApiV1IdMappingsObjNameObjIdsGet(request)`

- **OnSuccess**: <code>[IdMapping](src/models/id-mapping.ts)[]</code>
- **OnError**: throws <code>[Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError](src/resources/ids.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ids.idMappingsApiV1IdMappingsObjNameObjIdsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdMapping[], Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError&gt;</code>, with `result.value` of type <code>[IdMapping](src/models/id-mapping.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspace

> Source: [Workspace](src/resources/workspace.ts)

<details>
<summary><code>acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut(request: Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceInvitationView, Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept a workspace invitation. Usable by authenticated users only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut({
    inviteCode: "26d332457f16dc67f18385194be148f62c2b4317",
  });
  // TODO: Handle 'response' of type WorkspaceInvitationView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut({
    inviteCode: "26d332457f16dc67f18385194be148f62c2b4317",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceInvitationView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inviteCode</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut(request)`

- **OnSuccess**: <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)</code>
- **OnError**: throws <code>[Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceInvitationView, Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError&gt;</code>, with `result.value` of type <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet(request: Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse, Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all active workspace projects, including those visible but not joined by the user.

_For guests, returns all joined workspace projects only._

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type ProjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet(request)`

- **OnSuccess**: <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: throws <code>[Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse, Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError&gt;</code>, with `result.value` of type <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allInvitationsApiV1WorkspacesInvitationsAllGet(request: Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceInvitationView[], Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list containing details of all pending invitation to a workspace.

This list is not paginated. All workspace members can access this list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.allInvitationsApiV1WorkspacesInvitationsAllGet({
    workspaceId: 123456,
  });
  // TODO: Handle 'response' of type WorkspaceInvitationView[]
} catch (err) {
  // TODO: Handle 'err' of type Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .allInvitationsApiV1WorkspacesInvitationsAllGet({ workspaceId: 123456 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceInvitationView[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.allInvitationsApiV1WorkspacesInvitationsAllGet(request)`

- **OnSuccess**: <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)[]</code>
- **OnError**: throws <code>[Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.allInvitationsApiV1WorkspacesInvitationsAllGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceInvitationView[], Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError&gt;</code>, with `result.value` of type <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet(request: Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse, Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return archived projects in a workspace.

Workspace guests cannot list archived projects and receive a `FORBIDDEN`
error. Results are paginated by `cursor` and `limit`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type ProjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet(request)`

- **OnSuccess**: <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: throws <code>[Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse, Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError&gt;</code>, with `result.value` of type <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createWorkspaceApiV1WorkspacesPost(request: Workspace.CreateWorkspaceApiV1WorkspacesPostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceSyncView, Workspace.CreateWorkspaceApiV1WorkspacesPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new workspace and returns it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.createWorkspaceApiV1WorkspacesPost({ body: {} });
  // TODO: Handle 'response' of type WorkspaceSyncView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.CreateWorkspaceApiV1WorkspacesPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace.createWorkspaceApiV1WorkspacesPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body38](src/models/body38.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.createWorkspaceApiV1WorkspacesPost(request)`

- **OnSuccess**: <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: throws <code>[Workspace.CreateWorkspaceApiV1WorkspacesPostError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.createWorkspaceApiV1WorkspacesPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSyncView, Workspace.CreateWorkspaceApiV1WorkspacesPostError&gt;</code>, with `result.value` of type <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInvitationApiV1WorkspacesInvitationsDeletePost(request: Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceInvitationView, Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workspace invitation. Only admins can delete invitations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.deleteInvitationApiV1WorkspacesInvitationsDeletePost({
    body: { workspaceId: 1, userEmail: "some example string" },
  });
  // TODO: Handle 'response' of type WorkspaceInvitationView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .deleteInvitationApiV1WorkspacesInvitationsDeletePost({
    body: { workspaceId: 1, userEmail: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceInvitationView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body18](src/models/body18.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.deleteInvitationApiV1WorkspacesInvitationsDeletePost(request)`

- **OnSuccess**: <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)</code>
- **OnError**: throws <code>[Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.deleteInvitationApiV1WorkspacesInvitationsDeletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceInvitationView, Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError&gt;</code>, with `result.value` of type <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete(request: Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workspace for all of its members.

Only workspace admins may delete it; other members get `403`. Answers
`204` on success, and also when the workspace does not exist or was
already deleted, so retrying is safe. Requires the `data:read_write` scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.workspace.deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete({ workspaceId: 123456 });
} catch (err) {
  // TODO: Handle 'err' of type Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete({ workspaceId: 123456 })
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
| <code>workspaceId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspaceApiV1WorkspacesWorkspaceIdGet(request: Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceSyncView, Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a workspace by ID.

The caller must be a member of the workspace. A workspace whose trial is
still being set up is returned too. Accepts tokens with the
`workspaces:read` scope (implied by `data:read`) from any Doist product.

Errors: `403` when the caller is not a member, `404` when the workspace
does not exist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.getWorkspaceApiV1WorkspacesWorkspaceIdGet({ workspaceId: 123456 });
  // TODO: Handle 'response' of type WorkspaceSyncView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .getWorkspaceApiV1WorkspacesWorkspaceIdGet({ workspaceId: 123456 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.getWorkspaceApiV1WorkspacesWorkspaceIdGet(request)`

- **OnSuccess**: <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: throws <code>[Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.getWorkspaceApiV1WorkspacesWorkspaceIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSyncView, Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError&gt;</code>, with `result.value` of type <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspacesApiV1WorkspacesGet(options?: RequestOptions): ApiPromise&lt;WorkspaceSyncView[], Workspace.GetWorkspacesApiV1WorkspacesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all workspaces where the user is a member.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.getWorkspacesApiV1WorkspacesGet();
  // TODO: Handle 'response' of type WorkspaceSyncView[]
} catch (err) {
  // TODO: Handle 'err' of type Workspace.GetWorkspacesApiV1WorkspacesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace.getWorkspacesApiV1WorkspacesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSyncView[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.getWorkspacesApiV1WorkspacesGet()`

- **OnSuccess**: <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)[]</code>
- **OnError**: throws <code>[Workspace.GetWorkspacesApiV1WorkspacesGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.getWorkspacesApiV1WorkspacesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSyncView[], Workspace.GetWorkspacesApiV1WorkspacesGetError&gt;</code>, with `result.value` of type <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspacesUsersApiV1WorkspacesUsersGet(request?: Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetRequest, options?: RequestOptions): ApiPromise&lt;UsersResponse, Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all workspace_users for a given workspace if workspace_id is
provided. Otherwise, returns all workspace_users for all workspaces that
the requesting user is part of.

_Not accessible by guests._

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.getWorkspacesUsersApiV1WorkspacesUsersGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    sort: Sort.Name,
  });
  // TODO: Handle 'response' of type UsersResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .getWorkspacesUsersApiV1WorkspacesUsersGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    sort: Sort.Name,
  })
  .asApiResult();
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
| <code>workspaceId?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | -<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.getWorkspacesUsersApiV1WorkspacesUsersGet(request)`

- **OnSuccess**: <code>[UsersResponse](src/models/users-response.ts)</code>
- **OnError**: throws <code>[Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.getWorkspacesUsersApiV1WorkspacesUsersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersResponse, Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError&gt;</code>, with `result.value` of type <code>[UsersResponse](src/models/users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>invitationsApiV1WorkspacesInvitationsGet(request: Workspace.InvitationsApiV1WorkspacesInvitationsGetRequest, options?: RequestOptions): ApiPromise&lt;string[], Workspace.InvitationsApiV1WorkspacesInvitationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of user emails who have a pending invitation to a workspace.

The list is not paginated. All workspace members can access this list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.invitationsApiV1WorkspacesInvitationsGet({ workspaceId: 123456 });
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type Workspace.InvitationsApiV1WorkspacesInvitationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .invitationsApiV1WorkspacesInvitationsGet({ workspaceId: 123456 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.invitationsApiV1WorkspacesInvitationsGet(request)`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[Workspace.InvitationsApiV1WorkspacesInvitationsGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.invitationsApiV1WorkspacesInvitationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], Workspace.InvitationsApiV1WorkspacesInvitationsGetError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost(request: Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequest, options?: RequestOptions): ApiPromise&lt;InviteWorkspaceUsersResponse, Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invites users to a workspace by email.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost({
    workspaceId: 123456,
    body: {},
  });
  // TODO: Handle 'response' of type InviteWorkspaceUsersResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost({ workspaceId: 123456, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InviteWorkspaceUsersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |
| <code>body</code> | <code>[Body5](src/models/body5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost(request)`

- **OnSuccess**: <code>[InviteWorkspaceUsersResponse](src/models/invite-workspace-users-response.ts)</code>
- **OnError**: throws <code>[Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InviteWorkspaceUsersResponse, Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError&gt;</code>, with `result.value` of type <code>[InviteWorkspaceUsersResponse](src/models/invite-workspace-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>joinApiV1WorkspacesJoinPost(request: Workspace.JoinApiV1WorkspacesJoinPostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceUserView, Workspace.JoinApiV1WorkspacesJoinPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Join a workspace via link or via workspace ID, if the user can auto-join
the workspace by domain.

## Joining by Domain
This is possible if:
- The user is verified
- The user has a user e-mail belonging to a domain that is set
  as a domain name for a workspace
- That workspace has the auto-join by domain feature enabled

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.joinApiV1WorkspacesJoinPost({ body: {} });
  // TODO: Handle 'response' of type WorkspaceUserView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.JoinApiV1WorkspacesJoinPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace.joinApiV1WorkspacesJoinPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceUserView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body40](src/models/body40.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.joinApiV1WorkspacesJoinPost(request)`

- **OnSuccess**: <code>[WorkspaceUserView](src/models/workspace-user-view.ts)</code>
- **OnError**: throws <code>[Workspace.JoinApiV1WorkspacesJoinPostError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.joinApiV1WorkspacesJoinPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceUserView, Workspace.JoinApiV1WorkspacesJoinPostError&gt;</code>, with `result.value` of type <code>[WorkspaceUserView](src/models/workspace-user-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>planDetailsApiV1WorkspacesPlanDetailsGet(request: Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetRequest, options?: RequestOptions): ApiPromise&lt;PlanDetailsResponse, Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists details of the workspace's current plan and usage

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.planDetailsApiV1WorkspacesPlanDetailsGet({ workspaceId: 123456 });
  // TODO: Handle 'response' of type PlanDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .planDetailsApiV1WorkspacesPlanDetailsGet({ workspaceId: 123456 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlanDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.planDetailsApiV1WorkspacesPlanDetailsGet(request)`

- **OnSuccess**: <code>[PlanDetailsResponse](src/models/plan-details-response.ts)</code>
- **OnError**: throws <code>[Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.planDetailsApiV1WorkspacesPlanDetailsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlanDetailsResponse, Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError&gt;</code>, with `result.value` of type <code>[PlanDetailsResponse](src/models/plan-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut(request: Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceInvitationView, Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reject a workspace invitation. Usable by authenticated users only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut({
    inviteCode: "26d332457f16dc67f18385194be148f62c2b4317",
  });
  // TODO: Handle 'response' of type WorkspaceInvitationView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut({
    inviteCode: "26d332457f16dc67f18385194be148f62c2b4317",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceInvitationView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inviteCode</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut(request)`

- **OnSuccess**: <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)</code>
- **OnError**: throws <code>[Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceInvitationView, Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError&gt;</code>, with `result.value` of type <code>[WorkspaceInvitationView](src/models/workspace-invitation-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete(request: Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;RemoveWorkspaceUserResponse, Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a user from a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete({
    workspaceId: 123456,
    userId: 123456,
  });
  // TODO: Handle 'response' of type RemoveWorkspaceUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete({ workspaceId: 123456, userId: 123456 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemoveWorkspaceUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |
| <code>userId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete(request)`

- **OnSuccess**: <code>[RemoveWorkspaceUserResponse](src/models/remove-workspace-user-response.ts)</code>
- **OnError**: throws <code>[Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemoveWorkspaceUserResponse, Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError&gt;</code>, with `result.value` of type <code>[RemoveWorkspaceUserResponse](src/models/remove-workspace-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLogoApiV1WorkspacesLogoPost(request: Workspace.UpdateLogoApiV1WorkspacesLogoPostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceSyncView | null, Workspace.UpdateLogoApiV1WorkspacesLogoPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an image to be used as the workspace logo. Similar to a user’s
avatar. If `delete` is set to true, it removes the logo completely and does
not return any `logo_*` attribute.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.updateLogoApiV1WorkspacesLogoPost({
    workspaceId: 123456,
    file: new Uint8Array(),
    delete: false,
  });
  // TODO: Handle 'response' of type WorkspaceSyncView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.UpdateLogoApiV1WorkspacesLogoPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .updateLogoApiV1WorkspacesLogoPost({ workspaceId: 123456, file: new Uint8Array(), delete: false })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | ID of the workspace. |
| <code>file</code> | <code>FileInput</code> | - |
| <code>delete?</code> | <code>boolean</code> | Remove the current logo instead of uploading one.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.updateLogoApiV1WorkspacesLogoPost(request)`

- **OnSuccess**: <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: throws <code>[Workspace.UpdateLogoApiV1WorkspacesLogoPostError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.updateLogoApiV1WorkspacesLogoPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSyncView, Workspace.UpdateLogoApiV1WorkspacesLogoPostError&gt;</code>, with `result.value` of type <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWorkspaceApiV1WorkspacesWorkspaceIdPost(request: Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceSyncView, Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing workspace and returns it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.updateWorkspaceApiV1WorkspacesWorkspaceIdPost({
    workspaceId: 123456,
    body: {},
  });
  // TODO: Handle 'response' of type WorkspaceSyncView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .updateWorkspaceApiV1WorkspacesWorkspaceIdPost({ workspaceId: 123456, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |
| <code>body</code> | <code>[Body34](src/models/body34.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.updateWorkspaceApiV1WorkspacesWorkspaceIdPost(request)`

- **OnSuccess**: <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: throws <code>[Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.updateWorkspaceApiV1WorkspacesWorkspaceIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSyncView, Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError&gt;</code>, with `result.value` of type <code>[WorkspaceSyncView](src/models/workspace-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost(request: Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceUserView, Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a workspace user's role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspace.updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost({
    workspaceId: 123456,
    userId: 123456,
    body: { role: WorkspaceRole.Admin },
  });
  // TODO: Handle 'response' of type WorkspaceUserView
} catch (err) {
  // TODO: Handle 'err' of type Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspace
  .updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost({
    workspaceId: 123456,
    userId: 123456,
    body: { role: WorkspaceRole.Admin },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceUserView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |
| <code>userId</code> | <code>number</code> | - |
| <code>body</code> | <code>[Body17](src/models/body17.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspace.updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost(request)`

- **OnSuccess**: <code>[WorkspaceUserView](src/models/workspace-user-view.ts)</code>
- **OnError**: throws <code>[Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError](src/resources/workspace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspace.updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceUserView, Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError&gt;</code>, with `result.value` of type <code>[WorkspaceUserView](src/models/workspace-user-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>archiveProjectApiV1ProjectsProjectIdArchivePost(request: Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostRequest, options?: RequestOptions): ApiPromise&lt;ProjectObject, Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a project as archived. For personal projects, this will archive it just for
the initiating user (leaving it visible to any other collaborators). For workspace
projects, this will archive it for all workspace users, removing it from view.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.archiveProjectApiV1ProjectsProjectIdArchivePost({
    projectId: "6XGgm6PHrGgMpCFX",
  });
  // TODO: Handle 'response' of type ProjectObject
} catch (err) {
  // TODO: Handle 'err' of type Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .archiveProjectApiV1ProjectsProjectIdArchivePost({ projectId: "6XGgm6PHrGgMpCFX" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.archiveProjectApiV1ProjectsProjectIdArchivePost(request)`

- **OnSuccess**: <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: throws <code>[Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.archiveProjectApiV1ProjectsProjectIdArchivePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectObject, Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError&gt;</code>, with `result.value` of type <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectApiV1ProjectsPost(request: Projects.CreateProjectApiV1ProjectsPostRequest, options?: RequestOptions): ApiPromise&lt;ProjectObject, Projects.CreateProjectApiV1ProjectsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project and returns it

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProjectApiV1ProjectsPost({
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type ProjectObject
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectApiV1ProjectsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProjectApiV1ProjectsPost({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body9](src/models/body9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProjectApiV1ProjectsPost(request)`

- **OnSuccess**: <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectApiV1ProjectsPostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProjectApiV1ProjectsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectObject, Projects.CreateProjectApiV1ProjectsPostError&gt;</code>, with `result.value` of type <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectFromCsvApiV1ProjectsImportPost(request: Projects.CreateProjectFromCsvApiV1ProjectsImportPostRequest, options?: RequestOptions): ApiPromise&lt;ProjectImportCreateResponseWithObjects, Projects.CreateProjectFromCsvApiV1ProjectsImportPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a project from CSV and return its ID and imported objects.

Send a multipart file upload or raw CSV request body. For raw CSV, pass name
and optional workspace_id as query parameters. Invalid UTF-8 bytes are replaced.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProjectFromCsvApiV1ProjectsImportPost({
    nameQuery: "My Project",
    workspaceIdQuery: "123456",
    name: "My Project",
    file: new Uint8Array(),
    workspaceId: "123456",
  });
  // TODO: Handle 'response' of type ProjectImportCreateResponseWithObjects
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectFromCsvApiV1ProjectsImportPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProjectFromCsvApiV1ProjectsImportPost({
    nameQuery: "My Project",
    workspaceIdQuery: "123456",
    name: "My Project",
    file: new Uint8Array(),
    workspaceId: "123456",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectImportCreateResponseWithObjects
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nameQuery?</code> | <code>string</code> | Send in the query string for raw uploads, or the form for multipart uploads. Required for raw uploads. |
| <code>workspaceIdQuery?</code> | <code>string</code> | Send in the query string for raw uploads, or the form for multipart uploads. |
| <code>name</code> | <code>string</code> | Name of the new project. |
| <code>file</code> | <code>FileInput</code> | - |
| <code>workspaceId?</code> | <code>string</code> | Workspace ID for the new project. Omit to create a personal project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProjectFromCsvApiV1ProjectsImportPost(request)`

- **OnSuccess**: <code>[ProjectImportCreateResponseWithObjects](src/models/project-import-create-response-with-objects.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectFromCsvApiV1ProjectsImportPostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProjectFromCsvApiV1ProjectsImportPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectImportCreateResponseWithObjects, Projects.CreateProjectFromCsvApiV1ProjectsImportPostError&gt;</code>, with `result.value` of type <code>[ProjectImportCreateResponseWithObjects](src/models/project-import-create-response-with-objects.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectFromTemplateApiV1ProjectsFromTemplatePost(request: Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostRequest, options?: RequestOptions): ApiPromise&lt;ProjectImportCreateResponse, Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a project from a template, returning only its ID and success status.

Requires `data:read_write`. Setup templates are not supported. Workspace
templates can only be imported into their associated workspace. Calendar
defaults are applied to the project according to the destination plan.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProjectFromTemplateApiV1ProjectsFromTemplatePost({
    body: { templateId: "some example string" },
  });
  // TODO: Handle 'response' of type ProjectImportCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProjectFromTemplateApiV1ProjectsFromTemplatePost({ body: { templateId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectImportCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body24](src/models/body24.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProjectFromTemplateApiV1ProjectsFromTemplatePost(request)`

- **OnSuccess**: <code>[ProjectImportCreateResponse](src/models/project-import-create-response.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProjectFromTemplateApiV1ProjectsFromTemplatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectImportCreateResponse, Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError&gt;</code>, with `result.value` of type <code>[ProjectImportCreateResponse](src/models/project-import-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProjectApiV1ProjectsProjectIdDelete(request: Projects.DeleteProjectApiV1ProjectsProjectIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a project and all of its sections and tasks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.deleteProjectApiV1ProjectsProjectIdDelete({ projectId: "6XGgm6PHrGgMpCFX" });
} catch (err) {
  // TODO: Handle 'err' of type Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .deleteProjectApiV1ProjectsProjectIdDelete({ projectId: "6XGgm6PHrGgMpCFX" })
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
| <code>projectId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.deleteProjectApiV1ProjectsProjectIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.deleteProjectApiV1ProjectsProjectIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getArchivedApiV1ProjectsArchivedGet(request?: Projects.GetArchivedApiV1ProjectsArchivedGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList1, Projects.GetArchivedApiV1ProjectsArchivedGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the user's archived projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getArchivedApiV1ProjectsArchivedGet({
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList1
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetArchivedApiV1ProjectsArchivedGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getArchivedApiV1ProjectsArchivedGet({ cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55", limit: 50 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getArchivedApiV1ProjectsArchivedGet(request)`

- **OnSuccess**: <code>[PaginatedList1](src/models/paginated-list1.ts)</code>
- **OnError**: throws <code>[Projects.GetArchivedApiV1ProjectsArchivedGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getArchivedApiV1ProjectsArchivedGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList1, Projects.GetArchivedApiV1ProjectsArchivedGetError&gt;</code>, with `result.value` of type <code>[PaginatedList1](src/models/paginated-list1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectApiV1ProjectsProjectIdGet(request: Projects.GetProjectApiV1ProjectsProjectIdGetRequest, options?: RequestOptions): ApiPromise&lt;ProjectObject, Projects.GetProjectApiV1ProjectsProjectIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a project object related to the given ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjectApiV1ProjectsProjectIdGet({
    projectId: "6XGgm6PHrGgMpCFX",
  });
  // TODO: Handle 'response' of type ProjectObject
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectApiV1ProjectsProjectIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjectApiV1ProjectsProjectIdGet({ projectId: "6XGgm6PHrGgMpCFX" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjectApiV1ProjectsProjectIdGet(request)`

- **OnSuccess**: <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectApiV1ProjectsProjectIdGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjectApiV1ProjectsProjectIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectObject, Projects.GetProjectApiV1ProjectsProjectIdGetError&gt;</code>, with `result.value` of type <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet(request: Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList2, Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all collaborators for a given project.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet({
    projectId: "6XGgm6PHrGgMpCFX",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  });
  // TODO: Handle 'response' of type PaginatedList2
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet({
    projectId: "6XGgm6PHrGgMpCFX",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>publicKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet(request)`

- **OnSuccess**: <code>[PaginatedList2](src/models/paginated-list2.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList2, Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError&gt;</code>, with `result.value` of type <code>[PaginatedList2](src/models/paginated-list2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectsApiV1ProjectsGet(request?: Projects.GetProjectsApiV1ProjectsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList1, Projects.GetProjectsApiV1ProjectsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all active user projects, optionally filtered by folder or workspace.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjectsApiV1ProjectsGet({
    folderId: 1234,
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList1
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsApiV1ProjectsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjectsApiV1ProjectsGet({
    folderId: 1234,
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>folderId?</code> | <code>number</code> | - |
| <code>workspaceId?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjectsApiV1ProjectsGet(request)`

- **OnSuccess**: <code>[PaginatedList1](src/models/paginated-list1.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectsApiV1ProjectsGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjectsApiV1ProjectsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList1, Projects.GetProjectsApiV1ProjectsGetError&gt;</code>, with `result.value` of type <code>[PaginatedList1](src/models/paginated-list1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importProjectCsvApiV1ProjectsProjectIdImportPost(request: Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostRequest, options?: RequestOptions): ApiPromise&lt;ProjectImportResponse, Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import CSV into an existing project and return the imported objects.

Send a multipart file upload or raw CSV request body. CSV is decoded as UTF-8,
replacing invalid bytes, and must include TYPE and CONTENT header columns.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.importProjectCsvApiV1ProjectsProjectIdImportPost({
    projectId: "6XGgm6PHrGgMpCFX",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type ProjectImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .importProjectCsvApiV1ProjectsProjectIdImportPost({ projectId: "6XGgm6PHrGgMpCFX", file: new Uint8Array() })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.importProjectCsvApiV1ProjectsProjectIdImportPost(request)`

- **OnSuccess**: <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: throws <code>[Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.importProjectCsvApiV1ProjectsProjectIdImportPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectImportResponse, Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError&gt;</code>, with `result.value` of type <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost(request: Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostRequest, options?: RequestOptions): ApiPromise&lt;ProjectImportResponse, Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import a project template, returning tasks, comments, reminders and applied defaults.

Requires `data:read_write` and permission to apply templates to the project.
The project must be active and unfrozen. Workspace templates can only be
imported into their associated workspace. Setup templates are rejected; use
`/templates/{template_id}/use`. The `projects` array is empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost({
    projectId: "6XGgm6PHrGgMpCFX",
    body: { templateId: "some example string" },
  });
  // TODO: Handle 'response' of type ProjectImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost({
    projectId: "6XGgm6PHrGgMpCFX",
    body: { templateId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body29](src/models/body29.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost(request)`

- **OnSuccess**: <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: throws <code>[Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectImportResponse, Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError&gt;</code>, with `result.value` of type <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>joinApiV1ProjectsProjectIdJoinPost(request: Projects.JoinApiV1ProjectsProjectIdJoinPostRequest, options?: RequestOptions): ApiPromise&lt;GetDataV2Response, Projects.JoinApiV1ProjectsProjectIdJoinPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

_Only used for workspaces_

This endpoint is used to join a workspace project by a workspace_user and
is only usable by the workspace user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.joinApiV1ProjectsProjectIdJoinPost({
    projectId: "6XGgm6PHrGgMpCFX",
  });
  // TODO: Handle 'response' of type GetDataV2Response
} catch (err) {
  // TODO: Handle 'err' of type Projects.JoinApiV1ProjectsProjectIdJoinPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .joinApiV1ProjectsProjectIdJoinPost({ projectId: "6XGgm6PHrGgMpCFX" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDataV2Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.joinApiV1ProjectsProjectIdJoinPost(request)`

- **OnSuccess**: <code>[GetDataV2Response](src/models/get-data-v2-response.ts)</code>
- **OnError**: throws <code>[Projects.JoinApiV1ProjectsProjectIdJoinPostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.joinApiV1ProjectsProjectIdJoinPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDataV2Response, Projects.JoinApiV1ProjectsProjectIdJoinPostError&gt;</code>, with `result.value` of type <code>[GetDataV2Response](src/models/get-data-v2-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>permissionsApiV1ProjectsPermissionsGet(options?: RequestOptions): ApiPromise&lt;RoleToActionMappingView, Projects.PermissionsApiV1ProjectsPermissionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the available roles and the associated actions they can
perform in a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.permissionsApiV1ProjectsPermissionsGet();
  // TODO: Handle 'response' of type RoleToActionMappingView
} catch (err) {
  // TODO: Handle 'err' of type Projects.PermissionsApiV1ProjectsPermissionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.permissionsApiV1ProjectsPermissionsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleToActionMappingView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.permissionsApiV1ProjectsPermissionsGet()`

- **OnSuccess**: <code>[RoleToActionMappingView](src/models/role-to-action-mapping-view.ts)</code>
- **OnError**: throws <code>[Projects.PermissionsApiV1ProjectsPermissionsGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.permissionsApiV1ProjectsPermissionsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleToActionMappingView, Projects.PermissionsApiV1ProjectsPermissionsGetError&gt;</code>, with `result.value` of type <code>[RoleToActionMappingView](src/models/role-to-action-mapping-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchProjectsApiV1ProjectsSearchGet(request: Projects.SearchProjectsApiV1ProjectsSearchGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList1, Projects.SearchProjectsApiV1ProjectsSearchGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search active user projects by name.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.searchProjectsApiV1ProjectsSearchGet({
    query: "Inbox",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList1
} catch (err) {
  // TODO: Handle 'err' of type Projects.SearchProjectsApiV1ProjectsSearchGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .searchProjectsApiV1ProjectsSearchGet({
    query: "Inbox",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.searchProjectsApiV1ProjectsSearchGet(request)`

- **OnSuccess**: <code>[PaginatedList1](src/models/paginated-list1.ts)</code>
- **OnError**: throws <code>[Projects.SearchProjectsApiV1ProjectsSearchGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.searchProjectsApiV1ProjectsSearchGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList1, Projects.SearchProjectsApiV1ProjectsSearchGetError&gt;</code>, with `result.value` of type <code>[PaginatedList1](src/models/paginated-list1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveProjectApiV1ProjectsProjectIdUnarchivePost(request: Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostRequest, options?: RequestOptions): ApiPromise&lt;ProjectObject, Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a previously archived project as active again. For personal projects, this
will make the project visible again for the initiating user. For workspace projects,
this will make the project visible again for all applicable workspace users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.unarchiveProjectApiV1ProjectsProjectIdUnarchivePost({
    projectId: "6XGgm6PHrGgMpCFX",
  });
  // TODO: Handle 'response' of type ProjectObject
} catch (err) {
  // TODO: Handle 'err' of type Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .unarchiveProjectApiV1ProjectsProjectIdUnarchivePost({ projectId: "6XGgm6PHrGgMpCFX" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.unarchiveProjectApiV1ProjectsProjectIdUnarchivePost(request)`

- **OnSuccess**: <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: throws <code>[Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.unarchiveProjectApiV1ProjectsProjectIdUnarchivePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectObject, Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError&gt;</code>, with `result.value` of type <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProjectApiV1ProjectsProjectIdPost(request: Projects.UpdateProjectApiV1ProjectsProjectIdPostRequest, options?: RequestOptions): ApiPromise&lt;ProjectObject, Projects.UpdateProjectApiV1ProjectsProjectIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a project and returns it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.updateProjectApiV1ProjectsProjectIdPost({
    projectId: "6XGgm6PHrGgMpCFX",
    body: {},
  });
  // TODO: Handle 'response' of type ProjectObject
} catch (err) {
  // TODO: Handle 'err' of type Projects.UpdateProjectApiV1ProjectsProjectIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .updateProjectApiV1ProjectsProjectIdPost({ projectId: "6XGgm6PHrGgMpCFX", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body36](src/models/body36.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.updateProjectApiV1ProjectsProjectIdPost(request)`

- **OnSuccess**: <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: throws <code>[Projects.UpdateProjectApiV1ProjectsProjectIdPostError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.updateProjectApiV1ProjectsProjectIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectObject, Projects.UpdateProjectApiV1ProjectsProjectIdPostError&gt;</code>, with `result.value` of type <code>[ProjectObject](src/models/unions/project-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Comments

> Source: [Comments](src/resources/comments.ts)

<details>
<summary><code>addCommentReactionApiV1CommentsCommentIdReactionsPost(request: Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostRequest, options?: RequestOptions): ApiPromise&lt;NoteSyncView, Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the authenticated user's reaction to a task or project comment and returns the updated comment.

Adding a reaction the user has already added leaves the reactions unchanged.
Returns an error if the comment's stored reactions would exceed 65,535 bytes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.addCommentReactionApiV1CommentsCommentIdReactionsPost({
    commentId: "6XGgmFQrx44wfGHr",
    body: { reaction: "some example string" },
  });
  // TODO: Handle 'response' of type NoteSyncView
} catch (err) {
  // TODO: Handle 'err' of type Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .addCommentReactionApiV1CommentsCommentIdReactionsPost({
    commentId: "6XGgmFQrx44wfGHr",
    body: { reaction: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body19](src/models/body19.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.addCommentReactionApiV1CommentsCommentIdReactionsPost(request)`

- **OnSuccess**: <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: throws <code>[Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.addCommentReactionApiV1CommentsCommentIdReactionsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteSyncView, Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError&gt;</code>, with `result.value` of type <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCommentApiV1CommentsPost(request: Comments.CreateCommentApiV1CommentsPostRequest, options?: RequestOptions): ApiPromise&lt;NoteSyncView, Comments.CreateCommentApiV1CommentsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new comment on a project or task and returns it.

Exactly one of `task_id` or `project_id` arguments is required. Providing
neither or both will return an error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.createCommentApiV1CommentsPost({
    body: { content: "some example string" },
  });
  // TODO: Handle 'response' of type NoteSyncView
} catch (err) {
  // TODO: Handle 'err' of type Comments.CreateCommentApiV1CommentsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .createCommentApiV1CommentsPost({ body: { content: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body10](src/models/body10.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.createCommentApiV1CommentsPost(request)`

- **OnSuccess**: <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: throws <code>[Comments.CreateCommentApiV1CommentsPostError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.createCommentApiV1CommentsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteSyncView, Comments.CreateCommentApiV1CommentsPostError&gt;</code>, with `result.value` of type <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCommentApiV1CommentsCommentIdDelete(request: Comments.DeleteCommentApiV1CommentsCommentIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Comments.DeleteCommentApiV1CommentsCommentIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a comment by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.comments.deleteCommentApiV1CommentsCommentIdDelete({ commentId: "6XGgmFQrx44wfGHr" });
} catch (err) {
  // TODO: Handle 'err' of type Comments.DeleteCommentApiV1CommentsCommentIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .deleteCommentApiV1CommentsCommentIdDelete({ commentId: "6XGgmFQrx44wfGHr" })
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
| <code>commentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.deleteCommentApiV1CommentsCommentIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Comments.DeleteCommentApiV1CommentsCommentIdDeleteError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.deleteCommentApiV1CommentsCommentIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Comments.DeleteCommentApiV1CommentsCommentIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCommentApiV1CommentsCommentIdGet(request: Comments.GetCommentApiV1CommentsCommentIdGetRequest, options?: RequestOptions): ApiPromise&lt;NoteSyncView, Comments.GetCommentApiV1CommentsCommentIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single comment by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.getCommentApiV1CommentsCommentIdGet({
    commentId: "6XGgmFVcrG5RRjVr",
  });
  // TODO: Handle 'response' of type NoteSyncView
} catch (err) {
  // TODO: Handle 'err' of type Comments.GetCommentApiV1CommentsCommentIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .getCommentApiV1CommentsCommentIdGet({ commentId: "6XGgmFVcrG5RRjVr" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.getCommentApiV1CommentsCommentIdGet(request)`

- **OnSuccess**: <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: throws <code>[Comments.GetCommentApiV1CommentsCommentIdGetError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.getCommentApiV1CommentsCommentIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteSyncView, Comments.GetCommentApiV1CommentsCommentIdGetError&gt;</code>, with `result.value` of type <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCommentsApiV1CommentsGet(request?: Comments.GetCommentsApiV1CommentsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList6, Comments.GetCommentsApiV1CommentsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all comments for a given task or project.

Exactly one of `task_id` or `project_id` arguments is required. Providing
neither or both will return an error.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.getCommentsApiV1CommentsGet({
    projectId: "6XGgm6PHrGgMpCFX",
    taskId: "6XGgmFVcrG5RRjVr",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  });
  // TODO: Handle 'response' of type PaginatedList6
} catch (err) {
  // TODO: Handle 'err' of type Comments.GetCommentsApiV1CommentsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .getCommentsApiV1CommentsGet({
    projectId: "6XGgm6PHrGgMpCFX",
    taskId: "6XGgmFVcrG5RRjVr",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList6
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId?</code> | <code>string</code> | - |
| <code>taskId?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>publicKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.getCommentsApiV1CommentsGet(request)`

- **OnSuccess**: <code>[PaginatedList6](src/models/paginated-list6.ts)</code>
- **OnError**: throws <code>[Comments.GetCommentsApiV1CommentsGetError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.getCommentsApiV1CommentsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList6, Comments.GetCommentsApiV1CommentsGetError&gt;</code>, with `result.value` of type <code>[PaginatedList6](src/models/paginated-list6.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost(request: Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the authenticated user's reaction from a task or project comment.

Removing a reaction the user has not added succeeds without changing the reactions.
Other users' reactions are not affected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.comments.removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost({
    commentId: "6XGgmFQrx44wfGHr",
    body: { reaction: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost({
    commentId: "6XGgmFQrx44wfGHr",
    body: { reaction: "some example string" },
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
| <code>commentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body14](src/models/body14.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCommentApiV1CommentsCommentIdPost(request: Comments.UpdateCommentApiV1CommentsCommentIdPostRequest, options?: RequestOptions): ApiPromise&lt;NoteSyncView | null, Comments.UpdateCommentApiV1CommentsCommentIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a comment by ID and returns its content

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.updateCommentApiV1CommentsCommentIdPost({
    commentId: "6XGgmFQrx44wfGHr",
    body: { content: "some example string" },
  });
  // TODO: Handle 'response' of type NoteSyncView
} catch (err) {
  // TODO: Handle 'err' of type Comments.UpdateCommentApiV1CommentsCommentIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .updateCommentApiV1CommentsCommentIdPost({
    commentId: "6XGgmFQrx44wfGHr",
    body: { content: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body21](src/models/body21.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.updateCommentApiV1CommentsCommentIdPost(request)`

- **OnSuccess**: <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: throws <code>[Comments.UpdateCommentApiV1CommentsCommentIdPostError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.updateCommentApiV1CommentsCommentIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteSyncView, Comments.UpdateCommentApiV1CommentsCommentIdPostError&gt;</code>, with `result.value` of type <code>[NoteSyncView](src/models/note-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/resources/templates.ts)

<details>
<summary><code>categoriesApiV1TemplatesCategoriesGet(request?: Templates.CategoriesApiV1TemplatesCategoriesGetRequest, options?: RequestOptions): ApiPromise&lt;CategoriesResponse, Templates.CategoriesApiV1TemplatesCategoriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List curated template categories. Authentication is not required.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.categoriesApiV1TemplatesCategoriesGet({
    templateType: TemplateType9.Project,
    locale: "en",
  });
  // TODO: Handle 'response' of type CategoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.CategoriesApiV1TemplatesCategoriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .categoriesApiV1TemplatesCategoriesGet({ templateType: TemplateType9.Project, locale: "en" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CategoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateType?</code> | <code>[TemplateType9](src/models/template-type9.ts)</code> | -<br>**Default**: "project" |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.categoriesApiV1TemplatesCategoriesGet(request)`

- **OnSuccess**: <code>[CategoriesResponse](src/models/categories-response.ts)</code>
- **OnError**: throws <code>[Templates.CategoriesApiV1TemplatesCategoriesGetError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.categoriesApiV1TemplatesCategoriesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CategoriesResponse, Templates.CategoriesApiV1TemplatesCategoriesGetError&gt;</code>, with `result.value` of type <code>[CategoriesResponse](src/models/categories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectFromFileApiV1TemplatesCreateProjectFromFilePost(request: Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostRequest, options?: RequestOptions): ApiPromise&lt;ProjectImportCreateResponseWithObjects, Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A template can be imported in an existing project, or in a newly created one.

Upload a file suitable to be passed as a template to be imported into a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.createProjectFromFileApiV1TemplatesCreateProjectFromFilePost({
    name: "some example string",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type ProjectImportCreateResponseWithObjects
} catch (err) {
  // TODO: Handle 'err' of type Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .createProjectFromFileApiV1TemplatesCreateProjectFromFilePost({
    name: "some example string",
    file: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectImportCreateResponseWithObjects
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>string</code> | - |
| <code>file</code> | <code>FileInput</code> | - |
| <code>workspaceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.createProjectFromFileApiV1TemplatesCreateProjectFromFilePost(request)`

- **OnSuccess**: <code>[ProjectImportCreateResponseWithObjects](src/models/project-import-create-response-with-objects.ts)</code>
- **OnError**: throws <code>[Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.createProjectFromFileApiV1TemplatesCreateProjectFromFilePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectImportCreateResponseWithObjects, Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError&gt;</code>, with `result.value` of type <code>[ProjectImportCreateResponseWithObjects](src/models/project-import-create-response-with-objects.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUserTemplateApiV1TemplatesUserPost(request: Templates.CreateUserTemplateApiV1TemplatesUserPostRequest, options?: RequestOptions): ApiPromise&lt;CreateUserTemplateResponse, Templates.CreateUserTemplateApiV1TemplatesUserPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a template from a project or a content graph. Requires `data:read_write`.

Task assignments are retained only when the resulting template belongs to a workspace.

`project_id` is always required. With `content` unset, its content is
exported as-is. With `content` set, project_id is only used to check
access, set the template's source project, and (with `for_workspace`)
derive the workspace to associate the template with - the content graph
is used for the template's content instead of an export of the project.

If workspace membership repeatedly changes during saving, retry the same
request after the 409 `WORKSPACE_TEMPLATE_MEMBERSHIP_CHANGED` response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.createUserTemplateApiV1TemplatesUserPost({
    body: {
      name: "some example string",
      description: "some example string",
      projectId: "some example string",
      color: ApiColorId.BerryRed,
    },
  });
  // TODO: Handle 'response' of type CreateUserTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.CreateUserTemplateApiV1TemplatesUserPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .createUserTemplateApiV1TemplatesUserPost({
    body: {
      name: "some example string",
      description: "some example string",
      projectId: "some example string",
      color: ApiColorId.BerryRed,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateUserTemplateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body37](src/models/body37.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.createUserTemplateApiV1TemplatesUserPost(request)`

- **OnSuccess**: <code>[CreateUserTemplateResponse](src/models/create-user-template-response.ts)</code>
- **OnError**: throws <code>[Templates.CreateUserTemplateApiV1TemplatesUserPostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.createUserTemplateApiV1TemplatesUserPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateUserTemplateResponse, Templates.CreateUserTemplateApiV1TemplatesUserPostError&gt;</code>, with `result.value` of type <code>[CreateUserTemplateResponse](src/models/create-user-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>discoverTemplateApiV1TemplatesTemplateIdGet(request: Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetRequest, options?: RequestOptions): ApiPromise&lt;PublicTemplate, Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get one template. A `UT_` ID requires `data:read`; invisible or missing IDs return 404.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.discoverTemplateApiV1TemplatesTemplateIdGet({
    templateId: "bug-tracking",
    locale: "en",
  });
  // TODO: Handle 'response' of type PublicTemplate
} catch (err) {
  // TODO: Handle 'err' of type Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .discoverTemplateApiV1TemplatesTemplateIdGet({ templateId: "bug-tracking", locale: "en" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicTemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.discoverTemplateApiV1TemplatesTemplateIdGet(request)`

- **OnSuccess**: <code>[PublicTemplate](src/models/public-template.ts)</code>
- **OnError**: throws <code>[Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.discoverTemplateApiV1TemplatesTemplateIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicTemplate, Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError&gt;</code>, with `result.value` of type <code>[PublicTemplate](src/models/public-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>discoverTemplatesApiV1TemplatesGet(request?: Templates.DiscoverTemplatesApiV1TemplatesGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList9, Templates.DiscoverTemplatesApiV1TemplatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discover templates or look up a bounded batch of IDs.

Curated templates are anonymous. Personal/workspace sources and any `UT_` ID
require `data:read`. Pages prioritize personal, workspace, then curated
templates, and rank each page by the query. Keep all filters when continuing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.discoverTemplatesApiV1TemplatesGet({
    templateType: TemplateType10.Project,
    templateSource: TemplateSource3.Todoist,
    locale: "en",
    limit: 50,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    query: "work",
    categoryId: "work",
    ids: "bug-tracking,UT_28Rc62VC22j439VcPJMw9xgWx2",
  });
  // TODO: Handle 'response' of type PaginatedList9
} catch (err) {
  // TODO: Handle 'err' of type Templates.DiscoverTemplatesApiV1TemplatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .discoverTemplatesApiV1TemplatesGet({
    templateType: TemplateType10.Project,
    templateSource: TemplateSource3.Todoist,
    locale: "en",
    limit: 50,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    query: "work",
    categoryId: "work",
    ids: "bug-tracking,UT_28Rc62VC22j439VcPJMw9xgWx2",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList9
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateType?</code> | <code>[TemplateType10](src/models/template-type10.ts)</code> | -<br>**Default**: "project" |
| <code>templateSource?</code> | <code>[TemplateSource3](src/models/template-source3.ts)</code> | -<br>**Default**: "todoist" |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | - |
| <code>query?</code> | <code>string</code> | - |
| <code>categoryId?</code> | <code>string</code> | - |
| <code>ids?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.discoverTemplatesApiV1TemplatesGet(request)`

- **OnSuccess**: <code>[PaginatedList9](src/models/paginated-list9.ts)</code>
- **OnError**: throws <code>[Templates.DiscoverTemplatesApiV1TemplatesGetError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.discoverTemplatesApiV1TemplatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList9, Templates.DiscoverTemplatesApiV1TemplatesGetError&gt;</code>, with `result.value` of type <code>[PaginatedList9](src/models/paginated-list9.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportAsFileApiV1TemplatesFileGet(request: Templates.ExportAsFileApiV1TemplatesFileGetRequest, options?: RequestOptions): ApiPromise&lt;string, Templates.ExportAsFileApiV1TemplatesFileGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a project as UTF-8 CSV. Requires `data:read` and project export permission.

On v1.6+, dated tasks also get `DATE_TYPE` and `DATE_TIME` columns, and
`TIMEZONE` holds the task's own timezone only for `fixed_datetime` dues.
Older versions write the exporting user's timezone on every row. With
`use_relative_dates=false`, non-recurring dues are ISO 8601 values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.exportAsFileApiV1TemplatesFileGet({
    projectId: "6XGgm6PHrGgMpCFX",
    useRelativeDates: true,
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Templates.ExportAsFileApiV1TemplatesFileGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .exportAsFileApiV1TemplatesFileGet({ projectId: "6XGgm6PHrGgMpCFX", useRelativeDates: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>useRelativeDates?</code> | <code>boolean</code> | -<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.exportAsFileApiV1TemplatesFileGet(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Templates.ExportAsFileApiV1TemplatesFileGetError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.exportAsFileApiV1TemplatesFileGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Templates.ExportAsFileApiV1TemplatesFileGetError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportAsUrlApiV1TemplatesUrlGet(request: Templates.ExportAsUrlApiV1TemplatesUrlGetRequest, options?: RequestOptions): ApiPromise&lt;FileUrlResponse, Templates.ExportAsUrlApiV1TemplatesUrlGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a project as a shareable template URL. Requires `data:read_write` and project export permission.

This stores a publicly accessible CSV artifact. No expiry is set on this URL.
Pass it to `https://todoist.com/api/v1/import/project_from_url?t_url=<url>` to share the template.

On v1.6+, dated tasks also get `DATE_TYPE` and `DATE_TIME` columns, and
`TIMEZONE` holds the task's own timezone only for `fixed_datetime` dues.
Older versions write the exporting user's timezone on every row. With
`use_relative_dates=false`, non-recurring dues are ISO 8601 values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.exportAsUrlApiV1TemplatesUrlGet({
    projectId: "6XGgm6PHrGgMpCFX",
    useRelativeDates: true,
  });
  // TODO: Handle 'response' of type FileUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.ExportAsUrlApiV1TemplatesUrlGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .exportAsUrlApiV1TemplatesUrlGet({ projectId: "6XGgm6PHrGgMpCFX", useRelativeDates: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileUrlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>useRelativeDates?</code> | <code>boolean</code> | -<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.exportAsUrlApiV1TemplatesUrlGet(request)`

- **OnSuccess**: <code>[FileUrlResponse](src/models/file-url-response.ts)</code>
- **OnError**: throws <code>[Templates.ExportAsUrlApiV1TemplatesUrlGetError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.exportAsUrlApiV1TemplatesUrlGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileUrlResponse, Templates.ExportAsUrlApiV1TemplatesUrlGetError&gt;</code>, with `result.value` of type <code>[FileUrlResponse](src/models/file-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateDescriptionApiV1TemplatesGenerateDescriptionPost(request: Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostRequest, options?: RequestOptions): ApiPromise&lt;GenerateDescriptionResponse, Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates an AI description from a project or saved template. Supply `project_id`
or `template_id`. Requires `data:read_write`, access to the source and the AI template descriptions feature.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.generateDescriptionApiV1TemplatesGenerateDescriptionPost({
    body: {},
  });
  // TODO: Handle 'response' of type GenerateDescriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .generateDescriptionApiV1TemplatesGenerateDescriptionPost({ body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateDescriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body6](src/models/body6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.generateDescriptionApiV1TemplatesGenerateDescriptionPost(request)`

- **OnSuccess**: <code>[GenerateDescriptionResponse](src/models/generate-description-response.ts)</code>
- **OnError**: throws <code>[Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.generateDescriptionApiV1TemplatesGenerateDescriptionPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateDescriptionResponse, Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError&gt;</code>, with `result.value` of type <code>[GenerateDescriptionResponse](src/models/generate-description-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost(request: Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostRequest, options?: RequestOptions): ApiPromise&lt;ProjectImportResponse, Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A template can be imported in an existing project, or in a newly created one.

Upload a file suitable to be passed as a template to be imported into a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.templates.importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost({
      projectId: "some example string",
      file: new Uint8Array(),
    });
  // TODO: Handle 'response' of type ProjectImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost({
    projectId: "some example string",
    file: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost(request)`

- **OnSuccess**: <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: throws <code>[Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectImportResponse, Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError&gt;</code>, with `result.value` of type <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost(request: Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostRequest, options?: RequestOptions): ApiPromise&lt;ProjectImportResponse, Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import a saved template into an existing project.

The target project must exist and must not be frozen. The response includes
the imported objects so clients can update local state immediately.
Tasks imported from personal templates are unassigned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.templates.importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost({
      body: { projectId: "some example string", templateId: "some example string" },
    });
  // TODO: Handle 'response' of type ProjectImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost({
    body: { projectId: "some example string", templateId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body26](src/models/body26.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost(request)`

- **OnSuccess**: <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: throws <code>[Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectImportResponse, Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError&gt;</code>, with `result.value` of type <code>[ProjectImportResponse](src/models/project-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importUserTemplateFromFileApiV1TemplatesUserImportPost(request: Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostRequest, options?: RequestOptions): ApiPromise&lt;CreateUserTemplateResponse, Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a personal template from CSV or a content graph. Requires `data:read_write`.

Task assignees and assignment actors are discarded from personal templates.

With `content` unset, the request's file (either a multipart `file` or a
previously-uploaded `uploaded_file_name`, or a raw CSV body) becomes the
template's content. Send content graphs in an `application/json` body.
With `content` set, an uploaded file is ignored and `uploaded_file_name` must be unset.
Import creates a personal template; update it to associate a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.importUserTemplateFromFileApiV1TemplatesUserImportPost({
    templateTypeQuery: TemplateType7.Project,
    nameQuery: "Weekly planning",
    descriptionQuery: "Plan and review the week.",
    colorQuery: ApiColorId.BerryRed,
    uploadedFileNameQuery: "1234567_abcdef_weekly-planning.csv",
    templateType: TemplateType7.Project,
    name: "Weekly planning",
    description: "Plan and review the week.",
    color: ApiColorId.BerryRed,
    uploadedFileName: "1234567_abcdef_weekly-planning.csv",
  });
  // TODO: Handle 'response' of type CreateUserTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .importUserTemplateFromFileApiV1TemplatesUserImportPost({
    templateTypeQuery: TemplateType7.Project,
    nameQuery: "Weekly planning",
    descriptionQuery: "Plan and review the week.",
    colorQuery: ApiColorId.BerryRed,
    uploadedFileNameQuery: "1234567_abcdef_weekly-planning.csv",
    templateType: TemplateType7.Project,
    name: "Weekly planning",
    description: "Plan and review the week.",
    color: ApiColorId.BerryRed,
    uploadedFileName: "1234567_abcdef_weekly-planning.csv",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateUserTemplateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateTypeQuery?</code> | <code>[TemplateType7](src/models/template-type7.ts)</code> | Send in the query string for raw uploads, or the form for multipart uploads. Required for raw uploads. |
| <code>nameQuery?</code> | <code>string</code> | Send in the query string for raw uploads, or the form for multipart uploads. Required for raw uploads. |
| <code>descriptionQuery?</code> | <code>string</code> | Send in the query string for raw uploads, or the form for multipart uploads. Required for raw uploads. |
| <code>colorQuery?</code> | <code>[ApiColorId2](src/models/unions/api-color-id2.ts)</code> | Send in the query string for raw uploads, or the form for multipart uploads. Required for raw uploads. |
| <code>uploadedFileNameQuery?</code> | <code>string</code> | Send in the query string for raw uploads, or the form for multipart uploads. |
| <code>templateType</code> | <code>[TemplateType7](src/models/template-type7.ts)</code> | Saved templates support project content only. |
| <code>name</code> | <code>string</code> | Saved template name, up to 255 characters. |
| <code>description</code> | <code>string</code> | Saved template description, up to 1,000 characters. |
| <code>color</code> | <code>[ApiColorId2](src/models/unions/api-color-id2.ts)</code> | Template color. |
| <code>uploadedFileName?</code> | <code>string</code> | Staged filename from /templates/user/preview, owned by the caller. Mutually exclusive with content. |
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.importUserTemplateFromFileApiV1TemplatesUserImportPost(request)`

- **OnSuccess**: <code>[CreateUserTemplateResponse](src/models/create-user-template-response.ts)</code>
- **OnError**: throws <code>[Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.importUserTemplateFromFileApiV1TemplatesUserImportPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateUserTemplateResponse, Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError&gt;</code>, with `result.value` of type <code>[CreateUserTemplateResponse](src/models/create-user-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewProjectApiV1TemplatesPreviewGet(request: Templates.PreviewProjectApiV1TemplatesPreviewGetRequest, options?: RequestOptions): ApiPromise&lt;ProjectTemplatePreviewResponse, Templates.PreviewProjectApiV1TemplatesPreviewGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Preview a project's template graph. Requires `data:read` and project export permission.

Set `resolve_dates=false` to preserve raw date strings for a template editor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.previewProjectApiV1TemplatesPreviewGet({
    projectId: "6XGgm6PHrGgMpCFX",
    resolveDates: true,
  });
  // TODO: Handle 'response' of type ProjectTemplatePreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.PreviewProjectApiV1TemplatesPreviewGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .previewProjectApiV1TemplatesPreviewGet({ projectId: "6XGgm6PHrGgMpCFX", resolveDates: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectTemplatePreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>resolveDates?</code> | <code>boolean</code> | -<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.previewProjectApiV1TemplatesPreviewGet(request)`

- **OnSuccess**: <code>[ProjectTemplatePreviewResponse](src/models/project-template-preview-response.ts)</code>
- **OnError**: throws <code>[Templates.PreviewProjectApiV1TemplatesPreviewGetError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.previewProjectApiV1TemplatesPreviewGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectTemplatePreviewResponse, Templates.PreviewProjectApiV1TemplatesPreviewGetError&gt;</code>, with `result.value` of type <code>[ProjectTemplatePreviewResponse](src/models/project-template-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewTemplateApiV1TemplatesTemplateIdPreviewGet(request: Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetRequest, options?: RequestOptions): ApiPromise&lt;TemplatePreviewResponse, Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Preview a project or setup template without importing it.

Curated templates support anonymous access and use a valid `data:read` actor when available.
Any `UT_` ID requires `data:read` and the saved template's existing visibility permissions.
Raw date strings are supported only for project templates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.previewTemplateApiV1TemplatesTemplateIdPreviewGet({
    templateId: "reading-list",
    locale: "en",
    forWorkspace: false,
    resolveDates: true,
  });
  // TODO: Handle 'response' of type TemplatePreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .previewTemplateApiV1TemplatesTemplateIdPreviewGet({
    templateId: "reading-list",
    locale: "en",
    forWorkspace: false,
    resolveDates: true,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplatePreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en" |
| <code>forWorkspace?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>resolveDates?</code> | <code>boolean</code> | -<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.previewTemplateApiV1TemplatesTemplateIdPreviewGet(request)`

- **OnSuccess**: <code>[TemplatePreviewResponse](src/models/unions/template-preview-response.ts)</code>
- **OnError**: throws <code>[Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.previewTemplateApiV1TemplatesTemplateIdPreviewGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplatePreviewResponse, Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError&gt;</code>, with `result.value` of type <code>[TemplatePreviewResponse](src/models/unions/template-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewUserTemplateApiV1TemplatesUserPreviewPost(request: Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostRequest, options?: RequestOptions): ApiPromise&lt;PreviewFromFileResponse, Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stages and previews a project CSV sent as multipart `file` or a raw CSV body.

Requires `data:read_write` because the upload is stored. The response includes
the filename for a subsequent import and the graph for editing; project names
come from the filename or the `X-File-Name` header for raw bodies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.previewUserTemplateApiV1TemplatesUserPreviewPost({
    resolveDatesQuery: false,
    file: new Uint8Array(),
    resolveDates: false,
  });
  // TODO: Handle 'response' of type PreviewFromFileResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .previewUserTemplateApiV1TemplatesUserPreviewPost({
    resolveDatesQuery: false,
    file: new Uint8Array(),
    resolveDates: false,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PreviewFromFileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resolveDatesQuery?</code> | <code>boolean</code> | Send in the query string for raw uploads, or the form for multipart uploads.<br>**Default**: true |
| <code>file</code> | <code>FileInput</code> | - |
| <code>resolveDates?</code> | <code>boolean</code> | Resolve due dates and deadlines. Use false for an editor to receive raw date strings for the supported content graph projection. On v1.6+, raw typed dues also include date_type, time and timezone to preserve their meaning when saved.<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.previewUserTemplateApiV1TemplatesUserPreviewPost(request)`

- **OnSuccess**: <code>[PreviewFromFileResponse](src/models/preview-from-file-response.ts)</code>
- **OnError**: throws <code>[Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.previewUserTemplateApiV1TemplatesUserPreviewPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PreviewFromFileResponse, Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError&gt;</code>, with `result.value` of type <code>[PreviewFromFileResponse](src/models/preview-from-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUserTemplateApiV1TemplatesUserTemplateIdPut(request: Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutRequest, options?: RequestOptions): ApiPromise&lt;UpdateUserTemplateResponse, Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a template's metadata and, optionally, its content.

Task assignments in replacement content are retained only for workspace templates.

Requires `data:read_write` and template edit permission. Omitted metadata stays
unchanged. Supply `content` or `project_id` to replace the graph. A shared workspace
template can be edited by its author or a workspace admin; restricted templates
remain author-only, and only the author may change sharing.

If workspace membership repeatedly changes during saving, retry the same
request after the 409 `WORKSPACE_TEMPLATE_MEMBERSHIP_CHANGED` response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.updateUserTemplateApiV1TemplatesUserTemplateIdPut({
    templateId: "UT_28Rc62VC22j439VcPJMw9xgWx2",
    body: {},
  });
  // TODO: Handle 'response' of type UpdateUserTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .updateUserTemplateApiV1TemplatesUserTemplateIdPut({
    templateId: "UT_28Rc62VC22j439VcPJMw9xgWx2",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateUserTemplateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body27](src/models/body27.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.updateUserTemplateApiV1TemplatesUserTemplateIdPut(request)`

- **OnSuccess**: <code>[UpdateUserTemplateResponse](src/models/update-user-template-response.ts)</code>
- **OnError**: throws <code>[Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.updateUserTemplateApiV1TemplatesUserTemplateIdPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateUserTemplateResponse, Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError&gt;</code>, with `result.value` of type <code>[UpdateUserTemplateResponse](src/models/update-user-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>useTemplateApiV1TemplatesTemplateIdUsePost(request: Templates.UseTemplateApiV1TemplatesTemplateIdUsePostRequest, options?: RequestOptions): ApiPromise&lt;CreateFromTemplateIdResponse, Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a project or a complete setup from a template. Requires `data:read_write`.

Saved workspace templates can only be used in their associated workspace.
Returns the created sync-style graph, with tasks in `items` and comments in `notes`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.useTemplateApiV1TemplatesTemplateIdUsePost({
    templateId: "reading-list",
    body: {},
  });
  // TODO: Handle 'response' of type CreateFromTemplateIdResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .useTemplateApiV1TemplatesTemplateIdUsePost({ templateId: "reading-list", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateFromTemplateIdResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body12](src/models/body12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.useTemplateApiV1TemplatesTemplateIdUsePost(request)`

- **OnSuccess**: <code>[CreateFromTemplateIdResponse](src/models/create-from-template-id-response.ts)</code>
- **OnError**: throws <code>[Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.useTemplateApiV1TemplatesTemplateIdUsePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateFromTemplateIdResponse, Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError&gt;</code>, with `result.value` of type <code>[CreateFromTemplateIdResponse](src/models/create-from-template-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sections

> Source: [Sections](src/resources/sections.ts)

<details>
<summary><code>archiveSectionApiV1SectionsSectionIdArchivePost(request: Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostRequest, options?: RequestOptions): ApiPromise&lt;SectionSyncView, Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a section as archived.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.archiveSectionApiV1SectionsSectionIdArchivePost({
    sectionId: "6fFPHV272WWh3gpW",
  });
  // TODO: Handle 'response' of type SectionSyncView
} catch (err) {
  // TODO: Handle 'err' of type Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .archiveSectionApiV1SectionsSectionIdArchivePost({ sectionId: "6fFPHV272WWh3gpW" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.archiveSectionApiV1SectionsSectionIdArchivePost(request)`

- **OnSuccess**: <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: throws <code>[Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.archiveSectionApiV1SectionsSectionIdArchivePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionSyncView, Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError&gt;</code>, with `result.value` of type <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSectionApiV1SectionsPost(request: Sections.CreateSectionApiV1SectionsPostRequest, options?: RequestOptions): ApiPromise&lt;SectionSyncView, Sections.CreateSectionApiV1SectionsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new section

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.createSectionApiV1SectionsPost({
    body: { name: "some example string", projectId: "some example string" },
  });
  // TODO: Handle 'response' of type SectionSyncView
} catch (err) {
  // TODO: Handle 'err' of type Sections.CreateSectionApiV1SectionsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .createSectionApiV1SectionsPost({ body: { name: "some example string", projectId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body7](src/models/body7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.createSectionApiV1SectionsPost(request)`

- **OnSuccess**: <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: throws <code>[Sections.CreateSectionApiV1SectionsPostError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.createSectionApiV1SectionsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionSyncView, Sections.CreateSectionApiV1SectionsPostError&gt;</code>, with `result.value` of type <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSectionApiV1SectionsSectionIdDelete(request: Sections.DeleteSectionApiV1SectionsSectionIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sections.DeleteSectionApiV1SectionsSectionIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the section and all of its tasks

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sections.deleteSectionApiV1SectionsSectionIdDelete({ sectionId: "6fFPHV272WWh3gpW" });
} catch (err) {
  // TODO: Handle 'err' of type Sections.DeleteSectionApiV1SectionsSectionIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .deleteSectionApiV1SectionsSectionIdDelete({ sectionId: "6fFPHV272WWh3gpW" })
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
| <code>sectionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.deleteSectionApiV1SectionsSectionIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sections.DeleteSectionApiV1SectionsSectionIdDeleteError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.deleteSectionApiV1SectionsSectionIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sections.DeleteSectionApiV1SectionsSectionIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSectionApiV1SectionsSectionIdGet(request: Sections.GetSectionApiV1SectionsSectionIdGetRequest, options?: RequestOptions): ApiPromise&lt;SectionSyncView, Sections.GetSectionApiV1SectionsSectionIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the section for the given section ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.getSectionApiV1SectionsSectionIdGet({
    sectionId: "6fFPHV272WWh3gpW",
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  });
  // TODO: Handle 'response' of type SectionSyncView
} catch (err) {
  // TODO: Handle 'err' of type Sections.GetSectionApiV1SectionsSectionIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .getSectionApiV1SectionsSectionIdGet({
    sectionId: "6fFPHV272WWh3gpW",
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionId</code> | <code>string</code> | - |
| <code>publicKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.getSectionApiV1SectionsSectionIdGet(request)`

- **OnSuccess**: <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: throws <code>[Sections.GetSectionApiV1SectionsSectionIdGetError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.getSectionApiV1SectionsSectionIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionSyncView, Sections.GetSectionApiV1SectionsSectionIdGetError&gt;</code>, with `result.value` of type <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSectionsApiV1SectionsGet(request?: Sections.GetSectionsApiV1SectionsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList10, Sections.GetSectionsApiV1SectionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all active sections for the user, optionally filtered by project or workspace.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.getSectionsApiV1SectionsGet({
    projectId: "6XGgm6PHrGgMpCFX",
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  });
  // TODO: Handle 'response' of type PaginatedList10
} catch (err) {
  // TODO: Handle 'err' of type Sections.GetSectionsApiV1SectionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .getSectionsApiV1SectionsGet({
    projectId: "6XGgm6PHrGgMpCFX",
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList10
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId?</code> | <code>string</code> | - |
| <code>workspaceId?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>publicKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.getSectionsApiV1SectionsGet(request)`

- **OnSuccess**: <code>[PaginatedList10](src/models/paginated-list10.ts)</code>
- **OnError**: throws <code>[Sections.GetSectionsApiV1SectionsGetError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.getSectionsApiV1SectionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList10, Sections.GetSectionsApiV1SectionsGetError&gt;</code>, with `result.value` of type <code>[PaginatedList10](src/models/paginated-list10.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSectionsApiV1SectionsSearchGet(request: Sections.SearchSectionsApiV1SectionsSearchGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList10, Sections.SearchSectionsApiV1SectionsSearchGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search active sections by name, optionally filtered by project or workspace.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.searchSectionsApiV1SectionsSearchGet({
    query: "To Do",
    projectId: "6XGgm6PHrGgMpCFX",
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList10
} catch (err) {
  // TODO: Handle 'err' of type Sections.SearchSectionsApiV1SectionsSearchGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .searchSectionsApiV1SectionsSearchGet({
    query: "To Do",
    projectId: "6XGgm6PHrGgMpCFX",
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList10
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | - |
| <code>projectId?</code> | <code>string</code> | - |
| <code>workspaceId?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.searchSectionsApiV1SectionsSearchGet(request)`

- **OnSuccess**: <code>[PaginatedList10](src/models/paginated-list10.ts)</code>
- **OnError**: throws <code>[Sections.SearchSectionsApiV1SectionsSearchGetError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.searchSectionsApiV1SectionsSearchGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList10, Sections.SearchSectionsApiV1SectionsSearchGetError&gt;</code>, with `result.value` of type <code>[PaginatedList10](src/models/paginated-list10.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveSectionApiV1SectionsSectionIdUnarchivePost(request: Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostRequest, options?: RequestOptions): ApiPromise&lt;SectionSyncView, Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a section as active again.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.unarchiveSectionApiV1SectionsSectionIdUnarchivePost({
    sectionId: "6fFPHV272WWh3gpW",
  });
  // TODO: Handle 'response' of type SectionSyncView
} catch (err) {
  // TODO: Handle 'err' of type Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .unarchiveSectionApiV1SectionsSectionIdUnarchivePost({ sectionId: "6fFPHV272WWh3gpW" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.unarchiveSectionApiV1SectionsSectionIdUnarchivePost(request)`

- **OnSuccess**: <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: throws <code>[Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.unarchiveSectionApiV1SectionsSectionIdUnarchivePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionSyncView, Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError&gt;</code>, with `result.value` of type <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSectionApiV1SectionsSectionIdPost(request: Sections.UpdateSectionApiV1SectionsSectionIdPostRequest, options?: RequestOptions): ApiPromise&lt;SectionSyncView, Sections.UpdateSectionApiV1SectionsSectionIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a section.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.updateSectionApiV1SectionsSectionIdPost({
    sectionId: "6fFPHV272WWh3gpW",
    body: {},
  });
  // TODO: Handle 'response' of type SectionSyncView
} catch (err) {
  // TODO: Handle 'err' of type Sections.UpdateSectionApiV1SectionsSectionIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .updateSectionApiV1SectionsSectionIdPost({ sectionId: "6fFPHV272WWh3gpW", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body8](src/models/body8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.updateSectionApiV1SectionsSectionIdPost(request)`

- **OnSuccess**: <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: throws <code>[Sections.UpdateSectionApiV1SectionsSectionIdPostError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.updateSectionApiV1SectionsSectionIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionSyncView, Sections.UpdateSectionApiV1SectionsSectionIdPostError&gt;</code>, with `result.value` of type <code>[SectionSyncView](src/models/section-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>closeTaskApiV1TasksTaskIdClosePost(request: Tasks.CloseTaskApiV1TasksTaskIdClosePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tasks.CloseTaskApiV1TasksTaskIdClosePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closes a task.

The command performs in the same way as our official clients:

Regular tasks are marked complete and moved to history, along with their
subtasks. Tasks with [recurring due
dates](https://todoist.com/help/articles/introduction-to-recurring-dates-YUYVJJAV)
will be scheduled to their next occurrence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tasks.closeTaskApiV1TasksTaskIdClosePost({ taskId: "6XGgmFVcrG5RRjVr" });
} catch (err) {
  // TODO: Handle 'err' of type Tasks.CloseTaskApiV1TasksTaskIdClosePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .closeTaskApiV1TasksTaskIdClosePost({ taskId: "6XGgmFVcrG5RRjVr" })
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
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.closeTaskApiV1TasksTaskIdClosePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tasks.CloseTaskApiV1TasksTaskIdClosePostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.closeTaskApiV1TasksTaskIdClosePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tasks.CloseTaskApiV1TasksTaskIdClosePostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTaskApiV1TasksPost(request: Tasks.CreateTaskApiV1TasksPostRequest, options?: RequestOptions): ApiPromise&lt;ItemSyncView, Tasks.CreateTaskApiV1TasksPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.createTaskApiV1TasksPost({ body: { content: "some example string" } });
  // TODO: Handle 'response' of type ItemSyncView
} catch (err) {
  // TODO: Handle 'err' of type Tasks.CreateTaskApiV1TasksPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .createTaskApiV1TasksPost({ body: { content: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body11](src/models/body11.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.createTaskApiV1TasksPost(request)`

- **OnSuccess**: <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: throws <code>[Tasks.CreateTaskApiV1TasksPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.createTaskApiV1TasksPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemSyncView, Tasks.CreateTaskApiV1TasksPostError&gt;</code>, with `result.value` of type <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTaskApiV1TasksTaskIdDelete(request: Tasks.DeleteTaskApiV1TasksTaskIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tasks.DeleteTaskApiV1TasksTaskIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a task and all of its subtasks.

Returns `NOT_FOUND` when the task does not exist and `FORBIDDEN` when the
authenticated user cannot modify the task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tasks.deleteTaskApiV1TasksTaskIdDelete({ taskId: "6XGgmFVcrG5RRjVr" });
} catch (err) {
  // TODO: Handle 'err' of type Tasks.DeleteTaskApiV1TasksTaskIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .deleteTaskApiV1TasksTaskIdDelete({ taskId: "6XGgmFVcrG5RRjVr" })
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
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.deleteTaskApiV1TasksTaskIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tasks.DeleteTaskApiV1TasksTaskIdDeleteError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.deleteTaskApiV1TasksTaskIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tasks.DeleteTaskApiV1TasksTaskIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskApiV1TasksTaskIdGet(request: Tasks.GetTaskApiV1TasksTaskIdGetRequest, options?: RequestOptions): ApiPromise&lt;ItemSyncView, Tasks.GetTaskApiV1TasksTaskIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single active (non-completed) task by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTaskApiV1TasksTaskIdGet({
    taskId: "6XGgmFVcrG5RRjVr",
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  });
  // TODO: Handle 'response' of type ItemSyncView
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTaskApiV1TasksTaskIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTaskApiV1TasksTaskIdGet({
    taskId: "6XGgmFVcrG5RRjVr",
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>publicKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTaskApiV1TasksTaskIdGet(request)`

- **OnSuccess**: <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: throws <code>[Tasks.GetTaskApiV1TasksTaskIdGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTaskApiV1TasksTaskIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemSyncView, Tasks.GetTaskApiV1TasksTaskIdGetError&gt;</code>, with `result.value` of type <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksApiV1TasksGet(request?: Tasks.GetTasksApiV1TasksGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList4, Tasks.GetTasksApiV1TasksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all active tasks for the user.

All provided parameters are used to narrow down the list of tasks.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasksApiV1TasksGet({
    projectId: "6XGgm6PHrGgMpCFX",
    sectionId: "6fFPHV272WWh3gpW",
    parentId: "6fFPHRxcmVqm4C84",
    label: "next_action",
    ids: "6XGgmFVcrG5RRjVr,6fFPHV272WWh3gpW",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList4
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTasksApiV1TasksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTasksApiV1TasksGet({
    projectId: "6XGgm6PHrGgMpCFX",
    sectionId: "6fFPHV272WWh3gpW",
    parentId: "6fFPHRxcmVqm4C84",
    label: "next_action",
    ids: "6XGgmFVcrG5RRjVr,6fFPHV272WWh3gpW",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId?</code> | <code>string</code> | - |
| <code>sectionId?</code> | <code>string</code> | - |
| <code>parentId?</code> | <code>string</code> | - |
| <code>label?</code> | <code>string</code> | - |
| <code>ids?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasksApiV1TasksGet(request)`

- **OnSuccess**: <code>[PaginatedList4](src/models/paginated-list4.ts)</code>
- **OnError**: throws <code>[Tasks.GetTasksApiV1TasksGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTasksApiV1TasksGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList4, Tasks.GetTasksApiV1TasksGetError&gt;</code>, with `result.value` of type <code>[PaginatedList4](src/models/paginated-list4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksByFilterApiV1TasksFilterGet(request: Tasks.GetTasksByFilterApiV1TasksFilterGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList4, Tasks.GetTasksByFilterApiV1TasksFilterGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all tasks matching the filter.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasksByFilterApiV1TasksFilterGet({
    query: "today | overdue",
    lang: "en",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList4
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTasksByFilterApiV1TasksFilterGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTasksByFilterApiV1TasksFilterGet({
    query: "today | overdue",
    lang: "en",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | - |
| <code>lang?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasksByFilterApiV1TasksFilterGet(request)`

- **OnSuccess**: <code>[PaginatedList4](src/models/paginated-list4.ts)</code>
- **OnError**: throws <code>[Tasks.GetTasksByFilterApiV1TasksFilterGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTasksByFilterApiV1TasksFilterGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList4, Tasks.GetTasksByFilterApiV1TasksFilterGetError&gt;</code>, with `result.value` of type <code>[PaginatedList4](src/models/paginated-list4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moveTaskApiV1TasksTaskIdMovePost(request: Tasks.MoveTaskApiV1TasksTaskIdMovePostRequest, options?: RequestOptions): ApiPromise&lt;ItemSyncView, Tasks.MoveTaskApiV1TasksTaskIdMovePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves task to another project, section or parent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.moveTaskApiV1TasksTaskIdMovePost({
    taskId: "6XGgm6PHrGgMpCFX",
    body: {},
  });
  // TODO: Handle 'response' of type ItemSyncView
} catch (err) {
  // TODO: Handle 'err' of type Tasks.MoveTaskApiV1TasksTaskIdMovePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .moveTaskApiV1TasksTaskIdMovePost({ taskId: "6XGgm6PHrGgMpCFX", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body](src/models/body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.moveTaskApiV1TasksTaskIdMovePost(request)`

- **OnSuccess**: <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: throws <code>[Tasks.MoveTaskApiV1TasksTaskIdMovePostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.moveTaskApiV1TasksTaskIdMovePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemSyncView, Tasks.MoveTaskApiV1TasksTaskIdMovePostError&gt;</code>, with `result.value` of type <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>quickAddApiV1TasksQuickPost(request: Tasks.QuickAddApiV1TasksQuickPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.QuickAddApiV1TasksQuickPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a new task using Quick Add with natural language processing.

Quick Add allows creating tasks with rich metadata using natural language text.
This endpoint uses the same parsing engine as Todoist's official clients,
supporting dates, projects, labels, priorities, assignees, and more in a single
text string.

## Basic Syntax Overview

- **Due dates**: Natural language like `today`, `tomorrow at 5pm`, `next Monday`
- **Projects**: `#ProjectName` (use `#My\\ Project` for names with spaces)
- **Sections**: `/SectionName` (requires a project to be specified)
- **Labels**: `@labelname` (multiple labels supported)
- **Priority**: `p1` to `p4`, `P1` to `P4`, or `!!1` to `!!4`
- **Assignees**: `+Name` (requires a project to be specified)
- **Deadlines**: `{date expression}` (e.g., `{tomorrow}`, `{in 3 days}`)
- **Reminders**: `!30m` (30 min before), `!1h` (1 hour before), `!0mb` (at due time),
  `!14:00` (absolute time), `!30 min before` (verbose, English only)
- **Descriptions**: ` // description text` (must be at the end)

## Examples

- `"Buy milk today at 5pm #Shopping @groceries p1"`
- `"Team meeting next Monday at 10am #Work +JohnDoe !30m"`
- `"Review PR {Friday} // Check the new authentication flow"`
- `"Submit report tomorrow #Work /Urgent @important // Include Q3 metrics"`

## Important Notes

- Natural language date parsing supports multiple languages based on account settings
- If parsing fails for any element, the task is still created (with unparsed text
  remaining in the content)
- Use the `meta` parameter to see detailed parsing results for debugging

For comprehensive documentation including all supported date formats, language
support, and advanced syntax, see the
[Quick Add help article](https://www.todoist.com/help/articles/use-task-quick-add-in-todoist-va4Lhpzz).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.quickAddApiV1TasksQuickPost({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.QuickAddApiV1TasksQuickPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .quickAddApiV1TasksQuickPost({ body: { text: "some example string" } })
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
| <code>body</code> | <code>[Body15](src/models/body15.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.quickAddApiV1TasksQuickPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.QuickAddApiV1TasksQuickPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.quickAddApiV1TasksQuickPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.QuickAddApiV1TasksQuickPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reopenTaskApiV1TasksTaskIdReopenPost(request: Tasks.ReopenTaskApiV1TasksTaskIdReopenPostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reopens a task.

Any ancestor tasks or sections will also be marked as uncomplete and
restored from history.

The reinstated tasks and sections will appear at the end of the list within
their parent, after any previously active tasks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tasks.reopenTaskApiV1TasksTaskIdReopenPost({ taskId: "6XGgmFVcrG5RRjVr" });
} catch (err) {
  // TODO: Handle 'err' of type Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .reopenTaskApiV1TasksTaskIdReopenPost({ taskId: "6XGgmFVcrG5RRjVr" })
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
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.reopenTaskApiV1TasksTaskIdReopenPost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.reopenTaskApiV1TasksTaskIdReopenPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet(request: Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequest, options?: RequestOptions): ApiPromise&lt;TasksCompletedDateResponse, Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of completed tasks strictly limited by the specified completion
date range (up to 3 months).

It can retrieve completed items:

- From all the projects the user has joined in a workspace
- From all the projects of the user
- That match many [supported
  filters](https://todoist.com/help/articles/introduction-to-filters-V98wIH)

By default, the response is limited to a page containing a maximum of 50 items
(configurable using `limit`).

Subsequent pages of results can be fetched by using the `next_cursor` value from the
response as the `cursor` value for the next request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet({
    since: new Date(Date.UTC(2025, 1, 1, 0, 0, 0)),
    until: new Date(Date.UTC(2025, 1, 28, 23, 59, 59)),
    workspaceId: 123456,
    projectId: "6XGgm6PHrGgMpCFX",
    sectionId: "6fFPHV272WWh3gpW",
    parentId: "6XGgmFVcrG5RRjVr",
    filterQuery: "#Work & overdue",
    filterLang: "en",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  });
  // TODO: Handle 'response' of type TasksCompletedDateResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet({
    since: new Date(Date.UTC(2025, 1, 1, 0, 0, 0)),
    until: new Date(Date.UTC(2025, 1, 28, 23, 59, 59)),
    workspaceId: 123456,
    projectId: "6XGgm6PHrGgMpCFX",
    sectionId: "6fFPHV272WWh3gpW",
    parentId: "6XGgmFVcrG5RRjVr",
    filterQuery: "#Work & overdue",
    filterLang: "en",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    publicKey: "550e8400-e29b-41d4-a716-446655440000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksCompletedDateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since</code> | <code>Date</code> (date-time) | - |
| <code>until</code> | <code>Date</code> (date-time) | - |
| <code>workspaceId?</code> | <code>number</code> | - |
| <code>projectId?</code> | <code>string</code> | - |
| <code>sectionId?</code> | <code>string</code> | - |
| <code>parentId?</code> | <code>string</code> | - |
| <code>filterQuery?</code> | <code>string</code> | - |
| <code>filterLang?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>publicKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet(request)`

- **OnSuccess**: <code>[TasksCompletedDateResponse](src/models/tasks-completed-date-response.ts)</code>
- **OnError**: throws <code>[Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksCompletedDateResponse, Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError&gt;</code>, with `result.value` of type <code>[TasksCompletedDateResponse](src/models/tasks-completed-date-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet(request: Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequest, options?: RequestOptions): ApiPromise&lt;TasksCompletedDateResponse, Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of completed items strictly limited by the specified due date range
(up to 6 weeks).

It can retrieve completed items:

- From within a project, section, or parent item
- From all the projects the user has joined in a workspace
- From all the projects of the user
- That match many [supported
  filters](https://todoist.com/help/articles/introduction-to-filters-V98wIH)

By default, the response is limited to a page containing a maximum of 50 items
(configurable using `limit`).

Subsequent pages of results can be fetched by using the `next_cursor` value from the
response as the `cursor` value for the next request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet({
    since: new Date(Date.UTC(2025, 1, 1, 0, 0, 0)),
    until: new Date(Date.UTC(2025, 1, 28, 23, 59, 59)),
    workspaceId: 123456,
    projectId: "6XGgm6PHrGgMpCFX",
    sectionId: "6fFPHV272WWh3gpW",
    parentId: "6XGgmFVcrG5RRjVr",
    filterQuery: "#Work & overdue",
    filterLang: "en",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type TasksCompletedDateResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet({
    since: new Date(Date.UTC(2025, 1, 1, 0, 0, 0)),
    until: new Date(Date.UTC(2025, 1, 28, 23, 59, 59)),
    workspaceId: 123456,
    projectId: "6XGgm6PHrGgMpCFX",
    sectionId: "6fFPHV272WWh3gpW",
    parentId: "6XGgmFVcrG5RRjVr",
    filterQuery: "#Work & overdue",
    filterLang: "en",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksCompletedDateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since</code> | <code>Date</code> (date-time) | - |
| <code>until</code> | <code>Date</code> (date-time) | - |
| <code>workspaceId?</code> | <code>number</code> | - |
| <code>projectId?</code> | <code>string</code> | - |
| <code>sectionId?</code> | <code>string</code> | - |
| <code>parentId?</code> | <code>string</code> | - |
| <code>filterQuery?</code> | <code>string</code> | - |
| <code>filterLang?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet(request)`

- **OnSuccess**: <code>[TasksCompletedDateResponse](src/models/tasks-completed-date-response.ts)</code>
- **OnError**: throws <code>[Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksCompletedDateResponse, Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError&gt;</code>, with `result.value` of type <code>[TasksCompletedDateResponse](src/models/tasks-completed-date-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTaskApiV1TasksTaskIdPost(request: Tasks.UpdateTaskApiV1TasksTaskIdPostRequest, options?: RequestOptions): ApiPromise&lt;ItemSyncView, Tasks.UpdateTaskApiV1TasksTaskIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.updateTaskApiV1TasksTaskIdPost({
    taskId: "6XGgmFVcrG5RRjVr",
    body: {},
  });
  // TODO: Handle 'response' of type ItemSyncView
} catch (err) {
  // TODO: Handle 'err' of type Tasks.UpdateTaskApiV1TasksTaskIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .updateTaskApiV1TasksTaskIdPost({ taskId: "6XGgmFVcrG5RRjVr", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body23](src/models/body23.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.updateTaskApiV1TasksTaskIdPost(request)`

- **OnSuccess**: <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: throws <code>[Tasks.UpdateTaskApiV1TasksTaskIdPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.updateTaskApiV1TasksTaskIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemSyncView, Tasks.UpdateTaskApiV1TasksTaskIdPostError&gt;</code>, with `result.value` of type <code>[ItemSyncView](src/models/item-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Labels

> Source: [Labels](src/resources/labels.ts)

<details>
<summary><code>createLabelApiV1LabelsPost(request: Labels.CreateLabelApiV1LabelsPostRequest, options?: RequestOptions): ApiPromise&lt;LabelRestView, Labels.CreateLabelApiV1LabelsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a personal label.

Premium limits apply to personal label creation. Free users who exceed the
plan limit receive a premium-only error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.createLabelApiV1LabelsPost({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type LabelRestView
} catch (err) {
  // TODO: Handle 'err' of type Labels.CreateLabelApiV1LabelsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .createLabelApiV1LabelsPost({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelRestView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body13](src/models/body13.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.createLabelApiV1LabelsPost(request)`

- **OnSuccess**: <code>[LabelRestView](src/models/label-rest-view.ts)</code>
- **OnError**: throws <code>[Labels.CreateLabelApiV1LabelsPostError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.createLabelApiV1LabelsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelRestView, Labels.CreateLabelApiV1LabelsPostError&gt;</code>, with `result.value` of type <code>[LabelRestView](src/models/label-rest-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLabelApiV1LabelsLabelIdDelete(request: Labels.DeleteLabelApiV1LabelsLabelIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Labels.DeleteLabelApiV1LabelsLabelIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a personal label. All instances of the label will be removed from tasks

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labels.deleteLabelApiV1LabelsLabelIdDelete({ labelId: 2147509004 });
} catch (err) {
  // TODO: Handle 'err' of type Labels.DeleteLabelApiV1LabelsLabelIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.deleteLabelApiV1LabelsLabelIdDelete({ labelId: 2147509004 }).asApiResult();
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
| <code>labelId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.deleteLabelApiV1LabelsLabelIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Labels.DeleteLabelApiV1LabelsLabelIdDeleteError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.deleteLabelApiV1LabelsLabelIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Labels.DeleteLabelApiV1LabelsLabelIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabelApiV1LabelsLabelIdGet(request: Labels.GetLabelApiV1LabelsLabelIdGetRequest, options?: RequestOptions): ApiPromise&lt;LabelRestView, Labels.GetLabelApiV1LabelsLabelIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a personal label by ID.

Returns `NOT_FOUND` when the label does not exist or the ID is invalid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.getLabelApiV1LabelsLabelIdGet({ labelId: 2147509004 });
  // TODO: Handle 'response' of type LabelRestView
} catch (err) {
  // TODO: Handle 'err' of type Labels.GetLabelApiV1LabelsLabelIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.getLabelApiV1LabelsLabelIdGet({ labelId: 2147509004 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelRestView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>labelId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.getLabelApiV1LabelsLabelIdGet(request)`

- **OnSuccess**: <code>[LabelRestView](src/models/label-rest-view.ts)</code>
- **OnError**: throws <code>[Labels.GetLabelApiV1LabelsLabelIdGetError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.getLabelApiV1LabelsLabelIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelRestView, Labels.GetLabelApiV1LabelsLabelIdGetError&gt;</code>, with `result.value` of type <code>[LabelRestView](src/models/label-rest-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabelsApiV1LabelsGet(request?: Labels.GetLabelsApiV1LabelsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList5, Labels.GetLabelsApiV1LabelsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all user labels.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.getLabelsApiV1LabelsGet({
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList5
} catch (err) {
  // TODO: Handle 'err' of type Labels.GetLabelsApiV1LabelsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .getLabelsApiV1LabelsGet({ cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55", limit: 50 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList5
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.getLabelsApiV1LabelsGet(request)`

- **OnSuccess**: <code>[PaginatedList5](src/models/paginated-list5.ts)</code>
- **OnError**: throws <code>[Labels.GetLabelsApiV1LabelsGetError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.getLabelsApiV1LabelsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList5, Labels.GetLabelsApiV1LabelsGetError&gt;</code>, with `result.value` of type <code>[PaginatedList5](src/models/paginated-list5.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchLabelsApiV1LabelsSearchGet(request: Labels.SearchLabelsApiV1LabelsSearchGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList5, Labels.SearchLabelsApiV1LabelsSearchGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search user labels by name.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.searchLabelsApiV1LabelsSearchGet({
    query: "urgent",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList5
} catch (err) {
  // TODO: Handle 'err' of type Labels.SearchLabelsApiV1LabelsSearchGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .searchLabelsApiV1LabelsSearchGet({
    query: "urgent",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList5
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.searchLabelsApiV1LabelsSearchGet(request)`

- **OnSuccess**: <code>[PaginatedList5](src/models/paginated-list5.ts)</code>
- **OnError**: throws <code>[Labels.SearchLabelsApiV1LabelsSearchGetError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.searchLabelsApiV1LabelsSearchGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList5, Labels.SearchLabelsApiV1LabelsSearchGetError&gt;</code>, with `result.value` of type <code>[PaginatedList5](src/models/paginated-list5.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sharedLabelsApiV1LabelsSharedGet(request?: Labels.SharedLabelsApiV1LabelsSharedGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList11, Labels.SharedLabelsApiV1LabelsSharedGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a set of unique strings containing [shared
labels](https://www.todoist.com/help/articles/introduction-to-labels-dSo2eE#h_01HE1NNWMV8MCXNVF10GT13ZEX)
from active tasks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.sharedLabelsApiV1LabelsSharedGet({
    omitPersonal: false,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList11
} catch (err) {
  // TODO: Handle 'err' of type Labels.SharedLabelsApiV1LabelsSharedGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .sharedLabelsApiV1LabelsSharedGet({
    omitPersonal: false,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList11
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>omitPersonal?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.sharedLabelsApiV1LabelsSharedGet(request)`

- **OnSuccess**: <code>[PaginatedList11](src/models/paginated-list11.ts)</code>
- **OnError**: throws <code>[Labels.SharedLabelsApiV1LabelsSharedGetError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.sharedLabelsApiV1LabelsSharedGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList11, Labels.SharedLabelsApiV1LabelsSharedGetError&gt;</code>, with `result.value` of type <code>[PaginatedList11](src/models/paginated-list11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sharedLabelsRemoveApiV1LabelsSharedRemovePost(request: Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the given shared label from all active tasks

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labels.sharedLabelsRemoveApiV1LabelsSharedRemovePost({
    body: { name: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .sharedLabelsRemoveApiV1LabelsSharedRemovePost({ body: { name: "some example string" } })
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
| <code>body</code> | <code>[Body1](src/models/body1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.sharedLabelsRemoveApiV1LabelsSharedRemovePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.sharedLabelsRemoveApiV1LabelsSharedRemovePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sharedLabelsRenameApiV1LabelsSharedRenamePost(request: Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename the given shared label from all active tasks

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labels.sharedLabelsRenameApiV1LabelsSharedRenamePost({
    body: { name: "some example string", newName: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .sharedLabelsRenameApiV1LabelsSharedRenamePost({
    body: { name: "some example string", newName: "some example string" },
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
| <code>body</code> | <code>[Body22](src/models/body22.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.sharedLabelsRenameApiV1LabelsSharedRenamePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.sharedLabelsRenameApiV1LabelsSharedRenamePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLabelApiV1LabelsLabelIdPost(request: Labels.UpdateLabelApiV1LabelsLabelIdPostRequest, options?: RequestOptions): ApiPromise&lt;LabelRestView, Labels.UpdateLabelApiV1LabelsLabelIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a personal label.

At least one mutable field must be provided. Passing `null` for an optional
field keeps the existing value unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.updateLabelApiV1LabelsLabelIdPost({ labelId: 2147509004, body: {} });
  // TODO: Handle 'response' of type LabelRestView
} catch (err) {
  // TODO: Handle 'err' of type Labels.UpdateLabelApiV1LabelsLabelIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .updateLabelApiV1LabelsLabelIdPost({ labelId: 2147509004, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelRestView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>labelId</code> | <code>number</code> | - |
| <code>body</code> | <code>[Body32](src/models/body32.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.updateLabelApiV1LabelsLabelIdPost(request)`

- **OnSuccess**: <code>[LabelRestView](src/models/label-rest-view.ts)</code>
- **OnError**: throws <code>[Labels.UpdateLabelApiV1LabelsLabelIdPostError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.updateLabelApiV1LabelsLabelIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelRestView, Labels.UpdateLabelApiV1LabelsLabelIdPostError&gt;</code>, with `result.value` of type <code>[LabelRestView](src/models/label-rest-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/resources/folders.ts)

<details>
<summary><code>createFolderApiV1FoldersPost(request: Folders.CreateFolderApiV1FoldersPostRequest, options?: RequestOptions): ApiPromise&lt;FolderSyncView, Folders.CreateFolderApiV1FoldersPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new folder in the given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.createFolderApiV1FoldersPost({
    body: { name: "some example string", workspaceId: 1 },
  });
  // TODO: Handle 'response' of type FolderSyncView
} catch (err) {
  // TODO: Handle 'err' of type Folders.CreateFolderApiV1FoldersPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders
  .createFolderApiV1FoldersPost({ body: { name: "some example string", workspaceId: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body35](src/models/body35.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.createFolderApiV1FoldersPost(request)`

- **OnSuccess**: <code>[FolderSyncView](src/models/folder-sync-view.ts)</code>
- **OnError**: throws <code>[Folders.CreateFolderApiV1FoldersPostError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.createFolderApiV1FoldersPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderSyncView, Folders.CreateFolderApiV1FoldersPostError&gt;</code>, with `result.value` of type <code>[FolderSyncView](src/models/folder-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFolderApiV1FoldersFolderIdDelete(request: Folders.DeleteFolderApiV1FoldersFolderIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Folders.DeleteFolderApiV1FoldersFolderIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a folder. Projects in the folder will be moved out of it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.folders.deleteFolderApiV1FoldersFolderIdDelete({ folderId: 1234 });
} catch (err) {
  // TODO: Handle 'err' of type Folders.DeleteFolderApiV1FoldersFolderIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.deleteFolderApiV1FoldersFolderIdDelete({ folderId: 1234 }).asApiResult();
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
| <code>folderId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.deleteFolderApiV1FoldersFolderIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Folders.DeleteFolderApiV1FoldersFolderIdDeleteError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.deleteFolderApiV1FoldersFolderIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Folders.DeleteFolderApiV1FoldersFolderIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolderApiV1FoldersFolderIdGet(request: Folders.GetFolderApiV1FoldersFolderIdGetRequest, options?: RequestOptions): ApiPromise&lt;FolderSyncView, Folders.GetFolderApiV1FoldersFolderIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the folder for the given folder ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.getFolderApiV1FoldersFolderIdGet({ folderId: 1234 });
  // TODO: Handle 'response' of type FolderSyncView
} catch (err) {
  // TODO: Handle 'err' of type Folders.GetFolderApiV1FoldersFolderIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.getFolderApiV1FoldersFolderIdGet({ folderId: 1234 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>folderId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.getFolderApiV1FoldersFolderIdGet(request)`

- **OnSuccess**: <code>[FolderSyncView](src/models/folder-sync-view.ts)</code>
- **OnError**: throws <code>[Folders.GetFolderApiV1FoldersFolderIdGetError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.getFolderApiV1FoldersFolderIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderSyncView, Folders.GetFolderApiV1FoldersFolderIdGetError&gt;</code>, with `result.value` of type <code>[FolderSyncView](src/models/folder-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFoldersApiV1FoldersGet(request: Folders.GetFoldersApiV1FoldersGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList3, Folders.GetFoldersApiV1FoldersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all folders for a workspace.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.getFoldersApiV1FoldersGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList3
} catch (err) {
  // TODO: Handle 'err' of type Folders.GetFoldersApiV1FoldersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders
  .getFoldersApiV1FoldersGet({
    workspaceId: 123456,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.getFoldersApiV1FoldersGet(request)`

- **OnSuccess**: <code>[PaginatedList3](src/models/paginated-list3.ts)</code>
- **OnError**: throws <code>[Folders.GetFoldersApiV1FoldersGetError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.getFoldersApiV1FoldersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList3, Folders.GetFoldersApiV1FoldersGetError&gt;</code>, with `result.value` of type <code>[PaginatedList3](src/models/paginated-list3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFolderApiV1FoldersFolderIdPost(request: Folders.UpdateFolderApiV1FoldersFolderIdPostRequest, options?: RequestOptions): ApiPromise&lt;FolderSyncView, Folders.UpdateFolderApiV1FoldersFolderIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing folder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.updateFolderApiV1FoldersFolderIdPost({ folderId: 1234, body: {} });
  // TODO: Handle 'response' of type FolderSyncView
} catch (err) {
  // TODO: Handle 'err' of type Folders.UpdateFolderApiV1FoldersFolderIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders
  .updateFolderApiV1FoldersFolderIdPost({ folderId: 1234, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>folderId</code> | <code>number</code> | - |
| <code>body</code> | <code>[Body2](src/models/body2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.updateFolderApiV1FoldersFolderIdPost(request)`

- **OnSuccess**: <code>[FolderSyncView](src/models/folder-sync-view.ts)</code>
- **OnError**: throws <code>[Folders.UpdateFolderApiV1FoldersFolderIdPostError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.updateFolderApiV1FoldersFolderIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderSyncView, Folders.UpdateFolderApiV1FoldersFolderIdPostError&gt;</code>, with `result.value` of type <code>[FolderSyncView](src/models/folder-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Uploads

> Source: [Uploads](src/resources/uploads.ts)

<details>
<summary><code>deleteUploadApiV1UploadsDelete(request: Uploads.DeleteUploadApiV1UploadsDeleteRequest, options?: RequestOptions): ApiPromise&lt;ResponseDeleteUploadApiV1UploadsDelete, Uploads.DeleteUploadApiV1UploadsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an uploaded file.

The file must belong to the authenticated user. Returns `FILE_NOT_FOUND`
when the upload cannot be found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.deleteUploadApiV1UploadsDelete({
    fileUrl: "https://files.todoist.com/abc123/by/1234567/as/file.pdf",
  });
  // TODO: Handle 'response' of type ResponseDeleteUploadApiV1UploadsDelete
} catch (err) {
  // TODO: Handle 'err' of type Uploads.DeleteUploadApiV1UploadsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads
  .deleteUploadApiV1UploadsDelete({ fileUrl: "https://files.todoist.com/abc123/by/1234567/as/file.pdf" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseDeleteUploadApiV1UploadsDelete
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fileUrl</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.deleteUploadApiV1UploadsDelete(request)`

- **OnSuccess**: <code>[ResponseDeleteUploadApiV1UploadsDelete](src/models/response-delete-upload-api-v1-uploads-delete.ts)</code>
- **OnError**: throws <code>[Uploads.DeleteUploadApiV1UploadsDeleteError](src/resources/uploads.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploads.deleteUploadApiV1UploadsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseDeleteUploadApiV1UploadsDelete, Uploads.DeleteUploadApiV1UploadsDeleteError&gt;</code>, with `result.value` of type <code>[ResponseDeleteUploadApiV1UploadsDelete](src/models/response-delete-upload-api-v1-uploads-delete.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadFileApiV1UploadsPost(request: Uploads.UploadFileApiV1UploadsPostRequest, options?: RequestOptions): ApiPromise&lt;UploadResult, Uploads.UploadFileApiV1UploadsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file to Todoist.

This endpoint accepts file uploads via two methods:

1. **Multipart form-data** (recommended):
   - Send the file as a form field with the actual file content
   - Optionally include `project_id` as another form field
   - The filename will be extracted from the Content-Disposition header

2. **Raw binary stream**:
   - Send the file content directly in the request body
   - Set `Content-Type` header to the file's MIME type
   - Set `X-File-Name` header with the desired filename
   - Optionally include `project_id` as a query parameter

The optional `project_id` parameter can be used to apply workspace-specific
upload limits when uploading to a workspace project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.uploadFileApiV1UploadsPost({
    file: new Uint8Array(),
    fileName: "document.pdf",
    projectId: "6XGgm6PHrGgMpCFX",
  });
  // TODO: Handle 'response' of type UploadResult
} catch (err) {
  // TODO: Handle 'err' of type Uploads.UploadFileApiV1UploadsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads
  .uploadFileApiV1UploadsPost({
    file: new Uint8Array(),
    fileName: "document.pdf",
    projectId: "6XGgm6PHrGgMpCFX",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | - |
| <code>fileName?</code> | <code>string</code> | Name for the uploaded file. If not provided, will be extracted from Content-Disposition header (multipart) or X-File-Name header (raw binary). |
| <code>projectId?</code> | <code>string</code> | Project ID to apply workspace-specific upload limits when uploading to a workspace project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.uploadFileApiV1UploadsPost(request)`

- **OnSuccess**: <code>[UploadResult](src/models/upload-result.ts)</code>
- **OnError**: throws <code>[Uploads.UploadFileApiV1UploadsPostError](src/resources/uploads.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploads.uploadFileApiV1UploadsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadResult, Uploads.UploadFileApiV1UploadsPostError&gt;</code>, with `result.value` of type <code>[UploadResult](src/models/upload-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Filters

> Source: [Filters](src/resources/filters.ts)

<details>
<summary><code>deleteFilterApiV1FiltersFilterIdDelete(request: Filters.DeleteFilterApiV1FiltersFilterIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Filters.DeleteFilterApiV1FiltersFilterIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a personal filter.

Only available on plans that include filters. Returns a not found error if
the filter doesn't exist, was already deleted, or belongs to another user.
Workspace filters can't be deleted with this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.filters.deleteFilterApiV1FiltersFilterIdDelete({ filterId: 2370326476 });
} catch (err) {
  // TODO: Handle 'err' of type Filters.DeleteFilterApiV1FiltersFilterIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filters
  .deleteFilterApiV1FiltersFilterIdDelete({ filterId: 2370326476 })
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
| <code>filterId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filters.deleteFilterApiV1FiltersFilterIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Filters.DeleteFilterApiV1FiltersFilterIdDeleteError](src/resources/filters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filters.deleteFilterApiV1FiltersFilterIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Filters.DeleteFilterApiV1FiltersFilterIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reminders

> Source: [Reminders](src/resources/reminders.ts)

<details>
<summary><code>createReminderApiV1RemindersPost(request: Reminders.CreateReminderApiV1RemindersPostRequest, options?: RequestOptions): ApiPromise&lt;NotificationSyncView, Reminders.CreateReminderApiV1RemindersPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new reminder for a task.

For **relative** reminders, provide `minute_offset` (minutes before the task's due time).
For **absolute** reminders, provide a `due` dictionary with a specific date/time.
Supported `due` keys are `date` or `string`, with optional `lang`, `timezone`,
and `is_recurring`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.createReminderApiV1RemindersPost({
    body: { taskId: "some example string" },
  });
  // TODO: Handle 'response' of type NotificationSyncView
} catch (err) {
  // TODO: Handle 'err' of type Reminders.CreateReminderApiV1RemindersPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders
  .createReminderApiV1RemindersPost({ body: { taskId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body28](src/models/body28.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.createReminderApiV1RemindersPost(request)`

- **OnSuccess**: <code>[NotificationSyncView](src/models/notification-sync-view.ts)</code>
- **OnError**: throws <code>[Reminders.CreateReminderApiV1RemindersPostError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.createReminderApiV1RemindersPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationSyncView, Reminders.CreateReminderApiV1RemindersPostError&gt;</code>, with `result.value` of type <code>[NotificationSyncView](src/models/notification-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteReminderApiV1RemindersReminderIdDelete(request: Reminders.DeleteReminderApiV1RemindersReminderIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a reminder by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.reminders.deleteReminderApiV1RemindersReminderIdDelete({ reminderId: "6XGgmFQrx44wfGHr" });
} catch (err) {
  // TODO: Handle 'err' of type Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders
  .deleteReminderApiV1RemindersReminderIdDelete({ reminderId: "6XGgmFQrx44wfGHr" })
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
| <code>reminderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.deleteReminderApiV1RemindersReminderIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.deleteReminderApiV1RemindersReminderIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReminderApiV1RemindersReminderIdGet(request: Reminders.GetReminderApiV1RemindersReminderIdGetRequest, options?: RequestOptions): ApiPromise&lt;NotificationSyncView, Reminders.GetReminderApiV1RemindersReminderIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a single reminder by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.getReminderApiV1RemindersReminderIdGet({
    reminderId: "6XGgmFQrx44wfGHr",
  });
  // TODO: Handle 'response' of type NotificationSyncView
} catch (err) {
  // TODO: Handle 'err' of type Reminders.GetReminderApiV1RemindersReminderIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders
  .getReminderApiV1RemindersReminderIdGet({ reminderId: "6XGgmFQrx44wfGHr" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reminderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.getReminderApiV1RemindersReminderIdGet(request)`

- **OnSuccess**: <code>[NotificationSyncView](src/models/notification-sync-view.ts)</code>
- **OnError**: throws <code>[Reminders.GetReminderApiV1RemindersReminderIdGetError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.getReminderApiV1RemindersReminderIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationSyncView, Reminders.GetReminderApiV1RemindersReminderIdGetError&gt;</code>, with `result.value` of type <code>[NotificationSyncView](src/models/notification-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRemindersApiV1RemindersGet(request?: Reminders.GetRemindersApiV1RemindersGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList8, Reminders.GetRemindersApiV1RemindersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all active reminders.

Optionally filter by `task_id` to return only reminders for a specific task.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination)
for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.getRemindersApiV1RemindersGet({
    taskId: "6XGgmFVcrG5RRjVr",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList8
} catch (err) {
  // TODO: Handle 'err' of type Reminders.GetRemindersApiV1RemindersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders
  .getRemindersApiV1RemindersGet({
    taskId: "6XGgmFVcrG5RRjVr",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList8
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.getRemindersApiV1RemindersGet(request)`

- **OnSuccess**: <code>[PaginatedList8](src/models/paginated-list8.ts)</code>
- **OnError**: throws <code>[Reminders.GetRemindersApiV1RemindersGetError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.getRemindersApiV1RemindersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList8, Reminders.GetRemindersApiV1RemindersGetError&gt;</code>, with `result.value` of type <code>[PaginatedList8](src/models/paginated-list8.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateReminderApiV1RemindersReminderIdPost(request: Reminders.UpdateReminderApiV1RemindersReminderIdPostRequest, options?: RequestOptions): ApiPromise&lt;NotificationSyncView, Reminders.UpdateReminderApiV1RemindersReminderIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing reminder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.updateReminderApiV1RemindersReminderIdPost({
    reminderId: "6XGgmFQrx44wfGHr",
    body: {},
  });
  // TODO: Handle 'response' of type NotificationSyncView
} catch (err) {
  // TODO: Handle 'err' of type Reminders.UpdateReminderApiV1RemindersReminderIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders
  .updateReminderApiV1RemindersReminderIdPost({ reminderId: "6XGgmFQrx44wfGHr", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reminderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body3](src/models/body3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.updateReminderApiV1RemindersReminderIdPost(request)`

- **OnSuccess**: <code>[NotificationSyncView](src/models/notification-sync-view.ts)</code>
- **OnError**: throws <code>[Reminders.UpdateReminderApiV1RemindersReminderIdPostError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.updateReminderApiV1RemindersReminderIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationSyncView, Reminders.UpdateReminderApiV1RemindersReminderIdPostError&gt;</code>, with `result.value` of type <code>[NotificationSyncView](src/models/notification-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LocationReminders

> Source: [LocationReminders](src/resources/location-reminders.ts)

<details>
<summary><code>createLocationReminderApiV1LocationRemindersPost(request: LocationReminders.CreateLocationReminderApiV1LocationRemindersPostRequest, options?: RequestOptions): ApiPromise&lt;NotificationLocationSyncView, LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new location reminder for a task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationReminders.createLocationReminderApiV1LocationRemindersPost({
    body: {
      taskId: "some example string",
      name: "some example string",
      locLat: "some example string",
      locLong: "some example string",
      locTrigger: LocTrigger.OnEnter,
    },
  });
  // TODO: Handle 'response' of type NotificationLocationSyncView
} catch (err) {
  // TODO: Handle 'err' of type LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationReminders
  .createLocationReminderApiV1LocationRemindersPost({
    body: {
      taskId: "some example string",
      name: "some example string",
      locLat: "some example string",
      locLong: "some example string",
      locTrigger: LocTrigger.OnEnter,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationLocationSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body16](src/models/body16.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationReminders.createLocationReminderApiV1LocationRemindersPost(request)`

- **OnSuccess**: <code>[NotificationLocationSyncView](src/models/notification-location-sync-view.ts)</code>
- **OnError**: throws <code>[LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError](src/resources/location-reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationReminders.createLocationReminderApiV1LocationRemindersPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationLocationSyncView, LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError&gt;</code>, with `result.value` of type <code>[NotificationLocationSyncView](src/models/notification-location-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLocationReminderApiV1LocationRemindersReminderIdDelete(request: LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a location reminder by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.locationReminders.deleteLocationReminderApiV1LocationRemindersReminderIdDelete({
    reminderId: "6XGgmFQrx44wfGHr",
  });
} catch (err) {
  // TODO: Handle 'err' of type LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationReminders
  .deleteLocationReminderApiV1LocationRemindersReminderIdDelete({ reminderId: "6XGgmFQrx44wfGHr" })
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
| <code>reminderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationReminders.deleteLocationReminderApiV1LocationRemindersReminderIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError](src/resources/location-reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationReminders.deleteLocationReminderApiV1LocationRemindersReminderIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLocationReminderApiV1LocationRemindersReminderIdGet(request: LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetRequest, options?: RequestOptions): ApiPromise&lt;NotificationLocationSyncView, LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a single location reminder by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationReminders.getLocationReminderApiV1LocationRemindersReminderIdGet({
    reminderId: "6XGgmFQrx44wfGHr",
  });
  // TODO: Handle 'response' of type NotificationLocationSyncView
} catch (err) {
  // TODO: Handle 'err' of type LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationReminders
  .getLocationReminderApiV1LocationRemindersReminderIdGet({ reminderId: "6XGgmFQrx44wfGHr" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationLocationSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reminderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationReminders.getLocationReminderApiV1LocationRemindersReminderIdGet(request)`

- **OnSuccess**: <code>[NotificationLocationSyncView](src/models/notification-location-sync-view.ts)</code>
- **OnError**: throws <code>[LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError](src/resources/location-reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationReminders.getLocationReminderApiV1LocationRemindersReminderIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationLocationSyncView, LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError&gt;</code>, with `result.value` of type <code>[NotificationLocationSyncView](src/models/notification-location-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLocationRemindersApiV1LocationRemindersGet(request?: LocationReminders.GetLocationRemindersApiV1LocationRemindersGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList7, LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all active location reminders.

Optionally filter by `task_id` to return only location reminders for a specific task.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination)
for details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationReminders.getLocationRemindersApiV1LocationRemindersGet({
    taskId: "6XGgmFVcrG5RRjVr",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type PaginatedList7
} catch (err) {
  // TODO: Handle 'err' of type LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationReminders
  .getLocationRemindersApiV1LocationRemindersGet({
    taskId: "6XGgmFVcrG5RRjVr",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList7
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationReminders.getLocationRemindersApiV1LocationRemindersGet(request)`

- **OnSuccess**: <code>[PaginatedList7](src/models/paginated-list7.ts)</code>
- **OnError**: throws <code>[LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError](src/resources/location-reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationReminders.getLocationRemindersApiV1LocationRemindersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList7, LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError&gt;</code>, with `result.value` of type <code>[PaginatedList7](src/models/paginated-list7.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLocationReminderApiV1LocationRemindersReminderIdPost(request: LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostRequest, options?: RequestOptions): ApiPromise&lt;NotificationLocationSyncView, LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing location reminder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationReminders.updateLocationReminderApiV1LocationRemindersReminderIdPost({
    reminderId: "6XGgmFQrx44wfGHr",
    body: {},
  });
  // TODO: Handle 'response' of type NotificationLocationSyncView
} catch (err) {
  // TODO: Handle 'err' of type LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationReminders
  .updateLocationReminderApiV1LocationRemindersReminderIdPost({ reminderId: "6XGgmFQrx44wfGHr", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationLocationSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reminderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[Body31](src/models/body31.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationReminders.updateLocationReminderApiV1LocationRemindersReminderIdPost(request)`

- **OnSuccess**: <code>[NotificationLocationSyncView](src/models/notification-location-sync-view.ts)</code>
- **OnError**: throws <code>[LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError](src/resources/location-reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationReminders.updateLocationReminderApiV1LocationRemindersReminderIdPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationLocationSyncView, LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError&gt;</code>, with `result.value` of type <code>[NotificationLocationSyncView](src/models/notification-location-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](src/resources/user.ts)

<details>
<summary><code>getProductivityStatsApiV1TasksCompletedStatsGet(options?: RequestOptions): ApiPromise&lt;ProductivityStatsResponse, User.GetProductivityStatsApiV1TasksCompletedStatsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get comprehensive productivity statistics for the authenticated user.
This endpoint is used to display information about the
[Karma system](https://www.todoist.com/help/articles/introduction-to-karma-OgWkWy).

Returns detailed completion statistics including:

- Daily completion counts with per-project breakdowns for the last 7 days
- Weekly completion counts with per-project breakdowns for the last 4 weeks
- Total completed task count
- Karma score, trend, graph data, and update history
- Goal settings (daily/weekly goals, ignore days, vacation mode)
- Streak information (current, last, and maximum daily and weekly streaks)
- Project color mappings for visualization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getProductivityStatsApiV1TasksCompletedStatsGet();
  // TODO: Handle 'response' of type ProductivityStatsResponse
} catch (err) {
  // TODO: Handle 'err' of type User.GetProductivityStatsApiV1TasksCompletedStatsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.getProductivityStatsApiV1TasksCompletedStatsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductivityStatsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.getProductivityStatsApiV1TasksCompletedStatsGet()`

- **OnSuccess**: <code>[ProductivityStatsResponse](src/models/productivity-stats-response.ts)</code>
- **OnError**: throws <code>[User.GetProductivityStatsApiV1TasksCompletedStatsGetError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.getProductivityStatsApiV1TasksCompletedStatsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductivityStatsResponse, User.GetProductivityStatsApiV1TasksCompletedStatsGetError&gt;</code>, with `result.value` of type <code>[ProductivityStatsResponse](src/models/productivity-stats-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateNotificationSettingApiV1NotificationSettingPut(request: User.UpdateNotificationSettingApiV1NotificationSettingPutRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, boolean&gt;, User.UpdateNotificationSettingApiV1NotificationSettingPutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a notification delivery preference.

The API accepts the legacy `dont_notify` flag and stores the inverse as the
user's delivery preference for the requested notification type and channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.updateNotificationSettingApiV1NotificationSettingPut({
    body: { notificationType: NotificationType.NoteAdded, service: NotificationChannel.Email },
  });
  // TODO: Handle 'response' of type Record<string, boolean>
} catch (err) {
  // TODO: Handle 'err' of type User.UpdateNotificationSettingApiV1NotificationSettingPutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user
  .updateNotificationSettingApiV1NotificationSettingPut({
    body: { notificationType: NotificationType.NoteAdded, service: NotificationChannel.Email },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, boolean>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body20](src/models/body20.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.updateNotificationSettingApiV1NotificationSettingPut(request)`

- **OnSuccess**: <code>Record&lt;string, boolean&gt;</code>
- **OnError**: throws <code>[User.UpdateNotificationSettingApiV1NotificationSettingPutError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.updateNotificationSettingApiV1NotificationSettingPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, boolean&gt;, User.UpdateNotificationSettingApiV1NotificationSettingPutError&gt;</code>, with `result.value` of type <code>Record&lt;string, boolean&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userInfoApiV1UserGet(options?: RequestOptions): ApiPromise&lt;UserSyncView, User.UserInfoApiV1UserGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the currently authenticated user.

This is the OIDC userinfo endpoint. OAuth tokens of any product audience
are accepted as long as they carry the `user:read` scope (implied by
`data:read`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.userInfoApiV1UserGet();
  // TODO: Handle 'response' of type UserSyncView
} catch (err) {
  // TODO: Handle 'err' of type User.UserInfoApiV1UserGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.userInfoApiV1UserGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserSyncView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.userInfoApiV1UserGet()`

- **OnSuccess**: <code>[UserSyncView](src/models/user-sync-view.ts)</code>
- **OnError**: throws <code>[User.UserInfoApiV1UserGetError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.userInfoApiV1UserGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserSyncView, User.UserInfoApiV1UserGetError&gt;</code>, with `result.value` of type <code>[UserSyncView](src/models/user-sync-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Activity

> Source: [Activity](src/resources/activity.ts)

<details>
<summary><code>getActivityLogsApiV1ActivitiesGet(request?: Activity.GetActivityLogsApiV1ActivitiesGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedList, Activity.GetActivityLogsApiV1ActivitiesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get activity logs.

Returns a paginated list of activity events for the user. Events can be filtered by object
type (project, item, note, section), event type, and other criteria. Uses cursor-based
pagination for efficient navigation through results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.activity.getActivityLogsApiV1ActivitiesGet({
    objectType: ObjectType.Item,
    objectId: "6XGgmFVcrG5RRjVr",
    parentProjectId: "6XGgm6PHrGgMpCFX",
    parentItemId: "6XGgmFVcrG5RRjVr",
    includeParentObject: false,
    includeChildObjects: false,
    initiatorId: 123456,
    initiatorIdNull: false,
    eventType: "added",
    ensureLastState: false,
    objectEventTypes: ["item:deleted"],
    workspaceId: 123456,
    annotateNotes: false,
    annotateParents: false,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    dateFrom: new Date(Date.UTC(2026, 0, 1, 0, 0, 0)),
    dateTo: new Date(Date.UTC(2026, 1, 1, 0, 0, 0)),
  });
  // TODO: Handle 'response' of type PaginatedList
} catch (err) {
  // TODO: Handle 'err' of type Activity.GetActivityLogsApiV1ActivitiesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.activity
  .getActivityLogsApiV1ActivitiesGet({
    objectType: ObjectType.Item,
    objectId: "6XGgmFVcrG5RRjVr",
    parentProjectId: "6XGgm6PHrGgMpCFX",
    parentItemId: "6XGgmFVcrG5RRjVr",
    includeParentObject: false,
    includeChildObjects: false,
    initiatorId: 123456,
    initiatorIdNull: false,
    eventType: "added",
    ensureLastState: false,
    objectEventTypes: ["item:deleted"],
    workspaceId: 123456,
    annotateNotes: false,
    annotateParents: false,
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
    dateFrom: new Date(Date.UTC(2026, 0, 1, 0, 0, 0)),
    dateTo: new Date(Date.UTC(2026, 1, 1, 0, 0, 0)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectType?</code> | <code>[ObjectType](src/models/object-type.ts)</code> | - |
| <code>objectId?</code> | <code>[ObjectId](src/models/unions/object-id.ts)</code> | - |
| <code>parentProjectId?</code> | <code>[ParentProjectId](src/models/unions/parent-project-id.ts)</code> | - |
| <code>parentItemId?</code> | <code>[ParentItemId](src/models/unions/parent-item-id.ts)</code> | - |
| <code>includeParentObject?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>includeChildObjects?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>initiatorId?</code> | <code>[InitiatorId](src/models/unions/initiator-id.ts)</code> | - |
| <code>initiatorIdNull?</code> | <code>boolean</code> | - |
| <code>eventType?</code> | <code>string</code> | - |
| <code>ensureLastState?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>objectEventTypes?</code> | <code>string[]</code> | - |
| <code>workspaceId?</code> | <code>[WorkspaceId](src/models/unions/workspace-id.ts)</code> | - |
| <code>annotateNotes?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>annotateParents?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>dateFrom?</code> | <code>Date</code> (date-time) | - |
| <code>dateTo?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.activity.getActivityLogsApiV1ActivitiesGet(request)`

- **OnSuccess**: <code>[PaginatedList](src/models/paginated-list.ts)</code>
- **OnError**: throws <code>[Activity.GetActivityLogsApiV1ActivitiesGetError](src/resources/activity.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.activity.getActivityLogsApiV1ActivitiesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedList, Activity.GetActivityLogsApiV1ActivitiesGetError&gt;</code>, with `result.value` of type <code>[PaginatedList](src/models/paginated-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Backups

> Source: [Backups](src/resources/backups.ts)

<details>
<summary><code>downloadBackupApiV1BackupsDownloadGet(request: Backups.DownloadBackupApiV1BackupsDownloadGetRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Backups.DownloadBackupApiV1BackupsDownloadGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a backup archive.

This endpoint requires the `data:read_write` scope. The `backups:read`
scope only grants access to `GET /api/v1/backups`.

Validates that the requested backup belongs to the authenticated user and
redirects to a signed CloudFront URL that expires after one minute.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.backups.downloadBackupApiV1BackupsDownloadGet({
    file: "12345678901234567890123456789012.zip",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Backups.DownloadBackupApiV1BackupsDownloadGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backups
  .downloadBackupApiV1BackupsDownloadGet({ file: "12345678901234567890123456789012.zip" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backups.downloadBackupApiV1BackupsDownloadGet(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Backups.DownloadBackupApiV1BackupsDownloadGetError](src/resources/backups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.backups.downloadBackupApiV1BackupsDownloadGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Backups.DownloadBackupApiV1BackupsDownloadGetError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBackupsApiV1BackupsGet(request?: Backups.GetBackupsApiV1BackupsGetRequest, options?: RequestOptions): ApiPromise&lt;BackupResponse[], Backups.GetBackupsApiV1BackupsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Todoist creates a backup archive of users' data on a daily basis. Backup
archives can also be accessed from the web app (Todoist Settings ->
Backups).

This endpoint accepts the `backups:read` scope, the `data:read_write`
scope, or a personal API token. The `backups:read` scope bypasses MFA and
only grants access to `GET /api/v1/backups`. When using `data:read_write`
or a personal API token for an account with MFA enabled, the MFA token is
required.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.backups.getBackupsApiV1BackupsGet({ mfaToken: "123456" });
  // TODO: Handle 'response' of type BackupResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Backups.GetBackupsApiV1BackupsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backups.getBackupsApiV1BackupsGet({ mfaToken: "123456" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BackupResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mfaToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backups.getBackupsApiV1BackupsGet(request)`

- **OnSuccess**: <code>[BackupResponse](src/models/backup-response.ts)[]</code>
- **OnError**: throws <code>[Backups.GetBackupsApiV1BackupsGetError](src/resources/backups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.backups.getBackupsApiV1BackupsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BackupResponse[], Backups.GetBackupsApiV1BackupsGetError&gt;</code>, with `result.value` of type <code>[BackupResponse](src/models/backup-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Emails

> Source: [Emails](src/resources/emails.ts)

<details>
<summary><code>emailDisableApiV1EmailsDelete(request: Emails.EmailDisableApiV1EmailsDeleteRequest, options?: RequestOptions): ApiPromise&lt;StatusOkResponse, Emails.EmailDisableApiV1EmailsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable the current email to a Todoist object

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.emails.emailDisableApiV1EmailsDelete({
    objType: EmailObjectType.Project,
    objId: "6XGgm6PHrGgMpCFX",
  });
  // TODO: Handle 'response' of type StatusOkResponse
} catch (err) {
  // TODO: Handle 'err' of type Emails.EmailDisableApiV1EmailsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.emails
  .emailDisableApiV1EmailsDelete({ objType: EmailObjectType.Project, objId: "6XGgm6PHrGgMpCFX" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusOkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objType</code> | <code>[EmailObjectType](src/models/email-object-type.ts)</code> | - |
| <code>objId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.emails.emailDisableApiV1EmailsDelete(request)`

- **OnSuccess**: <code>[StatusOkResponse](src/models/status-ok-response.ts)</code>
- **OnError**: throws <code>[Emails.EmailDisableApiV1EmailsDeleteError](src/resources/emails.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.emails.emailDisableApiV1EmailsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusOkResponse, Emails.EmailDisableApiV1EmailsDeleteError&gt;</code>, with `result.value` of type <code>[StatusOkResponse](src/models/status-ok-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>emailGetOrCreateApiV1EmailsPut(request: Emails.EmailGetOrCreateApiV1EmailsPutRequest, options?: RequestOptions): ApiPromise&lt;EmailResponse, Emails.EmailGetOrCreateApiV1EmailsPutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get or create an email to a Todoist object,
currently only projects and tasks are supported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.emails.emailGetOrCreateApiV1EmailsPut({
    body: { objType: EmailObjectType.Project, objId: "some example string" },
  });
  // TODO: Handle 'response' of type EmailResponse
} catch (err) {
  // TODO: Handle 'err' of type Emails.EmailGetOrCreateApiV1EmailsPutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.emails
  .emailGetOrCreateApiV1EmailsPut({
    body: { objType: EmailObjectType.Project, objId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body4](src/models/body4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.emails.emailGetOrCreateApiV1EmailsPut(request)`

- **OnSuccess**: <code>[EmailResponse](src/models/email-response.ts)</code>
- **OnError**: throws <code>[Emails.EmailGetOrCreateApiV1EmailsPutError](src/resources/emails.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.emails.emailGetOrCreateApiV1EmailsPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmailResponse, Emails.EmailGetOrCreateApiV1EmailsPutError&gt;</code>, with `result.value` of type <code>[EmailResponse](src/models/email-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Billing

> Source: [Billing](src/resources/billing.ts)

<details>
<summary><code>cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost(request: Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostRequest, options?: RequestOptions): ApiPromise&lt;BillingPortalUrlResponse, Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a hosted cancellation flow and return the redirect URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.billing.cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost({
      body: {},
    });
  // TODO: Handle 'response' of type BillingPortalUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing
  .cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost({ body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingPortalUrlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body39](src/models/body39.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost(request)`

- **OnSuccess**: <code>[BillingPortalUrlResponse](src/models/billing-portal-url-response.ts)</code>
- **OnError**: throws <code>[Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingPortalUrlResponse, Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError&gt;</code>, with `result.value` of type <code>[BillingPortalUrlResponse](src/models/billing-portal-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost(options?: RequestOptions): ApiPromise&lt;SubscriptionInfo, Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the current user's subscription state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost();
  // TODO: Handle 'response' of type SubscriptionInfo
} catch (err) {
  // TODO: Handle 'err' of type Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing.getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost()`

- **OnSuccess**: <code>[SubscriptionInfo](src/models/subscription-info.ts)</code>
- **OnError**: throws <code>[Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionInfo, Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError&gt;</code>, with `result.value` of type <code>[SubscriptionInfo](src/models/subscription-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reactivatePlanApiV1PaymentsReactivatePlanPost(options?: RequestOptions): ApiPromise&lt;SubscriptionInfo, Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reactivate a previously canceled subscription.

Returns the fresh `SubscriptionInfo` after reactivation so callers can
avoid a follow-up fetch. Raises `NO_CANCELABLE_SUBSCRIPTION` if there is
no active subscription to reactivate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.reactivatePlanApiV1PaymentsReactivatePlanPost();
  // TODO: Handle 'response' of type SubscriptionInfo
} catch (err) {
  // TODO: Handle 'err' of type Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing.reactivatePlanApiV1PaymentsReactivatePlanPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.reactivatePlanApiV1PaymentsReactivatePlanPost()`

- **OnSuccess**: <code>[SubscriptionInfo](src/models/subscription-info.ts)</code>
- **OnError**: throws <code>[Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.reactivatePlanApiV1PaymentsReactivatePlanPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionInfo, Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError&gt;</code>, with `result.value` of type <code>[SubscriptionInfo](src/models/subscription-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usageBillingHistoryApiV1UsageBillingHistoryGet(request?: Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetRequest, options?: RequestOptions): ApiPromise&lt;HistoryResponse, Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller's usage-billing ledger entries, newest first.

Use `types` to filter the entries to list. A user who has never topped up
gets an empty page.

This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for
details on using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.usageBillingHistoryApiV1UsageBillingHistoryGet({
    product: "automations",
    types: "top_up",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  });
  // TODO: Handle 'response' of type HistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing
  .usageBillingHistoryApiV1UsageBillingHistoryGet({
    product: "automations",
    types: "top_up",
    cursor: "14540000435w8hj8pXXwPQJJch.X9DBH8ya2Xenok55",
    limit: 50,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product?</code> | <code>string</code> | -<br>**Default**: "automations" |
| <code>types?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.usageBillingHistoryApiV1UsageBillingHistoryGet(request)`

- **OnSuccess**: <code>[HistoryResponse](src/models/history-response.ts)</code>
- **OnError**: throws <code>[Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.usageBillingHistoryApiV1UsageBillingHistoryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoryResponse, Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError&gt;</code>, with `result.value` of type <code>[HistoryResponse](src/models/history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usageBillingStateApiV1UsageBillingStateGet(request?: Billing.UsageBillingStateApiV1UsageBillingStateGetRequest, options?: RequestOptions): ApiPromise&lt;CreditStateResponse, Billing.UsageBillingStateApiV1UsageBillingStateGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read the caller's usage-billing credit state for a product.

A user who has never topped up reads as an empty wallet: `available_units` and
`available_amount` are 0, `is_settled_low_balance` is true, and
`usage_block_reason` is `insufficient_credit`. There is no separate "no
account" answer, because both states send the user to the same top-up screen.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.usageBillingStateApiV1UsageBillingStateGet({
    product: "automations",
  });
  // TODO: Handle 'response' of type CreditStateResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.UsageBillingStateApiV1UsageBillingStateGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing
  .usageBillingStateApiV1UsageBillingStateGet({ product: "automations" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditStateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product?</code> | <code>string</code> | -<br>**Default**: "automations" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.usageBillingStateApiV1UsageBillingStateGet(request)`

- **OnSuccess**: <code>[CreditStateResponse](src/models/credit-state-response.ts)</code>
- **OnError**: throws <code>[Billing.UsageBillingStateApiV1UsageBillingStateGetError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.usageBillingStateApiV1UsageBillingStateGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditStateResponse, Billing.UsageBillingStateApiV1UsageBillingStateGetError&gt;</code>, with `result.value` of type <code>[CreditStateResponse](src/models/credit-state-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usageBillingTopUpApiV1UsageBillingTopUpPost(request: Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostRequest, options?: RequestOptions): ApiPromise&lt;TopUpResponse, Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

In V1, create a hosted Stripe Checkout session to top up the authenticated user's personal Todoist Wallet.

A wallet whose usage is billed on the user's Pro subscription needs a personal Stripe customer and an active
personal Todoist Pro subscription. A wallet on its own compute subscription needs Pro of any kind, including Pro
gifted by a Business workspace, but not Pro paid only through an app store. A user with no Stripe customer gets one
before Checkout opens, unless they only have a legacy one.

A refused top-up returns HTTP 400 with one of these error tags:

- `USAGE_BILLING_PLAN_REQUIRED` (code `615`): the user doesn't have Pro.
- `USAGE_BILLING_CURRENCY_MISMATCH` (code `616`): the currency isn't the one the user pays in, including an
  unsupported one.
- `USAGE_BILLING_TOP_UP_BELOW_MINIMUM` (code `617`): the amount is below the minimum.
- `USAGE_BILLING_TOP_UP_UNAVAILABLE` (code `605`): any other unmet prerequisite, such as a user with only a legacy
  Stripe customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.usageBillingTopUpApiV1UsageBillingTopUpPost({
    body: { amount: 1, currency: "some example string", returnUrl: "some example string" },
  });
  // TODO: Handle 'response' of type TopUpResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing
  .usageBillingTopUpApiV1UsageBillingTopUpPost({
    body: { amount: 1, currency: "some example string", returnUrl: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TopUpResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Body33](src/models/body33.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.usageBillingTopUpApiV1UsageBillingTopUpPost(request)`

- **OnSuccess**: <code>[TopUpResponse](src/models/top-up-response.ts)</code>
- **OnError**: throws <code>[Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.usageBillingTopUpApiV1UsageBillingTopUpPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TopUpResponse, Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError&gt;</code>, with `result.value` of type <code>[TopUpResponse](src/models/top-up-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet(request?: Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetRequest, options?: RequestOptions): ApiPromise&lt;UsageSummaryResponse, Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Total the caller's settled usage over a window.

`/history` is a ledger with one row per movement, so a total spanning more
than one page cannot come from it. This answers the one question the UI asks
of the whole ledger at once: how many runs, and what they cost.

Only settled usage counts. `void`, `expiry` and `chargeback` draw the balance
down as well, but they reverse a grant rather than report usage.

A user who has never topped up reports zero for every field.

`group_by=automation` adds `groups`: the same total, one entry per
automation. Older usage without an automation id groups by its label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet({
    product: "automations",
    category: "automation_run",
    since: new Date(Date.UTC(2026, 6, 15, 0, 0, 0)),
    until: new Date(Date.UTC(2026, 7, 15, 0, 0, 0)),
    groupBy: GroupBy.Automation,
  });
  // TODO: Handle 'response' of type UsageSummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing
  .usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet({
    product: "automations",
    category: "automation_run",
    since: new Date(Date.UTC(2026, 6, 15, 0, 0, 0)),
    until: new Date(Date.UTC(2026, 7, 15, 0, 0, 0)),
    groupBy: GroupBy.Automation,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageSummaryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product?</code> | <code>string</code> | -<br>**Default**: "automations" |
| <code>category?</code> | <code>string</code> | - |
| <code>since?</code> | <code>Date</code> (date-time) | - |
| <code>until?</code> | <code>Date</code> (date-time) | - |
| <code>groupBy?</code> | <code>[GroupBy](src/models/group-by.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet(request)`

- **OnSuccess**: <code>[UsageSummaryResponse](src/models/usage-summary-response.ts)</code>
- **OnError**: throws <code>[Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageSummaryResponse, Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError&gt;</code>, with `result.value` of type <code>[UsageSummaryResponse](src/models/usage-summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TodoistApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

