# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [RelmCrmClient](relm_crm/client.py)

## Activities

> Source: [Activities](relm_crm/apis/activities.py)

<details>
<summary><code>def create_activity(body: ActivityInput | ActivityInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Activity</code></summary>

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
    response = client.activities.create_activity(ActivityInput())
    # TODO: Handle 'response' of type Activity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.activities.create_activity(ActivityInput())
    # TODO: Handle 'response' of type Activity
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
| <code>body</code> | <code>[ActivityInput](relm_crm/models/activity_input.py) \| [ActivityInputDict](relm_crm/models/activity_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](relm_crm/models/activity.py)</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.activities.delete_activity("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.activities.delete_activity("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Activity</code></summary>

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
    response = client.activities.get_activity("some example string")
    # TODO: Handle 'response' of type Activity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.activities.get_activity("some example string")
    # TODO: Handle 'response' of type Activity
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](relm_crm/models/activity.py)</code> -- Activity

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_activities(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, contact_id: str | None = None, deal_id: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ActivityList</code></summary>

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
    response = client.activities.list_activities()
    # TODO: Handle 'response' of type ActivityList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.activities.list_activities()
    # TODO: Handle 'response' of type ActivityList
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

**OnSuccess**: <code>[ActivityList](relm_crm/models/activity_list.py)</code> -- Activity list

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Activity</code></summary>

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
    response = client.activities.restore_activity("some example string")
    # TODO: Handle 'response' of type Activity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.activities.restore_activity("some example string")
    # TODO: Handle 'response' of type Activity
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](relm_crm/models/activity.py)</code> -- Restored

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_activity(id_: str, body: ActivityInput | ActivityInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Activity</code></summary>

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
    response = client.activities.update_activity("some example string", ActivityInput())
    # TODO: Handle 'response' of type Activity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.activities.update_activity("some example string", ActivityInput())
    # TODO: Handle 'response' of type Activity
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ActivityInput](relm_crm/models/activity_input.py) \| [ActivityInputDict](relm_crm/models/activity_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](relm_crm/models/activity.py)</code> -- Updated

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](relm_crm/apis/automations.py)

