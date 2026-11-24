# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BrowserStackClient](browser_stack/client.py)

## AccessKey

> Source: [AccessKey](browser_stack/apis/access_key.py)

<details>
<summary><code>def recycle_access_key(*, request_options: RequestOptionsOrDict | None = None) -> AutomateRecycleKeyJsonResponse</code></summary>

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
try:
    response = client.access_key.recycle_access_key()
    # TODO: Handle 'response' of type AutomateRecycleKeyJsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.access_key.recycle_access_key()
    # TODO: Handle 'response' of type AutomateRecycleKeyJsonResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomateRecycleKeyJsonResponse](browser_stack/models/automate_recycle_key_json_response.py)</code> -- New access key

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Browsers

> Source: [Browsers](browser_stack/apis/browsers.py)

<details>
<summary><code>def get_browsers(*, request_options: RequestOptionsOrDict | None = None) -> list[Browser]</code></summary>

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
try:
    response = client.browsers.get_browsers()
    # TODO: Handle 'response' of type list[Browser]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.browsers.get_browsers()
    # TODO: Handle 'response' of type list[Browser]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Browser](browser_stack/models/browser.py)&#93;</code> -- List of supported browser and device configurations

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](browser_stack/apis/builds.py)

<details>
<summary><code>def delete_build(build_id: str, *, request_options: RequestOptionsOrDict | None = None) -> StatusMessage</code></summary>

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
    response = client.builds.delete_build("some example string")
    # TODO: Handle 'response' of type StatusMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.builds.delete_build("some example string")
    # TODO: Handle 'response' of type StatusMessage
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
| <code>build_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusMessage](browser_stack/models/status_message.py)</code> -- Build deletion confirmation

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds(*, limit: int | None = None, offset: int | None = None, status: StatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Build]</code></summary>

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
    response = client.builds.list_builds()
    # TODO: Handle 'response' of type list[Build]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.builds.list_builds()
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
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusOrStr](browser_stack/models/enums/status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Build](browser_stack/models/build.py)&#93;</code> -- Array of builds

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_build(build_id: str, body: AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Build</code></summary>

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
    response = client.builds.update_build("some example string", AutomateBuildsJsonRequest())
    # TODO: Handle 'response' of type Build
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.builds.update_build("some example string", AutomateBuildsJsonRequest())
    # TODO: Handle 'response' of type Build
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
| <code>build_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomateBuildsJsonRequest](browser_stack/models/automate_builds_json_request.py) \| [AutomateBuildsJsonRequestDict](browser_stack/models/automate_builds_json_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Build](browser_stack/models/build.py)</code> -- Updated build

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PlanApi

> Source: [PlanApi](browser_stack/apis/plan_api.py)

<details>
<summary><code>def get_plan(*, request_options: RequestOptionsOrDict | None = None) -> Plan</code></summary>

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
try:
    response = client.plan_api.get_plan()
    # TODO: Handle 'response' of type Plan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.plan_api.get_plan()
    # TODO: Handle 'response' of type Plan
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan](browser_stack/models/plan.py)</code> -- Plan details

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](browser_stack/apis/projects.py)

<details>
<summary><code>def delete_project(project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> StatusMessage</code></summary>

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
try:
    response = client.projects.delete_project(1)
    # TODO: Handle 'response' of type StatusMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.projects.delete_project(1)
    # TODO: Handle 'response' of type StatusMessage
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusMessage](browser_stack/models/status_message.py)</code> -- Deletion confirmation

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project(project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ProjectDetail</code></summary>

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
    response = client.projects.get_project(1)
    # TODO: Handle 'response' of type ProjectDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.projects.get_project(1)
    # TODO: Handle 'response' of type ProjectDetail
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectDetail](browser_stack/models/project_detail.py)</code> -- Project with associated builds

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project_badge_key(project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

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
    response = client.projects.get_project_badge_key(1)
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.projects.get_project_badge_key(1)
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Badge key string

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_projects(*, request_options: RequestOptionsOrDict | None = None) -> list[Project]</code></summary>

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
    response = client.projects.list_projects()
    # TODO: Handle 'response' of type list[Project]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.projects.list_projects()
    # TODO: Handle 'response' of type list[Project]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Project](browser_stack/models/project.py)&#93;</code> -- Array of project objects

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_project(project_id: int, body: AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Project</code></summary>

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
    response = client.projects.update_project(1, AutomateProjectsJsonRequest())
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.projects.update_project(1, AutomateProjectsJsonRequest())
    # TODO: Handle 'response' of type Project
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
| <code>project_id</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomateProjectsJsonRequest](browser_stack/models/automate_projects_json_request.py) \| [AutomateProjectsJsonRequestDict](browser_stack/models/automate_projects_json_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](browser_stack/models/project.py)</code> -- Updated project

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sessions

> Source: [Sessions](browser_stack/apis/sessions.py)

<details>
<summary><code>def delete_session(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> StatusMessage</code></summary>

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
    response = client.sessions.delete_session("some example string")
    # TODO: Handle 'response' of type StatusMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sessions.delete_session("some example string")
    # TODO: Handle 'response' of type StatusMessage
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusMessage](browser_stack/models/status_message.py)</code> -- Session deletion confirmation

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Session</code></summary>

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
    response = client.sessions.get_session("some example string")
    # TODO: Handle 'response' of type Session
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sessions.get_session("some example string")
    # TODO: Handle 'response' of type Session
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Session](browser_stack/models/session.py)</code> -- Session details

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_console_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

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
    response = client.sessions.get_session_console_logs("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sessions.get_session_console_logs("some example string")
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Console log text

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

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
    response = client.sessions.get_session_logs("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sessions.get_session_logs("some example string")
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Selenium log text

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_network_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sessions.get_session_network_logs("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sessions.get_session_network_logs("some example string")
    # TODO: Handle 'response' of type Any
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- HAR file

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_build_sessions(build_id: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Session]</code></summary>

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
    response = client.sessions.list_build_sessions("some example string")
    # TODO: Handle 'response' of type list[Session]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sessions.list_build_sessions("some example string")
    # TODO: Handle 'response' of type list[Session]
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
| <code>build_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Session](browser_stack/models/session.py)&#93;</code> -- Array of sessions

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_session(session_id: str, body: AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Session</code></summary>

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
    response = client.sessions.update_session("some example string", AutomateSessionsJsonRequest())
    # TODO: Handle 'response' of type Session
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sessions.update_session("some example string", AutomateSessionsJsonRequest())
    # TODO: Handle 'response' of type Session
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
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomateSessionsJsonRequest](browser_stack/models/automate_sessions_json_request.py) \| [AutomateSessionsJsonRequestDict](browser_stack/models/automate_sessions_json_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_stack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Session](browser_stack/models/session.py)</code> -- Updated session

**OnError**: <code>[ApiError](browser_stack/core/exceptions.py)&#91;[RawError](browser_stack/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

