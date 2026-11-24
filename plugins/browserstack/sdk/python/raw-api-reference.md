# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [BrowserStackClient](browser_stack/client.py)

## AccessKey

> Source: [AccessKey](browser_stack/apis/access_key.py)

<details>
<summary><code>def recycle_access_key(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutomateRecycleKeyJsonResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a new access key, invalidating the old one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.access_key.with_raw_response.recycle_access_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomateRecycleKeyJsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.access_key.with_raw_response.recycle_access_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomateRecycleKeyJsonResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[AutomateRecycleKeyJsonResponse](browser_stack/models/automate_recycle_key_json_response.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutomateRecycleKeyJsonResponse](browser_stack/models/automate_recycle_key_json_response.py)</code> -- New access key

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Browsers

> Source: [Browsers](browser_stack/apis/browsers.py)

<details>
<summary><code>def get_browsers(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Browser], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of operating systems, browsers, and real mobile devices supported by Automate.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.browsers.with_raw_response.get_browsers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Browser]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.browsers.with_raw_response.get_browsers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Browser]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;list&#91;[Browser](browser_stack/models/browser.py)&#93;, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Browser](browser_stack/models/browser.py)&#93;</code> -- List of supported browser and device configurations

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](browser_stack/apis/builds.py)

<details>
<summary><code>def delete_build(build_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StatusMessage, RawError]</code></summary>

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
result = client.builds.with_raw_response.delete_build("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.delete_build("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusMessage
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
| <code>build_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[StatusMessage](browser_stack/models/status_message.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[StatusMessage](browser_stack/models/status_message.py)</code> -- Build deletion confirmation

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds(*, limit: int | None = None, offset: int | None = None, status: StatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Build], RawError]</code></summary>

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
result = client.builds.with_raw_response.list_builds()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Build]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.list_builds()
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusOrStr](browser_stack/models/enums/status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;list&#91;[Build](browser_stack/models/build.py)&#93;, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Build](browser_stack/models/build.py)&#93;</code> -- Array of builds

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_build(build_id: str, body: AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Build, RawError]</code></summary>

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
result = client.builds.with_raw_response.update_build("some example string", AutomateBuildsJsonRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Build
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.builds.with_raw_response.update_build("some example string", AutomateBuildsJsonRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Build
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
| <code>build_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomateBuildsJsonRequest](browser_stack/models/automate_builds_json_request.py) \| [AutomateBuildsJsonRequestDict](browser_stack/models/automate_builds_json_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[Build](browser_stack/models/build.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Build](browser_stack/models/build.py)</code> -- Updated build

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PlanApi

> Source: [PlanApi](browser_stack/apis/plan_api.py)

<details>
<summary><code>def get_plan(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of the current Automate subscription plan including parallel session capacity and current usage.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plan_api.with_raw_response.get_plan()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.plan_api.with_raw_response.get_plan()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[Plan](browser_stack/models/plan.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan](browser_stack/models/plan.py)</code> -- Plan details

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](browser_stack/apis/projects.py)

<details>
<summary><code>def delete_project(project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StatusMessage, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Automate project. The project must be empty of builds and sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.delete_project(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.projects.with_raw_response.delete_project(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusMessage
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[StatusMessage](browser_stack/models/status_message.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[StatusMessage](browser_stack/models/status_message.py)</code> -- Deletion confirmation

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project(project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectDetail, RawError]</code></summary>

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
result = client.projects.with_raw_response.get_project(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_project(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectDetail
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[ProjectDetail](browser_stack/models/project_detail.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectDetail](browser_stack/models/project_detail.py)</code> -- Project with associated builds

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project_badge_key(project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, RawError]</code></summary>

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
result = client.projects.with_raw_response.get_project_badge_key(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_project_badge_key(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;str, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- Badge key string

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_projects(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Project], RawError]</code></summary>

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
result = client.projects.with_raw_response.list_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.projects.with_raw_response.list_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;list&#91;[Project](browser_stack/models/project.py)&#93;, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Project](browser_stack/models/project.py)&#93;</code> -- Array of project objects

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_project(project_id: int, body: AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, RawError]</code></summary>

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
result = client.projects.with_raw_response.update_project(1, AutomateProjectsJsonRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.projects.with_raw_response.update_project(1, AutomateProjectsJsonRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomateProjectsJsonRequest](browser_stack/models/automate_projects_json_request.py) \| [AutomateProjectsJsonRequestDict](browser_stack/models/automate_projects_json_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[Project](browser_stack/models/project.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](browser_stack/models/project.py)</code> -- Updated project

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sessions

> Source: [Sessions](browser_stack/apis/sessions.py)

<details>
<summary><code>def delete_session(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StatusMessage, RawError]</code></summary>

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
result = client.sessions.with_raw_response.delete_session("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sessions.with_raw_response.delete_session("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusMessage
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[StatusMessage](browser_stack/models/status_message.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[StatusMessage](browser_stack/models/status_message.py)</code> -- Session deletion confirmation

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Session, RawError]</code></summary>

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
result = client.sessions.with_raw_response.get_session("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Session
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sessions.with_raw_response.get_session("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Session
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[Session](browser_stack/models/session.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Session](browser_stack/models/session.py)</code> -- Session details

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_console_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, RawError]</code></summary>

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
result = client.sessions.with_raw_response.get_session_console_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sessions.with_raw_response.get_session_console_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;str, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- Console log text

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, RawError]</code></summary>

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
result = client.sessions.with_raw_response.get_session_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sessions.with_raw_response.get_session_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;str, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- Selenium log text

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_network_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sessions.with_raw_response.get_session_network_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sessions.with_raw_response.get_session_network_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;Any, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- HAR file

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_build_sessions(build_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Session], RawError]</code></summary>

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
result = client.sessions.with_raw_response.list_build_sessions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Session]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sessions.with_raw_response.list_build_sessions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Session]
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
| <code>build_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;list&#91;[Session](browser_stack/models/session.py)&#93;, [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Session](browser_stack/models/session.py)&#93;</code> -- Array of sessions

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_session(session_id: str, body: AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Session, RawError]</code></summary>

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
result = client.sessions.with_raw_response.update_session("some example string", AutomateSessionsJsonRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Session
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sessions.with_raw_response.update_session(
    "some example string", AutomateSessionsJsonRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Session
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomateSessionsJsonRequest](browser_stack/models/automate_sessions_json_request.py) \| [AutomateSessionsJsonRequestDict](browser_stack/models/automate_sessions_json_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](browser_stack/core/results.py)&#91;[Session](browser_stack/models/session.py), [RawError](browser_stack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Session](browser_stack/models/session.py)</code> -- Updated session

**On `Failure`**: `error` is <code>[RawError](browser_stack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

