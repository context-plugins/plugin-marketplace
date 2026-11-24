# Reference

> Source: [BasiqClient](src/client.ts)

## AccountsApi

> Source: [AccountsApi](src/resources/accounts-api.ts)

<details>
<summary><code>getAccount(request: AccountsApi.GetAccountRequest, options?: RequestOptions): ApiPromise&lt;AccountResponseResource1, AccountsApi.GetAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific account belonging to a user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountsApi.getAccount({
    userId: "some example string",
    accountId: "some example string",
  });
  // TODO: Handle 'response' of type AccountResponseResource1
} catch (err) {
  // TODO: Handle 'err' of type AccountsApi.GetAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsApi
  .getAccount({ userId: "some example string", accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountResponseResource1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | User identifier |
| <code>accountId</code> | <code>string</code> | Account identifier |
| <code>filter?</code> | <code>string</code> | Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is currently supported. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsApi.getAccount(request)`

- **OnSuccess**: <code>[AccountResponseResource1](src/models/account-response-resource1.ts)</code>
- **OnError**: throws <code>[AccountsApi.GetAccountError](src/resources/accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsApi.getAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountResponseResource1, AccountsApi.GetAccountError&gt;</code>, with `result.value` of type <code>[AccountResponseResource1](src/models/account-response-resource1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccounts(request: AccountsApi.GetAccountsRequest, options?: RequestOptions): ApiPromise&lt;UsersAccountsResponse, AccountsApi.GetAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all accounts belonging to a user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountsApi.getAccounts({ userId: "some example string" });
  // TODO: Handle 'response' of type UsersAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type AccountsApi.GetAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsApi.getAccounts({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersAccountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | User identifier |
| <code>filter?</code> | <code>string</code> | Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is currently supported. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsApi.getAccounts(request)`

- **OnSuccess**: <code>[UsersAccountsResponse](src/models/users-accounts-response.ts)</code>
- **OnError**: throws <code>[AccountsApi.GetAccountsError](src/resources/accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsApi.getAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersAccountsResponse, AccountsApi.GetAccountsError&gt;</code>, with `result.value` of type <code>[UsersAccountsResponse](src/models/users-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](src/resources/analytics.ts)

<details>
<summary><code>getConnectionAnalytics(request: Analytics.GetConnectionAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ConnectionAnalyticsResponse, Analytics.GetConnectionAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve connection analytics, including connection creation, status distribution, method distribution, and disruption rates over a given time interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.getConnectionAnalytics({ interval: Interval.Daily });
  // TODO: Handle 'response' of type ConnectionAnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.GetConnectionAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.getConnectionAnalytics({ interval: Interval.Daily }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionAnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>[Interval](src/models/interval.ts)</code> | Time interval for analytics. |
| <code>fromDate?</code> | <code>string</code> (date) | Start date of the analytics period (e.g., 2023-01-01). |
| <code>toDate?</code> | <code>string</code> (date) | End date of the analytics period (e.g., 2024-01-01). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.getConnectionAnalytics(request)`

- **OnSuccess**: <code>[ConnectionAnalyticsResponse](src/models/connection-analytics-response.ts)</code>
- **OnError**: throws <code>[Analytics.GetConnectionAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.getConnectionAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionAnalyticsResponse, Analytics.GetConnectionAnalyticsError&gt;</code>, with `result.value` of type <code>[ConnectionAnalyticsResponse](src/models/connection-analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserAnalytics(request: Analytics.GetUserAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, Analytics.GetUserAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve user analytics, such as number of users and connections created for an application over a given time interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.getUserAnalytics({
    interval: Interval.Daily,
    connectionType: "all,cdr,pdf,web,csv",
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.GetUserAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics
  .getUserAnalytics({ interval: Interval.Daily, connectionType: "all,cdr,pdf,web,csv" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>[Interval](src/models/interval.ts)</code> | Time interval for analytics. |
| <code>fromDate?</code> | <code>string</code> (date) | Start date of the analytics period (e.g., 2023-01-01). |
| <code>toDate?</code> | <code>string</code> (date) | End date of the analytics period (e.g., 2024-01-01). |
| <code>connectionType?</code> | <code>string</code> | Filter analytics by one or more connection types. Must be a comma-separated string. Values are case-sensitive: all, cdr, pdf, web, csv. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.getUserAnalytics(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[Analytics.GetUserAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.getUserAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, Analytics.GetUserAnalyticsError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](src/resources/authentication.ts)

<details>
<summary><code>postToken(request: Authentication.PostTokenRequest, options?: RequestOptions): ApiPromise&lt;TokenResponse, Authentication.PostTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.postToken({
    basiqVersion: "3.0",
    scope: "CLIENT_ACCESS",
    userId: "6dd30ce4-d4ba-11ec-9d64-0242ac120002",
  });
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.PostTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .postToken({ basiqVersion: "3.0", scope: "CLIENT_ACCESS", userId: "6dd30ce4-d4ba-11ec-9d64-0242ac120002" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>basiqVersion</code> | <code>string</code> | - |
| <code>scope?</code> | <code>string</code> | - |
| <code>userId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.postToken(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[Authentication.PostTokenError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.postToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, Authentication.PostTokenError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuthLinks

> Source: [AuthLinks](src/resources/auth-links.ts)

<details>
<summary><code>deleteAuthLink(request: AuthLinks.DeleteAuthLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, AuthLinks.DeleteAuthLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Note that this action cannot be undone.

The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.

Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.authLinks.deleteAuthLink({ userId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type AuthLinks.DeleteAuthLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authLinks.deleteAuthLink({ userId: "some example string" }).asApiResult();
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
| <code>userId</code> | <code>string</code> | The identifier of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authLinks.deleteAuthLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AuthLinks.DeleteAuthLinkError](src/resources/auth-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authLinks.deleteAuthLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AuthLinks.DeleteAuthLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAuthLink(request: AuthLinks.GetAuthLinkRequest, options?: RequestOptions): ApiPromise&lt;UsersAuthLinkResponse1, AuthLinks.GetAuthLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authLinks.getAuthLink({ userId: "some example string" });
  // TODO: Handle 'response' of type UsersAuthLinkResponse1
} catch (err) {
  // TODO: Handle 'err' of type AuthLinks.GetAuthLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authLinks.getAuthLink({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersAuthLinkResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authLinks.getAuthLink(request)`

- **OnSuccess**: <code>[UsersAuthLinkResponse1](src/models/users-auth-link-response1.ts)</code>
- **OnError**: throws <code>[AuthLinks.GetAuthLinkError](src/resources/auth-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authLinks.getAuthLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersAuthLinkResponse1, AuthLinks.GetAuthLinkError&gt;</code>, with `result.value` of type <code>[UsersAuthLinkResponse1](src/models/users-auth-link-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAuthLink(request: AuthLinks.PostAuthLinkRequest, options?: RequestOptions): ApiPromise&lt;UsersAuthLinkResponse, AuthLinks.PostAuthLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.

The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified, we will look up the mobile on the user object; if that is not specified either, you will get an error. If both are specified, the mobile number on the auth_link will take precedence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authLinks.postAuthLink({ userId: "some example string" });
  // TODO: Handle 'response' of type UsersAuthLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthLinks.PostAuthLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authLinks.postAuthLink({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersAuthLinkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body?</code> | <code>[UsersAuthLinkRequest](src/models/users-auth-link-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authLinks.postAuthLink(request)`

- **OnSuccess**: <code>[UsersAuthLinkResponse](src/models/users-auth-link-response.ts)</code>
- **OnError**: throws <code>[AuthLinks.PostAuthLinkError](src/resources/auth-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authLinks.postAuthLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersAuthLinkResponse, AuthLinks.PostAuthLinkError&gt;</code>, with `result.value` of type <code>[UsersAuthLinkResponse](src/models/users-auth-link-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](src/resources/connections.ts)

<details>
<summary><code>deleteConnection(request: Connections.DeleteConnectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Connections.DeleteConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.connections.deleteConnection({
    userId: "some example string",
    connectionId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Connections.DeleteConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .deleteConnection({ userId: "some example string", connectionId: "some example string" })
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
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>connectionId</code> | <code>string</code> | The identifier of the connection. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.deleteConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Connections.DeleteConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.deleteConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Connections.DeleteConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnection(request: Connections.GetConnectionRequest, options?: RequestOptions): ApiPromise&lt;ConnectionGetResponseResource, Connections.GetConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to retrieve details of a specific connection. Note that due to security the loginId, password, securityCode are never returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.getConnection({
    userId: "some example string",
    connectionId: "some example string",
  });
  // TODO: Handle 'response' of type ConnectionGetResponseResource
} catch (err) {
  // TODO: Handle 'err' of type Connections.GetConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .getConnection({ userId: "some example string", connectionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionGetResponseResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>connectionId</code> | <code>string</code> | The identifier of the connection. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.getConnection(request)`

- **OnSuccess**: <code>[ConnectionGetResponseResource](src/models/connection-get-response-resource.ts)</code>
- **OnError**: throws <code>[Connections.GetConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.getConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionGetResponseResource, Connections.GetConnectionError&gt;</code>, with `result.value` of type <code>[ConnectionGetResponseResource](src/models/connection-get-response-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnections(request: Connections.GetConnectionsRequest, options?: RequestOptions): ApiPromise&lt;ConnectionsGetResponseResource, Connections.GetConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.getConnections({ userId: "some example string" });
  // TODO: Handle 'response' of type ConnectionsGetResponseResource
} catch (err) {
  // TODO: Handle 'err' of type Connections.GetConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections.getConnections({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionsGetResponseResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | User identifier. |
| <code>filter?</code> | <code>string</code> | Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000') |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.getConnections(request)`

- **OnSuccess**: <code>[ConnectionsGetResponseResource](src/models/connections-get-response-resource.ts)</code>
- **OnError**: throws <code>[Connections.GetConnectionsError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.getConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionsGetResponseResource, Connections.GetConnectionsError&gt;</code>, with `result.value` of type <code>[ConnectionsGetResponseResource](src/models/connections-get-response-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purgeConnectionData(request: Connections.PurgeConnectionDataRequest, options?: RequestOptions): ApiPromise&lt;undefined, Connections.PurgeConnectionDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to remove all user data related to a specific institution. Purging is only applicable for active user connections.

When Enrich data is updated, the Enrich results under transactions won’t automatically reflect these updates. To ensure the latest Enrich results are available, partners should first purge and then refresh connections. Without this step, any new insight reports generated will not include the latest enriched data.

> 📘 **Note:** Remember to purge and refresh connections to keep Enrich insights current.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.connections.purgeConnectionData({
    userId: "some example string",
    connectionId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Connections.PurgeConnectionDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .purgeConnectionData({ userId: "some example string", connectionId: "some example string" })
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
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>connectionId</code> | <code>string</code> | The identifier of the connection. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.purgeConnectionData(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Connections.PurgeConnectionDataError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.purgeConnectionData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Connections.PurgeConnectionDataError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshConnection(request: Connections.RefreshConnectionRequest, options?: RequestOptions): ApiPromise&lt;ConnectionResponseResource, Connections.RefreshConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to refresh an existing connection. This will not return a new connection. Instead will return a job resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job resource to track the connections progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.refreshConnection({
    userId: "some example string",
    connectionId: "some example string",
  });
  // TODO: Handle 'response' of type ConnectionResponseResource
} catch (err) {
  // TODO: Handle 'err' of type Connections.RefreshConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .refreshConnection({ userId: "some example string", connectionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionResponseResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>connectionId</code> | <code>string</code> | The identifier of the connection. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.refreshConnection(request)`

- **OnSuccess**: <code>[ConnectionResponseResource](src/models/connection-response-resource.ts)</code>
- **OnError**: throws <code>[Connections.RefreshConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.refreshConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionResponseResource, Connections.RefreshConnectionError&gt;</code>, with `result.value` of type <code>[ConnectionResponseResource](src/models/connection-response-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshConnections(request: Connections.RefreshConnectionsRequest, options?: RequestOptions): ApiPromise&lt;ConnectionsRefreshResource, Connections.RefreshConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to refresh all connections belonging to the specified user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.refreshConnections({ userId: "some example string" });
  // TODO: Handle 'response' of type ConnectionsRefreshResource
} catch (err) {
  // TODO: Handle 'err' of type Connections.RefreshConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections.refreshConnections({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionsRefreshResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.refreshConnections(request)`

- **OnSuccess**: <code>[ConnectionsRefreshResource](src/models/connections-refresh-resource.ts)</code>
- **OnError**: throws <code>[Connections.RefreshConnectionsError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.refreshConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionsRefreshResource, Connections.RefreshConnectionsError&gt;</code>, with `result.value` of type <code>[ConnectionsRefreshResource](src/models/connections-refresh-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Connectors

> Source: [Connectors](src/resources/connectors.ts)

<details>
<summary><code>getConnector(request: Connectors.GetConnectorRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsResponse1, Connectors.GetConnectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOTE: This end point requires authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectors.getConnector({
    connectorId: "some example string",
    method: "some example string",
  });
  // TODO: Handle 'response' of type ConnectorsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Connectors.GetConnectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectors
  .getConnector({ connectorId: "some example string", method: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>connectorId</code> | <code>string</code> | Connector ID |
| <code>method</code> | <code>string</code> | Connector method |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectors.getConnector(request)`

- **OnSuccess**: <code>[ConnectorsResponse1](src/models/connectors-response1.ts)</code>
- **OnError**: throws <code>[Connectors.GetConnectorError](src/resources/connectors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectors.getConnector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsResponse1, Connectors.GetConnectorError&gt;</code>, with `result.value` of type <code>[ConnectorsResponse1](src/models/connectors-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnectors(request?: Connectors.GetConnectorsRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsResponse, Connectors.GetConnectorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOTE: This end point requires authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectors.getConnectors();
  // TODO: Handle 'response' of type ConnectorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Connectors.GetConnectorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectors.getConnectors().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | Filter parameter can be used to filter connector list by connector property. This parameter should contain a comma-separated list of filter statements.</br><br>A filter statement is composed of the entity name (in this case, it is always 'connector'), the property name (e.g., 'stage'), the filter operator (e.g., 'eq'), and the quoted string value in parentheses (e.g., "('live')").</br><br>The following list of regular expressions describes acceptable filter statements:</br><br>• (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)</br><br>• (connector).(method).(eq)\(('web'\|\|'open-banking'\|'pdf'\|'csv')\)</br><br>• (connector).(status).(eq\|ne)\(('operational'\|'degraded-performance'\|'partial-outage'\|'major-outage'\|'under-maintenance')\)</br><br>• (connector).(status).(in)\(([\w\W]+)\)</br><br>• (connector).(stage).(eq\|ne)\(('live'\|'beta'\|'alpha')\)</br><br>• (connector).(stage).(in)\(([\w\W]+)\)</br><br>• (connector).(scopes).(in\|eq\|ne)\(([\w\W]+)\)</br><br>• (connector).(institution).(country).(eq\|ne)\(('Australia'\|'New Zealand')\)</br><br>• (connector).(institution).(country).(in)\(([\w\W]+)\)</br><br>• (connector).(institution).(tier).(eq\|ne)\(('1'\|'2'\|'3'\|'4')\)</br><br>• (connector).(institution).(tier).(in)\(([\W\d]+)\)</br><br>• (connector).(institution).(type).(eq\|ne)\(('Bank'\|'Bank (Foreign)'\|'Test Bank'\|'Credit Union'\|'Financial Services'\|'Superannuation')\)</br><br>• (connector).(authorization).(type).(eq\|ne)\(('user'\|'user-mfa'\|'user-mfa-intermittent'\|'other'\|'token')\)</br><br>• (connector).(authorization).(type).(in)\(([\w\W]+)\)</br><br>• (connector).(connectorEngine).(eq\|ne)\(('chrome'\|'node')\)</br><br>Multiple filter definitions should be separated with a comma (,).</br><br>For example, this filter statement will keep only live tier 1 and tier 2 institutions: filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')</br> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectors.getConnectors(request)`

- **OnSuccess**: <code>[ConnectorsResponse](src/models/connectors-response.ts)</code>
- **OnError**: throws <code>[Connectors.GetConnectorsError](src/resources/connectors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectors.getConnectors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsResponse, Connectors.GetConnectorsError&gt;</code>, with `result.value` of type <code>[ConnectorsResponse](src/models/connectors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Consents

> Source: [Consents](src/resources/consents.ts)

<details>
<summary><code>deleteConsent(request: Consents.DeleteConsentRequest, options?: RequestOptions): ApiPromise&lt;undefined, Consents.DeleteConsentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a users consent, this action cannot be undone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.consents.deleteConsent({ userId: "some example string", consentId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Consents.DeleteConsentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consents
  .deleteConsent({ userId: "some example string", consentId: "some example string" })
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
| <code>userId</code> | <code>string</code> | User identification. |
| <code>consentId</code> | <code>string</code> | Consent identification. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consents.deleteConsent(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Consents.DeleteConsentError](src/resources/consents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.consents.deleteConsent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Consents.DeleteConsentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConsents(request: Consents.GetConsentsRequest, options?: RequestOptions): ApiPromise&lt;UsersConsentsResponse, Consents.GetConsentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of the user consents

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.consents.getConsents({ userId: "some example string" });
  // TODO: Handle 'response' of type UsersConsentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Consents.GetConsentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consents.getConsents({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersConsentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consents.getConsents(request)`

- **OnSuccess**: <code>[UsersConsentsResponse](src/models/users-consents-response.ts)</code>
- **OnError**: throws <code>[Consents.GetConsentsError](src/resources/consents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.consents.getConsents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersConsentsResponse, Consents.GetConsentsError&gt;</code>, with `result.value` of type <code>[UsersConsentsResponse](src/models/users-consents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EnrichApi

> Source: [EnrichApi](src/resources/enrich-api.ts)

<details>
<summary><code>enrich(request: EnrichApi.EnrichRequest, options?: RequestOptions): ApiPromise&lt;EnrichResponse, EnrichApi.EnrichError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Enrich resource enables you to retrieve details by passing in a search query containing a bank transaction description. The service enriches transaction data with multiple attributes, returning a transaction classification and three metadata components. The transaction classification will first determine if the transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant information, purchase location and prescribes an industry standard categorisation for each payment transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichApi.enrich({
    q: "some example string",
    institution: "some example string",
    country: "some example string",
  });
  // TODO: Handle 'response' of type EnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type EnrichApi.EnrichError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichApi
  .enrich({ q: "some example string", institution: "some example string", country: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnrichResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | This is the search string that is used to lookup the entity (merchant) information.<br>```**q=garfish%20MANLY%20NS**&country=AU&institution=AU06703``` |
| <code>institution</code> | <code>string</code> | Identifies the institution from where the transaction was derived. This must be a Basiq recognisable institution ID.<br>```enrich?METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&amount=-12.95&**institution=AU04301**``` |
| <code>country</code> | <code>string</code> | Specifies the country the search should be narrowed down to. Passing in a country value will limit the search to the specified country. The country must be in ISO 3166 Alpha-2 format<br>```q=garfish%20MANLY%20NS&**country=AU**&institution=AU06703``` |
| <code>mcc?</code> | <code>string</code> | Merchant classification code as defined by Visa and Mastercard<br>```q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**mcc=3299**``` |
| <code>accountType?</code> | <code>string</code> | The Account type from which the transaction was derived.<br>```METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&institution=AU04301```<br>**Valid values:**<br>- `transaction` - `credit-card` - `savings` - `mortgage` - `loan` - `foreign` |
| <code>amount?</code> | <code>string</code> | The dollar/cent amount relevant to the transaction.<br>```q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**amount=-12.95**``` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichApi.enrich(request)`

- **OnSuccess**: <code>[EnrichResponse](src/models/enrich-response.ts)</code>
- **OnError**: throws <code>[EnrichApi.EnrichError](src/resources/enrich-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichApi.enrich(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnrichResponse, EnrichApi.EnrichError&gt;</code>, with `result.value` of type <code>[EnrichResponse](src/models/enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantById(request: EnrichApi.GetMerchantByIdRequest, options?: RequestOptions): ApiPromise&lt;SingleMerchantResponse, EnrichApi.GetMerchantByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single merchant's details using its unique ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichApi.getMerchantById({
    merchantId: "c1ef352e-c807-4bdc-9a70-887f7cc17426",
  });
  // TODO: Handle 'response' of type SingleMerchantResponse
} catch (err) {
  // TODO: Handle 'err' of type EnrichApi.GetMerchantByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichApi
  .getMerchantById({ merchantId: "c1ef352e-c807-4bdc-9a70-887f7cc17426" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SingleMerchantResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichApi.getMerchantById(request)`

- **OnSuccess**: <code>[SingleMerchantResponse](src/models/single-merchant-response.ts)</code>
- **OnError**: throws <code>[EnrichApi.GetMerchantByIdError](src/resources/enrich-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichApi.getMerchantById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SingleMerchantResponse, EnrichApi.GetMerchantByIdError&gt;</code>, with `result.value` of type <code>[SingleMerchantResponse](src/models/single-merchant-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>merchantSearch(request?: EnrichApi.MerchantSearchRequest, options?: RequestOptions): ApiPromise&lt;MerchantsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves merchant details. At least one of `abn` or `merchantName` is required for a successful search. Optional filters for suburb and entity type can also be applied.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichApi.merchantSearch({
    abn: "38865358328",
    merchantName: "coles",
    suburb: "Ryde",
    entityType: "Individual/Sole Trader",
  });
  // TODO: Handle 'response' of type MerchantsResponse
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
const result = await client.enrichApi
  .merchantSearch({
    abn: "38865358328",
    merchantName: "coles",
    suburb: "Ryde",
    entityType: "Individual/Sole Trader",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantsResponse
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
| <code>abn?</code> | <code>string</code> | The Australian Business Number (ABN) of the merchant. Required if `merchantName` is not provided. |
| <code>merchantName?</code> | <code>string</code> | The name of the merchant. Required if `abn` is not provided. |
| <code>suburb?</code> | <code>string</code> | The suburb of the merchant location to filter by. |
| <code>entityType?</code> | <code>string</code> | The type of the merchant entity to filter by. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichApi.merchantSearch(request)`

- **OnSuccess**: <code>[MerchantsResponse](src/models/merchants-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.enrichApi.merchantSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantsResponse, ApiError&gt;</code>, with `result.value` of type <code>[MerchantsResponse](src/models/merchants-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>getEventTypeById(request: Events.GetEventTypeByIdRequest, options?: RequestOptions): ApiPromise&lt;EventsTypesResponse1, Events.GetEventTypeByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single event type based on the parameter input.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getEventTypeById({ id: "user.created" });
  // TODO: Handle 'response' of type EventsTypesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Events.GetEventTypeByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.getEventTypeById({ id: "user.created" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsTypesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getEventTypeById(request)`

- **OnSuccess**: <code>[EventsTypesResponse1](src/models/events-types-response1.ts)</code>
- **OnError**: throws <code>[Events.GetEventTypeByIdError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getEventTypeById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsTypesResponse1, Events.GetEventTypeByIdError&gt;</code>, with `result.value` of type <code>[EventsTypesResponse1](src/models/events-types-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEvents(request?: Events.GetEventsRequest, options?: RequestOptions): ApiPromise&lt;EventsGetResponseResource, Events.GetEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all events that have taken place.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getEvents({
    filter: "user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)",
  });
  // TODO: Handle 'response' of type EventsGetResponseResource
} catch (err) {
  // TODO: Handle 'err' of type Events.GetEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .getEvents({ filter: "user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsGetResponseResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | Retrieves the details of all events associated with a user.<br><br>**Note:** This endpoint only returns events that happened in the last 7 days.<br><br>**Filtering Options:**<br>- `userId`: User ID for the specific user you wish to retrieve events for. e.g., `user.id.eq(userId)`<br>- `entity`: Filter events by entity type. e.g., `event.entity.eq(entity)`<br>- `type`: Filter events by event type. e.g., `event.type.eq(type)` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getEvents(request)`

- **OnSuccess**: <code>[EventsGetResponseResource](src/models/events-get-response-resource.ts)</code>
- **OnError**: throws <code>[Events.GetEventsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsGetResponseResource, Events.GetEventsError&gt;</code>, with `result.value` of type <code>[EventsGetResponseResource](src/models/events-get-response-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTypeById(request: Events.GetTypeByIdRequest, options?: RequestOptions): ApiPromise&lt;EventsResponse, Events.GetTypeByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single event type based on the parameter input.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getTypeById({
    id: "a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b",
  });
  // TODO: Handle 'response' of type EventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.GetTypeByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .getTypeById({ id: "a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getTypeById(request)`

- **OnSuccess**: <code>[EventsResponse](src/models/events-response.ts)</code>
- **OnError**: throws <code>[Events.GetTypeByIdError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getTypeById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsResponse, Events.GetTypeByIdError&gt;</code>, with `result.value` of type <code>[EventsResponse](src/models/events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEventTypes(options?: RequestOptions): ApiPromise&lt;EventsTypesResponse, Events.ListEventTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of event types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listEventTypes();
  // TODO: Handle 'response' of type EventsTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.ListEventTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.listEventTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.listEventTypes()`

- **OnSuccess**: <code>[EventsTypesResponse](src/models/events-types-response.ts)</code>
- **OnError**: throws <code>[Events.ListEventTypesError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.listEventTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsTypesResponse, Events.ListEventTypesError&gt;</code>, with `result.value` of type <code>[EventsTypesResponse](src/models/events-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Expenses

> Source: [Expenses](src/resources/expenses.ts)

<details>
<summary><code>getExpenses(request: Expenses.GetExpensesRequest, options?: RequestOptions): ApiPromise&lt;ExpensesResponse, Expenses.GetExpensesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing expense summary for a specific user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.expenses.getExpenses({
    userId: "some example string",
    snapshotId: "some example string",
  });
  // TODO: Handle 'response' of type ExpensesResponse
} catch (err) {
  // TODO: Handle 'err' of type Expenses.GetExpensesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.expenses
  .getExpenses({ userId: "some example string", snapshotId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExpensesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>snapshotId</code> | <code>string</code> | The identifier of the expense summary to be retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.expenses.getExpenses(request)`

- **OnSuccess**: <code>[ExpensesResponse](src/models/expenses-response.ts)</code>
- **OnError**: throws <code>[Expenses.GetExpensesError](src/resources/expenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.expenses.getExpenses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExpensesResponse, Expenses.GetExpensesError&gt;</code>, with `result.value` of type <code>[ExpensesResponse](src/models/expenses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postExpenses(request: Expenses.PostExpensesRequest, options?: RequestOptions): ApiPromise&lt;ExpensesResponse, Expenses.PostExpensesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new expense summary for a user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.expenses.postExpenses({ userId: "some example string" });
  // TODO: Handle 'response' of type ExpensesResponse
} catch (err) {
  // TODO: Handle 'err' of type Expenses.PostExpensesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.expenses.postExpenses({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExpensesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>body?</code> | <code>[UsersExpensesRequest](src/models/users-expenses-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.expenses.postExpenses(request)`

- **OnSuccess**: <code>[ExpensesResponse](src/models/expenses-response.ts)</code>
- **OnError**: throws <code>[Expenses.PostExpensesError](src/resources/expenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.expenses.postExpenses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExpensesResponse, Expenses.PostExpensesError&gt;</code>, with `result.value` of type <code>[ExpensesResponse](src/models/expenses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Identities

> Source: [Identities](src/resources/identities.ts)

<details>
<summary><code>getUserIdentities(request: Identities.GetUserIdentitiesRequest, options?: RequestOptions): ApiPromise&lt;IdentitiesGetResponseResource, Identities.GetUserIdentitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list with a data property that contains an array of user identities. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identities.getUserIdentities({ userId: "some example string" });
  // TODO: Handle 'response' of type IdentitiesGetResponseResource
} catch (err) {
  // TODO: Handle 'err' of type Identities.GetUserIdentitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identities.getUserIdentities({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentitiesGetResponseResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | User identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identities.getUserIdentities(request)`

- **OnSuccess**: <code>[IdentitiesGetResponseResource](src/models/identities-get-response-resource.ts)</code>
- **OnError**: throws <code>[Identities.GetUserIdentitiesError](src/resources/identities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identities.getUserIdentities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentitiesGetResponseResource, Identities.GetUserIdentitiesError&gt;</code>, with `result.value` of type <code>[IdentitiesGetResponseResource](src/models/identities-get-response-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserIdentity(request: Identities.GetUserIdentityRequest, options?: RequestOptions): ApiPromise&lt;UsersIdentitiesResponse, Identities.GetUserIdentityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific identity object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identities.getUserIdentity({
    userId: "some example string",
    identityId: "some example string",
  });
  // TODO: Handle 'response' of type UsersIdentitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Identities.GetUserIdentityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identities
  .getUserIdentity({ userId: "some example string", identityId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersIdentitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | User identifier. |
| <code>identityId</code> | <code>string</code> | Identity identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identities.getUserIdentity(request)`

- **OnSuccess**: <code>[UsersIdentitiesResponse](src/models/users-identities-response.ts)</code>
- **OnError**: throws <code>[Identities.GetUserIdentityError](src/resources/identities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identities.getUserIdentity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersIdentitiesResponse, Identities.GetUserIdentityError&gt;</code>, with `result.value` of type <code>[UsersIdentitiesResponse](src/models/users-identities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IncomeApi

> Source: [IncomeApi](src/resources/income-api.ts)

<details>
<summary><code>getIncome(request: IncomeApi.GetIncomeRequest, options?: RequestOptions): ApiPromise&lt;IncomeResponse, IncomeApi.GetIncomeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing income summary for a specific user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incomeApi.getIncome({
    userId: "some example string",
    snapshotId: "some example string",
  });
  // TODO: Handle 'response' of type IncomeResponse
} catch (err) {
  // TODO: Handle 'err' of type IncomeApi.GetIncomeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeApi
  .getIncome({ userId: "some example string", snapshotId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>snapshotId</code> | <code>string</code> | The identifier of the income summary to be retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeApi.getIncome(request)`

- **OnSuccess**: <code>[IncomeResponse](src/models/income-response.ts)</code>
- **OnError**: throws <code>[IncomeApi.GetIncomeError](src/resources/income-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomeApi.getIncome(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeResponse, IncomeApi.GetIncomeError&gt;</code>, with `result.value` of type <code>[IncomeResponse](src/models/income-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postIncome(request: IncomeApi.PostIncomeRequest, options?: RequestOptions): ApiPromise&lt;IncomeResponse, IncomeApi.PostIncomeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an income summary for a specific user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incomeApi.postIncome({ userId: "some example string" });
  // TODO: Handle 'response' of type IncomeResponse
} catch (err) {
  // TODO: Handle 'err' of type IncomeApi.PostIncomeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeApi.postIncome({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>body?</code> | <code>[UsersIncomeRequest](src/models/users-income-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeApi.postIncome(request)`

- **OnSuccess**: <code>[IncomeResponse](src/models/income-response.ts)</code>
- **OnError**: throws <code>[IncomeApi.PostIncomeError](src/resources/income-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomeApi.postIncome(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeResponse, IncomeApi.PostIncomeError&gt;</code>, with `result.value` of type <code>[IncomeResponse](src/models/income-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>createInsight(request: Insights.CreateInsightRequest, options?: RequestOptions): ApiPromise&lt;PostInsightsResponse, Insights.CreateInsightError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION, BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created referencing all users. The self link in the response uses the first userId from the users array.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.createInsight({
    body: {
      users: ["a9242681-8c49-434c-9eeb-e011fba2a0cc"],
      type: TypeInsightsApi.IdentityVerification,
      data: {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+61400000000",
        address: "123 Main St, Sydney NSW 2000",
      },
    },
  });
  // TODO: Handle 'response' of type PostInsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.CreateInsightError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .createInsight({
    body: {
      users: ["a9242681-8c49-434c-9eeb-e011fba2a0cc"],
      type: TypeInsightsApi.IdentityVerification,
      data: {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+61400000000",
        address: "123 Main St, Sydney NSW 2000",
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostInsightsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PostInsightsRequest](src/models/post-insights-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.createInsight(request)`

- **OnSuccess**: <code>[PostInsightsResponse](src/models/post-insights-response.ts)</code>
- **OnError**: throws <code>[Insights.CreateInsightError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.createInsight(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostInsightsResponse, Insights.CreateInsightError&gt;</code>, with `result.value` of type <code>[PostInsightsResponse](src/models/post-insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountInsights(request: Insights.GetAccountInsightsRequest, options?: RequestOptions): ApiPromise&lt;AccountInsightResponse, Insights.GetAccountInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve account insights for a specific user based on account number

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getAccountInsights({
    userId: "60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3",
    body: { accountNumber: "some example string" },
  });
  // TODO: Handle 'response' of type AccountInsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetAccountInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getAccountInsights({
    userId: "60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3",
    body: { accountNumber: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountInsightResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user |
| <code>body</code> | <code>[UsersInsightsAccountRequest](src/models/users-insights-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getAccountInsights(request)`

- **OnSuccess**: <code>[AccountInsightResponse](src/models/account-insight-response.ts)</code>
- **OnError**: throws <code>[Insights.GetAccountInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getAccountInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountInsightResponse, Insights.GetAccountInsightsError&gt;</code>, with `result.value` of type <code>[AccountInsightResponse](src/models/account-insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceInsights(request: Insights.GetBalanceInsightsRequest, options?: RequestOptions): ApiPromise&lt;BalanceInsightResponse, Insights.GetBalanceInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getBalanceInsights({
    userId: "2fc2691d-a6e5-4d1d-9748-c3b217ad76b0",
    body: { balance: { min: "1" } },
  });
  // TODO: Handle 'response' of type BalanceInsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetBalanceInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getBalanceInsights({ userId: "2fc2691d-a6e5-4d1d-9748-c3b217ad76b0", body: { balance: { min: "1" } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BalanceInsightResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | Unique identifier for the user |
| <code>body</code> | <code>[BalanceInsightRequest](src/models/balance-insight-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getBalanceInsights(request)`

- **OnSuccess**: <code>[BalanceInsightResponse](src/models/balance-insight-response.ts)</code>
- **OnError**: throws <code>[Insights.GetBalanceInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getBalanceInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BalanceInsightResponse, Insights.GetBalanceInsightsError&gt;</code>, with `result.value` of type <code>[BalanceInsightResponse](src/models/balance-insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExpenseRatioInsights(request: Insights.GetExpenseRatioInsightsRequest, options?: RequestOptions): ApiPromise&lt;ExpenseRatioInsightResponse, Insights.GetExpenseRatioInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate and return the expense-to-income ratio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getExpenseRatioInsights({
    userId: "60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3",
    body: { expense: "2500" },
  });
  // TODO: Handle 'response' of type ExpenseRatioInsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetExpenseRatioInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getExpenseRatioInsights({ userId: "60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3", body: { expense: "2500" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExpenseRatioInsightResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user |
| <code>body</code> | <code>[ExpenseRatioInsightRequest](src/models/expense-ratio-insight-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getExpenseRatioInsights(request)`

- **OnSuccess**: <code>[ExpenseRatioInsightResponse](src/models/expense-ratio-insight-response.ts)</code>
- **OnError**: throws <code>[Insights.GetExpenseRatioInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getExpenseRatioInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExpenseRatioInsightResponse, Insights.GetExpenseRatioInsightsError&gt;</code>, with `result.value` of type <code>[ExpenseRatioInsightResponse](src/models/expense-ratio-insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIdentityInsights(request: Insights.GetIdentityInsightsRequest, options?: RequestOptions): ApiPromise&lt;IdentityInsightResponse, Insights.GetIdentityInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email, address).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getIdentityInsights({
    userId: "321ac6df-beec-435b-a93e-678fe919badc",
    body: { name: "jared Dunn", phone: "", email: "", address: "" },
  });
  // TODO: Handle 'response' of type IdentityInsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetIdentityInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getIdentityInsights({
    userId: "321ac6df-beec-435b-a93e-678fe919badc",
    body: { name: "jared Dunn", phone: "", email: "", address: "" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityInsightResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | Unique identifier for the user |
| <code>body</code> | <code>[IdentityInsightRequest](src/models/identity-insight-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getIdentityInsights(request)`

- **OnSuccess**: <code>[IdentityInsightResponse](src/models/identity-insight-response.ts)</code>
- **OnError**: throws <code>[Insights.GetIdentityInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getIdentityInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityInsightResponse, Insights.GetIdentityInsightsError&gt;</code>, with `result.value` of type <code>[IdentityInsightResponse](src/models/identity-insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInsightById(request: Insights.GetInsightByIdRequest, options?: RequestOptions): ApiPromise&lt;Insight, Insights.GetInsightByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific insight by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getInsightById({
    userId: "0a84e628-dad7-40f4-bbc0-abeb3ddd90ea",
    insightId: "54878d1a-295b-44c3-8f1e-402e68f912fe",
  });
  // TODO: Handle 'response' of type Insight
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetInsightByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getInsightById({
    userId: "0a84e628-dad7-40f4-bbc0-abeb3ddd90ea",
    insightId: "54878d1a-295b-44c3-8f1e-402e68f912fe",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Insight
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the user |
| <code>insightId</code> | <code>string</code> | The unique identifier of the insight (must be valid UUID format) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getInsightById(request)`

- **OnSuccess**: <code>[Insight](src/models/insight.ts)</code>
- **OnError**: throws <code>[Insights.GetInsightByIdError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getInsightById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Insight, Insights.GetInsightByIdError&gt;</code>, with `result.value` of type <code>[Insight](src/models/insight.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInsightType(request: Insights.GetInsightTypeRequest, options?: RequestOptions): ApiPromise&lt;InsightTypeItem, Insights.GetInsightTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the definition of a single supported CDR Insight type identified by `{typeId}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getInsightType({ typeId: TypeId.AccountVerification });
  // TODO: Handle 'response' of type InsightTypeItem
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetInsightTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.getInsightType({ typeId: TypeId.AccountVerification }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightTypeItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>typeId</code> | <code>[TypeId](src/models/type-id.ts)</code> | The Insight type identifier. Must be one of the supported enum values. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getInsightType(request)`

- **OnSuccess**: <code>[InsightTypeItem](src/models/insight-type-item.ts)</code>
- **OnError**: throws <code>[Insights.GetInsightTypeError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getInsightType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightTypeItem, Insights.GetInsightTypeError&gt;</code>, with `result.value` of type <code>[InsightTypeItem](src/models/insight-type-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInsightTypes(options?: RequestOptions): ApiPromise&lt;InsightTypesList, Insights.GetInsightTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of supported CDR Insight types and the Insight-specific input schema (`data`) each type expects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getInsightTypes();
  // TODO: Handle 'response' of type InsightTypesList
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetInsightTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.getInsightTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightTypesList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getInsightTypes()`

- **OnSuccess**: <code>[InsightTypesList](src/models/insight-types-list.ts)</code>
- **OnError**: throws <code>[Insights.GetInsightTypesError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getInsightTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightTypesList, Insights.GetInsightTypesError&gt;</code>, with `result.value` of type <code>[InsightTypesList](src/models/insight-types-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserInsights(request: Insights.ListUserInsightsRequest, options?: RequestOptions): ApiPromise&lt;InsightListResponse, Insights.ListUserInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of previously generated insights for the specified user. Supports filtering by creation date and insight type. Maximum 20 insights per page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.listUserInsights({
    userId: "0a84e628-dad7-40f4-bbc0-abeb3ddd90ea",
    filter: "created.gteq('2025-06-16')",
  });
  // TODO: Handle 'response' of type InsightListResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.ListUserInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .listUserInsights({ userId: "0a84e628-dad7-40f4-bbc0-abeb3ddd90ea", filter: "created.gteq('2025-06-16')" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the user |
| <code>filter?</code> | <code>string</code> | Filter parameter supporting multiple filter fields separated by commas. Supported fields: 'created' (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income, expense-ratio). Operators: gteq (>=), lteq (<=), gt (>), lt (<), eq (=), bt (between two dates). Examples: 'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')', 'insightType.eq('account')', 'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.listUserInsights(request)`

- **OnSuccess**: <code>[InsightListResponse](src/models/insight-list-response.ts)</code>
- **OnError**: throws <code>[Insights.ListUserInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.listUserInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightListResponse, Insights.ListUserInsightsError&gt;</code>, with `result.value` of type <code>[InsightListResponse](src/models/insight-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyIncomeInsight(request: Insights.VerifyIncomeInsightRequest, options?: RequestOptions): ApiPromise&lt;IncomeInsightResponse, Insights.VerifyIncomeInsightError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies if a user's income falls within a specified range. Returns a match result with confidence level based on the user's financial data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.verifyIncomeInsight({
    userId: "0a84e628-dad7-40f4-bbc0-abeb3ddd90ea",
    body: { income: { min: "1", max: "10000" } },
  });
  // TODO: Handle 'response' of type IncomeInsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.VerifyIncomeInsightError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .verifyIncomeInsight({
    userId: "0a84e628-dad7-40f4-bbc0-abeb3ddd90ea",
    body: { income: { min: "1", max: "10000" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeInsightResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the user |
| <code>body</code> | <code>[IncomeInsightRequest](src/models/income-insight-request.ts)</code> | Income range to verify against user's financial data |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.verifyIncomeInsight(request)`

- **OnSuccess**: <code>[IncomeInsightResponse](src/models/income-insight-response.ts)</code>
- **OnError**: throws <code>[Insights.VerifyIncomeInsightError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.verifyIncomeInsight(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeInsightResponse, Insights.VerifyIncomeInsightError&gt;</code>, with `result.value` of type <code>[IncomeInsightResponse](src/models/income-insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>getJobs(request: Jobs.GetJobsRequest, options?: RequestOptions): ApiPromise&lt;JobsResponse3, Jobs.GetJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of an existing job. You need only supply the unique job identifier that was returned upon job creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobs({ jobId: "some example string" });
  // TODO: Handle 'response' of type JobsResponse3
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.getJobs({ jobId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobsResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | The identifier of the job to be retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobs(request)`

- **OnSuccess**: <code>[JobsResponse3](src/models/unions/jobs-response3.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobsError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobsResponse3, Jobs.GetJobsError&gt;</code>, with `result.value` of type <code>[JobsResponse3](src/models/unions/jobs-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserJobs(request: Jobs.GetUserJobsRequest, options?: RequestOptions): ApiPromise&lt;UsersJobsResponse, Jobs.GetUserJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of all existing and previous jobs associated with a user.

**Note:** This endpoint only returns jobs that are less than 7 days old.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getUserJobs({ userId: "some example string" });
  // TODO: Handle 'response' of type UsersJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetUserJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.getUserJobs({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersJobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | User identifier |
| <code>filter?</code> | <code>string</code> | Connection identification filter. e.g. connection.id.eq('ab63cd') |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getUserJobs(request)`

- **OnSuccess**: <code>[UsersJobsResponse](src/models/users-jobs-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetUserJobsError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getUserJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersJobsResponse, Jobs.GetUserJobsError&gt;</code>, with `result.value` of type <code>[UsersJobsResponse](src/models/users-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postJobMfa(request: Jobs.PostJobMfaRequest, options?: RequestOptions): ApiPromise&lt;ConnectionResponseResource, Jobs.PostJobMfaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ensure that you generate an authentication token with
scope = CLIENT_ACCESS and basiq-version = 3.0 to create this resource

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.postJobMfa({
    jobId: "some example string",
    body: { mfaResponse: ["some example string"] },
  });
  // TODO: Handle 'response' of type ConnectionResponseResource
} catch (err) {
  // TODO: Handle 'err' of type Jobs.PostJobMfaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .postJobMfa({ jobId: "some example string", body: { mfaResponse: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionResponseResource
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | The identifier of the job. |
| <code>body</code> | <code>[JobsMfaRequest](src/models/jobs-mfa-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.postJobMfa(request)`

- **OnSuccess**: <code>[ConnectionResponseResource](src/models/connection-response-resource.ts)</code>
- **OnError**: throws <code>[Jobs.PostJobMfaError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.postJobMfa(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionResponseResource, Jobs.PostJobMfaError&gt;</code>, with `result.value` of type <code>[ConnectionResponseResource](src/models/connection-response-resource.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payees

> Source: [Payees](src/resources/payees.ts)

<details>
<summary><code>getPayeeDetails(request: Payees.GetPayeeDetailsRequest, options?: RequestOptions): ApiPromise&lt;PayeeDetailsResponse, Payees.GetPayeeDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves detailed information for a specific payee. The response includes type-specific details based on the payee type (domestic, biller, international, or digitalWallet).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payees.getPayeeDetails({
    userId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    payeeId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PayeeDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Payees.GetPayeeDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payees
  .getPayeeDetails({
    userId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    payeeId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayeeDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the user. |
| <code>payeeId</code> | <code>string</code> | The unique identifier of the payee. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payees.getPayeeDetails(request)`

- **OnSuccess**: <code>[PayeeDetailsResponse](src/models/payee-details-response.ts)</code>
- **OnError**: throws <code>[Payees.GetPayeeDetailsError](src/resources/payees.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payees.getPayeeDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayeeDetailsResponse, Payees.GetPayeeDetailsError&gt;</code>, with `result.value` of type <code>[PayeeDetailsResponse](src/models/payee-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayees(request: Payees.GetPayeesRequest, options?: RequestOptions): ApiPromise&lt;PayeesListResponse, Payees.GetPayeesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID, and creation date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payees.getPayees({
    userId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    limit: 25,
    filter: "type.eq('domestic')",
  });
  // TODO: Handle 'response' of type PayeesListResponse
} catch (err) {
  // TODO: Handle 'err' of type Payees.GetPayeesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payees
  .getPayees({ userId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", limit: 25, filter: "type.eq('domestic')" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayeesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the user. |
| <code>limit?</code> | <code>number</code> | The maximum number of payees to return per page. Valid values are 1-500. Default is 25.<br>**Default**: 25 |
| <code>filter?</code> | <code>string</code> | Filter expression to narrow down results. Supports the following filters:<br>- `type.eq('value')` - Filter by payee type (domestic, biller, international, digitalWallet)<br>- `connectionId.eq('value')` - Filter by connection ID<br>- `created.bt('startDate','endDate')` - Filter by creation date range<br>- `created.gt('date')` - Filter by creation date greater than<br>- `created.gteq('date')` - Filter by creation date greater than or equal<br>- `created.lt('date')` - Filter by creation date less than<br>- `created.lteq('date')` - Filter by creation date less than or equal<br>- `created.eq('date')` - Filter by creation date equal to |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payees.getPayees(request)`

- **OnSuccess**: <code>[PayeesListResponse](src/models/payees-list-response.ts)</code>
- **OnError**: throws <code>[Payees.GetPayeesError](src/resources/payees.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payees.getPayees(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayeesListResponse, Payees.GetPayeesError&gt;</code>, with `result.value` of type <code>[PayeesListResponse](src/models/payees-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>createreport(request: Reports.CreatereportRequest, options?: RequestOptions): ApiPromise&lt;ReportsResponse, Reports.CreatereportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a job will be returned to let you know the progress of the report generation.
You can poll the job to know when the report has been generated. You can create any supported report (see reportTypes for a list of supported reports). Ensure you provide the necessary filters when generating a report.
All created reports, will store a copy of the data as a snapshot - this ensures that you have access to the raw data that was used to create the report.
This API allows generating reports with various filters. The `filters` field in the report request enables you to specify parameters for customizing the report content.
> 📘 Note: The report title cannot be longer than 50 characters.

> 📘 **Reminder:** When Enrich data is updated, the transactions' Enrich results won’t automatically reflect these updates. To ensure your report reflects the latest Enrich data, purge and refresh connections before generating a new report.

### Filters
Filters are used to narrow down the data included in the report. The available filters are:
- `fromDate`: Specifies the start date for the report data (format: YYYY-MM-DD).
- `toDate`: Specifies the end date for the report data (format: YYYY-MM-DD).
- `accounts`: List of account IDs to include in the report.
- `users`: List of user IDs to include in the report.
- `includeMetrics`: List of metric codes to include in the report. Supported values are specific to the report type. Rules for `includeMetrics`:
- If the array is empty (`"value": []`), all metrics will be shown.
- If no filter is provided, all metrics will be shown.
- If an array of codes is provided, only these specific metrics will be shown.
- If the value is `null`, no metrics will be shown.

- `includeGroups`: List of group codes to include in the report. Supported values are specific to the report type. Rules for `includeGroups`:
- If the array is empty (`"value": []`), all groups will be shown.
- If no filter is provided, all groups will be shown.
- If an array of codes is provided, only these specific groups will be shown.
- If the value is `null`, no groups will be shown.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.createreport({
    body: {
      reportType: "some example string",
      title: "some example string",
      filters: [{ name: "some example string", value: "2024-01-15" }],
    },
  });
  // TODO: Handle 'response' of type ReportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.CreatereportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .createreport({
    body: {
      reportType: "some example string",
      title: "some example string",
      filters: [{ name: "some example string", value: "2024-01-15" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ReportsRequest](src/models/reports-request.ts)</code> | Include the details of the report you would like to create along with the filters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.createreport(request)`

- **OnSuccess**: <code>[ReportsResponse](src/models/reports-response.ts)</code>
- **OnError**: throws <code>[Reports.CreatereportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.createreport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportsResponse, Reports.CreatereportError&gt;</code>, with `result.value` of type <code>[ReportsResponse](src/models/reports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteReport(request: Reports.DeleteReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, Reports.DeleteReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a report and all associated snapshot data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.reports.deleteReport({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Reports.DeleteReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.deleteReport({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | The ID of the generated report |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.deleteReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Reports.DeleteReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.deleteReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Reports.DeleteReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReportTypes(options?: RequestOptions): ApiPromise&lt;ReportsTypesResponse, Reports.ListReportTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported reports, which can be used to create reports on.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.listReportTypes();
  // TODO: Handle 'response' of type ReportsTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.ListReportTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.listReportTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportsTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.listReportTypes()`

- **OnSuccess**: <code>[ReportsTypesResponse](src/models/reports-types-response.ts)</code>
- **OnError**: throws <code>[Reports.ListReportTypesError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.listReportTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportsTypesResponse, Reports.ListReportTypesError&gt;</code>, with `result.value` of type <code>[ReportsTypesResponse](src/models/reports-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listallreports(options?: RequestOptions): ApiPromise&lt;ReportsResponse2, Reports.ListallreportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported reports. reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.listallreports();
  // TODO: Handle 'response' of type ReportsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Reports.ListallreportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.listallreports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.listallreports()`

- **OnSuccess**: <code>[ReportsResponse2](src/models/reports-response2.ts)</code>
- **OnError**: throws <code>[Reports.ListallreportsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.listallreports().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportsResponse2, Reports.ListallreportsError&gt;</code>, with `result.value` of type <code>[ReportsResponse2](src/models/reports-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveReport(request: Reports.RetrieveReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Reports.RetrieveReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a specific report. Ensure you check the
documentation for the schema of each report type.

| Request Header | Description |
|----------------|-----------------------------------------------------------------------------|
| Accept | Specifies the format of the response. Use `application/pdf` |

If you want to generate the PDF, make sure to change `accept`
in the CURL request to `application/pdf` for PDF generation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.retrieveReport({ id: "some example string" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Reports.RetrieveReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.retrieveReport({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | The ID of the generated report |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.retrieveReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Reports.RetrieveReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.retrieveReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Reports.RetrieveReportError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveReportTransactions(request: Reports.RetrieveReportTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionsContainerObject, Reports.RetrieveReportTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve transactions belonging to the report identified by {reportId}.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.retrieveReportTransactions({ reportId: "some example string" });
  // TODO: Handle 'response' of type TransactionsContainerObject
} catch (err) {
  // TODO: Handle 'err' of type Reports.RetrieveReportTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .retrieveReportTransactions({ reportId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsContainerObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | The ID of the generated report |
| <code>filter?</code> | <code>string</code> | - account.id.eq('15a28893-e8c9-4441-a076-470195218738')<br>- transaction.postDate.bt('2022-10-01,2022-10-10')<br>- transaction.postDate.(eq\|gt\|lt\|gteq\|lteq)('2022-12-03T00:00:00Z')<br>- institution.id.eq('AU00001')<br>- connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe')<br>- transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c')<br>- transaction.direction.eq('credit')<br>- transaction.class.eq('transfer')<br>- transaction.status.eq('posted')<br><br>Transactions can be filtered based on date & datetime. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.retrieveReportTransactions(request)`

- **OnSuccess**: <code>[TransactionsContainerObject](src/models/transactions-container-object.ts)</code>
- **OnError**: throws <code>[Reports.RetrieveReportTransactionsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.retrieveReportTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsContainerObject, Reports.RetrieveReportTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionsContainerObject](src/models/transactions-container-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveSpecificReportType(request: Reports.RetrieveSpecificReportTypeRequest, options?: RequestOptions): ApiPromise&lt;ReportsTypesResponse, Reports.RetrieveSpecificReportTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a specific report type identified by {reportId}.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.retrieveSpecificReportType({ reportTypeId: "some example string" });
  // TODO: Handle 'response' of type ReportsTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.RetrieveSpecificReportTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .retrieveSpecificReportType({ reportTypeId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportsTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportTypeId</code> | <code>string</code> | The type of the report |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.retrieveSpecificReportType(request)`

- **OnSuccess**: <code>[ReportsTypesResponse](src/models/reports-types-response.ts)</code>
- **OnError**: throws <code>[Reports.RetrieveSpecificReportTypeError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.retrieveSpecificReportType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportsTypesResponse, Reports.RetrieveSpecificReportTypeError&gt;</code>, with `result.value` of type <code>[ReportsTypesResponse](src/models/reports-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Statements

> Source: [Statements](src/resources/statements.ts)

<details>
<summary><code>createStatement(request: Statements.CreateStatementRequest, options?: RequestOptions): ApiPromise&lt;UsersStatementsResponse, Statements.CreateStatementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new statement by uploading an official PDF bank statement or CSV file. The server will create a job that processes the following steps:
1. **verify-credentials**: Verify the file, validate the layout, and attempt to parse the statement.
2. **retrieve-accounts**: Retrieve the list of accounts and their details (account number, name, balances).
3. **retrieve-transactions**: Fetch the transactions for each account.

The status of each step can be checked by querying the Retrieve a job.

> Note that this function is not supported in sandbox environments (AU00000).

For CSV file format specifications, please contact our support team.

> 🚧
>
> Note that the time it takes to complete the processes above will vary depending on the volume of data along with the complexity of the bank statement. As a rough guide this entire process could take anywhere between 10 - 30 secs. Upload multiple statements in parallel to provide the best user experience

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statements.createStatement({
    userId: "some example string",
    institutionId: "some example string",
    statement: new Uint8Array(),
  });
  // TODO: Handle 'response' of type UsersStatementsResponse
} catch (err) {
  // TODO: Handle 'err' of type Statements.CreateStatementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statements
  .createStatement({
    userId: "some example string",
    institutionId: "some example string",
    statement: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersStatementsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the user |
| <code>institutionId</code> | <code>string</code> | The identifier of the institution to which the statement relates (e.g., "AU01001"). **Note**: Sandbox institutions (AU00000) do not support file uploads. |
| <code>statement</code> | <code>FileInput</code> | The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the file specification provided by Basiq. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statements.createStatement(request)`

- **OnSuccess**: <code>[UsersStatementsResponse](src/models/users-statements-response.ts)</code>
- **OnError**: throws <code>[Statements.CreateStatementError](src/resources/statements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statements.createStatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersStatementsResponse, Statements.CreateStatementError&gt;</code>, with `result.value` of type <code>[UsersStatementsResponse](src/models/users-statements-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/resources/transactions.ts)

<details>
<summary><code>getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise&lt;UsersTransactionsResponse, Transactions.GetTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing transaction

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransaction({
    userId: "some example string",
    transactionId: "some example string",
  });
  // TODO: Handle 'response' of type UsersTransactionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Transactions.GetTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .getTransaction({ userId: "some example string", transactionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersTransactionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user. |
| <code>transactionId</code> | <code>string</code> | The identifier of the transaction. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.getTransaction(request)`

- **OnSuccess**: <code>[UsersTransactionsResponse](src/models/users-transactions-response.ts)</code>
- **OnError**: throws <code>[Transactions.GetTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.getTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersTransactionsResponse, Transactions.GetTransactionError&gt;</code>, with `result.value` of type <code>[UsersTransactionsResponse](src/models/users-transactions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransactions(request: Transactions.GetTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionsContainerObjectConnectTransactionsApi, Transactions.GetTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all transactions belonging to a specified user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransactions({ userId: "some example string" });
  // TODO: Handle 'response' of type TransactionsContainerObjectConnectTransactionsApi
} catch (err) {
  // TODO: Handle 'err' of type Transactions.GetTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.getTransactions({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsContainerObjectConnectTransactionsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | User identifier. |
| <code>limit?</code> | <code>number</code> | This represents the maximum number of items that may be included in the response (maximum of 500). Note that by default 500 items are returned if this value is not specified.<br>**Default**: 500 |
| <code>filter?</code> | <code>string</code> | Transaction filters; connection.id, account.id, transaction.postDate, transaction.status, institution.id, transaction.direction, transaction.class |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.getTransactions(request)`

- **OnSuccess**: <code>[TransactionsContainerObjectConnectTransactionsApi](src/models/transactions-container-object-connect-transactions-api.ts)</code>
- **OnError**: throws <code>[Transactions.GetTransactionsError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.getTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsContainerObjectConnectTransactionsApi, Transactions.GetTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionsContainerObjectConnectTransactionsApi](src/models/transactions-container-object-connect-transactions-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>createUser(request: Users.CreateUserRequest, options?: RequestOptions): ApiPromise&lt;UserPostResponse, Users.CreateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Basiq user object

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.createUser({
    body: {
      email: "gavin@hooli.com",
      mobile: "+61410888666",
      firstName: "Gavin",
      middleName: "",
      lastName: "Belson",
    },
  });
  // TODO: Handle 'response' of type UserPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.CreateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .createUser({
    body: {
      email: "gavin@hooli.com",
      mobile: "+61410888666",
      firstName: "Gavin",
      middleName: "",
      lastName: "Belson",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserPostResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UsersRequest](src/models/users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.createUser(request)`

- **OnSuccess**: <code>[UserPostResponse](src/models/user-post-response.ts)</code>
- **OnError**: throws <code>[Users.CreateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.createUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserPostResponse, Users.CreateUserError&gt;</code>, with `result.value` of type <code>[UserPostResponse](src/models/user-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a user along with all of their associated connection details. All data associated with this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.deleteUser({ userId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Users.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.deleteUser({ userId: "some example string" }).asApiResult();
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
| <code>userId</code> | <code>string</code> | User identification. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deleteUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.DeleteUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.DeleteUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;UserGetResponse, Users.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({ userId: "some example string" });
  // TODO: Handle 'response' of type UserGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUser({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user to be retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser(request)`

- **OnSuccess**: <code>[UserGetResponse](src/models/user-get-response.ts)</code>
- **OnError**: throws <code>[Users.GetUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserGetResponse, Users.GetUserError&gt;</code>, with `result.value` of type <code>[UserGetResponse](src/models/user-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise&lt;UserPostResponse, Users.UpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateUser({ userId: "some example string", body: {} });
  // TODO: Handle 'response' of type UserPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.UpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.updateUser({ userId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserPostResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The identifier of the user to be retrieved. |
| <code>body</code> | <code>[UsersRequest1](src/models/users-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateUser(request)`

- **OnSuccess**: <code>[UserPostResponse](src/models/user-post-response.ts)</code>
- **OnError**: throws <code>[Users.UpdateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserPostResponse, Users.UpdateUserError&gt;</code>, with `result.value` of type <code>[UserPostResponse](src/models/user-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>addWebhook(request?: Webhooks.AddWebhookRequest, options?: RequestOptions): ApiPromise&lt;NotificationsWebhooksResponse, Webhooks.AddWebhookError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.addWebhook({
    body: {
      name: "My General Webhook",
      description: "Webhook to catch all events",
      url: "https://piper.com/basiq-messages/",
      subscribedEvents: ["user.created"],
    },
  });
  // TODO: Handle 'response' of type NotificationsWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.AddWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .addWebhook({
    body: {
      name: "My General Webhook",
      description: "Webhook to catch all events",
      url: "https://piper.com/basiq-messages/",
      subscribedEvents: ["user.created"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsWebhooksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[NotificationsWebhooksRequest](src/models/notifications-webhooks-request.ts)</code> | Webhook request object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.addWebhook(request)`

- **OnSuccess**: <code>[NotificationsWebhooksResponse](src/models/notifications-webhooks-response.ts)</code>
- **OnError**: throws <code>[Webhooks.AddWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.addWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsWebhooksResponse, Webhooks.AddWebhookError&gt;</code>, with `result.value` of type <code>[NotificationsWebhooksResponse](src/models/notifications-webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, Webhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooks.deleteWebhook({ webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" });
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .deleteWebhook({ webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
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
| <code>webhookId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Webhooks.DeleteWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: Webhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;NotificationsWebhooksResponse, Webhooks.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhook({ webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" });
  // TODO: Handle 'response' of type NotificationsWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getWebhook({ webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsWebhooksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhook(request)`

- **OnSuccess**: <code>[NotificationsWebhooksResponse](src/models/notifications-webhooks-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsWebhooksResponse, Webhooks.GetWebhookError&gt;</code>, with `result.value` of type <code>[NotificationsWebhooksResponse](src/models/notifications-webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhookMessage(request: Webhooks.GetWebhookMessageRequest, options?: RequestOptions): ApiPromise&lt;NotificationsWebhooksMessagesResponse1, Webhooks.GetWebhookMessageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhookMessage({
    webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    messageId: "some example string",
  });
  // TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getWebhookMessage({ webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", messageId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsWebhooksMessagesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | webhook Id |
| <code>messageId</code> | <code>string</code> | message Id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhookMessage(request)`

- **OnSuccess**: <code>[NotificationsWebhooksMessagesResponse1](src/models/notifications-webhooks-messages-response1.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookMessageError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhookMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsWebhooksMessagesResponse1, Webhooks.GetWebhookMessageError&gt;</code>, with `result.value` of type <code>[NotificationsWebhooksMessagesResponse1](src/models/notifications-webhooks-messages-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhookStats(request: Webhooks.GetWebhookStatsRequest, options?: RequestOptions): ApiPromise&lt;WebhookStats, Webhooks.GetWebhookStatsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhookStats({
    webhookId: "d408cfec-b881-43ee-b5bd-ccea64896ed4",
  });
  // TODO: Handle 'response' of type WebhookStats
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getWebhookStats({ webhookId: "d408cfec-b881-43ee-b5bd-ccea64896ed4" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookStats
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | webhook Id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhookStats(request)`

- **OnSuccess**: <code>[WebhookStats](src/models/webhook-stats.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookStatsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhookStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookStats, Webhooks.GetWebhookStatsError&gt;</code>, with `result.value` of type <code>[WebhookStats](src/models/webhook-stats.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAppWebhooks(options?: RequestOptions): ApiPromise&lt;NotificationsWebhooksResponse1, Webhooks.ListAppWebhooksError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listAppWebhooks();
  // TODO: Handle 'response' of type NotificationsWebhooksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListAppWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listAppWebhooks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsWebhooksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listAppWebhooks()`

- **OnSuccess**: <code>[NotificationsWebhooksResponse1](src/models/notifications-webhooks-response1.ts)</code>
- **OnError**: throws <code>[Webhooks.ListAppWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listAppWebhooks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsWebhooksResponse1, Webhooks.ListAppWebhooksError&gt;</code>, with `result.value` of type <code>[NotificationsWebhooksResponse1](src/models/notifications-webhooks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMessages(request: Webhooks.ListMessagesRequest, options?: RequestOptions): ApiPromise&lt;NotificationsWebhooksMessagesResponse, Webhooks.ListMessagesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listMessages({
    webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    limit: 10,
  });
  // TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .listMessages({ webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", limit: 10 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsWebhooksMessagesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | webhook Id |
| <code>limit?</code> | <code>number</code> | Maximum number of items included in the response. Max value = 500 and is the default value if this field is not provided |
| <code>filter?</code> | <code>string</code> | Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listMessages(request)`

- **OnSuccess**: <code>[NotificationsWebhooksMessagesResponse](src/models/notifications-webhooks-messages-response.ts)</code>
- **OnError**: throws <code>[Webhooks.ListMessagesError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsWebhooksMessagesResponse, Webhooks.ListMessagesError&gt;</code>, with `result.value` of type <code>[NotificationsWebhooksMessagesResponse](src/models/notifications-webhooks-messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testMessage(request?: Webhooks.TestMessageRequest, options?: RequestOptions): ApiPromise&lt;undefined, Webhooks.TestMessageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooks.testMessage({ body: { eventTypeId: "user.created", text: "My test message" } });
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.TestMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .testMessage({ body: { eventTypeId: "user.created", text: "My test message" } })
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
| <code>body?</code> | <code>[NotificationsMessagesTestRequest](src/models/notifications-messages-test-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.testMessage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Webhooks.TestMessageError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.testMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Webhooks.TestMessageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: Webhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;NotificationsWebhooksResponse, Webhooks.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.updateWebhook({
    webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    body: {
      name: "My General Webhook",
      description: "Webhook to catch all events",
      url: "https://piper.com/basiq-messages/",
      subscribedEvents: ["user.created"],
    },
  });
  // TODO: Handle 'response' of type NotificationsWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .updateWebhook({
    webhookId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    body: {
      name: "My General Webhook",
      description: "Webhook to catch all events",
      url: "https://piper.com/basiq-messages/",
      subscribedEvents: ["user.created"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsWebhooksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[NotificationsWebhooksRequest](src/models/notifications-webhooks-request.ts)</code> | Webhook request object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.updateWebhook(request)`

- **OnSuccess**: <code>[NotificationsWebhooksResponse](src/models/notifications-webhooks-response.ts)</code>
- **OnError**: throws <code>[Webhooks.UpdateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsWebhooksResponse, Webhooks.UpdateWebhookError&gt;</code>, with `result.value` of type <code>[NotificationsWebhooksResponse](src/models/notifications-webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BasiqError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

