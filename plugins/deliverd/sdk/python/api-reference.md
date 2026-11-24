# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [DeliverdClient](deliverd/client.py)

## Actions

> Source: [Actions](deliverd/apis/actions.py)

<details>
<summary><code>def get_api_v1_actions(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ActionsResponse1</code></summary>

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
    response = client.actions.get_api_v1_actions()
    # TODO: Handle 'response' of type ApiV1ActionsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.actions.get_api_v1_actions()
    # TODO: Handle 'response' of type ApiV1ActionsResponse1
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
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ActionsResponse1](deliverd/models/api_v1_actions_response1.py)</code> -- Newest first. Titles and risk reflect any administrator override; sensitivity labels are not returned, because telling the caller which values are confidential tells it which are worth taking.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_actions(*, body: ApiV1ActionsRequest | ApiV1ActionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ActionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Actions are stable organisational vocabulary and tools are implementation details — several agents calling three differently named functions may all be performing finance.refund, and policy is written about the business action rather than the function name. Upsert, not create: this runs on every deploy, so registering the same id again is the normal case. It overwrites only the half the code owns; an administrator's title, risk and sensitivity overrides survive it, and no administrator can edit the input schema, because a schema they could loosen is a check the code no longer performs. An agent principal is refused: policy is keyed on the action id, so an agent able to name actions could name its way around the rule that governs it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.actions.post_api_v1_actions()
    # TODO: Handle 'response' of type ApiV1ActionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.actions.post_api_v1_actions()
    # TODO: Handle 'response' of type ApiV1ActionsResponse
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
| <code>body</code> | <code>[ApiV1ActionsRequest](deliverd/models/api_v1_actions_request.py) \| [ApiV1ActionsRequestDict](deliverd/models/api_v1_actions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ActionsResponse](deliverd/models/api_v1_actions_response.py)</code> -- The action as registered

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Agents

> Source: [Agents](deliverd/apis/agents.py)

<details>
<summary><code>def get_api_v1_agents(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AgentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's agents and the platforms they run on. Registering one is an administrator's act in the app.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agents.get_api_v1_agents()
    # TODO: Handle 'response' of type ApiV1AgentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.get_api_v1_agents()
    # TODO: Handle 'response' of type ApiV1AgentsResponse
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AgentsResponse](deliverd/models/api_v1_agents_response.py)</code> -- Agents, newest first. `nextCursor` is null on the last page

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_agents_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AgentsResponse1</code></summary>

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
    response = client.agents.get_api_v1_agents_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AgentsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.get_api_v1_agents_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1AgentsResponse1
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AgentsResponse1](deliverd/models/api_v1_agents_response1.py)</code> -- The agent

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AiSystems

> Source: [AiSystems](deliverd/apis/ai_systems.py)

