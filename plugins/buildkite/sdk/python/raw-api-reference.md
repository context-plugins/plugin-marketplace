# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [BuildkiteClient](buildkite/client.py)

## AccessToken

> Source: [AccessToken](buildkite/apis/access_token.py)

<details>
<summary><code>def get_access_token(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.access_token.with_raw_response.get_access_token()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.access_token.with_raw_response.get_access_token()
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_access_token(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.access_token.with_raw_response.revoke_access_token()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.access_token.with_raw_response.revoke_access_token()
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentTokens

> Source: [AgentTokens](buildkite/apis/agent_tokens.py)

<details>
<summary><code>def list_agent_tokens(org: str, cluster: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.agent_tokens.with_raw_response.list_agent_tokens("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agent_tokens.with_raw_response.list_agent_tokens(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>cluster</code> | <code>str</code> | Cluster UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentsApi

> Source: [AgentsApi](buildkite/apis/agents_api.py)

<details>
<summary><code>def get_agent(org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.agents_api.with_raw_response.get_agent("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents_api.with_raw_response.get_agent("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>id_</code> | <code>str</code> | Agent UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_agents(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Agent], RawError]</code></summary>

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
result = client.agents_api.with_raw_response.list_agents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Agent]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents_api.with_raw_response.list_agents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Agent]
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;list&#91;[Agent](buildkite/models/agent.py)&#93;, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Agent](buildkite/models/agent.py)&#93;</code> -- A list of agents

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_agent(org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.agents_api.with_raw_response.stop_agent("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents_api.with_raw_response.stop_agent("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>id_</code> | <code>str</code> | Agent UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Annotations

> Source: [Annotations](buildkite/apis/annotations.py)

<details>
<summary><code>def list_annotations(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.annotations.with_raw_response.list_annotations("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.annotations.with_raw_response.list_annotations(
    "some example string", "some example string", 1
)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Artifacts

> Source: [Artifacts](buildkite/apis/artifacts.py)

<details>
<summary><code>def list_artifacts_for_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.artifacts.with_raw_response.list_artifacts_for_build("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.artifacts.with_raw_response.list_artifacts_for_build(
    "some example string", "some example string", 1
)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](buildkite/apis/builds.py)

<details>
<summary><code>def cancel_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.builds.with_raw_response.cancel_build("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.cancel_build("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_build(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.builds.with_raw_response.create_build("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.create_build("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.builds.with_raw_response.get_build("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.get_build("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Build], RawError]</code></summary>

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
result = client.builds.with_raw_response.list_builds("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Build]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.list_builds("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Build]
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;list&#91;[Build](buildkite/models/build.py)&#93;, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Build](buildkite/models/build.py)&#93;</code> -- A list of builds

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rebuild_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.builds.with_raw_response.rebuild_build("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.rebuild_build("some example string", "some example string", 1)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>number</code> | <code>int</code> | Build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Clusters

> Source: [Clusters](buildkite/apis/clusters.py)

<details>
<summary><code>def list_clusters(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.clusters.with_raw_response.list_clusters("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.clusters.with_raw_response.list_clusters("some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Emojis

> Source: [Emojis](buildkite/apis/emojis.py)

<details>
<summary><code>def list_emojis(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.emojis.with_raw_response.list_emojis("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.emojis.with_raw_response.list_emojis("some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## JobsApi

> Source: [JobsApi](buildkite/apis/jobs_api.py)

<details>
<summary><code>def get_job_log(org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.jobs_api.with_raw_response.get_job_log(
    "some example string", "some example string", 1, "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs_api.with_raw_response.get_job_log(
    "some example string", "some example string", 1, "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
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

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retry_job(org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.jobs_api.with_raw_response.retry_job(
    "some example string", "some example string", 1, "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs_api.with_raw_response.retry_job(
    "some example string", "some example string", 1, "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
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

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](buildkite/apis/meta.py)

<details>
<summary><code>def get_meta(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.meta.with_raw_response.get_meta()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.meta.with_raw_response.get_meta()
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](buildkite/apis/metrics.py)

<details>
<summary><code>def get_metrics(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetricsResponse, RawError]</code></summary>

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
result = client.metrics.with_raw_response.get_metrics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.metrics.with_raw_response.get_metrics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricsResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;[MetricsResponse](buildkite/models/metrics_response.py), [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetricsResponse](buildkite/models/metrics_response.py)</code> -- Cluster metrics payload

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](buildkite/apis/organizations.py)

<details>
<summary><code>def get_organization(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.organizations.with_raw_response.get_organization("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.organizations.with_raw_response.get_organization("some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_organizations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.organizations.with_raw_response.list_organizations()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.organizations.with_raw_response.list_organizations()
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PipelineTemplates

> Source: [PipelineTemplates](buildkite/apis/pipeline_templates.py)

<details>
<summary><code>def list_pipeline_templates(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.pipeline_templates.with_raw_response.list_pipeline_templates("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipeline_templates.with_raw_response.list_pipeline_templates("some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](buildkite/apis/pipelines.py)

<details>
<summary><code>def create_pipeline(org: str, *, body: Pipeline | PipelineDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.create_pipeline("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.create_pipeline("some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>body</code> | <code>[Pipeline](buildkite/models/pipeline.py) \| [PipelineDict](buildkite/models/pipeline.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.delete_pipeline("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.delete_pipeline("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.get_pipeline("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.get_pipeline("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pipelines(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Pipeline], RawError]</code></summary>

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
result = client.pipelines.with_raw_response.list_pipelines("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Pipeline]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.list_pipelines("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Pipeline]
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;list&#91;[Pipeline](buildkite/models/pipeline.py)&#93;, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Pipeline](buildkite/models/pipeline.py)&#93;</code> -- A list of pipelines

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.update_pipeline("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.update_pipeline("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>pipeline</code> | <code>str</code> | Pipeline slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](buildkite/apis/queues.py)

<details>
<summary><code>def list_queues(org: str, cluster: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.queues.with_raw_response.list_queues("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.queues.with_raw_response.list_queues("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>cluster</code> | <code>str</code> | Cluster UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rules

> Source: [Rules](buildkite/apis/rules.py)

<details>
<summary><code>def list_rules(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.rules.with_raw_response.list_rules("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.rules.with_raw_response.list_rules("some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stacks

> Source: [Stacks](buildkite/apis/stacks.py)

<details>
<summary><code>def get_stacks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.stacks.with_raw_response.get_stacks()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.stacks.with_raw_response.get_stacks()
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](buildkite/apis/teams.py)

<details>
<summary><code>def list_teams(org: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.teams.with_raw_response.list_teams("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.teams.with_raw_response.list_teams("some example string")
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>org</code> | <code>str</code> | Organization slug |
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;None, [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](buildkite/apis/user_api.py)

<details>
<summary><code>def get_current_user(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, RawError]</code></summary>

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
result = client.user_api.with_raw_response.get_current_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.user_api.with_raw_response.get_current_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](buildkite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](buildkite/core/results.py)&#91;[User](buildkite/models/user.py), [RawError](buildkite/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](buildkite/models/user.py)</code> -- Authenticated user record

**On `Failure`**: `error` is <code>[RawError](buildkite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

