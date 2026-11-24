# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BasiqClient](basiq/client.py)

## AccountsApi

> Source: [AccountsApi](basiq/apis/accounts_api.py)

<details>
<summary><code>def get_account(user_id: str, account_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccountResponseResource1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific account belonging to a user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.accounts_api.get_account("some example string", "some example string")
    # TODO: Handle 'response' of type AccountResponseResource1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts_api.get_account("some example string", "some example string")
    # TODO: Handle 'response' of type AccountResponseResource1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identifier |
| <code>account_id</code> | <code>str</code> | Account identifier |
| <code>filter_</code> | <code>str \| None</code> | Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is currently supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountResponseResource1](basiq/models/account_response_resource1.py)</code> -- Returns a account with details.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetAccountErrorBody](basiq/errors/get_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersAccounts400Error1](basiq/models/users_accounts400_error1.py)</code> |
| 403 | <code>[UsersAccounts403Error1](basiq/models/users_accounts403_error1.py)</code> |
| 404 | <code>[UsersAccounts404Error1](basiq/models/users_accounts404_error1.py)</code> |
| 500 | <code>[UsersAccounts500Error1](basiq/models/users_accounts500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_accounts(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> UsersAccountsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all accounts belonging to a user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.accounts_api.get_accounts("some example string")
    # TODO: Handle 'response' of type UsersAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts_api.get_accounts("some example string")
    # TODO: Handle 'response' of type UsersAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identifier |
| <code>filter_</code> | <code>str \| None</code> | Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is currently supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersAccountsResponse](basiq/models/users_accounts_response.py)</code> -- Returns a account with details.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetAccountsErrorBody](basiq/errors/get_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersAccounts400Error1](basiq/models/users_accounts400_error1.py)</code> |
| 403 | <code>[UsersAccounts403Error1](basiq/models/users_accounts403_error1.py)</code> |
| 404 | <code>[UsersAccounts404Error1](basiq/models/users_accounts404_error1.py)</code> |
| 500 | <code>[UsersAccounts500Error1](basiq/models/users_accounts500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](basiq/apis/analytics.py)

