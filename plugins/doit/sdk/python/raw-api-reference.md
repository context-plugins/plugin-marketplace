# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [DoiTClient](doi_t/client.py)

## AccountTeam

> Source: [AccountTeam](doi_t/apis/account_team.py)

<details>
<summary><code>def list_account_team(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomersV1AccountTeamResponse, ListAccountTeamErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DoiT account managers assigned to your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account_team.with_raw_response.list_account_team()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomersV1AccountTeamResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAccountTeamErrorBody
```

**Async**

```python
result = await async_client.account_team.with_raw_response.list_account_team()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomersV1AccountTeamResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAccountTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomersV1AccountTeamResponse](doi_t/models/customers_v1_account_team_response.py), [ListAccountTeamErrorBody](doi_t/errors/list_account_team_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomersV1AccountTeamResponse](doi_t/models/customers_v1_account_team_response.py)</code> -- OK - List of account managers returned.

**On `Failure`**: `error` is <code>[ListAccountTeamErrorBody](doi_t/errors/list_account_team_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Alerts

> Source: [Alerts](doi_t/apis/alerts.py)

<details>
<summary><code>def create_alert(body: AlertRequest | AlertRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Alert, CreateAlertErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new alert.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.alerts.with_raw_response.create_alert(
    AlertRequest(
        name="Monthly spend",
        config=AlertConfig(
            metric=MetricConfig(type_="basic", value="cost"),
            currency=Currency.USD,
            time_interval=TimeInterval.MONTH,
            condition=Condition.VALUE,
            operator=MetricFilterText.GT,
            value=1000,
        ),
        recipients=["finops@example.com"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Alert
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAlertErrorBody
```

**Async**

```python
result = await async_client.alerts.with_raw_response.create_alert(
    AlertRequest(
        name="Monthly spend",
        config=AlertConfig(
            metric=MetricConfig(type_="basic", value="cost"),
            currency=Currency.USD,
            time_interval=TimeInterval.MONTH,
            condition=Condition.VALUE,
            operator=MetricFilterText.GT,
            value=1000,
        ),
        recipients=["finops@example.com"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Alert
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAlertErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AlertRequest](doi_t/models/alert_request.py) \| [AlertRequestDict](doi_t/models/alert_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Alert](doi_t/models/alert.py), [CreateAlertErrorBody](doi_t/errors/create_alert_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Alert](doi_t/models/alert.py)</code> -- Created - The request succeeded.

**On `Failure`**: `error` is <code>[CreateAlertErrorBody](doi_t/errors/create_alert_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_alert(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAlertErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the alert specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.alerts.with_raw_response.delete_alert("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAlertErrorBody
```

**Async**

```python
result = await async_client.alerts.with_raw_response.delete_alert("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAlertErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Alert ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteAlertErrorBody](doi_t/errors/delete_alert_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAlertErrorBody](doi_t/errors/delete_alert_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_alert(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Alert, GetAlertErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an alert by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.alerts.with_raw_response.get_alert("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Alert
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAlertErrorBody
```

**Async**

```python
result = await async_client.alerts.with_raw_response.get_alert("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Alert
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAlertErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Alert ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Alert](doi_t/models/alert.py), [GetAlertErrorBody](doi_t/errors/get_alert_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Alert](doi_t/models/alert.py)</code> -- OK - Alert returned.

**On `Failure`**: `error` is <code>[GetAlertErrorBody](doi_t/errors/get_alert_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_alert_slack_channels(*, name_contains: str | None = None, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AlertSlackChannelList, ListAlertSlackChannelsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible private channels; service accounts return public/shared channels only. Results are sorted by stable destination identity. Keep nameContains unchanged when following pageToken.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.alerts.with_raw_response.list_alert_slack_channels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AlertSlackChannelList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAlertSlackChannelsErrorBody
```

**Async**

```python
result = await async_client.alerts.with_raw_response.list_alert_slack_channels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AlertSlackChannelList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAlertSlackChannelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name_contains</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AlertSlackChannelList](doi_t/models/alert_slack_channel_list.py), [ListAlertSlackChannelsErrorBody](doi_t/errors/list_alert_slack_channels_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AlertSlackChannelList](doi_t/models/alert_slack_channel_list.py)</code> -- Eligible channels and connection status.

**On `Failure`**: `error` is <code>[ListAlertSlackChannelsErrorBody](doi_t/errors/list_alert_slack_channels_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| 503 | <code>[RawError](doi_t/core/results.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_alerts(*, sort_by: SortByOrStr | None = None, sort_order: SortOrderOrStr | None = None, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExternalAlertList, ListAlertsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of alerts that your account has access to.
Alerts are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.alerts.with_raw_response.list_alerts(filter_="name:test", name_contains="monthly spend")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalAlertList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAlertsErrorBody
```

**Async**

```python
result = await async_client.alerts.with_raw_response.list_alerts(filter_="name:test", name_contains="monthly spend")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalAlertList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAlertsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort_by</code> | <code>[SortByOrStr](doi_t/models/enums/sort_by.py) \| None</code> | A field by which the results will be sorted.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Available filter keys: **owner**, **name**<br>**Default**: <code>None</code> |
| <code>name_contains</code> | <code>str \| None</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ExternalAlertList](doi_t/models/external_alert_list.py), [ListAlertsErrorBody](doi_t/errors/list_alerts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExternalAlertList](doi_t/models/external_alert_list.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListAlertsErrorBody](doi_t/errors/list_alerts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_alert(id_: str, body: AlertUpdateRequest | AlertUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Alert, UpdateAlertErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the alert specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.alerts.with_raw_response.update_alert(
    "some example string",
    AlertUpdateRequest(
        recipients_slack_channels=[AlertSlackChannelRequest(id="C0123456789", workspace="acme")],
        recipients=["finops@example.com"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Alert
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAlertErrorBody
```

**Async**

```python
result = await async_client.alerts.with_raw_response.update_alert(
    "some example string",
    AlertUpdateRequest(
        recipients_slack_channels=[AlertSlackChannelRequest(id="C0123456789", workspace="acme")],
        recipients=["finops@example.com"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Alert
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAlertErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Alert ID |
| <code>body</code> | <code>[AlertUpdateRequest](doi_t/models/alert_update_request.py) \| [AlertUpdateRequestDict](doi_t/models/alert_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Alert](doi_t/models/alert.py), [UpdateAlertErrorBody](doi_t/errors/update_alert_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Alert](doi_t/models/alert.py)</code> -- OK - Alert updated.

**On `Failure`**: `error` is <code>[UpdateAlertErrorBody](doi_t/errors/update_alert_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| 409 | <code>[RawError](doi_t/core/results.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Allocations

> Source: [Allocations](doi_t/apis/allocations.py)

<details>
<summary><code>def create_allocation(*, body: CreateAllocationRequest | CreateAllocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Allocation, CreateAllocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new allocation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.allocations.with_raw_response.create_allocation()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Allocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAllocationErrorBody
```

**Async**

```python
result = await async_client.allocations.with_raw_response.create_allocation()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Allocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAllocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateAllocationRequest](doi_t/models/create_allocation_request.py) \| [CreateAllocationRequestDict](doi_t/models/create_allocation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Allocation](doi_t/models/allocation.py), [CreateAllocationErrorBody](doi_t/errors/create_allocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Allocation](doi_t/models/allocation.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[CreateAllocationErrorBody](doi_t/errors/create_allocation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_allocation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteAllocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the allocation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.allocations.with_raw_response.delete_allocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAllocationErrorBody
```

**Async**

```python
result = await async_client.allocations.with_raw_response.delete_allocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAllocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Allocation ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;Any, [DeleteAllocationErrorBody](doi_t/errors/delete_allocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK - Allocation deleted.

**On `Failure`**: `error` is <code>[DeleteAllocationErrorBody](doi_t/errors/delete_allocation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| 409 | <code>list&#91;[AllocationDeleteValidation](doi_t/models/allocation_delete_validation.py)&#93;</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_allocation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Allocation, GetAllocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an allocation by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.allocations.with_raw_response.get_allocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Allocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllocationErrorBody
```

**Async**

```python
result = await async_client.allocations.with_raw_response.get_allocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Allocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Allocation ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Allocation](doi_t/models/allocation.py), [GetAllocationErrorBody](doi_t/errors/get_allocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Allocation](doi_t/models/allocation.py)</code> -- OK - Allocation returned.

**On `Failure`**: `error` is <code>[GetAllocationErrorBody](doi_t/errors/get_allocation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_allocations(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, sort_by: SortByDoiTAllocationsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1AllocationsResponse, ListAllocationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of allocations that your account has access to.
Allocations are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.allocations.with_raw_response.list_allocations(filter_="type:custom", name_contains="monthly spend")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1AllocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAllocationsErrorBody
```

**Async**

```python
result = await async_client.allocations.with_raw_response.list_allocations(
    filter_="type:custom", name_contains="monthly spend"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1AllocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAllocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results.<br>Valid fields: **type**, **owner**, **name**, **folderId**.<br>**Default**: <code>None</code> |
| <code>name_contains</code> | <code>str \| None</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByDoiTAllocationsApiOrStr](doi_t/models/enums/sort_by_doi_t_allocations_api.py) \| None</code> | A field by which the results will be sorted.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1AllocationsResponse](doi_t/models/analytics_v1_allocations_response.py), [ListAllocationsErrorBody](doi_t/errors/list_allocations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1AllocationsResponse](doi_t/models/analytics_v1_allocations_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListAllocationsErrorBody](doi_t/errors/list_allocations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_allocation(id_: str, *, body: UpdateAllocationRequest | UpdateAllocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Allocation, UpdateAllocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the allocation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.allocations.with_raw_response.update_allocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Allocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAllocationErrorBody
```

**Async**

```python
result = await async_client.allocations.with_raw_response.update_allocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Allocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAllocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Allocation ID |
| <code>body</code> | <code>[UpdateAllocationRequest](doi_t/models/update_allocation_request.py) \| [UpdateAllocationRequestDict](doi_t/models/update_allocation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Allocation](doi_t/models/allocation.py), [UpdateAllocationErrorBody](doi_t/errors/update_allocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Allocation](doi_t/models/allocation.py)</code> -- OK - Allocation updated.

**On `Failure`**: `error` is <code>[UpdateAllocationErrorBody](doi_t/errors/update_allocation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Annotations

> Source: [Annotations](doi_t/apis/annotations.py)

<details>
<summary><code>def create_annotation(body: CreateAnnotationRequest | CreateAnnotationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnnotationListItem, CreateAnnotationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new annotation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.annotations.with_raw_response.create_annotation(
    CreateAnnotationRequest(
        content="some example string", timestamp=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnnotationListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAnnotationErrorBody
```

**Async**

```python
result = await async_client.annotations.with_raw_response.create_annotation(
    CreateAnnotationRequest(
        content="some example string", timestamp=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnnotationListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAnnotationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateAnnotationRequest](doi_t/models/create_annotation_request.py) \| [CreateAnnotationRequestDict](doi_t/models/create_annotation_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnnotationListItem](doi_t/models/annotation_list_item.py), [CreateAnnotationErrorBody](doi_t/errors/create_annotation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnnotationListItem](doi_t/models/annotation_list_item.py)</code> -- Created - Annotation created successfully.

**On `Failure`**: `error` is <code>[CreateAnnotationErrorBody](doi_t/errors/create_annotation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_annotation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteAnnotationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the annotation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.annotations.with_raw_response.delete_annotation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAnnotationErrorBody
```

**Async**

```python
result = await async_client.annotations.with_raw_response.delete_annotation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAnnotationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Annotation ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;Any, [DeleteAnnotationErrorBody](doi_t/errors/delete_annotation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK - Annotation deleted.

**On `Failure`**: `error` is <code>[DeleteAnnotationErrorBody](doi_t/errors/delete_annotation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_annotation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnnotationListItem, GetAnnotationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an annotation by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.annotations.with_raw_response.get_annotation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnnotationListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnnotationErrorBody
```

**Async**

```python
result = await async_client.annotations.with_raw_response.get_annotation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnnotationListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnnotationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Annotation ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnnotationListItem](doi_t/models/annotation_list_item.py), [GetAnnotationErrorBody](doi_t/errors/get_annotation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnnotationListItem](doi_t/models/annotation_list_item.py)</code> -- OK - Annotation returned.

**On `Failure`**: `error` is <code>[GetAnnotationErrorBody](doi_t/errors/get_annotation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_annotations(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, sort_by: SortByDoiTAnnotationsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1AnnotationsResponse, ListAnnotationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of annotations that your account has access to.
Annotations are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.annotations.with_raw_response.list_annotations(filter_="content:budget")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1AnnotationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnnotationsErrorBody
```

**Async**

```python
result = await async_client.annotations.with_raw_response.list_annotations(filter_="content:budget")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1AnnotationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnnotationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results.<br>Valid fields: **content**, **timestamp**, **labels**.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByDoiTAnnotationsApiOrStr](doi_t/models/enums/sort_by_doi_t_annotations_api.py) \| None</code> | A field by which the results will be sorted.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1AnnotationsResponse](doi_t/models/analytics_v1_annotations_response.py), [ListAnnotationsErrorBody](doi_t/errors/list_annotations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1AnnotationsResponse](doi_t/models/analytics_v1_annotations_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListAnnotationsErrorBody](doi_t/errors/list_annotations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_annotation(id_: str, *, body: UpdateAnnotationRequest | UpdateAnnotationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnnotationListItem, UpdateAnnotationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the annotation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.annotations.with_raw_response.update_annotation(
    "some example string", body=UpdateAnnotationRequest(content="Updated annotation content")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnnotationListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAnnotationErrorBody
```

**Async**

```python
result = await async_client.annotations.with_raw_response.update_annotation(
    "some example string", body=UpdateAnnotationRequest(content="Updated annotation content")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnnotationListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAnnotationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Annotation ID |
| <code>body</code> | <code>[UpdateAnnotationRequest](doi_t/models/update_annotation_request.py) \| [UpdateAnnotationRequestDict](doi_t/models/update_annotation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnnotationListItem](doi_t/models/annotation_list_item.py), [UpdateAnnotationErrorBody](doi_t/errors/update_annotation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnnotationListItem](doi_t/models/annotation_list_item.py)</code> -- OK - Annotation updated.

**On `Failure`**: `error` is <code>[UpdateAnnotationErrorBody](doi_t/errors/update_annotation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Anomalies

> Source: [Anomalies](doi_t/apis/anomalies.py)

<details>
<summary><code>def get_anomaly(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnomaliesV1Response, GetAnomalyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified anomaly.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.anomalies.with_raw_response.get_anomaly("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnomaliesV1Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnomalyErrorBody
```

**Async**

```python
result = await async_client.anomalies.with_raw_response.get_anomaly("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnomaliesV1Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnomalyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | A unique identifier of the anomaly. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnomaliesV1Response](doi_t/models/anomalies_v1_response.py), [GetAnomalyErrorBody](doi_t/errors/get_anomaly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnomaliesV1Response](doi_t/models/anomalies_v1_response.py)</code> -- OK - Anomaly returned.

**On `Failure`**: `error` is <code>[GetAnomalyErrorBody](doi_t/errors/get_anomaly_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_anomaly_explanation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnomaliesV1ExplanationResponse, GetAnomalyExplanationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence references it was generated from. The explanation itself is AI-generated; it is always returned separately from the deterministic `facts`, and is marked as such in the `explanation` object. Generation is ephemeral: no conversation is persisted on your behalf.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.anomalies.with_raw_response.get_anomaly_explanation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnomaliesV1ExplanationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnomalyExplanationErrorBody
```

**Async**

```python
result = await async_client.anomalies.with_raw_response.get_anomaly_explanation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnomaliesV1ExplanationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnomalyExplanationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | A unique identifier of the anomaly. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnomaliesV1ExplanationResponse](doi_t/models/anomalies_v1_explanation_response.py), [GetAnomalyExplanationErrorBody](doi_t/errors/get_anomaly_explanation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnomaliesV1ExplanationResponse](doi_t/models/anomalies_v1_explanation_response.py)</code> -- OK - Anomaly explanation returned.

**On `Failure`**: `error` is <code>[GetAnomalyExplanationErrorBody](doi_t/errors/get_anomaly_explanation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_anomalies(*, min_creation_time: int | None = None, max_creation_time: int | None = None, filter_: str | None = None, sort_by: SortByDoiTAnomaliesApiOrStr | None = SortByDoiTAnomaliesApi.START_TIME, sort_order: SortOrderOrStr | None = None, max_results: int | None = None, page_token: str | None = None, include_notifications: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnomaliesResponse, ListAnomaliesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of detected anomalies.
Anomalies can be sorted by `startTime`, `severityLevel`, or `costOfAnomaly` using `sortBy` and `sortOrder`. By default they are sorted by `startTime` in descending order (most recent first).
The sort order is total and reproducible: ties on the selected field are broken by `startTime` descending and then by anomaly `id` ascending, so the same result set always paginates in the same order.
The `notifications` array is always present on each anomaly item; it is empty unless `includeNotifications=true` is supplied.
**Pagination stability**: `sortBy`, `sortOrder`, `filter`, `minCreationTime`, and `maxCreationTime` must be held constant across a pagination sequence. A `pageToken` presented with any of them changed is rejected with `400`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.anomalies.with_raw_response.list_anomalies(filter_="severityLevel:critical")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnomaliesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnomaliesErrorBody
```

**Async**

```python
result = await async_client.anomalies.with_raw_response.list_anomalies(filter_="severityLevel:critical")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnomaliesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnomaliesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>min_creation_time</code> | <code>int \| None</code> | Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document was created.<br>**Default**: <code>None</code> |
| <code>max_creation_time</code> | <code>int \| None</code> | Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document was created.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results. The syntax is `key:value`. Multiple criteria can be combined using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Available filter keys: **serviceName**, **billingAccount**, **platform**, **severityLevel**. `severityLevel` values must be lowercase: `information`, `warning`, `critical`. An unrecognised key, or a segment that is not `key:value`, is rejected with `400` rather than ignored.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByDoiTAnomaliesApiOrStr](doi_t/models/enums/sort_by_doi_t_anomalies_api.py) \| None</code> | A field by which the results will be sorted. Defaults to `startTime`.<br>**Default**: <code>SortByDoiTAnomaliesApi.START_TIME</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. If omitted, all anomalies matching the filters and time window are returned in a single page.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>include_notifications</code> | <code>bool \| None</code> | Include anomaly notifications from the subcollection. Defaults to false.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnomaliesResponse](doi_t/models/anomalies_response.py), [ListAnomaliesErrorBody](doi_t/errors/list_anomalies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnomaliesResponse](doi_t/models/anomalies_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListAnomaliesErrorBody](doi_t/errors/list_anomalies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patch_anomaly(id_: str, body: AnomalyStatusUpdate | AnomalyStatusUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PatchAnomalyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the review status of the anomaly identified by `{id}`, the same identifier `getAnomaly` accepts. Mirrors the review workflow available in the console: set `reviewStatus`, and when resolving, qualify it with `resolution` and optionally a `resolutionNote` (feedback reason and comment). The change is recorded in the anomaly's review history exactly like a console update, and the actor is derived from the API credentials - never from the request body.

Validation: `reviewStatus` is one of `NEEDS_REVIEW`, `UNDER_REVIEW`, `RESOLVED`; `resolution` (`ANOMALY_CONFIRMED` or `NOT_ANOMALY`) is required when `reviewStatus` is `RESOLVED` and forbidden otherwise; `resolutionNote.reason` must belong to the given `resolution` - `SECURITY_BREACH`, `MISCONFIGURATION`, `UNINTENTIONAL_PROVISIONING`, `EXPECTED_COST_SPIKE` or `ANOMALOUS_OTHER` for `ANOMALY_CONFIRMED`, and `FAULTY_ANOMALY_DETECTION_MODEL`, `INCORRECT_DATA`, `LOW_IMPACT` or `NON_ANOMALOUS_OTHER` for `NOT_ANOMALY`. Requires the `AnomaliesManager` permission and DoiT API access (`platform:externalApi`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.anomalies.with_raw_response.patch_anomaly(
    "some example string", AnomalyStatusUpdate(customer_feedback=CustomerFeedback())
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PatchAnomalyErrorBody
```

**Async**

```python
result = await async_client.anomalies.with_raw_response.patch_anomaly(
    "some example string", AnomalyStatusUpdate(customer_feedback=CustomerFeedback())
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PatchAnomalyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | A unique identifier of the anomaly. |
| <code>body</code> | <code>[AnomalyStatusUpdate](doi_t/models/anomaly_status_update.py) \| [AnomalyStatusUpdateDict](doi_t/models/anomaly_status_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [PatchAnomalyErrorBody](doi_t/errors/patch_anomaly_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PatchAnomalyErrorBody](doi_t/errors/patch_anomaly_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](doi_t/apis/assets.py)

<details>
<summary><code>def create_asset(*, type_: str | None = "amazon-web-services", mode: str | None = "New", account_name: str | None = "Account name", root_email: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AssetResponse, CreateAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new asset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.create_asset()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.create_asset()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>str \| None</code> | Asset type. For example, amazon-web-services<br>**Default**: <code>"amazon-web-services"</code> |
| <code>mode</code> | <code>str \| None</code> | Asset mode.<br>**Default**: <code>"New"</code> |
| <code>account_name</code> | <code>str \| None</code> | The desired name of the account.<br>**Default**: <code>"Account name"</code> |
| <code>root_email</code> | <code>str \| None</code> | The root account email.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AssetResponse](doi_t/models/asset_response.py), [CreateAssetErrorBody](doi_t/errors/create_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AssetResponse](doi_t/models/asset_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[CreateAssetErrorBody](doi_t/errors/create_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_asset(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AssetItemDetailed, GetAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of an asset specified by the asset id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.get_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssetItemDetailed
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.get_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssetItemDetailed
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique id of an asset. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AssetItemDetailed](doi_t/models/asset_item_detailed.py), [GetAssetErrorBody](doi_t/errors/get_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AssetItemDetailed](doi_t/models/asset_item_detailed.py)</code> -- OK - Asset details returned.

**On `Failure`**: `error` is <code>[GetAssetErrorBody](doi_t/errors/get_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def id_of_asset(id_: str, *, body: BillingV1AssetsRequest | BillingV1AssetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingV1AssetsResponse1, IdOfAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.id_of_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1AssetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IdOfAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.id_of_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1AssetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IdOfAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique id of an asset. |
| <code>body</code> | <code>[BillingV1AssetsRequest](doi_t/models/billing_v1_assets_request.py) \| [BillingV1AssetsRequestDict](doi_t/models/billing_v1_assets_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BillingV1AssetsResponse1](doi_t/models/billing_v1_assets_response1.py), [IdOfAssetErrorBody](doi_t/errors/id_of_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingV1AssetsResponse1](doi_t/models/billing_v1_assets_response1.py)</code> -- OK - Asset updated.

**On `Failure`**: `error` is <code>[IdOfAssetErrorBody](doi_t/errors/id_of_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def id_of_assets(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingV1AssetsResponse, IdOfAssetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace subscriptions, etc.
Assets are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.id_of_assets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1AssetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IdOfAssetsErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.id_of_assets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1AssetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IdOfAssetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results of the request. The syntax<br>is `key:[<value>]`. e.g: "type:g-suite". Multiple filters can be<br>connected using a pipe \|. Note that using different keys in the same<br>filter results in “AND,” while using the same key multiple times in<br>the same filter results in “OR”.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BillingV1AssetsResponse](doi_t/models/billing_v1_assets_response.py), [IdOfAssetsErrorBody](doi_t/errors/id_of_assets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingV1AssetsResponse](doi_t/models/billing_v1_assets_response.py)</code> -- OK - List of available assets returned.

**On `Failure`**: `error` is <code>[IdOfAssetsErrorBody](doi_t/errors/id_of_assets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AuthApi

> Source: [AuthApi](doi_t/apis/auth_api.py)

<details>
<summary><code>def validate(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValidateResponse, ValidateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated token, regardless of its own permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.auth_api.with_raw_response.validate()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidateErrorBody
```

**Async**

```python
result = await async_client.auth_api.with_raw_response.validate()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ValidateResponse](doi_t/models/validate_response.py), [ValidateErrorBody](doi_t/errors/validate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValidateResponse](doi_t/models/validate_response.py)</code> -- OK - The domain and email of the API user returned.

**On `Failure`**: `error` is <code>[ValidateErrorBody](doi_t/errors/validate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Ava

> Source: [Ava](doi_t/apis/ava.py)

<details>
<summary><code>def ask_ava_streaming(body: AvaAskRequest | AvaAskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[str], AskAvaStreamingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a question to Ava and receive a streaming response via Server-Sent Events (SSE).
The response streams back events containing the answer text, conversation ID, and message metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ava.with_raw_response.ask_ava_streaming(AvaAskRequest(question="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskAvaStreamingErrorBody
```

**Async**

```python
result = await async_client.ava.with_raw_response.ask_ava_streaming(AvaAskRequest(question="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncEventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskAvaStreamingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AvaAskRequest](doi_t/models/ava_ask_request.py) \| [AvaAskRequestDict](doi_t/models/ava_ask_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;EventStream&#91;str&#93;, [AskAvaStreamingErrorBody](doi_t/errors/ask_ava_streaming_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;str&#93;</code>, its body not yet read -- OK - SSE stream of Ava response events.

**On `Failure`**: `error` is <code>[AskAvaStreamingErrorBody](doi_t/errors/ask_ava_streaming_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ask_ava_sync(body: AvaAskSyncRequest | AvaAskSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AvaAskSyncResponse, AskAvaSyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a question to Ava and receive a synchronous response.
Set `ephemeral` to `true` to skip conversation persistence (recommended for programmatic consumers).
When `ephemeral` is `false` (default), the response includes a `conversationId` that can be used with the delete endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ava.with_raw_response.ask_ava_sync(AvaAskSyncRequest(question="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AvaAskSyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskAvaSyncErrorBody
```

**Async**

```python
result = await async_client.ava.with_raw_response.ask_ava_sync(AvaAskSyncRequest(question="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AvaAskSyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskAvaSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AvaAskSyncRequest](doi_t/models/ava_ask_sync_request.py) \| [AvaAskSyncRequestDict](doi_t/models/ava_ask_sync_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AvaAskSyncResponse](doi_t/models/ava_ask_sync_response.py), [AskAvaSyncErrorBody](doi_t/errors/ask_ava_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AvaAskSyncResponse](doi_t/models/ava_ask_sync_response.py)</code> -- OK - Ava response returned.

**On `Failure`**: `error` is <code>[AskAvaSyncErrorBody](doi_t/errors/ask_ava_sync_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ava_feedback(body: AvaFeedbackRequest | AvaFeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AvaFeedbackErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit feedback on an Ava answer to help improve response quality.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ava.with_raw_response.ava_feedback(
    AvaFeedbackRequest(
        conversation_id="some example string", answer_id="some example string", feedback=Feedback(positive=True)
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AvaFeedbackErrorBody
```

**Async**

```python
result = await async_client.ava.with_raw_response.ava_feedback(
    AvaFeedbackRequest(
        conversation_id="some example string", answer_id="some example string", feedback=Feedback(positive=True)
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AvaFeedbackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AvaFeedbackRequest](doi_t/models/ava_feedback_request.py) \| [AvaFeedbackRequestDict](doi_t/models/ava_feedback_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [AvaFeedbackErrorBody](doi_t/errors/ava_feedback_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AvaFeedbackErrorBody](doi_t/errors/ava_feedback_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_ava_conversation(conversation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAvaConversationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Ava conversation by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ava.with_raw_response.delete_ava_conversation("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAvaConversationErrorBody
```

**Async**

```python
result = await async_client.ava.with_raw_response.delete_ava_conversation("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAvaConversationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>conversation_id</code> | <code>str</code> | The ID of the conversation to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteAvaConversationErrorBody](doi_t/errors/delete_ava_conversation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAvaConversationErrorBody](doi_t/errors/delete_ava_conversation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BillingExplainerApi

> Source: [BillingExplainerApi](doi_t/apis/billing_explainer_api.py)

<details>
<summary><code>def get_billing_explainer_per_payer(invoice_month: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingExplainerCustomer, GetBillingExplainerPerPayerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the invoiced cost changes for each payer in the authenticated tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_explainer_api.with_raw_response.get_billing_explainer_per_payer(
    "2026-06", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingExplainerCustomer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingExplainerPerPayerErrorBody
```

**Async**

```python
result = await async_client.billing_explainer_api.with_raw_response.get_billing_explainer_per_payer(
    "2026-06", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingExplainerCustomer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingExplainerPerPayerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_month</code> | <code>str</code> | Invoice month in `YYYY-MM` format. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BillingExplainerCustomer](doi_t/models/billing_explainer_customer.py), [GetBillingExplainerPerPayerErrorBody](doi_t/errors/get_billing_explainer_per_payer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingExplainerCustomer](doi_t/models/billing_explainer_customer.py)</code> -- Billing explainer returned.

**On `Failure`**: `error` is <code>[GetBillingExplainerPerPayerErrorBody](doi_t/errors/get_billing_explainer_per_payer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_entity_invoice_explainer(billing_profile_id: str, invoice_number: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityInvoiceExplainer, GetEntityInvoiceExplainerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_explainer_api.with_raw_response.get_entity_invoice_explainer(
    "CUST-12345", "IN244004936", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityInvoiceExplainer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntityInvoiceExplainerErrorBody
```

**Async**

```python
result = await async_client.billing_explainer_api.with_raw_response.get_entity_invoice_explainer(
    "CUST-12345", "IN244004936", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityInvoiceExplainer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntityInvoiceExplainerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billing_profile_id</code> | <code>str</code> | Billing profile identifier shown on the invoice. |
| <code>invoice_number</code> | <code>str</code> | Customer-facing invoice number. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[EntityInvoiceExplainer](doi_t/models/entity_invoice_explainer.py), [GetEntityInvoiceExplainerErrorBody](doi_t/errors/get_entity_invoice_explainer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityInvoiceExplainer](doi_t/models/entity_invoice_explainer.py)</code> -- Billing explainer returned.

**On `Failure`**: `error` is <code>[GetEntityInvoiceExplainerErrorBody](doi_t/errors/get_entity_invoice_explainer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BillingTransfer

> Source: [BillingTransfer](doi_t/apis/billing_transfer.py)

<details>
<summary><code>def create_billing_transfer_end_customer_mappings(body: EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EndCustomerMappingBatchResult, CreateBillingTransferEndCustomerMappingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS
billing transfer onboarding. Reseller-only; distributors are explicitly denied (`403`).

Unlike `POST /billingtransfer/v1/resellerhandshakes`, this endpoint has no
`Idempotency-Key` requirement and no `dryRun` support.

This path is a deliberate exception to the de-hyphenation convention used by the sibling
`resellerhandshakes` and `programmanagementaccounts` paths — it stays hyphenated to match
the existing Go route and its console-facing equivalent.

Each item in the batch is processed independently; per-item outcomes are returned in
`results[]` with HTTP `200`. Malformed items are rejected up front and reported in
`invalidItems` without processing any of the batch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.create_billing_transfer_end_customer_mappings(
    EndCustomerMappingBatchCreate(
        dpma_id="some example string",
        reseller_pma_account_id="some example string",
        items=[EndCustomerMappingItem(ec_account_id="some example string", ec_customer_id="some example string")],
    ),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EndCustomerMappingBatchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBillingTransferEndCustomerMappingsErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.create_billing_transfer_end_customer_mappings(
    EndCustomerMappingBatchCreate(
        dpma_id="some example string",
        reseller_pma_account_id="some example string",
        items=[EndCustomerMappingItem(ec_account_id="some example string", ec_customer_id="some example string")],
    ),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EndCustomerMappingBatchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBillingTransferEndCustomerMappingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EndCustomerMappingBatchCreate](doi_t/models/end_customer_mapping_batch_create.py) \| [EndCustomerMappingBatchCreateDict](doi_t/models/end_customer_mapping_batch_create.py)</code> | The request body. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[EndCustomerMappingBatchResult](doi_t/models/end_customer_mapping_batch_result.py), [CreateBillingTransferEndCustomerMappingsErrorBody](doi_t/errors/create_billing_transfer_end_customer_mappings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EndCustomerMappingBatchResult](doi_t/models/end_customer_mapping_batch_result.py)</code> -- OK - Batch processed; see `results` for per-item outcomes and `invalidItems` for any items rejected before processing.

**On `Failure`**: `error` is <code>[CreateBillingTransferEndCustomerMappingsErrorBody](doi_t/errors/create_billing_transfer_end_customer_mappings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 403, 422 | <code>[BillingTransferProblemDetails](doi_t/models/billing_transfer_problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_billing_transfer_reseller_handshakes(idempotency_key: str, body: ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict, *, dry_run: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResellerHandshakeBatchResult, CreateBillingTransferResellerHandshakesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps reseller to distributor; also sends the handshake if required, as part of AWS
billing transfer onboarding. Distributor-only; callers without the ChannelOps distributor
tier entitlement receive `403`.

Each item in the batch is processed independently; per-item outcomes are returned in
`results[]` with HTTP `200` even when some items fail. Malformed items (missing fields,
duplicate `resellerPmaAccountId` within the batch) are rejected up front with `422` and
reported in `invalidItems`, and none of the batch is processed in that case.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.create_billing_transfer_reseller_handshakes(
    "some example string",
    ResellerHandshakeBatchCreate(
        dpma_id="some example string",
        items=[
            ResellerHandshakeItem(
                reseller_customer_id="some example string", reseller_pma_account_id="some example string"
            ),
        ],
    ),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResellerHandshakeBatchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBillingTransferResellerHandshakesErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.create_billing_transfer_reseller_handshakes(
    "some example string",
    ResellerHandshakeBatchCreate(
        dpma_id="some example string",
        items=[
            ResellerHandshakeItem(
                reseller_customer_id="some example string", reseller_pma_account_id="some example string"
            ),
        ],
    ),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResellerHandshakeBatchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBillingTransferResellerHandshakesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotency_key</code> | <code>str</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. |
| <code>body</code> | <code>[ResellerHandshakeBatchCreate](doi_t/models/reseller_handshake_batch_create.py) \| [ResellerHandshakeBatchCreateDict](doi_t/models/reseller_handshake_batch_create.py)</code> | The request body. |
| <code>dry_run</code> | <code>bool \| None</code> | If `true`, validates the batch and simulates the outcome without issuing any AWS<br>Organizations handshakes. The response shape is identical to a real execution.<br>**Default**: <code>False</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ResellerHandshakeBatchResult](doi_t/models/reseller_handshake_batch_result.py), [CreateBillingTransferResellerHandshakesErrorBody](doi_t/errors/create_billing_transfer_reseller_handshakes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResellerHandshakeBatchResult](doi_t/models/reseller_handshake_batch_result.py)</code> -- OK - Batch processed; see `results` and `summary` for per-item outcomes.

**On `Failure`**: `error` is <code>[CreateBillingTransferResellerHandshakesErrorBody](doi_t/errors/create_billing_transfer_reseller_handshakes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 403, 422, 502 | <code>[BillingTransferProblemDetails](doi_t/models/billing_transfer_problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_billing_transfer_program_management_accounts_status(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProgramManagementAccountsStatusResponse, GetBillingTransferProgramManagementAccountsStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs
with only its IAM status/diff and timestamps — no tenant fan-out, no handshake
aggregation, no pagination. Distributor-only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.get_billing_transfer_program_management_accounts_status(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProgramManagementAccountsStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingTransferProgramManagementAccountsStatusErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.get_billing_transfer_program_management_accounts_status(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProgramManagementAccountsStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingTransferProgramManagementAccountsStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ProgramManagementAccountsStatusResponse](doi_t/models/program_management_accounts_status_response.py), [GetBillingTransferProgramManagementAccountsStatusErrorBody](doi_t/errors/get_billing_transfer_program_management_accounts_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProgramManagementAccountsStatusResponse](doi_t/models/program_management_accounts_status_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetBillingTransferProgramManagementAccountsStatusErrorBody](doi_t/errors/get_billing_transfer_program_management_accounts_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_billing_transfer_end_customers(dpma_id: str, reseller_pma_account_id: str, *, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the end-customer AWS account mappings under a reseller's program management
account, identified by `dpmaId` and `resellerPmaAccountId`. Callable by the reseller who
owns the PMA or the distributor who owns the DPMA.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.list_billing_transfer_end_customers(
    "some example string", "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEndCustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferEndCustomersErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.list_billing_transfer_end_customers(
    "some example string", "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEndCustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferEndCustomersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dpma_id</code> | <code>str</code> | DPMA ID that owns the reseller PMA referenced by `resellerPmaAccountId`. |
| <code>reseller_pma_account_id</code> | <code>str</code> | 12-digit AWS account ID of the reseller's program management account. |
| <code>include_revoked</code> | <code>bool \| None</code> | If `true`, includes end-customer mappings that have been revoked. Defaults to `false` (revoked mappings are excluded).<br>**Default**: <code>False</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ListEndCustomersResponse](doi_t/models/list_end_customers_response.py), [ListBillingTransferEndCustomersErrorBody](doi_t/errors/list_billing_transfer_end_customers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListEndCustomersResponse](doi_t/models/list_end_customers_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListBillingTransferEndCustomersErrorBody](doi_t/errors/list_billing_transfer_end_customers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 403, 404 | <code>[BillingTransferProblemDetails](doi_t/models/billing_transfer_problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_billing_transfer_end_customers_by_reseller(reseller_pma_account_id: str, *, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersByResellerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same result as `GET /billingtransfer/v1/end-customers`, identified by
`resellerPmaAccountId` alone (no `dpmaId` needed). Callable by the reseller who owns the
PMA or the distributor who owns its DPMA.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.list_billing_transfer_end_customers_by_reseller(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEndCustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferEndCustomersByResellerErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.list_billing_transfer_end_customers_by_reseller(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEndCustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferEndCustomersByResellerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reseller_pma_account_id</code> | <code>str</code> | 12-digit AWS account ID of the reseller's program management account. |
| <code>include_revoked</code> | <code>bool \| None</code> | If `true`, includes end-customer mappings that have been revoked. Defaults to `false` (revoked mappings are excluded).<br>**Default**: <code>False</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ListEndCustomersResponse](doi_t/models/list_end_customers_response.py), [ListBillingTransferEndCustomersByResellerErrorBody](doi_t/errors/list_billing_transfer_end_customers_by_reseller_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListEndCustomersResponse](doi_t/models/list_end_customers_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListBillingTransferEndCustomersByResellerErrorBody](doi_t/errors/list_billing_transfer_end_customers_by_reseller_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 403, 404 | <code>[BillingTransferProblemDetails](doi_t/models/billing_transfer_problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_billing_transfer_program_management_accounts(*, max_results: int | None = 50, page_token: str | None = None, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProgramManagementAccountList, ListBillingTransferProgramManagementAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to
each one, including AWS Organizations handshake status per account. Distributor-only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.list_billing_transfer_program_management_accounts(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProgramManagementAccountList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferProgramManagementAccountsErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.list_billing_transfer_program_management_accounts(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProgramManagementAccountList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferProgramManagementAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ProgramManagementAccountList](doi_t/models/program_management_account_list.py), [ListBillingTransferProgramManagementAccountsErrorBody](doi_t/errors/list_billing_transfer_program_management_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProgramManagementAccountList](doi_t/models/program_management_account_list.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListBillingTransferProgramManagementAccountsErrorBody](doi_t/errors/list_billing_transfer_program_management_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_billing_transfer_reseller_accounts(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListResellerAccountsResponse, ListBillingTransferResellerAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every reseller program management account (RPMA) node belonging to the calling
reseller, with handshake state and status but without end-customer tenants — the
reseller-tier analog of `GET /billingtransfer/v1/programmanagementaccounts`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.list_billing_transfer_reseller_accounts(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResellerAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferResellerAccountsErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.list_billing_transfer_reseller_accounts(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResellerAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferResellerAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ListResellerAccountsResponse](doi_t/models/list_reseller_accounts_response.py), [ListBillingTransferResellerAccountsErrorBody](doi_t/errors/list_billing_transfer_reseller_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListResellerAccountsResponse](doi_t/models/list_reseller_accounts_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListBillingTransferResellerAccountsErrorBody](doi_t/errors/list_billing_transfer_reseller_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 403 | <code>[BillingTransferProblemDetails](doi_t/models/billing_transfer_problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_billing_transfer_reseller_accounts_with_tenants(*, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListResellerAccountsWithTenantsResponse, ListBillingTransferResellerAccountsWithTenantsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every reseller PMA node belonging to the calling reseller, each with the
end-customer tenants connected under it — the reseller-tier analog of
`GET /billingtransfer/v1/programmanagementaccounts`. `region`, `iamStatus` and
`lastRefreshTime` are inherited from the parent DPMA root; the reseller node itself
carries no IAM/region metadata of its own.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_transfer.with_raw_response.list_billing_transfer_reseller_accounts_with_tenants(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResellerAccountsWithTenantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferResellerAccountsWithTenantsErrorBody
```

**Async**

```python
result = await async_client.billing_transfer.with_raw_response.list_billing_transfer_reseller_accounts_with_tenants(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResellerAccountsWithTenantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBillingTransferResellerAccountsWithTenantsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include_revoked</code> | <code>bool \| None</code> | If `true`, includes end-customer mappings that have been revoked. Defaults to `false` (revoked mappings are excluded).<br>**Default**: <code>False</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ListResellerAccountsWithTenantsResponse](doi_t/models/list_reseller_accounts_with_tenants_response.py), [ListBillingTransferResellerAccountsWithTenantsErrorBody](doi_t/errors/list_billing_transfer_reseller_accounts_with_tenants_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListResellerAccountsWithTenantsResponse](doi_t/models/list_reseller_accounts_with_tenants_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListBillingTransferResellerAccountsWithTenantsErrorBody](doi_t/errors/list_billing_transfer_reseller_accounts_with_tenants_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 403 | <code>[BillingTransferProblemDetails](doi_t/models/billing_transfer_problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BudgetSuggestions

> Source: [BudgetSuggestions](doi_t/apis/budget_suggestions.py)

<details>
<summary><code>def accept_budget_suggestion(id_: str, body: BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1BudgetSuggestionsActionsAcceptResponse, AcceptBudgetSuggestionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the suggestion as accepted and links it to an existing budget. Create the budget first via
`POST /analytics/v1/budgets`, then pass its `id` as `budgetId`. The budget must belong to your account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budget_suggestions.with_raw_response.accept_budget_suggestion(
    "some example string", BudgetSuggestionAcceptRequest(budget_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetSuggestionsActionsAcceptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcceptBudgetSuggestionErrorBody
```

**Async**

```python
result = await async_client.budget_suggestions.with_raw_response.accept_budget_suggestion(
    "some example string", BudgetSuggestionAcceptRequest(budget_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetSuggestionsActionsAcceptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcceptBudgetSuggestionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Budget suggestion ID. |
| <code>body</code> | <code>[BudgetSuggestionAcceptRequest](doi_t/models/budget_suggestion_accept_request.py) \| [BudgetSuggestionAcceptRequestDict](doi_t/models/budget_suggestion_accept_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1BudgetSuggestionsActionsAcceptResponse](doi_t/models/analytics_v1_budget_suggestions_actions_accept_response.py), [AcceptBudgetSuggestionErrorBody](doi_t/errors/accept_budget_suggestion_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1BudgetSuggestionsActionsAcceptResponse](doi_t/models/analytics_v1_budget_suggestions_actions_accept_response.py)</code> -- OK - The suggestion was accepted and linked to the budget.

**On `Failure`**: `error` is <code>[AcceptBudgetSuggestionErrorBody](doi_t/errors/accept_budget_suggestion_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dismiss_budget_suggestion(id_: str, *, body: BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1BudgetSuggestionsActionsDismissResponse, DismissBudgetSuggestionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the suggestion as dismissed so it no longer appears in the pending list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budget_suggestions.with_raw_response.dismiss_budget_suggestion("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetSuggestionsActionsDismissResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DismissBudgetSuggestionErrorBody
```

**Async**

```python
result = await async_client.budget_suggestions.with_raw_response.dismiss_budget_suggestion("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetSuggestionsActionsDismissResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DismissBudgetSuggestionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Budget suggestion ID. |
| <code>body</code> | <code>[BudgetSuggestionDismissRequest](doi_t/models/budget_suggestion_dismiss_request.py) \| [BudgetSuggestionDismissRequestDict](doi_t/models/budget_suggestion_dismiss_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1BudgetSuggestionsActionsDismissResponse](doi_t/models/analytics_v1_budget_suggestions_actions_dismiss_response.py), [DismissBudgetSuggestionErrorBody](doi_t/errors/dismiss_budget_suggestion_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1BudgetSuggestionsActionsDismissResponse](doi_t/models/analytics_v1_budget_suggestions_actions_dismiss_response.py)</code> -- OK - The suggestion was dismissed.

**On `Failure`**: `error` is <code>[DismissBudgetSuggestionErrorBody](doi_t/errors/dismiss_budget_suggestion_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_budget_suggestions(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1BudgetSuggestionsResponse, ListBudgetSuggestionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the pending AI-generated budget suggestions for your account. The set is small (a handful
of pending suggestions) and is returned in full. Each suggestion can be accepted (after you create a
matching budget via `POST /analytics/v1/budgets`) or dismissed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budget_suggestions.with_raw_response.list_budget_suggestions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetSuggestionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBudgetSuggestionsErrorBody
```

**Async**

```python
result = await async_client.budget_suggestions.with_raw_response.list_budget_suggestions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetSuggestionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBudgetSuggestionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1BudgetSuggestionsResponse](doi_t/models/analytics_v1_budget_suggestions_response.py), [ListBudgetSuggestionsErrorBody](doi_t/errors/list_budget_suggestions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1BudgetSuggestionsResponse](doi_t/models/analytics_v1_budget_suggestions_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListBudgetSuggestionsErrorBody](doi_t/errors/list_budget_suggestions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Budgets

> Source: [Budgets](doi_t/apis/budgets.py)

<details>
<summary><code>def create_budget(*, body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BudgetApi, CreateBudgetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new budget

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budgets.with_raw_response.create_budget(
    body=BudgetCreateUpdateRequest(
        amount=100,
        collaborators=[Collaborator(email="placeholder@example.com", role=Role.OWNER)],
        currency=Currency.USD,
        name="monthly-cloud-budget",
        scopes=[
            ExternalConfigFilter(
                id="cloud_provider", type_=DimensionsTypes.FIXED, values=["amazon-web-services"], mode=Mode.IS
            ),
        ],
        start_period=1704067200000,
        time_interval="month",
        type_="recurring",
        use_prev_spend=False,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BudgetApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBudgetErrorBody
```

**Async**

```python
result = await async_client.budgets.with_raw_response.create_budget(
    body=BudgetCreateUpdateRequest(
        amount=100,
        collaborators=[Collaborator(email="placeholder@example.com", role=Role.OWNER)],
        currency=Currency.USD,
        name="monthly-cloud-budget",
        scopes=[
            ExternalConfigFilter(
                id="cloud_provider", type_=DimensionsTypes.FIXED, values=["amazon-web-services"], mode=Mode.IS
            ),
        ],
        start_period=1704067200000,
        time_interval="month",
        type_="recurring",
        use_prev_spend=False,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BudgetApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BudgetCreateUpdateRequest](doi_t/models/budget_create_update_request.py) \| [BudgetCreateUpdateRequestDict](doi_t/models/budget_create_update_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BudgetApi](doi_t/models/budget_api.py), [CreateBudgetErrorBody](doi_t/errors/create_budget_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BudgetApi](doi_t/models/budget_api.py)</code> -- Created - New budget created.

**On `Failure`**: `error` is <code>[CreateBudgetErrorBody](doi_t/errors/create_budget_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_budget(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteBudgetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budgets.with_raw_response.delete_budget("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBudgetErrorBody
```

**Async**

```python
result = await async_client.budgets.with_raw_response.delete_budget("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Budget ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;Any, [DeleteBudgetErrorBody](doi_t/errors/delete_budget_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK - Budget deleted.

**On `Failure`**: `error` is <code>[DeleteBudgetErrorBody](doi_t/errors/delete_budget_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_budget(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BudgetApi, GetBudgetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current utilization and configuration of the specified budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budgets.with_raw_response.get_budget("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BudgetApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBudgetErrorBody
```

**Async**

```python
result = await async_client.budgets.with_raw_response.get_budget("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BudgetApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Budget ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BudgetApi](doi_t/models/budget_api.py), [GetBudgetErrorBody](doi_t/errors/get_budget_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BudgetApi](doi_t/models/budget_api.py)</code> -- OK - Budget details returned.

**On `Failure`**: `error` is <code>[GetBudgetErrorBody](doi_t/errors/get_budget_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_budgets(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1BudgetsResponse, ListBudgetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order by default.
Each budget includes a server-computed `riskStatus` (`atRisk`, `onTrack`, or `unknown`), and the response includes a `riskAggregations` summary of risk counts across the full filtered result set (all pages, not just the current page).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budgets.with_raw_response.list_budgets(filter_="riskStatus:atRisk", name_contains="monthly spend")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBudgetsErrorBody
```

**Async**

```python
result = await async_client.budgets.with_raw_response.list_budgets(
    filter_="riskStatus:atRisk", name_contains="monthly spend"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1BudgetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBudgetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results of the request. The syntax is "key:[<value>]".<br>Available keys: owner, budgetName, lastModified in ms (>lasModified), riskStatus (one of "atRisk", "onTrack", "unknown"). Multiple filters can be connected using a pipe \|. Note that using different keys in the same filter results in "AND," while using the same key multiple times in the same filter results in "OR" (except riskStatus, where only the first occurrence is honored).<br>A budget is "atRisk" when it has already exceeded its configured amount, or its forecast projects it will exceed the configured amount before the current period ends. Budgets with no forecast data yet, a fixed budget whose period has already expired, or that are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk sorts results by earliest projected breach date (day granularity) ascending instead of the default order; budgets that tie on breach day, including every already-breached budget, resolve to a fixed, repeatable order across requests rather than an arbitrary one.<br>Because riskStatus is computed from live, periodically-refreshed budget data, paginated results filtered by riskStatus may shift between page requests if budget data refreshes mid-pagination.<br>**Default**: <code>None</code> |
| <code>name_contains</code> | <code>str \| None</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics.<br>**Default**: <code>None</code> |
| <code>min_creation_time</code> | <code>str \| None</code> | Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created after or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>max_creation_time</code> | <code>str \| None</code> | Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created before or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1BudgetsResponse](doi_t/models/analytics_v1_budgets_response.py), [ListBudgetsErrorBody](doi_t/errors/list_budgets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1BudgetsResponse](doi_t/models/analytics_v1_budgets_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListBudgetsErrorBody](doi_t/errors/list_budgets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_budget(id_: str, *, body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BudgetApi, UpdateBudgetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.budgets.with_raw_response.update_budget("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BudgetApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBudgetErrorBody
```

**Async**

```python
result = await async_client.budgets.with_raw_response.update_budget("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BudgetApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BudgetCreateUpdateRequest](doi_t/models/budget_create_update_request.py) \| [BudgetCreateUpdateRequestDict](doi_t/models/budget_create_update_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BudgetApi](doi_t/models/budget_api.py), [UpdateBudgetErrorBody](doi_t/errors/update_budget_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BudgetApi](doi_t/models/budget_api.py)</code> -- OK - Budget updated.

**On `Failure`**: `error` is <code>[UpdateBudgetErrorBody](doi_t/errors/update_budget_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CloudConnect

> Source: [CloudConnect](doi_t/apis/cloud_connect.py)

<details>
<summary><code>def create_account_role(body: CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AwsAccountResponse, CreateAccountRoleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a CloudConnect document for an AWS account.
Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents
or require a CloudFormation stack ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_connect.with_raw_response.create_account_role(
    CoreV1CloudconnectAwsAccountsRequest(
        account_id="some example string", role_arn="some example string", enabled_features=["some example string"]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsAccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAccountRoleErrorBody
```

**Async**

```python
result = await async_client.cloud_connect.with_raw_response.create_account_role(
    CoreV1CloudconnectAwsAccountsRequest(
        account_id="some example string", role_arn="some example string", enabled_features=["some example string"]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsAccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAccountRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CoreV1CloudconnectAwsAccountsRequest](doi_t/models/core_v1_cloudconnect_aws_accounts_request.py) \| [CoreV1CloudconnectAwsAccountsRequestDict](doi_t/models/core_v1_cloudconnect_aws_accounts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AwsAccountResponse](doi_t/models/aws_account_response.py), [CreateAccountRoleErrorBody](doi_t/errors/create_account_role_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AwsAccountResponse](doi_t/models/aws_account_response.py)</code> -- OK - Role created/updated successfully.

**On `Failure`**: `error` is <code>[CreateAccountRoleErrorBody](doi_t/errors/create_account_role_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_account_role(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAccountRoleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a CloudConnect document for an AWS account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_connect.with_raw_response.delete_account_role("123456789012")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAccountRoleErrorBody
```

**Async**

```python
result = await async_client.cloud_connect.with_raw_response.delete_account_role("123456789012")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAccountRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | The AWS account ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteAccountRoleErrorBody](doi_t/errors/delete_account_role_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAccountRoleErrorBody](doi_t/errors/delete_account_role_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_aws_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AwsAccountResponse, GetAwsAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state of an AWS account including role, supported features, and optional S3 bucket configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_connect.with_raw_response.get_aws_account("123456789012")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsAccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsAccountErrorBody
```

**Async**

```python
result = await async_client.cloud_connect.with_raw_response.get_aws_account("123456789012")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsAccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | The AWS account ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AwsAccountResponse](doi_t/models/aws_account_response.py), [GetAwsAccountErrorBody](doi_t/errors/get_aws_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AwsAccountResponse](doi_t/models/aws_account_response.py)</code> -- OK - Account details returned successfully.

**On `Failure`**: `error` is <code>[GetAwsAccountErrorBody](doi_t/errors/get_aws_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloud_connect_supported_features(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportedFeaturesResponse, GetCloudConnectSupportedFeaturesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of supported features and their permission status for a cloud account connected via CloudConnect.
The account must belong to the authenticated customer. Supports AWS and Azure accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_connect.with_raw_response.get_cloud_connect_supported_features("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedFeaturesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudConnectSupportedFeaturesErrorBody
```

**Async**

```python
result = await async_client.cloud_connect.with_raw_response.get_cloud_connect_supported_features("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedFeaturesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudConnectSupportedFeaturesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | The cloud provider account ID (AWS account ID or Azure tenant ID). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SupportedFeaturesResponse](doi_t/models/supported_features_response.py), [GetCloudConnectSupportedFeaturesErrorBody](doi_t/errors/get_cloud_connect_supported_features_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportedFeaturesResponse](doi_t/models/supported_features_response.py)</code> -- OK - Supported features returned.

**On `Failure`**: `error` is <code>[GetCloudConnectSupportedFeaturesErrorBody](doi_t/errors/get_cloud_connect_supported_features_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_aws_feature(account_id: str, body: CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AwsAccountResponse, UpdateAwsFeatureErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an AWS feature for an existing CloudConnect account.
Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents,
require a CloudFormation stack ID, or handle StackSet member role ARNs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_connect.with_raw_response.update_aws_feature(
    "123456789012", CoreV1CloudconnectAwsAccountsRequest1(enabled_features=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsAccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAwsFeatureErrorBody
```

**Async**

```python
result = await async_client.cloud_connect.with_raw_response.update_aws_feature(
    "123456789012", CoreV1CloudconnectAwsAccountsRequest1(enabled_features=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsAccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAwsFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | The AWS account ID. |
| <code>body</code> | <code>[CoreV1CloudconnectAwsAccountsRequest1](doi_t/models/core_v1_cloudconnect_aws_accounts_request1.py) \| [CoreV1CloudconnectAwsAccountsRequest1Dict](doi_t/models/core_v1_cloudconnect_aws_accounts_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AwsAccountResponse](doi_t/models/aws_account_response.py), [UpdateAwsFeatureErrorBody](doi_t/errors/update_aws_feature_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AwsAccountResponse](doi_t/models/aws_account_response.py)</code> -- OK - Feature updated successfully.

**On `Failure`**: `error` is <code>[UpdateAwsFeatureErrorBody](doi_t/errors/update_aws_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CloudDiagrams

> Source: [CloudDiagrams](doi_t/apis/cloud_diagrams.py)

<details>
<summary><code>def export_cloud_diagram_json(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudDiagramExportJsonResponse, ExportCloudDiagramJsonErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports the full content of a diagram layer as a structured JSON document,
including all components and export metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.export_cloud_diagram_json("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramExportJsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportCloudDiagramJsonErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.export_cloud_diagram_json("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramExportJsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportCloudDiagramJsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Layer ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudDiagramExportJsonResponse](doi_t/models/cloud_diagram_export_json_response.py), [ExportCloudDiagramJsonErrorBody](doi_t/errors/export_cloud_diagram_json_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudDiagramExportJsonResponse](doi_t/models/cloud_diagram_export_json_response.py)</code> -- OK - Diagram exported as JSON.

**On `Failure`**: `error` is <code>[ExportCloudDiagramJsonErrorBody](doi_t/errors/export_cloud_diagram_json_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def find_cloud_diagrams(body: FindCloudDiagramsRequest | FindCloudDiagramsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FindCloudDiagramsResponse], FindCloudDiagramsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns diagram URLs matching the provided resource IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.find_cloud_diagrams(
    FindCloudDiagramsRequest(resources=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FindCloudDiagramsResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindCloudDiagramsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.find_cloud_diagrams(
    FindCloudDiagramsRequest(resources=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FindCloudDiagramsResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindCloudDiagramsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindCloudDiagramsRequest](doi_t/models/find_cloud_diagrams_request.py) \| [FindCloudDiagramsRequestDict](doi_t/models/find_cloud_diagrams_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[FindCloudDiagramsResponse](doi_t/models/find_cloud_diagrams_response.py)&#93;, [FindCloudDiagramsErrorBody](doi_t/errors/find_cloud_diagrams_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FindCloudDiagramsResponse](doi_t/models/find_cloud_diagrams_response.py)&#93;</code> -- OK - Diagram URLs matching the criteria returned.

**On `Failure`**: `error` is <code>[FindCloudDiagramsErrorBody](doi_t/errors/find_cloud_diagrams_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloud_diagram_components(*, components: bool | None = None, external: bool | None = None, element: bool | None = None, link: bool | None = None, group: bool | None = None, note: bool | None = None, combiner: bool | None = None, type_: list[Type10OrStr] | None = None, node_type: NodeType1OrStr | None = None, alarms_count: bool | None = None, issues_count: bool | None = None, skip_empty: bool | None = None, exclude_default_vpc: bool | None = None, exclude_empty_subnets: bool | None = None, body: CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudDiagramsGetResponse, GetCloudDiagramComponentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns diagram and layer data. When the request body is empty, returns all diagrams
the caller has access to. When the body is populated, returns full diagram data including
layer components projected to key display and cloud fields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.get_cloud_diagram_components()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramsGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramComponentsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.get_cloud_diagram_components()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramsGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramComponentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>components</code> | <code>bool \| None</code> | Include components in the layer response.<br>**Default**: <code>None</code> |
| <code>external</code> | <code>bool \| None</code> | Include external (cross-diagram) components.<br>**Default**: <code>None</code> |
| <code>element</code> | <code>bool \| None</code> | Include elements.<br>**Default**: <code>None</code> |
| <code>link</code> | <code>bool \| None</code> | Include links.<br>**Default**: <code>None</code> |
| <code>group</code> | <code>bool \| None</code> | Include groups.<br>**Default**: <code>None</code> |
| <code>note</code> | <code>bool \| None</code> | Include notes.<br>**Default**: <code>None</code> |
| <code>combiner</code> | <code>bool \| None</code> | Include combiners.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>list&#91;[Type10OrStr](doi_t/models/enums/type10.py)&#93; \| None</code> | Filter diagrams by type.<br>**Default**: <code>None</code> |
| <code>node_type</code> | <code>[NodeType1OrStr](doi_t/models/enums/node_type1.py) \| None</code> | Filter components by node type.<br>**Default**: <code>None</code> |
| <code>alarms_count</code> | <code>bool \| None</code> | Include alarm counts (default true).<br>**Default**: <code>None</code> |
| <code>issues_count</code> | <code>bool \| None</code> | Include issue counts.<br>**Default**: <code>None</code> |
| <code>skip_empty</code> | <code>bool \| None</code> | Omit diagrams that have no components.<br>**Default**: <code>None</code> |
| <code>exclude_default_vpc</code> | <code>bool \| None</code> | Exclude the default VPC group (default true).<br>**Default**: <code>None</code> |
| <code>exclude_empty_subnets</code> | <code>bool \| None</code> | Exclude empty subnet groups (default true).<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[CloudDiagramsGetRequest](doi_t/models/cloud_diagrams_get_request.py) \| [CloudDiagramsGetRequestDict](doi_t/models/cloud_diagrams_get_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudDiagramsGetResponse](doi_t/models/cloud_diagrams_get_response.py), [GetCloudDiagramComponentsErrorBody](doi_t/errors/get_cloud_diagram_components_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudDiagramsGetResponse](doi_t/models/cloud_diagrams_get_response.py)</code> -- OK - Diagram and component data returned.

**On `Failure`**: `error` is <code>[GetCloudDiagramComponentsErrorBody](doi_t/errors/get_cloud_diagram_components_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloud_diagram_cost_snapshot(id_: str, start_date: Date, end_date: Date, *, interval: Interval1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudDiagramCostSnapshot, GetCloudDiagramCostSnapshotErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a bounded cost snapshot for the specified diagram layer over a date window.
The response composes the diagram's total spend, period-over-period change, top
resources by cost (capped at 5), top services by cost (capped at 5), and a trend
series (most recent 12 buckets at the requested interval).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.get_cloud_diagram_cost_snapshot(
    "some example string", date(2024, 1, 15), date(2024, 1, 15)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramCostSnapshot
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramCostSnapshotErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.get_cloud_diagram_cost_snapshot(
    "some example string", date(2024, 1, 15), date(2024, 1, 15)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramCostSnapshot
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramCostSnapshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Layer ID. |
| <code>start_date</code> | <code>Date</code> | Inclusive start of the cost window (ISO date, e.g. `2026-04-01`). |
| <code>end_date</code> | <code>Date</code> | Inclusive end of the cost window (ISO date, e.g. `2026-04-28`). |
| <code>interval</code> | <code>[Interval1OrStr](doi_t/models/enums/interval1.py) \| None</code> | Bucket interval for the trend series. Defaults to `day` when omitted.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudDiagramCostSnapshot](doi_t/models/cloud_diagram_cost_snapshot.py), [GetCloudDiagramCostSnapshotErrorBody](doi_t/errors/get_cloud_diagram_cost_snapshot_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudDiagramCostSnapshot](doi_t/models/cloud_diagram_cost_snapshot.py)</code> -- OK - Diagram cost snapshot returned.

**On `Failure`**: `error` is <code>[GetCloudDiagramCostSnapshotErrorBody](doi_t/errors/get_cloud_diagram_cost_snapshot_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloud_diagram_layer_snapshot(id_: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudDiagramLayerSnapshot, GetCloudDiagramLayerSnapshotErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single snapshot of the specified diagram layer identified by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.get_cloud_diagram_layer_snapshot(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramLayerSnapshot
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramLayerSnapshotErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.get_cloud_diagram_layer_snapshot(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramLayerSnapshot
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramLayerSnapshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Layer ID. |
| <code>snapshot_id</code> | <code>str</code> | Snapshot ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudDiagramLayerSnapshot](doi_t/models/cloud_diagram_layer_snapshot.py), [GetCloudDiagramLayerSnapshotErrorBody](doi_t/errors/get_cloud_diagram_layer_snapshot_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudDiagramLayerSnapshot](doi_t/models/cloud_diagram_layer_snapshot.py)</code> -- OK - Snapshot returned.

**On `Failure`**: `error` is <code>[GetCloudDiagramLayerSnapshotErrorBody](doi_t/errors/get_cloud_diagram_layer_snapshot_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloud_diagram_resource_relationships(id_: str, rid: str, *, direction: DirectionOrStr | None = Direction.BOTH, depth: DepthOrStr | None = Depth.DIRECT, kind: KindOrStr | None = Kind.EDGES, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DiagramRelationshipsResponse, GetCloudDiagramResourceRelationshipsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Walks the diagram graph from the anchor resource and returns related resources.
Edge traversal walks the diagram's link set (same-scheme guard, BFS, cycle-safe);
group traversal walks the group membership set. The result list is capped at 200
relations; `truncated` is `true` when the cap is hit. Read-only: does not mutate
diagram state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.get_cloud_diagram_resource_relationships(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiagramRelationshipsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramResourceRelationshipsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.get_cloud_diagram_resource_relationships(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiagramRelationshipsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramResourceRelationshipsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Diagram (layer) ID. |
| <code>rid</code> | <code>str</code> | Anchor resource ID — must exist as a node, element, or group on the diagram. |
| <code>direction</code> | <code>[DirectionOrStr](doi_t/models/enums/direction.py) \| None</code> | Edge direction relative to the anchor. `both` returns upstream and downstream neighbours. Defaults to `both`.<br>**Default**: <code>Direction.BOTH</code> |
| <code>depth</code> | <code>[DepthOrStr](doi_t/models/enums/depth.py) \| None</code> | `direct` returns one-hop neighbours; `transitive` runs a cycle-safe BFS to the<br>connected component (still capped at 200 relations). Defaults to `direct`.<br>**Default**: <code>Depth.DIRECT</code> |
| <code>kind</code> | <code>[KindOrStr](doi_t/models/enums/kind.py) \| None</code> | `edges` walks the link graph; `group_members` walks group membership (children<br>and parent groups); `both` merges the two and dedupes by id, preserving the<br>smallest observed hop count. Defaults to `edges`.<br>**Default**: <code>Kind.EDGES</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DiagramRelationshipsResponse](doi_t/models/diagram_relationships_response.py), [GetCloudDiagramResourceRelationshipsErrorBody](doi_t/errors/get_cloud_diagram_resource_relationships_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DiagramRelationshipsResponse](doi_t/models/diagram_relationships_response.py)</code> -- OK - Related resources returned.

**On `Failure`**: `error` is <code>[GetCloudDiagramResourceRelationshipsErrorBody](doi_t/errors/get_cloud_diagram_resource_relationships_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloud_diagrams_stats(start: RFC3339DateTime, end: RFC3339DateTime, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CloudDiagramStats], GetCloudDiagramsStatsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all diagrams with activity stats for the given time period.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.get_cloud_diagrams_stats(
    datetime(2026, 4, 1, 0, 0, 0, tzinfo=timezone.utc), datetime(2026, 4, 28, 0, 0, 0, tzinfo=timezone.utc)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramStats]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramsStatsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.get_cloud_diagrams_stats(
    datetime(2026, 4, 1, 0, 0, 0, tzinfo=timezone.utc), datetime(2026, 4, 28, 0, 0, 0, tzinfo=timezone.utc)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramStats]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudDiagramsStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>RFC3339DateTime</code> | Start of the period. |
| <code>end</code> | <code>RFC3339DateTime</code> | End of the period. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[CloudDiagramStats](doi_t/models/cloud_diagram_stats.py)&#93;, [GetCloudDiagramsStatsErrorBody](doi_t/errors/get_cloud_diagrams_stats_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CloudDiagramStats](doi_t/models/cloud_diagram_stats.py)&#93;</code> -- OK - List of diagrams with stats returned.

**On `Failure`**: `error` is <code>[GetCloudDiagramsStatsErrorBody](doi_t/errors/get_cloud_diagrams_stats_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_statussheet_components(id_: str, body: CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict, *, p: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudDiagramStatussheetComponents, GetStatussheetComponentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified components of a diagram layer. Provide at least one component
type with one or more IDs in the request body (for example, `node` or `element`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.get_statussheet_components(
    "some example string", CloudDiagramStatussheetGetRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramStatussheetComponents
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStatussheetComponentsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.get_statussheet_components(
    "some example string", CloudDiagramStatussheetGetRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramStatussheetComponents
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStatussheetComponentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Layer ID. |
| <code>body</code> | <code>[CloudDiagramStatussheetGetRequest](doi_t/models/cloud_diagram_statussheet_get_request.py) \| [CloudDiagramStatussheetGetRequestDict](doi_t/models/cloud_diagram_statussheet_get_request.py)</code> | The request body. |
| <code>p</code> | <code>str \| None</code> | Space-separated projection fields for component documents.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudDiagramStatussheetComponents](doi_t/models/cloud_diagram_statussheet_components.py), [GetStatussheetComponentsErrorBody](doi_t/errors/get_statussheet_components_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudDiagramStatussheetComponents](doi_t/models/cloud_diagram_statussheet_components.py)</code> -- OK - Layer components returned.

**On `Failure`**: `error` is <code>[GetStatussheetComponentsErrorBody](doi_t/errors/get_statussheet_components_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloud_diagram_activity_groups(ss_id: str, *, limit: int | None = None, offset: int | None = None, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CloudDiagramSnapshotActivityGroup], ListCloudDiagramActivityGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns snapshot activity groups for the specified diagram layer,
ordered by timestamp descending. Each group contains a snapshot reference
and the individual activity records that belong to it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.list_cloud_diagram_activity_groups("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramSnapshotActivityGroup]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudDiagramActivityGroupsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.list_cloud_diagram_activity_groups("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramSnapshotActivityGroup]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudDiagramActivityGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ss_id</code> | <code>str</code> | Layer ID. |
| <code>limit</code> | <code>int \| None</code> | Maximum number of groups to return (default 10).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Number of groups to skip (default 0).<br>**Default**: <code>None</code> |
| <code>tags</code> | <code>list&#91;str&#93; \| None</code> | Filter by tags.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[CloudDiagramSnapshotActivityGroup](doi_t/models/cloud_diagram_snapshot_activity_group.py)&#93;, [ListCloudDiagramActivityGroupsErrorBody](doi_t/errors/list_cloud_diagram_activity_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CloudDiagramSnapshotActivityGroup](doi_t/models/cloud_diagram_snapshot_activity_group.py)&#93;</code> -- OK - Activity groups returned.

**On `Failure`**: `error` is <code>[ListCloudDiagramActivityGroupsErrorBody](doi_t/errors/list_cloud_diagram_activity_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloud_diagram_layer_snapshots(id_: str, *, offset: int | None = None, limit: int | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CloudDiagramLayerSnapshot], ListCloudDiagramLayerSnapshotsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of saved snapshots for the specified diagram layer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.list_cloud_diagram_layer_snapshots("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramLayerSnapshot]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudDiagramLayerSnapshotsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.list_cloud_diagram_layer_snapshots("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramLayerSnapshot]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudDiagramLayerSnapshotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Layer ID. |
| <code>offset</code> | <code>int \| None</code> | Number of snapshots to skip (default 0).<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of snapshots to return (default 10).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sort expression (e.g. "-createdAt" for descending).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[CloudDiagramLayerSnapshot](doi_t/models/cloud_diagram_layer_snapshot.py)&#93;, [ListCloudDiagramLayerSnapshotsErrorBody](doi_t/errors/list_cloud_diagram_layer_snapshots_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CloudDiagramLayerSnapshot](doi_t/models/cloud_diagram_layer_snapshot.py)&#93;</code> -- OK - Snapshots returned.

**On `Failure`**: `error` is <code>[ListCloudDiagramLayerSnapshotsErrorBody](doi_t/errors/list_cloud_diagram_layer_snapshots_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloud_diagram_node_activities(ss_id: str, node_id: str, *, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CloudDiagramNodeActivity], ListCloudDiagramNodeActivitiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns individual activity records for the specified component node, ordered by timestamp descending.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.list_cloud_diagram_node_activities(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramNodeActivity]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudDiagramNodeActivitiesErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.list_cloud_diagram_node_activities(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CloudDiagramNodeActivity]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudDiagramNodeActivitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ss_id</code> | <code>str</code> | Layer ID. |
| <code>node_id</code> | <code>str</code> | Node component ID. |
| <code>limit</code> | <code>int \| None</code> | Maximum number of records to return (default 50).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Number of records to skip (default 0).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[CloudDiagramNodeActivity](doi_t/models/cloud_diagram_node_activity.py)&#93;, [ListCloudDiagramNodeActivitiesErrorBody](doi_t/errors/list_cloud_diagram_node_activities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CloudDiagramNodeActivity](doi_t/models/cloud_diagram_node_activity.py)&#93;</code> -- OK - Node activity records returned.

**On `Failure`**: `error` is <code>[ListCloudDiagramNodeActivitiesErrorBody](doi_t/errors/list_cloud_diagram_node_activities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_cloud_diagrams(body: CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudDiagramsSearchResponse, SearchCloudDiagramsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full-text search across diagram layers, components by name, and components
by property values. Returns three result categories: diagram (matching layers), component
(matching components by name), and prop (matching components by property values).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_diagrams.with_raw_response.search_cloud_diagrams(
    CloudDiagramsSearchRequest(query="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCloudDiagramsErrorBody
```

**Async**

```python
result = await async_client.cloud_diagrams.with_raw_response.search_cloud_diagrams(
    CloudDiagramsSearchRequest(query="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudDiagramsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCloudDiagramsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CloudDiagramsSearchRequest](doi_t/models/cloud_diagrams_search_request.py) \| [CloudDiagramsSearchRequestDict](doi_t/models/cloud_diagrams_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudDiagramsSearchResponse](doi_t/models/cloud_diagrams_search_response.py), [SearchCloudDiagramsErrorBody](doi_t/errors/search_cloud_diagrams_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudDiagramsSearchResponse](doi_t/models/cloud_diagrams_search_response.py)</code> -- OK - Search results returned.

**On `Failure`**: `error` is <code>[SearchCloudDiagramsErrorBody](doi_t/errors/search_cloud_diagrams_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CloudIncidents

> Source: [CloudIncidents](doi_t/apis/cloud_incidents.py)

<details>
<summary><code>def get_known_issue(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CoreV1CloudincidentsResponse1, GetKnownIssueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified cloud incident.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_incidents.with_raw_response.get_known_issue("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CoreV1CloudincidentsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetKnownIssueErrorBody
```

**Async**

```python
result = await async_client.cloud_incidents.with_raw_response.get_known_issue("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CoreV1CloudincidentsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetKnownIssueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique id of a cloud incident. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CoreV1CloudincidentsResponse1](doi_t/models/core_v1_cloudincidents_response1.py), [GetKnownIssueErrorBody](doi_t/errors/get_known_issue_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CoreV1CloudincidentsResponse1](doi_t/models/core_v1_cloudincidents_response1.py)</code> -- OK - Cloud incident returned.

**On `Failure`**: `error` is <code>[GetKnownIssueErrorBody](doi_t/errors/get_known_issue_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_known_issues(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CoreV1CloudincidentsResponse, ListKnownIssuesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
Incidents are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_incidents.with_raw_response.list_known_issues()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CoreV1CloudincidentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListKnownIssuesErrorBody
```

**Async**

```python
result = await async_client.cloud_incidents.with_raw_response.list_known_issues()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CoreV1CloudincidentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListKnownIssuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>**Default**: <code>None</code> |
| <code>min_creation_time</code> | <code>str \| None</code> | Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If set, only cloud incidents created after or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>max_creation_time</code> | <code>str \| None</code> | Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If set, only cloud incidents created before or at this<br>timestamp are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CoreV1CloudincidentsResponse](doi_t/models/core_v1_cloudincidents_response.py), [ListKnownIssuesErrorBody](doi_t/errors/list_known_issues_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CoreV1CloudincidentsResponse](doi_t/models/core_v1_cloudincidents_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListKnownIssuesErrorBody](doi_t/errors/list_known_issues_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CloudFlowApi

> Source: [CloudFlowApi](doi_t/apis/cloud_flow_api.py)

<details>
<summary><code>def build_cloud_flow(body: CloudFlowBuildRequest | CloudFlowBuildRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[str], BuildCloudFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new CloudFlow and generates its nodes and connections based on the provided natural language intent. The operation streams incremental build events, including the ID of the newly created flow, as they are produced.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.build_cloud_flow(CloudFlowBuildRequest(question="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BuildCloudFlowErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.build_cloud_flow(
    CloudFlowBuildRequest(question="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncEventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BuildCloudFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CloudFlowBuildRequest](doi_t/models/cloud_flow_build_request.py) \| [CloudFlowBuildRequestDict](doi_t/models/cloud_flow_build_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;EventStream&#91;str&#93;, [BuildCloudFlowErrorBody](doi_t/errors/build_cloud_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;str&#93;</code>, its body not yet read -- OK - Build event stream.

**On `Failure`**: `error` is <code>[BuildCloudFlowErrorBody](doi_t/errors/build_cloud_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 406, 500, 502 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def export_cloudflow_flow(flow_id: str, *, include_variable_values: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowFlowBundle, ExportCloudflowFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serializes the flow — plus every flow it references through subflow nodes — into a
tenant-neutral, credential-free JSON bundle that can be imported into any tenant with
the import operation. Tenant-scoped references (connections, Datastore tables, global
variables) are declared as named requirements and rebound at import time; policy and
Slack-channel references cannot travel and are recorded as unsupported references.
The bundle never contains credentials, tenant identifiers, schedules, or execution state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.export_cloudflow_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowFlowBundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportCloudflowFlowErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.export_cloudflow_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowFlowBundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportCloudflowFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The ID of the flow to export. |
| <code>include_variable_values</code> | <code>bool \| None</code> | When `false`, local and global variable values are stripped from the bundle; names,<br>types, and required-ness always travel. Connection-typed variable values are<br>references, not values, and always travel as requirement tokens.<br>**Default**: <code>True</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowFlowBundle](doi_t/models/cloudflow_flow_bundle.py), [ExportCloudflowFlowErrorBody](doi_t/errors/export_cloudflow_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowFlowBundle](doi_t/models/cloudflow_flow_bundle.py)</code> -- The flow bundle.

**On `Failure`**: `error` is <code>[ExportCloudflowFlowErrorBody](doi_t/errors/export_cloudflow_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 422 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloudflow_flow_run(flow_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowRun, GetCloudflowFlowRunErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a run's status and, for each node, the JSON it consumed and produced. This is how
you find out *why* a run failed, or that it "succeeded" while producing the wrong data.

**`input` is null for most node types, and that is not an error.** Only action nodes — the
AWS, GCP, Azure, Oracle, DoiT and admin operations — record their inputs. Transform, code,
branch, switch, datastore, subflow and trigger nodes record none, so their `input` is
always null. `output` is recorded by every node that finishes, so read a transform's
behaviour from its `output`.

Payloads appear as soon as a node reports a terminal status, so a poll loop can read
results while later nodes are still running.

Any value the node's schema marks sensitive is replaced with a redaction marker;
credentials and connection configuration never appear.

Each `input` and `output` is capped at 64KB. When a payload exceeds that, whole entries
are dropped from the end, `truncated` is true, and `totalBytes` reports the untruncated
size — nothing is silently cut, and what you receive is always valid JSON.

Runs belonging to another tenant, or to a different flow, return `404`. Nodes inside a
fan-out currently report only the last path to finish.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.get_cloudflow_flow_run("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowFlowRunErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.get_cloudflow_flow_run(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowFlowRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The ID of the flow the run belongs to. |
| <code>run_id</code> | <code>str</code> | The run identifier, as returned when the run was started. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowRun](doi_t/models/cloudflow_run.py), [GetCloudflowFlowRunErrorBody](doi_t/errors/get_cloudflow_flow_run_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowRun](doi_t/models/cloudflow_run.py)</code> -- The run and its per-node detail.

**On `Failure`**: `error` is <code>[GetCloudflowFlowRunErrorBody](doi_t/errors/get_cloudflow_flow_run_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 429 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloudflow_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowTemplate, GetCloudflowTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single CloudFlow template by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.get_cloudflow_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowTemplateErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.get_cloudflow_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>template_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowTemplate](doi_t/models/cloudflow_template.py), [GetCloudflowTemplateErrorBody](doi_t/errors/get_cloudflow_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowTemplate](doi_t/models/cloudflow_template.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetCloudflowTemplateErrorBody](doi_t/errors/get_cloudflow_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_cloudflow_flow(idempotency_key: str, body: CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowImportPlan, ImportCloudflowFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates every flow of a previously exported bundle in the authenticated tenant.
Imports are create-only: each call creates new draft flows with new IDs — nothing is
published and no schedule is activated until the target tenant publishes.

Requirements declared by the bundle are resolved through `bindings` (requirement key →
target-tenant resource ID). Unbound connections and Datastore tables leave the
referencing nodes flagged incomplete; unbound global variables are auto-created. Pass
`options.createMissingTables: true` to create missing Datastore tables from the schemas
embedded in the bundle (structure only, never row data).

**Dry-run**: pass `?dryRun=true` to validate without writing. The response is an import
plan: per-requirement resolutions with candidate bindings in the target tenant, the
flows that would be created, and every validation issue at once.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.import_cloudflow_flow(
    "some example string",
    CloudflowImportFlowsRequest(
        bundle=CloudflowFlowBundle(
            root_flow="some example string",
            flows=[
                CloudflowBundleFlow(
                    key="some example string",
                    name="some example string",
                    first_node="some example string",
                    nodes=[CloudflowBundleNode()],
                ),
            ],
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowImportPlan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportCloudflowFlowErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.import_cloudflow_flow(
    "some example string",
    CloudflowImportFlowsRequest(
        bundle=CloudflowFlowBundle(
            root_flow="some example string",
            flows=[
                CloudflowBundleFlow(
                    key="some example string",
                    name="some example string",
                    first_node="some example string",
                    nodes=[CloudflowBundleNode()],
                ),
            ],
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowImportPlan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportCloudflowFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotency_key</code> | <code>str</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. The server retains the key for at least 24 hours. |
| <code>body</code> | <code>[CloudflowImportFlowsRequest](doi_t/models/cloudflow_import_flows_request.py) \| [CloudflowImportFlowsRequestDict](doi_t/models/cloudflow_import_flows_request.py)</code> | The request body. |
| <code>dry_run</code> | <code>bool \| None</code> | If `true`, validates the bundle and resolves its requirements against the tenant<br>without committing changes, returning the import plan.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowImportPlan](doi_t/models/cloudflow_import_plan.py), [ImportCloudflowFlowErrorBody](doi_t/errors/import_cloudflow_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowImportPlan](doi_t/models/cloudflow_import_plan.py)</code> -- Dry-run import plan (no writes performed).

**On `Failure`**: `error` is <code>[ImportCloudflowFlowErrorBody](doi_t/errors/import_cloudflow_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 422 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloudflow_flow_runs(flow_id: str, *, max_results: int | None = 50, page_token: str | None = None, mode: ModeDoiTCloudFlowApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowRunList, ListCloudflowFlowRunsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a flow's runs, newest first. Use `mode` to separate test runs from production
ones — test runs are included by default.

Per-node detail is not included here; fetch a single run to read what each node consumed
and produced.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.list_cloudflow_flow_runs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowFlowRunsErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.list_cloudflow_flow_runs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowFlowRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The ID of the flow whose runs to list. |
| <code>max_results</code> | <code>int \| None</code> | Maximum runs to return.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Continuation token from a previous response.<br>**Default**: <code>None</code> |
| <code>mode</code> | <code>[ModeDoiTCloudFlowApiOrStr](doi_t/models/enums/mode_doi_t_cloud_flow_api.py) \| None</code> | Restrict the listing to one kind of run. Omit for both.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowRunList](doi_t/models/cloudflow_run_list.py), [ListCloudflowFlowRunsErrorBody](doi_t/errors/list_cloudflow_flow_runs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowRunList](doi_t/models/cloudflow_run_list.py)</code> -- A page of runs.

**On `Failure`**: `error` is <code>[ListCloudflowFlowRunsErrorBody](doi_t/errors/list_cloudflow_flow_runs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 429 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloudflow_templates(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the catalogue of available CloudFlow templates (blueprints). Templates are
read-only. To create a flow from a template, use `POST /flows` with a `templateId`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.list_cloudflow_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplateListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowTemplatesErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.list_cloudflow_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplateListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of templates to return (1–500). Defaults to 50.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to start from the beginning.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowTemplateListResponse](doi_t/models/cloudflow_template_list_response.py), [ListCloudflowTemplatesErrorBody](doi_t/errors/list_cloudflow_templates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowTemplateListResponse](doi_t/models/cloudflow_template_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCloudflowTemplatesErrorBody](doi_t/errors/list_cloudflow_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloudflows(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowListResponse, ListCloudflowsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a cursor-paginated list of CloudFlows.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.list_cloudflows()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowsErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.list_cloudflows()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of flows to return (1–500). Defaults to 50.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to start from the beginning.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowListResponse](doi_t/models/cloudflow_list_response.py), [ListCloudflowsErrorBody](doi_t/errors/list_cloudflows_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowListResponse](doi_t/models/cloudflow_list_response.py)</code> -- Paginated list of CloudFlows.

**On `Failure`**: `error` is <code>[ListCloudflowsErrorBody](doi_t/errors/list_cloudflows_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refine_cloud_flow(flow_id: str, body: CloudFlowRefineRequest | CloudFlowRefineRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[str], RefineCloudFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refines the specified CloudFlow by generating and updating nodes and connections based on the provided natural language intent. The operation streams incremental build events as they are produced.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.refine_cloud_flow(
    "some example string", CloudFlowRefineRequest(question="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefineCloudFlowErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.refine_cloud_flow(
    "some example string", CloudFlowRefineRequest(question="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncEventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefineCloudFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CloudFlowRefineRequest](doi_t/models/cloud_flow_refine_request.py) \| [CloudFlowRefineRequestDict](doi_t/models/cloud_flow_refine_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;EventStream&#91;str&#93;, [RefineCloudFlowErrorBody](doi_t/errors/refine_cloud_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;str&#93;</code>, its body not yet read -- OK - Refine event stream.

**On `Failure`**: `error` is <code>[RefineCloudFlowErrorBody](doi_t/errors/refine_cloud_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 406, 500, 502 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_cloudflow_flow(flow_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowRunSummary, StopCloudflowFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops the run currently in progress for the given flow. The run is identified from the
flow alone — no run ID is needed, since a flow can only have one run active at a time.

No `Idempotency-Key` is required. This is a state transition, not a resource creation.

Returns `409` when the flow has no run in progress, which includes a run that reached a
terminal state between this request and the stop attempt.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.stop_cloudflow_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopCloudflowFlowErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.stop_cloudflow_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopCloudflowFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The ID of the flow whose in-progress run should be stopped. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py), [StopCloudflowFlowErrorBody](doi_t/errors/stop_cloudflow_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py)</code> -- The run was stopped. The body is the run as it stands after stopping.

**On `Failure`**: `error` is <code>[StopCloudflowFlowErrorBody](doi_t/errors/stop_cloudflow_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 429 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_run_cloudflow_flow(flow_id: str, idempotency_key: str, *, dry_run: bool | None = None, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowRunSummary, TestRunCloudflowFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike
`actions/trigger`, which requires the flow to be published. Use this to verify a newly
authored or edited flow before publishing it.

Execution is identical to a production run: the same graph, the same bound connections,
the same credentials, and the same approval behaviour. An approval-gated node still parks
the run and its side effect still waits for a real approval — there is no request that
skips one.

The run is recorded as a test, so it does not appear in run history, does not count
towards dashboard statistics, does not become a dashboard widget's data source, and does
not consume a scheduled-run budget. It does hold the flow's concurrency lock, so a `409`
is returned while the flow is already running.

The flow's first node must be a webhook, scheduled, or manual trigger.

Before dispatching, the flow is validated with the same checks publish applies — a draft
has never been through them. A flow that fails returns `422` listing every offending node
at once, so all of them can be fixed in one pass.

Poll the `Location` URL to follow the run and read what each node produced.

Pass `?dryRun=true` to validate the flow without starting a run.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.test_run_cloudflow_flow("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestRunCloudflowFlowErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.test_run_cloudflow_flow(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestRunCloudflowFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The ID of the flow to test-run. |
| <code>idempotency_key</code> | <code>str</code> | Unique key so a retried request cannot start a second run. |
| <code>dry_run</code> | <code>bool \| None</code> | Validate the flow and return the outcome without starting a run.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>Any \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py), [TestRunCloudflowFlowErrorBody](doi_t/errors/test_run_cloudflow_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py)</code> -- Test run accepted. The response is a snapshot taken at dispatch, so `status` is
`pending`; follow the `Location` header to read the run as it progresses.

**On `Failure`**: `error` is <code>[TestRunCloudflowFlowErrorBody](doi_t/errors/test_run_cloudflow_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 422 | <code>[CloudflowTestRunValidation](doi_t/models/cloudflow_test_run_validation.py)</code> |
| 429 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_cloudflow_flow(flow_id: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowRunSummary, TriggerCloudflowFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual
trigger. A draft flow is rejected with `422` — use `actions/test-run` to run one.

No `Idempotency-Key` is required. This is a state transition, not a resource creation.

The response is a snapshot taken at dispatch, so `status` is always `pending` and the
timing fields are not yet populated. Read the run back through
`GET /cloudflow/v1/flows/{flowId}/runs/{runId}` to follow its progress.

A flow holds a concurrency lock while it runs, so triggering one that is already running
returns `409` with the active run embedded in the problem body — no second lookup needed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.trigger_cloudflow_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerCloudflowFlowErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.trigger_cloudflow_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowRunSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerCloudflowFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The ID of the flow to trigger. |
| <code>body</code> | <code>Any \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py), [TriggerCloudflowFlowErrorBody](doi_t/errors/trigger_cloudflow_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py)</code> -- The run was started. The snapshot is taken at dispatch, so `status` is `pending`.

**On `Failure`**: `error` is <code>[TriggerCloudflowFlowErrorBody](doi_t/errors/trigger_cloudflow_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 409 | <code>[CloudflowV1FlowsActionsTrigger409Error1](doi_t/models/cloudflow_v1_flows_actions_trigger409_error1.py)</code> |
| 429 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_cloudflow_webhook(flow_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowV1TriggerResponse, TriggerCloudflowWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers execution of a published CloudFlow whose first node is a webhook trigger.
The request body must be valid JSON and is passed to the flow as webhook payload data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cloud_flow_api.with_raw_response.trigger_cloudflow_webhook("some example string", {"key": "value"})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowV1TriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerCloudflowWebhookErrorBody
```

**Async**

```python
result = await async_client.cloud_flow_api.with_raw_response.trigger_cloudflow_webhook(
    "some example string", {"key": "value"}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowV1TriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerCloudflowWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The unique ID of the published CloudFlow to trigger. |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowV1TriggerResponse](doi_t/models/cloudflow_v1_trigger_response.py), [TriggerCloudflowWebhookErrorBody](doi_t/errors/trigger_cloudflow_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowV1TriggerResponse](doi_t/models/cloudflow_v1_trigger_response.py)</code> -- Accepted - CloudFlow execution started.

**On `Failure`**: `error` is <code>[TriggerCloudflowWebhookErrorBody](doi_t/errors/trigger_cloudflow_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CommitmentManager

> Source: [CommitmentManager](doi_t/apis/commitment_manager.py)

<details>
<summary><code>def get_commitment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommitmentExternal, GetCommitmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a commitment by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.commitment_manager.with_raw_response.get_commitment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommitmentExternal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCommitmentErrorBody
```

**Async**

```python
result = await async_client.commitment_manager.with_raw_response.get_commitment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommitmentExternal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCommitmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Commitment ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CommitmentExternal](doi_t/models/commitment_external.py), [GetCommitmentErrorBody](doi_t/errors/get_commitment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommitmentExternal](doi_t/models/commitment_external.py)</code> -- OK - Commitment returned.

**On `Failure`**: `error` is <code>[GetCommitmentErrorBody](doi_t/errors/get_commitment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_commitments(*, sort_by: SortByDoiTCommitmentManagerApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommitmentExternalList, ListCommitmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of commitments for the customer.
Commitments are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.commitment_manager.with_raw_response.list_commitments(filter_="provider:google-cloud")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommitmentExternalList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommitmentsErrorBody
```

**Async**

```python
result = await async_client.commitment_manager.with_raw_response.list_commitments(filter_="provider:google-cloud")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommitmentExternalList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommitmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort_by</code> | <code>[SortByDoiTCommitmentManagerApiOrStr](doi_t/models/enums/sort_by_doi_t_commitment_manager_api.py) \| None</code> | A field by which the results will be sorted.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Available filter keys: **name**, **provider**<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CommitmentExternalList](doi_t/models/commitment_external_list.py), [ListCommitmentsErrorBody](doi_t/errors/list_commitments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommitmentExternalList](doi_t/models/commitment_external_list.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListCommitmentsErrorBody](doi_t/errors/list_commitments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ComposerInsightsBeta

> Source: [ComposerInsightsBeta](doi_t/apis/composer_insights_beta.py)

<details>
<summary><code>def list_composer_recipe_results(recipe_id: int, *, max_results: int | None = 50, page_token: str | None = None, sort_by: SortBy1OrStr | None = SortBy1.DETECTION_TIME, sort_order: SortOrderOrStr | None = SortOrder.DESC, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ComposerRecipeResultList, ListComposerRecipeResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the results of one Composer recipe: one finding per affected resource, with the resource's account, region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe all return `200` with an empty `items` list and `rowCount: 0`.

By default (`last_scan_only:true`) only results reported by the most recent scan of each recently scanned account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results rarely appear by default; add `last_scan_only:false` to include them and results from earlier scans. `rowCount` can therefore be lower than the recipe's `totalResultsCount`. Results are sorted by `detection_time`, descending, by default. Ties break by `id`.

`filter` is one string of `key:value` clauses: `,` separates alternative values for one key (OR) and `|` separates keys (AND), for example `region:us-east-1,us-west-2|status:active`. Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
- `account_id`: one or more cloud account IDs, matched exactly.
- `region`: one or more cloud regions, matched exactly.
- `issued_resource_name`: one or more names of the affected resource, matched exactly.
- `related_resource_name`: one or more names of related resources (for example an attached IAM policy), each matched as a substring anywhere in the result's related-resource details.
- `status`: exactly one of `active` (not resolved and not snoozed), `snoozed`, `resolved` or `all`. Omitting it is the same as `all`. Combine `resolved` with `last_scan_only:false`; with the default it usually returns nothing.
- `last_scan_only`: exactly one of `true` or `false`. Defaults to `true`, which returns only results reported by each recently scanned account's most recent scan, and so rarely includes resolved results. `false` returns results from every scan and account, including resolved ones.
- `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Returns only results on resources in any of those allocations. An allocation you can't view returns `404`; if access can't be checked, the request returns `503` rather than unfiltered data.

Requests are always served for the customer your API token belongs to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.composer_insights_beta.with_raw_response.list_composer_recipe_results(
    42, max_results=50, filter_="status:active|region:us-east-1,us-west-2"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ComposerRecipeResultList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListComposerRecipeResultsErrorBody
```

**Async**

```python
result = await async_client.composer_insights_beta.with_raw_response.list_composer_recipe_results(
    42, max_results=50, filter_="status:active|region:us-east-1,us-west-2"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ComposerRecipeResultList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListComposerRecipeResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recipe_id</code> | <code>int</code> | ID of the Composer recipe whose results to list. Get recipe IDs from `GET /insights/v2/recipes`. |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside that range returns `400 validation_failed`.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Continuation token from the `pageToken` of the previous response. Omit it on the first request; a response without `pageToken` is the last page.<br><br>The token records the position, the sort and the `allocation` filter IDs. Changing `sortBy`, `sortOrder` or the allocation IDs while paginating returns `400 pagination_token_invalid`. Keep the other `filter` keys and `maxResults` unchanged while paginating. Tokens expire 5 minutes after they are issued; an expired token returns `400 pagination_token_expired`. In both cases, restart from the first page.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortBy1OrStr](doi_t/models/enums/sort_by1.py) \| None</code> | Field to sort results by. Defaults to `detection_time`. Ties break by `id` (ascending), whatever the `sortOrder`.<br>**Default**: <code>SortBy1.DETECTION_TIME</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Sort direction for `sortBy`. Defaults to `desc`.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>filter_</code> | <code>str \| None</code> | Restricts the results returned. One string of `key:value` clauses: `,` separates alternative values for one key (OR) and `\|` separates keys (AND). For example, `region:us-east-1,us-west-2\|status:active` returns active results in either region. Because `,` and `\|` are separators, a value itself can't contain them. Matching is exact unless a key says otherwise. Omit `filter` to list the recipe's results from the most recent scan of each recently scanned account, in every status.<br><br>Keys:<br>- `account_id`: one or more cloud account IDs, matched exactly.<br>- `region`: one or more cloud regions, matched exactly.<br>- `issued_resource_name`: one or more names of the affected resource, matched exactly.<br>- `related_resource_name`: one or more names of resources related to the result (for example, an attached IAM policy). Each value is matched as a substring anywhere in the result's related-resource details, not only against names.<br>- `status`: exactly one of `active` (not resolved and not snoozed), `snoozed`, `resolved` or `all`. Omitting it is the same as `all`. Combine `resolved` with `last_scan_only:false`; with the default it usually returns nothing.<br>- `last_scan_only`: exactly one of `true` or `false`. Defaults to `true`, which returns only results reported by each recently scanned account's most recent scan. A resolved result keeps the ID of the last scan that reported it, so resolved results rarely appear by default. `false` returns results from every scan and account, including resolved ones.<br>- `allocation`: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs from `GET /analytics/v1/allocations`. Matches results on resources in any of those allocations, as resolved by Cloud Analytics; `rowCount` then counts only those results. You must be able to view every listed allocation. Service-account API keys can use public allocations only. If allocation access can't be checked, the request returns `503` with `Retry-After` and never falls back to unfiltered data.<br><br>Errors:<br>- An unknown key returns `400 filter_key_not_supported` when it's the only problem, otherwise `400 validation_failed`.<br>- A `status` outside the allowed list, a non-boolean `last_scan_only`, more than one `status` or `last_scan_only` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer than 256 characters, or containing `/`, whitespace or control characters), a malformed expression or an unsupported operator returns `400 validation_failed`.<br>- An allocation that doesn't exist or that you can't view returns `404 composer-api.allocation_not_found`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ComposerRecipeResultList](doi_t/models/composer_recipe_result_list.py), [ListComposerRecipeResultsErrorBody](doi_t/errors/list_composer_recipe_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ComposerRecipeResultList](doi_t/models/composer_recipe_result_list.py)</code> -- OK - A page of the recipe's results matching the request.

**On `Failure`**: `error` is <code>[ListComposerRecipeResultsErrorBody](doi_t/errors/list_composer_recipe_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_composer_recipes(*, max_results: int | None = 50, page_token: str | None = None, sort_by: SortByDoiTComposerInsightsBetaApiOrStr | None = SortByDoiTComposerInsightsBetaApi.SEVERITY, sort_order: SortOrderOrStr | None = SortOrder.DESC, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ComposerRecipeList, ListComposerRecipesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes are listed with `status: dismissed` and every count set to 0.

Recipes are sorted by `severity`, descending, by default. Ties break by title (case-insensitive), then by `id`.

`filter` is one string of `key:value` clauses: `,` separates alternative values for one key (OR) and `|` separates keys (AND), for example `severity:critical,high|provider:aws,gcp`. Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
- `provider`: one or more of `aws`, `azure`, `azure_ad`, `gcp`, `general`, `google_cloud_source`, `google_workspace`, `k8s`, `oci`, `vmware`.
- `severity`: one or more of `critical`, `high`, `medium`, `low`.
- `pillar`: one or more of `cost`, `operations`, `performance`, `security`, `compliance`. `compliance` matches recipes tagged with at least one compliance standard.
- `has_active_results`: exactly one of `true` or `false`.
- `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Lists only recipes with results on resources in any of those allocations; counts, savings and `rowCount` then cover only those resources. An allocation you can't view returns `404`; if access can't be checked, the request returns `503` rather than unfiltered data.

Requests are always served for the customer your API token belongs to. To list the results of one recipe, use its `id` with `GET /insights/v2/recipes/{recipeId}/results`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.composer_insights_beta.with_raw_response.list_composer_recipes(
    max_results=50, filter_="severity:critical,high|provider:aws,gcp"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ComposerRecipeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListComposerRecipesErrorBody
```

**Async**

```python
result = await async_client.composer_insights_beta.with_raw_response.list_composer_recipes(
    max_results=50, filter_="severity:critical,high|provider:aws,gcp"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ComposerRecipeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListComposerRecipesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside that range returns `400 validation_failed`.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Continuation token from the `pageToken` of the previous response. Omit it on the first request; a response without `pageToken` is the last page.<br><br>The token records the position, the sort and the `allocation` filter IDs. Changing `sortBy`, `sortOrder` or the allocation IDs while paginating returns `400 pagination_token_invalid`. Keep the other `filter` keys and `maxResults` unchanged while paginating. Tokens expire 5 minutes after they are issued; an expired token returns `400 pagination_token_expired`. In both cases, restart from the first page.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByDoiTComposerInsightsBetaApiOrStr](doi_t/models/enums/sort_by_doi_t_composer_insights_beta_api.py) \| None</code> | Field to sort recipes by. Defaults to `severity`. Ties break by title (case-insensitive, ascending), then by `id` (ascending), whatever the `sortOrder`.<br>**Default**: <code>SortByDoiTComposerInsightsBetaApi.SEVERITY</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Sort direction for `sortBy`. Defaults to `desc`.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>filter_</code> | <code>str \| None</code> | Restricts the recipes returned. One string of `key:value` clauses: `,` separates alternative values for one key (OR) and `\|` separates keys (AND). For example, `severity:critical,high\|provider:aws,gcp` returns recipes whose severity is critical or high and whose provider is Amazon Web Services or Google Cloud Platform. Because `,` and `\|` are separators, a value itself can't contain them. Only equality matching is supported. Omit `filter` to list every recipe that has results in your recently scanned accounts, including dismissed recipes.<br><br>Keys:<br>- `provider`: one or more of `aws`, `azure`, `azure_ad`, `gcp`, `general`, `google_cloud_source`, `google_workspace`, `k8s`, `oci`, `vmware`.<br>- `severity`: one or more of `critical`, `high`, `medium`, `low`.<br>- `pillar`: one or more of `cost`, `operations`, `performance`, `security`, `compliance`. Matches recipes tagged with that pillar; `compliance` matches recipes tagged with at least one compliance standard (such as SOC2 or HIPAA).<br>- `has_active_results`: exactly one of `true` or `false`.<br>- `allocation`: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs from `GET /analytics/v1/allocations`. Matches recipes with results on resources in any of those allocations, as resolved by Cloud Analytics; counts, savings and `rowCount` then cover only those resources. You must be able to view every listed allocation. Service-account API keys can use public allocations only. If allocation access can't be checked, the request returns `503` with `Retry-After` and never falls back to unfiltered data.<br><br>Errors:<br>- An unknown key returns `400 filter_key_not_supported` when it's the only problem, otherwise `400 validation_failed`.<br>- A value outside the allowed list, a non-boolean `has_active_results`, more than one `has_active_results` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer than 256 characters, or containing `/`, whitespace or control characters), a malformed expression or an unsupported operator returns `400 validation_failed`.<br>- An allocation that doesn't exist or that you can't view returns `404 composer-api.allocation_not_found`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ComposerRecipeList](doi_t/models/composer_recipe_list.py), [ListComposerRecipesErrorBody](doi_t/errors/list_composer_recipes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ComposerRecipeList](doi_t/models/composer_recipe_list.py)</code> -- OK - A page of recipes matching the request.

**On `Failure`**: `error` is <code>[ListComposerRecipesErrorBody](doi_t/errors/list_composer_recipes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](doi_t/apis/connections.py)

<details>
<summary><code>def create_cloudflow_connection(body: CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowConnection, CreateCloudflowConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new cloud provider connection. Exactly one of `gcpConfig` or `awsConfig` must be supplied.
Returns `400 invalid_connection_config` when both or neither are present.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.create_cloudflow_connection(
    CloudflowV1ConnectionsRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCloudflowConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.create_cloudflow_connection(
    CloudflowV1ConnectionsRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCloudflowConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CloudflowV1ConnectionsRequest](doi_t/models/cloudflow_v1_connections_request.py) \| [CloudflowV1ConnectionsRequestDict](doi_t/models/cloudflow_v1_connections_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowConnection](doi_t/models/cloudflow_connection.py), [CreateCloudflowConnectionErrorBody](doi_t/errors/create_cloudflow_connection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowConnection](doi_t/models/cloudflow_connection.py)</code> -- Created

**On `Failure`**: `error` is <code>[CreateCloudflowConnectionErrorBody](doi_t/errors/create_cloudflow_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_cloudflow_connection(connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCloudflowConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a connection. Returns 409 if the connection is referenced by one or more flows.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.delete_cloudflow_connection("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCloudflowConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.delete_cloudflow_connection("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCloudflowConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>connection_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteCloudflowConnectionErrorBody](doi_t/errors/delete_cloudflow_connection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCloudflowConnectionErrorBody](doi_t/errors/delete_cloudflow_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 409 | <code>[CloudflowV1Connections409Error1](doi_t/models/cloudflow_v1_connections409_error1.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cloudflow_connection(connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowConnection, GetCloudflowConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single connection by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.get_cloudflow_connection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.get_cloudflow_connection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>connection_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowConnection](doi_t/models/cloudflow_connection.py), [GetCloudflowConnectionErrorBody](doi_t/errors/get_cloudflow_connection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowConnection](doi_t/models/cloudflow_connection.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetCloudflowConnectionErrorBody](doi_t/errors/get_cloudflow_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloudflow_connections(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowConnectionListResponse, ListCloudflowConnectionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.list_cloudflow_connections()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnectionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowConnectionsErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.list_cloudflow_connections()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnectionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of connections to return (1–100). Defaults to 50.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Pagination cursor returned by a previous call.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowConnectionListResponse](doi_t/models/cloudflow_connection_list_response.py), [ListCloudflowConnectionsErrorBody](doi_t/errors/list_cloudflow_connections_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowConnectionListResponse](doi_t/models/cloudflow_connection_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCloudflowConnectionsErrorBody](doi_t/errors/list_cloudflow_connections_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_cloudflow_connection(connection_id: str, body: CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowConnection, UpdateCloudflowConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a connection. All fields are optional.
At most one of `gcpConfig` or `awsConfig` may be set per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.update_cloudflow_connection(
    "some example string", CloudflowV1ConnectionsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCloudflowConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.update_cloudflow_connection(
    "some example string", CloudflowV1ConnectionsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCloudflowConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>connection_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CloudflowV1ConnectionsRequest1](doi_t/models/cloudflow_v1_connections_request1.py) \| [CloudflowV1ConnectionsRequest1Dict](doi_t/models/cloudflow_v1_connections_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowConnection](doi_t/models/cloudflow_connection.py), [UpdateCloudflowConnectionErrorBody](doi_t/errors/update_cloudflow_connection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowConnection](doi_t/models/cloudflow_connection.py)</code> -- OK

**On `Failure`**: `error` is <code>[UpdateCloudflowConnectionErrorBody](doi_t/errors/update_cloudflow_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContractTemplates

> Source: [ContractTemplates](doi_t/apis/contract_templates.py)

<details>
<summary><code>def archive_contract_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContractTemplateResponse, ArchiveContractTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token). Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contract_templates.with_raw_response.archive_contract_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveContractTemplateErrorBody
```

**Async**

```python
result = await async_client.contract_templates.with_raw_response.archive_contract_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveContractTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>template_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ContractTemplateResponse](doi_t/models/contract_template_response.py), [ArchiveContractTemplateErrorBody](doi_t/errors/archive_contract_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- OK - Contract template archived.

**On `Failure`**: `error` is <code>[ArchiveContractTemplateErrorBody](doi_t/errors/archive_contract_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def assign_contract_template(template_id: str, body: AssignContractTemplateInput | AssignContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AssignContractTemplateResponse, AssignContractTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers, creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The template must not be archived, and the current date must fall within its eligibility window. Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contract_templates.with_raw_response.assign_contract_template(
    "some example string", AssignContractTemplateInput(customer_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssignContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignContractTemplateErrorBody
```

**Async**

```python
result = await async_client.contract_templates.with_raw_response.assign_contract_template(
    "some example string", AssignContractTemplateInput(customer_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssignContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignContractTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>template_id</code> | <code>str</code> | Identifier of the contract template to apply. |
| <code>body</code> | <code>[AssignContractTemplateInput](doi_t/models/assign_contract_template_input.py) \| [AssignContractTemplateInputDict](doi_t/models/assign_contract_template_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AssignContractTemplateResponse](doi_t/models/assign_contract_template_response.py), [AssignContractTemplateErrorBody](doi_t/errors/assign_contract_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AssignContractTemplateResponse](doi_t/models/assign_contract_template_response.py)</code> -- Created - Draft contracts created for the specified customers.

**On `Failure`**: `error` is <code>[AssignContractTemplateErrorBody](doi_t/errors/assign_contract_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_contract_template(body: ContractTemplateInput | ContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContractTemplateResponse, CreateContractTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a contract template for the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contract_templates.with_raw_response.create_contract_template(
    ContractTemplateInput(
        name="some example string",
        platform="some example string",
        eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContractTemplateErrorBody
```

**Async**

```python
result = await async_client.contract_templates.with_raw_response.create_contract_template(
    ContractTemplateInput(
        name="some example string",
        platform="some example string",
        eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContractTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContractTemplateInput](doi_t/models/contract_template_input.py) \| [ContractTemplateInputDict](doi_t/models/contract_template_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ContractTemplateResponse](doi_t/models/contract_template_response.py), [CreateContractTemplateErrorBody](doi_t/errors/create_contract_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- Created - Contract template created.

**On `Failure`**: `error` is <code>[CreateContractTemplateErrorBody](doi_t/errors/create_contract_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contract_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContractTemplateResponse, GetContractTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contract_templates.with_raw_response.get_contract_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContractTemplateErrorBody
```

**Async**

```python
result = await async_client.contract_templates.with_raw_response.get_contract_template("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContractTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>template_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ContractTemplateResponse](doi_t/models/contract_template_response.py), [GetContractTemplateErrorBody](doi_t/errors/get_contract_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- OK - Contract template returned.

**On `Failure`**: `error` is <code>[GetContractTemplateErrorBody](doi_t/errors/get_contract_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contract_templates(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ContractTemplateResponse], ListContractTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists contract templates owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contract_templates.with_raw_response.list_contract_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ContractTemplateResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContractTemplatesErrorBody
```

**Async**

```python
result = await async_client.contract_templates.with_raw_response.list_contract_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ContractTemplateResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContractTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[ContractTemplateResponse](doi_t/models/contract_template_response.py)&#93;, [ListContractTemplatesErrorBody](doi_t/errors/list_contract_templates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ContractTemplateResponse](doi_t/models/contract_template_response.py)&#93;</code> -- OK - Contract templates returned.

**On `Failure`**: `error` is <code>[ListContractTemplatesErrorBody](doi_t/errors/list_contract_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contract_template(template_id: str, body: ContractTemplateInput | ContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContractTemplateResponse, UpdateContractTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contract_templates.with_raw_response.update_contract_template(
    "some example string",
    ContractTemplateInput(
        name="some example string",
        platform="some example string",
        eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContractTemplateErrorBody
```

**Async**

```python
result = await async_client.contract_templates.with_raw_response.update_contract_template(
    "some example string",
    ContractTemplateInput(
        name="some example string",
        platform="some example string",
        eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContractTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>template_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ContractTemplateInput](doi_t/models/contract_template_input.py) \| [ContractTemplateInputDict](doi_t/models/contract_template_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ContractTemplateResponse](doi_t/models/contract_template_response.py), [UpdateContractTemplateErrorBody](doi_t/errors/update_contract_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- OK - Contract template updated.

**On `Failure`**: `error` is <code>[UpdateContractTemplateErrorBody](doi_t/errors/update_contract_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Contracts

> Source: [Contracts](doi_t/apis/contracts.py)

<details>
<summary><code>def activate_contract(customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContractLifecycleResponse, ActivateContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same system state as activating via the Console.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contracts.with_raw_response.activate_contract("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractLifecycleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateContractErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.activate_contract("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractLifecycleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateContractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ContractLifecycleResponse](doi_t/models/contract_lifecycle_response.py), [ActivateContractErrorBody](doi_t/errors/activate_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContractLifecycleResponse](doi_t/models/contract_lifecycle_response.py)</code> -- OK - Contract activated or scheduled.

**On `Failure`**: `error` is <code>[ActivateContractErrorBody](doi_t/errors/activate_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| 409 | <code>[RawError](doi_t/core/results.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_contract(customer_id: str, contract_id: str, *, body: CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContractLifecycleResponse, CancelContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contracts.with_raw_response.cancel_contract("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractLifecycleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelContractErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.cancel_contract("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContractLifecycleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelContractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CustomersContractsCancelRequest](doi_t/models/customers_contracts_cancel_request.py) \| [CustomersContractsCancelRequestDict](doi_t/models/customers_contracts_cancel_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ContractLifecycleResponse](doi_t/models/contract_lifecycle_response.py), [CancelContractErrorBody](doi_t/errors/cancel_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContractLifecycleResponse](doi_t/models/contract_lifecycle_response.py)</code> -- OK - Contract cancelled.

**On `Failure`**: `error` is <code>[CancelContractErrorBody](doi_t/errors/cancel_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_contract(customer_id: str, body: MtsContractCreateInput | MtsContractCreateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateContractResponse, CreateContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API tokens must include the matching permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contracts.with_raw_response.create_contract(
    "some example string",
    MtsContractCreateInput(
        name="some example string",
        start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        renewal_policy=RenewalPolicy1.AUTO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContractErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.create_contract(
    "some example string",
    MtsContractCreateInput(
        name="some example string",
        start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        renewal_policy=RenewalPolicy1.AUTO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | The customer (tenant) the contract is created for. |
| <code>body</code> | <code>[MtsContractCreateInput](doi_t/models/mts_contract_create_input.py) \| [MtsContractCreateInputDict](doi_t/models/mts_contract_create_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CreateContractResponse](doi_t/models/create_contract_response.py), [CreateContractErrorBody](doi_t/errors/create_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateContractResponse](doi_t/models/create_contract_response.py)</code> -- Created - The contract draft was created.

**On `Failure`**: `error` is <code>[CreateContractErrorBody](doi_t/errors/create_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contract(customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MtsContractDetailResponse, GetContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified contract.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contracts.with_raw_response.get_contract("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MtsContractDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContractErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.get_contract("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MtsContractDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[MtsContractDetailResponse](doi_t/models/mts_contract_detail_response.py), [GetContractErrorBody](doi_t/errors/get_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MtsContractDetailResponse](doi_t/models/mts_contract_detail_response.py)</code> -- OK - Contract returned.

**On `Failure`**: `error` is <code>[GetContractErrorBody](doi_t/errors/get_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contracts(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[MtsContractResponse], ListContractsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable role (without contractsReadOnly). User API tokens must include the matching permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contracts.with_raw_response.list_contracts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[MtsContractResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContractsErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.list_contracts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[MtsContractResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContractsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | The customer (tenant) whose contracts are requested. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[MtsContractResponse](doi_t/models/mts_contract_response.py)&#93;, [ListContractsErrorBody](doi_t/errors/list_contracts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[MtsContractResponse](doi_t/models/mts_contract_response.py)&#93;</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListContractsErrorBody](doi_t/errors/list_contracts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contract(customer_id: str, contract_id: str, body: MtsContractInput | MtsContractInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateContractResponse, UpdateContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contracts.with_raw_response.update_contract(
    "some example string",
    "some example string",
    MtsContractInput(
        name="some example string",
        start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        renewal_policy=RenewalPolicy1.AUTO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContractErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.update_contract(
    "some example string",
    "some example string",
    MtsContractInput(
        name="some example string",
        start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        renewal_policy=RenewalPolicy1.AUTO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[MtsContractInput](doi_t/models/mts_contract_input.py) \| [MtsContractInputDict](doi_t/models/mts_contract_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CreateContractResponse](doi_t/models/create_contract_response.py), [UpdateContractErrorBody](doi_t/errors/update_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateContractResponse](doi_t/models/create_contract_response.py)</code> -- OK - New contract version created.

**On `Failure`**: `error` is <code>[UpdateContractErrorBody](doi_t/errors/update_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerGroups

> Source: [CustomerGroups](doi_t/apis/customer_groups.py)

<details>
<summary><code>def assign_customer_group_user(customer_group_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AssignCustomerGroupUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.assign_customer_group_user(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignCustomerGroupUserErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.assign_customer_group_user(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignCustomerGroupUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>user_id</code> | <code>str</code> | User ID to assign to or unassign from the customer group. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [AssignCustomerGroupUserErrorBody](doi_t/errors/assign_customer_group_user_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AssignCustomerGroupUserErrorBody](doi_t/errors/assign_customer_group_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def assign_customer_group_user_group(customer_group_id: str, user_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AssignCustomerGroupUserGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership changes in the user group apply without reassigning it. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.assign_customer_group_user_group(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignCustomerGroupUserGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.assign_customer_group_user_group(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignCustomerGroupUserGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>user_group_id</code> | <code>str</code> | Stable ID of a user group owned by the authenticated tenant. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [AssignCustomerGroupUserGroupErrorBody](doi_t/errors/assign_customer_group_user_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AssignCustomerGroupUserGroupErrorBody](doi_t/errors/assign_customer_group_user_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer_group(body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroup, CreateCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.create_customer_group(
    CreateCustomerGroupRequest(name="some example string", member_customer_ids=["some example string"]),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.create_customer_group(
    CreateCustomerGroupRequest(name="some example string", member_customer_ids=["some example string"]),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCustomerGroupRequest](doi_t/models/create_customer_group_request.py) \| [CreateCustomerGroupRequestDict](doi_t/models/create_customer_group_request.py)</code> | The request body. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomerGroup](doi_t/models/customer_group.py), [CreateCustomerGroupErrorBody](doi_t/errors/create_customer_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroup](doi_t/models/customer_group.py)</code> -- Created

**On `Failure`**: `error` is <code>[CreateCustomerGroupErrorBody](doi_t/errors/create_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_group(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot be deleted. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.delete_customer_group(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.delete_customer_group(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteCustomerGroupErrorBody](doi_t/errors/delete_customer_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCustomerGroupErrorBody](doi_t/errors/delete_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_group(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroup, GetCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.get_customer_group(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.get_customer_group(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomerGroup](doi_t/models/customer_group.py), [GetCustomerGroupErrorBody](doi_t/errors/get_customer_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroup](doi_t/models/customer_group.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetCustomerGroupErrorBody](doi_t/errors/get_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_group_user_groups(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupUserGroupsResponse, ListCustomerGroupUserGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group ID. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.list_customer_group_user_groups(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupUserGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupUserGroupsErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.list_customer_group_user_groups(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupUserGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupUserGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomerGroupUserGroupsResponse](doi_t/models/customer_group_user_groups_response.py), [ListCustomerGroupUserGroupsErrorBody](doi_t/errors/list_customer_group_user_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupUserGroupsResponse](doi_t/models/customer_group_user_groups_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCustomerGroupUserGroupsErrorBody](doi_t/errors/list_customer_group_user_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_group_users(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupUsersResponse, ListCustomerGroupUsersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.list_customer_group_users(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupUsersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupUsersErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.list_customer_group_users(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupUsersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomerGroupUsersResponse](doi_t/models/customer_group_users_response.py), [ListCustomerGroupUsersErrorBody](doi_t/errors/list_customer_group_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupUsersResponse](doi_t/models/customer_group_users_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCustomerGroupUsersErrorBody](doi_t/errors/list_customer_group_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_groups(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupsResponse, ListCustomerGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.list_customer_groups(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupsErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.list_customer_groups(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomerGroupsResponse](doi_t/models/customer_groups_response.py), [ListCustomerGroupsErrorBody](doi_t/errors/list_customer_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupsResponse](doi_t/models/customer_groups_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCustomerGroupsErrorBody](doi_t/errors/list_customer_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unassign_customer_group_user(customer_group_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UnassignCustomerGroupUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.unassign_customer_group_user(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnassignCustomerGroupUserErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.unassign_customer_group_user(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnassignCustomerGroupUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>user_id</code> | <code>str</code> | User ID to assign to or unassign from the customer group. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [UnassignCustomerGroupUserErrorBody](doi_t/errors/unassign_customer_group_user_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UnassignCustomerGroupUserErrorBody](doi_t/errors/unassign_customer_group_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unassign_customer_group_user_group(customer_group_id: str, user_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UnassignCustomerGroupUserGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.unassign_customer_group_user_group(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnassignCustomerGroupUserGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.unassign_customer_group_user_group(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnassignCustomerGroupUserGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>user_group_id</code> | <code>str</code> | Stable ID of a user group owned by the authenticated tenant. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [UnassignCustomerGroupUserGroupErrorBody](doi_t/errors/unassign_customer_group_user_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UnassignCustomerGroupUserGroupErrorBody](doi_t/errors/unassign_customer_group_user_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_group(customer_group_id: str, body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroup, UpdateCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, customer membership, or both for a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.update_customer_group(
    "some example string", UpdateCustomerGroupRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.update_customer_group(
    "some example string", UpdateCustomerGroupRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_group_id</code> | <code>str</code> | Stable service-generated customer-group ID. |
| <code>body</code> | <code>[UpdateCustomerGroupRequest](doi_t/models/update_customer_group_request.py) \| [UpdateCustomerGroupRequestDict](doi_t/models/update_customer_group_request.py)</code> | The request body. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomerGroup](doi_t/models/customer_group.py), [UpdateCustomerGroupErrorBody](doi_t/errors/update_customer_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroup](doi_t/models/customer_group.py)</code> -- OK

**On `Failure`**: `error` is <code>[UpdateCustomerGroupErrorBody](doi_t/errors/update_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](doi_t/apis/customers.py)

<details>
<summary><code>def get_customer(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, GetCustomerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the customer, including its general settings and contact info, scoped to `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token scoped to a different customer gets `403`, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access (`platform:externalApi`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.get_customer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_customer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Customer](doi_t/models/customer.py), [GetCustomerErrorBody](doi_t/errors/get_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](doi_t/models/customer.py)</code> -- OK - Customer returned.

**On `Failure`**: `error` is <code>[GetCustomerErrorBody](doi_t/errors/get_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer(customer_id: str, body: CustomerUpdate | CustomerUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateCustomerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates the general settings and contact info of the customer identified by `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token scoped to a different customer gets `403`, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access (`platform:externalApi`); updating `allowedInviteDomains` additionally requires the `UsersManager` permission.

The request body must use `application/merge-patch+json` (RFC 7396): an omitted field leaves the current value unchanged, and an explicit `null` also leaves it unchanged, except for `urlSlug`, where an explicit empty string removes the customer's active URL slug rather than leaving it unchanged.

Fields are nested exactly as `getCustomer` returns them - `currency` and `allowedInviteDomains` under `settings`, `emails` under `contact` - so every value is read and written at the same path. `settings.currency` accepts only the codes listed in the schema and cannot be cleared; `allowedInviteDomains` and `contact.emails` are cleared with an empty array.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.update_customer("some example string", CustomerUpdate())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.update_customer("some example string", CustomerUpdate())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>body</code> | <code>[CustomerUpdate](doi_t/models/customer_update.py) \| [CustomerUpdateDict](doi_t/models/customer_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [UpdateCustomerErrorBody](doi_t/errors/update_customer_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateCustomerErrorBody](doi_t/errors/update_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 415, 422, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataHub

> Source: [DataHub](doi_t/apis/data_hub.py)

<details>
<summary><code>def create_datahub_dataset(body: DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1DatasetsResponse1, CreateDatahubDatasetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name. Creating a dataset allows you to define metadata such as name and description before ingesting events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.create_datahub_dataset(DatahubV1DatasetsRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDatahubDatasetErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.create_datahub_dataset(
    DatahubV1DatasetsRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDatahubDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DatahubV1DatasetsRequest](doi_t/models/datahub_v1_datasets_request.py) \| [DatahubV1DatasetsRequestDict](doi_t/models/datahub_v1_datasets_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1DatasetsResponse1](doi_t/models/datahub_v1_datasets_response1.py), [CreateDatahubDatasetErrorBody](doi_t/errors/create_datahub_dataset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1DatasetsResponse1](doi_t/models/datahub_v1_datasets_response1.py)</code> -- Created - Dataset created successfully.

**On `Failure`**: `error` is <code>[CreateDatahubDatasetErrorBody](doi_t/errors/create_datahub_dataset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datahub_events(body: DatahubV1EventsRequest | DatahubV1EventsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1EventsResponse, DatahubEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a batch of events to DataHub.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.datahub_events(DatahubV1EventsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1EventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatahubEventsErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.datahub_events(DatahubV1EventsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1EventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatahubEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DatahubV1EventsRequest](doi_t/models/datahub_v1_events_request.py) \| [DatahubV1EventsRequestDict](doi_t/models/datahub_v1_events_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1EventsResponse](doi_t/models/datahub_v1_events_response.py), [DatahubEventsErrorBody](doi_t/errors/datahub_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1EventsResponse](doi_t/models/datahub_v1_events_response.py)</code> -- OK - Ingestion succeeded.

**On `Failure`**: `error` is <code>[DatahubEventsErrorBody](doi_t/errors/datahub_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datahub_events_csv_file(*, provider: str | None = None, file: FileInput | None = None, schema_template: str | None = None, period_start: Date | None = None, period_end: Date | None = None, replace: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1CsvUploadResponse, DatahubEventsCsvFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format. It may take up to 15 minutes for the data to become available in the DoiT console.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.datahub_events_csv_file(
    provider="Datadog",
    schema_template="anthropic-spend-report@1",
    period_start=date(2026, 9, 10),
    period_end=date(2026, 9, 10),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1CsvUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatahubEventsCsvFileErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.datahub_events_csv_file(
    provider="Datadog",
    schema_template="anthropic-spend-report@1",
    period_start=date(2026, 9, 10),
    period_end=date(2026, 9, 10),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1CsvUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatahubEventsCsvFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>str \| None</code> | The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), space, dash (-).<br>**Default**: <code>None</code> |
| <code>file</code> | <code>FileInput \| None</code> | The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum file size is 30 MB.<br>**Default**: <code>None</code> |
| <code>schema_template</code> | <code>str \| None</code> | Versioned schema template of the file. Defaults to the dataset's template (`default@1` for datasets created without one). Provider-native templates such as `anthropic-spend-report@1` and `codex-usage-report@1` validate the vendor's own columns and normalize them into DataHub events. Must match the template stored on the dataset.<br>**Default**: <code>None</code> |
| <code>period_start</code> | <code>Date \| None</code> | Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose filename does not carry the period; when both are present they must agree.<br>**Default**: <code>None</code> |
| <code>period_end</code> | <code>Date \| None</code> | Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day.<br>**Default**: <code>None</code> |
| <code>replace</code> | <code>bool \| None</code> | Template uploads only. When `true`, active batches whose report period overlaps this upload are soft-deleted before the new file is ingested, and their ids are returned in `replacedBatches`. Refused with `409` when an overlapping batch extends outside the requested period (so a one-day replacement can never remove a wider upload) or was ingested less than 90 minutes ago (`Retry-After` header set). Without `replace`, any overlap is rejected with `409`.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1CsvUploadResponse](doi_t/models/datahub_v1_csv_upload_response.py), [DatahubEventsCsvFileErrorBody](doi_t/errors/datahub_events_csv_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1CsvUploadResponse](doi_t/models/datahub_v1_csv_upload_response.py)</code> -- OK - Ingestion succeeded.

**On `Failure`**: `error` is <code>[DatahubEventsCsvFileErrorBody](doi_t/errors/datahub_events_csv_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datahub_import_provider_records(body: DatahubV1ImportRequest | DatahubV1ImportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1ImportResponse, DatahubImportProviderRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the template's CSV (currently `anthropic-spend-report@1` only) and are validated, normalized and booked on `periodEnd` exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the DoiT console.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.datahub_import_provider_records(
    DatahubV1ImportRequest(
        provider="some example string",
        schema_template="some example string",
        period_start=date(2024, 1, 15),
        period_end=date(2024, 1, 15),
        records=[{}],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatahubImportProviderRecordsErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.datahub_import_provider_records(
    DatahubV1ImportRequest(
        provider="some example string",
        schema_template="some example string",
        period_start=date(2024, 1, 15),
        period_end=date(2024, 1, 15),
        records=[{}],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatahubImportProviderRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DatahubV1ImportRequest](doi_t/models/datahub_v1_import_request.py) \| [DatahubV1ImportRequestDict](doi_t/models/datahub_v1_import_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1ImportResponse](doi_t/models/datahub_v1_import_response.py), [DatahubImportProviderRecordsErrorBody](doi_t/errors/datahub_import_provider_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1ImportResponse](doi_t/models/datahub_v1_import_response.py)</code> -- OK - Ingestion succeeded.

**On `Failure`**: `error` is <code>[DatahubImportProviderRecordsErrorBody](doi_t/errors/datahub_import_provider_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_datahub_dataset(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific DataHub dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.delete_datahub_dataset("My Custom Dataset")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDatahubDatasetErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.delete_datahub_dataset("My Custom Dataset")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDatahubDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the dataset to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1DatasetsResponse2](doi_t/models/datahub_v1_datasets_response2.py), [DeleteDatahubDatasetErrorBody](doi_t/errors/delete_datahub_dataset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1DatasetsResponse2](doi_t/models/datahub_v1_datasets_response2.py)</code> -- OK - Dataset deleted successfully.

**On `Failure`**: `error` is <code>[DeleteDatahubDatasetErrorBody](doi_t/errors/delete_datahub_dataset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_datahub_datasets(body: DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more DataHub datasets and all their associated data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.delete_datahub_datasets(
    DatahubV1DatasetsRequest1(datasets=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDatahubDatasetsErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.delete_datahub_datasets(
    DatahubV1DatasetsRequest1(datasets=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDatahubDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DatahubV1DatasetsRequest1](doi_t/models/datahub_v1_datasets_request1.py) \| [DatahubV1DatasetsRequest1Dict](doi_t/models/datahub_v1_datasets_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1DatasetsResponse2](doi_t/models/datahub_v1_datasets_response2.py), [DeleteDatahubDatasetsErrorBody](doi_t/errors/delete_datahub_datasets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1DatasetsResponse2](doi_t/models/datahub_v1_datasets_response2.py)</code> -- OK - Datasets deleted successfully.

**On `Failure`**: `error` is <code>[DeleteDatahubDatasetsErrorBody](doi_t/errors/delete_datahub_datasets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_datahub_events_by_filter(body: DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1EventsDeleteResponse, DeleteDatahubEventsByFilterErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specific events using filters. Note that the two filters, `eventIds` and `time ranges`, are mutually exclusive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.delete_datahub_events_by_filter(
    DatahubV1EventsDeleteRequest(dataset="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1EventsDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDatahubEventsByFilterErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.delete_datahub_events_by_filter(
    DatahubV1EventsDeleteRequest(dataset="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1EventsDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDatahubEventsByFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DatahubV1EventsDeleteRequest](doi_t/models/datahub_v1_events_delete_request.py) \| [DatahubV1EventsDeleteRequestDict](doi_t/models/datahub_v1_events_delete_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1EventsDeleteResponse](doi_t/models/datahub_v1_events_delete_response.py), [DeleteDatahubEventsByFilterErrorBody](doi_t/errors/delete_datahub_events_by_filter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1EventsDeleteResponse](doi_t/models/datahub_v1_events_delete_response.py)</code> -- OK - Events deleted.

**On `Failure`**: `error` is <code>[DeleteDatahubEventsByFilterErrorBody](doi_t/errors/delete_datahub_events_by_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def export_datahub_dataset_records(name: str, start_time: RFC3339DateTime, end_time: RFC3339DateTime, *, format_: FormatOrStr | None = Format.CSV, max_results: int | None = 10000, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, ExportDatahubDatasetRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in the same shape as the `/datahub/v1/events` payload.

A time window is required: `startTime` is inclusive, `endTime` is exclusive, and the window must not exceed 366 days. Rows are ordered by their event time and event id, and pages never overlap: read the `X-Next-Page-Token` response header and pass it back as `pageToken` until the header is absent. `X-Row-Count` carries the number of rows in the page. Only live rows are returned; rows deleted through the console or the delete endpoints are excluded.

Every row starts with five provenance columns (`event_id`, `batch`, `source`, `export_time`, `updated_by`) followed by the dataset's business columns in the CSV ingest vocabulary (`usage_date`, `fixed.`, `label.`, `project_label.`, `system_label.`, `metric.`). The business columns are computed from the rows of each page, so consecutive pages can have different label and metric columns; union the headers when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and can only be exported as CSV.

To re-import an export into another dataset, drop the `batch`, `source`, `export_time` and `updated_by` columns, and either drop `event_id` or rename it to `id`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.export_datahub_dataset_records(
    "My Custom Dataset",
    datetime(2026, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
    datetime(2026, 2, 1, 0, 0, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportDatahubDatasetRecordsErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.export_datahub_dataset_records(
    "My Custom Dataset",
    datetime(2026, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
    datetime(2026, 2, 1, 0, 0, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportDatahubDatasetRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the dataset to export. |
| <code>start_time</code> | <code>RFC3339DateTime</code> | Inclusive lower bound on the event time, RFC3339. |
| <code>end_time</code> | <code>RFC3339DateTime</code> | Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time. |
| <code>format_</code> | <code>[FormatOrStr](doi_t/models/enums/format.py) \| None</code> | Output format.<br>**Default**: <code>Format.CSV</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of rows in the page.<br>**Default**: <code>10000</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;FileResponse, [ExportDatahubDatasetRecordsErrorBody](doi_t/errors/export_datahub_dataset_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- OK - One page of records. The body is streamed.

**On `Failure`**: `error` is <code>[ExportDatahubDatasetRecordsErrorBody](doi_t/errors/export_datahub_dataset_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_datahub_dataset(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1DatasetsResponse4, GetDatahubDatasetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific DataHub dataset by name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.get_datahub_dataset("My Custom Dataset")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse4
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDatahubDatasetErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.get_datahub_dataset("My Custom Dataset")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse4
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDatahubDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the dataset to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1DatasetsResponse4](doi_t/models/datahub_v1_datasets_response4.py), [GetDatahubDatasetErrorBody](doi_t/errors/get_datahub_dataset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1DatasetsResponse4](doi_t/models/datahub_v1_datasets_response4.py)</code> -- OK - Dataset returned.

**On `Failure`**: `error` is <code>[GetDatahubDatasetErrorBody](doi_t/errors/get_datahub_dataset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_datahub_datasets(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1DatasetsResponse, ListDatahubDatasetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DataHub datasets for the customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.list_datahub_datasets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDatahubDatasetsErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.list_datahub_datasets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDatahubDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1DatasetsResponse](doi_t/models/datahub_v1_datasets_response.py), [ListDatahubDatasetsErrorBody](doi_t/errors/list_datahub_datasets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1DatasetsResponse](doi_t/models/datahub_v1_datasets_response.py)</code> -- OK - List of datasets returned successfully.

**On `Failure`**: `error` is <code>[ListDatahubDatasetsErrorBody](doi_t/errors/list_datahub_datasets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_datahub_dataset(name: str, body: DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatahubV1DatasetsResponse1, UpdateDatahubDatasetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing DataHub dataset's metadata. The `description`, `displayName` and `logoName` fields can be updated.
Only the fields present in the request body are changed; an omitted field keeps its stored value, and an empty string clears it.
The dataset `name` is immutable and serves as the resource identifier and the ingest `provider` value. To change how a dataset is displayed in the console and in report results, set `displayName`; saved reports, budgets, alerts and filters keep working because they reference `name`.
If `name` is included in the request body, it must match the dataset name in the URL path. A mismatched name will be rejected with a 400 error.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_hub.with_raw_response.update_datahub_dataset("My Custom Dataset", DatahubV1DatasetsRequest2())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDatahubDatasetErrorBody
```

**Async**

```python
result = await async_client.data_hub.with_raw_response.update_datahub_dataset(
    "My Custom Dataset", DatahubV1DatasetsRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatahubV1DatasetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDatahubDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the dataset to update (immutable, used for identification only). |
| <code>body</code> | <code>[DatahubV1DatasetsRequest2](doi_t/models/datahub_v1_datasets_request2.py) \| [DatahubV1DatasetsRequest2Dict](doi_t/models/datahub_v1_datasets_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DatahubV1DatasetsResponse1](doi_t/models/datahub_v1_datasets_response1.py), [UpdateDatahubDatasetErrorBody](doi_t/errors/update_datahub_dataset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatahubV1DatasetsResponse1](doi_t/models/datahub_v1_datasets_response1.py)</code> -- OK - Dataset updated successfully.

**On `Failure`**: `error` is <code>[UpdateDatahubDatasetErrorBody](doi_t/errors/update_datahub_dataset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Dimensions

> Source: [Dimensions](doi_t/apis/dimensions.py)

<details>
<summary><code>def get_dimensions(type_: DimensionsTypesOrStr, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DimensionsExternalApiGetResponse, GetDimensionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a dimension by type and key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.dimensions.with_raw_response.get_dimensions(DimensionsTypes.FIXED, "service_description")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DimensionsExternalApiGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDimensionsErrorBody
```

**Async**

```python
result = await async_client.dimensions.with_raw_response.get_dimensions(DimensionsTypes.FIXED, "service_description")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DimensionsExternalApiGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDimensionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[DimensionsTypesOrStr](doi_t/models/enums/dimensions_types.py)</code> | Dimension type |
| <code>id_</code> | <code>str</code> | Dimension id |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DimensionsExternalApiGetResponse](doi_t/models/dimensions_external_api_get_response.py), [GetDimensionsErrorBody](doi_t/errors/get_dimensions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DimensionsExternalApiGetResponse](doi_t/models/dimensions_external_api_get_response.py)</code> -- OK - The dimension returned.

**On `Failure`**: `error` is <code>[GetDimensionsErrorBody](doi_t/errors/get_dimensions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_dimensions(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, sort_by: SortByDoiTDimensionsApiOrStr | None = SortByDoiTDimensionsApi.ID, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DimensionsExternalApiListResponse, ListDimensionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the dimensions that your account has access to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.dimensions.with_raw_response.list_dimensions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DimensionsExternalApiListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDimensionsErrorBody
```

**Async**

```python
result = await async_client.dimensions.with_raw_response.list_dimensions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DimensionsExternalApiListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDimensionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results.<br>The fields eligible for filtering are: type, label, key.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByDoiTDimensionsApiOrStr](doi_t/models/enums/sort_by_doi_t_dimensions_api.py) \| None</code> | A field by which the results will be sorted. `key` is an alias for the dimension `id`. Defaults to `id` in descending order.<br>**Default**: <code>SortByDoiTDimensionsApi.ID</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DimensionsExternalApiListResponse](doi_t/models/dimensions_external_api_list_response.py), [ListDimensionsErrorBody](doi_t/errors/list_dimensions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DimensionsExternalApiListResponse](doi_t/models/dimensions_external_api_list_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListDimensionsErrorBody](doi_t/errors/list_dimensions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](doi_t/apis/folders.py)

<details>
<summary><code>def create_folder(body: CreateFolderRequest | CreateFolderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Folder, CreateFolderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Cloud Analytics folder.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.create_folder(CreateFolderRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Folder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFolderErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.create_folder(CreateFolderRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Folder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFolderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateFolderRequest](doi_t/models/create_folder_request.py) \| [CreateFolderRequestDict](doi_t/models/create_folder_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Folder](doi_t/models/folder.py), [CreateFolderErrorBody](doi_t/errors/create_folder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Folder](doi_t/models/folder.py)</code> -- Created - The folder was created.

**On `Failure`**: `error` is <code>[CreateFolderErrorBody](doi_t/errors/create_folder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteFolderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the folder are moved to the root.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.delete_folder("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFolderErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.delete_folder("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFolderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Folder ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteFolderErrorBody](doi_t/errors/delete_folder_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteFolderErrorBody](doi_t/errors/delete_folder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Folder, GetFolderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified Cloud Analytics folder.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.get_folder("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Folder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFolderErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.get_folder("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Folder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFolderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Folder ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Folder](doi_t/models/folder.py), [GetFolderErrorBody](doi_t/errors/get_folder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Folder](doi_t/models/folder.py)</code> -- OK - Folder returned.

**On `Failure`**: `error` is <code>[GetFolderErrorBody](doi_t/errors/get_folder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_folders(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1FoldersResponse, ListFoldersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Cloud Analytics folders the current customer has access to.
Folders are returned in id-ascending order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.list_folders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1FoldersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFoldersErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.list_folders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1FoldersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFoldersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1FoldersResponse](doi_t/models/analytics_v1_folders_response.py), [ListFoldersErrorBody](doi_t/errors/list_folders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1FoldersResponse](doi_t/models/analytics_v1_folders_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListFoldersErrorBody](doi_t/errors/list_folders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_folder(id_: str, body: UpdateFolderRequest | UpdateFolderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Folder, UpdateFolderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified folder. All fields are optional.
To reparent the folder, set `parentFolderId` to the target folder ID
(use "root" for the top level). If a sibling at the target has the same
name, the folder is auto-renamed.
To move reports or allocations into or out of a folder, update the item's
`folderId` field via the report or allocation PATCH endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.update_folder("some example string", UpdateFolderRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Folder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFolderErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.update_folder("some example string", UpdateFolderRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Folder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFolderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Folder ID. |
| <code>body</code> | <code>[UpdateFolderRequest](doi_t/models/update_folder_request.py) \| [UpdateFolderRequestDict](doi_t/models/update_folder_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Folder](doi_t/models/folder.py), [UpdateFolderErrorBody](doi_t/errors/update_folder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Folder](doi_t/models/folder.py)</code> -- OK - Folder updated.

**On `Failure`**: `error` is <code>[UpdateFolderErrorBody](doi_t/errors/update_folder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GeographicAccess

> Source: [GeographicAccess](doi_t/apis/geographic_access.py)

<details>
<summary><code>def create_geographic_access_custom_region(body: CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessCustomRegion, CreateGeographicAccessCustomRegionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.create_geographic_access_custom_region(
    CreateGeographicAccessCustomRegionRequest(name="some example string", country_codes=["some example string"]),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGeographicAccessCustomRegionErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.create_geographic_access_custom_region(
    CreateGeographicAccessCustomRegionRequest(name="some example string", country_codes=["some example string"]),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGeographicAccessCustomRegionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGeographicAccessCustomRegionRequest](doi_t/models/create_geographic_access_custom_region_request.py) \| [CreateGeographicAccessCustomRegionRequestDict](doi_t/models/create_geographic_access_custom_region_request.py)</code> | The request body. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py), [CreateGeographicAccessCustomRegionErrorBody](doi_t/errors/create_geographic_access_custom_region_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py)</code> -- Created

**On `Failure`**: `error` is <code>[CreateGeographicAccessCustomRegionErrorBody](doi_t/errors/create_geographic_access_custom_region_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_geographic_access_scope(target_customer_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCustomerGeographicAccessScopeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.delete_customer_geographic_access_scope(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGeographicAccessScopeErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.delete_customer_geographic_access_scope(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGeographicAccessScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>target_customer_id</code> | <code>str</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteCustomerGeographicAccessScopeErrorBody](doi_t/errors/delete_customer_geographic_access_scope_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCustomerGeographicAccessScopeErrorBody](doi_t/errors/delete_customer_geographic_access_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_geographic_access_custom_region(custom_region_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteGeographicAccessCustomRegionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.delete_geographic_access_custom_region(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGeographicAccessCustomRegionErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.delete_geographic_access_custom_region(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGeographicAccessCustomRegionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_region_id</code> | <code>str</code> | Stable service-generated custom-region ID. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteGeographicAccessCustomRegionErrorBody](doi_t/errors/delete_geographic_access_custom_region_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteGeographicAccessCustomRegionErrorBody](doi_t/errors/delete_geographic_access_custom_region_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_user_geographic_access_scope(target_customer_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteUserGeographicAccessScopeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.delete_user_geographic_access_scope(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteUserGeographicAccessScopeErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.delete_user_geographic_access_scope(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteUserGeographicAccessScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>target_customer_id</code> | <code>str</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>user_id</code> | <code>str</code> | Unique user ID returned by GET /iam/v1/users that belongs to the target customer. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteUserGeographicAccessScopeErrorBody](doi_t/errors/delete_user_geographic_access_scope_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteUserGeographicAccessScopeErrorBody](doi_t/errors/delete_user_geographic_access_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_geographic_access_scope(target_customer_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessScope, GetCustomerGeographicAccessScopeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.get_customer_geographic_access_scope(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerGeographicAccessScopeErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.get_customer_geographic_access_scope(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerGeographicAccessScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>target_customer_id</code> | <code>str</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py), [GetCustomerGeographicAccessScopeErrorBody](doi_t/errors/get_customer_geographic_access_scope_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetCustomerGeographicAccessScopeErrorBody](doi_t/errors/get_customer_geographic_access_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_geographic_access_custom_region(custom_region_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessCustomRegion, GetGeographicAccessCustomRegionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.get_geographic_access_custom_region(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeographicAccessCustomRegionErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.get_geographic_access_custom_region(
    "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeographicAccessCustomRegionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_region_id</code> | <code>str</code> | Stable service-generated custom-region ID. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py), [GetGeographicAccessCustomRegionErrorBody](doi_t/errors/get_geographic_access_custom_region_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetGeographicAccessCustomRegionErrorBody](doi_t/errors/get_geographic_access_custom_region_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_geographic_access_scope(target_customer_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessScope, GetUserGeographicAccessScopeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.get_user_geographic_access_scope(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserGeographicAccessScopeErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.get_user_geographic_access_scope(
    "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserGeographicAccessScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>target_customer_id</code> | <code>str</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>user_id</code> | <code>str</code> | Unique user ID returned by GET /iam/v1/users that belongs to the target customer. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py), [GetUserGeographicAccessScopeErrorBody](doi_t/errors/get_user_geographic_access_scope_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetUserGeographicAccessScopeErrorBody](doi_t/errors/get_user_geographic_access_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_geographic_access_countries(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessCountriesResponse, ListGeographicAccessCountriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.list_geographic_access_countries(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGeographicAccessCountriesErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.list_geographic_access_countries(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGeographicAccessCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessCountriesResponse](doi_t/models/geographic_access_countries_response.py), [ListGeographicAccessCountriesErrorBody](doi_t/errors/list_geographic_access_countries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessCountriesResponse](doi_t/models/geographic_access_countries_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListGeographicAccessCountriesErrorBody](doi_t/errors/list_geographic_access_countries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 503 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_geographic_access_custom_regions(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessCustomRegionsResponse, ListGeographicAccessCustomRegionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.list_geographic_access_custom_regions(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGeographicAccessCustomRegionsErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.list_geographic_access_custom_regions(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGeographicAccessCustomRegionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessCustomRegionsResponse](doi_t/models/geographic_access_custom_regions_response.py), [ListGeographicAccessCustomRegionsErrorBody](doi_t/errors/list_geographic_access_custom_regions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessCustomRegionsResponse](doi_t/models/geographic_access_custom_regions_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListGeographicAccessCustomRegionsErrorBody](doi_t/errors/list_geographic_access_custom_regions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_geographic_access_scope(target_customer_id: str, body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessScope, UpdateCustomerGeographicAccessScopeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.update_customer_geographic_access_scope(
    "some example string", CountryGeographicAccessScopeRequest(country_code="DE"), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGeographicAccessScopeErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.update_customer_geographic_access_scope(
    "some example string", CountryGeographicAccessScopeRequest(country_code="DE"), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGeographicAccessScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>target_customer_id</code> | <code>str</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>body</code> | <code>[UpdateGeographicAccessScopeRequest](doi_t/models/unions/update_geographic_access_scope_request.py) \| [UpdateGeographicAccessScopeRequestDict](doi_t/models/unions/update_geographic_access_scope_request.py)</code> | The request body. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py), [UpdateCustomerGeographicAccessScopeErrorBody](doi_t/errors/update_customer_geographic_access_scope_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- Updated

**On `Failure`**: `error` is <code>[UpdateCustomerGeographicAccessScopeErrorBody](doi_t/errors/update_customer_geographic_access_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_geographic_access_custom_region(custom_region_id: str, body: UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessCustomRegion, UpdateGeographicAccessCustomRegionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.update_geographic_access_custom_region(
    "some example string", UpdateGeographicAccessCustomRegionRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGeographicAccessCustomRegionErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.update_geographic_access_custom_region(
    "some example string", UpdateGeographicAccessCustomRegionRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessCustomRegion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGeographicAccessCustomRegionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_region_id</code> | <code>str</code> | Stable service-generated custom-region ID. |
| <code>body</code> | <code>[UpdateGeographicAccessCustomRegionRequest](doi_t/models/update_geographic_access_custom_region_request.py) \| [UpdateGeographicAccessCustomRegionRequestDict](doi_t/models/update_geographic_access_custom_region_request.py)</code> | The request body. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py), [UpdateGeographicAccessCustomRegionErrorBody](doi_t/errors/update_geographic_access_custom_region_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py)</code> -- OK

**On `Failure`**: `error` is <code>[UpdateGeographicAccessCustomRegionErrorBody](doi_t/errors/update_geographic_access_custom_region_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user_geographic_access_scope(target_customer_id: str, user_id: str, body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeographicAccessScope, UpdateUserGeographicAccessScopeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geographic_access.with_raw_response.update_user_geographic_access_scope(
    "some example string",
    "some example string",
    CountryGeographicAccessScopeRequest(country_code="DE"),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserGeographicAccessScopeErrorBody
```

**Async**

```python
result = await async_client.geographic_access.with_raw_response.update_user_geographic_access_scope(
    "some example string",
    "some example string",
    CountryGeographicAccessScopeRequest(country_code="DE"),
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeographicAccessScope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserGeographicAccessScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>target_customer_id</code> | <code>str</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>user_id</code> | <code>str</code> | Unique user ID returned by GET /iam/v1/users that belongs to the target customer. |
| <code>body</code> | <code>[UpdateGeographicAccessScopeRequest](doi_t/models/unions/update_geographic_access_scope_request.py) \| [UpdateGeographicAccessScopeRequestDict](doi_t/models/unions/update_geographic_access_scope_request.py)</code> | The request body. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py), [UpdateUserGeographicAccessScopeErrorBody](doi_t/errors/update_user_geographic_access_scope_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- Updated

**On `Failure`**: `error` is <code>[UpdateUserGeographicAccessScopeErrorBody](doi_t/errors/update_user_geographic_access_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](doi_t/apis/insights.py)

<details>
<summary><code>def delete_insight_result(source_id: SourceIdOrStr, insight_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteInsightResultErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a single insight and all its associated resource results.
Only insights created via the public API can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.delete_insight_result(SourceId.PUBLIC_API, "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInsightResultErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.delete_insight_result(SourceId.PUBLIC_API, "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInsightResultErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>[SourceIdOrStr](doi_t/models/enums/source_id.py)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insight_key</code> | <code>str</code> | The unique key identifying the insight to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteInsightResultErrorBody](doi_t/errors/delete_insight_result_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteInsightResultErrorBody](doi_t/errors/delete_insight_result_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_insight_results(insight_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteInsightResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all insights matching the specified key from the batch source.
This removes the insight and all its associated resource results.
For single-insight deletion, use `DELETE /source/{sourceID}/insight/{insightKey}` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.delete_insight_results("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInsightResultsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.delete_insight_results("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInsightResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>insight_key</code> | <code>str</code> | The unique key identifying the insight to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteInsightResultsErrorBody](doi_t/errors/delete_insight_results_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteInsightResultsErrorBody](doi_t/errors/delete_insight_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_insight_resource_results(source_id: str, insight_key: str, *, page_token: str | None = None, max_results: int | None = 1000, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResourceResultsResponse, GetInsightResourceResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of individual resource-level results for a specific insight.
Each resource result represents a single cloud resource (e.g. an EC2 instance, a GCS bucket)
affected by the insight, along with its risk scores or potential savings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.get_insight_resource_results("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightResourceResultsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_insight_resource_results(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightResourceResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>str</code> | The identifier of the source that generated the insight. |
| <code>insight_key</code> | <code>str</code> | The unique key identifying the insight. |
| <code>page_token</code> | <code>str \| None</code> | Token from a previous response to fetch the next page.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results per page (default 1000, max 5000).<br>**Default**: <code>1000</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ResourceResultsResponse](doi_t/models/resource_results_response.py), [GetInsightResourceResultsErrorBody](doi_t/errors/get_insight_resource_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResourceResultsResponse](doi_t/models/resource_results_response.py)</code> -- Successful operation

**On `Failure`**: `error` is <code>[GetInsightResourceResultsErrorBody](doi_t/errors/get_insight_resource_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_insight_result(source_id: str, insight_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightResponse, GetInsightResultErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the metadata and aggregate summary for a single insight identified by source and key.
Does not include individual resource-level results — use the resource-results endpoint for those.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.get_insight_result("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightResultErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_insight_result("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightResultErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>str</code> | The identifier of the source that generated the insight. |
| <code>insight_key</code> | <code>str</code> | The unique key identifying the insight. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[InsightResponse](doi_t/models/insight_response.py), [GetInsightResultErrorBody](doi_t/errors/get_insight_result_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightResponse](doi_t/models/insight_response.py)</code> -- Successful operation

**On `Failure`**: `error` is <code>[GetInsightResultErrorBody](doi_t/errors/get_insight_result_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_insight_results(*, search_term: str | None = None, display_status: list[DisplayStatus1OrStr] | None = None, category: Category1OrStr | None = None, cloud_provider: str | None = None, source: list[str] | None = None, priority: list[Priority1OrStr] | None = None, tag: list[str] | None = None, easy_win: bool | None = None, cloud_flows: bool | None = None, page_token: str | None = None, max_results: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResultsBody, GetInsightResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of insights with their aggregate summaries (savings, risk counts).
Use query parameters to filter by status, category, provider, or priority.
Does not include individual resource-level results — use the resource-results endpoint for those.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.get_insight_results(cloud_provider="aws")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultsBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightResultsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_insight_results(cloud_provider="aws")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultsBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>search_term</code> | <code>str \| None</code> | Free-text search term to filter insights by title or description.<br>**Default**: <code>None</code> |
| <code>display_status</code> | <code>list&#91;[DisplayStatus1OrStr](doi_t/models/enums/display_status1.py)&#93; \| None</code> | Filter by one or more display statuses.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>[Category1OrStr](doi_t/models/enums/category1.py) \| None</code> | Filter by insight category.<br>**Default**: <code>None</code> |
| <code>cloud_provider</code> | <code>str \| None</code> | Filter by cloud provider (e.g. "aws", "gcp", "azure").<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | the source that generated insights<br>**Default**: <code>None</code> |
| <code>priority</code> | <code>list&#91;[Priority1OrStr](doi_t/models/enums/priority1.py)&#93; \| None</code> | Filter by one or more priority levels.<br>**Default**: <code>None</code> |
| <code>tag</code> | <code>list&#91;str&#93; \| None</code> | Filter by one or more tags (e.g. security certification labels like "ISO").<br>**Default**: <code>None</code> |
| <code>easy_win</code> | <code>bool \| None</code> | When true, return only insights flagged as easy wins.<br>**Default**: <code>None</code> |
| <code>cloud_flows</code> | <code>bool \| None</code> | When true, return only insights that have associated CloudFlow automations.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Token from a previous response to fetch the next page.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results per page (default 50, max 500).<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ResultsBody](doi_t/models/results_body.py), [GetInsightResultsErrorBody](doi_t/errors/get_insight_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResultsBody](doi_t/models/results_body.py)</code> -- Successful operation

**On `Failure`**: `error` is <code>[GetInsightResultsErrorBody](doi_t/errors/get_insight_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_insight_resource_results(source_id: SourceIdOrStr, insight_key: str, body: CreateResourceResultsBody | CreateResourceResultsBodyDict, *, max_results: int | None = 1000, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResourceResultsResponse, PostInsightResourceResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all resource results for the specified insight. Any existing unresolved resource results not present in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement) for each resource result. To delete all resource results, send an empty array.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.post_insight_resource_results(
    SourceId.PUBLIC_API,
    "some example string",
    CreateResourceResultsBody(
        resource_results=[
            ResourceResultRequest(
                resource_id="some example string",
                cloud_provider="some example string",
                account="some example string",
                result_type=ResultType.SECURITY_RISK,
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostInsightResourceResultsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.post_insight_resource_results(
    SourceId.PUBLIC_API,
    "some example string",
    CreateResourceResultsBody(
        resource_results=[
            ResourceResultRequest(
                resource_id="some example string",
                cloud_provider="some example string",
                account="some example string",
                result_type=ResultType.SECURITY_RISK,
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostInsightResourceResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>[SourceIdOrStr](doi_t/models/enums/source_id.py)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insight_key</code> | <code>str</code> | The unique key identifying the insight. |
| <code>body</code> | <code>[CreateResourceResultsBody](doi_t/models/create_resource_results_body.py) \| [CreateResourceResultsBodyDict](doi_t/models/create_resource_results_body.py)</code> | The request body. |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results per page in the response (default 1000, max 5000).<br>**Default**: <code>1000</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ResourceResultsResponse](doi_t/models/resource_results_response.py), [PostInsightResourceResultsErrorBody](doi_t/errors/post_insight_resource_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResourceResultsResponse](doi_t/models/resource_results_response.py)</code> -- Resource results created/replaced successfully

**On `Failure`**: `error` is <code>[PostInsightResourceResultsErrorBody](doi_t/errors/post_insight_resource_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_insight_result(source_id: SourceIdOrStr, insight_key: str, body: InsightMetadataRequest | InsightMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightResponse, PostInsightResultErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a single insight for the given source and key.
If an insight with the same key already exists for the source, it will be updated.
Resource results are managed separately via the resource-results endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.post_insight_result(
    SourceId.PUBLIC_API,
    "some example string",
    InsightMetadataRequest(
        key="some example string",
        title="some example string",
        short_description="some example string",
        cloud_provider="some example string",
        categories=[CreateCategory.FIN_OPS],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostInsightResultErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.post_insight_result(
    SourceId.PUBLIC_API,
    "some example string",
    InsightMetadataRequest(
        key="some example string",
        title="some example string",
        short_description="some example string",
        cloud_provider="some example string",
        categories=[CreateCategory.FIN_OPS],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostInsightResultErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>[SourceIdOrStr](doi_t/models/enums/source_id.py)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insight_key</code> | <code>str</code> | The unique key identifying the insight. |
| <code>body</code> | <code>[InsightMetadataRequest](doi_t/models/insight_metadata_request.py) \| [InsightMetadataRequestDict](doi_t/models/insight_metadata_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[InsightResponse](doi_t/models/insight_response.py), [PostInsightResultErrorBody](doi_t/errors/post_insight_result_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightResponse](doi_t/models/insight_response.py)</code> -- Successful operation

**On `Failure`**: `error` is <code>[PostInsightResultErrorBody](doi_t/errors/post_insight_result_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_insight_results(*, body: CreateResultsBody | CreateResultsBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ResultsError], PostInsightResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates multiple insights in a single batch request.
Each insight in the batch includes its metadata and resource results inline.
For granular control over insight metadata and resource results independently,
use the single-insight and resource-results endpoints instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.post_insight_results()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ResultsError]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostInsightResultsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.post_insight_results()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ResultsError]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostInsightResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateResultsBody](doi_t/models/create_results_body.py) \| [CreateResultsBodyDict](doi_t/models/create_results_body.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;list&#91;[ResultsError](doi_t/models/results_error.py)&#93;, [PostInsightResultsErrorBody](doi_t/errors/post_insight_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ResultsError](doi_t/models/results_error.py)&#93;</code> -- Successful operation

**On `Failure`**: `error` is <code>[PostInsightResultsErrorBody](doi_t/errors/post_insight_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_insight_status(source_id: SourceIdOrStr, insight_key: str, body: UpdateStatusRequest | UpdateStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateInsightStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight.
Only insights created via the public API can have their status changed.
Deprecated: use the status field on the create/update insight endpoint instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.update_insight_status(
    SourceId.PUBLIC_API, "some example string", UpdateStatusRequest(status=DisplayStatus.ACTIONABLE)
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateInsightStatusErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.update_insight_status(
    SourceId.PUBLIC_API, "some example string", UpdateStatusRequest(status=DisplayStatus.ACTIONABLE)
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateInsightStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>[SourceIdOrStr](doi_t/models/enums/source_id.py)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insight_key</code> | <code>str</code> | The unique key identifying the insight to update. |
| <code>body</code> | <code>[UpdateStatusRequest](doi_t/models/update_status_request.py) \| [UpdateStatusRequestDict](doi_t/models/update_status_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [UpdateInsightStatusErrorBody](doi_t/errors/update_insight_status_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateInsightStatusErrorBody](doi_t/errors/update_insight_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](doi_t/apis/invoices.py)

<details>
<summary><code>def get_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingV1InvoicesResponse1, GetInvoiceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of an invoice specified by the invoice number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.get_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1InvoicesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoiceErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.get_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1InvoicesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Invoice number. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BillingV1InvoicesResponse1](doi_t/models/billing_v1_invoices_response1.py), [GetInvoiceErrorBody](doi_t/errors/get_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingV1InvoicesResponse1](doi_t/models/billing_v1_invoices_response1.py)</code> -- OK - Invoice details returned.

**On `Failure`**: `error` is <code>[GetInvoiceErrorBody](doi_t/errors/get_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_invoices(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, min_creation_time: int | None = None, max_creation_time: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingV1InvoicesResponse, ListInvoicesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the current and historical invoices for your organization.
Invoices are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.list_invoices()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1InvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInvoicesErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.list_invoices()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingV1InvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>min_creation_time</code> | <code>int \| None</code> | Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only invoices created after or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>max_creation_time</code> | <code>int \| None</code> | Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only invoices created before or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[BillingV1InvoicesResponse](doi_t/models/billing_v1_invoices_response.py), [ListInvoicesErrorBody](doi_t/errors/list_invoices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingV1InvoicesResponse](doi_t/models/billing_v1_invoices_response.py)</code> -- OK - All available invoices returned.

**On `Failure`**: `error` is <code>[ListInvoicesErrorBody](doi_t/errors/list_invoices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Labels

> Source: [Labels](doi_t/apis/labels.py)

<details>
<summary><code>def assign_objects_to_label(id_: str, body: AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AssignObjectsToLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns or un-assigns objects to the label specified by the ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.assign_objects_to_label("some example string", AssignObjectsToLabelRequest())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignObjectsToLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.assign_objects_to_label(
    "some example string", AssignObjectsToLabelRequest()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssignObjectsToLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Label ID |
| <code>body</code> | <code>[AssignObjectsToLabelRequest](doi_t/models/assign_objects_to_label_request.py) \| [AssignObjectsToLabelRequestDict](doi_t/models/assign_objects_to_label_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [AssignObjectsToLabelErrorBody](doi_t/errors/assign_objects_to_label_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AssignObjectsToLabelErrorBody](doi_t/errors/assign_objects_to_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_label(body: CreateLabelRequest | CreateLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LabelListItem, CreateLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new label.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.create_label(CreateLabelRequest(name="some example string", color=Color.BLUE))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.create_label(
    CreateLabelRequest(name="some example string", color=Color.BLUE)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLabelRequest](doi_t/models/create_label_request.py) \| [CreateLabelRequestDict](doi_t/models/create_label_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[LabelListItem](doi_t/models/label_list_item.py), [CreateLabelErrorBody](doi_t/errors/create_label_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LabelListItem](doi_t/models/label_list_item.py)</code> -- Created - Label created successfully.

**On `Failure`**: `error` is <code>[CreateLabelErrorBody](doi_t/errors/create_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_label(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the label specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.delete_label("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.delete_label("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Label ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;Any, [DeleteLabelErrorBody](doi_t/errors/delete_label_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK - Label deleted.

**On `Failure`**: `error` is <code>[DeleteLabelErrorBody](doi_t/errors/delete_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_label(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LabelListItem, GetLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a label by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.get_label("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.get_label("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Label ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[LabelListItem](doi_t/models/label_list_item.py), [GetLabelErrorBody](doi_t/errors/get_label_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LabelListItem](doi_t/models/label_list_item.py)</code> -- OK - Label returned.

**On `Failure`**: `error` is <code>[GetLabelErrorBody](doi_t/errors/get_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_label_assignments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LabelAssignmentsResponse, GetLabelAssignmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of objects currently assigned to the label specified by the ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.get_label_assignments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelAssignmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLabelAssignmentsErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.get_label_assignments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelAssignmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLabelAssignmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Label ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[LabelAssignmentsResponse](doi_t/models/label_assignments_response.py), [GetLabelAssignmentsErrorBody](doi_t/errors/get_label_assignments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LabelAssignmentsResponse](doi_t/models/label_assignments_response.py)</code> -- OK - Label assignments returned.

**On `Failure`**: `error` is <code>[GetLabelAssignmentsErrorBody](doi_t/errors/get_label_assignments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_labels(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, sort_by: SortByDoiTLabelsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LabelList, ListLabelsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of labels that your account has access to.
Labels are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.list_labels(filter_="name:budget", name_contains="monthly spend")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelsErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.list_labels(filter_="name:budget", name_contains="monthly spend")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results.<br>Valid fields: **name**, **type**.<br>**Default**: <code>None</code> |
| <code>name_contains</code> | <code>str \| None</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByDoiTLabelsApiOrStr](doi_t/models/enums/sort_by_doi_t_labels_api.py) \| None</code> | A field by which the results will be sorted.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](doi_t/models/enums/sort_order.py) \| None</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[LabelList](doi_t/models/label_list.py), [ListLabelsErrorBody](doi_t/errors/list_labels_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LabelList](doi_t/models/label_list.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListLabelsErrorBody](doi_t/errors/list_labels_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_label(id_: str, *, body: UpdateLabelRequest | UpdateLabelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LabelListItem, UpdateLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the label specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.update_label("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.update_label("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LabelListItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Label ID |
| <code>body</code> | <code>[UpdateLabelRequest](doi_t/models/update_label_request.py) \| [UpdateLabelRequestDict](doi_t/models/update_label_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[LabelListItem](doi_t/models/label_list_item.py), [UpdateLabelErrorBody](doi_t/errors/update_label_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LabelListItem](doi_t/models/label_list_item.py)</code> -- OK - Label updated.

**On `Failure`**: `error` is <code>[UpdateLabelErrorBody](doi_t/errors/update_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](doi_t/apis/organizations.py)

<details>
<summary><code>def list_organizations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IamV1OrganizationsResponse, ListOrganizationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of organizations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations.with_raw_response.list_organizations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IamV1OrganizationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrganizationsErrorBody
```

**Async**

```python
result = await async_client.organizations.with_raw_response.list_organizations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IamV1OrganizationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrganizationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[IamV1OrganizationsResponse](doi_t/models/iam_v1_organizations_response.py), [ListOrganizationsErrorBody](doi_t/errors/list_organizations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IamV1OrganizationsResponse](doi_t/models/iam_v1_organizations_response.py)</code> -- OK - List of organizations returned.

**On `Failure`**: `error` is <code>[ListOrganizationsErrorBody](doi_t/errors/list_organizations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsAws

> Source: [PerfectScaleForCommitmentsAws](doi_t/apis/perfect_scale_for_commitments_aws.py)

<details>
<summary><code>def get_aws_member_account(management_account_id: str, member_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AwsMemberAccountDetail, GetAwsMemberAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview time series. Use this when you need a single members Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every member account.

Fields that drive the Overview tab in the DoiT console:
- `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
- `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest purchase projection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.get_aws_member_account(
    "123456789012", "987654321098", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsMemberAccountDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsMemberAccountErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.get_aws_member_account(
    "123456789012", "987654321098", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsMemberAccountDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsMemberAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>member_account_id</code> | <code>str</code> | AWS member account ID (12-digit AWS account number). |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AwsMemberAccountDetail](doi_t/models/aws_member_account_detail.py), [GetAwsMemberAccountErrorBody](doi_t/errors/get_aws_member_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AwsMemberAccountDetail](doi_t/models/aws_member_account_detail.py)</code> -- Single AWS member account details (same list-item fields as provided for the organization through list member accounts operation) and overview time series: 6 months stats and 30 days of commitment coverage.

**On `Failure`**: `error` is <code>[GetAwsMemberAccountErrorBody](doi_t/errors/get_aws_member_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_aws_organization(management_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AwsOrganizationDetail, GetAwsOrganizationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview time series. Use this when you need a single organization's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every organization.

Fields that drive the Overview tab in the DoiT console:
- `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.
- `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest purchase projection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.get_aws_organization(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsOrganizationDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsOrganizationErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.get_aws_organization(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsOrganizationDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsOrganizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AwsOrganizationDetail](doi_t/models/aws_organization_detail.py), [GetAwsOrganizationErrorBody](doi_t/errors/get_aws_organization_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AwsOrganizationDetail](doi_t/models/aws_organization_detail.py)</code> -- Single AWS organization details (same list-item fields as provided for the organization through list AWS organization operation) and overview time series: 6 months stats and 30 days of commitment coverage.

**On `Failure`**: `error` is <code>[GetAwsOrganizationErrorBody](doi_t/errors/get_aws_organization_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_aws_recommendation(management_account_id: str, service_id: ServiceIdOrStr, *, granularity: GranularityOrStr | None = Granularity.DAY, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AwsRecommendationWithEligibleSpend, GetAwsRecommendationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the recommendation for one commitment type (`serviceId`) on the AWS organization, including analysis metrics and time-bucketed eligible spend. Use `granularity` to choose the eligible-spend bucket size (defaults to `day`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.get_aws_recommendation(
    "123456789012", ServiceId.COMPUTE, x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsRecommendationWithEligibleSpend
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsRecommendationErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.get_aws_recommendation(
    "123456789012", ServiceId.COMPUTE, x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsRecommendationWithEligibleSpend
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAwsRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>service_id</code> | <code>[ServiceIdOrStr](doi_t/models/enums/service_id.py)</code> | Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for the AWS organization (`compute` or `database`). |
| <code>granularity</code> | <code>[GranularityOrStr](doi_t/models/enums/granularity.py) \| None</code> | Time bucket size for eligible-spend data points on the recommendation response. If omitted, defaults to `day`. Coarser buckets return min/max/median usage; `hour` returns per-hour totals.<br>**Default**: <code>Granularity.DAY</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AwsRecommendationWithEligibleSpend](doi_t/models/aws_recommendation_with_eligible_spend.py), [GetAwsRecommendationErrorBody](doi_t/errors/get_aws_recommendation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AwsRecommendationWithEligibleSpend](doi_t/models/aws_recommendation_with_eligible_spend.py)</code> -- Commitment type recommendation together with the eligible-spend time series used for analysis and charting.

**On `Failure`**: `error` is <code>[GetAwsRecommendationErrorBody](doi_t/errors/get_aws_recommendation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aws_member_accounts(management_account_id: str, *, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse, ListAwsMemberAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all member AWS accounts under the specified AWS organization that have active or historical commitment coverage. Includes 30-day statistics and estimated monthly potential savings (`monthlyPotentialSavings`) per Savings Plan (SP) type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_member_accounts(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsMemberAccountsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_member_accounts(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsMemberAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse](doi_t/models/ps4_commitments_v1_aws_organizations_member_accounts_response.py), [ListAwsMemberAccountsErrorBody](doi_t/errors/list_aws_member_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse](doi_t/models/ps4_commitments_v1_aws_organizations_member_accounts_response.py)</code> -- List of member accounts.

**On `Failure`**: `error` is <code>[ListAwsMemberAccountsErrorBody](doi_t/errors/list_aws_member_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aws_organizations(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsResponse, ListAwsOrganizationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to discover AWS organization account IDs, and organization-level onboarding status of the available commitment types and savings metrics.

Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per Savings Plan (SP) type, and estimated monthly potential savings (`monthlyPotentialSavings`) per SP type from the latest projection. Sum across items for customer-level totals.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_organizations(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsOrganizationsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_organizations(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsOrganizationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1AwsOrganizationsResponse](doi_t/models/ps4_commitments_v1_aws_organizations_response.py), [ListAwsOrganizationsErrorBody](doi_t/errors/list_aws_organizations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1AwsOrganizationsResponse](doi_t/models/ps4_commitments_v1_aws_organizations_response.py)</code> -- List of AWS Organizations. One item per AWS organization.

**On `Failure`**: `error` is <code>[ListAwsOrganizationsErrorBody](doi_t/errors/list_aws_organizations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aws_organizations_settings(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1AwsSettingsResponse, ListAwsOrganizationsSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments purchasing account (`purchaseAccountId`) and commitment settings for each commitment type activated on that AWS organization (`compute`, `database`).

Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation mode, commitment limits, and related fields). They are stored independently for each AWS organization and commitment type. Each item includes that organization's `purchaseAccountId` and activated commitment types.

In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_organizations_settings(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsSettingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsOrganizationsSettingsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_organizations_settings(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsSettingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsOrganizationsSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1AwsSettingsResponse](doi_t/models/ps4_commitments_v1_aws_settings_response.py), [ListAwsOrganizationsSettingsErrorBody](doi_t/errors/list_aws_organizations_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1AwsSettingsResponse](doi_t/models/ps4_commitments_v1_aws_settings_response.py)</code> -- Settings payload for one onboarded AWS organization, with that AWS organization's purchasing account (`purchaseAccountId`) and organization-specific commitment settings for each activated commitment type (`services[].settings`).

**On `Failure`**: `error` is <code>[ListAwsOrganizationsSettingsErrorBody](doi_t/errors/list_aws_organizations_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aws_planned_purchases(management_account_id: str, *, service: Service2OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse, ListAwsPlannedPurchasesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that has a projection available (typically `compute` and/or `database`; up to four commitment types as PerfectScale for Commitments expands).

With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type order (`compute`, then `database`, then any future commitment types in enum order). When a filtered commitment type has no planned purchases, the response is an empty `items` array (not `404`). Partial items return only the fields available at response time.

`404` is returned only when the AWS organization does not exist or the caller cannot access it. An AWS organization that is not onboarded for PerfectScale for Commitments still returns `200` with an empty `items` array when no planned purchases exist — use `GET /ps4commitments/v1/aws/organizations` (or get-by-id) for `onboardingStatus`.

**Pagination**: results are returned in stable commitment-type order (`compute`, then `database`, then any future commitment types in enum order). Use `maxResults` to limit page size (default 50, max 500). When more items remain, the response includes a non-null `pageToken`; pass it unchanged on the next request with the same query parameters (`service`, `maxResults`). `rowCount` is the number of items in this page. An invalid `pageToken` returns `400` with code `pagination_token_invalid`; an expired token returns `400` with code `pagination_token_expired`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_planned_purchases(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsPlannedPurchasesErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_planned_purchases(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsPlannedPurchasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>service</code> | <code>[Service2OrStr](doi_t/models/enums/service2.py) \| None</code> | Filter planned purchases by PerfectScale for Commitments commitment type. Omit to return all commitment types that have planned purchases for the AWS organization.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse](doi_t/models/ps4_commitments_v1_aws_organizations_planned_purchases_response.py), [ListAwsPlannedPurchasesErrorBody](doi_t/errors/list_aws_planned_purchases_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse](doi_t/models/ps4_commitments_v1_aws_organizations_planned_purchases_response.py)</code> -- Paginated list of planned purchase projections.

**On `Failure`**: `error` is <code>[ListAwsPlannedPurchasesErrorBody](doi_t/errors/list_aws_planned_purchases_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aws_recommendations(management_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AwsRecommendations, ListAwsRecommendationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (`compute`, `database`). A commitment type is present only when it is onboarded and a recommendation is available.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_recommendations(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsRecommendations
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsRecommendationsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_recommendations(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AwsRecommendations
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsRecommendationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AwsRecommendations](doi_t/models/aws_recommendations.py), [ListAwsRecommendationsErrorBody](doi_t/errors/list_aws_recommendations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AwsRecommendations](doi_t/models/aws_recommendations.py)</code> -- List with recommendations for each onboarded commitment type. A commitment type property is present only when that commitment type is onboarded and a recommendation is available.

**On `Failure`**: `error` is <code>[ListAwsRecommendationsErrorBody](doi_t/errors/list_aws_recommendations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aws_reserved_instances(management_account_id: str, *, status: Status3OrStr | None = None, instance_type: str | None = None, instance_family: str | None = None, region: str | None = None, offering_class: OfferingClass1OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse, ListAwsReservedInstancesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_reserved_instances(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsReservedInstancesErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_reserved_instances(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsReservedInstancesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>status</code> | <code>[Status3OrStr](doi_t/models/enums/status3.py) \| None</code> | Filter by Reserved Instance lifecycle state. Omit to include all states.<br>**Default**: <code>None</code> |
| <code>instance_type</code> | <code>str \| None</code> | Filter by exact EC2 instance type (for example, `m5.large`). Case-sensitive. Must match the `instanceType` value on the RI exactly.<br>**Default**: <code>None</code> |
| <code>instance_family</code> | <code>str \| None</code> | Filter by EC2 instance family, the leading segment of `instanceType` before the dot (for example, `m5` matches `m5.large` and `m5.xlarge`). Case-sensitive.<br>**Default**: <code>None</code> |
| <code>region</code> | <code>str \| None</code> | Filter by AWS region (for example, `us-east-1`). Case-sensitive. Must match the region stored on the RI.<br>**Default**: <code>None</code> |
| <code>offering_class</code> | <code>[OfferingClass1OrStr](doi_t/models/enums/offering_class1.py) \| None</code> | Filter by RI offering class. Omit to include both standard and convertible.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse](doi_t/models/ps4_commitments_v1_aws_organizations_reserved_instances_response.py), [ListAwsReservedInstancesErrorBody](doi_t/errors/list_aws_reserved_instances_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse](doi_t/models/ps4_commitments_v1_aws_organizations_reserved_instances_response.py)</code> -- Paginated list of Reserved Instances.

**On `Failure`**: `error` is <code>[ListAwsReservedInstancesErrorBody](doi_t/errors/list_aws_reserved_instances_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aws_savings_plans(management_account_id: str, *, type_: TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None = None, status: Status2OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse, ListAwsSavingsPlansErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type (`type`) and state (`status`). Omit both filters to return all plans for the AWS organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_savings_plans(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsSavingsPlansErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_aws.with_raw_response.list_aws_savings_plans(
    "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAwsSavingsPlansErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>management_account_id</code> | <code>str</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>type_</code> | <code>[TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr](doi_t/models/enums/type_doi_t_perfect_scale_for_commitments_aws_api.py) \| None</code> | Filter by Savings Plan type. Omit to include all types.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status2OrStr](doi_t/models/enums/status2.py) \| None</code> | Filter by Savings Plan lifecycle state. Omit to include all states.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse](doi_t/models/ps4_commitments_v1_aws_organizations_savings_plans_response.py), [ListAwsSavingsPlansErrorBody](doi_t/errors/list_aws_savings_plans_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse](doi_t/models/ps4_commitments_v1_aws_organizations_savings_plans_response.py)</code> -- Paginated list of Savings Plans.

**On `Failure`**: `error` is <code>[ListAwsSavingsPlansErrorBody](doi_t/errors/list_aws_savings_plans_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsGcp

> Source: [PerfectScaleForCommitmentsGcp](doi_t/apis/perfect_scale_for_commitments_gcp.py)

<details>
<summary><code>def get_gcp_billing_account(billing_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GcpBillingAccountDetail, GetGcpBillingAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the Overview time series. Use this when you need a single billing account's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost Summary and CUD Coverage charts) without fetching every billing account.

Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line (`service` of `compute` or `cloud_sql`):
- `stats30d`: last 30 days ESR and realized savings per product line (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per product line (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.get_gcp_billing_account(
    "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GcpBillingAccountDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGcpBillingAccountErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.get_gcp_billing_account(
    "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GcpBillingAccountDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGcpBillingAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billing_account_id</code> | <code>str</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GcpBillingAccountDetail](doi_t/models/gcp_billing_account_detail.py), [GetGcpBillingAccountErrorBody](doi_t/errors/get_gcp_billing_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GcpBillingAccountDetail](doi_t/models/gcp_billing_account_detail.py)</code> -- Single GCP Billing Account details (same list-item fields as provided for the billing account through list GCP billing accounts operation) and overview time series: 6 months stats and 30 days of CUD coverage.

**On `Failure`**: `error` is <code>[GetGcpBillingAccountErrorBody](doi_t/errors/get_gcp_billing_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_gcp_recommendation(billing_account_id: str, gcp_service: GcpServiceOrStr, *, region: str | None = None, granularity: GranularityOrStr | None = Granularity.DAY, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GcpRecommendationWithEligibleSpend, GetGcpRecommendationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the recommendation for one product line (`gcp_service`) and region scope on the GCP
billing account, including analysis metrics and time-bucketed eligible spend. Use
`granularity` to choose the eligible-spend bucket size (defaults to `day`).

**`region`**: optional for `compute`, defaulting to `global` (its only scope). Required
for `cloud_sql` — omitting it returns `400` with code `validation_failed`, as does a
malformed region or one incompatible with `gcp_service` (`cloud_sql` never uses `global`).
A well-formed region the billing account has never had eligible spend in returns `404`
with code `not_found` — the scope does not exist, same as an unknown billing account.
When the scope exists but no stored recommendation matches, the response is `200` with
`recommendation` omitted and `estimatedEquivalentRecommendedCommitment` of `0`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.get_gcp_recommendation(
    "01D4A2-4E3F1B-9C72A0", GcpService.COMPUTE, region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GcpRecommendationWithEligibleSpend
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGcpRecommendationErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.get_gcp_recommendation(
    "01D4A2-4E3F1B-9C72A0", GcpService.COMPUTE, region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GcpRecommendationWithEligibleSpend
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGcpRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billing_account_id</code> | <code>str</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>gcp_service</code> | <code>[GcpServiceOrStr](doi_t/models/enums/gcp_service.py)</code> | PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is lowercased before validation. |
| <code>region</code> | <code>str \| None</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation.<br>**Default**: <code>None</code> |
| <code>granularity</code> | <code>[GranularityOrStr](doi_t/models/enums/granularity.py) \| None</code> | Time bucket size for eligible-spend data points on the recommendation response. If omitted, defaults to `day`. Coarser buckets return min/max/median usage; `hour` returns per-hour totals.<br>**Default**: <code>Granularity.DAY</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GcpRecommendationWithEligibleSpend](doi_t/models/gcp_recommendation_with_eligible_spend.py), [GetGcpRecommendationErrorBody](doi_t/errors/get_gcp_recommendation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GcpRecommendationWithEligibleSpend](doi_t/models/gcp_recommendation_with_eligible_spend.py)</code> -- Recommendation detail with eligible-spend usage series.

**On `Failure`**: `error` is <code>[GetGcpRecommendationErrorBody](doi_t/errors/get_gcp_recommendation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gcp_billing_accounts(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsResponse, ListGcpBillingAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings metrics.

Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed YTD/lifetime savings totals per product line. Sum across items for customer-level totals.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_billing_accounts(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpBillingAccountsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_billing_accounts(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpBillingAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1GcpBillingAccountsResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_response.py), [ListGcpBillingAccountsErrorBody](doi_t/errors/list_gcp_billing_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1GcpBillingAccountsResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_response.py)</code> -- List of GCP Billing Accounts. One item per billing account.

**On `Failure`**: `error` is <code>[ListGcpBillingAccountsErrorBody](doi_t/errors/list_gcp_billing_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gcp_billing_accounts_settings(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1GcpSettingsResponse, ListGcpBillingAccountsSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item per onboarded GCP Billing Account. Each item includes that billing
account's recommendation and automation engine settings for each product line activated
on it, per region scope: one `global` entry for `compute`, and one entry per known region
for `cloud_sql`.

Cloud SQL regions come from the billing account's persisted settings: a region is added
when eligible spend is first seen there and is never removed, so its settings entry
remains listed even if spend later drops to zero. Items are sorted by
`billingAccountId`; within an item, `services` lists `compute` before `cloud_sql`, with
`cloud_sql` regions sorted alphabetically.

Settings are stored independently on each billing account. Existing customer-level
settings are copied lazily when an account is first read or initialized; if no valid
legacy value exists, the complete backend defaults are materialized once on the account.
Only product lines that are activated/onboarded for a given billing account are returned.

In the DoiT Console, these settings are edited on an account's Settings tab.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_billing_accounts_settings(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpSettingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpBillingAccountsSettingsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_billing_accounts_settings(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpSettingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpBillingAccountsSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1GcpSettingsResponse](doi_t/models/ps4_commitments_v1_gcp_settings_response.py), [ListGcpBillingAccountsSettingsErrorBody](doi_t/errors/list_gcp_billing_accounts_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1GcpSettingsResponse](doi_t/models/ps4_commitments_v1_gcp_settings_response.py)</code> -- Settings payload for one onboarded GCP Billing Account, broken down by activated product line (`services[].settings`).

**On `Failure`**: `error` is <code>[ListGcpBillingAccountsSettingsErrorBody](doi_t/errors/list_gcp_billing_accounts_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gcp_planned_purchases(billing_account_id: str, *, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse, ListGcpPlannedPurchasesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the laddering projections for the billing account, grouped by PS4C product line
(`service`) and region. Each service group lists one entry per available
`gcp-purchases-projection` document for that scope (`compute` scopes are `global`;
`cloud_sql` scopes are per-region).

With no filters, returns all existing projection documents in stable order: service groups
ordered `compute` first, then `cloud_sql`; within each group, regions sorted with `global`
first, then remaining regions alphabetically. Services with no projection documents are omitted
(not returned as empty groups). When a filter matches no documents, the response is an
empty `items` array (not `404`). Partial projection documents return only the fields
available in storage.

**`gcp_service` and `region` filters**: omit both to return all available services and
their regions; supply `gcp_service` alone to return all regions for that service; supply
both to return a single service/region scope. `region` requires `gcp_service` — a request
with `region` but no `gcp_service` returns `400` with code `gcp_service_required`. Invalid
`gcp_service` or `region` values return `400` with code `validation_failed`.

`404` is returned only when the billing account does not exist or the caller cannot access
it. A billing account that is not onboarded for PS4C still returns `200` with an empty
`items` array when no projection documents exist — use
`GET /ps4commitments/v1/gcp/billing-accounts` (or get-by-id) for onboarding status.

**Pagination**: results are paginated by **service group** (a whole group is never split
across pages). Groups keep the stable service order above. Use `maxResults` to limit
page size (default 50, max 500). When more groups remain, the response includes a
non-null `pageToken`; pass it unchanged on the next request with the same query parameters
(`gcp_service`, `region`, `maxResults`). `rowCount` is the number of service groups in
this page. An invalid `pageToken` returns `400` with code `pagination_token_invalid`; an
expired token returns `400` with code `pagination_token_expired`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_planned_purchases(
    "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpPlannedPurchasesErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_planned_purchases(
    "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpPlannedPurchasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billing_account_id</code> | <code>str</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>gcp_service</code> | <code>[GcpServiceOrStr](doi_t/models/enums/gcp_service.py) \| None</code> | Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines. Matching is case-insensitive; the value is lowercased before validation.<br>**Default**: <code>None</code> |
| <code>region</code> | <code>str \| None</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_planned_purchases_response.py), [ListGcpPlannedPurchasesErrorBody](doi_t/errors/list_gcp_planned_purchases_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_planned_purchases_response.py)</code> -- List of planned purchase projections grouped by service and region.

**On `Failure`**: `error` is <code>[ListGcpPlannedPurchasesErrorBody](doi_t/errors/list_gcp_planned_purchases_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gcp_recommendations(billing_account_id: str, *, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse, ListGcpRecommendationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns commitment purchase recommendations for the billing account, filtered to the
term preferred in each product line's settings (`preferredCommitmentPeriod`).

**`gcp_service` and `region` filters**: omit both to return recommendations for all
product lines (`compute`, `cloud_sql`) across all their regions. Supply `gcp_service`
alone to return all regions for that service; supply both to return a single
service/region scope. `region` requires `gcp_service` — a request with `region` but no
`gcp_service` returns `400` with code `gcp_service_required`. A `region` that is malformed
or incompatible with `gcp_service` (`compute` is `global`-only, `cloud_sql` is
regional-only) returns `400` with code `validation_failed`; a well-formed, compatible
region with no data returns `200` with an empty `items` array.

`404` is returned only when the billing account does not exist or the caller cannot access
it. A billing account with no matching recommendation documents returns `200` with an empty
`items` array.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_recommendations(
    "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpRecommendationsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_recommendations(
    "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpRecommendationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billing_account_id</code> | <code>str</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>gcp_service</code> | <code>[GcpServiceOrStr](doi_t/models/enums/gcp_service.py) \| None</code> | Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines. Matching is case-insensitive; the value is lowercased before validation.<br>**Default**: <code>None</code> |
| <code>region</code> | <code>str \| None</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation.<br>**Default**: <code>None</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_recommendations_response.py), [ListGcpRecommendationsErrorBody](doi_t/errors/list_gcp_recommendations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_recommendations_response.py)</code> -- List of GCP recommendations.

**On `Failure`**: `error` is <code>[ListGcpRecommendationsErrorBody](doi_t/errors/list_gcp_recommendations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gcp_resource_cuds(billing_account_id: str, *, status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse, ListGcpResourceCudsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by CUD state (`status`). Omit to return CUDs in all states.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_resource_cuds(
    "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpResourceCudsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_resource_cuds(
    "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpResourceCudsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billing_account_id</code> | <code>str</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>status</code> | <code>[Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr](doi_t/models/enums/status2_doi_t_perfect_scale_for_commitments_gcp_api.py) \| None</code> | Filter by CUD state. Omit to include all states.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_resource_based_response.py), [ListGcpResourceCudsErrorBody](doi_t/errors/list_gcp_resource_cuds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_resource_based_response.py)</code> -- Paginated list of resource-based CUDs.

**On `Failure`**: `error` is <code>[ListGcpResourceCudsErrorBody](doi_t/errors/list_gcp_resource_cuds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gcp_spend_cuds(billing_account_id: str, *, status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse, ListGcpSpendCudsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by
CUD state (`status`); omit to return CUDs in all states.

**`gcp_service` and `region` filters**: `gcp_service` narrows results to one product
line's coverage sub-type (`compute` or `cloud_sql`); `region` additionally narrows to one
region scope and requires `gcp_service` — a request with `region` but no `gcp_service`
returns `400` with code `gcp_service_required`. A `region` that is malformed or
incompatible with `gcp_service` (`compute` is `global`-only, `cloud_sql` is regional-only)
returns `400` with code `validation_failed`; a well-formed, compatible region with no
matching CUDs returns `200` with an empty `items` array. Note the `region` query parameter
uses the `lower_snake_case` wire form (`us_central1`), while each item's `region` field
echoes the raw provider value (`us-central1`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_spend_cuds(
    "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpSpendCudsErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_gcp.with_raw_response.list_gcp_spend_cuds(
    "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGcpSpendCudsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billing_account_id</code> | <code>str</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>status</code> | <code>[Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr](doi_t/models/enums/status2_doi_t_perfect_scale_for_commitments_gcp_api.py) \| None</code> | Filter by CUD state. Omit to include all states.<br>**Default**: <code>None</code> |
| <code>gcp_service</code> | <code>[GcpServiceOrStr](doi_t/models/enums/gcp_service.py) \| None</code> | Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines. Matching is case-insensitive; the value is lowercased before validation.<br>**Default**: <code>None</code> |
| <code>region</code> | <code>str \| None</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_spend_based_response.py), [ListGcpSpendCudsErrorBody](doi_t/errors/list_gcp_spend_cuds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_spend_based_response.py)</code> -- Paginated list of spend-based CUDs.

**On `Failure`**: `error` is <code>[ListGcpSpendCudsErrorBody](doi_t/errors/list_gcp_spend_cuds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsGeneral

> Source: [PerfectScaleForCommitmentsGeneral](doi_t/apis/perfect_scale_for_commitments_general.py)

<details>
<summary><code>def get_commitment_policy(policy_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommitmentPolicyDetail, GetCommitmentPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one commitment policy by id, with its creation and last-update times and the list of
account × product-line scopes it is explicitly assigned to across AWS and GCP.

`assignments` lists explicit assignments only. An account whose settings have not yet been
materialized falls back to `balanced` implicitly and does not appear here, even though the
settings endpoints report it as `balanced`. On AWS the assignment is currently recorded per
tenant and applied to every onboarded organization, so each organization appears once per
product line. The list is not paginated.

Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be
queried the request fails rather than returning a partial list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_general.with_raw_response.get_commitment_policy(
    "balanced", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommitmentPolicyDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCommitmentPolicyErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_general.with_raw_response.get_commitment_policy(
    "balanced", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommitmentPolicyDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCommitmentPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_id</code> | <code>str</code> | Commitment policy id. Built-in policies use `conservative`, `balanced` or `max_savings`; custom policies have an opaque id returned by the list endpoint. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CommitmentPolicyDetail](doi_t/models/commitment_policy_detail.py), [GetCommitmentPolicyErrorBody](doi_t/errors/get_commitment_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommitmentPolicyDetail](doi_t/models/commitment_policy_detail.py)</code> -- The commitment policy with its assignments.

**On `Failure`**: `error` is <code>[GetCommitmentPolicyErrorBody](doi_t/errors/get_commitment_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_commitment_policies(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ps4CommitmentsV1GeneralPoliciesResponse, ListCommitmentPoliciesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every commitment policy available to the tenant: the three built-in policies
(`conservative`, `balanced`, `max_savings`) followed by the tenant's own custom policies.

Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the
same policy may be assigned to AWS and GCP product lines alike.

Built-in policies are listed first, ordered from least to most aggressive target coverage;
custom policies follow in creation order. Percentage parameters are expressed as `1`–`100`, as
entered in the DoiT Console. This differs from the coverage and utilization fields on
recommendations and inventory, which are fractions from 0 to 1.

This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT
Console on the Commitment Policies page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.perfect_scale_for_commitments_general.with_raw_response.list_commitment_policies(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GeneralPoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommitmentPoliciesErrorBody
```

**Async**

```python
result = await async_client.perfect_scale_for_commitments_general.with_raw_response.list_commitment_policies(
    x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ps4CommitmentsV1GeneralPoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommitmentPoliciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: <code>50</code> |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Ps4CommitmentsV1GeneralPoliciesResponse](doi_t/models/ps4_commitments_v1_general_policies_response.py), [ListCommitmentPoliciesErrorBody](doi_t/errors/list_commitment_policies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ps4CommitmentsV1GeneralPoliciesResponse](doi_t/models/ps4_commitments_v1_general_policies_response.py)</code> -- One page of the tenant's commitment policies.

**On `Failure`**: `error` is <code>[ListCommitmentPoliciesErrorBody](doi_t/errors/list_commitment_policies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Platforms

> Source: [Platforms](doi_t/apis/platforms.py)

<details>
<summary><code>def list_platforms(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportV1MetadataPlatformsResponse, ListPlatformsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the available platforms.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.platforms.with_raw_response.list_platforms()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportV1MetadataPlatformsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformsErrorBody
```

**Async**

```python
result = await async_client.platforms.with_raw_response.list_platforms()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportV1MetadataPlatformsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SupportV1MetadataPlatformsResponse](doi_t/models/support_v1_metadata_platforms_response.py), [ListPlatformsErrorBody](doi_t/errors/list_platforms_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportV1MetadataPlatformsResponse](doi_t/models/support_v1_metadata_platforms_response.py)</code> -- OK - List of available platforms returned.

**On `Failure`**: `error` is <code>[ListPlatformsErrorBody](doi_t/errors/list_platforms_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](doi_t/apis/products.py)

<details>
<summary><code>def list_products(*, platform: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportV1MetadataProductsResponse, ListProductsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the available products of specific platforms.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.products.with_raw_response.list_products()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportV1MetadataProductsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProductsErrorBody
```

**Async**

```python
result = await async_client.products.with_raw_response.list_products()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportV1MetadataProductsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProductsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SupportV1MetadataProductsResponse](doi_t/models/support_v1_metadata_products_response.py), [ListProductsErrorBody](doi_t/errors/list_products_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportV1MetadataProductsResponse](doi_t/models/support_v1_metadata_products_response.py)</code> -- OK - List of available products returned.

**On `Failure`**: `error` is <code>[ListProductsErrorBody](doi_t/errors/list_products_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](doi_t/apis/reports.py)

<details>
<summary><code>def async_run_inline(idempotency_key: str, *, dry_run: bool | None = None, body: AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsyncOperationResponse, AsyncRunInlineErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once submission. Duplicate requests with the same config for the same customer return the existing in-flight operation. Use ?dryRun=true to validate the config without creating an operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.async_run_inline(
    "some example string",
    body=AnalyticsV1ReportsActionsRunRequest(
        config=ExternalConfig(
            metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
            time_interval=TimeIntervalDoiTReportsApi.MONTH,
            time_range=TimeSettings(amount=1, mode=Mode2.LAST, unit=Unit.MONTH),
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsyncRunInlineErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.async_run_inline(
    "some example string",
    body=AnalyticsV1ReportsActionsRunRequest(
        config=ExternalConfig(
            metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
            time_interval=TimeIntervalDoiTReportsApi.MONTH,
            time_range=TimeSettings(amount=1, mode=Mode2.LAST, unit=Unit.MONTH),
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsyncRunInlineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotency_key</code> | <code>str</code> | Unique key for this submission. Required on every request. Deduplication is based on config content, not this key. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns 200 without creating an operation or submitting a job. The response body will have status "dry_run" and no operationId.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[AnalyticsV1ReportsActionsRunRequest](doi_t/models/analytics_v1_reports_actions_run_request.py) \| [AnalyticsV1ReportsActionsRunRequestDict](doi_t/models/analytics_v1_reports_actions_run_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AsyncOperationResponse](doi_t/models/async_operation_response.py), [AsyncRunInlineErrorBody](doi_t/errors/async_run_inline_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsyncOperationResponse](doi_t/models/async_operation_response.py)</code> -- Accepted — async operation created. The Location header contains the URL to poll for status.

**On `Failure`**: `error` is <code>[AsyncRunInlineErrorBody](doi_t/errors/async_run_inline_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def async_run_report_by_id(id_: str, idempotency_key: str, *, dry_run: bool | None = None, time_range: str | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsyncOperationResponse, AsyncRunReportByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to validate without creating an operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.async_run_report_by_id(
    "some example string",
    "some example string",
    time_range="P7D",
    start_date=date(2025, 1, 1),
    end_date=date(2025, 1, 31),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsyncRunReportByIdErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.async_run_report_by_id(
    "some example string",
    "some example string",
    time_range="P7D",
    start_date=date(2025, 1, 1),
    end_date=date(2025, 1, 31),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsyncRunReportByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The saved report ID. |
| <code>idempotency_key</code> | <code>str</code> | Unique key for this submission. Required on every request. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns 200 without creating an operation or submitting a job.<br>**Default**: <code>None</code> |
| <code>time_range</code> | <code>str \| None</code> | An optional parameter to override the report time settings. Value should be represented in the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date and time elements that follow the [n]. Cannot be combined with startDate/endDate.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>Date \| None</code> | An optional parameter to override the report time settings. Must be provided together with endDate. Format: yyyy-mm-dd<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>Date \| None</code> | An optional parameter to override the report time settings. Must be provided together with startDate. Format: yyyy-mm-dd<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AsyncOperationResponse](doi_t/models/async_operation_response.py), [AsyncRunReportByIdErrorBody](doi_t/errors/async_run_report_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsyncOperationResponse](doi_t/models/async_operation_response.py)</code> -- Accepted — async operation created. The Location header contains the URL to poll for status.

**On `Failure`**: `error` is <code>[AsyncRunReportByIdErrorBody](doi_t/errors/async_run_report_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_async_operation(operation_id: str, idempotency_key: str, *, dry_run: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsyncOperationResponse, CancelAsyncOperationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed, canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.cancel_async_operation("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelAsyncOperationErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.cancel_async_operation(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelAsyncOperationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operation_id</code> | <code>str</code> | The unique ID of the async operation to cancel. |
| <code>idempotency_key</code> | <code>str</code> | Unique key for this submission. Required on every request. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns 200 without modifying any state. The response body will have status "dry_run" and the X-Dry-Run response header will be set to "true".<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AsyncOperationResponse](doi_t/models/async_operation_response.py), [CancelAsyncOperationErrorBody](doi_t/errors/cancel_async_operation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsyncOperationResponse](doi_t/models/async_operation_response.py)</code> -- OK — operation state returned. On dry-run, the X-Dry-Run response header is set to "true" and status is "dry_run".

**On `Failure`**: `error` is <code>[CancelAsyncOperationErrorBody](doi_t/errors/cancel_async_operation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_report(*, body: AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExternalReport, CreateReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.create_report(
    body=AnalyticsV1ReportsRequest(
        name="monthly-cost-by-service",
        description="Monthly cost grouped by service",
        config=ExternalConfig(
            metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
            aggregation=Aggregation.TOTAL,
            time_interval=TimeIntervalDoiTReportsApi.DAY,
            dimensions=[DimensionDoiTReportsApi(id="service_description", type_=DimensionsTypes.FIXED)],
            time_range=TimeSettings(amount=7, include_current=False, mode=Mode2.LAST, unit=Unit.DAY),
            include_subtotals=False,
            display_values=DisplayValues.ACTUALS_ONLY,
            sort_groups=SortGroups.ASC,
            sort_dimensions=SortDimensions.DESC,
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateReportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.create_report(
    body=AnalyticsV1ReportsRequest(
        name="monthly-cost-by-service",
        description="Monthly cost grouped by service",
        config=ExternalConfig(
            metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
            aggregation=Aggregation.TOTAL,
            time_interval=TimeIntervalDoiTReportsApi.DAY,
            dimensions=[DimensionDoiTReportsApi(id="service_description", type_=DimensionsTypes.FIXED)],
            time_range=TimeSettings(amount=7, include_current=False, mode=Mode2.LAST, unit=Unit.DAY),
            include_subtotals=False,
            display_values=DisplayValues.ACTUALS_ONLY,
            sort_groups=SortGroups.ASC,
            sort_dimensions=SortDimensions.DESC,
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AnalyticsV1ReportsRequest](doi_t/models/analytics_v1_reports_request.py) \| [AnalyticsV1ReportsRequestDict](doi_t/models/analytics_v1_reports_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ExternalReport](doi_t/models/external_report.py), [CreateReportErrorBody](doi_t/errors/create_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExternalReport](doi_t/models/external_report.py)</code> -- Created - The request succeeded.

**On `Failure`**: `error` is <code>[CreateReportErrorBody](doi_t/errors/create_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified Cloud Analytics report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.delete_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.delete_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>id_</code> | <code>str</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;Any, [DeleteReportErrorBody](doi_t/errors/delete_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK - Report deleted.

**On `Failure`**: `error` is <code>[DeleteReportErrorBody](doi_t/errors/delete_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_async_operation(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsyncOperationPollResponse, GetAsyncOperationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of an async report operation. Non-terminal operations (pending, running) include a Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant, or has expired.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.get_async_operation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationPollResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAsyncOperationErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.get_async_operation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncOperationPollResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAsyncOperationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operation_id</code> | <code>str</code> | The unique ID of the async operation to poll. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AsyncOperationPollResponse](doi_t/models/async_operation_poll_response.py), [GetAsyncOperationErrorBody](doi_t/errors/get_async_operation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsyncOperationPollResponse](doi_t/models/async_operation_poll_response.py)</code> -- OK — current operation state. The Retry-After response header is present only on pending/running responses.

**On `Failure`**: `error` is <code>[GetAsyncOperationErrorBody](doi_t/errors/get_async_operation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_async_operation_results(operation_id: str, *, file_output: FileOutputOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1ReportsOperationsResultsResponse, GetAsyncOperationResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner, type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it. Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled. The poll status endpoint response does not include result data inline — this is the only endpoint that returns it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.get_async_operation_results("some example string", file_output=FileOutput.PDF)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1ReportsOperationsResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAsyncOperationResultsErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.get_async_operation_results(
    "some example string", file_output=FileOutput.PDF
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1ReportsOperationsResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAsyncOperationResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operation_id</code> | <code>str</code> | The unique ID of the async operation. |
| <code>file_output</code> | <code>[FileOutputOrStr](doi_t/models/enums/file_output.py) \| None</code> | Additionally render the operation's result as a file and return a signed URL to it in `fileOutput`. The file is generated from the result the operation already produced, not by re-running the query, and is stored beside that result for the operation's lifetime, so a repeat request for the same operation and format returns a fresh signed URL to the same file rather than rendering it again. Omit the parameter and the response is unchanged. Returns 422 when the operation predates file output support and has no stored render input; a transient rendering failure instead returns 200 with `result` and no `fileOutput`, so retry the request for the file. `pdf` is the chart and data table as a document, `png` the chart image, and `csv` every row of the result as raw data, one line per row with the report's dimensions and metrics, never truncated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1ReportsOperationsResultsResponse](doi_t/models/analytics_v1_reports_operations_results_response.py), [GetAsyncOperationResultsErrorBody](doi_t/errors/get_async_operation_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1ReportsOperationsResultsResponse](doi_t/models/analytics_v1_reports_operations_results_response.py)</code> -- OK — the operation succeeded; body is the report result, plus report metadata when the operation was started against a saved report, plus a fileOutput URL when one was requested.

**On `Failure`**: `error` is <code>[GetAsyncOperationResultsErrorBody](doi_t/errors/get_async_operation_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 425, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_report(id_: str, *, time_range: str | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetReportResponse, GetReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the results of the specified report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.get_report(
    "some example string", time_range="P7D", start_date=date(2025, 1, 1), end_date=date(2025, 1, 31)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.get_report(
    "some example string", time_range="P7D", start_date=date(2025, 1, 1), end_date=date(2025, 1, 31)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>time_range</code> | <code>str \| None</code> | An optional parameter to override the report time settings. Value should be represented in the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date and time elements that follow the [n].<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>Date \| None</code> | An optional parameter to override the report time settings. Must be provided together with endDate. Format: yyyy-mm-dd<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>Date \| None</code> | An optional parameter to override the report time settings. Must be provided together with startDate. Format: yyyy-mm-dd<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[GetReportResponse](doi_t/models/get_report_response.py), [GetReportErrorBody](doi_t/errors/get_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetReportResponse](doi_t/models/get_report_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[GetReportErrorBody](doi_t/errors/get_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_report_config(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExternalReport, GetReportConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration of the specified Cloud Analytics report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.get_report_config("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportConfigErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.get_report_config("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ExternalReport](doi_t/models/external_report.py), [GetReportConfigErrorBody](doi_t/errors/get_report_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExternalReport](doi_t/models/external_report.py)</code> -- OK - Report configuration returned.

**On `Failure`**: `error` is <code>[GetReportConfigErrorBody](doi_t/errors/get_report_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_reports(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReportList, ListReportsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Cloud Analytics reports that your account has access to.
Reports are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.list_reports(
    filter_="reportName:This Month vs. Last", name_contains="monthly spend"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportsErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.list_reports(
    filter_="reportName:This Month vs. Last", name_contains="monthly spend"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReportList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results.<br>The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Possible filter keys: **reportName**, **owner**, **type**, **updateTime**, **folderId**<br>**Default**: <code>None</code> |
| <code>name_contains</code> | <code>str \| None</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics.<br>**Default**: <code>None</code> |
| <code>min_creation_time</code> | <code>str \| None</code> | Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created after or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>max_creation_time</code> | <code>str \| None</code> | Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created before or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ReportList](doi_t/models/report_list.py), [ListReportsErrorBody](doi_t/errors/list_reports_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReportList](doi_t/models/report_list.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListReportsErrorBody](doi_t/errors/list_reports_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query(*, body: AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunReportResult, QueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a report query with the specified configuration without persisting it.
Fields that are not populated will use their default values if needed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.query(
    body=AnalyticsV1ReportsQueryRequest(
        config=ExternalConfig(
            metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
            time_interval=TimeIntervalDoiTReportsApi.DAY,
            time_range=TimeSettings(amount=30, include_current=False, mode=Mode2.LAST, unit=Unit.DAY),
            group=[Group(id="service_description", type_=DimensionsTypes.FIXED)],
            data_source=DataSourceDoiTReportsApi.BILLING,
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunReportResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.query(
    body=AnalyticsV1ReportsQueryRequest(
        config=ExternalConfig(
            metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
            time_interval=TimeIntervalDoiTReportsApi.DAY,
            time_range=TimeSettings(amount=30, include_current=False, mode=Mode2.LAST, unit=Unit.DAY),
            group=[Group(id="service_description", type_=DimensionsTypes.FIXED)],
            data_source=DataSourceDoiTReportsApi.BILLING,
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunReportResult
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
| <code>body</code> | <code>[AnalyticsV1ReportsQueryRequest](doi_t/models/analytics_v1_reports_query_request.py) \| [AnalyticsV1ReportsQueryRequestDict](doi_t/models/analytics_v1_reports_query_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[RunReportResult](doi_t/models/run_report_result.py), [QueryErrorBody](doi_t/errors/query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunReportResult](doi_t/models/run_report_result.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[QueryErrorBody](doi_t/errors/query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_report(id_: str, *, body: ExternalUpdateReport | ExternalUpdateReportDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExternalReport, UpdateReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a report with the specified configuration.

Only specified fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.update_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateReportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.update_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExternalReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>body</code> | <code>[ExternalUpdateReport](doi_t/models/external_update_report.py) \| [ExternalUpdateReportDict](doi_t/models/external_update_report.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ExternalReport](doi_t/models/external_report.py), [UpdateReportErrorBody](doi_t/errors/update_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExternalReport](doi_t/models/external_report.py)</code> -- OK - Report updated.

**On `Failure`**: `error` is <code>[UpdateReportErrorBody](doi_t/errors/update_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](doi_t/apis/roles.py)

<details>
<summary><code>def create_role(idempotency_key: str, body: CreateRoleRequest | CreateRoleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RoleDoiTRolesApi, CreateRoleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the `permissions` values returned by `GET /iam/v1/roles`. A service account of a parent tenant can create the role in a descendant tenant by setting `X-Tenant-Id` to that tenant's customer ID. Requires the `Idempotency-Key` header so a retried request does not create a second role.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.roles.with_raw_response.create_role(
    "some example string",
    CreateRoleRequest(
        name="FinOps Analyst",
        description="Read-only access to cost reports and budgets",
        permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RoleDoiTRolesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRoleErrorBody
```

**Async**

```python
result = await async_client.roles.with_raw_response.create_role(
    "some example string",
    CreateRoleRequest(
        name="FinOps Analyst",
        description="Read-only access to cost reports and budgets",
        permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RoleDoiTRolesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotency_key</code> | <code>str</code> | Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same body returns the original response. |
| <code>body</code> | <code>[CreateRoleRequest](doi_t/models/create_role_request.py) \| [CreateRoleRequestDict](doi_t/models/create_role_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py), [CreateRoleErrorBody](doi_t/errors/create_role_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py)</code> -- Created - Role created.

**On `Failure`**: `error` is <code>[CreateRoleErrorBody](doi_t/errors/create_role_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| 422 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_role(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteRoleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.roles.with_raw_response.delete_role("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteRoleErrorBody
```

**Async**

```python
result = await async_client.roles.with_raw_response.delete_role("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique ID of the role to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteRoleErrorBody](doi_t/errors/delete_role_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteRoleErrorBody](doi_t/errors/delete_role_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500, 503 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_role(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RoleDoiTRolesApi, GetRoleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.roles.with_raw_response.get_role("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RoleDoiTRolesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRoleErrorBody
```

**Async**

```python
result = await async_client.roles.with_raw_response.get_role("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RoleDoiTRolesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique ID of the role. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py), [GetRoleErrorBody](doi_t/errors/get_role_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py)</code> -- OK - Role returned.

**On `Failure`**: `error` is <code>[GetRoleErrorBody](doi_t/errors/get_role_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_roles(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IamV1RolesResponse, ListRolesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of roles.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.roles.with_raw_response.list_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IamV1RolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRolesErrorBody
```

**Async**

```python
result = await async_client.roles.with_raw_response.list_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IamV1RolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[IamV1RolesResponse](doi_t/models/iam_v1_roles_response.py), [ListRolesErrorBody](doi_t/errors/list_roles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IamV1RolesResponse](doi_t/models/iam_v1_roles_response.py)</code> -- OK - List of roles returned.

**On `Failure`**: `error` is <code>[ListRolesErrorBody](doi_t/errors/list_roles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_role(id_: str, body: UpdateRoleRequest | UpdateRoleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RoleDoiTRolesApi, UpdateRoleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the `name`, `description` and/or `permissions` of a custom role. Only the fields present in the body change; `permissions` replaces the full list when present. Preset roles cannot be modified. A service account of a parent tenant can update a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.roles.with_raw_response.update_role(
    "some example string",
    UpdateRoleRequest(
        name="FinOps Analyst",
        description="Read-only access to cost reports and budgets",
        permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RoleDoiTRolesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateRoleErrorBody
```

**Async**

```python
result = await async_client.roles.with_raw_response.update_role(
    "some example string",
    UpdateRoleRequest(
        name="FinOps Analyst",
        description="Read-only access to cost reports and budgets",
        permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RoleDoiTRolesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique ID of the role to update. |
| <code>body</code> | <code>[UpdateRoleRequest](doi_t/models/update_role_request.py) \| [UpdateRoleRequestDict](doi_t/models/update_role_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py), [UpdateRoleErrorBody](doi_t/errors/update_role_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py)</code> -- OK - Role updated.

**On `Failure`**: `error` is <code>[UpdateRoleErrorBody](doi_t/errors/update_role_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceAccounts

> Source: [ServiceAccounts](doi_t/apis/service_accounts.py)

<details>
<summary><code>def create_service_account(idempotency_key: str, body: CreateServiceAccountRequest | CreateServiceAccountRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceAccount, CreateServiceAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has an API token; mint one with the `api-tokens` sub-resource. Returns `409` when another service account of the customer already uses `name`. With `dryRun=true` the request goes through the same checks as a real create (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating anything. When the caller authenticates with a service account token, `createdBy`, `createdByEmail` and `createdByUserId` are `null`. Requires the `serviceAccountCreator` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.create_service_account(
    "some example string",
    CreateServiceAccountRequest(
        name="terraform-ci",
        description="Manages DoiT resources from CI",
        permissions=["cloudAnalyticsReadOnly", "budgetsManager"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateServiceAccountErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.create_service_account(
    "some example string",
    CreateServiceAccountRequest(
        name="terraform-ci",
        description="Manages DoiT resources from CI",
        permissions=["cloudAnalyticsReadOnly", "budgetsManager"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateServiceAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotency_key</code> | <code>str</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[CreateServiceAccountRequest](doi_t/models/create_service_account_request.py) \| [CreateServiceAccountRequestDict](doi_t/models/create_service_account_request.py)</code> | The service account to create. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceAccount](doi_t/models/service_account.py), [CreateServiceAccountErrorBody](doi_t/errors/create_service_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceAccount](doi_t/models/service_account.py)</code> -- OK - Dry run only (`dryRun=true`). Every check of a real create passed and nothing was created; `id`, `createTime`, `updateTime` and `etag` are `null`.

**On `Failure`**: `error` is <code>[CreateServiceAccountErrorBody](doi_t/errors/create_service_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 422, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_service_account_token(service_account_id: str, idempotency_key: str, body: CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateServiceAccountTokenResponse, CreateServiceAccountTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints an API token for the service account and returns its `accessToken` once. The token
inherits the service account's permissions as they stand at creation; there is no per-token
scoping. Returns `409` when the service account already has a token of the same name, and
`422` at the cap of 10 tokens.

`dryRun=true` checks the name bounds only, then returns a preview without creating anything.
It does **not** verify that the service account exists, that the name is unused, or that the
account is under the token cap, so a dry run can succeed where the real create then returns
`404`, `409` or `422`. Requires the `serviceAccountCreator` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.create_service_account_token(
    "some example string",
    "some example string",
    CreateServiceAccountTokenRequest(
        name="ci-pipeline-prod", expires_time=datetime(2027, 9, 1, 8, 0, 0, tzinfo=timezone.utc)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateServiceAccountTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateServiceAccountTokenErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.create_service_account_token(
    "some example string",
    "some example string",
    CreateServiceAccountTokenRequest(
        name="ci-pipeline-prod", expires_time=datetime(2027, 9, 1, 8, 0, 0, tzinfo=timezone.utc)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateServiceAccountTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateServiceAccountTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>service_account_id</code> | <code>str</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>idempotency_key</code> | <code>str</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[CreateServiceAccountTokenRequest](doi_t/models/create_service_account_token_request.py) \| [CreateServiceAccountTokenRequestDict](doi_t/models/create_service_account_token_request.py)</code> | The API token to create. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CreateServiceAccountTokenResponse](doi_t/models/create_service_account_token_response.py), [CreateServiceAccountTokenErrorBody](doi_t/errors/create_service_account_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateServiceAccountTokenResponse](doi_t/models/create_service_account_token_response.py)</code> -- OK - Dry run only (`dryRun=true`). The name passed its bounds check and nothing was created; `id` and `createTime` are `null` and `accessToken` is an empty string. Not a guarantee that a real create would succeed — see the operation description.

**On `Failure`**: `error` is <code>[CreateServiceAccountTokenErrorBody](doi_t/errors/create_service_account_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 422, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_service_account(id_: str, if_match: str, idempotency_key: str, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteServiceAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a service account and all of its API tokens, which stop authenticating immediately. Deleting an ID that no longer exists returns `404`. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.delete_service_account(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteServiceAccountErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.delete_service_account(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteServiceAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Service account ID, as returned in the id field by the list and create operations. |
| <code>if_match</code> | <code>str</code> | The ETag of the current version, from a get, create or update response. A stale value returns 412; re-read the resource and retry with the new ETag. |
| <code>idempotency_key</code> | <code>str</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteServiceAccountErrorBody](doi_t/errors/delete_service_account_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteServiceAccountErrorBody](doi_t/errors/delete_service_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 412, 428, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_service_account_token(service_account_id: str, id_: str, idempotency_key: str, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteServiceAccountTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an ID that no longer exists returns `404`. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.delete_service_account_token(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteServiceAccountTokenErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.delete_service_account_token(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteServiceAccountTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>service_account_id</code> | <code>str</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>id_</code> | <code>str</code> | API token ID, as returned in the id field by the token list and create operations. |
| <code>idempotency_key</code> | <code>str</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;None, [DeleteServiceAccountTokenErrorBody](doi_t/errors/delete_service_account_token_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteServiceAccountTokenErrorBody](doi_t/errors/delete_service_account_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_service_account(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceAccount, GetServiceAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns `404`. The `ETag` response header carries the value to send in `If-Match` on update and delete. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.get_service_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServiceAccountErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.get_service_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServiceAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Service account ID, as returned in the id field by the list and create operations. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceAccount](doi_t/models/service_account.py), [GetServiceAccountErrorBody](doi_t/errors/get_service_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceAccount](doi_t/models/service_account.py)</code> -- OK - Service account returned.

**On `Failure`**: `error` is <code>[GetServiceAccountErrorBody](doi_t/errors/get_service_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_service_account_token(service_account_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceAccountToken, GetServiceAccountTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one API token of the service account; an ID that belongs to another customer returns `404`. `accessToken` is not included — it is shown only once, by the create operation. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.get_service_account_token(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountToken
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServiceAccountTokenErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.get_service_account_token(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountToken
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServiceAccountTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>service_account_id</code> | <code>str</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>id_</code> | <code>str</code> | API token ID, as returned in the id field by the token list and create operations. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceAccountToken](doi_t/models/service_account_token.py), [GetServiceAccountTokenErrorBody](doi_t/errors/get_service_account_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceAccountToken](doi_t/models/service_account_token.py)</code> -- OK - API token returned.

**On `Failure`**: `error` is <code>[GetServiceAccountTokenErrorBody](doi_t/errors/get_service_account_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_service_account_tokens(service_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceAccountTokensResponse, ListServiceAccountTokensErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the service account's non-deleted API tokens in a single unpaginated `items` array, at most 10. Secret material is never returned here — `accessToken` is shown only once, by the create operation. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.list_service_account_tokens("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountTokensResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListServiceAccountTokensErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.list_service_account_tokens("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountTokensResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListServiceAccountTokensErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>service_account_id</code> | <code>str</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceAccountTokensResponse](doi_t/models/service_account_tokens_response.py), [ListServiceAccountTokensErrorBody](doi_t/errors/list_service_account_tokens_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceAccountTokensResponse](doi_t/models/service_account_tokens_response.py)</code> -- OK - API tokens returned.

**On `Failure`**: `error` is <code>[ListServiceAccountTokensErrorBody](doi_t/errors/list_service_account_tokens_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| 404, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_service_accounts(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceAccountsResponse, ListServiceAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every service account owned by the authenticated customer in a single unpaginated `items` array, in no guaranteed order. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.list_service_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListServiceAccountsErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.list_service_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListServiceAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceAccountsResponse](doi_t/models/service_accounts_response.py), [ListServiceAccountsErrorBody](doi_t/errors/list_service_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceAccountsResponse](doi_t/models/service_accounts_response.py)</code> -- OK - Service accounts returned.

**On `Failure`**: `error` is <code>[ListServiceAccountsErrorBody](doi_t/errors/list_service_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_service_account(id_: str, if_match: str, idempotency_key: str, body: UpdateServiceAccountRequest | UpdateServiceAccountRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceAccount, UpdateServiceAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a service account with an `application/merge-patch+json` body (RFC 7396). Omitted or `null` fields stay unchanged; an explicit empty string clears `description`. `permissions` replaces the whole list, and `[]` removes every permission. With `dryRun=true` the request goes through the same checks as a real update (`If-Match`, name bounds and uniqueness, permission names, caller scope) and returns the service account as it would look after the patch, without changing anything. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.update_service_account(
    "some example string",
    "some example string",
    "some example string",
    UpdateServiceAccountRequest(permissions=["cloudAnalyticsReadOnly"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateServiceAccountErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.update_service_account(
    "some example string",
    "some example string",
    "some example string",
    UpdateServiceAccountRequest(permissions=["cloudAnalyticsReadOnly"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateServiceAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Service account ID, as returned in the id field by the list and create operations. |
| <code>if_match</code> | <code>str</code> | The ETag of the current version, from a get, create or update response. A stale value returns 412; re-read the resource and retry with the new ETag. |
| <code>idempotency_key</code> | <code>str</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[UpdateServiceAccountRequest](doi_t/models/update_service_account_request.py) \| [UpdateServiceAccountRequestDict](doi_t/models/update_service_account_request.py)</code> | The fields to change. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceAccount](doi_t/models/service_account.py), [UpdateServiceAccountErrorBody](doi_t/errors/update_service_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceAccount](doi_t/models/service_account.py)</code> -- OK - Service account updated, or previewed when `dryRun=true` (the body is the merged result, and `etag` is still the current one).

**On `Failure`**: `error` is <code>[UpdateServiceAccountErrorBody](doi_t/errors/update_service_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 412, 415, 422, 428, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_service_account_token(service_account_id: str, id_: str, idempotency_key: str, body: UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceAccountToken, UpdateServiceAccountTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves the token between `active` and `disabled` by setting `state`. Disabling takes effect
immediately: the token stops authenticating until it is re-enabled. Setting the state a
token already has succeeds and changes nothing.

The two directions are not symmetric. Disabling a token whose expiry has passed succeeds,
but re-enabling an expired token returns `422` — expiry is final, and a new token has to be
created instead. `deleted` and `expired` are not accepted values: a token is deleted through
the delete operation, and expires on its own.

With `dryRun=true` nothing is written and the response body is the token as it would look
after the change, so a `422` here means a real request would also be refused. Requires the
`serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_accounts.with_raw_response.update_service_account_token(
    "some example string",
    "some example string",
    "some example string",
    UpdateServiceAccountTokenRequest(state=State1DoiTServiceAccountsApi.DISABLED),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountToken
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateServiceAccountTokenErrorBody
```

**Async**

```python
result = await async_client.service_accounts.with_raw_response.update_service_account_token(
    "some example string",
    "some example string",
    "some example string",
    UpdateServiceAccountTokenRequest(state=State1DoiTServiceAccountsApi.DISABLED),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceAccountToken
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateServiceAccountTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>service_account_id</code> | <code>str</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>id_</code> | <code>str</code> | API token ID, as returned in the id field by the token list and create operations. |
| <code>idempotency_key</code> | <code>str</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[UpdateServiceAccountTokenRequest](doi_t/models/update_service_account_token_request.py) \| [UpdateServiceAccountTokenRequestDict](doi_t/models/update_service_account_token_request.py)</code> | The state to move the token to. |
| <code>dry_run</code> | <code>bool \| None</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceAccountToken](doi_t/models/service_account_token.py), [UpdateServiceAccountTokenErrorBody](doi_t/errors/update_service_account_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceAccountToken](doi_t/models/service_account_token.py)</code> -- OK - API token state changed, or previewed when `dryRun=true`.

**On `Failure`**: `error` is <code>[UpdateServiceAccountTokenErrorBody](doi_t/errors/update_service_account_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceQuotas

> Source: [ServiceQuotas](doi_t/apis/service_quotas.py)

<details>
<summary><code>def list_service_quotas(*, cloud_provider: CloudProvider1OrStr | None = None, min_utilization_percent: float | None = None, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceQuotaList, ListServiceQuotasErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer.
Results include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the cloud providers.
Results are sorted by utilization percentage in descending order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.service_quotas.with_raw_response.list_service_quotas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceQuotaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListServiceQuotasErrorBody
```

**Async**

```python
result = await async_client.service_quotas.with_raw_response.list_service_quotas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceQuotaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListServiceQuotasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloud_provider</code> | <code>[CloudProvider1OrStr](doi_t/models/enums/cloud_provider1.py) \| None</code> | Filter results to a cloud provider. Omit to return all supported providers.<br>**Default**: <code>None</code> |
| <code>min_utilization_percent</code> | <code>float \| None</code> | Return quotas whose utilization percentage is greater than or equal to this value.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results to return in one page.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ServiceQuotaList](doi_t/models/service_quota_list.py), [ListServiceQuotasErrorBody](doi_t/errors/list_service_quotas_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceQuotaList](doi_t/models/service_quota_list.py)</code> -- OK - Service quotas returned.

**On `Failure`**: `error` is <code>[ListServiceQuotasErrorBody](doi_t/errors/list_service_quotas_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Settings

> Source: [Settings](doi_t/apis/settings.py)

<details>
<summary><code>def create_custom_theme(body: CreateCustomThemeRequest | CreateCustomThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomTheme, CreateCustomThemeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom color theme. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settings.with_raw_response.create_custom_theme(
    CreateCustomThemeRequest(
        name="some example string",
        primary_color="some example string",
        colors=ThemeColors(light=["some example string"], dark=["some example string"]),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomThemeErrorBody
```

**Async**

```python
result = await async_client.settings.with_raw_response.create_custom_theme(
    CreateCustomThemeRequest(
        name="some example string",
        primary_color="some example string",
        colors=ThemeColors(light=["some example string"], dark=["some example string"]),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomThemeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCustomThemeRequest](doi_t/models/create_custom_theme_request.py) \| [CreateCustomThemeRequestDict](doi_t/models/create_custom_theme_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomTheme](doi_t/models/custom_theme.py), [CreateCustomThemeErrorBody](doi_t/errors/create_custom_theme_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomTheme](doi_t/models/custom_theme.py)</code> -- Created - Custom theme created successfully.

**On `Failure`**: `error` is <code>[CreateCustomThemeErrorBody](doi_t/errors/create_custom_theme_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_theme(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteCustomThemeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settings.with_raw_response.delete_custom_theme("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomThemeErrorBody
```

**Async**

```python
result = await async_client.settings.with_raw_response.delete_custom_theme("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomThemeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Custom theme ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;Any, [DeleteCustomThemeErrorBody](doi_t/errors/delete_custom_theme_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK - Custom theme deleted.

**On `Failure`**: `error` is <code>[DeleteCustomThemeErrorBody](doi_t/errors/delete_custom_theme_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_active_theme(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActiveTheme, GetActiveThemeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the theme currently active for the authenticated user.
`themeId` is the reserved sentinel `"default"` when no custom or
preset theme is selected and the user is on the built-in default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settings.with_raw_response.get_active_theme()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActiveTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetActiveThemeErrorBody
```

**Async**

```python
result = await async_client.settings.with_raw_response.get_active_theme()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActiveTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetActiveThemeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ActiveTheme](doi_t/models/active_theme.py), [GetActiveThemeErrorBody](doi_t/errors/get_active_theme_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActiveTheme](doi_t/models/active_theme.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[GetActiveThemeErrorBody](doi_t/errors/get_active_theme_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_theme(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomTheme, GetCustomThemeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a custom theme by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settings.with_raw_response.get_custom_theme("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomThemeErrorBody
```

**Async**

```python
result = await async_client.settings.with_raw_response.get_custom_theme("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomThemeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Custom theme ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomTheme](doi_t/models/custom_theme.py), [GetCustomThemeErrorBody](doi_t/errors/get_custom_theme_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomTheme](doi_t/models/custom_theme.py)</code> -- OK - Custom theme returned.

**On `Failure`**: `error` is <code>[GetCustomThemeErrorBody](doi_t/errors/get_custom_theme_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_themes(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsV1SettingsThemesResponse, ListCustomThemesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of custom color themes defined for your account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settings.with_raw_response.list_custom_themes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1SettingsThemesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomThemesErrorBody
```

**Async**

```python
result = await async_client.settings.with_raw_response.list_custom_themes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsV1SettingsThemesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomThemesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[AnalyticsV1SettingsThemesResponse](doi_t/models/analytics_v1_settings_themes_response.py), [ListCustomThemesErrorBody](doi_t/errors/list_custom_themes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsV1SettingsThemesResponse](doi_t/models/analytics_v1_settings_themes_response.py)</code> -- OK - The request succeeded.

**On `Failure`**: `error` is <code>[ListCustomThemesErrorBody](doi_t/errors/list_custom_themes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_active_theme(body: SetActiveThemeRequest | SetActiveThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActiveTheme, SetActiveThemeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the theme active for the authenticated user. Send the reserved
sentinel `themeId: "default"` to clear the active theme and fall back
to the built-in default. Returns the updated active theme.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settings.with_raw_response.set_active_theme(SetActiveThemeRequest(theme_id="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActiveTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetActiveThemeErrorBody
```

**Async**

```python
result = await async_client.settings.with_raw_response.set_active_theme(
    SetActiveThemeRequest(theme_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActiveTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetActiveThemeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SetActiveThemeRequest](doi_t/models/set_active_theme_request.py) \| [SetActiveThemeRequestDict](doi_t/models/set_active_theme_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ActiveTheme](doi_t/models/active_theme.py), [SetActiveThemeErrorBody](doi_t/errors/set_active_theme_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActiveTheme](doi_t/models/active_theme.py)</code> -- OK - Active theme updated.

**On `Failure`**: `error` is <code>[SetActiveThemeErrorBody](doi_t/errors/set_active_theme_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_custom_theme(id_: str, body: UpdateCustomThemeRequest | UpdateCustomThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomTheme, UpdateCustomThemeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settings.with_raw_response.update_custom_theme("some example string", UpdateCustomThemeRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomThemeErrorBody
```

**Async**

```python
result = await async_client.settings.with_raw_response.update_custom_theme(
    "some example string", UpdateCustomThemeRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomTheme
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomThemeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Custom theme ID |
| <code>body</code> | <code>[UpdateCustomThemeRequest](doi_t/models/update_custom_theme_request.py) \| [UpdateCustomThemeRequestDict](doi_t/models/update_custom_theme_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CustomTheme](doi_t/models/custom_theme.py), [UpdateCustomThemeErrorBody](doi_t/errors/update_custom_theme_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomTheme](doi_t/models/custom_theme.py)</code> -- OK - Custom theme updated.

**On `Failure`**: `error` is <code>[UpdateCustomThemeErrorBody](doi_t/errors/update_custom_theme_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SharedPayers

> Source: [SharedPayers](doi_t/apis/shared_payers.py)

<details>
<summary><code>def list_shared_payer_account_mappings(customer_id: str, *, management_account: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SharedPayerAccountMappingList, ListSharedPayerAccountMappingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is currently mapped to. `{customerId}` (the reseller itself) means the account has not yet been reassigned to an end customer. Each payer's own management account is included alongside its member accounts. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shared_payers.with_raw_response.list_shared_payer_account_mappings("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerAccountMappingList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedPayerAccountMappingsErrorBody
```

**Async**

```python
result = await async_client.shared_payers.with_raw_response.list_shared_payer_account_mappings("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerAccountMappingList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedPayerAccountMappingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>management_account</code> | <code>str \| None</code> | Restricts the results to accounts under this AWS management (payer) account ID.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SharedPayerAccountMappingList](doi_t/models/shared_payer_account_mapping_list.py), [ListSharedPayerAccountMappingsErrorBody](doi_t/errors/list_shared_payer_account_mappings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SharedPayerAccountMappingList](doi_t/models/shared_payer_account_mapping_list.py)</code> -- OK - Shared-payer account mappings returned.

**On `Failure`**: `error` is <code>[ListSharedPayerAccountMappingsErrorBody](doi_t/errors/list_shared_payer_account_mappings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_shared_payer_management_accounts(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SharedPayerManagementAccountList, ListSharedPayerManagementAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use in an account picker. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shared_payers.with_raw_response.list_shared_payer_management_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerManagementAccountList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedPayerManagementAccountsErrorBody
```

**Async**

```python
result = await async_client.shared_payers.with_raw_response.list_shared_payer_management_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerManagementAccountList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedPayerManagementAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SharedPayerManagementAccountList](doi_t/models/shared_payer_management_account_list.py), [ListSharedPayerManagementAccountsErrorBody](doi_t/errors/list_shared_payer_management_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SharedPayerManagementAccountList](doi_t/models/shared_payer_management_account_list.py)</code> -- OK - Shared-payer management accounts returned.

**On `Failure`**: `error` is <code>[ListSharedPayerManagementAccountsErrorBody](doi_t/errors/list_shared_payer_management_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_shared_payers(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SharedPayerList, ListSharedPayersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts of linked and mapped accounts. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shared_payers.with_raw_response.list_shared_payers("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedPayersErrorBody
```

**Async**

```python
result = await async_client.shared_payers.with_raw_response.list_shared_payers("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedPayersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SharedPayerList](doi_t/models/shared_payer_list.py), [ListSharedPayersErrorBody](doi_t/errors/list_shared_payers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SharedPayerList](doi_t/models/shared_payer_list.py)</code> -- OK - Shared payers returned.

**On `Failure`**: `error` is <code>[ListSharedPayersErrorBody](doi_t/errors/list_shared_payers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reassign_shared_payer_account(customer_id: str, asset_id: str, body: SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SharedPayerAccountReassignResult, ReassignSharedPayerAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reassigns one AWS account under a linked shared payer - a member account or the payer's own management account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shared_payers.with_raw_response.reassign_shared_payer_account(
    "some example string", "some example string", SharedPayerAccountReassignRequest(customer_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerAccountReassignResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReassignSharedPayerAccountErrorBody
```

**Async**

```python
result = await async_client.shared_payers.with_raw_response.reassign_shared_payer_account(
    "some example string", "some example string", SharedPayerAccountReassignRequest(customer_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SharedPayerAccountReassignResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReassignSharedPayerAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>asset_id</code> | <code>str</code> | Asset ID of the AWS account to reassign, as returned by `listSharedPayerAccountMappings`. |
| <code>body</code> | <code>[SharedPayerAccountReassignRequest](doi_t/models/shared_payer_account_reassign_request.py) \| [SharedPayerAccountReassignRequestDict](doi_t/models/shared_payer_account_reassign_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SharedPayerAccountReassignResult](doi_t/models/shared_payer_account_reassign_result.py), [ReassignSharedPayerAccountErrorBody](doi_t/errors/reassign_shared_payer_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SharedPayerAccountReassignResult](doi_t/models/shared_payer_account_reassign_result.py)</code> -- OK - Account reassigned.

**On `Failure`**: `error` is <code>[ReassignSharedPayerAccountErrorBody](doi_t/errors/reassign_shared_payer_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sharing

> Source: [Sharing](doi_t/apis/sharing.py)

<details>
<summary><code>def get_resource_permission(resource_type: ResourceTypeOrStr, resource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResourcePermissionsResponse, GetResourcePermissionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the permissions associated with the specified Cloud Analytics resource.
Supports Allocations, Alerts, Budgets, and Reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sharing.with_raw_response.get_resource_permission(ResourceType.ALERTS, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourcePermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourcePermissionErrorBody
```

**Async**

```python
result = await async_client.sharing.with_raw_response.get_resource_permission(
    ResourceType.ALERTS, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourcePermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourcePermissionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_type</code> | <code>[ResourceTypeOrStr](doi_t/models/enums/resource_type.py)</code> | Resource type. |
| <code>resource_id</code> | <code>str</code> | Resource ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ResourcePermissionsResponse](doi_t/models/resource_permissions_response.py), [GetResourcePermissionErrorBody](doi_t/errors/get_resource_permission_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResourcePermissionsResponse](doi_t/models/resource_permissions_response.py)</code> -- OK - Resource permissions returned.

**On `Failure`**: `error` is <code>[GetResourcePermissionErrorBody](doi_t/errors/get_resource_permission_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_resource_permission(resource_type: ResourceTypeOrStr, resource_id: str, *, body: SharingV1Request | SharingV1RequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResourcePermissionsResponse, UpdateResourcePermissionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the permissions associated with the specified Cloud Analytics resource.
Supports Allocations, Alerts, Budgets, and Reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sharing.with_raw_response.update_resource_permission(ResourceType.ALERTS, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourcePermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateResourcePermissionErrorBody
```

**Async**

```python
result = await async_client.sharing.with_raw_response.update_resource_permission(
    ResourceType.ALERTS, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourcePermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateResourcePermissionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_type</code> | <code>[ResourceTypeOrStr](doi_t/models/enums/resource_type.py)</code> | Resource type. |
| <code>resource_id</code> | <code>str</code> | Resource ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>body</code> | <code>[SharingV1Request](doi_t/models/sharing_v1_request.py) \| [SharingV1RequestDict](doi_t/models/sharing_v1_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ResourcePermissionsResponse](doi_t/models/resource_permissions_response.py), [UpdateResourcePermissionErrorBody](doi_t/errors/update_resource_permission_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResourcePermissionsResponse](doi_t/models/resource_permissions_response.py)</code> -- OK - Resource permissions configuration updated.

**On `Failure`**: `error` is <code>[UpdateResourcePermissionErrorBody](doi_t/errors/update_resource_permission_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Signup

> Source: [Signup](doi_t/apis/signup.py)

<details>
<summary><code>def create_signup_request(idempotency_key: str, body: SignupRequestCreate | SignupRequestCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignupRequest, CreateSignupRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms of Service version; the emailed 6-digit verification code is then the consent act. Agents should present consentUrl to the organization's admin and poll getSignupRequest.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signup.with_raw_response.create_signup_request(
    "some example string", SignupRequestCreate(email="user@example.com", company_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignupRequestErrorBody
```

**Async**

```python
result = await async_client.signup.with_raw_response.create_signup_request(
    "some example string", SignupRequestCreate(email="user@example.com", company_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignupRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotency_key</code> | <code>str</code> | Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same request. |
| <code>body</code> | <code>[SignupRequestCreate](doi_t/models/signup_request_create.py) \| [SignupRequestCreateDict](doi_t/models/signup_request_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SignupRequest](doi_t/models/signup_request.py), [CreateSignupRequestErrorBody](doi_t/errors/create_signup_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- Created - the signup request awaits the admin's verification.

**On `Failure`**: `error` is <code>[CreateSignupRequestErrorBody](doi_t/errors/create_signup_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 409, 429, 503 | <code>[SignupProblem](doi_t/models/signup_problem.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_signup_session(signup_request_id: str, body: SignupSessionRequest | SignupSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignupSession, CreateSignupSessionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the request is completed, so the browser that entered the code lands in the new tenant without a second email. The token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against tenantId, then open consoleUrl.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signup.with_raw_response.create_signup_session(
    "some example string", SignupSessionRequest(activation_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupSession
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignupSessionErrorBody
```

**Async**

```python
result = await async_client.signup.with_raw_response.create_signup_session(
    "some example string", SignupSessionRequest(activation_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupSession
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignupSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signup_request_id</code> | <code>str</code> | Public signup request id (sr_ prefix). |
| <code>body</code> | <code>[SignupSessionRequest](doi_t/models/signup_session_request.py) \| [SignupSessionRequestDict](doi_t/models/signup_session_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SignupSession](doi_t/models/signup_session.py), [CreateSignupSessionErrorBody](doi_t/errors/create_signup_session_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignupSession](doi_t/models/signup_session.py)</code> -- OK - a session for the tenant admin.

**On `Failure`**: `error` is <code>[CreateSignupSessionErrorBody](doi_t/errors/create_signup_session_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 410 | <code>[SignupProblem](doi_t/models/signup_problem.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signup_request(signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignupRequest, GetSignupRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's email or the verification code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signup.with_raw_response.get_signup_request("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignupRequestErrorBody
```

**Async**

```python
result = await async_client.signup.with_raw_response.get_signup_request("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignupRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signup_request_id</code> | <code>str</code> | Public signup request id (sr_ prefix). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SignupRequest](doi_t/models/signup_request.py), [GetSignupRequestErrorBody](doi_t/errors/get_signup_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetSignupRequestErrorBody](doi_t/errors/get_signup_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 429 | <code>[SignupProblem](doi_t/models/signup_problem.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resend_signup_verification(signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignupRequest, ResendSignupVerificationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signup.with_raw_response.resend_signup_verification("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendSignupVerificationErrorBody
```

**Async**

```python
result = await async_client.signup.with_raw_response.resend_signup_verification("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendSignupVerificationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signup_request_id</code> | <code>str</code> | Public signup request id (sr_ prefix). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SignupRequest](doi_t/models/signup_request.py), [ResendSignupVerificationErrorBody](doi_t/errors/resend_signup_verification_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- OK - a new code was sent; verification.sendsRemaining tells how many resends are left.

**On `Failure`**: `error` is <code>[ResendSignupVerificationErrorBody](doi_t/errors/resend_signup_verification_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409, 429 | <code>[SignupProblem](doi_t/models/signup_problem.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def verify_signup_request(signup_request_id: str, body: SignupVerificationCode | SignupVerificationCodeDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignupRequest, VerifySignupRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was created (or resent). Success records consent and starts provisioning; the request moves to consented and then completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signup.with_raw_response.verify_signup_request(
    "some example string", SignupVerificationCode(code="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifySignupRequestErrorBody
```

**Async**

```python
result = await async_client.signup.with_raw_response.verify_signup_request(
    "some example string", SignupVerificationCode(code="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifySignupRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signup_request_id</code> | <code>str</code> | Public signup request id (sr_ prefix). |
| <code>body</code> | <code>[SignupVerificationCode](doi_t/models/signup_verification_code.py) \| [SignupVerificationCodeDict](doi_t/models/signup_verification_code.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SignupRequest](doi_t/models/signup_request.py), [VerifySignupRequestErrorBody](doi_t/errors/verify_signup_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- OK - the request is consented (or already past that point).

**On `Failure`**: `error` is <code>[VerifySignupRequestErrorBody](doi_t/errors/verify_signup_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429 | <code>[SignupProblem](doi_t/models/signup_problem.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SupportRequests

> Source: [SupportRequests](doi_t/apis/support_requests.py)

<details>
<summary><code>def add_ticket_tags(ticket_id: int, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TagsResponse, AddTicketTagsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an existing support request. The operation is
surgical — only the tags listed in the request are added; existing tags
on the ticket are preserved. Re-adding a tag that is already present is
a successful no-op.

All submitted tags are normalized (trim + lowercase) before storage. For
customers, the system additionally applies a `customer_tag/` namespace
prefix to prevent collisions with internal DoiT process tags. The
response echoes the actual stored strings so callers can verify the
transform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.add_ticket_tags(1, TagsRequest(tags=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddTicketTagsErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.add_ticket_tags(
    1, TagsRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddTicketTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket_id</code> | <code>int</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[TagsRequest](doi_t/models/tags_request.py) \| [TagsRequestDict](doi_t/models/tags_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[TagsResponse](doi_t/models/tags_response.py), [AddTicketTagsErrorBody](doi_t/errors/add_ticket_tags_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TagsResponse](doi_t/models/tags_response.py)</code> -- OK - Tags added (or already present).

**On `Failure`**: `error` is <code>[AddTicketTagsErrorBody](doi_t/errors/add_ticket_tags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_ticket(body: TicketCreateFormExtApi | TicketCreateFormExtApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TicketResponseExtApi, CreateTicketErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new support request

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.create_ticket(
    TicketCreateFormExtApi(
        ticket=TicketExtApi(
            body="some example string",
            platform=PlatformDoiTSupportRequestsApi.DOIT,
            product="some example string",
            severity=SeverityDoiTSupportRequestsApi.LOW,
            subject="some example string",
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketResponseExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTicketErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.create_ticket(
    TicketCreateFormExtApi(
        ticket=TicketExtApi(
            body="some example string",
            platform=PlatformDoiTSupportRequestsApi.DOIT,
            product="some example string",
            severity=SeverityDoiTSupportRequestsApi.LOW,
            subject="some example string",
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketResponseExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTicketErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TicketCreateFormExtApi](doi_t/models/ticket_create_form_ext_api.py) \| [TicketCreateFormExtApiDict](doi_t/models/ticket_create_form_ext_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[TicketResponseExtApi](doi_t/models/ticket_response_ext_api.py), [CreateTicketErrorBody](doi_t/errors/create_ticket_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TicketResponseExtApi](doi_t/models/ticket_response_ext_api.py)</code> -- Created - New support request created.

**On `Failure`**: `error` is <code>[CreateTicketErrorBody](doi_t/errors/create_ticket_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_ticket_comment(ticket_id: int, body: CreateCommentRequest | CreateCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommentExtApi, CreateTicketCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a comment to an existing support request. For customers and
service-account callers, comments are always public, even when
`private` is `true`. Callers authenticated with DoiT employee privileges
can create private internal notes by setting `private` to `true`.
The response always includes `public`, reflecting the effective
visibility after these rules are applied, not merely the requested
privacy. Existing authentication and ticket authorization are unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.create_ticket_comment(
    1, CreateCommentRequest(body="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTicketCommentErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.create_ticket_comment(
    1, CreateCommentRequest(body="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTicketCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket_id</code> | <code>int</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[CreateCommentRequest](doi_t/models/create_comment_request.py) \| [CreateCommentRequestDict](doi_t/models/create_comment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CommentExtApi](doi_t/models/comment_ext_api.py), [CreateTicketCommentErrorBody](doi_t/errors/create_ticket_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommentExtApi](doi_t/models/comment_ext_api.py)</code> -- Created - Comment added to the support request.

**On `Failure`**: `error` is <code>[CreateTicketCommentErrorBody](doi_t/errors/create_ticket_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ticket(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TicketDetailExtApi, GetTicketErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single support request by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.get_ticket(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketDetailExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTicketErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.get_ticket(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketDetailExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTicketErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket_id</code> | <code>int</code> | The unique identifier of the support request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[TicketDetailExtApi](doi_t/models/ticket_detail_ext_api.py), [GetTicketErrorBody](doi_t/errors/get_ticket_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TicketDetailExtApi](doi_t/models/ticket_detail_ext_api.py)</code> -- OK - Support request details returned.

**On `Failure`**: `error` is <code>[GetTicketErrorBody](doi_t/errors/get_ticket_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 502, 503 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_ticket_comments(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommentsResponseExtApi, ListTicketCommentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all permitted comments on a support request. Customers and
service-account callers receive only public comments; private comment
bodies and attachments are excluded. Callers authenticated with DoiT
employee privileges receive both public and private comments, subject
to existing ticket authorization. Each comment includes `public`,
sourced from Zendesk: `true` means public and `false` means private
(internal). Missing visibility in legacy responses or snapshots means
unknown, not private. All comments are returned in a single response
(no pagination).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.list_ticket_comments(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentsResponseExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTicketCommentsErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.list_ticket_comments(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentsResponseExtApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTicketCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket_id</code> | <code>int</code> | The unique identifier of the support request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CommentsResponseExtApi](doi_t/models/comments_response_ext_api.py), [ListTicketCommentsErrorBody](doi_t/errors/list_ticket_comments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommentsResponseExtApi](doi_t/models/comments_response_ext_api.py)</code> -- OK - List of comments returned.

**On `Failure`**: `error` is <code>[ListTicketCommentsErrorBody](doi_t/errors/list_ticket_comments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 502, 503 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_ticket_tags(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TagsGetResponse, ListTicketTagsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the tags currently set on a support request.

DoiT employee (doer) callers receive the full tag set verbatim,
including internal namespaces (e.g. `tier/*`, `synapse_*`). Customer
callers receive only tags under the `customer_tag/` namespace, with
that prefix stripped (e.g. a tag added as `billing` reads back as
`billing`). Always present; empty array when the caller has no visible
tags.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.list_ticket_tags(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTicketTagsErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.list_ticket_tags(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsGetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTicketTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket_id</code> | <code>int</code> | The unique identifier of the support request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[TagsGetResponse](doi_t/models/tags_get_response.py), [ListTicketTagsErrorBody](doi_t/errors/list_ticket_tags_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TagsGetResponse](doi_t/models/tags_get_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListTicketTagsErrorBody](doi_t/errors/list_ticket_tags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tickets(*, max_results: int | None = 100, page_token: str | None = None, filter_: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TicketsList, ListTicketsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all historical requests that your account has access to.
Tickets are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.list_tickets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketsList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTicketsErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.list_tickets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketsList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTicketsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: <code>100</code> |
| <code>page_token</code> | <code>str \| None</code> | Page token, returned by a previous call, to request the next page of results<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | An expression for filtering the results of the request. The syntax is `key:[<value>]`. e.g: "severity:normal". Multiple filters can be<br>connected using a pipe \|. Note that using different keys in the same<br>filter results in “AND,” while using the same key multiple times in<br>the same filter results in “OR”.<br>**Default**: <code>None</code> |
| <code>min_creation_time</code> | <code>str \| None</code> | Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only tickets created after or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>max_creation_time</code> | <code>str \| None</code> | Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only tickets created before or at this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[TicketsList](doi_t/models/tickets_list.py), [ListTicketsErrorBody](doi_t/errors/list_tickets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TicketsList](doi_t/models/tickets_list.py)</code> -- OK - List of historical requests returned.

**On `Failure`**: `error` is <code>[ListTicketsErrorBody](doi_t/errors/list_tickets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 502, 503 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_ticket_tags(ticket_id: int, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TagsResponse, RemoveTicketTagsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an existing support request. The operation
is surgical — only the tags listed in the request are removed; tags not
listed are preserved. Removing a tag that is not present is a successful
no-op.

For customers, the system applies the same `customer_tag/` namespace
mapping as on add, so a customer who added `my_tag` (stored as
`customer_tag/my_tag`) can remove it by sending `my_tag`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.remove_ticket_tags(1, TagsRequest(tags=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveTicketTagsErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.remove_ticket_tags(
    1, TagsRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveTicketTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket_id</code> | <code>int</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[TagsRequest](doi_t/models/tags_request.py) \| [TagsRequestDict](doi_t/models/tags_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[TagsResponse](doi_t/models/tags_response.py), [RemoveTicketTagsErrorBody](doi_t/errors/remove_ticket_tags_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TagsResponse](doi_t/models/tags_response.py)</code> -- OK - Tags removed (or already absent).

**On `Failure`**: `error` is <code>[RemoveTicketTagsErrorBody](doi_t/errors/remove_ticket_tags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_ticket(ticket_id: int, body: SupportV1TicketsRequest | SupportV1TicketsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportV1TicketsResponse, UpdateTicketErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a support request. Supports setting the request
`status` and/or `assignee`. DoiT employees may set any of `open`,
`pending`, `hold`, or `solved` and may set the `assignee`; customers may
set only `solved` (parity with the console "mark as resolved" action)
and may not set an assignee. `closed` is not settable via the API
(Zendesk auto-closes from `solved`). The `assignee` is a DoiT-employee
email, resolved server-side to a Zendesk agent; an email that does not
resolve to an active agent returns `400`. At least one mutable field
must be present. The response echoes the fields that were applied.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.support_requests.with_raw_response.update_ticket(1, SupportV1TicketsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportV1TicketsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTicketErrorBody
```

**Async**

```python
result = await async_client.support_requests.with_raw_response.update_ticket(1, SupportV1TicketsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportV1TicketsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTicketErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket_id</code> | <code>int</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[SupportV1TicketsRequest](doi_t/models/support_v1_tickets_request.py) \| [SupportV1TicketsRequestDict](doi_t/models/support_v1_tickets_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[SupportV1TicketsResponse](doi_t/models/support_v1_tickets_response.py), [UpdateTicketErrorBody](doi_t/errors/update_ticket_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportV1TicketsResponse](doi_t/models/support_v1_tickets_response.py)</code> -- OK - Request updated. Echoes the fields that were applied.

**On `Failure`**: `error` is <code>[UpdateTicketErrorBody](doi_t/errors/update_ticket_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](doi_t/apis/templates.py)

<details>
<summary><code>def get_cloudflow_template2(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowTemplate, GetCloudflowTemplate2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single CloudFlow template by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.templates.with_raw_response.get_cloudflow_template2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowTemplate2ErrorBody
```

**Async**

```python
result = await async_client.templates.with_raw_response.get_cloudflow_template2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCloudflowTemplate2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>template_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowTemplate](doi_t/models/cloudflow_template.py), [GetCloudflowTemplate2ErrorBody](doi_t/errors/get_cloudflow_template2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowTemplate](doi_t/models/cloudflow_template.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetCloudflowTemplate2ErrorBody](doi_t/errors/get_cloudflow_template2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cloudflow_templates2(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplates2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the catalogue of available CloudFlow templates (blueprints). Templates are
read-only. To create a flow from a template, use `POST /flows` with a `templateId`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.templates.with_raw_response.list_cloudflow_templates2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplateListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowTemplates2ErrorBody
```

**Async**

```python
result = await async_client.templates.with_raw_response.list_cloudflow_templates2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CloudflowTemplateListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCloudflowTemplates2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of templates to return (1–500). Defaults to 50.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to start from the beginning.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CloudflowTemplateListResponse](doi_t/models/cloudflow_template_list_response.py), [ListCloudflowTemplates2ErrorBody](doi_t/errors/list_cloudflow_templates2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CloudflowTemplateListResponse](doi_t/models/cloudflow_template_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCloudflowTemplates2ErrorBody](doi_t/errors/list_cloudflow_templates2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](doi_t/apis/users.py)

<details>
<summary><code>def cancel_invite(id_: str, idempotency_key: str, *, dry_run: bool | None = False, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CancelInviteResponse, CancelInviteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the invite as `Cancelled` and invalidates the invite token so any outstanding email
links stop working. The invite document is retained (soft cancel) — the user row remains
visible in `GET /iam/v1/users` with `inviteStatus: Cancelled`. Use `DELETE /iam/v1/users/{id}`
to fully remove the record.

Returns `404` if no invite exists for the given ID, and `409` if the invite is already cancelled.

Requires `usersManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.cancel_invite("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelInviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelInviteErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.cancel_invite("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelInviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelInviteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique ID of the invited user. |
| <code>idempotency_key</code> | <code>str</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. The server retains the key for at least 24 hours. |
| <code>dry_run</code> | <code>bool \| None</code> | If `true`, validates and simulates the operation without committing changes.<br>The response shape is identical to a real execution.<br>**Default**: <code>False</code> |
| <code>body</code> | <code>Any \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[CancelInviteResponse](doi_t/models/cancel_invite_response.py), [CancelInviteErrorBody](doi_t/errors/cancel_invite_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CancelInviteResponse](doi_t/models/cancel_invite_response.py)</code> -- OK - Invite cancelled.

**On `Failure`**: `error` is <code>[CancelInviteErrorBody](doi_t/errors/cancel_invite_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_user(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeleteUserResponse, DeleteUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.delete_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeleteUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.delete_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeleteUserResponse
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
| <code>id_</code> | <code>str</code> | The unique ID of the user to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[DeleteUserResponse](doi_t/models/delete_user_response.py), [DeleteUserErrorBody](doi_t/errors/delete_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeleteUserResponse](doi_t/models/delete_user_response.py)</code> -- OK - User deleted successfully.

**On `Failure`**: `error` is <code>[DeleteUserErrorBody](doi_t/errors/delete_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def invite_user(body: InviteUserRequest | InviteUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InviteResponse, InviteUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invites a new user to the organization with specified role and organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.invite_user(InviteUserRequest(email="user@example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InviteUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.invite_user(InviteUserRequest(email="user@example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InviteUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InviteUserRequest](doi_t/models/invite_user_request.py) \| [InviteUserRequestDict](doi_t/models/invite_user_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[InviteResponse](doi_t/models/invite_response.py), [InviteUserErrorBody](doi_t/errors/invite_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InviteResponse](doi_t/models/invite_response.py)</code> -- Created - User invitation created successfully.

**On `Failure`**: `error` is <code>[InviteUserErrorBody](doi_t/errors/invite_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_users(*, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListUsersResponseBody, ListUsersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of users in the organization, including both active users and invited users.
When the `email` query parameter is provided, returns only the user matching that email address.
If no user is found for the given email, an empty list is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.list_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListUsersResponseBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUsersErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.list_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListUsersResponseBody
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>EmailStr \| None</code> | Filter by exact email address. When provided, returns at most one user matching this email. The email is matched case-insensitively.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ListUsersResponseBody](doi_t/models/list_users_response_body.py), [ListUsersErrorBody](doi_t/errors/list_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListUsersResponseBody](doi_t/models/list_users_response_body.py)</code> -- OK - List of users returned.

**On `Failure`**: `error` is <code>[ListUsersErrorBody](doi_t/errors/list_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resend_invite(id_: str, idempotency_key: str, *, dry_run: bool | None = False, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResendInviteResponse, ResendInviteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so
old email links stop working), and triggers a fresh invitation email. Works on invites in
any state including `Cancelled` — resending a cancelled invite reactivates it to `Pending`.

Returns `404` if no invite exists for the given ID (never created, or already accepted and removed).

Requires `usersManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.resend_invite("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResendInviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendInviteErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.resend_invite("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResendInviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendInviteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique ID of the invited user. |
| <code>idempotency_key</code> | <code>str</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. The server retains the key for at least 24 hours. |
| <code>dry_run</code> | <code>bool \| None</code> | If `true`, validates and simulates the operation without committing changes.<br>The response shape is identical to a real execution.<br>**Default**: <code>False</code> |
| <code>body</code> | <code>Any \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[ResendInviteResponse](doi_t/models/resend_invite_response.py), [ResendInviteErrorBody](doi_t/errors/resend_invite_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResendInviteResponse](doi_t/models/resend_invite_response.py)</code> -- OK - Invite resent and expiry reset.

**On `Failure`**: `error` is <code>[ResendInviteErrorBody](doi_t/errors/resend_invite_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user(id_: str, body: UpdateUserRequest | UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateUserResponse, UpdateUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates user information, including name, job function, phone, language, and role.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.update_user("some example string", UpdateUserRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.update_user("some example string", UpdateUserRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateUserResponse
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
| <code>id_</code> | <code>str</code> | The unique ID of the user to update. |
| <code>body</code> | <code>[UpdateUserRequest](doi_t/models/update_user_request.py) \| [UpdateUserRequestDict](doi_t/models/update_user_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[UpdateUserResponse](doi_t/models/update_user_response.py), [UpdateUserErrorBody](doi_t/errors/update_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateUserResponse](doi_t/models/update_user_response.py)</code> -- OK - User updated successfully.

**On `Failure`**: `error` is <code>[UpdateUserErrorBody](doi_t/errors/update_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](doi_t/models/error.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WidgetsBeta

> Source: [WidgetsBeta](doi_t/apis/widgets_beta.py)

<details>
<summary><code>def get_widget(widget_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Widget, GetWidgetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest precomputed cached result for one widget. This read does not refresh or
recompute the widget synchronously.

Use either the customer-specific `id` returned by the list-widgets operation or one of these
stable aliases:

- `current-month-cloud-spend` — total cloud spend accumulated during the current calendar month.
- `current-month-cloud-forecast` — forecast of total cloud spend for the current calendar month.

The two concrete alias requests are:

- `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend`
- `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast`

Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential
resolves to one customer. When the credential can act on multiple customers, send
`X-Tenant-Id: ` to select the customer. A `403` response means the caller or
selected customer is not authorized or entitled to use this API.

The result's `period.endTime` is exclusive. Monetary `amount` values are decimal strings and
`currency` values are ISO 4217 currency codes. `monthToMonthGrowthPercentage` and
`monthToMonthGrowthAmount` are both `null` when no comparable prior-period value exists.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.widgets_beta.with_raw_response.get_widget(
    "current-month-cloud-spend", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Widget
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWidgetErrorBody
```

**Async**

```python
result = await async_client.widgets_beta.with_raw_response.get_widget(
    "current-month-cloud-spend", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Widget
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWidgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>widget_id</code> | <code>str</code> | Stable widget alias or customer-specific widget ID returned by listWidgets. Use<br>current-month-cloud-spend for current-month accumulated spend or<br>current-month-cloud-forecast for the current-month forecast. |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[Widget](doi_t/models/widget.py), [GetWidgetErrorBody](doi_t/errors/get_widget_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Widget](doi_t/models/widget.py)</code> -- OK - The widget and its latest precomputed result.

**On `Failure`**: `error` is <code>[GetWidgetErrorBody](doi_t/errors/get_widget_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 500, 503 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_widgets(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WidgetList, ListWidgetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete catalogue of preset widgets supported by the Analytics Widgets API.
Each entry contains a customer-specific `id` and a stable customer-facing `alias`; either
value can be passed to the get-widget operation. An `id` can vary by customer or service
tier, while an `alias` remains stable.

Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential
resolves to one customer. When the credential can act on multiple customers, send
`X-Tenant-Id: ` to select the customer. A `403` response means the caller or
selected customer is not authorized or entitled to use this API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.widgets_beta.with_raw_response.list_widgets(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WidgetList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWidgetsErrorBody
```

**Async**

```python
result = await async_client.widgets_beta.with_raw_response.list_widgets(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WidgetList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWidgetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_tenant_id</code> | <code>str \| None</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](doi_t/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](doi_t/core/results.py)&#91;[WidgetList](doi_t/models/widget_list.py), [ListWidgetsErrorBody](doi_t/errors/list_widgets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WidgetList](doi_t/models/widget_list.py)</code> -- OK - The complete supported widget catalogue.

**On `Failure`**: `error` is <code>[ListWidgetsErrorBody](doi_t/errors/list_widgets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[ProblemDetails](doi_t/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](doi_t/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

