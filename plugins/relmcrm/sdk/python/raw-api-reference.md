# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [RelmCrmClient](relm_crm/client.py)

## Activities

> Source: [Activities](relm_crm/apis/activities.py)

<details>
<summary><code>def create_activity(body: ActivityInput | ActivityInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Activity, RawError]</code></summary>

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
result = client.activities.with_raw_response.create_activity(ActivityInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.activities.with_raw_response.create_activity(ActivityInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
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
| <code>body</code> | <code>[ActivityInput](relm_crm/models/activity_input.py) \| [ActivityInputDict](relm_crm/models/activity_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Activity](relm_crm/models/activity.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Activity](relm_crm/models/activity.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.activities.with_raw_response.delete_activity("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.activities.with_raw_response.delete_activity("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Activity, RawError]</code></summary>

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
result = client.activities.with_raw_response.get_activity("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.activities.with_raw_response.get_activity("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Activity](relm_crm/models/activity.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Activity](relm_crm/models/activity.py)</code> -- Activity

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_activities(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, contact_id: str | None = None, deal_id: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActivityList, RawError]</code></summary>

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
result = client.activities.with_raw_response.list_activities()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActivityList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.activities.with_raw_response.list_activities()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActivityList
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
| <code>limit</code> | <code>int \| None</code> | Page size (default 25, max 100).<br>**Default**: <code>25</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque keyset cursor from a prior next_cursor.<br>**Default**: <code>None</code> |
| <code>include_deleted</code> | <code>bool \| None</code> | Include soft-deleted rows.<br>**Default**: <code>None</code> |
| <code>contact_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>deal_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | A registered activity.type value (validated).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[ActivityList](relm_crm/models/activity_list.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActivityList](relm_crm/models/activity_list.py)</code> -- Activity list

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Activity, RawError]</code></summary>

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
result = client.activities.with_raw_response.restore_activity("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.activities.with_raw_response.restore_activity("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Activity](relm_crm/models/activity.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Activity](relm_crm/models/activity.py)</code> -- Restored

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_activity(id_: str, body: ActivityInput | ActivityInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Activity, RawError]</code></summary>

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
result = client.activities.with_raw_response.update_activity("some example string", ActivityInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.activities.with_raw_response.update_activity("some example string", ActivityInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Activity
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ActivityInput](relm_crm/models/activity_input.py) \| [ActivityInputDict](relm_crm/models/activity_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Activity](relm_crm/models/activity.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Activity](relm_crm/models/activity.py)</code> -- Updated

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](relm_crm/apis/automations.py)

<details>
<summary><code>def automations_capabilities(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.automations.with_raw_response.automations_capabilities()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.automations.with_raw_response.automations_capabilities()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Capabilities

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_automation(body: AutomationInput | AutomationInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.automations.with_raw_response.create_automation(
    AutomationInput(name="some example string", trigger_event=TriggerEvent.CONTACT_CREATED, actions=[Action()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.automations.with_raw_response.create_automation(
    AutomationInput(name="some example string", trigger_event=TriggerEvent.CONTACT_CREATED, actions=[Action()])
)
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
| <code>body</code> | <code>[AutomationInput](relm_crm/models/automation_input.py) \| [AutomationInputDict](relm_crm/models/automation_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_automation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.automations.with_raw_response.delete_automation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.automations.with_raw_response.delete_automation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_automation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.automations.with_raw_response.get_automation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.automations.with_raw_response.get_automation("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Automation

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_automations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.automations.with_raw_response.list_automations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.automations.with_raw_response.list_automations()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Automations

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_automation_enabled(id_: str, body: AutomationsRequest | AutomationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.automations.with_raw_response.set_automation_enabled(
    "some example string", AutomationsRequest(enabled=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.automations.with_raw_response.set_automation_enabled(
    "some example string", AutomationsRequest(enabled=True)
)
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomationsRequest](relm_crm/models/automations_request.py) \| [AutomationsRequestDict](relm_crm/models/automations_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Automation

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](relm_crm/apis/batch.py)

<details>
<summary><code>def batch(body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.batch.with_raw_response.batch(BatchRequest(operations=[Operation()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch.with_raw_response.batch(BatchRequest(operations=[Operation()]))
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
| <code>body</code> | <code>[BatchRequest](relm_crm/models/batch_request.py) \| [BatchRequestDict](relm_crm/models/batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Per-op results (partial success)

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](relm_crm/apis/companies.py)

<details>
<summary><code>def create_company(body: CompanyInput | CompanyInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, RawError]</code></summary>

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
result = client.companies.with_raw_response.create_company(CompanyInput(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.companies.with_raw_response.create_company(CompanyInput(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
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
| <code>body</code> | <code>[CompanyInput](relm_crm/models/company_input.py) \| [CompanyInputDict](relm_crm/models/company_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Company](relm_crm/models/company.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](relm_crm/models/company.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_company(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.companies.with_raw_response.delete_company("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.companies.with_raw_response.delete_company("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, RawError]</code></summary>

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
result = client.companies.with_raw_response.get_company("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_company("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Company](relm_crm/models/company.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](relm_crm/models/company.py)</code> -- Company

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_companies(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, domain: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompanyList, RawError]</code></summary>

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
result = client.companies.with_raw_response.list_companies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.companies.with_raw_response.list_companies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyList
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
| <code>limit</code> | <code>int \| None</code> | Page size (default 25, max 100).<br>**Default**: <code>25</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque keyset cursor from a prior next_cursor.<br>**Default**: <code>None</code> |
| <code>include_deleted</code> | <code>bool \| None</code> | Include soft-deleted rows.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[CompanyList](relm_crm/models/company_list.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompanyList](relm_crm/models/company_list.py)</code> -- Company list

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_company(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, RawError]</code></summary>

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
result = client.companies.with_raw_response.restore_company("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.companies.with_raw_response.restore_company("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Company](relm_crm/models/company.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](relm_crm/models/company.py)</code> -- Restored

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_company(id_: str, body: CompanyInput | CompanyInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, RawError]</code></summary>

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
result = client.companies.with_raw_response.update_company(
    "some example string", CompanyInput(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.companies.with_raw_response.update_company(
    "some example string", CompanyInput(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CompanyInput](relm_crm/models/company_input.py) \| [CompanyInputDict](relm_crm/models/company_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Company](relm_crm/models/company.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](relm_crm/models/company.py)</code> -- Updated

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](relm_crm/apis/connections.py)

<details>
<summary><code>def create_connection(body: ConnectionsRequest | ConnectionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.connections.with_raw_response.create_connection(ConnectionsRequest(api_key="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.connections.with_raw_response.create_connection(
    ConnectionsRequest(api_key="some example string")
)
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
| <code>body</code> | <code>[ConnectionsRequest](relm_crm/models/connections_request.py) \| [ConnectionsRequestDict](relm_crm/models/connections_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_connection(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.connections.with_raw_response.delete_connection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.connections.with_raw_response.delete_connection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_connections(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.connections.with_raw_response.list_connections()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.connections.with_raw_response.list_connections()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Connections

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](relm_crm/apis/contacts.py)

<details>
<summary><code>def create_contact(body: ContactInput | ContactInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needs at least one of: a name, an identifier (email/phone/linkedin_url), a company, or a custom field. Email is unique per workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contacts.with_raw_response.create_contact(ContactInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.create_contact(ContactInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
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
| <code>body</code> | <code>[ContactInput](relm_crm/models/contact_input.py) \| [ContactInputDict](relm_crm/models/contact_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Contact](relm_crm/models/contact.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact](relm_crm/models/contact.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.contacts.with_raw_response.delete_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.delete_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact, RawError]</code></summary>

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
result = client.contacts.with_raw_response.get_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.get_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Contact](relm_crm/models/contact.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact](relm_crm/models/contact.py)</code> -- Contact

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contacts(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, email: str | None = None, company_id: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactList, RawError]</code></summary>

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
result = client.contacts.with_raw_response.list_contacts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.list_contacts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactList
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
| <code>limit</code> | <code>int \| None</code> | Page size (default 25, max 100).<br>**Default**: <code>25</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque keyset cursor from a prior next_cursor.<br>**Default**: <code>None</code> |
| <code>include_deleted</code> | <code>bool \| None</code> | Include soft-deleted rows.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Substring over name/email/phone/linkedin.<br>**Default**: <code>None</code> |
| <code>email</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>company_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | A registered contact.type value (validated).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[ContactList](relm_crm/models/contact_list.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactList](relm_crm/models/contact_list.py)</code> -- Contact list

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact, RawError]</code></summary>

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
result = client.contacts.with_raw_response.restore_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.restore_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Contact](relm_crm/models/contact.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact](relm_crm/models/contact.py)</code> -- Restored

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contact(id_: str, body: ContactInput | ContactInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact, RawError]</code></summary>

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
result = client.contacts.with_raw_response.update_contact("some example string", ContactInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.update_contact("some example string", ContactInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ContactInput](relm_crm/models/contact_input.py) \| [ContactInputDict](relm_crm/models/contact_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Contact](relm_crm/models/contact.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact](relm_crm/models/contact.py)</code> -- Updated

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deals

> Source: [Deals](relm_crm/apis/deals.py)

<details>
<summary><code>def create_deal(body: DealInput | DealInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deal, RawError]</code></summary>

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
result = client.deals.with_raw_response.create_deal(DealInput(title="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.deals.with_raw_response.create_deal(DealInput(title="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
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
| <code>body</code> | <code>[DealInput](relm_crm/models/deal_input.py) \| [DealInputDict](relm_crm/models/deal_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deal](relm_crm/models/deal.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deal](relm_crm/models/deal.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.deals.with_raw_response.delete_deal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.deals.with_raw_response.delete_deal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deal, RawError]</code></summary>

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
result = client.deals.with_raw_response.get_deal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.deals.with_raw_response.get_deal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deal](relm_crm/models/deal.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deal](relm_crm/models/deal.py)</code> -- Deal

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_deals(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, pipeline: str | None = None, pipeline_id: str | None = None, stage: str | None = None, company_id: str | None = None, primary_contact_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DealList, RawError]</code></summary>

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
result = client.deals.with_raw_response.list_deals()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DealList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.deals.with_raw_response.list_deals()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DealList
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
| <code>limit</code> | <code>int \| None</code> | Page size (default 25, max 100).<br>**Default**: <code>25</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque keyset cursor from a prior next_cursor.<br>**Default**: <code>None</code> |
| <code>include_deleted</code> | <code>bool \| None</code> | Include soft-deleted rows.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>pipeline</code> | <code>str \| None</code> | Scope to ONE pipeline (key or pl_ id). Omit and you get deals from ALL pipelines merged - pass this whenever you reason about a single funnel, since stage keys are not unique across pipelines. Alias: pipeline_id.<br>**Default**: <code>None</code> |
| <code>pipeline_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>stage</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>company_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>primary_contact_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[DealList](relm_crm/models/deal_list.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[DealList](relm_crm/models/deal_list.py)</code> -- Deal list

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deal, RawError]</code></summary>

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
result = client.deals.with_raw_response.restore_deal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.deals.with_raw_response.restore_deal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deal](relm_crm/models/deal.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deal](relm_crm/models/deal.py)</code> -- Restored

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_deal(id_: str, body: DealInput | DealInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deal, RawError]</code></summary>

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
result = client.deals.with_raw_response.update_deal("some example string", DealInput(title="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.deals.with_raw_response.update_deal(
    "some example string", DealInput(title="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deal
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DealInput](relm_crm/models/deal_input.py) \| [DealInputDict](relm_crm/models/deal_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deal](relm_crm/models/deal.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deal](relm_crm/models/deal.py)</code> -- Updated

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](relm_crm/apis/discovery.py)

<details>
<summary><code>def get_schema(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SchemaDoc, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every object with its fields, id_prefix and list_filters, all enum groups, list_controls, the automation capability catalog, and usage notes. Call this before guessing a type, field or filter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.discovery.with_raw_response.get_schema()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SchemaDoc
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.discovery.with_raw_response.get_schema()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SchemaDoc
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[SchemaDoc](relm_crm/models/schema_doc.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SchemaDoc](relm_crm/models/schema_doc.py)</code> -- Schema document

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_settings(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Settings, RawError]</code></summary>

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
result = client.discovery.with_raw_response.get_settings()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Settings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.discovery.with_raw_response.get_settings()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Settings
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Settings](relm_crm/models/settings.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Settings](relm_crm/models/settings.py)</code> -- Settings

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Usage, RawError]</code></summary>

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
result = client.discovery.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Usage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.discovery.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Usage
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Usage](relm_crm/models/usage.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Usage](relm_crm/models/usage.py)</code> -- Usage

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_settings(body: SettingsRequest | SettingsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Settings, RawError]</code></summary>

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
result = client.discovery.with_raw_response.set_settings(SettingsRequest(overage_cap_usd=1.5))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Settings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.discovery.with_raw_response.set_settings(SettingsRequest(overage_cap_usd=1.5))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Settings
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
| <code>body</code> | <code>[SettingsRequest](relm_crm/models/settings_request.py) \| [SettingsRequestDict](relm_crm/models/settings_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Settings](relm_crm/models/settings.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Settings](relm_crm/models/settings.py)</code> -- Settings

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](relm_crm/apis/pipelines.py)

<details>
<summary><code>def add_stage(key: str, body: PipelinesStagesRequest | PipelinesStagesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.add_stage(
    "some example string", PipelinesStagesRequest(key="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.add_stage(
    "some example string", PipelinesStagesRequest(key="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PipelinesStagesRequest](relm_crm/models/pipelines_stages_request.py) \| [PipelinesStagesRequestDict](relm_crm/models/pipelines_stages_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_pipeline(body: PipelineInput | PipelineInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.create_pipeline(PipelineInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.create_pipeline(PipelineInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>body</code> | <code>[PipelineInput](relm_crm/models/pipeline_input.py) \| [PipelineInputDict](relm_crm/models/pipeline_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.delete_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.delete_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>key</code> | <code>str</code> | Pipeline key or pl_ id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_stage(key: str, stage: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.delete_stage("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.delete_stage("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>stage</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.get_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.get_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>key</code> | <code>str</code> | Pipeline key or pl_ id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pipelines(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.list_pipelines()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.list_pipelines()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Pipelines

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reorder_stages(key: str, body: PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.reorder_stages(
    "some example string", PipelinesStagesReorderRequest(order=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.reorder_stages(
    "some example string", PipelinesStagesReorderRequest(order=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PipelinesStagesReorderRequest](relm_crm/models/pipelines_stages_reorder_request.py) \| [PipelinesStagesReorderRequestDict](relm_crm/models/pipelines_stages_reorder_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_default_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.set_default_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.set_default_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pipeline(key: str, body: PipelinesRequest | PipelinesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.update_pipeline("some example string", PipelinesRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.update_pipeline("some example string", PipelinesRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>key</code> | <code>str</code> | Pipeline key or pl_ id. |
| <code>body</code> | <code>[PipelinesRequest](relm_crm/models/pipelines_request.py) \| [PipelinesRequestDict](relm_crm/models/pipelines_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_stage(key: str, stage: str, body: PipelinesStagesRequest1 | PipelinesStagesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, RawError]</code></summary>

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
result = client.pipelines.with_raw_response.update_stage(
    "some example string", "some example string", PipelinesStagesRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pipelines.with_raw_response.update_stage(
    "some example string", "some example string", PipelinesStagesRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>stage</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PipelinesStagesRequest1](relm_crm/models/pipelines_stages_request1.py) \| [PipelinesStagesRequest1Dict](relm_crm/models/pipelines_stages_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Pipeline](relm_crm/models/pipeline.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Registry

> Source: [Registry](relm_crm/apis/registry.py)

<details>
<summary><code>def create_enum_value(body: EnumsRequest | EnumsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.registry.with_raw_response.create_enum_value(
    EnumsRequest(group="some example string", value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.registry.with_raw_response.create_enum_value(
    EnumsRequest(group="some example string", value="some example string")
)
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
| <code>body</code> | <code>[EnumsRequest](relm_crm/models/enums_request.py) \| [EnumsRequestDict](relm_crm/models/enums_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Updated value set

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_field(body: FieldsRequest | FieldsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.registry.with_raw_response.create_field(
    FieldsRequest(object_=ObjectRelmCrmBatchApi.CONTACT, key="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.registry.with_raw_response.create_field(
    FieldsRequest(object_=ObjectRelmCrmBatchApi.CONTACT, key="some example string")
)
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
| <code>body</code> | <code>[FieldsRequest](relm_crm/models/fields_request.py) \| [FieldsRequestDict](relm_crm/models/fields_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Field set

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_type(body: TypesRequest | TypesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.registry.with_raw_response.create_type(TypesRequest(key="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.registry.with_raw_response.create_type(TypesRequest(key="some example string"))
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
| <code>body</code> | <code>[TypesRequest](relm_crm/models/types_request.py) \| [TypesRequestDict](relm_crm/models/types_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Type set

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_enums(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.registry.with_raw_response.list_enums()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.registry.with_raw_response.list_enums()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Enum groups

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](relm_crm/apis/search.py)

<details>
<summary><code>def search(q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResult, RawError]</code></summary>

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
result = client.search.with_raw_response.search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.search.with_raw_response.search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResult
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
| <code>q</code> | <code>str</code> | Substring to match. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[SearchResult](relm_crm/models/search_result.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResult](relm_crm/models/search_result.py)</code> -- Search results (has_more=true if any section was truncated).

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sequences

> Source: [Sequences](relm_crm/apis/sequences.py)

<details>
<summary><code>def create_sequence(body: SequenceInput | SequenceInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sequences.with_raw_response.create_sequence(SequenceInput(name="some example string", steps=[Step()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.create_sequence(
    SequenceInput(name="some example string", steps=[Step()])
)
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
| <code>body</code> | <code>[SequenceInput](relm_crm/models/sequence_input.py) \| [SequenceInputDict](relm_crm/models/sequence_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_sequence(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.sequences.with_raw_response.delete_sequence("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.delete_sequence("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enroll(id_: str, body: SequencesEnrollRequest | SequencesEnrollRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sequences.with_raw_response.enroll(
    "some example string", SequencesEnrollRequest(contact_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.enroll(
    "some example string", SequencesEnrollRequest(contact_id="some example string")
)
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SequencesEnrollRequest](relm_crm/models/sequences_enroll_request.py) \| [SequencesEnrollRequestDict](relm_crm/models/sequences_enroll_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Enrollment

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sequence(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sequences.with_raw_response.get_sequence("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.get_sequence("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Sequence

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_enrollments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sequences.with_raw_response.list_enrollments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.list_enrollments("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Enrollments

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sequences(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sequences.with_raw_response.list_sequences()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.list_sequences()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Sequences

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview_sequence(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sequences.with_raw_response.preview_sequence("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.preview_sequence("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Preview

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_sequence_enabled(id_: str, body: SequencesRequest | SequencesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.sequences.with_raw_response.set_sequence_enabled("some example string", SequencesRequest(enabled=True))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.sequences.with_raw_response.set_sequence_enabled(
    "some example string", SequencesRequest(enabled=True)
)
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SequencesRequest](relm_crm/models/sequences_request.py) \| [SequencesRequestDict](relm_crm/models/sequences_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Sequence

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](relm_crm/apis/templates.py)

<details>
<summary><code>def create_template(body: TemplatesRequest | TemplatesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.templates.with_raw_response.create_template(
    TemplatesRequest(name="some example string", html="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.templates.with_raw_response.create_template(
    TemplatesRequest(name="some example string", html="some example string")
)
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
| <code>body</code> | <code>[TemplatesRequest](relm_crm/models/templates_request.py) \| [TemplatesRequestDict](relm_crm/models/templates_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Created

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_template(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.templates.with_raw_response.delete_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.templates.with_raw_response.delete_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_template(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.templates.with_raw_response.get_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.templates.with_raw_response.get_template("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Template

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_templates(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.templates.with_raw_response.list_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.templates.with_raw_response.list_templates()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Templates

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_template(id_: str, body: Any, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.templates.with_raw_response.update_template("some example string", {})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.templates.with_raw_response.update_template("some example string", {})
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Template

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](relm_crm/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(body: WebhookInput | WebhookInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, RawError]</code></summary>

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
result = client.webhooks_api.with_raw_response.create_webhook(WebhookInput(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.create_webhook(WebhookInput(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
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
| <code>body</code> | <code>[WebhookInput](relm_crm/models/webhook_input.py) \| [WebhookInputDict](relm_crm/models/webhook_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Webhook](relm_crm/models/webhook.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](relm_crm/models/webhook.py)</code> -- Created (secret shown once)

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deleted, RawError]</code></summary>

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
result = client.webhooks_api.with_raw_response.delete_webhook("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Deleted](relm_crm/models/deleted.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, RawError]</code></summary>

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
result = client.webhooks_api.with_raw_response.get_webhook("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Webhook](relm_crm/models/webhook.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](relm_crm/models/webhook.py)</code> -- Webhook

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_deliveries(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.webhooks_api.with_raw_response.list_deliveries("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_deliveries("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Deliveries

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhooks()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;Any, [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Webhooks

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(id_: str, body: WebhookInput | WebhookInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, RawError]</code></summary>

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
result = client.webhooks_api.with_raw_response.update_webhook(
    "some example string", WebhookInput(url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.update_webhook(
    "some example string", WebhookInput(url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[WebhookInput](relm_crm/models/webhook_input.py) \| [WebhookInputDict](relm_crm/models/webhook_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](relm_crm/core/results.py)&#91;[Webhook](relm_crm/models/webhook.py), [RawError](relm_crm/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](relm_crm/models/webhook.py)</code> -- Webhook

**On `Failure`**: `error` is <code>[RawError](relm_crm/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