<details>
<summary><code>def get_connection_analytics(interval: IntervalOrStr, *, from_date: Date | None = None, to_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ConnectionAnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve connection analytics, including connection creation, status distribution, method distribution, and disruption rates over a given time interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.get_connection_analytics(Interval.DAILY)
    # TODO: Handle 'response' of type ConnectionAnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.get_connection_analytics(Interval.DAILY)
    # TODO: Handle 'response' of type ConnectionAnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>[IntervalOrStr](basiq/models/enums/interval.py)</code> | Time interval for analytics. |
| <code>from_date</code> | <code>Date \| None</code> | Start date of the analytics period (e.g., 2023-01-01).<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>Date \| None</code> | End date of the analytics period (e.g., 2024-01-01).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionAnalyticsResponse](basiq/models/connection_analytics_response.py)</code> -- Successful connection analytics response

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetConnectionAnalyticsErrorBody](basiq/errors/get_connection_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[ErrorList](basiq/models/error_list.py)</code> |
| 401, 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_analytics(interval: IntervalOrStr, *, from_date: Date | None = None, to_date: Date | None = None, connection_type: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve user analytics, such as number of users and connections created for an application over a given time interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.get_user_analytics(Interval.DAILY, connection_type="all,cdr,pdf,web,csv")
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.get_user_analytics(Interval.DAILY, connection_type="all,cdr,pdf,web,csv")
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>[IntervalOrStr](basiq/models/enums/interval.py)</code> | Time interval for analytics. |
| <code>from_date</code> | <code>Date \| None</code> | Start date of the analytics period (e.g., 2023-01-01).<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>Date \| None</code> | End date of the analytics period (e.g., 2024-01-01).<br>**Default**: <code>None</code> |
| <code>connection_type</code> | <code>str \| None</code> | Filter analytics by one or more connection types. Must be a comma-separated string. Values are case-sensitive: all, cdr, pdf, web, csv.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](basiq/models/analytics_response.py)</code> -- Successful analytics response

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetUserAnalyticsErrorBody](basiq/errors/get_user_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[ErrorList](basiq/models/error_list.py)</code> |
| 401, 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AuthLinks

> Source: [AuthLinks](basiq/apis/auth_links.py)

<details>
<summary><code>def delete_auth_link(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.auth_links.delete_auth_link("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAuthLinkErrorBody
```

**Async**

```python
try:
    await async_client.auth_links.delete_auth_link("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAuthLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[DeleteAuthLinkErrorBody](basiq/errors/delete_auth_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersAuthLink400Error1](basiq/models/users_auth_link400_error1.py)</code> |
| 401 | <code>[UsersAuthLink401Error1](basiq/models/users_auth_link401_error1.py)</code> |
| 404 | <code>[UsersAuthLink404Error1](basiq/models/users_auth_link404_error1.py)</code> |
| 500 | <code>[UsersAuthLink500Error1](basiq/models/users_auth_link500_error1.py)</code> |
| 503 | <code>[UsersAuthLink503Error1](basiq/models/users_auth_link503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_auth_link(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> UsersAuthLinkResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.auth_links.get_auth_link("some example string")
    # TODO: Handle 'response' of type UsersAuthLinkResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAuthLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.auth_links.get_auth_link("some example string")
    # TODO: Handle 'response' of type UsersAuthLinkResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAuthLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersAuthLinkResponse1](basiq/models/users_auth_link_response1.py)</code> -- Returns details of a connection.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetAuthLinkErrorBody](basiq/errors/get_auth_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersAuthLink400Error1](basiq/models/users_auth_link400_error1.py)</code> |
| 401 | <code>[UsersAuthLink401Error1](basiq/models/users_auth_link401_error1.py)</code> |
| 403 | <code>[UsersAuthLink403Error1](basiq/models/users_auth_link403_error1.py)</code> |
| 404 | <code>[UsersAuthLink404Error1](basiq/models/users_auth_link404_error1.py)</code> |
| 410 | <code>[UsersAuthLink410Error1](basiq/models/users_auth_link410_error1.py)</code> |
| 500 | <code>[UsersAuthLink500Error1](basiq/models/users_auth_link500_error1.py)</code> |
| 503 | <code>[UsersAuthLink503Error1](basiq/models/users_auth_link503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_auth_link(user_id: str, *, body: UsersAuthLinkRequest | UsersAuthLinkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UsersAuthLinkResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.

The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified, we will look up the mobile on the user object; if that is not specified either, you will get an error. If both are specified, the mobile number on the auth_link will take precedence.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.auth_links.post_auth_link("some example string")
    # TODO: Handle 'response' of type UsersAuthLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAuthLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.auth_links.post_auth_link("some example string")
    # TODO: Handle 'response' of type UsersAuthLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAuthLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UsersAuthLinkRequest](basiq/models/users_auth_link_request.py) \| [UsersAuthLinkRequestDict](basiq/models/users_auth_link_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersAuthLinkResponse](basiq/models/users_auth_link_response.py)</code> -- Returns a created auth_link resource, if the operation succeeded

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[PostAuthLinkErrorBody](basiq/errors/post_auth_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersAuthLink400Error1](basiq/models/users_auth_link400_error1.py)</code> |
| 401 | <code>[UsersAuthLink401Error1](basiq/models/users_auth_link401_error1.py)</code> |
| 403 | <code>[UsersAuthLink403Error1](basiq/models/users_auth_link403_error1.py)</code> |
| 404 | <code>[UsersAuthLink404Error1](basiq/models/users_auth_link404_error1.py)</code> |
| 500 | <code>[UsersAuthLink500Error1](basiq/models/users_auth_link500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](basiq/apis/authentication.py)

<details>
<summary><code>def post_token(basiq_version: str, *, scope: str | None = None, user_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authentication.post_token(
        "3.0", scope="CLIENT_ACCESS", user_id="6dd30ce4-d4ba-11ec-9d64-0242ac120002"
    )
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.authentication.post_token(
        "3.0", scope="CLIENT_ACCESS", user_id="6dd30ce4-d4ba-11ec-9d64-0242ac120002"
    )
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>basiq_version</code> | <code>str</code> | Value sent with the request. |
| <code>scope</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>user_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](basiq/models/token_response.py)</code> -- Return token object that will be used for Basiq API requests.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[PostTokenErrorBody](basiq/errors/post_token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Token400Error1](basiq/models/token400_error1.py)</code> |
| 404 | <code>[Token404Error1](basiq/models/token404_error1.py)</code> |
| 500 | <code>[Token500Error1](basiq/models/token500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](basiq/apis/connections.py)

<details>
<summary><code>def delete_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.connections.delete_connection("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteConnectionErrorBody
```

**Async**

```python
try:
    await async_client.connections.delete_connection("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>connection_id</code> | <code>str</code> | The identifier of the connection. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[DeleteConnectionErrorBody](basiq/errors/delete_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConnections400Error1](basiq/models/users_connections400_error1.py)</code> |
| 403 | <code>[UsersConnections403Error1](basiq/models/users_connections403_error1.py)</code> |
| 404 | <code>[UsersConnections404Error1](basiq/models/users_connections404_error1.py)</code> |
| 500 | <code>[UsersConnections500Error1](basiq/models/users_connections500_error1.py)</code> |
| 503 | <code>[UsersConnections503Error1](basiq/models/users_connections503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ConnectionGetResponseResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to retrieve details of a specific connection. Note that due to security the loginId, password, securityCode are never returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.connections.get_connection("some example string", "some example string")
    # TODO: Handle 'response' of type ConnectionGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.get_connection("some example string", "some example string")
    # TODO: Handle 'response' of type ConnectionGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>connection_id</code> | <code>str</code> | The identifier of the connection. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionGetResponseResource](basiq/models/connection_get_response_resource.py)</code> -- Returns details of a connection.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetConnectionErrorBody](basiq/errors/get_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConnections400Error1](basiq/models/users_connections400_error1.py)</code> |
| 401 | <code>[UsersConnections401Error1](basiq/models/users_connections401_error1.py)</code> |
| 403 | <code>[UsersConnections403Error1](basiq/models/users_connections403_error1.py)</code> |
| 404 | <code>[UsersConnections404Error1](basiq/models/users_connections404_error1.py)</code> |
| 500 | <code>[UsersConnections500Error1](basiq/models/users_connections500_error1.py)</code> |
| 503 | <code>[UsersConnections503Error1](basiq/models/users_connections503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_connections(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ConnectionsGetResponseResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.connections.get_connections("some example string")
    # TODO: Handle 'response' of type ConnectionsGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionsErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.get_connections("some example string")
    # TODO: Handle 'response' of type ConnectionsGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identifier. |
| <code>filter_</code> | <code>str \| None</code> | Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000')<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionsGetResponseResource](basiq/models/connections_get_response_resource.py)</code> -- Returns details of connections.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetConnectionsErrorBody](basiq/errors/get_connections_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConnections400Error1](basiq/models/users_connections400_error1.py)</code> |
| 403 | <code>[UsersConnections403Error1](basiq/models/users_connections403_error1.py)</code> |
| 404 | <code>[UsersConnections404Error1](basiq/models/users_connections404_error1.py)</code> |
| 500 | <code>[UsersConnections500Error1](basiq/models/users_connections500_error1.py)</code> |
| 503 | <code>[UsersConnections503Error1](basiq/models/users_connections503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purge_connection_data(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.connections.purge_connection_data("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurgeConnectionDataErrorBody
```

**Async**

```python
try:
    await async_client.connections.purge_connection_data("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurgeConnectionDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>connection_id</code> | <code>str</code> | The identifier of the connection. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[PurgeConnectionDataErrorBody](basiq/errors/purge_connection_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConnectionsPurge400Error1](basiq/models/users_connections_purge400_error1.py)</code> |
| 403 | <code>[UsersConnectionsPurge403Error1](basiq/models/users_connections_purge403_error1.py)</code> |
| 404 | <code>[UsersConnectionsPurge404Error1](basiq/models/users_connections_purge404_error1.py)</code> |
| 500 | <code>[UsersConnectionsPurge500Error1](basiq/models/users_connections_purge500_error1.py)</code> |
| 503 | <code>[UsersConnectionsPurge503Error1](basiq/models/users_connections_purge503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ConnectionResponseResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to refresh an existing connection. This will not return a new connection. Instead will return a job resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job resource to track the connections progress.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.connections.refresh_connection("some example string", "some example string")
    # TODO: Handle 'response' of type ConnectionResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshConnectionErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.refresh_connection("some example string", "some example string")
    # TODO: Handle 'response' of type ConnectionResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>connection_id</code> | <code>str</code> | The identifier of the connection. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionResponseResource](basiq/models/connection_response_resource.py)</code> -- Returns a created job resource, if the operation succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[RefreshConnectionErrorBody](basiq/errors/refresh_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConnectionsRefresh400Error1](basiq/models/users_connections_refresh400_error1.py)</code> |
| 403 | <code>[UsersConnectionsRefresh403Error1](basiq/models/users_connections_refresh403_error1.py)</code> |
| 404 | <code>[UsersConnectionsRefresh404Error1](basiq/models/users_connections_refresh404_error1.py)</code> |
| 500 | <code>[UsersConnectionsRefresh500Error1](basiq/models/users_connections_refresh500_error1.py)</code> |
| 503 | <code>[UsersConnectionsRefresh503Error1](basiq/models/users_connections_refresh503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_connections(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ConnectionsRefreshResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to refresh all connections belonging to the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.connections.refresh_connections("some example string")
    # TODO: Handle 'response' of type ConnectionsRefreshResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshConnectionsErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.refresh_connections("some example string")
    # TODO: Handle 'response' of type ConnectionsRefreshResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionsRefreshResource](basiq/models/connections_refresh_resource.py)</code> -- Returns a created jobs resource, if the operation succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[RefreshConnectionsErrorBody](basiq/errors/refresh_connections_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConnectionsRefresh400Error1](basiq/models/users_connections_refresh400_error1.py)</code> |
| 403 | <code>[UsersConnectionsRefresh403Error1](basiq/models/users_connections_refresh403_error1.py)</code> |
| 404 | <code>[UsersConnectionsRefresh404Error1](basiq/models/users_connections_refresh404_error1.py)</code> |
| 500 | <code>[UsersConnectionsRefresh500Error1](basiq/models/users_connections_refresh500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Connectors

> Source: [Connectors](basiq/apis/connectors.py)

<details>
<summary><code>def get_connector(connector_id: str, method: str, *, request_options: RequestOptionsOrDict | None = None) -> ConnectorsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOTE: This end point requires authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.connectors.get_connector("some example string", "some example string")
    # TODO: Handle 'response' of type ConnectorsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectorErrorBody
```

**Async**

```python
try:
    response = await async_client.connectors.get_connector("some example string", "some example string")
    # TODO: Handle 'response' of type ConnectorsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>connector_id</code> | <code>str</code> | Connector ID |
| <code>method</code> | <code>str</code> | Connector method |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectorsResponse1](basiq/models/connectors_response1.py)</code> -- Returns data of single connector.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetConnectorErrorBody](basiq/errors/get_connector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Connectors400Error1](basiq/models/connectors400_error1.py)</code> |
| 401 | <code>[Connectors401Error1](basiq/models/connectors401_error1.py)</code> |
| 404 | <code>[Connectors404Error1](basiq/models/connectors404_error1.py)</code> |
| 500 | <code>[Connectors500Error1](basiq/models/connectors500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_connectors(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ConnectorsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOTE: This end point requires authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.connectors.get_connectors()
    # TODO: Handle 'response' of type ConnectorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectorsErrorBody
```

**Async**

```python
try:
    response = await async_client.connectors.get_connectors()
    # TODO: Handle 'response' of type ConnectorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | Filter parameter can be used to filter connector list by connector property. This parameter should contain a comma-separated list of filter statements.</br><br>A filter statement is composed of the entity name (in this case, it is always 'connector'), the property name (e.g., 'stage'), the filter operator (e.g., 'eq'), and the quoted string value in parentheses (e.g., "('live')").</br><br>The following list of regular expressions describes acceptable filter statements:</br><br>• (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)</br><br>• (connector).(method).(eq)\(('web'\|\|'open-banking'\|'pdf'\|'csv')\)</br><br>• (connector).(status).(eq\|ne)\(('operational'\|'degraded-performance'\|'partial-outage'\|'major-outage'\|'under-maintenance')\)</br><br>• (connector).(status).(in)\(([\w\W]+)\)</br><br>• (connector).(stage).(eq\|ne)\(('live'\|'beta'\|'alpha')\)</br><br>• (connector).(stage).(in)\(([\w\W]+)\)</br><br>• (connector).(scopes).(in\|eq\|ne)\(([\w\W]+)\)</br><br>• (connector).(institution).(country).(eq\|ne)\(('Australia'\|'New Zealand')\)</br><br>• (connector).(institution).(country).(in)\(([\w\W]+)\)</br><br>• (connector).(institution).(tier).(eq\|ne)\(('1'\|'2'\|'3'\|'4')\)</br><br>• (connector).(institution).(tier).(in)\(([\W\d]+)\)</br><br>• (connector).(institution).(type).(eq\|ne)\(('Bank'\|'Bank (Foreign)'\|'Test Bank'\|'Credit Union'\|'Financial Services'\|'Superannuation')\)</br><br>• (connector).(authorization).(type).(eq\|ne)\(('user'\|'user-mfa'\|'user-mfa-intermittent'\|'other'\|'token')\)</br><br>• (connector).(authorization).(type).(in)\(([\w\W]+)\)</br><br>• (connector).(connectorEngine).(eq\|ne)\(('chrome'\|'node')\)</br><br>Multiple filter definitions should be separated with a comma (,).</br><br>For example, this filter statement will keep only live tier 1 and tier 2 institutions: filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')</br><br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectorsResponse](basiq/models/connectors_response.py)</code> -- Returns data of single connector.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetConnectorsErrorBody](basiq/errors/get_connectors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Connectors400Error1](basiq/models/connectors400_error1.py)</code> |
| 401 | <code>[Connectors401Error1](basiq/models/connectors401_error1.py)</code> |
| 404 | <code>[Connectors404Error1](basiq/models/connectors404_error1.py)</code> |
| 500 | <code>[Connectors500Error1](basiq/models/connectors500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Consents

> Source: [Consents](basiq/apis/consents.py)

<details>
<summary><code>def delete_consent(user_id: str, consent_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a users consent, this action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.consents.delete_consent("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteConsentErrorBody
```

**Async**

```python
try:
    await async_client.consents.delete_consent("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteConsentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identification. |
| <code>consent_id</code> | <code>str</code> | Consent identification. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[DeleteConsentErrorBody](basiq/errors/delete_consent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConsents400Error1](basiq/models/users_consents400_error1.py)</code> |
| 401 | <code>[UsersConsents401Error1](basiq/models/users_consents401_error1.py)</code> |
| 403 | <code>[UsersConsents403Error1](basiq/models/users_consents403_error1.py)</code> |
| 404 | <code>[UsersConsents404Error1](basiq/models/users_consents404_error1.py)</code> |
| 500 | <code>[UsersConsents500Error1](basiq/models/users_consents500_error1.py)</code> |
| 503 | <code>[UsersConsents503Error1](basiq/models/users_consents503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_consents(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> UsersConsentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of the user consents

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.consents.get_consents("some example string")
    # TODO: Handle 'response' of type UsersConsentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConsentsErrorBody
```

**Async**

```python
try:
    response = await async_client.consents.get_consents("some example string")
    # TODO: Handle 'response' of type UsersConsentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConsentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersConsentsResponse](basiq/models/users_consents_response.py)</code> -- Returns a list of user consents if they exist.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetConsentsErrorBody](basiq/errors/get_consents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersConsents400Error1](basiq/models/users_consents400_error1.py)</code> |
| 401 | <code>[UsersConsents401Error1](basiq/models/users_consents401_error1.py)</code> |
| 403 | <code>[UsersConsents403Error1](basiq/models/users_consents403_error1.py)</code> |
| 404 | <code>[UsersConsents404Error1](basiq/models/users_consents404_error1.py)</code> |
| 500 | <code>[UsersConsents500Error1](basiq/models/users_consents500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EnrichApi

> Source: [EnrichApi](basiq/apis/enrich_api.py)

<details>
<summary><code>def enrich(q: str, institution: str, country: str, *, mcc: str | None = None, account_type: str | None = None, amount: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EnrichResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Enrich resource enables you to retrieve details by passing in a search query containing a bank transaction description. The service enriches transaction data with multiple attributes, returning a transaction classification and three metadata components. The transaction classification will first determine if the transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant information, purchase location and prescribes an industry standard categorisation for each payment transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrich_api.enrich("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type EnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichErrorBody
```

**Async**

```python
try:
    response = await async_client.enrich_api.enrich("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type EnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | This is the search string that is used to lookup the entity (merchant) information.<br>``**q=garfish%20MANLY%20NS**&country=AU&institution=AU06703`` |
| <code>institution</code> | <code>str</code> | Identifies the institution from where the transaction was derived. This must be a Basiq recognisable institution ID.<br>``enrich?METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&amount=-12.95&**institution=AU04301**`` |
| <code>country</code> | <code>str</code> | Specifies the country the search should be narrowed down to. Passing in a country value will limit the search to the specified country. The country must be in ISO 3166 Alpha-2 format<br>``q=garfish%20MANLY%20NS&**country=AU**&institution=AU06703`` |
| <code>mcc</code> | <code>str \| None</code> | Merchant classification code as defined by Visa and Mastercard<br>``q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**mcc=3299**``<br>**Default**: <code>None</code> |
| <code>account_type</code> | <code>str \| None</code> | The Account type from which the transaction was derived.<br>``METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&institution=AU04301``<br>**Valid values:**<br>- `transaction` - `credit-card` - `savings` - `mortgage` - `loan` - `foreign`<br>**Default**: <code>None</code> |
| <code>amount</code> | <code>str \| None</code> | The dollar/cent amount relevant to the transaction.<br>``q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**amount=-12.95**``<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnrichResponse](basiq/models/enrich_response.py)</code> -- The enrich endpoint will always return a 200 response to the user, along with a set of results for each of the datasets subscribed to: category, entity and location. If no results are found for the search query then an empty result set is returned. If parameter inputs are invalid an error is returned.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[EnrichErrorBody](basiq/errors/enrich_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Enrich400Error1](basiq/models/enrich400_error1.py)</code> |
| 403 | <code>[Enrich403Error1](basiq/models/enrich403_error1.py)</code> |
| 500 | <code>[Enrich500Error1](basiq/models/enrich500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_merchant_by_id(merchant_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> SingleMerchantResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single merchant's details using its unique ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrich_api.get_merchant_by_id(UUID("c1ef352e-c807-4bdc-9a70-887f7cc17426"))
    # TODO: Handle 'response' of type SingleMerchantResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMerchantByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.enrich_api.get_merchant_by_id(UUID("c1ef352e-c807-4bdc-9a70-887f7cc17426"))
    # TODO: Handle 'response' of type SingleMerchantResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMerchantByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchant_id</code> | <code>UUID</code> | The unique identifier of the merchant. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SingleMerchantResponse](basiq/models/single_merchant_response.py)</code> -- Successful response with a single merchant's detailed data.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetMerchantByIdErrorBody](basiq/errors/get_merchant_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[MerchantNotFoundError](basiq/models/merchant_not_found_error.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def merchant_search(*, abn: str | None = None, merchant_name: str | None = None, suburb: str | None = None, entity_type: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MerchantsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves merchant details. At least one of `abn` or `merchantName` is required for a successful search. Optional filters for suburb and entity type can also be applied.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrich_api.merchant_search(
        abn="38865358328", merchant_name="coles", suburb="Ryde", entity_type="Individual/Sole Trader"
    )
    # TODO: Handle 'response' of type MerchantsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.enrich_api.merchant_search(
        abn="38865358328", merchant_name="coles", suburb="Ryde", entity_type="Individual/Sole Trader"
    )
    # TODO: Handle 'response' of type MerchantsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>abn</code> | <code>str \| None</code> | The Australian Business Number (ABN) of the merchant. Required if `merchantName` is not provided.<br>**Default**: <code>None</code> |
| <code>merchant_name</code> | <code>str \| None</code> | The name of the merchant. Required if `abn` is not provided.<br>**Default**: <code>None</code> |
| <code>suburb</code> | <code>str \| None</code> | The suburb of the merchant location to filter by.<br>**Default**: <code>None</code> |
| <code>entity_type</code> | <code>str \| None</code> | The type of the merchant entity to filter by.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MerchantsResponse](basiq/models/merchants_response.py)</code> -- Successful response with merchant data.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[RawError](basiq/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](basiq/apis/events.py)

<details>
<summary><code>def get_event_type_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EventsTypesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single event type based on the parameter input.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.get_event_type_by_id("user.created")
    # TODO: Handle 'response' of type EventsTypesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEventTypeByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.events.get_event_type_by_id("user.created")
    # TODO: Handle 'response' of type EventsTypesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEventTypeByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsTypesResponse1](basiq/models/events_types_response1.py)</code> -- OK

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetEventTypeByIdErrorBody](basiq/errors/get_event_type_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[EventsTypes400Error1](basiq/models/events_types400_error1.py)</code> |
| 401 | <code>[EventsTypes401Error1](basiq/models/events_types401_error1.py)</code> |
| 403 | <code>[EventsTypes403Error1](basiq/models/events_types403_error1.py)</code> |
| 404 | <code>[EventsTypes404Error1](basiq/models/events_types404_error1.py)</code> |
| 429 | <code>[EventsTypes429Error1](basiq/models/events_types429_error1.py)</code> |
| 500 | <code>[EventsTypes500Error1](basiq/models/events_types500_error1.py)</code> |
| 503 | <code>[EventsTypes503Error1](basiq/models/events_types503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_events(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EventsGetResponseResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all events that have taken place.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.get_events(filter_="user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)")
    # TODO: Handle 'response' of type EventsGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.events.get_events(
        filter_="user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)"
    )
    # TODO: Handle 'response' of type EventsGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | Retrieves the details of all events associated with a user.<br><br>**Note:** This endpoint only returns events that happened in the last 7 days.<br><br>**Filtering Options:**<br>- `userId`: User ID for the specific user you wish to retrieve events for. e.g., `user.id.eq(userId)`<br>- `entity`: Filter events by entity type. e.g., `event.entity.eq(entity)`<br>- `type`: Filter events by event type. e.g., `event.type.eq(type)`<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsGetResponseResource](basiq/models/events_get_response_resource.py)</code> -- Returns details of events.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetEventsErrorBody](basiq/errors/get_events_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Events400Error1](basiq/models/events400_error1.py)</code> |
| 401 | <code>[Events401Error1](basiq/models/events401_error1.py)</code> |
| 403 | <code>[Events403Error1](basiq/models/events403_error1.py)</code> |
| 404 | <code>[Events404Error1](basiq/models/events404_error1.py)</code> |
| 500 | <code>[Events500Error1](basiq/models/events500_error1.py)</code> |
| 503 | <code>[Events503Error1](basiq/models/events503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_type_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EventsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single event type based on the parameter input.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.get_type_by_id("a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b")
    # TODO: Handle 'response' of type EventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTypeByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.events.get_type_by_id(
        "a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b"
    )
    # TODO: Handle 'response' of type EventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTypeByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsResponse](basiq/models/events_response.py)</code> -- Returns the ID of an event.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetTypeByIdErrorBody](basiq/errors/get_type_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Events400Error21](basiq/models/events400_error21.py)</code> |
| 401 | <code>[Events401Error21](basiq/models/events401_error21.py)</code> |
| 403 | <code>[Events403Error21](basiq/models/events403_error21.py)</code> |
| 404 | <code>[Events404Error21](basiq/models/events404_error21.py)</code> |
| 429 | <code>[Events429Error1](basiq/models/events429_error1.py)</code> |
| 500 | <code>[Events500Error21](basiq/models/events500_error21.py)</code> |
| 503 | <code>[Events503Error21](basiq/models/events503_error21.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_event_types(*, request_options: RequestOptionsOrDict | None = None) -> EventsTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of event types.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.list_event_types()
    # TODO: Handle 'response' of type EventsTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.events.list_event_types()
    # TODO: Handle 'response' of type EventsTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsTypesResponse](basiq/models/events_types_response.py)</code> -- OK

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[ListEventTypesErrorBody](basiq/errors/list_event_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[EventsTypes401Error1](basiq/models/events_types401_error1.py)</code> |
| 403 | <code>[EventsTypes403Error1](basiq/models/events_types403_error1.py)</code> |
| 429 | <code>[EventsTypes429Error1](basiq/models/events_types429_error1.py)</code> |
| 500 | <code>[EventsTypes500Error1](basiq/models/events_types500_error1.py)</code> |
| 503 | <code>[EventsTypes503Error1](basiq/models/events_types503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Expenses

> Source: [Expenses](basiq/apis/expenses.py)

<details>
<summary><code>def get_expenses(user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ExpensesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing expense summary for a specific user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.expenses.get_expenses("some example string", "some example string")
    # TODO: Handle 'response' of type ExpensesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpensesErrorBody
```

**Async**

```python
try:
    response = await async_client.expenses.get_expenses("some example string", "some example string")
    # TODO: Handle 'response' of type ExpensesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpensesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>snapshot_id</code> | <code>str</code> | The identifier of the expense summary to be retrieved. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExpensesResponse](basiq/models/expenses_response.py)</code> -- Returns a saved expenses resource, if the operation succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetExpensesErrorBody](basiq/errors/get_expenses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersExpenses400Error1](basiq/models/users_expenses400_error1.py)</code> |
| 403 | <code>[UsersExpenses403Error1](basiq/models/users_expenses403_error1.py)</code> |
| 404 | <code>[UsersExpenses404Error1](basiq/models/users_expenses404_error1.py)</code> |
| 500 | <code>[UsersExpenses500Error1](basiq/models/users_expenses500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_expenses(user_id: str, *, body: UsersExpensesRequest | UsersExpensesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ExpensesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new expense summary for a user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.expenses.post_expenses("some example string")
    # TODO: Handle 'response' of type ExpensesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostExpensesErrorBody
```

**Async**

```python
try:
    response = await async_client.expenses.post_expenses("some example string")
    # TODO: Handle 'response' of type ExpensesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostExpensesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>body</code> | <code>[UsersExpensesRequest](basiq/models/users_expenses_request.py) \| [UsersExpensesRequestDict](basiq/models/users_expenses_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExpensesResponse](basiq/models/expenses_response.py)</code> -- Returns a created expenses resource, if the operation succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[PostExpensesErrorBody](basiq/errors/post_expenses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersExpenses400Error1](basiq/models/users_expenses400_error1.py)</code> |
| 403 | <code>[UsersExpenses403Error1](basiq/models/users_expenses403_error1.py)</code> |
| 404 | <code>[UsersExpenses404Error1](basiq/models/users_expenses404_error1.py)</code> |
| 500 | <code>[UsersExpenses500Error1](basiq/models/users_expenses500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Identities

> Source: [Identities](basiq/apis/identities.py)

<details>
<summary><code>def get_user_identities(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> IdentitiesGetResponseResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list with a data property that contains an array of user identities. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.identities.get_user_identities("some example string")
    # TODO: Handle 'response' of type IdentitiesGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserIdentitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.identities.get_user_identities("some example string")
    # TODO: Handle 'response' of type IdentitiesGetResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserIdentitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identifier. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdentitiesGetResponseResource](basiq/models/identities_get_response_resource.py)</code> -- Returns list of identities.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetUserIdentitiesErrorBody](basiq/errors/get_user_identities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersIdentities400Error1](basiq/models/users_identities400_error1.py)</code> |
| 403 | <code>[UsersIdentities403Error1](basiq/models/users_identities403_error1.py)</code> |
| 500 | <code>[UsersIdentities500Error1](basiq/models/users_identities500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_identity(user_id: str, identity_id: str, *, request_options: RequestOptionsOrDict | None = None) -> UsersIdentitiesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific identity object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.identities.get_user_identity("some example string", "some example string")
    # TODO: Handle 'response' of type UsersIdentitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserIdentityErrorBody
```

**Async**

```python
try:
    response = await async_client.identities.get_user_identity("some example string", "some example string")
    # TODO: Handle 'response' of type UsersIdentitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserIdentityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identifier. |
| <code>identity_id</code> | <code>str</code> | Identity identifier. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersIdentitiesResponse](basiq/models/users_identities_response.py)</code> -- Returns identity.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetUserIdentityErrorBody](basiq/errors/get_user_identity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersIdentities400Error1](basiq/models/users_identities400_error1.py)</code> |
| 403 | <code>[UsersIdentities403Error1](basiq/models/users_identities403_error1.py)</code> |
| 404 | <code>[UsersIdentities404Error1](basiq/models/users_identities404_error1.py)</code> |
| 500 | <code>[UsersIdentities500Error1](basiq/models/users_identities500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IncomeApi

> Source: [IncomeApi](basiq/apis/income_api.py)

<details>
<summary><code>def get_income(user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> IncomeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing income summary for a specific user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.income_api.get_income("some example string", "some example string")
    # TODO: Handle 'response' of type IncomeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIncomeErrorBody
```

**Async**

```python
try:
    response = await async_client.income_api.get_income("some example string", "some example string")
    # TODO: Handle 'response' of type IncomeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIncomeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>snapshot_id</code> | <code>str</code> | The identifier of the income summary to be retrieved. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeResponse](basiq/models/income_response.py)</code> -- Returns a saved income resource, if the operation succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetIncomeErrorBody](basiq/errors/get_income_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersIncome400Error1](basiq/models/users_income400_error1.py)</code> |
| 403 | <code>[UsersIncome403Error1](basiq/models/users_income403_error1.py)</code> |
| 404 | <code>[UsersIncome404Error1](basiq/models/users_income404_error1.py)</code> |
| 500 | <code>[UsersIncome500Error1](basiq/models/users_income500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_income(user_id: str, *, body: UsersIncomeRequest | UsersIncomeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> IncomeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an income summary for a specific user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.income_api.post_income("some example string")
    # TODO: Handle 'response' of type IncomeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostIncomeErrorBody
```

**Async**

```python
try:
    response = await async_client.income_api.post_income("some example string")
    # TODO: Handle 'response' of type IncomeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostIncomeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>body</code> | <code>[UsersIncomeRequest](basiq/models/users_income_request.py) \| [UsersIncomeRequestDict](basiq/models/users_income_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeResponse](basiq/models/income_response.py)</code> -- Returns a created income resource, if the operation succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[PostIncomeErrorBody](basiq/errors/post_income_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersIncome400Error1](basiq/models/users_income400_error1.py)</code> |
| 403 | <code>[UsersIncome403Error1](basiq/models/users_income403_error1.py)</code> |
| 404 | <code>[UsersIncome404Error1](basiq/models/users_income404_error1.py)</code> |
| 500 | <code>[UsersIncome500Error1](basiq/models/users_income500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](basiq/apis/insights.py)

<details>
<summary><code>def create_insight(body: PostInsightsRequest | PostInsightsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PostInsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION, BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created referencing all users. The self link in the response uses the first userId from the users array.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.create_insight(
        PostInsightsRequest(
            users=[UUID("a9242681-8c49-434c-9eeb-e011fba2a0cc")],
            type_=TypeInsightsApi.IDENTITY_VERIFICATION,
            data=IdentityVerificationData(
                name="Jane Doe", email="jane@example.com", phone="+61400000000", address="123 Main St, Sydney NSW 2000"
            ),
        ),
    )
    # TODO: Handle 'response' of type PostInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInsightErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.create_insight(
        PostInsightsRequest(
            users=[UUID("a9242681-8c49-434c-9eeb-e011fba2a0cc")],
            type_=TypeInsightsApi.IDENTITY_VERIFICATION,
            data=IdentityVerificationData(
                name="Jane Doe", email="jane@example.com", phone="+61400000000", address="123 Main St, Sydney NSW 2000"
            ),
        ),
    )
    # TODO: Handle 'response' of type PostInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInsightErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PostInsightsRequest](basiq/models/post_insights_request.py) \| [PostInsightsRequestDict](basiq/models/post_insights_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostInsightsResponse](basiq/models/post_insights_response.py)</code> -- Successfully created insight

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[CreateInsightErrorBody](basiq/errors/create_insight_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_account_insights(user_id: UUID, body: UsersInsightsAccountRequest | UsersInsightsAccountRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AccountInsightResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve account insights for a specific user based on account number

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_account_insights(
        UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), UsersInsightsAccountRequest(account_number="some example string")
    )
    # TODO: Handle 'response' of type AccountInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_account_insights(
        UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), UsersInsightsAccountRequest(account_number="some example string")
    )
    # TODO: Handle 'response' of type AccountInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | The unique identifier for the user |
| <code>body</code> | <code>[UsersInsightsAccountRequest](basiq/models/users_insights_account_request.py) \| [UsersInsightsAccountRequestDict](basiq/models/users_insights_account_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountInsightResponse](basiq/models/account_insight_response.py)</code> -- Successfully retrieved account insights

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetAccountInsightsErrorBody](basiq/errors/get_account_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_balance_insights(user_id: UUID, body: BalanceInsightRequest | BalanceInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BalanceInsightResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_balance_insights(
        UUID("2fc2691d-a6e5-4d1d-9748-c3b217ad76b0"), BalanceInsightRequest(balance=Balance2(min="1"))
    )
    # TODO: Handle 'response' of type BalanceInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBalanceInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_balance_insights(
        UUID("2fc2691d-a6e5-4d1d-9748-c3b217ad76b0"), BalanceInsightRequest(balance=Balance2(min="1"))
    )
    # TODO: Handle 'response' of type BalanceInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBalanceInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | Unique identifier for the user |
| <code>body</code> | <code>[BalanceInsightRequest](basiq/models/balance_insight_request.py) \| [BalanceInsightRequestDict](basiq/models/balance_insight_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceInsightResponse](basiq/models/balance_insight_response.py)</code> -- Successfully retrieved balance insights

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetBalanceInsightsErrorBody](basiq/errors/get_balance_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_expense_ratio_insights(user_id: UUID, body: ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ExpenseRatioInsightResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate and return the expense-to-income ratio.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_expense_ratio_insights(
        UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), ExpenseRatioInsightRequest(expense="2500")
    )
    # TODO: Handle 'response' of type ExpenseRatioInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpenseRatioInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_expense_ratio_insights(
        UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), ExpenseRatioInsightRequest(expense="2500")
    )
    # TODO: Handle 'response' of type ExpenseRatioInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpenseRatioInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | The unique identifier for the user |
| <code>body</code> | <code>[ExpenseRatioInsightRequest](basiq/models/expense_ratio_insight_request.py) \| [ExpenseRatioInsightRequestDict](basiq/models/expense_ratio_insight_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExpenseRatioInsightResponse](basiq/models/expense_ratio_insight_response.py)</code> -- Successfully retrieved expense ratio insights

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetExpenseRatioInsightsErrorBody](basiq/errors/get_expense_ratio_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_identity_insights(user_id: UUID, body: IdentityInsightRequest | IdentityInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> IdentityInsightResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email, address).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_identity_insights(
        UUID("321ac6df-beec-435b-a93e-678fe919badc"),
        IdentityInsightRequest(name="jared Dunn", phone="", email="", address=""),
    )
    # TODO: Handle 'response' of type IdentityInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIdentityInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_identity_insights(
        UUID("321ac6df-beec-435b-a93e-678fe919badc"),
        IdentityInsightRequest(name="jared Dunn", phone="", email="", address=""),
    )
    # TODO: Handle 'response' of type IdentityInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIdentityInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | Unique identifier for the user |
| <code>body</code> | <code>[IdentityInsightRequest](basiq/models/identity_insight_request.py) \| [IdentityInsightRequestDict](basiq/models/identity_insight_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdentityInsightResponse](basiq/models/identity_insight_response.py)</code> -- Successfully retrieved identity insights

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetIdentityInsightsErrorBody](basiq/errors/get_identity_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_insight_by_id(user_id: UUID, insight_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Insight</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific insight by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_insight_by_id(
        UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), UUID("54878d1a-295b-44c3-8f1e-402e68f912fe")
    )
    # TODO: Handle 'response' of type Insight
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_insight_by_id(
        UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), UUID("54878d1a-295b-44c3-8f1e-402e68f912fe")
    )
    # TODO: Handle 'response' of type Insight
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | The unique identifier of the user |
| <code>insight_id</code> | <code>UUID</code> | The unique identifier of the insight (must be valid UUID format) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Insight](basiq/models/insight.py)</code> -- Successful response with insight details

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetInsightByIdErrorBody](basiq/errors/get_insight_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_insight_type(type_id: TypeIdOrStr, *, request_options: RequestOptionsOrDict | None = None) -> InsightTypeItem</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the definition of a single supported CDR Insight type identified by `{typeId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_insight_type(TypeId.ACCOUNT_VERIFICATION)
    # TODO: Handle 'response' of type InsightTypeItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_insight_type(TypeId.ACCOUNT_VERIFICATION)
    # TODO: Handle 'response' of type InsightTypeItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_id</code> | <code>[TypeIdOrStr](basiq/models/enums/type_id.py)</code> | The Insight type identifier. Must be one of the supported enum values. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightTypeItem](basiq/models/insight_type_item.py)</code> -- Successfully retrieved Insight type definition

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetInsightTypeErrorBody](basiq/errors/get_insight_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_insight_types(*, request_options: RequestOptionsOrDict | None = None) -> InsightTypesList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of supported CDR Insight types and the Insight-specific input schema (`data`) each type expects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_insight_types()
    # TODO: Handle 'response' of type InsightTypesList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_insight_types()
    # TODO: Handle 'response' of type InsightTypesList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightTypesList](basiq/models/insight_types_list.py)</code> -- Successfully retrieved list of supported Insight types

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetInsightTypesErrorBody](basiq/errors/get_insight_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_user_insights(user_id: UUID, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InsightListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of previously generated insights for the specified user. Supports filtering by creation date and insight type. Maximum 20 insights per page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.list_user_insights(
        UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), filter_="created.gteq('2025-06-16')"
    )
    # TODO: Handle 'response' of type InsightListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUserInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.list_user_insights(
        UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), filter_="created.gteq('2025-06-16')"
    )
    # TODO: Handle 'response' of type InsightListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUserInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | The unique identifier of the user |
| <code>filter_</code> | <code>str \| None</code> | Filter parameter supporting multiple filter fields separated by commas. Supported fields: 'created' (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income, expense-ratio). Operators: gteq (>=), lteq (<=), gt (>), lt (<), eq (=), bt (between two dates). Examples: 'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')', 'insightType.eq('account')', 'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')'<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightListResponse](basiq/models/insight_list_response.py)</code> -- Successful response with list of insights

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[ListUserInsightsErrorBody](basiq/errors/list_user_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def verify_income_insight(user_id: UUID, body: IncomeInsightRequest | IncomeInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> IncomeInsightResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies if a user's income falls within a specified range. Returns a match result with confidence level based on the user's financial data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.verify_income_insight(
        UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), IncomeInsightRequest(income=Income(min="1", max="10000"))
    )
    # TODO: Handle 'response' of type IncomeInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyIncomeInsightErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.verify_income_insight(
        UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), IncomeInsightRequest(income=Income(min="1", max="10000"))
    )
    # TODO: Handle 'response' of type IncomeInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyIncomeInsightErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | The unique identifier of the user |
| <code>body</code> | <code>[IncomeInsightRequest](basiq/models/income_insight_request.py) \| [IncomeInsightRequestDict](basiq/models/income_insight_request.py)</code> | Income range to verify against user's financial data |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeInsightResponse](basiq/models/income_insight_response.py)</code> -- Income insight successfully verified

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[VerifyIncomeInsightErrorBody](basiq/errors/verify_income_insight_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](basiq/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](basiq/apis/jobs.py)

<details>
<summary><code>def get_jobs(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> JobsResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of an existing job. You need only supply the unique job identifier that was returned upon job creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.jobs.get_jobs("some example string")
    # TODO: Handle 'response' of type JobsResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_jobs("some example string")
    # TODO: Handle 'response' of type JobsResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | The identifier of the job to be retrieved. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobsResponse3](basiq/models/unions/jobs_response3.py)</code> -- Returns a job details if a valid job ID was provided.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetJobsErrorBody](basiq/errors/get_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Jobs400Error1](basiq/models/jobs400_error1.py)</code> |
| 401 | <code>[Jobs401Error1](basiq/models/jobs401_error1.py)</code> |
| 403 | <code>[Jobs403Error1](basiq/models/jobs403_error1.py)</code> |
| 404 | <code>[Jobs404Error1](basiq/models/jobs404_error1.py)</code> |
| 500 | <code>[Jobs500Error1](basiq/models/jobs500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_jobs(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> UsersJobsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of all existing and previous jobs associated with a user.

**Note:** This endpoint only returns jobs that are less than 7 days old.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.jobs.get_user_jobs("some example string")
    # TODO: Handle 'response' of type UsersJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_user_jobs("some example string")
    # TODO: Handle 'response' of type UsersJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identifier |
| <code>filter_</code> | <code>str \| None</code> | Connection identification filter. e.g. connection.id.eq('ab63cd')<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersJobsResponse](basiq/models/users_jobs_response.py)</code> -- Returns a list of jobs with details.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetUserJobsErrorBody](basiq/errors/get_user_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersJobs400Error1](basiq/models/users_jobs400_error1.py)</code> |
| 401 | <code>[UsersJobs401Error1](basiq/models/users_jobs401_error1.py)</code> |
| 403 | <code>[UsersJobs403Error1](basiq/models/users_jobs403_error1.py)</code> |
| 404 | <code>[UsersJobs404Error1](basiq/models/users_jobs404_error1.py)</code> |
| 500 | <code>[UsersJobs500Error1](basiq/models/users_jobs500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_job_mfa(job_id: str, body: JobsMfaRequest | JobsMfaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ConnectionResponseResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ensure that you generate an authentication token with
scope = CLIENT_ACCESS and basiq-version = 3.0 to create this resource

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.jobs.post_job_mfa("some example string", JobsMfaRequest(mfa_response=["some example string"]))
    # TODO: Handle 'response' of type ConnectionResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostJobMfaErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.post_job_mfa(
        "some example string", JobsMfaRequest(mfa_response=["some example string"])
    )
    # TODO: Handle 'response' of type ConnectionResponseResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostJobMfaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | The identifier of the job. |
| <code>body</code> | <code>[JobsMfaRequest](basiq/models/jobs_mfa_request.py) \| [JobsMfaRequestDict](basiq/models/jobs_mfa_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionResponseResource](basiq/models/connection_response_resource.py)</code> -- Returns a job if MFA response was correct. Returns an error otherwise.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[PostJobMfaErrorBody](basiq/errors/post_job_mfa_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[JobsMfa400Error1](basiq/models/jobs_mfa400_error1.py)</code> |
| 401 | <code>[JobsMfa401Error1](basiq/models/jobs_mfa401_error1.py)</code> |
| 403 | <code>[JobsMfa403Error1](basiq/models/jobs_mfa403_error1.py)</code> |
| 404 | <code>[JobsMfa404Error1](basiq/models/jobs_mfa404_error1.py)</code> |
| 500 | <code>[JobsMfa500Error1](basiq/models/jobs_mfa500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Payees

> Source: [Payees](basiq/apis/payees.py)

<details>
<summary><code>def get_payee_details(user_id: UUID, payee_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PayeeDetailsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves detailed information for a specific payee. The response includes type-specific details based on the payee type (domestic, biller, international, or digitalWallet).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payees.get_payee_details(
        UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PayeeDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayeeDetailsErrorBody
```

**Async**

```python
try:
    response = await async_client.payees.get_payee_details(
        UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PayeeDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayeeDetailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | The unique identifier of the user. |
| <code>payee_id</code> | <code>UUID</code> | The unique identifier of the payee. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayeeDetailsResponse](basiq/models/payee_details_response.py)</code> -- Successful response with payee details. The response structure varies based on the payee type.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetPayeeDetailsErrorBody](basiq/errors/get_payee_details_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorSchema](basiq/models/bad_request_error_schema.py)</code> |
| 401 | <code>[UnauthorizedErrorSchema](basiq/models/unauthorized_error_schema.py)</code> |
| 403 | <code>[ForbiddenAccessError1](basiq/models/forbidden_access_error1.py)</code> |
| 404, 500 | <code>[NotFoundErrorSchema](basiq/models/not_found_error_schema.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payees(user_id: UUID, *, limit: int | None = 25, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PayeesListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID, and creation date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payees.get_payees(
        UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), limit=25, filter_="type.eq('domestic')"
    )
    # TODO: Handle 'response' of type PayeesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayeesErrorBody
```

**Async**

```python
try:
    response = await async_client.payees.get_payees(
        UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), limit=25, filter_="type.eq('domestic')"
    )
    # TODO: Handle 'response' of type PayeesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayeesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>UUID</code> | The unique identifier of the user. |
| <code>limit</code> | <code>int \| None</code> | The maximum number of payees to return per page. Valid values are 1-500. Default is 25.<br>**Default**: <code>25</code> |
| <code>filter_</code> | <code>str \| None</code> | Filter expression to narrow down results. Supports the following filters:<br>- `type.eq('value')` - Filter by payee type (domestic, biller, international, digitalWallet)<br>- `connectionId.eq('value')` - Filter by connection ID<br>- `created.bt('startDate','endDate')` - Filter by creation date range<br>- `created.gt('date')` - Filter by creation date greater than<br>- `created.gteq('date')` - Filter by creation date greater than or equal<br>- `created.lt('date')` - Filter by creation date less than<br>- `created.lteq('date')` - Filter by creation date less than or equal<br>- `created.eq('date')` - Filter by creation date equal to<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayeesListResponse](basiq/models/payees_list_response.py)</code> -- Successful response with a list of payees.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetPayeesErrorBody](basiq/errors/get_payees_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorSchema](basiq/models/bad_request_error_schema.py)</code> |
| 401 | <code>[UnauthorizedErrorSchema](basiq/models/unauthorized_error_schema.py)</code> |
| 403 | <code>[ForbiddenAccessError1](basiq/models/forbidden_access_error1.py)</code> |
| 500 | <code>[NotFoundErrorSchema](basiq/models/not_found_error_schema.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](basiq/apis/reports.py)

<details>
<summary><code>def createreport(body: ReportsRequest | ReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ReportsResponse</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.createreport(
        ReportsRequest(
            report_type="some example string",
            title="some example string",
            filters=[Filter(name="some example string", value=date(2024, 1, 15))],
        ),
    )
    # TODO: Handle 'response' of type ReportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatereportErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.createreport(
        ReportsRequest(
            report_type="some example string",
            title="some example string",
            filters=[Filter(name="some example string", value=date(2024, 1, 15))],
        ),
    )
    # TODO: Handle 'response' of type ReportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatereportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ReportsRequest](basiq/models/reports_request.py) \| [ReportsRequestDict](basiq/models/reports_request.py)</code> | Include the details of the report you would like to create along with the filters. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsResponse](basiq/models/reports_response.py)</code> -- The server will return link to a job endpoint which can be polled to track the progress of the report creation.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[CreatereportErrorBody](basiq/errors/createreport_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ReportsResponse12](basiq/models/unions/reports_response12.py)</code> |
| 403 | <code>[Reports403Error1](basiq/models/reports403_error1.py)</code> |
| 404 | <code>[Reports404Error1](basiq/models/reports404_error1.py)</code> |
| 500 | <code>[Reports500Error1](basiq/models/reports500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a report and all associated snapshot data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.reports.delete_report("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportErrorBody
```

**Async**

```python
try:
    await async_client.reports.delete_report("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the generated report |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[DeleteReportErrorBody](basiq/errors/delete_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Reports400Error21](basiq/models/reports400_error21.py)</code> |
| 403 | <code>[Reports403Error31](basiq/models/reports403_error31.py)</code> |
| 404 | <code>[Reports404Error31](basiq/models/reports404_error31.py)</code> |
| 500 | <code>[Reports500Error31](basiq/models/reports500_error31.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_report_types(*, request_options: RequestOptionsOrDict | None = None) -> ReportsTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported reports, which can be used to create reports on.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.list_report_types()
    # TODO: Handle 'response' of type ReportsTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.list_report_types()
    # TODO: Handle 'response' of type ReportsTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsTypesResponse](basiq/models/reports_types_response.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[ListReportTypesErrorBody](basiq/errors/list_report_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ReportsTypes400Error1](basiq/models/reports_types400_error1.py)</code> |
| 403 | <code>[ReportsTypes403Error1](basiq/models/reports_types403_error1.py)</code> |
| 404 | <code>[ReportsTypes404Error1](basiq/models/reports_types404_error1.py)</code> |
| 500 | <code>[ReportsTypes500Error1](basiq/models/reports_types500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def listallreports(*, request_options: RequestOptionsOrDict | None = None) -> ReportsResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported reports. reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.listallreports()
    # TODO: Handle 'response' of type ReportsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListallreportsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.listallreports()
    # TODO: Handle 'response' of type ReportsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListallreportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsResponse2](basiq/models/reports_response2.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[ListallreportsErrorBody](basiq/errors/listallreports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Reports400Error1](basiq/models/reports400_error1.py)</code> |
| 403 | <code>[Reports403Error21](basiq/models/reports403_error21.py)</code> |
| 404 | <code>[Reports404Error21](basiq/models/reports404_error21.py)</code> |
| 500 | <code>[Reports500Error21](basiq/models/reports500_error21.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.retrieve_report("some example string")
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveReportErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.retrieve_report("some example string")
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the generated report |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[RetrieveReportErrorBody](basiq/errors/retrieve_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Reports400Error21](basiq/models/reports400_error21.py)</code> |
| 403 | <code>[Reports403Error31](basiq/models/reports403_error31.py)</code> |
| 404 | <code>[Reports404Error31](basiq/models/reports404_error31.py)</code> |
| 500 | <code>[Reports500Error31](basiq/models/reports500_error31.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_report_transactions(report_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TransactionsContainerObject</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve transactions belonging to the report identified by {reportId}.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.retrieve_report_transactions("some example string")
    # TODO: Handle 'response' of type TransactionsContainerObject
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveReportTransactionsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.retrieve_report_transactions("some example string")
    # TODO: Handle 'response' of type TransactionsContainerObject
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveReportTransactionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>report_id</code> | <code>str</code> | The ID of the generated report |
| <code>filter_</code> | <code>str \| None</code> | - account.id.eq('15a28893-e8c9-4441-a076-470195218738')<br>- transaction.postDate.bt('2022-10-01,2022-10-10')<br>- transaction.postDate.(eq\|gt\|lt\|gteq\|lteq)('2022-12-03T00:00:00Z')<br>- institution.id.eq('AU00001')<br>- connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe')<br>- transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c')<br>- transaction.direction.eq('credit')<br>- transaction.class.eq('transfer')<br>- transaction.status.eq('posted')<br><br>Transactions can be filtered based on date & datetime.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionsContainerObject](basiq/models/transactions_container_object.py)</code> -- Returns a list with a data property that contains an array of transactions. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[RetrieveReportTransactionsErrorBody](basiq/errors/retrieve_report_transactions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ReportsTransactions400Error1](basiq/models/reports_transactions400_error1.py)</code> |
| 403 | <code>[ReportsTransactions403Error1](basiq/models/reports_transactions403_error1.py)</code> |
| 404 | <code>[ReportsTransactions404Error1](basiq/models/reports_transactions404_error1.py)</code> |
| 500 | <code>[ReportsTransactions500Error1](basiq/models/reports_transactions500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_specific_report_type(report_type_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ReportsTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a specific report type identified by {reportId}.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.retrieve_specific_report_type("some example string")
    # TODO: Handle 'response' of type ReportsTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveSpecificReportTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.retrieve_specific_report_type("some example string")
    # TODO: Handle 'response' of type ReportsTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveSpecificReportTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>report_type_id</code> | <code>str</code> | The type of the report |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsTypesResponse](basiq/models/reports_types_response.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[RetrieveSpecificReportTypeErrorBody](basiq/errors/retrieve_specific_report_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ReportsTypes400Error1](basiq/models/reports_types400_error1.py)</code> |
| 403 | <code>[ReportsTypes403Error1](basiq/models/reports_types403_error1.py)</code> |
| 404 | <code>[ReportsTypes404Error1](basiq/models/reports_types404_error1.py)</code> |
| 500 | <code>[ReportsTypes500Error1](basiq/models/reports_types500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Statements

> Source: [Statements](basiq/apis/statements.py)

<details>
<summary><code>def create_statement(user_id: str, institution_id: str, statement: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> UsersStatementsResponse</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.statements.create_statement(
        "some example string", "some example string", Path("path/to/file.bin")
    )
    # TODO: Handle 'response' of type UsersStatementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStatementErrorBody
```

**Async**

```python
try:
    response = await async_client.statements.create_statement(
        "some example string", "some example string", Path("path/to/file.bin")
    )
    # TODO: Handle 'response' of type UsersStatementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStatementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier of the user |
| <code>institution_id</code> | <code>str</code> | The identifier of the institution to which the statement relates (e.g., "AU01001"). **Note**: Sandbox institutions (AU00000) do not support file uploads. |
| <code>statement</code> | <code>FileInput</code> | The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the file specification provided by Basiq. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersStatementsResponse](basiq/models/users_statements_response.py)</code> -- Job resource created successfully

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[CreateStatementErrorBody](basiq/errors/create_statement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersStatements400Error1](basiq/models/users_statements400_error1.py)</code> |
| 403 | <code>[UsersStatements403Error1](basiq/models/users_statements403_error1.py)</code> |
| 404 | <code>[UsersStatements404Error1](basiq/models/users_statements404_error1.py)</code> |
| 500 | <code>[UsersStatements500Error1](basiq/models/users_statements500_error1.py)</code> |
| 503 | <code>[UsersStatements503Error1](basiq/models/users_statements503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](basiq/apis/transactions.py)

<details>
<summary><code>def get_transaction(user_id: str, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None) -> UsersTransactionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing transaction

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.get_transaction("some example string", "some example string")
    # TODO: Handle 'response' of type UsersTransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTransactionErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.get_transaction("some example string", "some example string")
    # TODO: Handle 'response' of type UsersTransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTransactionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user. |
| <code>transaction_id</code> | <code>str</code> | The identifier of the transaction. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersTransactionsResponse](basiq/models/users_transactions_response.py)</code> -- Returns a transaction if a valid transaction ID was provided.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetTransactionErrorBody](basiq/errors/get_transaction_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersTransactions400Error1](basiq/models/users_transactions400_error1.py)</code> |
| 403 | <code>[UsersTransactions403Error1](basiq/models/users_transactions403_error1.py)</code> |
| 404 | <code>[UsersTransactions404Error1](basiq/models/users_transactions404_error1.py)</code> |
| 500 | <code>[UsersTransactions500Error1](basiq/models/users_transactions500_error1.py)</code> |
| 503 | <code>[UsersTransactions503Error1](basiq/models/users_transactions503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_transactions(user_id: str, *, limit: int | None = 500, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TransactionsContainerObjectConnectTransactionsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all transactions belonging to a specified user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.get_transactions("some example string")
    # TODO: Handle 'response' of type TransactionsContainerObjectConnectTransactionsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTransactionsErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.get_transactions("some example string")
    # TODO: Handle 'response' of type TransactionsContainerObjectConnectTransactionsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTransactionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identifier. |
| <code>limit</code> | <code>int \| None</code> | This represents the maximum number of items that may be included in the response (maximum of 500). Note that by default 500 items are returned if this value is not specified.<br>**Default**: <code>500</code> |
| <code>filter_</code> | <code>str \| None</code> | Transaction filters; connection.id, account.id, transaction.postDate, transaction.status, institution.id, transaction.direction, transaction.class<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionsContainerObjectConnectTransactionsApi](basiq/models/transactions_container_object_connect_transactions_api.py)</code> -- Returns a paginated list with a data property that contains an array of transactions. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetTransactionsErrorBody](basiq/errors/get_transactions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UsersTransactions400Error1](basiq/models/users_transactions400_error1.py)</code> |
| 403 | <code>[UsersTransactions403Error1](basiq/models/users_transactions403_error1.py)</code> |
| 404 | <code>[UsersTransactions404Error1](basiq/models/users_transactions404_error1.py)</code> |
| 500 | <code>[UsersTransactions500Error1](basiq/models/users_transactions500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](basiq/apis/users.py)

<details>
<summary><code>def create_user(body: UsersRequest | UsersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> UserPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Basiq user object

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.create_user(
        UsersRequest(
            email="gavin@hooli.com", mobile="+61410888666", first_name="Gavin", middle_name="", last_name="Belson"
        ),
    )
    # TODO: Handle 'response' of type UserPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.create_user(
        UsersRequest(
            email="gavin@hooli.com", mobile="+61410888666", first_name="Gavin", middle_name="", last_name="Belson"
        ),
    )
    # TODO: Handle 'response' of type UserPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UsersRequest](basiq/models/users_request.py) \| [UsersRequestDict](basiq/models/users_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserPostResponse](basiq/models/user_post_response.py)</code> -- Returns the user object if the creation succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[CreateUserErrorBody](basiq/errors/create_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Users400Error1](basiq/models/users400_error1.py)</code> |
| 401 | <code>[Users401Error1](basiq/models/users401_error1.py)</code> |
| 403 | <code>[Users403Error1](basiq/models/users403_error1.py)</code> |
| 404 | <code>[Users404Error1](basiq/models/users404_error1.py)</code> |
| 500 | <code>[Users500Error1](basiq/models/users500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a user along with all of their associated connection details. All data associated with this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.users.delete_user("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

**Async**

```python
try:
    await async_client.users.delete_user("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | User identification. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[DeleteUserErrorBody](basiq/errors/delete_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Users400Error1](basiq/models/users400_error1.py)</code> |
| 401 | <code>[Users401Error1](basiq/models/users401_error1.py)</code> |
| 403 | <code>[Users403Error1](basiq/models/users403_error1.py)</code> |
| 404 | <code>[Users404Error1](basiq/models/users404_error1.py)</code> |
| 500 | <code>[Users500Error1](basiq/models/users500_error1.py)</code> |
| 503 | <code>[Users503Error1](basiq/models/users503_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> UserGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.get_user("some example string")
    # TODO: Handle 'response' of type UserGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_user("some example string")
    # TODO: Handle 'response' of type UserGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user to be retrieved. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserGetResponse](basiq/models/user_get_response.py)</code> -- Returns a user if a valid user ID was provided.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetUserErrorBody](basiq/errors/get_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Users400Error1](basiq/models/users400_error1.py)</code> |
| 401 | <code>[Users401Error1](basiq/models/users401_error1.py)</code> |
| 403 | <code>[Users403Error1](basiq/models/users403_error1.py)</code> |
| 404 | <code>[Users404Error1](basiq/models/users404_error1.py)</code> |
| 500 | <code>[Users500Error1](basiq/models/users500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user(user_id: str, body: UsersRequest1 | UsersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> UserPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.update_user("some example string", UsersRequest1())
    # TODO: Handle 'response' of type UserPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.update_user("some example string", UsersRequest1())
    # TODO: Handle 'response' of type UserPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The identifier of the user to be retrieved. |
| <code>body</code> | <code>[UsersRequest1](basiq/models/users_request1.py) \| [UsersRequest1Dict](basiq/models/users_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserPostResponse](basiq/models/user_post_response.py)</code> -- Returns the user object if the update succeeded.

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[UpdateUserErrorBody](basiq/errors/update_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Users400Error1](basiq/models/users400_error1.py)</code> |
| 401 | <code>[Users401Error1](basiq/models/users401_error1.py)</code> |
| 403 | <code>[Users403Error1](basiq/models/users403_error1.py)</code> |
| 404 | <code>[Users404Error1](basiq/models/users404_error1.py)</code> |
| 500 | <code>[Users500Error1](basiq/models/users500_error1.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](basiq/apis/webhooks_api.py)

<details>
<summary><code>def add_webhook(*, body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> NotificationsWebhooksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.add_webhook(
        body=NotificationsWebhooksRequest(
            name="My General Webhook",
            description="Webhook to catch all events",
            url="https://piper.com/basiq-messages/",
            subscribed_events=["user.created"],
        ),
    )
    # TODO: Handle 'response' of type NotificationsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.add_webhook(
        body=NotificationsWebhooksRequest(
            name="My General Webhook",
            description="Webhook to catch all events",
            url="https://piper.com/basiq-messages/",
            subscribed_events=["user.created"],
        ),
    )
    # TODO: Handle 'response' of type NotificationsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NotificationsWebhooksRequest](basiq/models/notifications_webhooks_request.py) \| [NotificationsWebhooksRequestDict](basiq/models/notifications_webhooks_request.py) \| None</code> | Webhook request object.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py)</code> -- Created

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[AddWebhookErrorBody](basiq/errors/add_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.webhooks_api.delete_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    await async_client.webhooks_api.delete_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[DeleteWebhookErrorBody](basiq/errors/delete_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> NotificationsWebhooksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
    # TODO: Handle 'response' of type NotificationsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
    # TODO: Handle 'response' of type NotificationsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetWebhookErrorBody](basiq/errors/get_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook_message(webhook_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None) -> NotificationsWebhooksMessagesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_webhook_message("3fa85f64-5717-4562-b3fc-2c963f66afa6", "some example string")
    # TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook_message(
        "3fa85f64-5717-4562-b3fc-2c963f66afa6", "some example string"
    )
    # TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | webhook Id |
| <code>message_id</code> | <code>str</code> | message Id |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksMessagesResponse1](basiq/models/notifications_webhooks_messages_response1.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetWebhookMessageErrorBody](basiq/errors/get_webhook_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook_stats(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookStats</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_webhook_stats("d408cfec-b881-43ee-b5bd-ccea64896ed4")
    # TODO: Handle 'response' of type WebhookStats
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookStatsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook_stats("d408cfec-b881-43ee-b5bd-ccea64896ed4")
    # TODO: Handle 'response' of type WebhookStats
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | webhook Id |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookStats](basiq/models/webhook_stats.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[GetWebhookStatsErrorBody](basiq/errors/get_webhook_stats_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_app_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> NotificationsWebhooksResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.list_app_webhooks()
    # TODO: Handle 'response' of type NotificationsWebhooksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAppWebhooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_app_webhooks()
    # TODO: Handle 'response' of type NotificationsWebhooksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAppWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse1](basiq/models/notifications_webhooks_response1.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[ListAppWebhooksErrorBody](basiq/errors/list_app_webhooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_messages(webhook_id: str, *, limit: int | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> NotificationsWebhooksMessagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.list_messages("3fa85f64-5717-4562-b3fc-2c963f66afa6", limit=10)
    # TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMessagesErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_messages("3fa85f64-5717-4562-b3fc-2c963f66afa6", limit=10)
    # TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMessagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | webhook Id |
| <code>limit</code> | <code>int \| None</code> | Maximum number of items included in the response. Max value = 500 and is the default value if this field is not provided<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksMessagesResponse](basiq/models/notifications_webhooks_messages_response.py)</code> -- Success

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[ListMessagesErrorBody](basiq/errors/list_messages_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_message(*, body: NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.webhooks_api.test_message(
        body=NotificationsMessagesTestRequest(event_type_id="user.created", text="My test message")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestMessageErrorBody
```

**Async**

```python
try:
    await async_client.webhooks_api.test_message(
        body=NotificationsMessagesTestRequest(event_type_id="user.created", text="My test message")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NotificationsMessagesTestRequest](basiq/models/notifications_messages_test_request.py) \| [NotificationsMessagesTestRequestDict](basiq/models/notifications_messages_test_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[TestMessageErrorBody](basiq/errors/test_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(webhook_id: str, *, body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> NotificationsWebhooksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.update_webhook(
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        body=NotificationsWebhooksRequest(
            name="My General Webhook",
            description="Webhook to catch all events",
            url="https://piper.com/basiq-messages/",
            subscribed_events=["user.created"],
        ),
    )
    # TODO: Handle 'response' of type NotificationsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.update_webhook(
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        body=NotificationsWebhooksRequest(
            name="My General Webhook",
            description="Webhook to catch all events",
            url="https://piper.com/basiq-messages/",
            subscribed_events=["user.created"],
        ),
    )
    # TODO: Handle 'response' of type NotificationsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[NotificationsWebhooksRequest](basiq/models/notifications_webhooks_request.py) \| [NotificationsWebhooksRequestDict](basiq/models/notifications_webhooks_request.py) \| None</code> | Webhook request object.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](basiq/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py)</code> -- Updated

**OnError**: <code>[ApiError](basiq/core/exceptions.py)&#91;[UpdateWebhookErrorBody](basiq/errors/update_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[Error](basiq/models/error.py)</code> |
| 500 | <code>[RawError](basiq/core/results.py)</code> |
| anything unmapped | <code>[RawError](basiq/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