<details>
<summary><code>def automations_capabilities(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.automations.automations_capabilities()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.automations.automations_capabilities()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Capabilities

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_automation(body: AutomationInput | AutomationInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.automations.create_automation(
        AutomationInput(name="some example string", trigger_event=TriggerEvent.CONTACT_CREATED, actions=[Action()])
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.automations.create_automation(
        AutomationInput(name="some example string", trigger_event=TriggerEvent.CONTACT_CREATED, actions=[Action()])
    )
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
| <code>body</code> | <code>[AutomationInput](relm_crm/models/automation_input.py) \| [AutomationInputDict](relm_crm/models/automation_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_automation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.automations.delete_automation("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.automations.delete_automation("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_automation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.automations.get_automation("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.automations.get_automation("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Automation

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_automations(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.automations.list_automations()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.automations.list_automations()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Automations

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_automation_enabled(id_: str, body: AutomationsRequest | AutomationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.automations.set_automation_enabled("some example string", AutomationsRequest(enabled=True))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.automations.set_automation_enabled(
        "some example string", AutomationsRequest(enabled=True)
    )
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[AutomationsRequest](relm_crm/models/automations_request.py) \| [AutomationsRequestDict](relm_crm/models/automations_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Automation

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](relm_crm/apis/batch.py)

<details>
<summary><code>def batch(body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.batch.batch(BatchRequest(operations=[Operation()]))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.batch.batch(BatchRequest(operations=[Operation()]))
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
| <code>body</code> | <code>[BatchRequest](relm_crm/models/batch_request.py) \| [BatchRequestDict](relm_crm/models/batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Per-op results (partial success)

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](relm_crm/apis/companies.py)

<details>
<summary><code>def create_company(body: CompanyInput | CompanyInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Company</code></summary>

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
    response = client.companies.create_company(CompanyInput(name="some example string"))
    # TODO: Handle 'response' of type Company
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.companies.create_company(CompanyInput(name="some example string"))
    # TODO: Handle 'response' of type Company
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
| <code>body</code> | <code>[CompanyInput](relm_crm/models/company_input.py) \| [CompanyInputDict](relm_crm/models/company_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](relm_crm/models/company.py)</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_company(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.companies.delete_company("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.companies.delete_company("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Company</code></summary>

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
    response = client.companies.get_company("some example string")
    # TODO: Handle 'response' of type Company
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.companies.get_company("some example string")
    # TODO: Handle 'response' of type Company
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](relm_crm/models/company.py)</code> -- Company

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_companies(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, domain: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompanyList</code></summary>

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
    response = client.companies.list_companies()
    # TODO: Handle 'response' of type CompanyList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.companies.list_companies()
    # TODO: Handle 'response' of type CompanyList
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

**OnSuccess**: <code>[CompanyList](relm_crm/models/company_list.py)</code> -- Company list

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_company(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Company</code></summary>

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
    response = client.companies.restore_company("some example string")
    # TODO: Handle 'response' of type Company
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.companies.restore_company("some example string")
    # TODO: Handle 'response' of type Company
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](relm_crm/models/company.py)</code> -- Restored

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_company(id_: str, body: CompanyInput | CompanyInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Company</code></summary>

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
    response = client.companies.update_company("some example string", CompanyInput(name="some example string"))
    # TODO: Handle 'response' of type Company
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.companies.update_company(
        "some example string", CompanyInput(name="some example string")
    )
    # TODO: Handle 'response' of type Company
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CompanyInput](relm_crm/models/company_input.py) \| [CompanyInputDict](relm_crm/models/company_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](relm_crm/models/company.py)</code> -- Updated

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](relm_crm/apis/connections.py)

<details>
<summary><code>def create_connection(body: ConnectionsRequest | ConnectionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.connections.create_connection(ConnectionsRequest(api_key="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.connections.create_connection(ConnectionsRequest(api_key="some example string"))
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
| <code>body</code> | <code>[ConnectionsRequest](relm_crm/models/connections_request.py) \| [ConnectionsRequestDict](relm_crm/models/connections_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_connection(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.connections.delete_connection("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.connections.delete_connection("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_connections(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.connections.list_connections()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.connections.list_connections()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Connections

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](relm_crm/apis/contacts.py)

<details>
<summary><code>def create_contact(body: ContactInput | ContactInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Contact</code></summary>

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
try:
    response = client.contacts.create_contact(ContactInput())
    # TODO: Handle 'response' of type Contact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.create_contact(ContactInput())
    # TODO: Handle 'response' of type Contact
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
| <code>body</code> | <code>[ContactInput](relm_crm/models/contact_input.py) \| [ContactInputDict](relm_crm/models/contact_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](relm_crm/models/contact.py)</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.contacts.delete_contact("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.delete_contact("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Contact</code></summary>

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
    response = client.contacts.get_contact("some example string")
    # TODO: Handle 'response' of type Contact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.get_contact("some example string")
    # TODO: Handle 'response' of type Contact
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](relm_crm/models/contact.py)</code> -- Contact

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contacts(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, email: str | None = None, company_id: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ContactList</code></summary>

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
    response = client.contacts.list_contacts()
    # TODO: Handle 'response' of type ContactList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.list_contacts()
    # TODO: Handle 'response' of type ContactList
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

**OnSuccess**: <code>[ContactList](relm_crm/models/contact_list.py)</code> -- Contact list

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Contact</code></summary>

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
    response = client.contacts.restore_contact("some example string")
    # TODO: Handle 'response' of type Contact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.restore_contact("some example string")
    # TODO: Handle 'response' of type Contact
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](relm_crm/models/contact.py)</code> -- Restored

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contact(id_: str, body: ContactInput | ContactInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Contact</code></summary>

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
    response = client.contacts.update_contact("some example string", ContactInput())
    # TODO: Handle 'response' of type Contact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.update_contact("some example string", ContactInput())
    # TODO: Handle 'response' of type Contact
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ContactInput](relm_crm/models/contact_input.py) \| [ContactInputDict](relm_crm/models/contact_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](relm_crm/models/contact.py)</code> -- Updated

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deals

> Source: [Deals](relm_crm/apis/deals.py)

<details>
<summary><code>def create_deal(body: DealInput | DealInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Deal</code></summary>

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
    response = client.deals.create_deal(DealInput(title="some example string"))
    # TODO: Handle 'response' of type Deal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deals.create_deal(DealInput(title="some example string"))
    # TODO: Handle 'response' of type Deal
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
| <code>body</code> | <code>[DealInput](relm_crm/models/deal_input.py) \| [DealInputDict](relm_crm/models/deal_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a create: same key + same body replays the original result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](relm_crm/models/deal.py)</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.deals.delete_deal("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deals.delete_deal("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deal</code></summary>

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
    response = client.deals.get_deal("some example string")
    # TODO: Handle 'response' of type Deal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deals.get_deal("some example string")
    # TODO: Handle 'response' of type Deal
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](relm_crm/models/deal.py)</code> -- Deal

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_deals(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, pipeline: str | None = None, pipeline_id: str | None = None, stage: str | None = None, company_id: str | None = None, primary_contact_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DealList</code></summary>

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
    response = client.deals.list_deals()
    # TODO: Handle 'response' of type DealList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deals.list_deals()
    # TODO: Handle 'response' of type DealList
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

**OnSuccess**: <code>[DealList](relm_crm/models/deal_list.py)</code> -- Deal list

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deal</code></summary>

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
    response = client.deals.restore_deal("some example string")
    # TODO: Handle 'response' of type Deal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deals.restore_deal("some example string")
    # TODO: Handle 'response' of type Deal
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](relm_crm/models/deal.py)</code> -- Restored

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_deal(id_: str, body: DealInput | DealInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Deal</code></summary>

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
    response = client.deals.update_deal("some example string", DealInput(title="some example string"))
    # TODO: Handle 'response' of type Deal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deals.update_deal("some example string", DealInput(title="some example string"))
    # TODO: Handle 'response' of type Deal
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DealInput](relm_crm/models/deal_input.py) \| [DealInputDict](relm_crm/models/deal_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](relm_crm/models/deal.py)</code> -- Updated

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](relm_crm/apis/discovery.py)

<details>
<summary><code>def get_schema(*, request_options: RequestOptionsOrDict | None = None) -> SchemaDoc</code></summary>

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
try:
    response = client.discovery.get_schema()
    # TODO: Handle 'response' of type SchemaDoc
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.discovery.get_schema()
    # TODO: Handle 'response' of type SchemaDoc
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SchemaDoc](relm_crm/models/schema_doc.py)</code> -- Schema document

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_settings(*, request_options: RequestOptionsOrDict | None = None) -> Settings</code></summary>

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
    response = client.discovery.get_settings()
    # TODO: Handle 'response' of type Settings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.discovery.get_settings()
    # TODO: Handle 'response' of type Settings
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Settings](relm_crm/models/settings.py)</code> -- Settings

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_usage(*, request_options: RequestOptionsOrDict | None = None) -> Usage</code></summary>

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
    response = client.discovery.get_usage()
    # TODO: Handle 'response' of type Usage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.discovery.get_usage()
    # TODO: Handle 'response' of type Usage
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Usage](relm_crm/models/usage.py)</code> -- Usage

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_settings(body: SettingsRequest | SettingsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Settings</code></summary>

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
    response = client.discovery.set_settings(SettingsRequest(overage_cap_usd=1.5))
    # TODO: Handle 'response' of type Settings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.discovery.set_settings(SettingsRequest(overage_cap_usd=1.5))
    # TODO: Handle 'response' of type Settings
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
| <code>body</code> | <code>[SettingsRequest](relm_crm/models/settings_request.py) \| [SettingsRequestDict](relm_crm/models/settings_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Settings](relm_crm/models/settings.py)</code> -- Settings

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](relm_crm/apis/pipelines.py)

<details>
<summary><code>def add_stage(key: str, body: PipelinesStagesRequest | PipelinesStagesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.add_stage("some example string", PipelinesStagesRequest(key="some example string"))
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.add_stage(
        "some example string", PipelinesStagesRequest(key="some example string")
    )
    # TODO: Handle 'response' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PipelinesStagesRequest](relm_crm/models/pipelines_stages_request.py) \| [PipelinesStagesRequestDict](relm_crm/models/pipelines_stages_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_pipeline(body: PipelineInput | PipelineInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.create_pipeline(PipelineInput())
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.create_pipeline(PipelineInput())
    # TODO: Handle 'response' of type Pipeline
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
| <code>body</code> | <code>[PipelineInput](relm_crm/models/pipeline_input.py) \| [PipelineInputDict](relm_crm/models/pipeline_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.pipelines.delete_pipeline("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.delete_pipeline("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>key</code> | <code>str</code> | Pipeline key or pl_ id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_stage(key: str, stage: str, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.delete_stage("some example string", "some example string")
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.delete_stage("some example string", "some example string")
    # TODO: Handle 'response' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>stage</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.get_pipeline("some example string")
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline("some example string")
    # TODO: Handle 'response' of type Pipeline
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
| <code>key</code> | <code>str</code> | Pipeline key or pl_ id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pipelines(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.pipelines.list_pipelines()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.list_pipelines()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Pipelines

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reorder_stages(key: str, body: PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.reorder_stages(
        "some example string", PipelinesStagesReorderRequest(order=["some example string"])
    )
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.reorder_stages(
        "some example string", PipelinesStagesReorderRequest(order=["some example string"])
    )
    # TODO: Handle 'response' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PipelinesStagesReorderRequest](relm_crm/models/pipelines_stages_reorder_request.py) \| [PipelinesStagesReorderRequestDict](relm_crm/models/pipelines_stages_reorder_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_default_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.set_default_pipeline("some example string")
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.set_default_pipeline("some example string")
    # TODO: Handle 'response' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pipeline(key: str, body: PipelinesRequest | PipelinesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.update_pipeline("some example string", PipelinesRequest())
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.update_pipeline("some example string", PipelinesRequest())
    # TODO: Handle 'response' of type Pipeline
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
| <code>key</code> | <code>str</code> | Pipeline key or pl_ id. |
| <code>body</code> | <code>[PipelinesRequest](relm_crm/models/pipelines_request.py) \| [PipelinesRequestDict](relm_crm/models/pipelines_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_stage(key: str, stage: str, body: PipelinesStagesRequest1 | PipelinesStagesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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
    response = client.pipelines.update_stage("some example string", "some example string", PipelinesStagesRequest1())
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.update_stage(
        "some example string", "some example string", PipelinesStagesRequest1()
    )
    # TODO: Handle 'response' of type Pipeline
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
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>stage</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PipelinesStagesRequest1](relm_crm/models/pipelines_stages_request1.py) \| [PipelinesStagesRequest1Dict](relm_crm/models/pipelines_stages_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](relm_crm/models/pipeline.py)</code> -- Pipeline

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Registry

> Source: [Registry](relm_crm/apis/registry.py)

<details>
<summary><code>def create_enum_value(body: EnumsRequest | EnumsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.registry.create_enum_value(EnumsRequest(group="some example string", value="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.registry.create_enum_value(
        EnumsRequest(group="some example string", value="some example string")
    )
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
| <code>body</code> | <code>[EnumsRequest](relm_crm/models/enums_request.py) \| [EnumsRequestDict](relm_crm/models/enums_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Updated value set

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_field(body: FieldsRequest | FieldsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.registry.create_field(
        FieldsRequest(object_=ObjectRelmCrmBatchApi.CONTACT, key="some example string")
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.registry.create_field(
        FieldsRequest(object_=ObjectRelmCrmBatchApi.CONTACT, key="some example string")
    )
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
| <code>body</code> | <code>[FieldsRequest](relm_crm/models/fields_request.py) \| [FieldsRequestDict](relm_crm/models/fields_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Field set

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_type(body: TypesRequest | TypesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.registry.create_type(TypesRequest(key="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.registry.create_type(TypesRequest(key="some example string"))
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
| <code>body</code> | <code>[TypesRequest](relm_crm/models/types_request.py) \| [TypesRequestDict](relm_crm/models/types_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Type set

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_enums(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.registry.list_enums()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.registry.list_enums()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Enum groups

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](relm_crm/apis/search.py)

<details>
<summary><code>def search(q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> SearchResult</code></summary>

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
    response = client.search.search("some example string")
    # TODO: Handle 'response' of type SearchResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.search.search("some example string")
    # TODO: Handle 'response' of type SearchResult
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
| <code>q</code> | <code>str</code> | Substring to match. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResult](relm_crm/models/search_result.py)</code> -- Search results (has_more=true if any section was truncated).

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sequences

> Source: [Sequences](relm_crm/apis/sequences.py)

<details>
<summary><code>def create_sequence(body: SequenceInput | SequenceInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sequences.create_sequence(SequenceInput(name="some example string", steps=[Step()]))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.create_sequence(SequenceInput(name="some example string", steps=[Step()]))
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
| <code>body</code> | <code>[SequenceInput](relm_crm/models/sequence_input.py) \| [SequenceInputDict](relm_crm/models/sequence_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_sequence(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.sequences.delete_sequence("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.delete_sequence("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enroll(id_: str, body: SequencesEnrollRequest | SequencesEnrollRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sequences.enroll("some example string", SequencesEnrollRequest(contact_id="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.enroll(
        "some example string", SequencesEnrollRequest(contact_id="some example string")
    )
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SequencesEnrollRequest](relm_crm/models/sequences_enroll_request.py) \| [SequencesEnrollRequestDict](relm_crm/models/sequences_enroll_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Enrollment

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sequence(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sequences.get_sequence("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.get_sequence("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Sequence

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_enrollments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sequences.list_enrollments("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.list_enrollments("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Enrollments

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sequences(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sequences.list_sequences()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.list_sequences()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Sequences

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview_sequence(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sequences.preview_sequence("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.preview_sequence("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Preview

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_sequence_enabled(id_: str, body: SequencesRequest | SequencesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.sequences.set_sequence_enabled("some example string", SequencesRequest(enabled=True))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sequences.set_sequence_enabled("some example string", SequencesRequest(enabled=True))
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SequencesRequest](relm_crm/models/sequences_request.py) \| [SequencesRequestDict](relm_crm/models/sequences_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Sequence

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](relm_crm/apis/templates.py)

<details>
<summary><code>def create_template(body: TemplatesRequest | TemplatesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.templates.create_template(
        TemplatesRequest(name="some example string", html="some example string")
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.templates.create_template(
        TemplatesRequest(name="some example string", html="some example string")
    )
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
| <code>body</code> | <code>[TemplatesRequest](relm_crm/models/templates_request.py) \| [TemplatesRequestDict](relm_crm/models/templates_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Created

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_template(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.templates.delete_template("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.templates.delete_template("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_template(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.templates.get_template("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.templates.get_template("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Template

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_templates(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.templates.list_templates()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.templates.list_templates()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Templates

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_template(id_: str, body: Any, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.templates.update_template("some example string", {})
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.templates.update_template("some example string", {})
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Template

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](relm_crm/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(body: WebhookInput | WebhookInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
    response = client.webhooks_api.create_webhook(WebhookInput(url="https://example.com"))
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.create_webhook(WebhookInput(url="https://example.com"))
    # TODO: Handle 'response' of type Webhook
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
| <code>body</code> | <code>[WebhookInput](relm_crm/models/webhook_input.py) \| [WebhookInputDict](relm_crm/models/webhook_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](relm_crm/models/webhook.py)</code> -- Created (secret shown once)

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted</code></summary>

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
    response = client.webhooks_api.delete_webhook("some example string")
    # TODO: Handle 'response' of type Deleted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.delete_webhook("some example string")
    # TODO: Handle 'response' of type Deleted
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](relm_crm/models/deleted.py)</code> -- Deleted

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
    response = client.webhooks_api.get_webhook("some example string")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook("some example string")
    # TODO: Handle 'response' of type Webhook
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](relm_crm/models/webhook.py)</code> -- Webhook

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_deliveries(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.webhooks_api.list_deliveries("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_deliveries("some example string")
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Deliveries

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.webhooks_api.list_webhooks()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_webhooks()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Webhooks

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(id_: str, body: WebhookInput | WebhookInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
    response = client.webhooks_api.update_webhook("some example string", WebhookInput(url="https://example.com"))
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.update_webhook(
        "some example string", WebhookInput(url="https://example.com")
    )
    # TODO: Handle 'response' of type Webhook
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
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[WebhookInput](relm_crm/models/webhook_input.py) \| [WebhookInputDict](relm_crm/models/webhook_input.py)</code> | The request body. |
| <code>if_match</code> | <code>str \| None</code> | The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](relm_crm/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](relm_crm/models/webhook.py)</code> -- Webhook

**OnError**: <code>[ApiError](relm_crm/core/exceptions.py)&#91;[RawError](relm_crm/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

