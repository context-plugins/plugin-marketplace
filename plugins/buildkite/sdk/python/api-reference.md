# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BuildkiteClient](buildkite/client.py)

## AccessToken

> Source: [AccessToken](buildkite/apis/access_token.py)

<details>
<summary><code>def get_access_token(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.access_token.get_access_token()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.access_token.get_access_token()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_access_token(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.access_token.revoke_access_token()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.access_token.revoke_access_token()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentTokens

> Source: [AgentTokens](buildkite/apis/agent_tokens.py)

<details>
<summary><code>def list_agent_tokens(org: str, cluster: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agent_tokens.list_agent_tokens("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.agent_tokens.list_agent_tokens("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>cluster</code> | <code>str</code> | Cluster UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentsApi

> Source: [AgentsApi](buildkite/apis/agents_api.py)

<details>
<summary><code>def get_agent(org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.agents_api.get_agent("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.agents_api.get_agent("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>id_</code> | <code>str</code> | Agent UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_agents(org: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Agent]</code></summary>

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
    response = client.agents_api.list_agents("some example string")
    # TODO: Handle 'response' of type list[Agent]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents_api.list_agents("some example string")
    # TODO: Handle 'response' of type list[Agent]
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Agent](buildkite/models/agent.py)&#93;</code> -- A list of agents

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_agent(org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.agents_api.stop_agent("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.agents_api.stop_agent("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>id_</code> | <code>str</code> | Agent UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Annotations

> Source: [Annotations](buildkite/apis/annotations.py)

<details>
<summary><code>def list_annotations(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.annotations.list_annotations("some example string", "some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.annotations.list_annotations("some example string", "some example string", 1)
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Artifacts

> Source: [Artifacts](buildkite/apis/artifacts.py)

<details>
<summary><code>def list_artifacts_for_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.artifacts.list_artifacts_for_build("some example string", "some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.artifacts.list_artifacts_for_build("some example string", "some example string", 1)
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](buildkite/apis/builds.py)

<details>
<summary><code>def cancel_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.cancel_build("some example string", "some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.builds.cancel_build("some example string", "some example string", 1)
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_build(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.builds.create_build("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.builds.create_build("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.builds.get_build("some example string", "some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.builds.get_build("some example string", "some example string", 1)
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Build]</code></summary>

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
    response = client.builds.list_builds("some example string", "some example string")
    # TODO: Handle 'response' of type list[Build]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.builds.list_builds("some example string", "some example string")
    # TODO: Handle 'response' of type list[Build]
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Build](buildkite/models/build.py)&#93;</code> -- A list of builds

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rebuild_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.rebuild_build("some example string", "some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.builds.rebuild_build("some example string", "some example string", 1)
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Clusters

> Source: [Clusters](buildkite/apis/clusters.py)

<details>
<summary><code>def list_clusters(org: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.clusters.list_clusters("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.clusters.list_clusters("some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Emojis

> Source: [Emojis](buildkite/apis/emojis.py)

<details>
<summary><code>def list_emojis(org: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.emojis.list_emojis("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.emojis.list_emojis("some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## JobsApi

> Source: [JobsApi](buildkite/apis/jobs_api.py)

<details>
<summary><code>def get_job_log(org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.jobs_api.get_job_log("some example string", "some example string", 1, "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.jobs_api.get_job_log("some example string", "some example string", 1, "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>job</code> | <code>str</code> | Job UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retry_job(org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.jobs_api.retry_job("some example string", "some example string", 1, "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.jobs_api.retry_job("some example string", "some example string", 1, "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>job</code> | <code>str</code> | Job UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](buildkite/apis/meta.py)

<details>
<summary><code>def get_meta(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.meta.get_meta()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.meta.get_meta()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](buildkite/apis/metrics.py)

<details>
<summary><code>def get_metrics(*, request_options: RequestOptionsOrDict | None = None) -> MetricsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns current agent and job counts for the cluster associated with the agent token. Used by autoscalers (Lambda scaler, agent-stack-k8s, custom controllers) to size agent pools.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.metrics.get_metrics()
    # TODO: Handle 'response' of type MetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.metrics.get_metrics()
    # TODO: Handle 'response' of type MetricsResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricsResponse](buildkite/models/metrics_response.py)</code> -- Cluster metrics payload

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](buildkite/apis/organizations.py)

<details>
<summary><code>def get_organization(org: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.organizations.get_organization("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.organizations.get_organization("some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_organizations(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.organizations.list_organizations()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.organizations.list_organizations()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PipelineTemplates

> Source: [PipelineTemplates](buildkite/apis/pipeline_templates.py)

<details>
<summary><code>def list_pipeline_templates(org: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.pipeline_templates.list_pipeline_templates("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pipeline_templates.list_pipeline_templates("some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](buildkite/apis/pipelines.py)

<details>
<summary><code>def create_pipeline(org: str, *, body: Pipeline | PipelineDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.pipelines.create_pipeline("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pipelines.create_pipeline("some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>body</code> | <code>[Pipeline](buildkite/models/pipeline.py) \| [PipelineDict](buildkite/models/pipeline.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.pipelines.delete_pipeline("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pipelines.delete_pipeline("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.pipelines.get_pipeline("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pipelines.get_pipeline("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pipelines(org: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Pipeline]</code></summary>

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
    response = client.pipelines.list_pipelines("some example string")
    # TODO: Handle 'response' of type list[Pipeline]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.list_pipelines("some example string")
    # TODO: Handle 'response' of type list[Pipeline]
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Pipeline](buildkite/models/pipeline.py)&#93;</code> -- A list of pipelines

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PATCH` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.pipelines.update_pipeline("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pipelines.update_pipeline("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](buildkite/apis/queues.py)

<details>
<summary><code>def list_queues(org: str, cluster: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.queues.list_queues("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.queues.list_queues("some example string", "some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>cluster</code> | <code>str</code> | Cluster UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rules

> Source: [Rules](buildkite/apis/rules.py)

<details>
<summary><code>def list_rules(org: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.rules.list_rules("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.rules.list_rules("some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stacks

> Source: [Stacks](buildkite/apis/stacks.py)

<details>
<summary><code>def get_stacks(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the desired stack configuration for a self-hosted queue's controller process. The controller watches the queue for jobs and runs agents on demand.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stacks.get_stacks()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.stacks.get_stacks()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](buildkite/apis/teams.py)

<details>
<summary><code>def list_teams(org: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.teams.list_teams("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.teams.list_teams("some example string")
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](buildkite/apis/user_api.py)

<details>
<summary><code>def get_current_user(*, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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
    response = client.user_api.get_current_user()
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.user_api.get_current_user()
    # TODO: Handle 'response' of type User
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](buildkite/models/user.py)</code> -- Authenticated user record

**OnError**: <code>[ApiError](buildkite/core/exceptions.py)&#91;[RawError](buildkite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

