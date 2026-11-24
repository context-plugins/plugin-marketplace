# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AudioscrapeClient](audioscrape/client.py)

## ApiKeys

> Source: [ApiKeys](audioscrape/apis/api_keys.py)

<details>
<summary><code>def api_key_usage(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiKeyUsage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns how many requests authenticated with this key over the trailing 30 days. Pair with `last_used` / `last_used_ip` from the list endpoint to audit a credential before revoking or rotating it.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.api_keys.api_key_usage(1)
    # TODO: Handle 'response' of type ApiKeyUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApiKeyUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.api_keys.api_key_usage(1)
    # TODO: Handle 'response' of type ApiKeyUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApiKeyUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | API key ID (from the `id` field on create / list) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKeyUsage](audioscrape/models/api_key_usage.py)</code> -- Usage over the trailing 30-day window

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ApiKeyUsageErrorBody](audioscrape/errors/api_key_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_api_key(body: CreateApiKey | CreateApiKeyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a new workspace-scoped API key. The full `key_value` is returned **only** in this response — Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If you lose it, rotate the key.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.api_keys.create_api_key(CreateApiKey(key_name="some example string"))
    # TODO: Handle 'response' of type ApiKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateApiKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.api_keys.create_api_key(CreateApiKey(key_name="some example string"))
    # TODO: Handle 'response' of type ApiKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateApiKey](audioscrape/models/create_api_key.py) \| [CreateApiKeyDict](audioscrape/models/create_api_key.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKey](audioscrape/models/api_key.py)</code> -- Key created. `key_value` is shown in full here for the only time.

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[CreateApiKeyErrorBody](audioscrape/errors/create_api_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next call.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.api_keys.delete_api_key(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiKeyErrorBody
```

**Async**

```python
try:
    await async_client.api_keys.delete_api_key(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | API key ID (from the `id` field on create / list) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[DeleteApiKeyErrorBody](audioscrape/errors/delete_api_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_api_keys(*, request_options: RequestOptionsOrDict | None = None) -> list[ApiKey]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all API keys belonging to the calling user. `key_value` is `null` on every entry — only the display `key_prefix` is recoverable after creation. To get a fresh raw value for a key, rotate it: `POST /api/keys/{id}/rotate`.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.api_keys.list_api_keys()
    # TODO: Handle 'response' of type list[ApiKey]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListApiKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.api_keys.list_api_keys()
    # TODO: Handle 'response' of type list[ApiKey]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListApiKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ApiKey](audioscrape/models/api_key.py)&#93;</code> -- All API keys for the calling user

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ListApiKeysErrorBody](audioscrape/errors/list_api_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rotate_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old secret stops authenticating the moment this call returns; the new secret is in `key_value` — shown only in this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with zero valid credentials. `last_used` resets to `null` because the new secret has never been used.

Accepts either a session cookie or an existing API key as auth. A key can rotate itself.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.api_keys.rotate_api_key(1)
    # TODO: Handle 'response' of type ApiKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateApiKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.api_keys.rotate_api_key(1)
    # TODO: Handle 'response' of type ApiKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | API key ID (from the `id` field on create / list) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKey](audioscrape/models/api_key.py)</code> -- Key rotated. `key_value` holds the NEW secret, shown in full here for the only time.

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[RotateApiKeyErrorBody](audioscrape/errors/rotate_api_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Account

> Source: [Account](audioscrape/apis/account.py)

<details>
<summary><code>def get_me(*, request_options: RequestOptionsOrDict | None = None) -> MeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the request (if any), and the effective dated API version. Use this as the first call in any integration to verify credentials and discover capabilities.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.get_me()
    # TODO: Handle 'response' of type MeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMeErrorBody
```

**Async**

```python
try:
    response = await async_client.account.get_me()
    # TODO: Handle 'response' of type MeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MeResponse](audioscrape/models/me_response.py)</code> -- Current user, plan, limits, key info

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetMeErrorBody](audioscrape/errors/get_me_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_me_usage(*, request_options: RequestOptionsOrDict | None = None) -> UsageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts) alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy burst and back off if you're close to a cap.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.get_me_usage()
    # TODO: Handle 'response' of type UsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMeUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.account.get_me_usage()
    # TODO: Handle 'response' of type UsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMeUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageResponse](audioscrape/models/usage_response.py)</code> -- Usage counters vs plan limits

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetMeUsageErrorBody](audioscrape/errors/get_me_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AgentRail

> Source: [AgentRail](audioscrape/apis/agent_rail.py)

<details>
<summary><code>def buy_credit(body: BuyCreditRequest | BuyCreditRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.buy_credit(BuyCreditRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuyCreditErrorBody
```

**Async**

```python
try:
    await async_client.agent_rail.buy_credit(BuyCreditRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuyCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuyCreditRequest](audioscrape/models/buy_credit_request.py) \| [BuyCreditRequestDict](audioscrape/models/buy_credit_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[BuyCreditErrorBody](audioscrape/errors/buy_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409, 503 | <code>[RawError](audioscrape/core/results.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_balance(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.credit_balance()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreditBalanceErrorBody
```

**Async**

```python
try:
    await async_client.agent_rail.credit_balance()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreditBalanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[CreditBalanceErrorBody](audioscrape/errors/credit_balance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](audioscrape/core/results.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def excerpt(episode_id: int, t: float, *, seconds: float | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.excerpt(1, 1.5)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExcerptErrorBody
```

**Async**

```python
try:
    await async_client.agent_rail.excerpt(1, 1.5)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExcerptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>episode_id</code> | <code>int</code> | Recording id (from a search result). |
| <code>t</code> | <code>float</code> | Moment in seconds. |
| <code>seconds</code> | <code>float \| None</code> | Seconds after the moment, 10–180 (default 90).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ExcerptErrorBody](audioscrape/errors/excerpt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 404 | <code>[RawError](audioscrape/core/results.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def manifest(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.manifest()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.agent_rail.manifest()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[RawError](audioscrape/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overview(episode_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.overview(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverviewErrorBody
```

**Async**

```python
try:
    await async_client.agent_rail.overview(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>episode_id</code> | <code>int</code> | Recording id (from a search result). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[OverviewErrorBody](audioscrape/errors/overview_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 404 | <code>[RawError](audioscrape/core/results.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search(body: AgentSearchRequest | AgentSearchRequestDict, *, scope: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.search(AgentSearchRequest(query="some example string"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchErrorBody
```

**Async**

```python
try:
    await async_client.agent_rail.search(AgentSearchRequest(query="some example string"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AgentSearchRequest](audioscrape/models/agent_search_request.py) \| [AgentSearchRequestDict](audioscrape/models/agent_search_request.py)</code> | The request body. |
| <code>scope</code> | <code>str \| None</code> | `podcasts`, or `government` (public meetings and court hearings).<br>Unset: the whole record.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[SearchErrorBody](audioscrape/errors/search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402 | <code>[RawError](audioscrape/core/results.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def transcribe(body: AgentTranscribeRequest | AgentTranscribeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.transcribe(AgentTranscribeRequest(url="some example string"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranscribeErrorBody
```

**Async**

```python
try:
    await async_client.agent_rail.transcribe(AgentTranscribeRequest(url="some example string"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranscribeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AgentTranscribeRequest](audioscrape/models/agent_transcribe_request.py) \| [AgentTranscribeRequestDict](audioscrape/models/agent_transcribe_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[TranscribeErrorBody](audioscrape/errors/transcribe_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](audioscrape/core/results.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def transcription_status(job_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_rail.transcription_status(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranscriptionStatusErrorBody
```

**Async**

```python
try:
    await async_client.agent_rail.transcription_status(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranscriptionStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>int</code> | Job id from /api/agent/v1/transcribe |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[TranscriptionStatusErrorBody](audioscrape/errors/transcription_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](audioscrape/core/results.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Charts

> Source: [Charts](audioscrape/apis/charts.py)

<details>
<summary><code>def get_chart_podcasts(*, country: str | None = None, platform: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ChartPodcastEntry]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If `platform` is omitted, results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.charts.get_chart_podcasts()
    # TODO: Handle 'response' of type list[ChartPodcastEntry]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChartPodcastsErrorBody
```

**Async**

```python
try:
    response = await async_client.charts.get_chart_podcasts()
    # TODO: Handle 'response' of type list[ChartPodcastEntry]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChartPodcastsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str \| None</code> | ISO 3166-1 alpha-2 country code (default `us`)<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>str \| None</code> | `apple` or `spotify` (default: both)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Max results (default 50, max 200)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ChartPodcastEntry](audioscrape/models/chart_podcast_entry.py)&#93;</code> -- Podcast rankings

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetChartPodcastsErrorBody](audioscrape/errors/get_chart_podcasts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataExport

> Source: [DataExport](audioscrape/apis/data_export.py)

<details>
<summary><code>def create_workspace_export(workspace: int, *, request_options: RequestOptionsOrDict | None = None) -> CreateExportJobResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an asynchronous job to package the workspace's audio files,
transcripts, items, and metadata into a single downloadable archive.
Only workspace `owner` or `admin` members may call this endpoint.

At most one job per workspace can be in `queued` or `running` status at
any time; further requests return `429` until the active job finishes.
Poll `GET /api/workspaces/{workspace}/export/{job_id}` for status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_export.create_workspace_export(1)
    # TODO: Handle 'response' of type CreateExportJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWorkspaceExportErrorBody
```

**Async**

```python
try:
    response = await async_client.data_export.create_workspace_export(1)
    # TODO: Handle 'response' of type CreateExportJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWorkspaceExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>int</code> | Workspace ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateExportJobResponse](audioscrape/models/create_export_job_response.py)</code> -- Export job created and queued for processing

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[CreateWorkspaceExportErrorBody](audioscrape/errors/create_workspace_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspace_export(workspace: int, job_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ExportJobStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current lifecycle state of an export job. When `status` is
`completed`, `download_url` is a signed URL valid for 15 minutes (until
`download_expires_at`); each call signs a fresh one. A finished export
stays downloadable for 7 days, after which `status` reads `expired`.

Caller must be a member of the workspace (any role).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_export.get_workspace_export(1, 1)
    # TODO: Handle 'response' of type ExportJobStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceExportErrorBody
```

**Async**

```python
try:
    response = await async_client.data_export.get_workspace_export(1, 1)
    # TODO: Handle 'response' of type ExportJobStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>int</code> | Workspace ID |
| <code>job_id</code> | <code>int</code> | Export job ID returned by POST /api/workspaces/{workspace}/export |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExportJobStatus](audioscrape/models/export_job_status.py)</code> -- Current status of the export job

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetWorkspaceExportErrorBody](audioscrape/errors/get_workspace_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Episodes

> Source: [Episodes](audioscrape/apis/episodes.py)

<details>
<summary><code>def get_episode_transcript(episode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Transcript</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the transcript on its own (segments + speaker list). Equivalent to the `transcript` field on `GET /api/episodes/{id}?include=transcript`. Use this endpoint when you don't need the metadata envelope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.episodes.get_episode_transcript("some example string")
    # TODO: Handle 'response' of type Transcript
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEpisodeTranscriptErrorBody
```

**Async**

```python
try:
    response = await async_client.episodes.get_episode_transcript("some example string")
    # TODO: Handle 'response' of type Transcript
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEpisodeTranscriptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>episode_id</code> | <code>str</code> | Numeric episode ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transcript](audioscrape/models/transcript.py)</code> -- Transcript segments + speaker list

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetEpisodeTranscriptErrorBody](audioscrape/errors/get_episode_transcript_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_public_episode(episode_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EpisodeDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the episode + its parent podcast. Heavy fields are opt-in via `?include=` — pass `transcript`, `entities`, or both to load them in the same response. Useful when you want details without paying the cost of fetching a 500KB+ transcript by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.episodes.get_public_episode("some example string")
    # TODO: Handle 'response' of type EpisodeDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPublicEpisodeErrorBody
```

**Async**

```python
try:
    response = await async_client.episodes.get_public_episode("some example string")
    # TODO: Handle 'response' of type EpisodeDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPublicEpisodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>episode_id</code> | <code>str</code> | Numeric episode ID |
| <code>include</code> | <code>str \| None</code> | Comma-separated optional fields: `transcript`, `entities`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeDetail](audioscrape/models/episode_detail.py)</code> -- Episode + podcast, plus any requested optional fields

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetPublicEpisodeErrorBody](audioscrape/errors/get_public_episode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_recent_episodes_v1(*, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> EpisodeList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the most recently published episodes across all podcasts. Convenience alias for items where `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.episodes.list_recent_episodes_v1()
    # TODO: Handle 'response' of type EpisodeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecentEpisodesV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.episodes.list_recent_episodes_v1()
    # TODO: Handle 'response' of type EpisodeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecentEpisodesV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Max results (default 20, max 100)<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Result offset for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeList](audioscrape/models/episode_list.py)</code> -- Episodes ordered by publish date descending

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ListRecentEpisodesV1ErrorBody](audioscrape/errors/list_recent_episodes_v1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](audioscrape/apis/items.py)

<details>
<summary><code>def get_item(item_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EpisodeDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are opt-in via `?include=`. Equivalent to `GET /api/episodes/{id}` for podcast episodes, but works uniformly across all content types.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.items.get_item("some example string")
    # TODO: Handle 'response' of type EpisodeDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.get_item("some example string")
    # TODO: Handle 'response' of type EpisodeDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>item_id</code> | <code>str</code> | Numeric item ID (works for any source_type) |
| <code>include</code> | <code>str \| None</code> | Comma-separated optional fields: `transcript`, `entities`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeDetail](audioscrape/models/episode_detail.py)</code> -- Item + parent podcast (when applicable), plus requested optional fields

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetItemErrorBody](audioscrape/errors/get_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_item_transcript(item_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Transcript</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.items.get_item_transcript("some example string")
    # TODO: Handle 'response' of type Transcript
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetItemTranscriptErrorBody
```

**Async**

```python
try:
    response = await async_client.items.get_item_transcript("some example string")
    # TODO: Handle 'response' of type Transcript
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetItemTranscriptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>item_id</code> | <code>str</code> | Numeric item ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transcript](audioscrape/models/transcript.py)</code> -- Transcript segments + speaker list

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetItemTranscriptErrorBody](audioscrape/errors/get_item_transcript_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_items(*, source_type: str | None = None, dataset_id: int | None = None, library: str | None = None, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ItemList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Universal listing across content types — podcast episodes, uploads, and future formats. Filter by `source_type`, `dataset_id`, or `library` (slug). Results are newest-first. Use this in place of `/api/episodes` when your integration needs to work with multiple content types.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.items.list_items()
    # TODO: Handle 'response' of type ItemList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.items.list_items()
    # TODO: Handle 'response' of type ItemList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_type</code> | <code>str \| None</code> | Filter by source type (`podcast_episode`, `upload`, `youtube`, ...). Omit for all types.<br>**Default**: <code>None</code> |
| <code>dataset_id</code> | <code>int \| None</code> | Restrict to items in a specific dataset<br>**Default**: <code>None</code> |
| <code>library</code> | <code>str \| None</code> | Restrict to items in a specific library (by slug)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Max results (default 20, max 100)<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Result offset for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ItemList](audioscrape/models/item_list.py)</code> -- Items ordered by publish date descending

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ListItemsErrorBody](audioscrape/errors/list_items_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_item_external(id_: int, body: UploadFromUrl | UploadFromUrlDict, *, request_options: RequestOptionsOrDict | None = None) -> UploadResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Two intake modes:
• `Content-Type: multipart/form-data` — form fields `audio` (file), optional `title`, `description`
• `Content-Type: application/json` — `{ "audio_url": "https://...", "title": "...", "description": "..." }`

JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files).
Both modes converge on the same storage + transcription pipeline; the resulting item is identical.
Transcription minutes consumed count against your plan's monthly quota (see `/api/me/usage`).
After upload, fetch full metadata at `GET /api/items/{item_id}` once transcription completes.

## Constraints

• **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset config (**1 GB** for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio is kept). Paid plans honour the dataset's `max_file_size_mb` (default 500 MB). Exceeding the cap returns `413 Payload Too Large`; JSON-mode `audio_url` is fetched under the same cap. (The MCP connector's `transcribe_audio` link path and the web paste-a-link import fetch in the pipeline without a byte cap.)
• **URL-fetch safety (JSON mode):** `audio_url` must use `https://`. URLs that resolve to private, link-local, loopback, or otherwise internal IP ranges are rejected (SSRF guard) with `422 Unprocessable Entity`.
• **Dataset configuration:** The target dataset must have `content_type = 'uploads'`. Datasets backed by RSS feeds or other source types return `409 Conflict`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.items.upload_item_external(1, UploadFromUrl(audio_url="some example string"))
    # TODO: Handle 'response' of type UploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadItemExternalErrorBody
```

**Async**

```python
try:
    response = await async_client.items.upload_item_external(1, UploadFromUrl(audio_url="some example string"))
    # TODO: Handle 'response' of type UploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadItemExternalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric dataset ID. Caller must be a member of the dataset's parent library. |
| <code>body</code> | <code>[UploadFromUrl](audioscrape/models/upload_from_url.py) \| [UploadFromUrlDict](audioscrape/models/upload_from_url.py)</code> | **This endpoint accepts TWO content types — pick one based on where the audio lives:**<br><br>1. **`application/json`** (documented schema below) — body shape `{ "audio_url": "https://...", "title": "...", "description": "..." }`. Use this when the audio is already hosted at a public HTTPS URL.<br><br>2. **`multipart/form-data`** (NOT shown in the schema above — utoipa can only render one content type per operation, but the server accepts both). Send a multipart body with these parts: `audio` (the audio file, required), `title` (text, optional), `description` (text, optional). Use this for direct file uploads from a browser or local script.<br><br>Both content types hit the same handler, write to the same storage, and produce the same `item_id`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadResponse](audioscrape/models/upload_response.py)</code> -- Upload accepted; item created and queued for transcription

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[UploadItemExternalErrorBody](audioscrape/errors/upload_item_external_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 409, 413, 415, 422 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## KnowledgeGraph

> Source: [KnowledgeGraph](audioscrape/apis/knowledge_graph.py)

<details>
<summary><code>def get_entity(entity_slug: str, *, dataset_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> EntityDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for building topic-specific feeds: pin to an entity, watch which episodes mention it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge_graph.get_entity("some example string")
    # TODO: Handle 'response' of type EntityDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntityErrorBody
```

**Async**

```python
try:
    response = await async_client.knowledge_graph.get_entity("some example string")
    # TODO: Handle 'response' of type EntityDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_slug</code> | <code>str</code> | URL slug from entity search results |
| <code>dataset_id</code> | <code>int \| None</code> | Only count/list episodes from this dataset. The dataset must be in your visible scope; otherwise 404.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityDetail](audioscrape/models/entity_detail.py)</code> -- Entity + most-mentioning episodes

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetEntityErrorBody](audioscrape/errors/get_entity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_real_trending(*, request_options: RequestOptionsOrDict | None = None) -> TrendingResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned entities. Computed from anonymised search logs and live entity-mention counts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge_graph.get_real_trending()
    # TODO: Handle 'response' of type TrendingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRealTrendingErrorBody
```

**Async**

```python
try:
    response = await async_client.knowledge_graph.get_real_trending()
    # TODO: Handle 'response' of type TrendingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRealTrendingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrendingResponse](audioscrape/models/trending_response.py)</code> -- Top searches + top entities for the last 7 days

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetRealTrendingErrorBody](audioscrape/errors/get_real_trending_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_entities(*, q: str | None = None, type_: str | None = None, limit: int | None = None, dataset_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> EntitySearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted from podcast content. Results are sorted by total mention count across the corpus.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge_graph.search_entities()
    # TODO: Handle 'response' of type EntitySearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchEntitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.knowledge_graph.search_entities()
    # TODO: Handle 'response' of type EntitySearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Name prefix to search for<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | Filter by entity type (e.g. `person`, `organization`, `place`)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Max results (default 20, max 50)<br>**Default**: <code>None</code> |
| <code>dataset_id</code> | <code>int \| None</code> | Only entities mentioned in this dataset. The dataset must be in your visible scope (public, or in a workspace you belong to); otherwise 404.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitySearchResponse](audioscrape/models/entity_search_response.py)</code> -- Matching entities sorted by mention count

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[SearchEntitiesErrorBody](audioscrape/errors/search_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Libraries

> Source: [Libraries](audioscrape/apis/libraries.py)

<details>
<summary><code>def get_dataset(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> DatasetDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have a dataset ID from a search result and need its context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.libraries.get_dataset(1)
    # TODO: Handle 'response' of type DatasetDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDatasetErrorBody
```

**Async**

```python
try:
    response = await async_client.libraries.get_dataset(1)
    # TODO: Handle 'response' of type DatasetDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric dataset ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetDetail](audioscrape/models/dataset_detail.py)</code> -- Dataset + parent library reference

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetDatasetErrorBody](audioscrape/errors/get_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_library(slug: str, *, request_options: RequestOptionsOrDict | None = None) -> LibraryDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one library + the datasets the calling user can see. Public datasets are always returned; workspace-scoped datasets are returned only to members.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.libraries.get_library("some example string")
    # TODO: Handle 'response' of type LibraryDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLibraryErrorBody
```

**Async**

```python
try:
    response = await async_client.libraries.get_library("some example string")
    # TODO: Handle 'response' of type LibraryDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLibraryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | Library slug (e.g. `audioscrape`) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LibraryDetail](audioscrape/models/library_detail.py)</code> -- Library + visible datasets

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetLibraryErrorBody](audioscrape/errors/get_library_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_libraries(*, request_options: RequestOptionsOrDict | None = None) -> LibraryList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every public library on Audioscrape, ordered by subscriber count. The `is_subscribed` field on each entry tells you whether the calling user is already a member.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.libraries.list_libraries()
    # TODO: Handle 'response' of type LibraryList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLibrariesErrorBody
```

**Async**

```python
try:
    response = await async_client.libraries.list_libraries()
    # TODO: Handle 'response' of type LibraryList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLibrariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LibraryList](audioscrape/models/library_list.py)</code> -- All public libraries

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ListLibrariesErrorBody](audioscrape/errors/list_libraries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Persons

> Source: [Persons](audioscrape/apis/persons.py)

<details>
<summary><code>def get_person_v1(person_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PersonDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.persons.get_person_v1("some example string")
    # TODO: Handle 'response' of type PersonDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPersonV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.persons.get_person_v1("some example string")
    # TODO: Handle 'response' of type PersonDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPersonV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>person_slug</code> | <code>str</code> | URL slug from a person search result |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonDetail](audioscrape/models/person_detail.py)</code> -- Person + recent appearances

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetPersonV1ErrorBody](audioscrape/errors/get_person_v1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_persons_v1(*, q: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PersonList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the persons index by name. Persons are speakers identified across podcast transcripts — every speaker who's been attributed to at least one segment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.persons.search_persons_v1()
    # TODO: Handle 'response' of type PersonList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchPersonsV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.persons.search_persons_v1()
    # TODO: Handle 'response' of type PersonList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchPersonsV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Name substring (case-insensitive)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Max results (default 20, max 100)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonList](audioscrape/models/person_list.py)</code> -- Matching persons

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[SearchPersonsV1ErrorBody](audioscrape/errors/search_persons_v1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Podcasts

> Source: [Podcasts](audioscrape/apis/podcasts.py)

<details>
<summary><code>def get_podcast_ranking_history(podcast_id: str, *, request_options: RequestOptionsOrDict | None = None) -> list[PodcastRankingHistoryEntry]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the historical chart positions for a single podcast across countries and platforms, most recent first. Useful for tracking a show's performance trajectory over time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.get_podcast_ranking_history("some example string")
    # TODO: Handle 'response' of type list[PodcastRankingHistoryEntry]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPodcastRankingHistoryErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.get_podcast_ranking_history("some example string")
    # TODO: Handle 'response' of type list[PodcastRankingHistoryEntry]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPodcastRankingHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>podcast_id</code> | <code>str</code> | Numeric podcast ID OR URL slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[PodcastRankingHistoryEntry](audioscrape/models/podcast_ranking_history_entry.py)&#93;</code> -- Ranking history (capped at the last few months)

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetPodcastRankingHistoryErrorBody](audioscrape/errors/get_podcast_ranking_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_public_podcast(podcast_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PodcastDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a URL slug, so links you share by slug also work for API calls.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.get_public_podcast("some example string")
    # TODO: Handle 'response' of type PodcastDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPublicPodcastErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.get_public_podcast("some example string")
    # TODO: Handle 'response' of type PodcastDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPublicPodcastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>podcast_id</code> | <code>str</code> | Numeric podcast ID OR URL slug (e.g. `1234` or `supply-chain-today`) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastDetail](audioscrape/models/podcast_detail.py)</code> -- Podcast + recent episodes

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetPublicPodcastErrorBody](audioscrape/errors/get_public_podcast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_podcast_episodes_v1(podcast_id: str, *, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> EpisodeList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a URL slug.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.list_podcast_episodes_v1("some example string")
    # TODO: Handle 'response' of type EpisodeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPodcastEpisodesV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.list_podcast_episodes_v1("some example string")
    # TODO: Handle 'response' of type EpisodeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPodcastEpisodesV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>podcast_id</code> | <code>str</code> | Numeric podcast ID OR URL slug |
| <code>limit</code> | <code>int \| None</code> | Max results (default 20, max 100)<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Result offset for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeList](audioscrape/models/episode_list.py)</code> -- Episodes ordered by publish date descending

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ListPodcastEpisodesV1ErrorBody](audioscrape/errors/list_podcast_episodes_v1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_podcasts_v1(*, q: str | None = None, language: str | None = None, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PodcastList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count (most prolific first), then alphabetically. Convenience alias for items where `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.podcasts.search_podcasts_v1()
    # TODO: Handle 'response' of type PodcastList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchPodcastsV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.podcasts.search_podcasts_v1()
    # TODO: Handle 'response' of type PodcastList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchPodcastsV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Title substring (case-insensitive)<br>**Default**: <code>None</code> |
| <code>language</code> | <code>str \| None</code> | ISO 639-1 language filter (e.g. `en`, `de`)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Max results (default 20, max 100)<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Result offset for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastList](audioscrape/models/podcast_list.py)</code> -- Podcasts

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[SearchPodcastsV1ErrorBody](audioscrape/errors/search_podcasts_v1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](audioscrape/apis/search.py)

<details>
<summary><code>def search_api_v1(body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent episode + podcast.
The default `search_type` of `hybrid` combines keyword scoring with semantic vector matching; use `text` for boolean queries
and quoted phrases, `semantic` for natural-language questions. Filter by podcast, speaker, or publish-date range via the
`filters` object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search.search_api_v1(SearchRequest(query="some example string"))
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchApiV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_api_v1(SearchRequest(query="some example string"))
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchApiV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest](audioscrape/models/search_request.py) \| [SearchRequestDict](audioscrape/models/search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](audioscrape/models/search_response.py)</code> -- Search results

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[SearchApiV1ErrorBody](audioscrape/errors/search_api_v1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## System

> Source: [System](audioscrape/apis/system.py)

<details>
<summary><code>def get_health_openapi(*, request_options: RequestOptionsOrDict | None = None) -> HealthResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns `200 OK` with a small JSON payload as long as the API is responding. Useful as a liveness probe; does not check downstream dependencies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.system.get_health_openapi()
    # TODO: Handle 'response' of type HealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.system.get_health_openapi()
    # TODO: Handle 'response' of type HealthResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthResponse](audioscrape/models/health_response.py)</code> -- Service is healthy

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[RawError](audioscrape/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](audioscrape/apis/workspaces.py)

<details>
<summary><code>def get_workspace(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets that never appear under `/api/libraries`. `{workspace}` accepts a slug or a numeric ID. Members only: a workspace you don't belong to returns 404.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.get_workspace("some example string")
    # TODO: Handle 'response' of type WorkspaceDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspace("some example string")
    # TODO: Handle 'response' of type WorkspaceDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | Workspace slug (e.g. `audioscrape`) or numeric workspace ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceDetail](audioscrape/models/workspace_detail.py)</code> -- Workspace + all its datasets (private included)

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[GetWorkspaceErrorBody](audioscrape/errors/get_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_workspace_datasets(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> DatasetList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every dataset in one of your workspaces — `public`, `workspace`, and `private` alike. Same `{workspace}` resolution (slug or numeric ID) and members-only access rules as `GET /api/workspaces/{workspace}`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.list_workspace_datasets("some example string")
    # TODO: Handle 'response' of type DatasetList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkspaceDatasetsErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.list_workspace_datasets("some example string")
    # TODO: Handle 'response' of type DatasetList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkspaceDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | Workspace slug (e.g. `audioscrape`) or numeric workspace ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetList](audioscrape/models/dataset_list.py)</code> -- All datasets in the workspace, ordered by ID

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ListWorkspaceDatasetsErrorBody](audioscrape/errors/list_workspace_datasets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 404, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_workspaces(*, request_options: RequestOptionsOrDict | None = None) -> WorkspaceList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every workspace the calling user is a member of, with the caller's role in each. `is_current` marks the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.list_workspaces()
    # TODO: Handle 'response' of type WorkspaceList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkspacesErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.list_workspaces()
    # TODO: Handle 'response' of type WorkspaceList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkspacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](audioscrape/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceList](audioscrape/models/workspace_list.py)</code> -- Workspaces the calling user belongs to

**OnError**: <code>[ApiError](audioscrape/core/exceptions.py)&#91;[ListWorkspacesErrorBody](audioscrape/errors/list_workspaces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 429 | <code>[ApiErrorBody](audioscrape/models/api_error_body.py)</code> |
| anything unmapped | <code>[RawError](audioscrape/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

