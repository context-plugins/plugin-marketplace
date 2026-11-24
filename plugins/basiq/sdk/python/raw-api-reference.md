# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [BasiqClient](basiq/client.py)

## AccountsApi

> Source: [AccountsApi](basiq/apis/accounts_api.py)

<details>
<summary><code>def get_account(user_id: str, account_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountResponseResource1, GetAccountErrorBody]</code></summary>

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
result = client.accounts_api.with_raw_response.get_account("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountResponseResource1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
```

**Async**

```python
result = await async_client.accounts_api.with_raw_response.get_account("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountResponseResource1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[AccountResponseResource1](basiq/models/account_response_resource1.py), [GetAccountErrorBody](basiq/errors/get_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountResponseResource1](basiq/models/account_response_resource1.py)</code> -- Returns a account with details.

**On `Failure`**: `error` is <code>[GetAccountErrorBody](basiq/errors/get_account_error.py)</code>

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
<summary><code>def get_accounts(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersAccountsResponse, GetAccountsErrorBody]</code></summary>

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
result = client.accounts_api.with_raw_response.get_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountsErrorBody
```

**Async**

```python
result = await async_client.accounts_api.with_raw_response.get_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersAccountsResponse](basiq/models/users_accounts_response.py), [GetAccountsErrorBody](basiq/errors/get_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersAccountsResponse](basiq/models/users_accounts_response.py)</code> -- Returns a account with details.

**On `Failure`**: `error` is <code>[GetAccountsErrorBody](basiq/errors/get_accounts_error.py)</code>

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
<summary><code>def get_connection_analytics(interval: IntervalOrStr, *, from_date: Date | None = None, to_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionAnalyticsResponse, GetConnectionAnalyticsErrorBody]</code></summary>

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
result = client.analytics.with_raw_response.get_connection_analytics(Interval.DAILY)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionAnalyticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectionAnalyticsErrorBody
```

**Async**

```python
result = await async_client.analytics.with_raw_response.get_connection_analytics(Interval.DAILY)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionAnalyticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectionAnalyticsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectionAnalyticsResponse](basiq/models/connection_analytics_response.py), [GetConnectionAnalyticsErrorBody](basiq/errors/get_connection_analytics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionAnalyticsResponse](basiq/models/connection_analytics_response.py)</code> -- Successful connection analytics response