<details>
<summary><code>def get_api_v1_ai_systems(*, status: StatusDeliverdDevAiSystemsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

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
    response = client.ai_systems.get_api_v1_ai_systems()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.ai_systems.get_api_v1_ai_systems()
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>status</code> | <code>[StatusDeliverdDevAiSystemsApiOrStr](deliverd/models/enums/status_deliverd_dev_ai_systems_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { aiSystems }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_ai_systems_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`system` is the record; `status` and `steps` say where it stands in its lifecycle and which steps out of it the caller may take (with every reason when not); `roles` are the members who answer for it; `history` is every move; `versions` are snapshots of what it said; `governedTaskIds` are the governed tasks naming it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ai_systems.get_api_v1_ai_systems_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.ai_systems.get_api_v1_ai_systems_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { system, template, status, steps, roles, endedRoles, history, versions, aiAct, governedTaskIds }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_ai_systems_by_id_transitions(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

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
    response = client.ai_systems.get_api_v1_ai_systems_by_id_transitions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.ai_systems.get_api_v1_ai_systems_by_id_transitions(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { template, status, steps, history }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_ai_systems_by_id(id_: UUID, *, body: ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (`POST /api/v1/ai-systems/{id}/transitions`). Each change is a new version; values a key or an agent writes are labelled in `provenance` as imported or suggested until a person saves them. 409 when the record changed since it was read.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ai_systems.patch_api_v1_ai_systems_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1AiSystemsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_systems.patch_api_v1_ai_systems_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1AiSystemsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AiSystemsRequest1](deliverd/models/api_v1_ai_systems_request1.py) \| [ApiV1AiSystemsRequest1Dict](deliverd/models/api_v1_ai_systems_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The system

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PatchApiV1AiSystemsByIdErrorBody](deliverd/errors/patch_api_v1_ai_systems_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_ai_systems(*, body: ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

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
    response = client.ai_systems.post_api_v1_ai_systems()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AiSystemsErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_systems.post_api_v1_ai_systems()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AiSystemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1AiSystemsRequest](deliverd/models/api_v1_ai_systems_request.py) \| [ApiV1AiSystemsRequestDict](deliverd/models/api_v1_ai_systems_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The system

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1AiSystemsErrorBody](deliverd/errors/post_api_v1_ai_systems_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_ai_systems_by_id_model_change(id_: UUID, *, body: ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. `promptHash` and `guardrailsHash` are digests (`sha256:…`, a commit, a version tag), never the text. Every governed task using the system gets a reassessment, which closes its gate until a person completes it, and the evaluation, resilience testing, change record and compliance approval of the old release stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a first fingerprint changes nothing; changing or removing one does. `changed` names the parts that differ from what was recorded: the same release again changes nothing and records nothing, so a build step may send it on every build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ai_systems.post_api_v1_ai_systems_by_id_model_change(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AiSystemsByIdModelChangeErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_systems.post_api_v1_ai_systems_by_id_model_change(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AiSystemsByIdModelChangeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AiSystemsModelChangeRequest](deliverd/models/api_v1_ai_systems_model_change_request.py) \| [ApiV1AiSystemsModelChangeRequestDict](deliverd/models/api_v1_ai_systems_model_change_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { system, reassessments, changed }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1AiSystemsByIdModelChangeErrorBody](deliverd/errors/post_api_v1_ai_systems_by_id_model_change_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_ai_systems_by_id_transitions(id_: UUID, *, body: ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A key or an agent may put a proposal forward (`submit`) or take it back (`withdraw`). Approving, rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and the caller holds a role on the record or moved it to its current status. 409 when the record changed since it was read.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ai_systems.post_api_v1_ai_systems_by_id_transitions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AiSystemsByIdTransitionsErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_systems.post_api_v1_ai_systems_by_id_transitions(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1AiSystemsByIdTransitionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AiSystemsTransitionsRequest](deliverd/models/api_v1_ai_systems_transitions_request.py) \| [ApiV1AiSystemsTransitionsRequestDict](deliverd/models/api_v1_ai_systems_transitions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The record, as GET /api/v1/ai-systems/{id}

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1AiSystemsByIdTransitionsErrorBody](deliverd/errors/post_api_v1_ai_systems_by_id_transitions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](deliverd/apis/analytics.py)

<details>
<summary><code>def get_api_v1_analytics(*, days: int | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`GET /reports/{idOrSlug}/analytics` needs to be told which report, so "what is getting read" meant walking the list and adding up. The half that cannot be reconstructed that way is `inactiveReports` — a report nobody has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the per-report call returns a total view count on every plan.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.get_api_v1_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1AnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.get_api_v1_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1AnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days</code> | <code>int \| None</code> | The window to count over. 30 by default.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | How many reports in each list. 10 by default.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsResponse](deliverd/models/api_v1_analytics_response.py)</code> -- Readership across the organisation

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1AnalyticsErrorBody](deliverd/errors/get_api_v1_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Approvals

> Source: [Approvals](deliverd/apis/approvals.py)

<details>
<summary><code>def get_api_v1_approvals(*, limit: int | None = None, cursor: str | None = None, status: Status1OrStr | None = None, external_id: str | None = None, approver: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ApprovalsResponse1</code></summary>

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
    response = client.approvals.get_api_v1_approvals()
    # TODO: Handle 'response' of type ApiV1ApprovalsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.approvals.get_api_v1_approvals()
    # TODO: Handle 'response' of type ApiV1ApprovalsResponse1
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1OrStr](deliverd/models/enums/status1.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>approver</code> | <code>str \| None</code> | The requests naming one person: a member's id or email, or an admitted guest's email. An approver's inbox, for your own UI.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsResponse1](deliverd/models/api_v1_approvals_response1.py)</code> -- Newest first

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_approvals_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ApprovalsResponse</code></summary>

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
    response = client.approvals.get_api_v1_approvals_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ApprovalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ApprovalsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.approvals.get_api_v1_approvals_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ApprovalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ApprovalsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsResponse](deliverd/models/api_v1_approvals_response.py)</code> -- The request

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1ApprovalsByIdErrorBody](deliverd/errors/get_api_v1_approvals_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_approvals(*, body: ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ApprovalsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a request and returns its page. The decision is a person's: read it by polling GET /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired), or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when omitted. The requester cannot be an approver of their own request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.approvals.post_api_v1_approvals()
    # TODO: Handle 'response' of type ApiV1ApprovalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsErrorBody
```

**Async**

```python
try:
    response = await async_client.approvals.post_api_v1_approvals()
    # TODO: Handle 'response' of type ApiV1ApprovalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ApprovalsRequest](deliverd/models/api_v1_approvals_request.py) \| [ApiV1ApprovalsRequestDict](deliverd/models/api_v1_approvals_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsResponse](deliverd/models/api_v1_approvals_response.py)</code> -- The request, pending

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ApprovalsErrorBody](deliverd/errors/post_api_v1_approvals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_approvals_by_id_answers(id_: UUID, *, body: ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ApprovalsAnswersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only the requester may answer. The answer is shown on the page and the asker is told.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.approvals.post_api_v1_approvals_by_id_answers(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ApprovalsAnswersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsByIdAnswersErrorBody
```

**Async**

```python
try:
    response = await async_client.approvals.post_api_v1_approvals_by_id_answers(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1ApprovalsAnswersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsByIdAnswersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ApprovalsAnswersRequest](deliverd/models/api_v1_approvals_answers_request.py) \| [ApiV1ApprovalsAnswersRequestDict](deliverd/models/api_v1_approvals_answers_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsAnswersResponse](deliverd/models/api_v1_approvals_answers_response.py)</code> -- The request

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ApprovalsByIdAnswersErrorBody](deliverd/errors/post_api_v1_approvals_by_id_answers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_approvals_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ApprovalsCancelResponse</code></summary>

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
    response = client.approvals.post_api_v1_approvals_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ApprovalsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsByIdCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.approvals.post_api_v1_approvals_by_id_cancel(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1ApprovalsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsByIdCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsCancelResponse](deliverd/models/api_v1_approvals_cancel_response.py)</code> -- The request, cancelled

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ApprovalsByIdCancelErrorBody](deliverd/errors/post_api_v1_approvals_by_id_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_approvals_by_id_sessions(id_: UUID, *, body: ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ApprovalsSessionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decision sessions are how an approval is decided in your own app. `mode: "hosted"` returns a `url` to send the approver to, with an optional `returnUrl` for afterwards (`deliverd_session` and `deliverd_decision` are added to it). `mode: "embedded"` returns a `clientSecret` to mount with https://deliverd.dev/elements/v1.js, framed only by `origin`, which must be on the organisation's embedding allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The `url` and `clientSecret` are returned once. Neither decides anything: the approver signs in, or confirms a code sent to their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.approvals.post_api_v1_approvals_by_id_sessions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ApprovalsSessionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsByIdSessionsErrorBody
```

**Async**

```python
try:
    response = await async_client.approvals.post_api_v1_approvals_by_id_sessions(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1ApprovalsSessionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ApprovalsByIdSessionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ApprovalsSessionsRequest](deliverd/models/api_v1_approvals_sessions_request.py) \| [ApiV1ApprovalsSessionsRequestDict](deliverd/models/api_v1_approvals_sessions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsSessionsResponse](deliverd/models/api_v1_approvals_sessions_response.py)</code> -- The session, with its url and clientSecret

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ApprovalsByIdSessionsErrorBody](deliverd/errors/post_api_v1_approvals_by_id_sessions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Audiences

> Source: [Audiences](deliverd/apis/audiences.py)

<details>
<summary><code>def post_api_v1_audiences_resolve(*, body: ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AudiencesResolveResponse</code></summary>

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
    response = client.audiences.post_api_v1_audiences_resolve()
    # TODO: Handle 'response' of type ApiV1AudiencesResolveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.audiences.post_api_v1_audiences_resolve()
    # TODO: Handle 'response' of type ApiV1AudiencesResolveResponse
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
| <code>body</code> | <code>[ApiV1AudiencesResolveRequest](deliverd/models/api_v1_audiences_resolve_request.py) \| [ApiV1AudiencesResolveRequestDict](deliverd/models/api_v1_audiences_resolve_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AudiencesResolveResponse](deliverd/models/api_v1_audiences_resolve_response.py)</code> -- Resolution result with disambiguation candidates

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuditEvents

> Source: [AuditEvents](deliverd/apis/audit_events.py)

<details>
<summary><code>def get_api_v1_audit_events(*, limit: int | None = None, cursor: str | None = None, since: RFC3339DateTime | None = None, until: RFC3339DateTime | None = None, event_type: str | None = None, actor_id: UUID | None = None, actor_type: ActorTypeOrStr | None = None, resource_type: str | None = None, resource_id: str | None = None, flow_id: UUID | None = None, after_seq: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AuditEventsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's script. Each entry carries its position in the organisation's hash chain (`chainSeq`), the hash before it (`prevHash`) and its own (`rowHash`). Needs `audit:read` and a key bound to an owner, an administrator or a security administrator, read on every call; an agent key is refused (`403 agent_not_permitted`), as is anybody else (`403 not_permitted`). To tail the log, pass `afterSeq` (the last `chainSeq` you have): entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time, as `since` can. For a live feed, subscribe a webhook endpoint to `audit.event` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.audit_events.get_api_v1_audit_events()
    # TODO: Handle 'response' of type ApiV1AuditEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.audit_events.get_api_v1_audit_events()
    # TODO: Handle 'response' of type ApiV1AuditEventsResponse
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
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>RFC3339DateTime \| None</code> | Entries at or after this time (ISO 8601).<br>**Default**: <code>None</code> |
| <code>until</code> | <code>RFC3339DateTime \| None</code> | Entries at or before this time (ISO 8601).<br>**Default**: <code>None</code> |
| <code>event_type</code> | <code>str \| None</code> | An event type (`report.published`), or a family ending in a dot (`legal_hold.`).<br>**Default**: <code>None</code> |
| <code>actor_id</code> | <code>UUID \| None</code> | The person, agent or key that acted.<br>**Default**: <code>None</code> |
| <code>actor_type</code> | <code>[ActorTypeOrStr](deliverd/models/enums/actor_type.py) \| None</code> | What kind of actor.<br>**Default**: <code>None</code> |
| <code>resource_type</code> | <code>str \| None</code> | What the entry is about, e.g. `report`.<br>**Default**: <code>None</code> |
| <code>resource_id</code> | <code>str \| None</code> | The id of what it is about.<br>**Default**: <code>None</code> |
| <code>flow_id</code> | <code>UUID \| None</code> | Entries about this flow (project) and everything attached to it: its approvals, reviews, requests and reports.<br>**Default**: <code>None</code> |
| <code>after_seq</code> | <code>int \| None</code> | Entries after this chain position, oldest first: the way to tail the log. Pass the last chainSeq you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry written late with an earlier time.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AuditEventsResponse](deliverd/models/api_v1_audit_events_response.py)</code> -- Entries, newest first

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Collections

> Source: [Collections](deliverd/apis/collections.py)

<details>
<summary><code>def get_api_v1_collections(*, limit: int | None = None, cursor: str | None = None, status: StatusDeliverdDevCollectionsApiOrStr | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CollectionsResponse1</code></summary>

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
    response = client.collections.get_api_v1_collections()
    # TODO: Handle 'response' of type ApiV1CollectionsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.collections.get_api_v1_collections()
    # TODO: Handle 'response' of type ApiV1CollectionsResponse1
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusDeliverdDevCollectionsApiOrStr](deliverd/models/enums/status_deliverd_dev_collections_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsResponse1](deliverd/models/api_v1_collections_response1.py)</code> -- Newest first

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_collections_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CollectionsResponse</code></summary>

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
    response = client.collections.get_api_v1_collections_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1CollectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1CollectionsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.collections.get_api_v1_collections_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1CollectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1CollectionsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsResponse](deliverd/models/api_v1_collections_response.py)</code> -- The request

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1CollectionsByIdErrorBody](deliverd/errors/get_api_v1_collections_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_collections(*, body: ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CollectionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a request and returns the page people fill in. The answers are theirs: read them by polling GET /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or by the MCP tool get_collection. There is no endpoint that submits an answer — a key is not a person. Respondents are named by email or id and must be active members or guests the organisation already knows; anyone else is refused. Answers are checked against the kind of question that asked for them, and a required question blocks submission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.collections.post_api_v1_collections()
    # TODO: Handle 'response' of type ApiV1CollectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1CollectionsErrorBody
```

**Async**

```python
try:
    response = await async_client.collections.post_api_v1_collections()
    # TODO: Handle 'response' of type ApiV1CollectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1CollectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1CollectionsRequest](deliverd/models/api_v1_collections_request.py) \| [ApiV1CollectionsRequestDict](deliverd/models/api_v1_collections_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsResponse](deliverd/models/api_v1_collections_response.py)</code> -- The request, pending

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1CollectionsErrorBody](deliverd/errors/post_api_v1_collections_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_collections_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CollectionsCancelResponse</code></summary>

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
    response = client.collections.post_api_v1_collections_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1CollectionsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1CollectionsByIdCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.collections.post_api_v1_collections_by_id_cancel(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1CollectionsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1CollectionsByIdCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsCancelResponse](deliverd/models/api_v1_collections_cancel_response.py)</code> -- The request, cancelled

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1CollectionsByIdCancelErrorBody](deliverd/errors/post_api_v1_collections_by_id_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Comments

> Source: [Comments](deliverd/apis/comments.py)

<details>
<summary><code>def get_api_v1_comments(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

"Is anything waiting on me?", without naming a report first. `GET /reports/{idOrSlug}/comments` answers it one report at a time, which means walking every report to find the two with feedback on them.

Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from the report's own endpoint once you know where to look. Threads on archived reports are left out: the URL does not serve, so nothing can be done about them until it is unarchived.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comments.get_api_v1_comments()
    # TODO: Handle 'response' of type ApiV1CommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.get_api_v1_comments()
    # TODO: Handle 'response' of type ApiV1CommentsResponse
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
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentsResponse](deliverd/models/api_v1_comments_response.py)</code> -- Open threads, newest activity first

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_comments_by_thread_id_resolve(thread_id: UUID, *, body: ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a thread resolved, or reopens it with `reopen`. The note is for the reader who raised it, so say what changed rather than that it was handled — resolving without a new version is allowed and is worth explaining when you do it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.comments.post_api_v1_comments_by_thread_id_resolve(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.comments.post_api_v1_comments_by_thread_id_resolve(UUID("00000000-0000-0000-0000-000000000000"))
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
| <code>thread_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1CommentsResolveRequest](deliverd/models/api_v1_comments_resolve_request.py) \| [ApiV1CommentsResolveRequestDict](deliverd/models/api_v1_comments_resolve_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DecisionSessions

> Source: [DecisionSessions](deliverd/apis/decision_sessions.py)

<details>
<summary><code>def get_api_v1_decision_sessions_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DecisionSessionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`open`, `verified` (the approver confirmed who they are), `complete` (they decided, here or anywhere else) or `expired`, with their decision and the request's own status. Never the secret. Needs approvals:read.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.decision_sessions.get_api_v1_decision_sessions_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1DecisionSessionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DecisionSessionsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.decision_sessions.get_api_v1_decision_sessions_by_id(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1DecisionSessionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1DecisionSessionsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DecisionSessionsResponse](deliverd/models/api_v1_decision_sessions_response.py)</code> -- The session

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1DecisionSessionsByIdErrorBody](deliverd/errors/get_api_v1_decision_sessions_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_decision_sessions_by_id_expire(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DecisionSessionsExpireResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A decision already made through it stays made. Needs approvals:write.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.decision_sessions.post_api_v1_decision_sessions_by_id_expire(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1DecisionSessionsExpireResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DecisionSessionsByIdExpireErrorBody
```

**Async**

```python
try:
    response = await async_client.decision_sessions.post_api_v1_decision_sessions_by_id_expire(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1DecisionSessionsExpireResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1DecisionSessionsByIdExpireErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DecisionSessionsExpireResponse](deliverd/models/api_v1_decision_sessions_expire_response.py)</code> -- The session

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1DecisionSessionsByIdExpireErrorBody](deliverd/errors/post_api_v1_decision_sessions_by_id_expire_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Drafts

> Source: [Drafts](deliverd/apis/drafts.py)

<details>
<summary><code>def post_api_v1_drafts(*, body: ApiV1DraftsRequest | ApiV1DraftsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1DraftsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an AI with no Deliverd connection. Send an HTML document (JSON `{ html, title?, sourceTool? }` or a raw `text/html` body) and give the person the `claimUrl` that comes back. They sign in, or create a free account, and publish it with one click; it is private to them until they share it. Nothing is served from a draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and expire after 24 hours. Answers `413 too_large`, `422 scan_blocked` or `429 rate_limited` when refused.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.drafts.post_api_v1_drafts()
    # TODO: Handle 'response' of type ApiV1DraftsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.drafts.post_api_v1_drafts()
    # TODO: Handle 'response' of type ApiV1DraftsResponse
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
| <code>body</code> | <code>[ApiV1DraftsRequest](deliverd/models/api_v1_drafts_request.py) \| [ApiV1DraftsRequestDict](deliverd/models/api_v1_drafts_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DraftsResponse](deliverd/models/api_v1_drafts_response.py)</code> -- Draft stored; hand the claim link to the person

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Evidence

> Source: [Evidence](deliverd/apis/evidence.py)

<details>
<summary><code>def post_api_v1_evidence_verify(*, body: dict[str, Any] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1EvidenceVerifyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key, published at `/.well-known/deliverd-evidence-key`. Nothing is stored. `deliverd verify ` makes the same check offline, which does not rely on asking us.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.evidence.post_api_v1_evidence_verify()
    # TODO: Handle 'response' of type ApiV1EvidenceVerifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.evidence.post_api_v1_evidence_verify()
    # TODO: Handle 'response' of type ApiV1EvidenceVerifyResponse
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
| <code>body</code> | <code>dict&#91;str, Any&#93; \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EvidenceVerifyResponse](deliverd/models/api_v1_evidence_verify_response.py)</code> -- The verdict

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Flows

> Source: [Flows](deliverd/apis/flows.py)

<details>
<summary><code>def get_api_v1_flows(*, limit: int | None = None, cursor: str | None = None, status: StatusDeliverdDevFlowsApiOrStr | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1FlowsResponse1</code></summary>

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
    response = client.flows.get_api_v1_flows()
    # TODO: Handle 'response' of type ApiV1FlowsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.flows.get_api_v1_flows()
    # TODO: Handle 'response' of type ApiV1FlowsResponse1
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusDeliverdDevFlowsApiOrStr](deliverd/models/enums/status_deliverd_dev_flows_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsResponse1](deliverd/models/api_v1_flows_response1.py)</code> -- Newest first. Members are counted but not listed; read one for those.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_flows_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1FlowsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended as it goes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.flows.get_api_v1_flows_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1FlowsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1FlowsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.flows.get_api_v1_flows_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1FlowsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1FlowsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsResponse](deliverd/models/api_v1_flows_response.py)</code> -- The flow

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1FlowsByIdErrorBody](deliverd/errors/get_api_v1_flows_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_flows_by_id_evidence(id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.flows.get_api_v1_flows_by_id_evidence(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1FlowsByIdEvidenceErrorBody
```

**Async**

```python
try:
    response = await async_client.flows.get_api_v1_flows_by_id_evidence(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1FlowsByIdEvidenceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](deliverd/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The pack (JSON), or the timeline (CSV)

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1FlowsByIdEvidenceErrorBody](deliverd/errors/get_api_v1_flows_by_id_evidence_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_flows(*, body: ApiV1FlowsRequest | ApiV1FlowsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1FlowsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.flows.post_api_v1_flows()
    # TODO: Handle 'response' of type ApiV1FlowsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.flows.post_api_v1_flows()
    # TODO: Handle 'response' of type ApiV1FlowsResponse
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
| <code>body</code> | <code>[ApiV1FlowsRequest](deliverd/models/api_v1_flows_request.py) \| [ApiV1FlowsRequestDict](deliverd/models/api_v1_flows_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsResponse](deliverd/models/api_v1_flows_response.py)</code> -- The flow, open and empty

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_flows_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1FlowsCancelResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing inside it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.flows.post_api_v1_flows_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1FlowsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1FlowsByIdCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.flows.post_api_v1_flows_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1FlowsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1FlowsByIdCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsCancelResponse](deliverd/models/api_v1_flows_cancel_response.py)</code> -- The flow, cancelled

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1FlowsByIdCancelErrorBody](deliverd/errors/post_api_v1_flows_by_id_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_flows_by_id_complete(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1FlowsCompleteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding; how many is recorded and sent with the flow.completed event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.flows.post_api_v1_flows_by_id_complete(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1FlowsCompleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1FlowsByIdCompleteErrorBody
```

**Async**

```python
try:
    response = await async_client.flows.post_api_v1_flows_by_id_complete(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1FlowsCompleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1FlowsByIdCompleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsCompleteResponse](deliverd/models/api_v1_flows_complete_response.py)</code> -- The flow, complete

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1FlowsByIdCompleteErrorBody](deliverd/errors/post_api_v1_flows_by_id_complete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Gates

> Source: [Gates](deliverd/apis/gates.py)

<details>
<summary><code>def get_api_v1_gates_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1GatesResponse</code></summary>

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
    response = client.gates.get_api_v1_gates_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.gates.get_api_v1_gates_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesResponse
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
| <code>id_</code> | <code>UUID</code> | The gate decision |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesResponse](deliverd/models/api_v1_gates_response.py)</code> -- While a person is deciding, `status` is `pending`; once one has, it is `approved`, `rejected`, `expired` or `cancelled`, with `outcome` and `settledAt` filled in. `allowed` means a rule permitted it or a person agreed to it — an expiry and a cancellation are not allowed, because nobody said yes.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_gates_by_id_evidence(id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The act, the policy, the scope, who was asked and under what authority, what each said, what the agent reported, and in words what Deliverd did not check. `?format=csv` is the timeline alone. Needs `approvals:read` as well.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gates.get_api_v1_gates_by_id_evidence(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.gates.get_api_v1_gates_by_id_evidence(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | The gate |
| <code>format_</code> | <code>[FormatOrStr](deliverd/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The pack

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_gates(*, body: ApiV1GatesRequest | ApiV1GatesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1GatesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Declare the action you are about to perform and the arguments you will perform it with; your organisation's policy answers. Three outcomes, one field to branch on: `allowed: true` with status `allowed` (a rule permitted it), `allowed: false` with status `denied` (a rule refused it, and `reason` says which), or status `pending` — nobody has decided yet, an ordinary approval has been raised, and `GET /gates/{id}` or the SDK's `wait()` will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not describe, and a policy that cannot be read all refuse or ask a person. `externalId` is required, unlike every other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate is also a scoped permission: name the `destination`, the `artifact` and the `classification`, and the answer carries `decision` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), `canExecute`, and the window and use count of the permission. An approval covers that scope and nothing else. `canExecute: true` is the organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gates.post_api_v1_gates()
    # TODO: Handle 'response' of type ApiV1GatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesErrorBody
```

**Async**

```python
try:
    response = await async_client.gates.post_api_v1_gates()
    # TODO: Handle 'response' of type ApiV1GatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1GatesRequest](deliverd/models/api_v1_gates_request.py) \| [ApiV1GatesRequestDict](deliverd/models/api_v1_gates_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesResponse](deliverd/models/api_v1_gates_response.py)</code> -- A decision already made under this `externalId`, re-read rather than raised again. `reused` is true.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GatesErrorBody](deliverd/errors/post_api_v1_gates_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 423 | <code>[ApiV1Gates423Error1](deliverd/models/api_v1_gates423_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_gates_by_id_cancel(id_: UUID, *, body: ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1GatesCancelResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked may. A used permission cannot be withdrawn.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gates.post_api_v1_gates_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesByIdCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.gates.post_api_v1_gates_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesByIdCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The gate |
| <code>body</code> | <code>[ApiV1GatesCancelRequest](deliverd/models/api_v1_gates_cancel_request.py) \| [ApiV1GatesCancelRequestDict](deliverd/models/api_v1_gates_cancel_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesCancelResponse](deliverd/models/api_v1_gates_cancel_response.py)</code> -- The gate, withdrawn

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GatesByIdCancelErrorBody](deliverd/errors/post_api_v1_gates_by_id_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1GatesCancel403Error1](deliverd/models/api_v1_gates_cancel403_error1.py)</code> |
| 409 | <code>[ApiV1GatesCancel409Error1](deliverd/models/api_v1_gates_cancel409_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_gates_by_id_execution(id_: UUID, *, body: ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1GatesExecutionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`started` claims a use before you act; `completed` or `failed` finishes that claim. A `completed` with no `claimId` claims and reports in one. Checked against what was authorised: another artifact hash is `approval_invalidated`, another destination is `destination_mismatch`. A spent, lapsed, revoked or withdrawn permission is refused with a code saying which. What you report is recorded as your report: `hash_matched` when Deliverd checked the hash, `reported` when there was nothing to check; `verified` is reserved for acts Deliverd performed itself.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gates.post_api_v1_gates_by_id_execution(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesExecutionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesByIdExecutionErrorBody
```

**Async**

```python
try:
    response = await async_client.gates.post_api_v1_gates_by_id_execution(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesExecutionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesByIdExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The gate |
| <code>body</code> | <code>[ApiV1GatesExecutionRequest](deliverd/models/api_v1_gates_execution_request.py) \| [ApiV1GatesExecutionRequestDict](deliverd/models/api_v1_gates_execution_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesExecutionResponse](deliverd/models/api_v1_gates_execution_response.py)</code> -- The receipt, and the gate as it now stands

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GatesByIdExecutionErrorBody](deliverd/errors/post_api_v1_gates_by_id_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1GatesExecution403Error1](deliverd/models/api_v1_gates_execution403_error1.py)</code> |
| 409 | <code>[ApiV1GatesExecution409Error1](deliverd/models/api_v1_gates_execution409_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_gates_by_id_release(id_: UUID, *, body: ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1GatesReleaseResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The staged report version the gate names goes live, if the gate still authorises it and the report lives where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a person approved. The receipt is `verified` — Deliverd did it. Needs `reports:write` as well.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gates.post_api_v1_gates_by_id_release(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesReleaseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesByIdReleaseErrorBody
```

**Async**

```python
try:
    response = await async_client.gates.post_api_v1_gates_by_id_release(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1GatesReleaseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GatesByIdReleaseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The gate |
| <code>body</code> | <code>[ApiV1GatesReleaseRequest](deliverd/models/api_v1_gates_release_request.py) \| [ApiV1GatesReleaseRequestDict](deliverd/models/api_v1_gates_release_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesReleaseResponse](deliverd/models/api_v1_gates_release_response.py)</code> -- Released

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GatesByIdReleaseErrorBody](deliverd/errors/post_api_v1_gates_by_id_release_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1GatesRelease403Error1](deliverd/models/api_v1_gates_release403_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_gates_verify_token(*, body: ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1GatesVerifyTokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Whether a gate's `decisionToken` is this deployment's signature over this action and input, for your organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check locally with the key at `/.well-known/deliverd-evidence-key`. A refused token is a 200 with `valid: false` and the `reason`. It does not spend a use: report the execution for that.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gates.post_api_v1_gates_verify_token()
    # TODO: Handle 'response' of type ApiV1GatesVerifyTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.gates.post_api_v1_gates_verify_token()
    # TODO: Handle 'response' of type ApiV1GatesVerifyTokenResponse
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
| <code>body</code> | <code>[ApiV1GatesVerifyTokenRequest](deliverd/models/api_v1_gates_verify_token_request.py) \| [ApiV1GatesVerifyTokenRequestDict](deliverd/models/api_v1_gates_verify_token_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesVerifyTokenResponse](deliverd/models/api_v1_gates_verify_token_response.py)</code> -- The result

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GovernanceApi

> Source: [GovernanceApi](deliverd/apis/governance_api.py)

<details>
<summary><code>def get_api_v1_governance_frameworks(*, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are applied at which version. A pack maps requirements onto controls for review; it is not legal advice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_frameworks()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_frameworks()
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { frameworks, custom, customControls, canAdopt, canWriteCustom, statement }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_governance_frameworks_mapping(*, task_id: UUID | None = None, framework: str | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With `taskId`, how far that governed task's completed controls cover each requirement. A mapping, never a compliance verdict.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_frameworks_mapping()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_frameworks_mapping()
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>task_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>framework</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { taskId, frameworks, statement }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_governance_ict_register(*, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DORA's register of information, for the providers behind the organisation's AI systems: who keeps it (`entity`), the `providers`, the `arrangements` (contracts) with the AI systems that run under each, what each entry still lacks (`gaps`), the `concentration` on each provider, and the AI systems not yet in the register.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_ict_register()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_ict_register()
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { entity, providers, arrangements, concentration, unregisteredSystems, rules }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_governance_ict_register_export(*, format_: FormatOrStr | None = None, template: TemplateOrStr | None = None, as_of: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the regulation's column codes. JSON is every template (or `template`) with its columns and rows; `format=csv` is one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register to take in, not the submission itself.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_ict_register_export()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GovernanceIctRegisterExportErrorBody
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_ict_register_export()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GovernanceIctRegisterExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format_</code> | <code>[FormatOrStr](deliverd/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>template</code> | <code>[TemplateOrStr](deliverd/models/enums/template.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>as_of</code> | <code>Date \| None</code> | The reporting date; today when omitted<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { statement, templates }, or CSV

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1GovernanceIctRegisterExportErrorBody](deliverd/errors/get_api_v1_governance_ict_register_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_governance_incidents(*, status: StatusDeliverdDevGovernanceApiOrStr | None = None, ai_system_id: UUID | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1GovernanceIncidentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paged with `limit` and `cursor`; `nextCursor` is null at the end. Incidents against a task you cannot read are left out.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_incidents()
    # TODO: Handle 'response' of type ApiV1GovernanceIncidentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_incidents()
    # TODO: Handle 'response' of type ApiV1GovernanceIncidentsResponse
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
| <code>status</code> | <code>[StatusDeliverdDevGovernanceApiOrStr](deliverd/models/enums/status_deliverd_dev_governance_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ai_system_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GovernanceIncidentsResponse](deliverd/models/api_v1_governance_incidents_response.py)</code> -- A page of incidents

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_governance_incidents_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The incident, its DORA classification (`dora`: the facts, `major`, each criterion and the reason), its reports with their sign-off status, and `schedule`: which report is due next and by when. Nothing is due unless it is classified major.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_incidents_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GovernanceIncidentsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_incidents_by_id(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GovernanceIncidentsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The incident

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1GovernanceIncidentsByIdErrorBody](deliverd/errors/get_api_v1_governance_incidents_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_governance_policies(*, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Governed tasks record the version they were evaluated against. Publishing a version is done by a person in Deliverd.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_policies()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_policies()
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { policies }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_governance_summary(*, ai_system_id: UUID | None = None, risk: RiskOrStr | None = None, owner: str | None = None, provider: str | None = None, data_classification: str | None = None, jurisdiction: str | None = None, framework: str | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what needs review. `jurisdiction` and `framework` filters are Enterprise. Never a compliance percentage.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.get_api_v1_governance_summary()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GovernanceSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.governance_api.get_api_v1_governance_summary()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GovernanceSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ai_system_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>risk</code> | <code>[RiskOrStr](deliverd/models/enums/risk.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>owner</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>provider</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>data_classification</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>framework</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The summary

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1GovernanceSummaryErrorBody](deliverd/errors/get_api_v1_governance_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_governance_authority_evaluate(*, body: ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. `mode` is allowed, approval or denied. Records nothing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.post_api_v1_governance_authority_evaluate()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceAuthorityEvaluateErrorBody
```

**Async**

```python
try:
    response = await async_client.governance_api.post_api_v1_governance_authority_evaluate()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceAuthorityEvaluateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1GovernanceAuthorityEvaluateRequest](deliverd/models/api_v1_governance_authority_evaluate_request.py) \| [ApiV1GovernanceAuthorityEvaluateRequestDict](deliverd/models/api_v1_governance_authority_evaluate_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { action, mode, source, reason, agentId, agentName }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GovernanceAuthorityEvaluateErrorBody](deliverd/errors/post_api_v1_governance_authority_evaluate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_governance_frameworks(*, body: ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is never edited — a change is a new version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.post_api_v1_governance_frameworks()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceFrameworksErrorBody
```

**Async**

```python
try:
    response = await async_client.governance_api.post_api_v1_governance_frameworks()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceFrameworksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1GovernanceFrameworksRequest](deliverd/models/api_v1_governance_frameworks_request.py) \| [ApiV1GovernanceFrameworksRequestDict](deliverd/models/api_v1_governance_frameworks_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The draft

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GovernanceFrameworksErrorBody](deliverd/errors/post_api_v1_governance_frameworks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_governance_incidents(*, body: ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a person resolves it. Permanent: it cannot be edited or withdrawn.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.post_api_v1_governance_incidents()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceIncidentsErrorBody
```

**Async**

```python
try:
    response = await async_client.governance_api.post_api_v1_governance_incidents()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceIncidentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1GovernanceIncidentsRequest](deliverd/models/api_v1_governance_incidents_request.py) \| [ApiV1GovernanceIncidentsRequestDict](deliverd/models/api_v1_governance_incidents_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The incident

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GovernanceIncidentsErrorBody](deliverd/errors/post_api_v1_governance_incidents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_governance_incidents_by_id_reports(id_: UUID, *, body: ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as tasks:write.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.governance_api.post_api_v1_governance_incidents_by_id_reports(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceIncidentsByIdReportsErrorBody
```

**Async**

```python
try:
    response = await async_client.governance_api.post_api_v1_governance_incidents_by_id_reports(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1GovernanceIncidentsByIdReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1GovernanceIncidentsReportsRequest](deliverd/models/api_v1_governance_incidents_reports_request.py) \| [ApiV1GovernanceIncidentsReportsRequestDict](deliverd/models/api_v1_governance_incidents_reports_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { incident, reportId, approvalId, approvalUrl }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1GovernanceIncidentsByIdReportsErrorBody](deliverd/errors/post_api_v1_governance_incidents_by_id_reports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Knowledge

> Source: [Knowledge](deliverd/apis/knowledge.py)

<details>
<summary><code>def get_api_v1_knowledge(*, q: str | None = None, kind: KindDeliverdDevKnowledgeApiOrStr | None = None, status: StatusDeliverdDevKnowledgeApiOrStr | None = None, workspace_id: UUID | None = None, flow_id: UUID | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ranked by relevance to `q`, or newest first without it. Confirmed entries unless `status` says otherwise: only those are to be relied on. `more` is true when the list was cut at `limit`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge.get_api_v1_knowledge()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.knowledge.get_api_v1_knowledge()
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>q</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>kind</code> | <code>[KindDeliverdDevKnowledgeApiOrStr](deliverd/models/enums/kind_deliverd_dev_knowledge_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusDeliverdDevKnowledgeApiOrStr](deliverd/models/enums/status_deliverd_dev_knowledge_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>workspace_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>flow_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- `{ entries, more }`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_knowledge_agents_md(*, workspace_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a tool that reads files rather than calling tools. A snapshot that says where the live version is.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge.get_api_v1_knowledge_agents_md()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.knowledge.get_api_v1_knowledge_agents_md()
    # TODO: Handle 'response' of type str
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
| <code>workspace_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- AGENTS.md

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_knowledge_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

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
    response = client.knowledge.get_api_v1_knowledge_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1KnowledgeByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.knowledge.get_api_v1_knowledge_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1KnowledgeByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The entry, its `history` and any `pendingRevision`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1KnowledgeByIdErrorBody](deliverd/errors/get_api_v1_knowledge_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_knowledge_export(*, format_: FormatDeliverdDevKnowledgeApiOrStr | None = None, status: StatusDeliverdDevKnowledgeApiOrStr | None = None, workspace_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge.get_api_v1_knowledge_export()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.knowledge.get_api_v1_knowledge_export()
    # TODO: Handle 'response' of type str
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
| <code>format_</code> | <code>[FormatDeliverdDevKnowledgeApiOrStr](deliverd/models/enums/format_deliverd_dev_knowledge_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusDeliverdDevKnowledgeApiOrStr](deliverd/models/enums/status_deliverd_dev_knowledge_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>workspace_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- The file

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_knowledge_by_id(id_: UUID, *, body: ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words never change: propose a revision.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge.patch_api_v1_knowledge_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1KnowledgeByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.knowledge.patch_api_v1_knowledge_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1KnowledgeByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1KnowledgeRequest1](deliverd/models/api_v1_knowledge_request1.py) \| [ApiV1KnowledgeRequest1Dict](deliverd/models/api_v1_knowledge_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The entry

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PatchApiV1KnowledgeByIdErrorBody](deliverd/errors/patch_api_v1_knowledge_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_knowledge(*, body: ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal data is said back as `screening`. With `supersedesId` it is a revision that replaces the confirmed entry once confirmed. With `externalId`, an open entry under the same one is returned instead (`resumed: true`, status 200).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge.post_api_v1_knowledge()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1KnowledgeErrorBody
```

**Async**

```python
try:
    response = await async_client.knowledge.post_api_v1_knowledge()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1KnowledgeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1KnowledgeRequest](deliverd/models/api_v1_knowledge_request.py) \| [ApiV1KnowledgeRequestDict](deliverd/models/api_v1_knowledge_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- An open entry under this externalId

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1KnowledgeErrorBody](deliverd/errors/post_api_v1_knowledge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_knowledge_import(*, body: ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one proposed entry. Entries already there by title or id are skipped and said so.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.knowledge.post_api_v1_knowledge_import()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1KnowledgeImportErrorBody
```

**Async**

```python
try:
    response = await async_client.knowledge.post_api_v1_knowledge_import()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1KnowledgeImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1KnowledgeImportRequest](deliverd/models/api_v1_knowledge_import_request.py) \| [ApiV1KnowledgeImportRequestDict](deliverd/models/api_v1_knowledge_import_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- `{ created, skipped }`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1KnowledgeImportErrorBody](deliverd/errors/post_api_v1_knowledge_import_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Playbooks

> Source: [Playbooks](deliverd/apis/playbooks.py)

<details>
<summary><code>def get_api_v1_playbooks(*, kind: KindDeliverdDevPlaybooksApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One row per playbook: its newest version, and `inForce`, the version that runs. Approved prompts are playbooks of `kind` prompt; `?kind=` keeps one or the other.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.playbooks.get_api_v1_playbooks()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.playbooks.get_api_v1_playbooks()
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>kind</code> | <code>[KindDeliverdDevPlaybooksApiOrStr](deliverd/models/enums/kind_deliverd_dev_playbooks_api.py) \| None</code> | procedure for playbooks of steps, prompt for approved prompts; both when omitted<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- `{ playbooks }`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_playbooks_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

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
    response = client.playbooks.get_api_v1_playbooks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1PlaybooksByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.playbooks.get_api_v1_playbooks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1PlaybooksByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The version, `versions`, `inForceId` and `knowledge`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1PlaybooksByIdErrorBody](deliverd/errors/get_api_v1_playbooks_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_playbooks_by_id(id_: UUID, *, body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only before it has been put to anybody. After that, draft the next version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.playbooks.patch_api_v1_playbooks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1PlaybooksByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.playbooks.patch_api_v1_playbooks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1PlaybooksByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1PlaybooksRequest](deliverd/models/api_v1_playbooks_request.py) \| [ApiV1PlaybooksRequestDict](deliverd/models/api_v1_playbooks_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The draft

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PatchApiV1PlaybooksByIdErrorBody](deliverd/errors/patch_api_v1_playbooks_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_playbooks(*, body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Steps, each with the rule that applies before it acts: `none`, `gate` (with the `action` to check), `approval` or `review`. Or `prompt` instead of steps, for an approved prompt: its words with `{input}` placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an approval of it is approved.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.playbooks.post_api_v1_playbooks()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksErrorBody
```

**Async**

```python
try:
    response = await async_client.playbooks.post_api_v1_playbooks()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1PlaybooksRequest](deliverd/models/api_v1_playbooks_request.py) \| [ApiV1PlaybooksRequestDict](deliverd/models/api_v1_playbooks_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The draft

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PlaybooksErrorBody](deliverd/errors/post_api_v1_playbooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_playbooks_by_id_approval(id_: UUID, *, body: ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Deliverd approval of the playbook; approved, it goes in force. Needs `approvals:write` and `tasks:write`. Its content is fixed from here.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.playbooks.post_api_v1_playbooks_by_id_approval(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdApprovalErrorBody
```

**Async**

```python
try:
    response = await async_client.playbooks.post_api_v1_playbooks_by_id_approval(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdApprovalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1PlaybooksApprovalRequest](deliverd/models/api_v1_playbooks_approval_request.py) \| [ApiV1PlaybooksApprovalRequestDict](deliverd/models/api_v1_playbooks_approval_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The version, awaiting approval

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PlaybooksByIdApprovalErrorBody](deliverd/errors/post_api_v1_playbooks_by_id_approval_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_playbooks_by_id_start(id_: UUID, *, body: ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the version in force as an objective, with a side task per step holding its instruction and the call its rule needs. Naming an older version runs the one in force (`ranOlderVersion`). Missing required inputs are refused with `details.missingInputs`. With `externalId`, an open run is returned instead (status 200).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.playbooks.post_api_v1_playbooks_by_id_start(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdStartErrorBody
```

**Async**

```python
try:
    response = await async_client.playbooks.post_api_v1_playbooks_by_id_start(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdStartErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1PlaybooksStartRequest](deliverd/models/api_v1_playbooks_start_request.py) \| [ApiV1PlaybooksStartRequestDict](deliverd/models/api_v1_playbooks_start_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- An open run under this externalId

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PlaybooksByIdStartErrorBody](deliverd/errors/post_api_v1_playbooks_by_id_start_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_playbooks_by_id_use(id_: UUID, *, body: ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against the version. Naming an older version hands out the one in force (`ranOlderVersion`). Required inputs not given are listed in `missingInputs` and their placeholders left in the words. Needs `tasks:read`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.playbooks.post_api_v1_playbooks_by_id_use(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdUseErrorBody
```

**Async**

```python
try:
    response = await async_client.playbooks.post_api_v1_playbooks_by_id_use(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdUseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1PlaybooksUseRequest](deliverd/models/api_v1_playbooks_use_request.py) \| [ApiV1PlaybooksUseRequestDict](deliverd/models/api_v1_playbooks_use_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- `{ prompt, text, missingInputs, limitations, ranOlderVersion }`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PlaybooksByIdUseErrorBody](deliverd/errors/post_api_v1_playbooks_by_id_use_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_playbooks_by_id_versions(id_: UUID, *, body: ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The version in force keeps running until this one is put in force.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.playbooks.post_api_v1_playbooks_by_id_versions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.playbooks.post_api_v1_playbooks_by_id_versions(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PlaybooksByIdVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1PlaybooksVersionsRequest](deliverd/models/api_v1_playbooks_versions_request.py) \| [ApiV1PlaybooksVersionsRequestDict](deliverd/models/api_v1_playbooks_versions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The new draft

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PlaybooksByIdVersionsErrorBody](deliverd/errors/post_api_v1_playbooks_by_id_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Policies

> Source: [Policies](deliverd/apis/policies.py)

<details>
<summary><code>def get_api_v1_policies(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PoliciesResponse1</code></summary>

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
    response = client.policies.get_api_v1_policies()
    # TODO: Handle 'response' of type ApiV1PoliciesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.policies.get_api_v1_policies()
    # TODO: Handle 'response' of type ApiV1PoliciesResponse1
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
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesResponse1](deliverd/models/api_v1_policies_response1.py)</code> -- Newest first, each saying which version is in force. Owners and administrators only.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_policies(*, body: ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PoliciesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A policy is an identity that survives editing; a version is an immutable rule set. Pass `rules` to store them as version 1 and `activate: true` to put that version in force, so a push is one request rather than three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same name is refused, because overwriting one would silently replace the rules an organisation is running under. The key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a person.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policies.post_api_v1_policies()
    # TODO: Handle 'response' of type ApiV1PoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PoliciesErrorBody
```

**Async**

```python
try:
    response = await async_client.policies.post_api_v1_policies()
    # TODO: Handle 'response' of type ApiV1PoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PoliciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1PoliciesRequest](deliverd/models/api_v1_policies_request.py) \| [ApiV1PoliciesRequestDict](deliverd/models/api_v1_policies_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesResponse](deliverd/models/api_v1_policies_response.py)</code> -- The policy, and the first version if one was sent

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PoliciesErrorBody](deliverd/errors/post_api_v1_policies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Policies400Error1](deliverd/models/api_v1_policies400_error1.py)</code> |
| 403 | <code>[ApiV1Policies403Error1](deliverd/models/api_v1_policies403_error1.py)</code> |
| 409 | <code>[ApiV1Policies409Error1](deliverd/models/api_v1_policies409_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_policies_by_id_activate(id_: UUID, *, body: ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PoliciesActivateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new version instead, because bringing one back would change what every decision pointing at it meant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policies.post_api_v1_policies_by_id_activate(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1PoliciesActivateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PoliciesByIdActivateErrorBody
```

**Async**

```python
try:
    response = await async_client.policies.post_api_v1_policies_by_id_activate(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1PoliciesActivateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PoliciesByIdActivateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The policy |
| <code>body</code> | <code>[ApiV1PoliciesActivateRequest](deliverd/models/api_v1_policies_activate_request.py) \| [ApiV1PoliciesActivateRequestDict](deliverd/models/api_v1_policies_activate_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesActivateResponse](deliverd/models/api_v1_policies_activate_response.py)</code> -- The version now in force

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PoliciesByIdActivateErrorBody](deliverd/errors/post_api_v1_policies_by_id_activate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1PoliciesActivate403Error1](deliverd/models/api_v1_policies_activate403_error1.py)</code> |
| 404 | <code>[ApiV1PoliciesActivate404Error1](deliverd/models/api_v1_policies_activate404_error1.py)</code> |
| 409 | <code>[ApiV1PoliciesActivate409Error1](deliverd/models/api_v1_policies_activate409_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_policies_by_id_versions(id_: UUID, *, body: ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PoliciesVersionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision points at. It lands as a draft unless `activate` is set. Rules are validated against the action registry now rather than at activation: a condition naming a field the action's schema does not declare is refused here, since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has been in force can never be edited — the database refuses it, not only this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policies.post_api_v1_policies_by_id_versions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1PoliciesVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PoliciesByIdVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.policies.post_api_v1_policies_by_id_versions(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1PoliciesVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1PoliciesByIdVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The policy |
| <code>body</code> | <code>[ApiV1PoliciesVersionsRequest](deliverd/models/api_v1_policies_versions_request.py) \| [ApiV1PoliciesVersionsRequestDict](deliverd/models/api_v1_policies_versions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesVersionsResponse](deliverd/models/api_v1_policies_versions_response.py)</code> -- The stored version

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1PoliciesByIdVersionsErrorBody](deliverd/errors/post_api_v1_policies_by_id_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PoliciesVersions400Error1](deliverd/models/api_v1_policies_versions400_error1.py)</code> |
| 403 | <code>[ApiV1PoliciesVersions403Error1](deliverd/models/api_v1_policies_versions403_error1.py)</code> |
| 404 | <code>[ApiV1PoliciesVersions404Error1](deliverd/models/api_v1_policies_versions404_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_policies_replay(*, body: ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PoliciesReplayResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-evaluates the organisation's recorded gate requests from the last `days` (default 30, newest 5,000) twice: under the rules in force, and with the proposal standing in for its policy's version in force. The proposal is a stored version (`policyId` and `version`) or a policy file not yet pushed (`name` and `rules`). Reports how many decisions change and which way, and the requests a person rejected that would now be allowed. `fail` applies `failOn`, for CI. Policy rules only: ethics checks are not replayed. Nothing is written.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policies.post_api_v1_policies_replay()
    # TODO: Handle 'response' of type ApiV1PoliciesReplayResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.policies.post_api_v1_policies_replay()
    # TODO: Handle 'response' of type ApiV1PoliciesReplayResponse
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
| <code>body</code> | <code>[ApiV1PoliciesReplayRequest](deliverd/models/api_v1_policies_replay_request.py) \| [ApiV1PoliciesReplayRequestDict](deliverd/models/api_v1_policies_replay_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesReplayResponse](deliverd/models/api_v1_policies_replay_response.py)</code> -- The difference.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_policies_simulate(*, body: ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PoliciesSimulateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped to one policy, because enforcement flattens every active version into one rule set and takes the first decisive rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a simulation that wrote a decision row would put invented traffic into the autonomy rate.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policies.post_api_v1_policies_simulate()
    # TODO: Handle 'response' of type ApiV1PoliciesSimulateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.policies.post_api_v1_policies_simulate()
    # TODO: Handle 'response' of type ApiV1PoliciesSimulateResponse
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
| <code>body</code> | <code>[ApiV1PoliciesSimulateRequest](deliverd/models/api_v1_policies_simulate_request.py) \| [ApiV1PoliciesSimulateRequestDict](deliverd/models/api_v1_policies_simulate_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesSimulateResponse](deliverd/models/api_v1_policies_simulate_response.py)</code> -- The decision. `governed` is false when nothing matched — that is the fail-closed default asking for a person, not a rule that did.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_policies_test(*, body: ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PoliciesTestResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates each test case against the proposal, with every other policy in force as it is, after validating its input against the action's schema as a real request would be. A case passes when the effect, and the deciding rule when `expect.rule` is given, match. Nothing is written.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policies.post_api_v1_policies_test()
    # TODO: Handle 'response' of type ApiV1PoliciesTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.policies.post_api_v1_policies_test()
    # TODO: Handle 'response' of type ApiV1PoliciesTestResponse
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
| <code>body</code> | <code>[ApiV1PoliciesTestRequest](deliverd/models/api_v1_policies_test_request.py) \| [ApiV1PoliciesTestRequestDict](deliverd/models/api_v1_policies_test_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesTestResponse](deliverd/models/api_v1_policies_test_response.py)</code> -- Each case, passed or failed with the reason.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](deliverd/apis/reports.py)

<details>
<summary><code>def delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(id_or_slug: str, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsCommentsResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once somebody has replied it stays, so their reply is never left answering something no longer on the page. Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted. `commentId` comes from the `POST` above or from `GET /reports/{idOrSlug}/comments`, which marks the one message this credential can still take back.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
        "some example string", UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1ReportsCommentsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
        "some example string", UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1ReportsCommentsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>comment_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCommentsResponse2](deliverd/models/api_v1_reports_comments_response2.py)</code> -- Comment retracted

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody](deliverd/errors/delete_api_v1_reports_by_id_or_slug_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_v1_reports_by_id_or_slug_data_by_name(id_or_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.reports.delete_api_v1_reports_by_id_or_slug_data_by_name("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.reports.delete_api_v1_reports_by_id_or_slug_data_by_name(
        "some example string", "some example string"
    )
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_v1_reports_by_id_or_slug_share(id_or_slug: str, *, body: ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsShareResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Take access away from the same audience phrase that granted it. By audience rather than by grant id because that is all a caller has: the audience on `GET /reports/{idOrSlug}` carries each grant's *principal* id, never the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is open.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.delete_api_v1_reports_by_id_or_slug_share("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsShareResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.delete_api_v1_reports_by_id_or_slug_share("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsShareResponse1
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsShareRequest1](deliverd/models/api_v1_reports_share_request1.py) \| [ApiV1ReportsShareRequest1Dict](deliverd/models/api_v1_reports_share_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsShareResponse1](deliverd/models/api_v1_reports_share_response1.py)</code> -- Grants removed

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reports(*, q: str | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsResponse</code></summary>

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
    response = client.reports.get_api_v1_reports()
    # TODO: Handle 'response' of type ApiV1ReportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.get_api_v1_reports()
    # TODO: Handle 'response' of type ApiV1ReportsResponse
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
| <code>q</code> | <code>str \| None</code> | Searches title, slug and description<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse](deliverd/models/api_v1_reports_response.py)</code> -- Reports in the organisation

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reports_by_id_or_slug(id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsResponse4</code></summary>

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
    response = client.reports.get_api_v1_reports_by_id_or_slug("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsResponse4
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.get_api_v1_reports_by_id_or_slug("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsResponse4
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse4](deliverd/models/api_v1_reports_response4.py)</code> -- Report detail

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reports_by_id_or_slug_analytics(id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsAnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same figures the report page shows. Total views are on every plan; unique, internal and external viewers, the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.get_api_v1_reports_by_id_or_slug_analytics("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsAnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ReportsByIdOrSlugAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_api_v1_reports_by_id_or_slug_analytics("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsAnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ReportsByIdOrSlugAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsAnalyticsResponse](deliverd/models/api_v1_reports_analytics_response.py)</code> -- Readership

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1ReportsByIdOrSlugAnalyticsErrorBody](deliverd/errors/get_api_v1_reports_by_id_or_slug_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reports_by_id_or_slug_comments(id_or_slug: str, *, status: Status12OrStr | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsCommentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version, so a client can find what to change without fetching the file. `anchorStatus` says whether the commented text still exists: `anchored` and `shifted` mean it does; `stale` means it was edited away, and the excerpt then comes from the version the comment was written against.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.get_api_v1_reports_by_id_or_slug_comments("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsCommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.get_api_v1_reports_by_id_or_slug_comments("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsCommentsResponse
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>status</code> | <code>[Status12OrStr](deliverd/models/enums/status12.py) \| None</code> | Defaults to open — the threads still needing action<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCommentsResponse](deliverd/models/api_v1_reports_comments_response.py)</code> -- Comment threads

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reports_by_id_or_slug_data(id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsDataResponse</code></summary>

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
    response = client.reports.get_api_v1_reports_by_id_or_slug_data("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.get_api_v1_reports_by_id_or_slug_data("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsDataResponse
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsDataResponse](deliverd/models/api_v1_reports_data_response.py)</code> -- Datasets

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reports_by_id_or_slug_evidence(id_or_slug: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor usually names and works for work done before flows existed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.get_api_v1_reports_by_id_or_slug_evidence("some example string")
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ReportsByIdOrSlugEvidenceErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_api_v1_reports_by_id_or_slug_evidence("some example string")
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ReportsByIdOrSlugEvidenceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](deliverd/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The pack (JSON), or the timeline (CSV)

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1ReportsByIdOrSlugEvidenceErrorBody](deliverd/errors/get_api_v1_reports_by_id_or_slug_evidence_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reports_by_id_or_slug_versions(id_or_slug: str, *, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsVersionsResponse2</code></summary>

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
    response = client.reports.get_api_v1_reports_by_id_or_slug_versions("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsVersionsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.get_api_v1_reports_by_id_or_slug_versions("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsVersionsResponse2
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsVersionsResponse2](deliverd/models/api_v1_reports_versions_response2.py)</code> -- Version history

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_reports_by_id_or_slug(id_or_slug: str, *, body: ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to the new URL, so links already shared keep working. `previousSlug` names the address that was kept, or null when only the title changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.patch_api_v1_reports_by_id_or_slug("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.patch_api_v1_reports_by_id_or_slug("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsResponse3
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsRequest1](deliverd/models/api_v1_reports_request1.py) \| [ApiV1ReportsRequest1Dict](deliverd/models/api_v1_reports_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse3](deliverd/models/api_v1_reports_response3.py)</code> -- Renamed

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports(*, body: ApiV1ReportsRequest | ApiV1ReportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new versions after that. `taskId` keeps the report with a Task Graph task: it is listed on the task and returned in the task's context. A later publish naming another task moves it there, and one naming none leaves it where it is. Naming a task needs `tasks:read` on the key and the Tasks plan feature (`402 feature_unavailable` without it).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports()
    # TODO: Handle 'response' of type ApiV1ReportsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports()
    # TODO: Handle 'response' of type ApiV1ReportsResponse1
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
| <code>body</code> | <code>[ApiV1ReportsRequest](deliverd/models/api_v1_reports_request.py) \| [ApiV1ReportsRequestDict](deliverd/models/api_v1_reports_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse1](deliverd/models/api_v1_reports_response1.py)</code> -- Published

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_archive(id_or_slug: str, *, body: ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsArchiveResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer available. Nothing is deleted and the audience is kept, so `{"archived": false}` restores it exactly as it was. The body is optional and defaults to archiving.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports_by_id_or_slug_archive("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsArchiveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_archive("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsArchiveResponse
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsArchiveRequest](deliverd/models/api_v1_reports_archive_request.py) \| [ApiV1ReportsArchiveRequestDict](deliverd/models/api_v1_reports_archive_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsArchiveResponse](deliverd/models/api_v1_reports_archive_response.py)</code> -- Archived, or restored

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_comments(id_or_slug: str, *, body: ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsCommentsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Omit `quote` for a comment about the report as a whole. Include it and the comment attaches to that passage and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version; otherwise the request is refused rather than placed on a guess.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports_by_id_or_slug_comments("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsCommentsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugCommentsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_comments("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsCommentsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsCommentsRequest](deliverd/models/api_v1_reports_comments_request.py) \| [ApiV1ReportsCommentsRequestDict](deliverd/models/api_v1_reports_comments_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCommentsResponse1](deliverd/models/api_v1_reports_comments_response1.py)</code> -- Comment posted

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReportsByIdOrSlugCommentsErrorBody](deliverd/errors/post_api_v1_reports_by_id_or_slug_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_copy(id_or_slug: str, *, body: ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsCopyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Duplicate a report's current version into a new report you own — the primitive behind duplicating a report and behind using one as a template. The copy carries the content, the classification and any datasets; it carries **no** audience, comments or share links, and starts private to you. Requires that you can already read the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports_by_id_or_slug_copy("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsCopyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugCopyErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_copy("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsCopyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugCopyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsCopyRequest](deliverd/models/api_v1_reports_copy_request.py) \| [ApiV1ReportsCopyRequestDict](deliverd/models/api_v1_reports_copy_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCopyResponse](deliverd/models/api_v1_reports_copy_response.py)</code> -- The new report

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReportsByIdOrSlugCopyErrorBody](deliverd/errors/post_api_v1_reports_by_id_or_slug_copy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_revision_briefs(id_or_slug: str, *, body: ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsRevisionBriefsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in the current version, the conversation, and signed links to the images readers attached, ending with how to publish the next version and close each thread. Composing a brief is recorded on the report. Pass `threadIds` to include only some open threads.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports_by_id_or_slug_revision_briefs("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsRevisionBriefsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_revision_briefs("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsRevisionBriefsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsRevisionBriefsRequest](deliverd/models/api_v1_reports_revision_briefs_request.py) \| [ApiV1ReportsRevisionBriefsRequestDict](deliverd/models/api_v1_reports_revision_briefs_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsRevisionBriefsResponse](deliverd/models/api_v1_reports_revision_briefs_response.py)</code> -- The brief

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody](deliverd/errors/post_api_v1_reports_by_id_or_slug_revision_briefs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_rollback(id_or_slug: str, *, body: ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsRollbackResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serve an earlier version again at the same URL. Name it by number — the `currentVersion` and `latestVersion` every other endpoint returns — or by `versionId` from the versions list. Nothing is deleted: roll forward the same way.

Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports_by_id_or_slug_rollback("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsRollbackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugRollbackErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_rollback("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsRollbackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugRollbackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsRollbackRequest](deliverd/models/api_v1_reports_rollback_request.py) \| [ApiV1ReportsRollbackRequestDict](deliverd/models/api_v1_reports_rollback_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsRollbackResponse](deliverd/models/api_v1_reports_rollback_response.py)</code> -- Rolled back

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReportsByIdOrSlugRollbackErrorBody](deliverd/errors/post_api_v1_reports_by_id_or_slug_rollback_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_send(id_or_slug: str, *, body: ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsSendResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Distinct from `POST …/share`, which grants access to people the organisation already knows. This takes bare email addresses, creates the guest records behind them, grants access and emails each recipient a link with the sender's covering note.

**Not a mailing list.** Each recipient gets their own link tied to their own guest record, which is what makes the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps working as the report is updated, so there is no new file to send next time.

Governed by everything a share is, because it grants through the same function: the `share_external` publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own allow-list, the expiry clamp, the audit trail and the `report.shared` webhook. A recipient who already had access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports_by_id_or_slug_send("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsSendResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugSendErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_send("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsSendResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugSendErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsSendRequest](deliverd/models/api_v1_reports_send_request.py) \| [ApiV1ReportsSendRequestDict](deliverd/models/api_v1_reports_send_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsSendResponse](deliverd/models/api_v1_reports_send_response.py)</code> -- Sent

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReportsByIdOrSlugSendErrorBody](deliverd/errors/post_api_v1_reports_by_id_or_slug_send_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_share(id_or_slug: str, *, body: ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsShareResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`capability` is what the audience may do: `view` (the default) or `comment`. A grant that already exists is only ever raised, never lowered, by granting again.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.post_api_v1_reports_by_id_or_slug_share("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsShareResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_share("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsShareResponse
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
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsShareRequest](deliverd/models/api_v1_reports_share_request.py) \| [ApiV1ReportsShareRequestDict](deliverd/models/api_v1_reports_share_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsShareResponse](deliverd/models/api_v1_reports_share_response.py)</code> -- Grants applied

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reports_by_id_or_slug_versions(id_or_slug: str, *, body: ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsVersionsResponse</code></summary>

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
    response = client.reports.post_api_v1_reports_by_id_or_slug_versions("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.post_api_v1_reports_by_id_or_slug_versions("some example string")
    # TODO: Handle 'response' of type ApiV1ReportsVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReportsByIdOrSlugVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ReportsVersionsRequest](deliverd/models/api_v1_reports_versions_request.py) \| [ApiV1ReportsVersionsRequestDict](deliverd/models/api_v1_reports_versions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsVersionsResponse](deliverd/models/api_v1_reports_versions_response.py)</code> -- New version published

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReportsByIdOrSlugVersionsErrorBody](deliverd/errors/post_api_v1_reports_by_id_or_slug_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[ApiV1ReportsVersions409Error1](deliverd/models/api_v1_reports_versions409_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_api_v1_reports_by_id_or_slug_data_by_name(id_or_slug: str, name: str, *, body: dict[str, Any] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReportsDataResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Data the published report fetches at view time, so a dashboard can show current numbers without republishing. The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never edge-cached.

**A dataset is mutable and a version is not.** Rolling the report back does not roll the data back — the earlier markup renders today's numbers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.put_api_v1_reports_by_id_or_slug_data_by_name(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1ReportsDataResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutApiV1ReportsByIdOrSlugDataByNameErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.put_api_v1_reports_by_id_or_slug_data_by_name(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1ReportsDataResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutApiV1ReportsByIdOrSlugDataByNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_or_slug</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>dict&#91;str, Any&#93; \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsDataResponse1](deliverd/models/api_v1_reports_data_response1.py)</code> -- Stored

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PutApiV1ReportsByIdOrSlugDataByNameErrorBody](deliverd/errors/put_api_v1_reports_by_id_or_slug_data_by_name_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 413 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reviews

> Source: [Reviews](deliverd/apis/reviews.py)

<details>
<summary><code>def get_api_v1_reviews(*, limit: int | None = None, cursor: str | None = None, status: StatusDeliverdDevReviewsApiOrStr | None = None, external_id: str | None = None, report_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReviewsResponse1</code></summary>

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
    response = client.reviews.get_api_v1_reviews()
    # TODO: Handle 'response' of type ApiV1ReviewsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reviews.get_api_v1_reviews()
    # TODO: Handle 'response' of type ApiV1ReviewsResponse1
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusDeliverdDevReviewsApiOrStr](deliverd/models/enums/status_deliverd_dev_reviews_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>report_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsResponse1](deliverd/models/api_v1_reviews_response1.py)</code> -- Newest first

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_reviews_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReviewsResponse</code></summary>

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
    response = client.reviews.get_api_v1_reviews_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ReviewsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.reviews.get_api_v1_reviews_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ReviewsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsResponse](deliverd/models/api_v1_reviews_response.py)</code> -- The review

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1ReviewsByIdErrorBody](deliverd/errors/get_api_v1_reviews_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reviews(*, body: ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReviewsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a review and returns its page. The verdict is a person's: read it by polling GET /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by email or id and must be active members or guests who can already open the report; anyone else is refused. The requester cannot review their own request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reviews.post_api_v1_reviews()
    # TODO: Handle 'response' of type ApiV1ReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReviewsErrorBody
```

**Async**

```python
try:
    response = await async_client.reviews.post_api_v1_reviews()
    # TODO: Handle 'response' of type ApiV1ReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReviewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ReviewsRequest](deliverd/models/api_v1_reviews_request.py) \| [ApiV1ReviewsRequestDict](deliverd/models/api_v1_reviews_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsResponse](deliverd/models/api_v1_reviews_response.py)</code> -- The review, pending

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReviewsErrorBody](deliverd/errors/post_api_v1_reviews_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_reviews_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ReviewsCancelResponse</code></summary>

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
    response = client.reviews.post_api_v1_reviews_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ReviewsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReviewsByIdCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.reviews.post_api_v1_reviews_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1ReviewsCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ReviewsByIdCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsCancelResponse](deliverd/models/api_v1_reviews_cancel_response.py)</code> -- The review, cancelled

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ReviewsByIdCancelErrorBody](deliverd/errors/post_api_v1_reviews_by_id_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RiskIndicators

> Source: [RiskIndicators](deliverd/apis/risk_indicators.py)

<details>
<summary><code>def get_api_v1_risk_indicators(*, period: str | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each indicator the appetite turns on: its figure for the month against the limits it was judged by (`green`, `amber`, `red` or `not_measurable`), the two months before, the trend, where a measured indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_indicators.get_api_v1_risk_indicators()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1RiskIndicatorsErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_indicators.get_api_v1_risk_indicators()
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1RiskIndicatorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { access, period, periodLabel, appetite, baseline, summary, indicators }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1RiskIndicatorsErrorBody](deliverd/errors/get_api_v1_risk_indicators_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_risk_indicators_by_key_readings(key: str, *, body: ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime, training. Give `value`, or `numerator` and `denominator` for a ratio, and `evidence` saying where it comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting one is a person's, in the app, with a reason. 409 when a figure already stands.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_indicators.post_api_v1_risk_indicators_by_key_readings("some example string")
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1RiskIndicatorsByKeyReadingsErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_indicators.post_api_v1_risk_indicators_by_key_readings("some example string")
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1RiskIndicatorsByKeyReadingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1RiskIndicatorsReadingsRequest](deliverd/models/api_v1_risk_indicators_readings_request.py) \| [ApiV1RiskIndicatorsReadingsRequestDict](deliverd/models/api_v1_risk_indicators_readings_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The reading

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1RiskIndicatorsByKeyReadingsErrorBody](deliverd/errors/post_api_v1_risk_indicators_by_key_readings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Schedules

> Source: [Schedules](deliverd/apis/schedules.py)

<details>
<summary><code>def delete_api_v1_schedules_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The report and its versions are untouched. Use `PATCH` with `{"enabled": false}` to pause one instead, which keeps the record that it existed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.schedules.delete_api_v1_schedules_by_id("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1SchedulesByIdErrorBody
```

**Async**

```python
try:
    await async_client.schedules.delete_api_v1_schedules_by_id("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1SchedulesByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[DeleteApiV1SchedulesByIdErrorBody](deliverd/errors/delete_api_v1_schedules_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_schedules(*, due: DueOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SchedulesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An agent key sees only its own schedules. `due=1` narrows to the ones waiting on a publish: a schedule is due once it has fired and the report has had no new version since, and publishing clears it — there is nothing to acknowledge.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedules.get_api_v1_schedules()
    # TODO: Handle 'response' of type ApiV1SchedulesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.schedules.get_api_v1_schedules()
    # TODO: Handle 'response' of type ApiV1SchedulesResponse
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
| <code>due</code> | <code>[DueOrStr](deliverd/models/enums/due.py) \| None</code> | Return only schedules waiting on a publish<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SchedulesResponse](deliverd/models/api_v1_schedules_response.py)</code> -- Schedules visible to this key

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_schedules_by_id(id_: str, *, body: ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SchedulesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month carries a next run a month in the past.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedules.patch_api_v1_schedules_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1SchedulesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1SchedulesByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.schedules.patch_api_v1_schedules_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1SchedulesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1SchedulesByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1SchedulesRequest1](deliverd/models/api_v1_schedules_request1.py) \| [ApiV1SchedulesRequest1Dict](deliverd/models/api_v1_schedules_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SchedulesResponse1](deliverd/models/api_v1_schedules_response1.py)</code> -- Updated

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PatchApiV1SchedulesByIdErrorBody](deliverd/errors/patch_api_v1_schedules_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_schedules(*, body: ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SchedulesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`recurrence` is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — `0 0 30 2 *` is five well-formed fields and a date that never arrives, and is refused rather than stored.

An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a person's decision. The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the report's audience either way. Nothing publishes by itself: the agent polls `GET /schedules?due=1` and does the work.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedules.post_api_v1_schedules()
    # TODO: Handle 'response' of type ApiV1SchedulesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SchedulesErrorBody
```

**Async**

```python
try:
    response = await async_client.schedules.post_api_v1_schedules()
    # TODO: Handle 'response' of type ApiV1SchedulesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SchedulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SchedulesRequest](deliverd/models/api_v1_schedules_request.py) \| [ApiV1SchedulesRequestDict](deliverd/models/api_v1_schedules_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SchedulesResponse1](deliverd/models/api_v1_schedules_response1.py)</code> -- Created

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1SchedulesErrorBody](deliverd/errors/post_api_v1_schedules_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Screen

> Source: [Screen](deliverd/apis/screen.py)

<details>
<summary><code>def post_api_v1_screen(*, body: ApiV1ScreenRequest | ApiV1ScreenRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ScreenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category data and the organisation's own terms, and decides against what the AI register approves the model (`aiSystemId`) to receive: `allow`, `redact` (send `redactedText`), `ask` (a person decides through the approval in `approval`; send the original only once it is approved) or `deny`. Send `text`, screened in memory and never stored, or `counts`, what the SDK found on the caller's machine, so the text never leaves it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only (`mode: report_only`): it runs and is audited, `verdict` is always `allow`, and `wouldBe` says what a paid plan would have done. A net, not a guarantee: names are not reliably found.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screen.post_api_v1_screen()
    # TODO: Handle 'response' of type ApiV1ScreenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ScreenErrorBody
```

**Async**

```python
try:
    response = await async_client.screen.post_api_v1_screen()
    # TODO: Handle 'response' of type ApiV1ScreenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1ScreenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ScreenRequest](deliverd/models/api_v1_screen_request.py) \| [ApiV1ScreenRequestDict](deliverd/models/api_v1_screen_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ScreenResponse](deliverd/models/api_v1_screen_response.py)</code> -- The verdict, and why

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1ScreenErrorBody](deliverd/errors/post_api_v1_screen_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](deliverd/apis/tasks.py)

<details>
<summary><code>def get_api_v1_tasks(*, limit: int | None = None, cursor: str | None = None, status: Status2DeliverdDevTasksApiOrStr | None = None, external_id: str | None = None, q: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Most recently active first. Side tasks are reached through the objective they belong to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.get_api_v1_tasks()
    # TODO: Handle 'response' of type ApiV1TasksResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks()
    # TODO: Handle 'response' of type ApiV1TasksResponse2
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status2DeliverdDevTasksApiOrStr](deliverd/models/enums/status2_deliverd_dev_tasks_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse2](deliverd/models/api_v1_tasks_response2.py)</code> -- A page of objectives, each with side-task counts

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_tasks_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksResponse</code></summary>

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
    response = client.tasks.get_api_v1_tasks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TasksByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TasksByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse](deliverd/models/api_v1_tasks_response.py)</code> -- The task

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1TasksByIdErrorBody](deliverd/errors/get_api_v1_tasks_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_tasks_by_id_context(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The objective, where the task stands, confirmed and suggested decisions, open questions, constraints, side-task results, the next action, the reports published for the task (`reports`: up to ten live ones, newest first, each `{ id, title, url, version, publishedAt }`), and a paragraph to re-anchor on.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.get_api_v1_tasks_by_id_context(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks_by_id_context(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The context

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_tasks_by_id_context_given(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who confirmed each entry.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.get_api_v1_tasks_by_id_context_given(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks_by_id_context_given(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- `{ taskId, given }`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_tasks_by_id_governance(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate answer. A side task's id answers for its objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.get_api_v1_tasks_by_id_governance(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TasksByIdGovernanceErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks_by_id_governance(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TasksByIdGovernanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The governance

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1TasksByIdGovernanceErrorBody](deliverd/errors/get_api_v1_tasks_by_id_governance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_tasks_by_id_governance_gate(id_: UUID, *, action: ActionDeliverdDevGovernanceApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksGovernanceGateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`allowed`, `reason`, `missingControls` and `blockers` — an open reassessment, an overdue review or a high or critical incident, which only a person clears. With `?action=` (Enterprise) it also asks agent authority: `authority.mode` is allowed, approval or denied. Every check is recorded.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.get_api_v1_tasks_by_id_governance_gate(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksGovernanceGateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TasksByIdGovernanceGateErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks_by_id_governance_gate(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1TasksGovernanceGateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1TasksByIdGovernanceGateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>action</code> | <code>[ActionDeliverdDevGovernanceApiOrStr](deliverd/models/enums/action_deliverd_dev_governance_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksGovernanceGateResponse](deliverd/models/api_v1_tasks_governance_gate_response.py)</code> -- The gate's answer

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1TasksByIdGovernanceGateErrorBody](deliverd/errors/get_api_v1_tasks_by_id_governance_gate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_tasks_by_id_governance_pack(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a sha256 digest. `?format=html` to read and print. It assists audit; it does not certify compliance with any law. Every export is audited.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.get_api_v1_tasks_by_id_governance_pack(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks_by_id_governance_pack(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The pack

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_tasks_by_id_graph(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksGraphResponse</code></summary>

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
    response = client.tasks.get_api_v1_tasks_by_id_graph(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.get_api_v1_tasks_by_id_graph(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksGraphResponse
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksGraphResponse](deliverd/models/api_v1_tasks_graph_response.py)</code> -- Metadata only

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_tasks_by_id(id_: UUID, *, body: ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a person changes what the work is for.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.patch_api_v1_tasks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1TasksByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.patch_api_v1_tasks_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1TasksByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksRequest1](deliverd/models/api_v1_tasks_request1.py) \| [ApiV1TasksRequest1Dict](deliverd/models/api_v1_tasks_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse](deliverd/models/api_v1_tasks_response.py)</code> -- The task

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PatchApiV1TasksByIdErrorBody](deliverd/errors/patch_api_v1_tasks_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_tasks_by_id_governance(id_: UUID, *, body: ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight or clears a fact (403 not_permitted).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.patch_api_v1_tasks_by_id_governance(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1TasksByIdGovernanceErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.patch_api_v1_tasks_by_id_governance(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1TasksByIdGovernanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksGovernanceRequest1](deliverd/models/api_v1_tasks_governance_request1.py) \| [ApiV1TasksGovernanceRequest1Dict](deliverd/models/api_v1_tasks_governance_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The governance

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PatchApiV1TasksByIdGovernanceErrorBody](deliverd/errors/patch_api_v1_tasks_by_id_governance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 403, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks(*, body: ApiV1TasksRequest | ApiV1TasksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What the work is ultimately for, kept apart from the conversation and returned at the top of every context. With externalId, an open objective the caller already started under it is returned instead (resumed: true, status 200).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks()
    # TODO: Handle 'response' of type ApiV1TasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks()
    # TODO: Handle 'response' of type ApiV1TasksResponse
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
| <code>body</code> | <code>[ApiV1TasksRequest](deliverd/models/api_v1_tasks_request.py) \| [ApiV1TasksRequestDict](deliverd/models/api_v1_tasks_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse](deliverd/models/api_v1_tasks_response.py)</code> -- An open objective already started under this externalId

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_apply(id_: UUID, *, body: ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a summary, merges open questions and takes the next action. Answers with the parent's context and a message that returns to the objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_apply(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdApplyErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_apply(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdApplyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksApplyRequest](deliverd/models/api_v1_tasks_apply_request.py) \| [ApiV1TasksApplyRequestDict](deliverd/models/api_v1_tasks_apply_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The side task, the parent and its context

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdApplyErrorBody](deliverd/errors/post_api_v1_tasks_by_id_apply_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_cancel(id_: UUID, *, body: ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksCancelResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancelling an objective cancels the side tasks still open under it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_cancel(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksCancelRequest](deliverd/models/api_v1_tasks_cancel_request.py) \| [ApiV1TasksCancelRequestDict](deliverd/models/api_v1_tasks_cancel_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksCancelResponse](deliverd/models/api_v1_tasks_cancel_response.py)</code> -- The task, cancelled

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdCancelErrorBody](deliverd/errors/post_api_v1_tasks_by_id_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_complete(id_: UUID, *, body: ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksCompleteResponse</code></summary>

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
    response = client.tasks.post_api_v1_tasks_by_id_complete(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksCompleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdCompleteErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_complete(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksCompleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdCompleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksCompleteRequest](deliverd/models/api_v1_tasks_complete_request.py) \| [ApiV1TasksCompleteRequestDict](deliverd/models/api_v1_tasks_complete_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksCompleteResponse](deliverd/models/api_v1_tasks_complete_response.py)</code> -- The task, complete

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdCompleteErrorBody](deliverd/errors/post_api_v1_tasks_by_id_complete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_findings(id_: UUID, *, body: ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A decision is stored as a suggestion until a person confirms it or an approval decides it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_findings(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_findings(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksFindingsRequest](deliverd/models/api_v1_tasks_findings_request.py) \| [ApiV1TasksFindingsRequestDict](deliverd/models/api_v1_tasks_findings_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The finding

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_findings_by_finding_id_approval(id_: UUID, finding_id: UUID, *, body: ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_findings_by_finding_id_approval(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_findings_by_finding_id_approval(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>finding_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksFindingsApprovalRequest](deliverd/models/api_v1_tasks_findings_approval_request.py) \| [ApiV1TasksFindingsApprovalRequestDict](deliverd/models/api_v1_tasks_findings_approval_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The decision and its approval

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody](deliverd/errors/post_api_v1_tasks_by_id_findings_by_finding_id_approval_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(id_: UUID, finding_id: UUID, *, body: ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>finding_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksFindingsKnowledgeRequest](deliverd/models/api_v1_tasks_findings_knowledge_request.py) \| [ApiV1TasksFindingsKnowledgeRequestDict](deliverd/models/api_v1_tasks_findings_knowledge_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- `{ entry, resumed, screening }`

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody](deliverd/errors/post_api_v1_tasks_by_id_findings_by_finding_id_knowledge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_governance(id_: UUID, *, body: ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put an objective under Compliance Mode with what is known of its profile. Idempotent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_governance(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_governance(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksGovernanceRequest](deliverd/models/api_v1_tasks_governance_request.py) \| [ApiV1TasksGovernanceRequestDict](deliverd/models/api_v1_tasks_governance_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The governance

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdGovernanceErrorBody](deliverd/errors/post_api_v1_tasks_by_id_governance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_governance_controls_by_key_approval(id_: UUID, key: str, *, body: ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An ordinary approval through the organisation's approval process. The control is satisfied when it is approved. Needs approvals:write.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_governance_controls_by_key_approval(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_governance_controls_by_key_approval(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksGovernanceControlsApprovalRequest](deliverd/models/api_v1_tasks_governance_controls_approval_request.py) \| [ApiV1TasksGovernanceControlsApprovalRequestDict](deliverd/models/api_v1_tasks_governance_controls_approval_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The governance and the approval

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody](deliverd/errors/post_api_v1_tasks_by_id_governance_controls_by_key_approval_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_governance_evidence(id_: UUID, *, body: ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by evidence. Scored evidence carries `results` (what was measured), a tool's own `report` (promptfoo, Inspect, garak, Weave, Braintrust, JUnit and more), turned into results here, or a `pull` from the organisation's connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with keys the caller never holds. `release` names the release the results tested — `provider`, `model`, `modelVersion`, `promptHash`, `guardrailsHash`, digests never the text — and is kept on the run: evidence naming another release than the AI system now runs does not count, and says so (`otherRelease`); evidence naming none counts as before. A control with thresholds is met only when its newest scored evidence of this release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409 `connection_refused` when the tool refuses the stored key, and 502 `upstream_unavailable` when it cannot be read.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_governance_evidence(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceEvidenceErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_governance_evidence(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceEvidenceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksGovernanceEvidenceRequest](deliverd/models/api_v1_tasks_governance_evidence_request.py) \| [ApiV1TasksGovernanceEvidenceRequestDict](deliverd/models/api_v1_tasks_governance_evidence_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The governance

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdGovernanceEvidenceErrorBody](deliverd/errors/post_api_v1_tasks_by_id_governance_evidence_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 409, 502 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_governance_reassessments(id_: UUID, *, body: ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_governance_reassessments(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceReassessmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_governance_reassessments(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdGovernanceReassessmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksGovernanceReassessmentsRequest](deliverd/models/api_v1_tasks_governance_reassessments_request.py) \| [ApiV1TasksGovernanceReassessmentsRequestDict](deliverd/models/api_v1_tasks_governance_reassessments_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- { reassessment, governance }

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdGovernanceReassessmentsErrorBody](deliverd/errors/post_api_v1_tasks_by_id_governance_reassessments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_links(id_: UUID, *, body: ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_links(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_links(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type dict[str, Any]
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
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksLinksRequest](deliverd/models/api_v1_tasks_links_request.py) \| [ApiV1TasksLinksRequestDict](deliverd/models/api_v1_tasks_links_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, Any&#93;</code> -- The link

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_reopen(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksReopenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The earlier result is kept in previousResults.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_reopen(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksReopenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdReopenErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_reopen(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksReopenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdReopenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksReopenResponse](deliverd/models/api_v1_tasks_reopen_response.py)</code> -- The task, in progress again

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdReopenErrorBody](deliverd/errors/post_api_v1_tasks_by_id_reopen_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_tasks_by_id_side_tasks(id_: UUID, *, body: ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TasksSideTasksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It begins with a snapshot of the parent: objective, state, decisions and constraints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.post_api_v1_tasks_by_id_side_tasks(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksSideTasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdSideTasksErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.post_api_v1_tasks_by_id_side_tasks(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1TasksSideTasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1TasksByIdSideTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TasksSideTasksRequest](deliverd/models/api_v1_tasks_side_tasks_request.py) \| [ApiV1TasksSideTasksRequestDict](deliverd/models/api_v1_tasks_side_tasks_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksSideTasksResponse](deliverd/models/api_v1_tasks_side_tasks_response.py)</code> -- The side task

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1TasksByIdSideTasksErrorBody](deliverd/errors/post_api_v1_tasks_by_id_side_tasks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](deliverd/core/results.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](deliverd/apis/templates.py)

<details>
<summary><code>def get_api_v1_templates(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1TemplatesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.templates.get_api_v1_templates()
    # TODO: Handle 'response' of type ApiV1TemplatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.templates.get_api_v1_templates()
    # TODO: Handle 'response' of type ApiV1TemplatesResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TemplatesResponse](deliverd/models/api_v1_templates_response.py)</code> -- Templates

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Uploads

> Source: [Uploads](deliverd/apis/uploads.py)

<details>
<summary><code>def post_api_v1_uploads(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadsResponse</code></summary>

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
    response = client.uploads.post_api_v1_uploads()
    # TODO: Handle 'response' of type ApiV1UploadsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.uploads.post_api_v1_uploads()
    # TODO: Handle 'response' of type ApiV1UploadsResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadsResponse](deliverd/models/api_v1_uploads_response.py)</code> -- Upload ticket

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookEndpoints

> Source: [WebhookEndpoints](deliverd/apis/webhook_endpoints.py)

<details>
<summary><code>def delete_api_v1_webhook_endpoints_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Its delivery log goes with it. `PATCH` with `{"enabled": false}` stops deliveries and keeps both.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.webhook_endpoints.delete_api_v1_webhook_endpoints_by_id(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1WebhookEndpointsByIdErrorBody
```

**Async**

```python
try:
    await async_client.webhook_endpoints.delete_api_v1_webhook_endpoints_by_id(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApiV1WebhookEndpointsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The endpoint |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[DeleteApiV1WebhookEndpointsByIdErrorBody](deliverd/errors/delete_api_v1_webhook_endpoints_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1WebhookEndpoints403Error1](deliverd/models/api_v1_webhook_endpoints403_error1.py)</code> |
| 404 | <code>[ApiV1WebhookEndpoints404Error1](deliverd/models/api_v1_webhook_endpoints404_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_webhook_endpoints(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1WebhookEndpointsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook_endpoints.get_api_v1_webhook_endpoints()
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1WebhookEndpointsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook_endpoints.get_api_v1_webhook_endpoints()
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1WebhookEndpointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Rows per page. Above the maximum you get the maximum, not an error.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | nextCursor from a previous response. One we did not issue is refused.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse](deliverd/models/api_v1_webhook_endpoints_response.py)</code> -- Endpoints, newest first

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1WebhookEndpointsErrorBody](deliverd/errors/get_api_v1_webhook_endpoints_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1WebhookEndpoints403Error1](deliverd/models/api_v1_webhook_endpoints403_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_webhook_endpoints_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1WebhookEndpointsResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With its delivery health. Never its signing secret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook_endpoints.get_api_v1_webhook_endpoints_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1WebhookEndpointsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook_endpoints.get_api_v1_webhook_endpoints_by_id(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1WebhookEndpointsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The endpoint |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse2](deliverd/models/api_v1_webhook_endpoints_response2.py)</code> -- The endpoint

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[GetApiV1WebhookEndpointsByIdErrorBody](deliverd/errors/get_api_v1_webhook_endpoints_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1WebhookEndpoints403Error1](deliverd/models/api_v1_webhook_endpoints403_error1.py)</code> |
| 404 | <code>[ApiV1WebhookEndpoints404Error1](deliverd/models/api_v1_webhook_endpoints404_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_api_v1_webhook_endpoints_by_id(id_: UUID, *, body: ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1WebhookEndpointsResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it again for a new one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook_endpoints.patch_api_v1_webhook_endpoints_by_id(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1WebhookEndpointsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook_endpoints.patch_api_v1_webhook_endpoints_by_id(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchApiV1WebhookEndpointsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The endpoint |
| <code>body</code> | <code>[ApiV1WebhookEndpointsRequest1](deliverd/models/api_v1_webhook_endpoints_request1.py) \| [ApiV1WebhookEndpointsRequest1Dict](deliverd/models/api_v1_webhook_endpoints_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse2](deliverd/models/api_v1_webhook_endpoints_response2.py)</code> -- Changed

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PatchApiV1WebhookEndpointsByIdErrorBody](deliverd/errors/patch_api_v1_webhook_endpoints_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1WebhookEndpoints400Error1](deliverd/models/api_v1_webhook_endpoints400_error1.py)</code> |
| 403 | <code>[ApiV1WebhookEndpoints403Error1](deliverd/models/api_v1_webhook_endpoints403_error1.py)</code> |
| 404 | <code>[ApiV1WebhookEndpoints404Error1](deliverd/models/api_v1_webhook_endpoints404_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_webhook_endpoints(*, body: ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1WebhookEndpointsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every event the endpoint subscribes to then arrives as a signed POST. `events` empty or absent means every event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named.

The response carries **`secret`, on this response only**. No other call returns it and it cannot be retrieved afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same `Idempotency-Key` gets this same response back.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook_endpoints.post_api_v1_webhook_endpoints()
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1WebhookEndpointsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook_endpoints.post_api_v1_webhook_endpoints()
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1WebhookEndpointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1WebhookEndpointsRequest](deliverd/models/api_v1_webhook_endpoints_request.py) \| [ApiV1WebhookEndpointsRequestDict](deliverd/models/api_v1_webhook_endpoints_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse1](deliverd/models/api_v1_webhook_endpoints_response1.py)</code> -- Added. Keep `secret`: it is not shown again.

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1WebhookEndpointsErrorBody](deliverd/errors/post_api_v1_webhook_endpoints_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1WebhookEndpoints400Error1](deliverd/models/api_v1_webhook_endpoints400_error1.py)</code> |
| 403 | <code>[ApiV1WebhookEndpoints403Error1](deliverd/models/api_v1_webhook_endpoints403_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_webhook_endpoints_by_id_test(id_: UUID, *, body: ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1WebhookEndpointsTestResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Posts the event now, with the same signature and headers as a real delivery, `"test": true` beside `event` and obviously fake ids in `data`. One shot: never retried, and never counted toward the failures that switch an endpoint off. `delivered: false` is an answer about the endpoint, not a failure of this call. The body is optional.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook_endpoints.post_api_v1_webhook_endpoints_by_id_test(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1WebhookEndpointsByIdTestErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook_endpoints.post_api_v1_webhook_endpoints_by_id_test(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ApiV1WebhookEndpointsTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1WebhookEndpointsByIdTestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The endpoint |
| <code>body</code> | <code>[ApiV1WebhookEndpointsTestRequest](deliverd/models/api_v1_webhook_endpoints_test_request.py) \| [ApiV1WebhookEndpointsTestRequestDict](deliverd/models/api_v1_webhook_endpoints_test_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsTestResponse](deliverd/models/api_v1_webhook_endpoints_test_response.py)</code> -- What the endpoint answered

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[PostApiV1WebhookEndpointsByIdTestErrorBody](deliverd/errors/post_api_v1_webhook_endpoints_by_id_test_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1WebhookEndpointsTest400Error1](deliverd/models/api_v1_webhook_endpoints_test400_error1.py)</code> |
| 403 | <code>[ApiV1WebhookEndpointsTest403Error1](deliverd/models/api_v1_webhook_endpoints_test403_error1.py)</code> |
| 404 | <code>[ApiV1WebhookEndpointsTest404Error1](deliverd/models/api_v1_webhook_endpoints_test404_error1.py)</code> |
| anything unmapped | <code>[RawError](deliverd/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](deliverd/apis/workspaces.py)

<details>
<summary><code>def get_api_v1_workspaces(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.workspaces.get_api_v1_workspaces()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.workspaces.get_api_v1_workspaces()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](deliverd/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](deliverd/core/exceptions.py)&#91;[RawError](deliverd/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

