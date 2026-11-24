# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [StatableClient](statable/client.py)

## Bootstrap

> Source: [Bootstrap](statable/apis/bootstrap.py)

<details>
<summary><code>def bootstrap_send_otp(body: BootstrapSendOtpRequest | BootstrapSendOtpRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BootstrapSendOtpResponse, BootstrapSendOtpErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an account, so it cannot be used to test for one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bootstrap.with_raw_response.bootstrap_send_otp(BootstrapSendOtpRequest(email="agent@yourcompany.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BootstrapSendOtpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BootstrapSendOtpErrorBody
```

**Async**

```python
result = await async_client.bootstrap.with_raw_response.bootstrap_send_otp(
    BootstrapSendOtpRequest(email="agent@yourcompany.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BootstrapSendOtpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BootstrapSendOtpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BootstrapSendOtpRequest](statable/models/bootstrap_send_otp_request.py) \| [BootstrapSendOtpRequestDict](statable/models/bootstrap_send_otp_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[BootstrapSendOtpResponse](statable/models/bootstrap_send_otp_response.py), [BootstrapSendOtpErrorBody](statable/errors/bootstrap_send_otp_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BootstrapSendOtpResponse](statable/models/bootstrap_send_otp_response.py)</code> -- The code was sent.

**On `Failure`**: `error` is <code>[BootstrapSendOtpErrorBody](statable/errors/bootstrap_send_otp_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bootstrap_verify_otp(body: BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BootstrapVerifyOtpResponse, BootstrapVerifyOtpErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a freshly minted key — the raw token EXACTLY ONCE. `accept_terms` must be true. Requested `scopes` must be within `API_BOOTSTRAP_SCOPES` (default `read,sites:write`); omitting them yields that whole set, and `billing:write` is never obtainable here. Everything that can be rejected without the code is validated first, so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default, 365 max).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bootstrap.with_raw_response.bootstrap_verify_otp(
    BootstrapVerifyOtpRequest(
        email="agent@yourcompany.com", code="123456", accept_terms=True, key_name="provisioning bot"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BootstrapVerifyOtpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BootstrapVerifyOtpErrorBody
```

**Async**

```python
result = await async_client.bootstrap.with_raw_response.bootstrap_verify_otp(
    BootstrapVerifyOtpRequest(
        email="agent@yourcompany.com", code="123456", accept_terms=True, key_name="provisioning bot"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BootstrapVerifyOtpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BootstrapVerifyOtpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BootstrapVerifyOtpRequest](statable/models/bootstrap_verify_otp_request.py) \| [BootstrapVerifyOtpRequestDict](statable/models/bootstrap_verify_otp_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[BootstrapVerifyOtpResponse](statable/models/bootstrap_verify_otp_response.py), [BootstrapVerifyOtpErrorBody](statable/errors/bootstrap_verify_otp_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BootstrapVerifyOtpResponse](statable/models/bootstrap_verify_otp_response.py)</code> -- The account and its first key, including the one-time token.

**On `Failure`**: `error` is <code>[BootstrapVerifyOtpErrorBody](statable/errors/bootstrap_verify_otp_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Keys

> Source: [Keys](statable/apis/keys.py)

<details>
<summary><code>def create_api_key(body: CreateApiKeyRequest | CreateApiKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreatedApiKey, CreateApiKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the authenticating key's scopes (else 403 `scope_escalation`), and a single-site key may only create keys locked to its own site (else 403 `key_not_scoped`). `expires_in_days` defaults to 90 and is capped at 365 — unlike the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.keys.with_raw_response.create_api_key(CreateApiKeyRequest(name="reporting job", scopes=[Scope.READ]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreatedApiKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiKeyErrorBody
```

**Async**

```python
result = await async_client.keys.with_raw_response.create_api_key(
    CreateApiKeyRequest(name="reporting job", scopes=[Scope.READ])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreatedApiKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateApiKeyRequest](statable/models/create_api_key_request.py) \| [CreateApiKeyRequestDict](statable/models/create_api_key_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[CreatedApiKey](statable/models/created_api_key.py), [CreateApiKeyErrorBody](statable/errors/create_api_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreatedApiKey](statable/models/created_api_key.py)</code> -- The created key, including the one-time raw token.

**On `Failure`**: `error` is <code>[CreateApiKeyErrorBody](statable/errors/create_api_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_api_key_events(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiKeyEventList, ListApiKeyEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail). `actor_key_id` names the API key that performed the action, or null when it was done from the dashboard.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.keys.with_raw_response.list_api_key_events(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiKeyEventList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApiKeyEventsErrorBody
```

**Async**

```python
result = await async_client.keys.with_raw_response.list_api_key_events(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiKeyEventList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApiKeyEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric API key id (from GET /keys). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[ApiKeyEventList](statable/models/api_key_event_list.py), [ListApiKeyEventsErrorBody](statable/errors/list_api_key_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiKeyEventList](statable/models/api_key_event_list.py)</code> -- The key's audit trail.

**On `Failure`**: `error` is <code>[ListApiKeyEventsErrorBody](statable/errors/list_api_key_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_api_keys(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiKeyList, ListApiKeysErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw token exists only in the create and rotate responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.keys.with_raw_response.list_api_keys()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiKeyList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApiKeysErrorBody
```

**Async**

```python
result = await async_client.keys.with_raw_response.list_api_keys()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiKeyList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApiKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[ApiKeyList](statable/models/api_key_list.py), [ListApiKeysErrorBody](statable/errors/list_api_keys_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiKeyList](statable/models/api_key_list.py)</code> -- The account's active keys.

**On `Failure`**: `error` is <code>[ListApiKeysErrorBody](statable/errors/list_api_keys_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RevokeApiKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409 `self_modification`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.keys.with_raw_response.revoke_api_key(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeApiKeyErrorBody
```

**Async**

```python
result = await async_client.keys.with_raw_response.revoke_api_key(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric API key id (from GET /keys). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;None, [RevokeApiKeyErrorBody](statable/errors/revoke_api_key_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RevokeApiKeyErrorBody](statable/errors/revoke_api_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rotate_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreatedApiKey, RotateApiKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409 `self_modification`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.keys.with_raw_response.rotate_api_key(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreatedApiKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateApiKeyErrorBody
```

**Async**

```python
result = await async_client.keys.with_raw_response.rotate_api_key(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreatedApiKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric API key id (from GET /keys). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[CreatedApiKey](statable/models/created_api_key.py), [RotateApiKeyErrorBody](statable/errors/rotate_api_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreatedApiKey](statable/models/created_api_key.py)</code> -- The rotated key, including the one-time raw token.

**On `Failure`**: `error` is <code>[RotateApiKeyErrorBody](statable/errors/rotate_api_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](statable/apis/sites.py)

<details>
<summary><code>def create_funnel(id_: int, body: FunnelRequest | FunnelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FunnelDefinition, CreateFunnelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate name is 409 `funnel_exists`. Listing and running funnels lives on the read surface (GET /funnels, POST /funnels/{id}/report).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.create_funnel(
    1,
    FunnelRequest(
        name="Signup flow", steps=[FunnelStep(kind=Kind.PAGE, path="/"), FunnelStep(kind=Kind.GOAL, goal_id=12)]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFunnelErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.create_funnel(
    1,
    FunnelRequest(
        name="Signup flow", steps=[FunnelStep(kind=Kind.PAGE, path="/"), FunnelStep(kind=Kind.GOAL, goal_id=12)]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFunnelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric site id. |
| <code>body</code> | <code>[FunnelRequest](statable/models/funnel_request.py) \| [FunnelRequestDict](statable/models/funnel_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[FunnelDefinition](statable/models/funnel_definition.py), [CreateFunnelErrorBody](statable/errors/create_funnel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FunnelDefinition](statable/models/funnel_definition.py)</code> -- The created funnel.

**On `Failure`**: `error` is <code>[CreateFunnelErrorBody](statable/errors/create_funnel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_goal(id_: int, body: GoalRequest | GoalRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Goal, CreateGoalErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. A duplicate name is 409 `goal_exists`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.create_goal(1, GoalRequest(name="Signup", path="/thanks", operator=Operator.E))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Goal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGoalErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.create_goal(
    1, GoalRequest(name="Signup", path="/thanks", operator=Operator.E)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Goal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGoalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric site id. |
| <code>body</code> | <code>[GoalRequest](statable/models/goal_request.py) \| [GoalRequestDict](statable/models/goal_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[Goal](statable/models/goal.py), [CreateGoalErrorBody](statable/errors/create_goal_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Goal](statable/models/goal.py)</code> -- The created goal.

**On `Failure`**: `error` is <code>[CreateGoalErrorBody](statable/errors/create_goal_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_site(body: CreateSiteRequest | CreateSiteRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SiteDetail, CreateSiteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires an ALL-SITES key: a single-site key gets 403 `key_not_scoped`, since the new site would be outside its own scope. A duplicate url is 409 `site_exists` — unlike the dashboard, which permits it: for an agent a duplicate is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly as the dashboard does. Send an `Idempotency-Key` to make retries safe.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.create_site(
    CreateSiteRequest(url="https://example.com", timezone="Europe/Kyiv")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SiteDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSiteErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.create_site(
    CreateSiteRequest(url="https://example.com", timezone="Europe/Kyiv")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SiteDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSiteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSiteRequest](statable/models/create_site_request.py) \| [CreateSiteRequestDict](statable/models/create_site_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Replays the stored response for 24 hours instead of creating a second site. Reuse with a different body is 409 `idempotency_conflict`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SiteDetail](statable/models/site_detail.py), [CreateSiteErrorBody](statable/errors/create_site_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SiteDetail](statable/models/site_detail.py)</code> -- The created site, with its script URL and snippet.

**On `Failure`**: `error` is <code>[CreateSiteErrorBody](statable/errors/create_site_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_funnel(id_: int, funnel_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteFunnelErrorBody]</code></summary>

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
result = client.sites.with_raw_response.delete_funnel(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFunnelErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.delete_funnel(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFunnelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>funnel_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;None, [DeleteFunnelErrorBody](statable/errors/delete_funnel_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteFunnelErrorBody](statable/errors/delete_funnel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_goal(id_: int, goal_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteGoalErrorBody]</code></summary>

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
result = client.sites.with_raw_response.delete_goal(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGoalErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.delete_goal(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGoalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>goal_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;None, [DeleteGoalErrorBody](statable/errors/delete_goal_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteGoalErrorBody](statable/errors/delete_goal_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_site(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSiteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals, hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member gets 403 `not_site_owner` — there is no API equivalent of the dashboard's "remove my access".

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.delete_site(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSiteErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.delete_site(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSiteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric site id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;None, [DeleteSiteErrorBody](statable/errors/delete_site_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSiteErrorBody](statable/errors/delete_site_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_blocked_ips(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SitesSettingsBlockedIpsResponse, GetBlockedIPsErrorBody]</code></summary>

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
result = client.sites.with_raw_response.get_blocked_ips(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesSettingsBlockedIpsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBlockedIPsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.get_blocked_ips(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesSettingsBlockedIpsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBlockedIPsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SitesSettingsBlockedIpsResponse](statable/models/sites_settings_blocked_ips_response.py), [GetBlockedIPsErrorBody](statable/errors/get_blocked_ips_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SitesSettingsBlockedIpsResponse](statable/models/sites_settings_blocked_ips_response.py)</code> -- The current setting.

**On `Failure`**: `error` is <code>[GetBlockedIPsErrorBody](statable/errors/get_blocked_ips_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_country_settings(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CountryList, GetCountrySettingsErrorBody]</code></summary>

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
result = client.sites.with_raw_response.get_country_settings(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CountryList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCountrySettingsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.get_country_settings(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CountryList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCountrySettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[CountryList](statable/models/country_list.py), [GetCountrySettingsErrorBody](statable/errors/get_country_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CountryList](statable/models/country_list.py)</code> -- The current setting.

**On `Failure`**: `error` is <code>[GetCountrySettingsErrorBody](statable/errors/get_country_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_hostname_settings(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[HostnameList, GetHostnameSettingsErrorBody]</code></summary>

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
result = client.sites.with_raw_response.get_hostname_settings(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HostnameList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetHostnameSettingsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.get_hostname_settings(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HostnameList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetHostnameSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[HostnameList](statable/models/hostname_list.py), [GetHostnameSettingsErrorBody](statable/errors/get_hostname_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[HostnameList](statable/models/hostname_list.py)</code> -- The current setting.

**On `Failure`**: `error` is <code>[GetHostnameSettingsErrorBody](statable/errors/get_hostname_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_public_dashboard(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicDashboard, GetPublicDashboardErrorBody]</code></summary>

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
result = client.sites.with_raw_response.get_public_dashboard(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicDashboard
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPublicDashboardErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.get_public_dashboard(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicDashboard
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPublicDashboardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[PublicDashboard](statable/models/public_dashboard.py), [GetPublicDashboardErrorBody](statable/errors/get_public_dashboard_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicDashboard](statable/models/public_dashboard.py)</code> -- The current setting.

**On `Failure`**: `error` is <code>[GetPublicDashboardErrorBody](statable/errors/get_public_dashboard_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_site_snippet(id_: str, *, type_: TypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SiteSnippet, GetSiteSnippetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the script URL and the ready-to-paste tag. Scope `read`, not `sites:write`: the snippet is public information (it ends up in the page source), and shared users may install tracking too. `type` selects a widget instead of the tracker: a hobby site gets the bundled `/t/` build, which counts as well as draws, a paid site the widget-only build — its counting is the tracker tag it installs separately.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.get_site_snippet("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SiteSnippet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSiteSnippetErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.get_site_snippet("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SiteSnippet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSiteSnippetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>type_</code> | <code>[TypeOrStr](statable/models/enums/type.py) \| None</code> | Omit for the tracking script.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SiteSnippet](statable/models/site_snippet.py), [GetSiteSnippetErrorBody](statable/errors/get_site_snippet_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SiteSnippet](statable/models/site_snippet.py)</code> -- The install URL and snippet.

**On `Failure`**: `error` is <code>[GetSiteSnippetErrorBody](statable/errors/get_site_snippet_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_tracking_settings(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TrackingSettings, GetTrackingSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies and its marginal brotli cost — so a caller can trade capability against script weight without a second call. Owner or admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.get_tracking_settings(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackingSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTrackingSettingsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.get_tracking_settings(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackingSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTrackingSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric site id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[TrackingSettings](statable/models/tracking_settings.py), [GetTrackingSettingsErrorBody](statable/errors/get_tracking_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TrackingSettings](statable/models/tracking_settings.py)</code> -- The site's tracking settings.

**On `Failure`**: `error` is <code>[GetTrackingSettingsErrorBody](statable/errors/get_tracking_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_site_goals(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SitesGoalsResponse, ListSiteGoalsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Goal definitions with their ids, for the write calls below.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.list_site_goals(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesGoalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSiteGoalsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.list_site_goals(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesGoalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSiteGoalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric site id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SitesGoalsResponse](statable/models/sites_goals_response.py), [ListSiteGoalsErrorBody](statable/errors/list_site_goals_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SitesGoalsResponse](statable/models/sites_goals_response.py)</code> -- The site's goals.

**On `Failure`**: `error` is <code>[ListSiteGoalsErrorBody](statable/errors/list_site_goals_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_blocked_ips(id_: int, body: list[str], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SettingsCount, SetBlockedIPsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.set_blocked_ips(1, ["some example string"])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettingsCount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetBlockedIPsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.set_blocked_ips(1, ["some example string"])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettingsCount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetBlockedIPsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>list&#91;str&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SettingsCount](statable/models/settings_count.py), [SetBlockedIPsErrorBody](statable/errors/set_blocked_ips_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SettingsCount](statable/models/settings_count.py)</code> -- Applied.

**On `Failure`**: `error` is <code>[SetBlockedIPsErrorBody](statable/errors/set_blocked_ips_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_country_settings(id_: int, body: CountryListRequest | CountryListRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SettingsCount, SetCountrySettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.set_country_settings(1, CountryListRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettingsCount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetCountrySettingsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.set_country_settings(1, CountryListRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettingsCount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetCountrySettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[CountryListRequest](statable/models/country_list_request.py) \| [CountryListRequestDict](statable/models/country_list_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SettingsCount](statable/models/settings_count.py), [SetCountrySettingsErrorBody](statable/errors/set_country_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SettingsCount](statable/models/settings_count.py)</code> -- Applied.

**On `Failure`**: `error` is <code>[SetCountrySettingsErrorBody](statable/errors/set_country_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_hostname_settings(id_: int, body: HostnameListRequest | HostnameListRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SettingsCount, SetHostnameSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.set_hostname_settings(1, HostnameListRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettingsCount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetHostnameSettingsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.set_hostname_settings(1, HostnameListRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettingsCount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetHostnameSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[HostnameListRequest](statable/models/hostname_list_request.py) \| [HostnameListRequestDict](statable/models/hostname_list_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SettingsCount](statable/models/settings_count.py), [SetHostnameSettingsErrorBody](statable/errors/set_hostname_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SettingsCount](statable/models/settings_count.py)</code> -- Applied.

**On `Failure`**: `error` is <code>[SetHostnameSettingsErrorBody](statable/errors/set_hostname_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_public_dashboard(id_: int, body: PublicDashboard | PublicDashboardDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicDashboard, SetPublicDashboardErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. `enabled` must be sent explicitly — this is the one setting that changes who can SEE the data, so an absent field must not read as "turn it off".

A hobby site on a free account is always public and answers `409 hobby_always_public` to `enabled: false`. Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; `enabled: true` on one succeeds as a no-op. An owner with a paid subscription (`active`, or `past_due` during a retried renewal) may turn it off.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.set_public_dashboard(1, PublicDashboard(enabled=True))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicDashboard
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetPublicDashboardErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.set_public_dashboard(1, PublicDashboard(enabled=True))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicDashboard
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetPublicDashboardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicDashboard](statable/models/public_dashboard.py) \| [PublicDashboardDict](statable/models/public_dashboard.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[PublicDashboard](statable/models/public_dashboard.py), [SetPublicDashboardErrorBody](statable/errors/set_public_dashboard_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicDashboard](statable/models/public_dashboard.py)</code> -- Applied.

**On `Failure`**: `error` is <code>[SetPublicDashboardErrorBody](statable/errors/set_public_dashboard_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_tracking_settings(id_: int, body: TrackingSettingsRequest | TrackingSettingsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TrackingSettings, SetTrackingSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the selection wholesale. `features` is REQUIRED — an omitted key would be indistinguishable from `[]`, which disables everything optional. Locked features stay enabled whether or not they are sent, and a feature whose `requires` are unmet is rejected. Applying repoints the served bundle, then stores the selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.set_tracking_settings(1, TrackingSettingsRequest(features=[]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackingSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetTrackingSettingsErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.set_tracking_settings(1, TrackingSettingsRequest(features=[]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackingSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetTrackingSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric site id. |
| <code>body</code> | <code>[TrackingSettingsRequest](statable/models/tracking_settings_request.py) \| [TrackingSettingsRequestDict](statable/models/tracking_settings_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[TrackingSettings](statable/models/tracking_settings.py), [SetTrackingSettingsErrorBody](statable/errors/set_tracking_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TrackingSettings](statable/models/tracking_settings.py)</code> -- The settings after the change.

**On `Failure`**: `error` is <code>[SetTrackingSettingsErrorBody](statable/errors/set_tracking_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_funnel(id_: int, funnel_id: int, body: FunnelRequest | FunnelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FunnelDefinition, UpdateFunnelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.update_funnel(
    1, 1, FunnelRequest(name="some example string", steps=[FunnelStep(kind=Kind.PAGE)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFunnelErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.update_funnel(
    1, 1, FunnelRequest(name="some example string", steps=[FunnelStep(kind=Kind.PAGE)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFunnelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>funnel_id</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[FunnelRequest](statable/models/funnel_request.py) \| [FunnelRequestDict](statable/models/funnel_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[FunnelDefinition](statable/models/funnel_definition.py), [UpdateFunnelErrorBody](statable/errors/update_funnel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FunnelDefinition](statable/models/funnel_definition.py)</code> -- The updated funnel.

**On `Failure`**: `error` is <code>[UpdateFunnelErrorBody](statable/errors/update_funnel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_goal(id_: int, goal_id: int, body: GoalRequest | GoalRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Goal, UpdateGoalErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.update_goal(1, 1, GoalRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Goal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGoalErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.update_goal(1, 1, GoalRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Goal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGoalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>goal_id</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[GoalRequest](statable/models/goal_request.py) \| [GoalRequestDict](statable/models/goal_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[Goal](statable/models/goal.py), [UpdateGoalErrorBody](statable/errors/update_goal_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Goal](statable/models/goal.py)</code> -- The updated goal.

**On `Failure`**: `error` is <code>[UpdateGoalErrorBody](statable/errors/update_goal_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_site(id_: int, body: UpdateSiteRequest | UpdateSiteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SiteDetail, UpdateSiteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only — a member gets 403 `not_site_owner`. Omitted fields are left alone. Unlike the read surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites. Another account's id answers 404 `unknown_site`, exactly as a nonexistent one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sites.with_raw_response.update_site(1, UpdateSiteRequest(timezone="UTC", week_start=0))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SiteDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSiteErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.update_site(1, UpdateSiteRequest(timezone="UTC", week_start=0))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SiteDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSiteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Numeric site id. |
| <code>body</code> | <code>[UpdateSiteRequest](statable/models/update_site_request.py) \| [UpdateSiteRequestDict](statable/models/update_site_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SiteDetail](statable/models/site_detail.py), [UpdateSiteErrorBody](statable/errors/update_site_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SiteDetail](statable/models/site_detail.py)</code> -- The updated site.

**On `Failure`**: `error` is <code>[UpdateSiteErrorBody](statable/errors/update_site_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Stats

> Source: [Stats](statable/apis/stats.py)

<details>
<summary><code>def current_visitors(*, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CurrentVisitorsResponse, CurrentVisitorsErrorBody]</code></summary>

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
result = client.stats.with_raw_response.current_visitors()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CurrentVisitorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CurrentVisitorsErrorBody
```

**Async**

```python
result = await async_client.stats.with_raw_response.current_visitors()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CurrentVisitorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CurrentVisitorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_id</code> | <code>int \| None</code> | Numeric site id. Optional for a single-site key; required for an all-sites key.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[CurrentVisitorsResponse](statable/models/current_visitors_response.py), [CurrentVisitorsErrorBody](statable/errors/current_visitors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CurrentVisitorsResponse](statable/models/current_visitors_response.py)</code> -- Realtime unique-visitor count.

**On `Failure`**: `error` is <code>[CurrentVisitorsErrorBody](statable/errors/current_visitors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_subscription(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubscriptionResponse, GetSubscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not a billing page. Hobby-only accounts have no subscription and answer `status: "none"` with `only_hobby: true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats.with_raw_response.get_subscription()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSubscriptionErrorBody
```

**Async**

```python
result = await async_client.stats.with_raw_response.get_subscription()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SubscriptionResponse](statable/models/subscription_response.py), [GetSubscriptionErrorBody](statable/errors/get_subscription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubscriptionResponse](statable/models/subscription_response.py)</code> -- The current subscription state.

**On `Failure`**: `error` is <code>[GetSubscriptionErrorBody](statable/errors/get_subscription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_funnels(*, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FunnelsResponse, ListFunnelsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel `id` with POST /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats.with_raw_response.list_funnels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFunnelsErrorBody
```

**Async**

```python
result = await async_client.stats.with_raw_response.list_funnels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFunnelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_id</code> | <code>int \| None</code> | Numeric site id. Optional for a single-site key (defaults to its site); required for an all-sites key.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[FunnelsResponse](statable/models/funnels_response.py), [ListFunnelsErrorBody](statable/errors/list_funnels_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FunnelsResponse](statable/models/funnels_response.py)</code> -- The site's funnel definitions.

**On `Failure`**: `error` is <code>[ListFunnelsErrorBody](statable/errors/list_funnels_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_prop_keys(*, site_id: int | None = None, date_range: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PropsResponse, ListPropKeysErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for the event:props: breakdown. Returns the full set (no pagination) for the window.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats.with_raw_response.list_prop_keys()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPropKeysErrorBody
```

**Async**

```python
result = await async_client.stats.with_raw_response.list_prop_keys()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPropKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_id</code> | <code>int \| None</code> | Numeric site id. Optional for a single-site key; required for an all-sites key.<br>**Default**: <code>None</code> |
| <code>date_range</code> | <code>str \| None</code> | Same forms as /query (default 30d): a preset `7d`/`30d`/`month`, or a URL-encoded custom pair `["YYYY-MM-DD","YYYY-MM-DD"]`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[PropsResponse](statable/models/props_response.py), [ListPropKeysErrorBody](statable/errors/list_prop_keys_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PropsResponse](statable/models/props_response.py)</code> -- The site's custom-property keys.

**On `Failure`**: `error` is <code>[ListPropKeysErrorBody](statable/errors/list_prop_keys_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sites(*, date_range: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SitesResponse, ListSitesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the sites the authenticating key may read — useful for discovering `site_id` values and token introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just its one site (or an empty list if access was removed).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats.with_raw_response.list_sites(date_range="7d")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSitesErrorBody
```

**Async**

```python
result = await async_client.stats.with_raw_response.list_sites(date_range="7d")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSitesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date_range</code> | <code>str \| None</code> | A preset (`7d`/`30d`/`month`/`realtime`) or `Nd` = last N full days, N in 1–90 (e.g. `7d`, `14d`) — the same scalar forms POST /query accepts (custom `[from,to]` pairs are /query-only). When present, each site gains a `stats` block with basic aggregate metrics for the window. Omit to keep the list lean (no analytics read). These batch stats are NOT per-site-timezone — use POST /query for TZ-exact numbers.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[SitesResponse](statable/models/sites_response.py), [ListSitesErrorBody](statable/errors/list_sites_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SitesResponse](statable/models/sites_response.py)</code> -- The accessible sites.

**On `Failure`**: `error` is <code>[ListSitesErrorBody](statable/errors/list_sites_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QueryResponse, QueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One query returns a list of result rows. With no `dimensions` it is an aggregate (one row); with one time dimension (`time[:hour|day|week|month]`) it is a time series; with one breakdown dimension it is a top-N list plus a `meta` pagination block. The response always echoes the resolved request in `query` (most usefully `date_range` normalized to concrete `[from,to]` dates). At most one dimension per query.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats.with_raw_response.query(
    QueryRequest(site_id=3093477, metrics=[Metric.VISITORS, Metric.PAGEVIEWS], date_range="7d")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryErrorBody
```

**Async**

```python
result = await async_client.stats.with_raw_response.query(
    QueryRequest(site_id=3093477, metrics=[Metric.VISITORS, Metric.PAGEVIEWS], date_range="7d")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](statable/models/query_request.py) \| [QueryRequestDict](statable/models/query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[QueryResponse](statable/models/query_response.py), [QueryErrorBody](statable/errors/query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QueryResponse](statable/models/query_response.py)</code> -- Query result.

**On `Failure`**: `error` is <code>[QueryErrorBody](statable/errors/query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_funnel_report(id_: int, body: FunnelReportRequest | FunnelReportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FunnelReportResponse, RunFunnelReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). `steps` must not be sorted; `conversion_rate` is cumulative versus the first step (`entering`), not step-to-step. The intra-conversion window is a fixed 1 day, independent of `date_range` (which only bounds the sessions scanned).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats.with_raw_response.run_funnel_report(1, FunnelReportRequest(site_id=3093477, date_range="30d"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunFunnelReportErrorBody
```

**Async**

```python
result = await async_client.stats.with_raw_response.run_funnel_report(
    1, FunnelReportRequest(site_id=3093477, date_range="30d")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FunnelReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunFunnelReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Funnel id (from GET /funnels). |
| <code>body</code> | <code>[FunnelReportRequest](statable/models/funnel_report_request.py) \| [FunnelReportRequestDict](statable/models/funnel_report_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](statable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](statable/core/results.py)&#91;[FunnelReportResponse](statable/models/funnel_report_response.py), [RunFunnelReportErrorBody](statable/errors/run_funnel_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FunnelReportResponse](statable/models/funnel_report_response.py)</code> -- The funnel result.

**On `Failure`**: `error` is <code>[RunFunnelReportErrorBody](statable/errors/run_funnel_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](statable/models/error.py)</code> |
| anything unmapped | <code>[RawError](statable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