**On `Failure`**: `error` is <code>[GetConnectionAnalyticsErrorBody](basiq/errors/get_connection_analytics_error.py)</code>

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
<summary><code>def get_user_analytics(interval: IntervalOrStr, *, from_date: Date | None = None, to_date: Date | None = None, connection_type: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsResponse, GetUserAnalyticsErrorBody]</code></summary>

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
result = client.analytics.with_raw_response.get_user_analytics(Interval.DAILY, connection_type="all,cdr,pdf,web,csv")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserAnalyticsErrorBody
```

**Async**

```python
result = await async_client.analytics.with_raw_response.get_user_analytics(
    Interval.DAILY, connection_type="all,cdr,pdf,web,csv"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserAnalyticsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[AnalyticsResponse](basiq/models/analytics_response.py), [GetUserAnalyticsErrorBody](basiq/errors/get_user_analytics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsResponse](basiq/models/analytics_response.py)</code> -- Successful analytics response

**On `Failure`**: `error` is <code>[GetUserAnalyticsErrorBody](basiq/errors/get_user_analytics_error.py)</code>

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
<summary><code>def delete_auth_link(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAuthLinkErrorBody]</code></summary>

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
result = client.auth_links.with_raw_response.delete_auth_link("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAuthLinkErrorBody
```

**Async**

```python
result = await async_client.auth_links.with_raw_response.delete_auth_link("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAuthLinkErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [DeleteAuthLinkErrorBody](basiq/errors/delete_auth_link_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAuthLinkErrorBody](basiq/errors/delete_auth_link_error.py)</code>

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
<summary><code>def get_auth_link(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersAuthLinkResponse1, GetAuthLinkErrorBody]</code></summary>

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
result = client.auth_links.with_raw_response.get_auth_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersAuthLinkResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAuthLinkErrorBody
```

**Async**

```python
result = await async_client.auth_links.with_raw_response.get_auth_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersAuthLinkResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAuthLinkErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersAuthLinkResponse1](basiq/models/users_auth_link_response1.py), [GetAuthLinkErrorBody](basiq/errors/get_auth_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersAuthLinkResponse1](basiq/models/users_auth_link_response1.py)</code> -- Returns details of a connection.

**On `Failure`**: `error` is <code>[GetAuthLinkErrorBody](basiq/errors/get_auth_link_error.py)</code>

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
<summary><code>def post_auth_link(user_id: str, *, body: UsersAuthLinkRequest | UsersAuthLinkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersAuthLinkResponse, PostAuthLinkErrorBody]</code></summary>

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
result = client.auth_links.with_raw_response.post_auth_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersAuthLinkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostAuthLinkErrorBody
```

**Async**

```python
result = await async_client.auth_links.with_raw_response.post_auth_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersAuthLinkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostAuthLinkErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersAuthLinkResponse](basiq/models/users_auth_link_response.py), [PostAuthLinkErrorBody](basiq/errors/post_auth_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersAuthLinkResponse](basiq/models/users_auth_link_response.py)</code> -- Returns a created auth_link resource, if the operation succeeded

**On `Failure`**: `error` is <code>[PostAuthLinkErrorBody](basiq/errors/post_auth_link_error.py)</code>

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
<summary><code>def post_token(basiq_version: str, *, scope: str | None = None, user_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TokenResponse, PostTokenErrorBody]</code></summary>

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
result = client.authentication.with_raw_response.post_token(
    "3.0", scope="CLIENT_ACCESS", user_id="6dd30ce4-d4ba-11ec-9d64-0242ac120002"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostTokenErrorBody
```

**Async**

```python
result = await async_client.authentication.with_raw_response.post_token(
    "3.0", scope="CLIENT_ACCESS", user_id="6dd30ce4-d4ba-11ec-9d64-0242ac120002"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostTokenErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[TokenResponse](basiq/models/token_response.py), [PostTokenErrorBody](basiq/errors/post_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TokenResponse](basiq/models/token_response.py)</code> -- Return token object that will be used for Basiq API requests.

**On `Failure`**: `error` is <code>[PostTokenErrorBody](basiq/errors/post_token_error.py)</code>

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
<summary><code>def delete_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteConnectionErrorBody]</code></summary>

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
result = client.connections.with_raw_response.delete_connection("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.delete_connection(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteConnectionErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [DeleteConnectionErrorBody](basiq/errors/delete_connection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteConnectionErrorBody](basiq/errors/delete_connection_error.py)</code>

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
<summary><code>def get_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionGetResponseResource, GetConnectionErrorBody]</code></summary>

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
result = client.connections.with_raw_response.get_connection("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.get_connection("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectionErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectionGetResponseResource](basiq/models/connection_get_response_resource.py), [GetConnectionErrorBody](basiq/errors/get_connection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionGetResponseResource](basiq/models/connection_get_response_resource.py)</code> -- Returns details of a connection.

**On `Failure`**: `error` is <code>[GetConnectionErrorBody](basiq/errors/get_connection_error.py)</code>

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
<summary><code>def get_connections(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionsGetResponseResource, GetConnectionsErrorBody]</code></summary>

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
result = client.connections.with_raw_response.get_connections("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionsGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectionsErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.get_connections("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionsGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectionsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectionsGetResponseResource](basiq/models/connections_get_response_resource.py), [GetConnectionsErrorBody](basiq/errors/get_connections_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionsGetResponseResource](basiq/models/connections_get_response_resource.py)</code> -- Returns details of connections.

**On `Failure`**: `error` is <code>[GetConnectionsErrorBody](basiq/errors/get_connections_error.py)</code>

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
<summary><code>def purge_connection_data(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PurgeConnectionDataErrorBody]</code></summary>

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
result = client.connections.with_raw_response.purge_connection_data("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurgeConnectionDataErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.purge_connection_data(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurgeConnectionDataErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [PurgeConnectionDataErrorBody](basiq/errors/purge_connection_data_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PurgeConnectionDataErrorBody](basiq/errors/purge_connection_data_error.py)</code>

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
<summary><code>def refresh_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionResponseResource, RefreshConnectionErrorBody]</code></summary>

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
result = client.connections.with_raw_response.refresh_connection("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.refresh_connection(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshConnectionErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectionResponseResource](basiq/models/connection_response_resource.py), [RefreshConnectionErrorBody](basiq/errors/refresh_connection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionResponseResource](basiq/models/connection_response_resource.py)</code> -- Returns a created job resource, if the operation succeeded.

**On `Failure`**: `error` is <code>[RefreshConnectionErrorBody](basiq/errors/refresh_connection_error.py)</code>

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
<summary><code>def refresh_connections(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionsRefreshResource, RefreshConnectionsErrorBody]</code></summary>

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
result = client.connections.with_raw_response.refresh_connections("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionsRefreshResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshConnectionsErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.refresh_connections("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionsRefreshResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshConnectionsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectionsRefreshResource](basiq/models/connections_refresh_resource.py), [RefreshConnectionsErrorBody](basiq/errors/refresh_connections_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionsRefreshResource](basiq/models/connections_refresh_resource.py)</code> -- Returns a created jobs resource, if the operation succeeded.

**On `Failure`**: `error` is <code>[RefreshConnectionsErrorBody](basiq/errors/refresh_connections_error.py)</code>

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
<summary><code>def get_connector(connector_id: str, method: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectorsResponse1, GetConnectorErrorBody]</code></summary>

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
result = client.connectors.with_raw_response.get_connector("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectorsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectorErrorBody
```

**Async**

```python
result = await async_client.connectors.with_raw_response.get_connector("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectorsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectorErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectorsResponse1](basiq/models/connectors_response1.py), [GetConnectorErrorBody](basiq/errors/get_connector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectorsResponse1](basiq/models/connectors_response1.py)</code> -- Returns data of single connector.

**On `Failure`**: `error` is <code>[GetConnectorErrorBody](basiq/errors/get_connector_error.py)</code>

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
<summary><code>def get_connectors(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectorsResponse, GetConnectorsErrorBody]</code></summary>

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
result = client.connectors.with_raw_response.get_connectors()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectorsErrorBody
```

**Async**

```python
result = await async_client.connectors.with_raw_response.get_connectors()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConnectorsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectorsResponse](basiq/models/connectors_response.py), [GetConnectorsErrorBody](basiq/errors/get_connectors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectorsResponse](basiq/models/connectors_response.py)</code> -- Returns data of single connector.

**On `Failure`**: `error` is <code>[GetConnectorsErrorBody](basiq/errors/get_connectors_error.py)</code>

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
<summary><code>def delete_consent(user_id: str, consent_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteConsentErrorBody]</code></summary>

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
result = client.consents.with_raw_response.delete_consent("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteConsentErrorBody
```

**Async**

```python
result = await async_client.consents.with_raw_response.delete_consent("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteConsentErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [DeleteConsentErrorBody](basiq/errors/delete_consent_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteConsentErrorBody](basiq/errors/delete_consent_error.py)</code>

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
<summary><code>def get_consents(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersConsentsResponse, GetConsentsErrorBody]</code></summary>

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
result = client.consents.with_raw_response.get_consents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersConsentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConsentsErrorBody
```

**Async**

```python
result = await async_client.consents.with_raw_response.get_consents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersConsentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetConsentsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersConsentsResponse](basiq/models/users_consents_response.py), [GetConsentsErrorBody](basiq/errors/get_consents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersConsentsResponse](basiq/models/users_consents_response.py)</code> -- Returns a list of user consents if they exist.

**On `Failure`**: `error` is <code>[GetConsentsErrorBody](basiq/errors/get_consents_error.py)</code>

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
<summary><code>def enrich(q: str, institution: str, country: str, *, mcc: str | None = None, account_type: str | None = None, amount: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnrichResponse, EnrichErrorBody]</code></summary>

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
result = client.enrich_api.with_raw_response.enrich("some example string", "some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichErrorBody
```

**Async**

```python
result = await async_client.enrich_api.with_raw_response.enrich(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[EnrichResponse](basiq/models/enrich_response.py), [EnrichErrorBody](basiq/errors/enrich_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnrichResponse](basiq/models/enrich_response.py)</code> -- The enrich endpoint will always return a 200 response to the user, along with a set of results for each of the datasets subscribed to: category, entity and location. If no results are found for the search query then an empty result set is returned. If parameter inputs are invalid an error is returned.

**On `Failure`**: `error` is <code>[EnrichErrorBody](basiq/errors/enrich_error.py)</code>

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
<summary><code>def get_merchant_by_id(merchant_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SingleMerchantResponse, GetMerchantByIdErrorBody]</code></summary>

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
result = client.enrich_api.with_raw_response.get_merchant_by_id(UUID("c1ef352e-c807-4bdc-9a70-887f7cc17426"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SingleMerchantResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMerchantByIdErrorBody
```

**Async**

```python
result = await async_client.enrich_api.with_raw_response.get_merchant_by_id(
    UUID("c1ef352e-c807-4bdc-9a70-887f7cc17426")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SingleMerchantResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMerchantByIdErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[SingleMerchantResponse](basiq/models/single_merchant_response.py), [GetMerchantByIdErrorBody](basiq/errors/get_merchant_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SingleMerchantResponse](basiq/models/single_merchant_response.py)</code> -- Successful response with a single merchant's detailed data.

**On `Failure`**: `error` is <code>[GetMerchantByIdErrorBody](basiq/errors/get_merchant_by_id_error.py)</code>

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
<summary><code>def merchant_search(*, abn: str | None = None, merchant_name: str | None = None, suburb: str | None = None, entity_type: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MerchantsResponse, RawError]</code></summary>

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
result = client.enrich_api.with_raw_response.merchant_search(
    abn="38865358328", merchant_name="coles", suburb="Ryde", entity_type="Individual/Sole Trader"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MerchantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.enrich_api.with_raw_response.merchant_search(
    abn="38865358328", merchant_name="coles", suburb="Ryde", entity_type="Individual/Sole Trader"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MerchantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[MerchantsResponse](basiq/models/merchants_response.py), [RawError](basiq/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MerchantsResponse](basiq/models/merchants_response.py)</code> -- Successful response with merchant data.

**On `Failure`**: `error` is <code>[RawError](basiq/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](basiq/apis/events.py)

<details>
<summary><code>def get_event_type_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsTypesResponse1, GetEventTypeByIdErrorBody]</code></summary>

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
result = client.events.with_raw_response.get_event_type_by_id("user.created")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsTypesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventTypeByIdErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_event_type_by_id("user.created")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsTypesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventTypeByIdErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[EventsTypesResponse1](basiq/models/events_types_response1.py), [GetEventTypeByIdErrorBody](basiq/errors/get_event_type_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsTypesResponse1](basiq/models/events_types_response1.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetEventTypeByIdErrorBody](basiq/errors/get_event_type_by_id_error.py)</code>

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
<summary><code>def get_events(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsGetResponseResource, GetEventsErrorBody]</code></summary>

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
result = client.events.with_raw_response.get_events(
    filter_="user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_events(
    filter_="user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[EventsGetResponseResource](basiq/models/events_get_response_resource.py), [GetEventsErrorBody](basiq/errors/get_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsGetResponseResource](basiq/models/events_get_response_resource.py)</code> -- Returns details of events.

**On `Failure`**: `error` is <code>[GetEventsErrorBody](basiq/errors/get_events_error.py)</code>

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
<summary><code>def get_type_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsResponse, GetTypeByIdErrorBody]</code></summary>

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
result = client.events.with_raw_response.get_type_by_id(
    "a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTypeByIdErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_type_by_id(
    "a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTypeByIdErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[EventsResponse](basiq/models/events_response.py), [GetTypeByIdErrorBody](basiq/errors/get_type_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsResponse](basiq/models/events_response.py)</code> -- Returns the ID of an event.

**On `Failure`**: `error` is <code>[GetTypeByIdErrorBody](basiq/errors/get_type_by_id_error.py)</code>

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
<summary><code>def list_event_types(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsTypesResponse, ListEventTypesErrorBody]</code></summary>

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
result = client.events.with_raw_response.list_event_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEventTypesErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.list_event_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEventTypesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[EventsTypesResponse](basiq/models/events_types_response.py), [ListEventTypesErrorBody](basiq/errors/list_event_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsTypesResponse](basiq/models/events_types_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListEventTypesErrorBody](basiq/errors/list_event_types_error.py)</code>

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
<summary><code>def get_expenses(user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExpensesResponse, GetExpensesErrorBody]</code></summary>

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
result = client.expenses.with_raw_response.get_expenses("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExpensesErrorBody
```

**Async**

```python
result = await async_client.expenses.with_raw_response.get_expenses("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExpensesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ExpensesResponse](basiq/models/expenses_response.py), [GetExpensesErrorBody](basiq/errors/get_expenses_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExpensesResponse](basiq/models/expenses_response.py)</code> -- Returns a saved expenses resource, if the operation succeeded.

**On `Failure`**: `error` is <code>[GetExpensesErrorBody](basiq/errors/get_expenses_error.py)</code>

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
<summary><code>def post_expenses(user_id: str, *, body: UsersExpensesRequest | UsersExpensesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExpensesResponse, PostExpensesErrorBody]</code></summary>

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
result = client.expenses.with_raw_response.post_expenses("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostExpensesErrorBody
```

**Async**

```python
result = await async_client.expenses.with_raw_response.post_expenses("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostExpensesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ExpensesResponse](basiq/models/expenses_response.py), [PostExpensesErrorBody](basiq/errors/post_expenses_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExpensesResponse](basiq/models/expenses_response.py)</code> -- Returns a created expenses resource, if the operation succeeded.

**On `Failure`**: `error` is <code>[PostExpensesErrorBody](basiq/errors/post_expenses_error.py)</code>

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
<summary><code>def get_user_identities(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IdentitiesGetResponseResource, GetUserIdentitiesErrorBody]</code></summary>

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
result = client.identities.with_raw_response.get_user_identities("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentitiesGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserIdentitiesErrorBody
```

**Async**

```python
result = await async_client.identities.with_raw_response.get_user_identities("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentitiesGetResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserIdentitiesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[IdentitiesGetResponseResource](basiq/models/identities_get_response_resource.py), [GetUserIdentitiesErrorBody](basiq/errors/get_user_identities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IdentitiesGetResponseResource](basiq/models/identities_get_response_resource.py)</code> -- Returns list of identities.

**On `Failure`**: `error` is <code>[GetUserIdentitiesErrorBody](basiq/errors/get_user_identities_error.py)</code>

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
<summary><code>def get_user_identity(user_id: str, identity_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersIdentitiesResponse, GetUserIdentityErrorBody]</code></summary>

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
result = client.identities.with_raw_response.get_user_identity("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersIdentitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserIdentityErrorBody
```

**Async**

```python
result = await async_client.identities.with_raw_response.get_user_identity("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersIdentitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserIdentityErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersIdentitiesResponse](basiq/models/users_identities_response.py), [GetUserIdentityErrorBody](basiq/errors/get_user_identity_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersIdentitiesResponse](basiq/models/users_identities_response.py)</code> -- Returns identity.

**On `Failure`**: `error` is <code>[GetUserIdentityErrorBody](basiq/errors/get_user_identity_error.py)</code>

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
<summary><code>def get_income(user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IncomeResponse, GetIncomeErrorBody]</code></summary>

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
result = client.income_api.with_raw_response.get_income("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncomeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIncomeErrorBody
```

**Async**

```python
result = await async_client.income_api.with_raw_response.get_income("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncomeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIncomeErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[IncomeResponse](basiq/models/income_response.py), [GetIncomeErrorBody](basiq/errors/get_income_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IncomeResponse](basiq/models/income_response.py)</code> -- Returns a saved income resource, if the operation succeeded.

**On `Failure`**: `error` is <code>[GetIncomeErrorBody](basiq/errors/get_income_error.py)</code>

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
<summary><code>def post_income(user_id: str, *, body: UsersIncomeRequest | UsersIncomeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IncomeResponse, PostIncomeErrorBody]</code></summary>

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
result = client.income_api.with_raw_response.post_income("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncomeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostIncomeErrorBody
```

**Async**

```python
result = await async_client.income_api.with_raw_response.post_income("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncomeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostIncomeErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[IncomeResponse](basiq/models/income_response.py), [PostIncomeErrorBody](basiq/errors/post_income_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IncomeResponse](basiq/models/income_response.py)</code> -- Returns a created income resource, if the operation succeeded.

**On `Failure`**: `error` is <code>[PostIncomeErrorBody](basiq/errors/post_income_error.py)</code>

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
<summary><code>def create_insight(body: PostInsightsRequest | PostInsightsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PostInsightsResponse, CreateInsightErrorBody]</code></summary>

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
result = client.insights.with_raw_response.create_insight(
    PostInsightsRequest(
        users=[UUID("a9242681-8c49-434c-9eeb-e011fba2a0cc")],
        type_=TypeInsightsApi.IDENTITY_VERIFICATION,
        data=IdentityVerificationData(
            name="Jane Doe", email="jane@example.com", phone="+61400000000", address="123 Main St, Sydney NSW 2000"
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PostInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateInsightErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.create_insight(
    PostInsightsRequest(
        users=[UUID("a9242681-8c49-434c-9eeb-e011fba2a0cc")],
        type_=TypeInsightsApi.IDENTITY_VERIFICATION,
        data=IdentityVerificationData(
            name="Jane Doe", email="jane@example.com", phone="+61400000000", address="123 Main St, Sydney NSW 2000"
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PostInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateInsightErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[PostInsightsResponse](basiq/models/post_insights_response.py), [CreateInsightErrorBody](basiq/errors/create_insight_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PostInsightsResponse](basiq/models/post_insights_response.py)</code> -- Successfully created insight

**On `Failure`**: `error` is <code>[CreateInsightErrorBody](basiq/errors/create_insight_error.py)</code>

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
<summary><code>def get_account_insights(user_id: UUID, body: UsersInsightsAccountRequest | UsersInsightsAccountRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountInsightResponse, GetAccountInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_account_insights(
    UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), UsersInsightsAccountRequest(account_number="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_account_insights(
    UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), UsersInsightsAccountRequest(account_number="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountInsightsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[AccountInsightResponse](basiq/models/account_insight_response.py), [GetAccountInsightsErrorBody](basiq/errors/get_account_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountInsightResponse](basiq/models/account_insight_response.py)</code> -- Successfully retrieved account insights

**On `Failure`**: `error` is <code>[GetAccountInsightsErrorBody](basiq/errors/get_account_insights_error.py)</code>

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
<summary><code>def get_balance_insights(user_id: UUID, body: BalanceInsightRequest | BalanceInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BalanceInsightResponse, GetBalanceInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_balance_insights(
    UUID("2fc2691d-a6e5-4d1d-9748-c3b217ad76b0"), BalanceInsightRequest(balance=Balance2(min="1"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BalanceInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBalanceInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_balance_insights(
    UUID("2fc2691d-a6e5-4d1d-9748-c3b217ad76b0"), BalanceInsightRequest(balance=Balance2(min="1"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BalanceInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBalanceInsightsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[BalanceInsightResponse](basiq/models/balance_insight_response.py), [GetBalanceInsightsErrorBody](basiq/errors/get_balance_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BalanceInsightResponse](basiq/models/balance_insight_response.py)</code> -- Successfully retrieved balance insights

**On `Failure`**: `error` is <code>[GetBalanceInsightsErrorBody](basiq/errors/get_balance_insights_error.py)</code>

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
<summary><code>def get_expense_ratio_insights(user_id: UUID, body: ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExpenseRatioInsightResponse, GetExpenseRatioInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_expense_ratio_insights(
    UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), ExpenseRatioInsightRequest(expense="2500")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpenseRatioInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExpenseRatioInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_expense_ratio_insights(
    UUID("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"), ExpenseRatioInsightRequest(expense="2500")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExpenseRatioInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExpenseRatioInsightsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ExpenseRatioInsightResponse](basiq/models/expense_ratio_insight_response.py), [GetExpenseRatioInsightsErrorBody](basiq/errors/get_expense_ratio_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExpenseRatioInsightResponse](basiq/models/expense_ratio_insight_response.py)</code> -- Successfully retrieved expense ratio insights

**On `Failure`**: `error` is <code>[GetExpenseRatioInsightsErrorBody](basiq/errors/get_expense_ratio_insights_error.py)</code>

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
<summary><code>def get_identity_insights(user_id: UUID, body: IdentityInsightRequest | IdentityInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IdentityInsightResponse, GetIdentityInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_identity_insights(
    UUID("321ac6df-beec-435b-a93e-678fe919badc"),
    IdentityInsightRequest(name="jared Dunn", phone="", email="", address=""),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentityInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentityInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_identity_insights(
    UUID("321ac6df-beec-435b-a93e-678fe919badc"),
    IdentityInsightRequest(name="jared Dunn", phone="", email="", address=""),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentityInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentityInsightsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[IdentityInsightResponse](basiq/models/identity_insight_response.py), [GetIdentityInsightsErrorBody](basiq/errors/get_identity_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IdentityInsightResponse](basiq/models/identity_insight_response.py)</code> -- Successfully retrieved identity insights

**On `Failure`**: `error` is <code>[GetIdentityInsightsErrorBody](basiq/errors/get_identity_insights_error.py)</code>

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
<summary><code>def get_insight_by_id(user_id: UUID, insight_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Insight, GetInsightByIdErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_insight_by_id(
    UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), UUID("54878d1a-295b-44c3-8f1e-402e68f912fe")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Insight
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightByIdErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_insight_by_id(
    UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), UUID("54878d1a-295b-44c3-8f1e-402e68f912fe")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Insight
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightByIdErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[Insight](basiq/models/insight.py), [GetInsightByIdErrorBody](basiq/errors/get_insight_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Insight](basiq/models/insight.py)</code> -- Successful response with insight details

**On `Failure`**: `error` is <code>[GetInsightByIdErrorBody](basiq/errors/get_insight_by_id_error.py)</code>

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
<summary><code>def get_insight_type(type_id: TypeIdOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightTypeItem, GetInsightTypeErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_insight_type(TypeId.ACCOUNT_VERIFICATION)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightTypeItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightTypeErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_insight_type(TypeId.ACCOUNT_VERIFICATION)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightTypeItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightTypeErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[InsightTypeItem](basiq/models/insight_type_item.py), [GetInsightTypeErrorBody](basiq/errors/get_insight_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightTypeItem](basiq/models/insight_type_item.py)</code> -- Successfully retrieved Insight type definition

**On `Failure`**: `error` is <code>[GetInsightTypeErrorBody](basiq/errors/get_insight_type_error.py)</code>

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
<summary><code>def get_insight_types(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightTypesList, GetInsightTypesErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_insight_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightTypesList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightTypesErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_insight_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightTypesList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightTypesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[InsightTypesList](basiq/models/insight_types_list.py), [GetInsightTypesErrorBody](basiq/errors/get_insight_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightTypesList](basiq/models/insight_types_list.py)</code> -- Successfully retrieved list of supported Insight types

**On `Failure`**: `error` is <code>[GetInsightTypesErrorBody](basiq/errors/get_insight_types_error.py)</code>

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
<summary><code>def list_user_insights(user_id: UUID, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightListResponse, ListUserInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.list_user_insights(
    UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), filter_="created.gteq('2025-06-16')"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUserInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.list_user_insights(
    UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), filter_="created.gteq('2025-06-16')"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUserInsightsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[InsightListResponse](basiq/models/insight_list_response.py), [ListUserInsightsErrorBody](basiq/errors/list_user_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightListResponse](basiq/models/insight_list_response.py)</code> -- Successful response with list of insights

**On `Failure`**: `error` is <code>[ListUserInsightsErrorBody](basiq/errors/list_user_insights_error.py)</code>

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
<summary><code>def verify_income_insight(user_id: UUID, body: IncomeInsightRequest | IncomeInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IncomeInsightResponse, VerifyIncomeInsightErrorBody]</code></summary>

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
result = client.insights.with_raw_response.verify_income_insight(
    UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), IncomeInsightRequest(income=Income(min="1", max="10000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncomeInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifyIncomeInsightErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.verify_income_insight(
    UUID("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"), IncomeInsightRequest(income=Income(min="1", max="10000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncomeInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifyIncomeInsightErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[IncomeInsightResponse](basiq/models/income_insight_response.py), [VerifyIncomeInsightErrorBody](basiq/errors/verify_income_insight_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IncomeInsightResponse](basiq/models/income_insight_response.py)</code> -- Income insight successfully verified

**On `Failure`**: `error` is <code>[VerifyIncomeInsightErrorBody](basiq/errors/verify_income_insight_error.py)</code>

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
<summary><code>def get_jobs(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobsResponse3, GetJobsErrorBody]</code></summary>

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
result = client.jobs.with_raw_response.get_jobs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobsErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_jobs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[JobsResponse3](basiq/models/unions/jobs_response3.py), [GetJobsErrorBody](basiq/errors/get_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobsResponse3](basiq/models/unions/jobs_response3.py)</code> -- Returns a job details if a valid job ID was provided.

**On `Failure`**: `error` is <code>[GetJobsErrorBody](basiq/errors/get_jobs_error.py)</code>

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
<summary><code>def get_user_jobs(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersJobsResponse, GetUserJobsErrorBody]</code></summary>

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
result = client.jobs.with_raw_response.get_user_jobs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserJobsErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_user_jobs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserJobsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersJobsResponse](basiq/models/users_jobs_response.py), [GetUserJobsErrorBody](basiq/errors/get_user_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersJobsResponse](basiq/models/users_jobs_response.py)</code> -- Returns a list of jobs with details.

**On `Failure`**: `error` is <code>[GetUserJobsErrorBody](basiq/errors/get_user_jobs_error.py)</code>

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
<summary><code>def post_job_mfa(job_id: str, body: JobsMfaRequest | JobsMfaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionResponseResource, PostJobMfaErrorBody]</code></summary>

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
result = client.jobs.with_raw_response.post_job_mfa(
    "some example string", JobsMfaRequest(mfa_response=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostJobMfaErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.post_job_mfa(
    "some example string", JobsMfaRequest(mfa_response=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionResponseResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostJobMfaErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ConnectionResponseResource](basiq/models/connection_response_resource.py), [PostJobMfaErrorBody](basiq/errors/post_job_mfa_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionResponseResource](basiq/models/connection_response_resource.py)</code> -- Returns a job if MFA response was correct. Returns an error otherwise.

**On `Failure`**: `error` is <code>[PostJobMfaErrorBody](basiq/errors/post_job_mfa_error.py)</code>

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
<summary><code>def get_payee_details(user_id: UUID, payee_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayeeDetailsResponse, GetPayeeDetailsErrorBody]</code></summary>

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
result = client.payees.with_raw_response.get_payee_details(
    UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayeeDetailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPayeeDetailsErrorBody
```

**Async**

```python
result = await async_client.payees.with_raw_response.get_payee_details(
    UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayeeDetailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPayeeDetailsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[PayeeDetailsResponse](basiq/models/payee_details_response.py), [GetPayeeDetailsErrorBody](basiq/errors/get_payee_details_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayeeDetailsResponse](basiq/models/payee_details_response.py)</code> -- Successful response with payee details. The response structure varies based on the payee type.

**On `Failure`**: `error` is <code>[GetPayeeDetailsErrorBody](basiq/errors/get_payee_details_error.py)</code>

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
<summary><code>def get_payees(user_id: UUID, *, limit: int | None = 25, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayeesListResponse, GetPayeesErrorBody]</code></summary>

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
result = client.payees.with_raw_response.get_payees(
    UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), limit=25, filter_="type.eq('domestic')"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayeesListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPayeesErrorBody
```

**Async**

```python
result = await async_client.payees.with_raw_response.get_payees(
    UUID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), limit=25, filter_="type.eq('domestic')"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayeesListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPayeesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[PayeesListResponse](basiq/models/payees_list_response.py), [GetPayeesErrorBody](basiq/errors/get_payees_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayeesListResponse](basiq/models/payees_list_response.py)</code> -- Successful response with a list of payees.

**On `Failure`**: `error` is <code>[GetPayeesErrorBody](basiq/errors/get_payees_error.py)</code>

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
<summary><code>def createreport(body: ReportsRequest | ReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReportsResponse, CreatereportErrorBody]</code></summary>

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
result = client.reports.with_raw_response.createreport(
    ReportsRequest(
        report_type="some example string",
        title="some example string",
        filters=[Filter(name="some example string", value=date(2024, 1, 15))],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatereportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.createreport(
    ReportsRequest(
        report_type="some example string",
        title="some example string",
        filters=[Filter(name="some example string", value=date(2024, 1, 15))],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatereportErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ReportsResponse](basiq/models/reports_response.py), [CreatereportErrorBody](basiq/errors/createreport_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReportsResponse](basiq/models/reports_response.py)</code> -- The server will return link to a job endpoint which can be polled to track the progress of the report creation.

**On `Failure`**: `error` is <code>[CreatereportErrorBody](basiq/errors/createreport_error.py)</code>

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
<summary><code>def delete_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteReportErrorBody]</code></summary>

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
result = client.reports.with_raw_response.delete_report("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.delete_report("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReportErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [DeleteReportErrorBody](basiq/errors/delete_report_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteReportErrorBody](basiq/errors/delete_report_error.py)</code>

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
<summary><code>def list_report_types(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReportsTypesResponse, ListReportTypesErrorBody]</code></summary>

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
result = client.reports.with_raw_response.list_report_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportTypesErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.list_report_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportTypesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ReportsTypesResponse](basiq/models/reports_types_response.py), [ListReportTypesErrorBody](basiq/errors/list_report_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReportsTypesResponse](basiq/models/reports_types_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListReportTypesErrorBody](basiq/errors/list_report_types_error.py)</code>

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
<summary><code>def listallreports(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReportsResponse2, ListallreportsErrorBody]</code></summary>

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
result = client.reports.with_raw_response.listallreports()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListallreportsErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.listallreports()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListallreportsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ReportsResponse2](basiq/models/reports_response2.py), [ListallreportsErrorBody](basiq/errors/listallreports_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReportsResponse2](basiq/models/reports_response2.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListallreportsErrorBody](basiq/errors/listallreports_error.py)</code>

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
<summary><code>def retrieve_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RetrieveReportErrorBody]</code></summary>

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
result = client.reports.with_raw_response.retrieve_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveReportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.retrieve_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveReportErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;FileResponse, [RetrieveReportErrorBody](basiq/errors/retrieve_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Success

**On `Failure`**: `error` is <code>[RetrieveReportErrorBody](basiq/errors/retrieve_report_error.py)</code>

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
<summary><code>def retrieve_report_transactions(report_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransactionsContainerObject, RetrieveReportTransactionsErrorBody]</code></summary>

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
result = client.reports.with_raw_response.retrieve_report_transactions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionsContainerObject
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveReportTransactionsErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.retrieve_report_transactions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionsContainerObject
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveReportTransactionsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[TransactionsContainerObject](basiq/models/transactions_container_object.py), [RetrieveReportTransactionsErrorBody](basiq/errors/retrieve_report_transactions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransactionsContainerObject](basiq/models/transactions_container_object.py)</code> -- Returns a list with a data property that contains an array of transactions. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

**On `Failure`**: `error` is <code>[RetrieveReportTransactionsErrorBody](basiq/errors/retrieve_report_transactions_error.py)</code>

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
<summary><code>def retrieve_specific_report_type(report_type_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReportsTypesResponse, RetrieveSpecificReportTypeErrorBody]</code></summary>

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
result = client.reports.with_raw_response.retrieve_specific_report_type("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveSpecificReportTypeErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.retrieve_specific_report_type("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportsTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveSpecificReportTypeErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[ReportsTypesResponse](basiq/models/reports_types_response.py), [RetrieveSpecificReportTypeErrorBody](basiq/errors/retrieve_specific_report_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReportsTypesResponse](basiq/models/reports_types_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[RetrieveSpecificReportTypeErrorBody](basiq/errors/retrieve_specific_report_type_error.py)</code>

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
<summary><code>def create_statement(user_id: str, institution_id: str, statement: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersStatementsResponse, CreateStatementErrorBody]</code></summary>

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
result = client.statements.with_raw_response.create_statement(
    "some example string", "some example string", Path("path/to/file.bin")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersStatementsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStatementErrorBody
```

**Async**

```python
result = await async_client.statements.with_raw_response.create_statement(
    "some example string", "some example string", Path("path/to/file.bin")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersStatementsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStatementErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersStatementsResponse](basiq/models/users_statements_response.py), [CreateStatementErrorBody](basiq/errors/create_statement_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersStatementsResponse](basiq/models/users_statements_response.py)</code> -- Job resource created successfully

**On `Failure`**: `error` is <code>[CreateStatementErrorBody](basiq/errors/create_statement_error.py)</code>

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
<summary><code>def get_transaction(user_id: str, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersTransactionsResponse, GetTransactionErrorBody]</code></summary>

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
result = client.transactions.with_raw_response.get_transaction("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersTransactionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTransactionErrorBody
```

**Async**

```python
result = await async_client.transactions.with_raw_response.get_transaction("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersTransactionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTransactionErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UsersTransactionsResponse](basiq/models/users_transactions_response.py), [GetTransactionErrorBody](basiq/errors/get_transaction_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersTransactionsResponse](basiq/models/users_transactions_response.py)</code> -- Returns a transaction if a valid transaction ID was provided.

**On `Failure`**: `error` is <code>[GetTransactionErrorBody](basiq/errors/get_transaction_error.py)</code>

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
<summary><code>def get_transactions(user_id: str, *, limit: int | None = 500, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransactionsContainerObjectConnectTransactionsApi, GetTransactionsErrorBody]</code></summary>

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
result = client.transactions.with_raw_response.get_transactions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionsContainerObjectConnectTransactionsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTransactionsErrorBody
```

**Async**

```python
result = await async_client.transactions.with_raw_response.get_transactions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionsContainerObjectConnectTransactionsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTransactionsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[TransactionsContainerObjectConnectTransactionsApi](basiq/models/transactions_container_object_connect_transactions_api.py), [GetTransactionsErrorBody](basiq/errors/get_transactions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransactionsContainerObjectConnectTransactionsApi](basiq/models/transactions_container_object_connect_transactions_api.py)</code> -- Returns a paginated list with a data property that contains an array of transactions. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

**On `Failure`**: `error` is <code>[GetTransactionsErrorBody](basiq/errors/get_transactions_error.py)</code>

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
<summary><code>def create_user(body: UsersRequest | UsersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserPostResponse, CreateUserErrorBody]</code></summary>

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
result = client.users.with_raw_response.create_user(
    UsersRequest(email="gavin@hooli.com", mobile="+61410888666", first_name="Gavin", middle_name="", last_name="Belson")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserPostResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.create_user(
    UsersRequest(email="gavin@hooli.com", mobile="+61410888666", first_name="Gavin", middle_name="", last_name="Belson")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserPostResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUserErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UserPostResponse](basiq/models/user_post_response.py), [CreateUserErrorBody](basiq/errors/create_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserPostResponse](basiq/models/user_post_response.py)</code> -- Returns the user object if the creation succeeded.

**On `Failure`**: `error` is <code>[CreateUserErrorBody](basiq/errors/create_user_error.py)</code>

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
<summary><code>def delete_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteUserErrorBody]</code></summary>

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
result = client.users.with_raw_response.delete_user("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.delete_user("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteUserErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [DeleteUserErrorBody](basiq/errors/delete_user_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteUserErrorBody](basiq/errors/delete_user_error.py)</code>

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
<summary><code>def get_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserGetResponse, GetUserErrorBody]</code></summary>

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
result = client.users.with_raw_response.get_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UserGetResponse](basiq/models/user_get_response.py), [GetUserErrorBody](basiq/errors/get_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserGetResponse](basiq/models/user_get_response.py)</code> -- Returns a user if a valid user ID was provided.

**On `Failure`**: `error` is <code>[GetUserErrorBody](basiq/errors/get_user_error.py)</code>

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
<summary><code>def update_user(user_id: str, body: UsersRequest1 | UsersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserPostResponse, UpdateUserErrorBody]</code></summary>

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
result = client.users.with_raw_response.update_user("some example string", UsersRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserPostResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.update_user("some example string", UsersRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserPostResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[UserPostResponse](basiq/models/user_post_response.py), [UpdateUserErrorBody](basiq/errors/update_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserPostResponse](basiq/models/user_post_response.py)</code> -- Returns the user object if the update succeeded.

**On `Failure`**: `error` is <code>[UpdateUserErrorBody](basiq/errors/update_user_error.py)</code>

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
<summary><code>def add_webhook(*, body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotificationsWebhooksResponse, AddWebhookErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.add_webhook(
    body=NotificationsWebhooksRequest(
        name="My General Webhook",
        description="Webhook to catch all events",
        url="https://piper.com/basiq-messages/",
        subscribed_events=["user.created"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.add_webhook(
    body=NotificationsWebhooksRequest(
        name="My General Webhook",
        description="Webhook to catch all events",
        url="https://piper.com/basiq-messages/",
        subscribed_events=["user.created"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddWebhookErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py), [AddWebhookErrorBody](basiq/errors/add_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py)</code> -- Created

**On `Failure`**: `error` is <code>[AddWebhookErrorBody](basiq/errors/add_webhook_error.py)</code>

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
<summary><code>def delete_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteWebhookErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.delete_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [DeleteWebhookErrorBody](basiq/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](basiq/errors/delete_webhook_error.py)</code>

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
<summary><code>def get_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotificationsWebhooksResponse, GetWebhookErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.get_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook("3fa85f64-5717-4562-b3fc-2c963f66afa6")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py), [GetWebhookErrorBody](basiq/errors/get_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetWebhookErrorBody](basiq/errors/get_webhook_error.py)</code>

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
<summary><code>def get_webhook_message(webhook_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotificationsWebhooksMessagesResponse1, GetWebhookMessageErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.get_webhook_message(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksMessagesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookMessageErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook_message(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksMessagesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookMessageErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[NotificationsWebhooksMessagesResponse1](basiq/models/notifications_webhooks_messages_response1.py), [GetWebhookMessageErrorBody](basiq/errors/get_webhook_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotificationsWebhooksMessagesResponse1](basiq/models/notifications_webhooks_messages_response1.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetWebhookMessageErrorBody](basiq/errors/get_webhook_message_error.py)</code>

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
<summary><code>def get_webhook_stats(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookStats, GetWebhookStatsErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.get_webhook_stats("d408cfec-b881-43ee-b5bd-ccea64896ed4")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookStats
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookStatsErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook_stats("d408cfec-b881-43ee-b5bd-ccea64896ed4")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookStats
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookStatsErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[WebhookStats](basiq/models/webhook_stats.py), [GetWebhookStatsErrorBody](basiq/errors/get_webhook_stats_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookStats](basiq/models/webhook_stats.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetWebhookStatsErrorBody](basiq/errors/get_webhook_stats_error.py)</code>

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
<summary><code>def list_app_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotificationsWebhooksResponse1, ListAppWebhooksErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.list_app_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAppWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_app_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAppWebhooksErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[NotificationsWebhooksResponse1](basiq/models/notifications_webhooks_response1.py), [ListAppWebhooksErrorBody](basiq/errors/list_app_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotificationsWebhooksResponse1](basiq/models/notifications_webhooks_response1.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListAppWebhooksErrorBody](basiq/errors/list_app_webhooks_error.py)</code>

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
<summary><code>def list_messages(webhook_id: str, *, limit: int | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotificationsWebhooksMessagesResponse, ListMessagesErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.list_messages("3fa85f64-5717-4562-b3fc-2c963f66afa6", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksMessagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMessagesErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_messages(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6", limit=10
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksMessagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMessagesErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[NotificationsWebhooksMessagesResponse](basiq/models/notifications_webhooks_messages_response.py), [ListMessagesErrorBody](basiq/errors/list_messages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotificationsWebhooksMessagesResponse](basiq/models/notifications_webhooks_messages_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListMessagesErrorBody](basiq/errors/list_messages_error.py)</code>

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
<summary><code>def test_message(*, body: NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TestMessageErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.test_message(
    body=NotificationsMessagesTestRequest(event_type_id="user.created", text="My test message")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestMessageErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.test_message(
    body=NotificationsMessagesTestRequest(event_type_id="user.created", text="My test message")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestMessageErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;None, [TestMessageErrorBody](basiq/errors/test_message_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TestMessageErrorBody](basiq/errors/test_message_error.py)</code>

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
<summary><code>def update_webhook(webhook_id: str, *, body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotificationsWebhooksResponse, UpdateWebhookErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.update_webhook(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    body=NotificationsWebhooksRequest(
        name="My General Webhook",
        description="Webhook to catch all events",
        url="https://piper.com/basiq-messages/",
        subscribed_events=["user.created"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.update_webhook(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    body=NotificationsWebhooksRequest(
        name="My General Webhook",
        description="Webhook to catch all events",
        url="https://piper.com/basiq-messages/",
        subscribed_events=["user.created"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
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

**Returns**: <code>[ApiResult](basiq/core/results.py)&#91;[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py), [UpdateWebhookErrorBody](basiq/errors/update_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotificationsWebhooksResponse](basiq/models/notifications_webhooks_response.py)</code> -- Updated

**On `Failure`**: `error` is <code>[UpdateWebhookErrorBody](basiq/errors/update_webhook_error.py)</code>

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

