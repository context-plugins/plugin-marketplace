# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [DoiTClient](doi_t/client.py)

## AccountTeam

> Source: [AccountTeam](doi_t/apis/account_team.py)

<details>
<summary><code>def list_account_team(*, request_options: RequestOptionsOrDict | None = None) -> CustomersV1AccountTeamResponse</code></summary>

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
try:
    response = client.account_team.list_account_team()
    # TODO: Handle 'response' of type CustomersV1AccountTeamResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAccountTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.account_team.list_account_team()
    # TODO: Handle 'response' of type CustomersV1AccountTeamResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAccountTeamErrorBody
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

**OnSuccess**: <code>[CustomersV1AccountTeamResponse](doi_t/models/customers_v1_account_team_response.py)</code> -- OK - List of account managers returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAccountTeamErrorBody](doi_t/errors/list_account_team_error.py)&#93;</code>

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
<summary><code>def create_alert(body: AlertRequest | AlertRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Alert</code></summary>

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
try:
    response = client.alerts.create_alert(
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
    # TODO: Handle 'response' of type Alert
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAlertErrorBody
```

**Async**

```python
try:
    response = await async_client.alerts.create_alert(
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
    # TODO: Handle 'response' of type Alert
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAlertErrorBody
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

**OnSuccess**: <code>[Alert](doi_t/models/alert.py)</code> -- Created - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateAlertErrorBody](doi_t/errors/create_alert_error.py)&#93;</code>

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
<summary><code>def delete_alert(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.alerts.delete_alert("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAlertErrorBody
```

**Async**

```python
try:
    await async_client.alerts.delete_alert("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAlertErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteAlertErrorBody](doi_t/errors/delete_alert_error.py)&#93;</code>

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
<summary><code>def get_alert(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Alert</code></summary>

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
try:
    response = client.alerts.get_alert("some example string")
    # TODO: Handle 'response' of type Alert
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAlertErrorBody
```

**Async**

```python
try:
    response = await async_client.alerts.get_alert("some example string")
    # TODO: Handle 'response' of type Alert
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAlertErrorBody
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

**OnSuccess**: <code>[Alert](doi_t/models/alert.py)</code> -- OK - Alert returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAlertErrorBody](doi_t/errors/get_alert_error.py)&#93;</code>

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
<summary><code>def list_alert_slack_channels(*, name_contains: str | None = None, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AlertSlackChannelList</code></summary>

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
try:
    response = client.alerts.list_alert_slack_channels()
    # TODO: Handle 'response' of type AlertSlackChannelList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAlertSlackChannelsErrorBody
```

**Async**

```python
try:
    response = await async_client.alerts.list_alert_slack_channels()
    # TODO: Handle 'response' of type AlertSlackChannelList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAlertSlackChannelsErrorBody
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

**OnSuccess**: <code>[AlertSlackChannelList](doi_t/models/alert_slack_channel_list.py)</code> -- Eligible channels and connection status.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAlertSlackChannelsErrorBody](doi_t/errors/list_alert_slack_channels_error.py)&#93;</code>

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
<summary><code>def list_alerts(*, sort_by: SortByOrStr | None = None, sort_order: SortOrderOrStr | None = None, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ExternalAlertList</code></summary>

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
try:
    response = client.alerts.list_alerts(filter_="name:test", name_contains="monthly spend")
    # TODO: Handle 'response' of type ExternalAlertList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAlertsErrorBody
```

**Async**

```python
try:
    response = await async_client.alerts.list_alerts(filter_="name:test", name_contains="monthly spend")
    # TODO: Handle 'response' of type ExternalAlertList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAlertsErrorBody
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

**OnSuccess**: <code>[ExternalAlertList](doi_t/models/external_alert_list.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAlertsErrorBody](doi_t/errors/list_alerts_error.py)&#93;</code>

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
<summary><code>def update_alert(id_: str, body: AlertUpdateRequest | AlertUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Alert</code></summary>

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
try:
    response = client.alerts.update_alert(
        "some example string",
        AlertUpdateRequest(
            recipients_slack_channels=[AlertSlackChannelRequest(id="C0123456789", workspace="acme")],
            recipients=["finops@example.com"],
        ),
    )
    # TODO: Handle 'response' of type Alert
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAlertErrorBody
```

**Async**

```python
try:
    response = await async_client.alerts.update_alert(
        "some example string",
        AlertUpdateRequest(
            recipients_slack_channels=[AlertSlackChannelRequest(id="C0123456789", workspace="acme")],
            recipients=["finops@example.com"],
        ),
    )
    # TODO: Handle 'response' of type Alert
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAlertErrorBody
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

**OnSuccess**: <code>[Alert](doi_t/models/alert.py)</code> -- OK - Alert updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateAlertErrorBody](doi_t/errors/update_alert_error.py)&#93;</code>

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
<summary><code>def create_allocation(*, body: CreateAllocationRequest | CreateAllocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Allocation</code></summary>

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
try:
    response = client.allocations.create_allocation()
    # TODO: Handle 'response' of type Allocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAllocationErrorBody
```

**Async**

```python
try:
    response = await async_client.allocations.create_allocation()
    # TODO: Handle 'response' of type Allocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAllocationErrorBody
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

**OnSuccess**: <code>[Allocation](doi_t/models/allocation.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateAllocationErrorBody](doi_t/errors/create_allocation_error.py)&#93;</code>

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
<summary><code>def delete_allocation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.allocations.delete_allocation("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAllocationErrorBody
```

**Async**

```python
try:
    response = await async_client.allocations.delete_allocation("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAllocationErrorBody
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

**OnSuccess**: <code>Any</code> -- OK - Allocation deleted.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteAllocationErrorBody](doi_t/errors/delete_allocation_error.py)&#93;</code>

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
<summary><code>def get_allocation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Allocation</code></summary>

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
try:
    response = client.allocations.get_allocation("some example string")
    # TODO: Handle 'response' of type Allocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAllocationErrorBody
```

**Async**

```python
try:
    response = await async_client.allocations.get_allocation("some example string")
    # TODO: Handle 'response' of type Allocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAllocationErrorBody
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

**OnSuccess**: <code>[Allocation](doi_t/models/allocation.py)</code> -- OK - Allocation returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAllocationErrorBody](doi_t/errors/get_allocation_error.py)&#93;</code>

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
<summary><code>def list_allocations(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, sort_by: SortByDoiTAllocationsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1AllocationsResponse</code></summary>

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
try:
    response = client.allocations.list_allocations(filter_="type:custom", name_contains="monthly spend")
    # TODO: Handle 'response' of type AnalyticsV1AllocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllocationsErrorBody
```

**Async**

```python
try:
    response = await async_client.allocations.list_allocations(filter_="type:custom", name_contains="monthly spend")
    # TODO: Handle 'response' of type AnalyticsV1AllocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllocationsErrorBody
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

**OnSuccess**: <code>[AnalyticsV1AllocationsResponse](doi_t/models/analytics_v1_allocations_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAllocationsErrorBody](doi_t/errors/list_allocations_error.py)&#93;</code>

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
<summary><code>def update_allocation(id_: str, *, body: UpdateAllocationRequest | UpdateAllocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Allocation</code></summary>

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
try:
    response = client.allocations.update_allocation("some example string")
    # TODO: Handle 'response' of type Allocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAllocationErrorBody
```

**Async**

```python
try:
    response = await async_client.allocations.update_allocation("some example string")
    # TODO: Handle 'response' of type Allocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAllocationErrorBody
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

**OnSuccess**: <code>[Allocation](doi_t/models/allocation.py)</code> -- OK - Allocation updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateAllocationErrorBody](doi_t/errors/update_allocation_error.py)&#93;</code>

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
<summary><code>def create_annotation(body: CreateAnnotationRequest | CreateAnnotationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AnnotationListItem</code></summary>

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
try:
    response = client.annotations.create_annotation(
        CreateAnnotationRequest(
            content="some example string", timestamp=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc)
        ),
    )
    # TODO: Handle 'response' of type AnnotationListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAnnotationErrorBody
```

**Async**

```python
try:
    response = await async_client.annotations.create_annotation(
        CreateAnnotationRequest(
            content="some example string", timestamp=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc)
        ),
    )
    # TODO: Handle 'response' of type AnnotationListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAnnotationErrorBody
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

**OnSuccess**: <code>[AnnotationListItem](doi_t/models/annotation_list_item.py)</code> -- Created - Annotation created successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateAnnotationErrorBody](doi_t/errors/create_annotation_error.py)&#93;</code>

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
<summary><code>def delete_annotation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.annotations.delete_annotation("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAnnotationErrorBody
```

**Async**

```python
try:
    response = await async_client.annotations.delete_annotation("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAnnotationErrorBody
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

**OnSuccess**: <code>Any</code> -- OK - Annotation deleted.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteAnnotationErrorBody](doi_t/errors/delete_annotation_error.py)&#93;</code>

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
<summary><code>def get_annotation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> AnnotationListItem</code></summary>

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
try:
    response = client.annotations.get_annotation("some example string")
    # TODO: Handle 'response' of type AnnotationListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnnotationErrorBody
```

**Async**

```python
try:
    response = await async_client.annotations.get_annotation("some example string")
    # TODO: Handle 'response' of type AnnotationListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnnotationErrorBody
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

**OnSuccess**: <code>[AnnotationListItem](doi_t/models/annotation_list_item.py)</code> -- OK - Annotation returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAnnotationErrorBody](doi_t/errors/get_annotation_error.py)&#93;</code>

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
<summary><code>def list_annotations(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, sort_by: SortByDoiTAnnotationsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1AnnotationsResponse</code></summary>

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
try:
    response = client.annotations.list_annotations(filter_="content:budget")
    # TODO: Handle 'response' of type AnalyticsV1AnnotationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnnotationsErrorBody
```

**Async**

```python
try:
    response = await async_client.annotations.list_annotations(filter_="content:budget")
    # TODO: Handle 'response' of type AnalyticsV1AnnotationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnnotationsErrorBody
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

**OnSuccess**: <code>[AnalyticsV1AnnotationsResponse](doi_t/models/analytics_v1_annotations_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAnnotationsErrorBody](doi_t/errors/list_annotations_error.py)&#93;</code>

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
<summary><code>def update_annotation(id_: str, *, body: UpdateAnnotationRequest | UpdateAnnotationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AnnotationListItem</code></summary>

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
try:
    response = client.annotations.update_annotation(
        "some example string", body=UpdateAnnotationRequest(content="Updated annotation content")
    )
    # TODO: Handle 'response' of type AnnotationListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAnnotationErrorBody
```

**Async**

```python
try:
    response = await async_client.annotations.update_annotation(
        "some example string", body=UpdateAnnotationRequest(content="Updated annotation content")
    )
    # TODO: Handle 'response' of type AnnotationListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAnnotationErrorBody
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

**OnSuccess**: <code>[AnnotationListItem](doi_t/models/annotation_list_item.py)</code> -- OK - Annotation updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateAnnotationErrorBody](doi_t/errors/update_annotation_error.py)&#93;</code>

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
<summary><code>def get_anomaly(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> AnomaliesV1Response</code></summary>

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
try:
    response = client.anomalies.get_anomaly("some example string")
    # TODO: Handle 'response' of type AnomaliesV1Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnomalyErrorBody
```

**Async**

```python
try:
    response = await async_client.anomalies.get_anomaly("some example string")
    # TODO: Handle 'response' of type AnomaliesV1Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnomalyErrorBody
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

**OnSuccess**: <code>[AnomaliesV1Response](doi_t/models/anomalies_v1_response.py)</code> -- OK - Anomaly returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAnomalyErrorBody](doi_t/errors/get_anomaly_error.py)&#93;</code>

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
<summary><code>def get_anomaly_explanation(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> AnomaliesV1ExplanationResponse</code></summary>

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
try:
    response = client.anomalies.get_anomaly_explanation("some example string")
    # TODO: Handle 'response' of type AnomaliesV1ExplanationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnomalyExplanationErrorBody
```

**Async**

```python
try:
    response = await async_client.anomalies.get_anomaly_explanation("some example string")
    # TODO: Handle 'response' of type AnomaliesV1ExplanationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnomalyExplanationErrorBody
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

**OnSuccess**: <code>[AnomaliesV1ExplanationResponse](doi_t/models/anomalies_v1_explanation_response.py)</code> -- OK - Anomaly explanation returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAnomalyExplanationErrorBody](doi_t/errors/get_anomaly_explanation_error.py)&#93;</code>

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
<summary><code>def list_anomalies(*, min_creation_time: int | None = None, max_creation_time: int | None = None, filter_: str | None = None, sort_by: SortByDoiTAnomaliesApiOrStr | None = SortByDoiTAnomaliesApi.START_TIME, sort_order: SortOrderOrStr | None = None, max_results: int | None = None, page_token: str | None = None, include_notifications: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> AnomaliesResponse</code></summary>

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
try:
    response = client.anomalies.list_anomalies(filter_="severityLevel:critical")
    # TODO: Handle 'response' of type AnomaliesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnomaliesErrorBody
```

**Async**

```python
try:
    response = await async_client.anomalies.list_anomalies(filter_="severityLevel:critical")
    # TODO: Handle 'response' of type AnomaliesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnomaliesErrorBody
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

**OnSuccess**: <code>[AnomaliesResponse](doi_t/models/anomalies_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAnomaliesErrorBody](doi_t/errors/list_anomalies_error.py)&#93;</code>

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
<summary><code>def patch_anomaly(id_: str, body: AnomalyStatusUpdate | AnomalyStatusUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.anomalies.patch_anomaly("some example string", AnomalyStatusUpdate(customer_feedback=CustomerFeedback()))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchAnomalyErrorBody
```

**Async**

```python
try:
    await async_client.anomalies.patch_anomaly(
        "some example string", AnomalyStatusUpdate(customer_feedback=CustomerFeedback())
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchAnomalyErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[PatchAnomalyErrorBody](doi_t/errors/patch_anomaly_error.py)&#93;</code>

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
<summary><code>def create_asset(*, type_: str | None = "amazon-web-services", mode: str | None = "New", account_name: str | None = "Account name", root_email: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AssetResponse</code></summary>

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
try:
    response = client.assets.create_asset()
    # TODO: Handle 'response' of type AssetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAssetErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.create_asset()
    # TODO: Handle 'response' of type AssetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAssetErrorBody
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

**OnSuccess**: <code>[AssetResponse](doi_t/models/asset_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateAssetErrorBody](doi_t/errors/create_asset_error.py)&#93;</code>

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
<summary><code>def get_asset(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> AssetItemDetailed</code></summary>

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
try:
    response = client.assets.get_asset("some example string")
    # TODO: Handle 'response' of type AssetItemDetailed
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAssetErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.get_asset("some example string")
    # TODO: Handle 'response' of type AssetItemDetailed
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAssetErrorBody
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

**OnSuccess**: <code>[AssetItemDetailed](doi_t/models/asset_item_detailed.py)</code> -- OK - Asset details returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAssetErrorBody](doi_t/errors/get_asset_error.py)&#93;</code>

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
<summary><code>def id_of_asset(id_: str, *, body: BillingV1AssetsRequest | BillingV1AssetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BillingV1AssetsResponse1</code></summary>

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
try:
    response = client.assets.id_of_asset("some example string")
    # TODO: Handle 'response' of type BillingV1AssetsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdOfAssetErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.id_of_asset("some example string")
    # TODO: Handle 'response' of type BillingV1AssetsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdOfAssetErrorBody
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

**OnSuccess**: <code>[BillingV1AssetsResponse1](doi_t/models/billing_v1_assets_response1.py)</code> -- OK - Asset updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[IdOfAssetErrorBody](doi_t/errors/id_of_asset_error.py)&#93;</code>

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
<summary><code>def id_of_assets(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillingV1AssetsResponse</code></summary>

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
try:
    response = client.assets.id_of_assets()
    # TODO: Handle 'response' of type BillingV1AssetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdOfAssetsErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.id_of_assets()
    # TODO: Handle 'response' of type BillingV1AssetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdOfAssetsErrorBody
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

**OnSuccess**: <code>[BillingV1AssetsResponse](doi_t/models/billing_v1_assets_response.py)</code> -- OK - List of available assets returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[IdOfAssetsErrorBody](doi_t/errors/id_of_assets_error.py)&#93;</code>

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
<summary><code>def validate(*, request_options: RequestOptionsOrDict | None = None) -> ValidateResponse</code></summary>

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
try:
    response = client.auth_api.validate()
    # TODO: Handle 'response' of type ValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateErrorBody
```

**Async**

```python
try:
    response = await async_client.auth_api.validate()
    # TODO: Handle 'response' of type ValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateErrorBody
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

**OnSuccess**: <code>[ValidateResponse](doi_t/models/validate_response.py)</code> -- OK - The domain and email of the API user returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ValidateErrorBody](doi_t/errors/validate_error.py)&#93;</code>

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
<summary><code>def ask_ava_streaming(body: AvaAskRequest | AvaAskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EventStream[str]</code></summary>

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
try:
    response = client.ava.ask_ava_streaming(AvaAskRequest(question="some example string"))
    # TODO: Handle 'response' of type EventStream[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskAvaStreamingErrorBody
```

**Async**

```python
try:
    response = await async_client.ava.ask_ava_streaming(AvaAskRequest(question="some example string"))
    # TODO: Handle 'response' of type AsyncEventStream[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskAvaStreamingErrorBody
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

**OnSuccess**: <code>EventStream&#91;str&#93;</code> -- OK - SSE stream of Ava response events.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AskAvaStreamingErrorBody](doi_t/errors/ask_ava_streaming_error.py)&#93;</code>

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
<summary><code>def ask_ava_sync(body: AvaAskSyncRequest | AvaAskSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AvaAskSyncResponse</code></summary>

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
try:
    response = client.ava.ask_ava_sync(AvaAskSyncRequest(question="some example string"))
    # TODO: Handle 'response' of type AvaAskSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskAvaSyncErrorBody
```

**Async**

```python
try:
    response = await async_client.ava.ask_ava_sync(AvaAskSyncRequest(question="some example string"))
    # TODO: Handle 'response' of type AvaAskSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskAvaSyncErrorBody
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

**OnSuccess**: <code>[AvaAskSyncResponse](doi_t/models/ava_ask_sync_response.py)</code> -- OK - Ava response returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AskAvaSyncErrorBody](doi_t/errors/ask_ava_sync_error.py)&#93;</code>

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
<summary><code>def ava_feedback(body: AvaFeedbackRequest | AvaFeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.ava.ava_feedback(
        AvaFeedbackRequest(
            conversation_id="some example string", answer_id="some example string", feedback=Feedback(positive=True)
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AvaFeedbackErrorBody
```

**Async**

```python
try:
    await async_client.ava.ava_feedback(
        AvaFeedbackRequest(
            conversation_id="some example string", answer_id="some example string", feedback=Feedback(positive=True)
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AvaFeedbackErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AvaFeedbackErrorBody](doi_t/errors/ava_feedback_error.py)&#93;</code>

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
<summary><code>def delete_ava_conversation(conversation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.ava.delete_ava_conversation("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAvaConversationErrorBody
```

**Async**

```python
try:
    await async_client.ava.delete_ava_conversation("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAvaConversationErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteAvaConversationErrorBody](doi_t/errors/delete_ava_conversation_error.py)&#93;</code>

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
<summary><code>def get_billing_explainer_per_payer(invoice_month: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillingExplainerCustomer</code></summary>

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
try:
    response = client.billing_explainer_api.get_billing_explainer_per_payer(
        "2026-06", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type BillingExplainerCustomer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillingExplainerPerPayerErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_explainer_api.get_billing_explainer_per_payer(
        "2026-06", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type BillingExplainerCustomer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillingExplainerPerPayerErrorBody
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

**OnSuccess**: <code>[BillingExplainerCustomer](doi_t/models/billing_explainer_customer.py)</code> -- Billing explainer returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetBillingExplainerPerPayerErrorBody](doi_t/errors/get_billing_explainer_per_payer_error.py)&#93;</code>

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
<summary><code>def get_entity_invoice_explainer(billing_profile_id: str, invoice_number: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EntityInvoiceExplainer</code></summary>

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
try:
    response = client.billing_explainer_api.get_entity_invoice_explainer(
        "CUST-12345", "IN244004936", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type EntityInvoiceExplainer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntityInvoiceExplainerErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_explainer_api.get_entity_invoice_explainer(
        "CUST-12345", "IN244004936", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type EntityInvoiceExplainer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntityInvoiceExplainerErrorBody
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

**OnSuccess**: <code>[EntityInvoiceExplainer](doi_t/models/entity_invoice_explainer.py)</code> -- Billing explainer returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetEntityInvoiceExplainerErrorBody](doi_t/errors/get_entity_invoice_explainer_error.py)&#93;</code>

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
<summary><code>def create_billing_transfer_end_customer_mappings(body: EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EndCustomerMappingBatchResult</code></summary>

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
try:
    response = client.billing_transfer.create_billing_transfer_end_customer_mappings(
        EndCustomerMappingBatchCreate(
            dpma_id="some example string",
            reseller_pma_account_id="some example string",
            items=[EndCustomerMappingItem(ec_account_id="some example string", ec_customer_id="some example string")],
        ),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type EndCustomerMappingBatchResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillingTransferEndCustomerMappingsErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.create_billing_transfer_end_customer_mappings(
        EndCustomerMappingBatchCreate(
            dpma_id="some example string",
            reseller_pma_account_id="some example string",
            items=[EndCustomerMappingItem(ec_account_id="some example string", ec_customer_id="some example string")],
        ),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type EndCustomerMappingBatchResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillingTransferEndCustomerMappingsErrorBody
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

**OnSuccess**: <code>[EndCustomerMappingBatchResult](doi_t/models/end_customer_mapping_batch_result.py)</code> -- OK - Batch processed; see `results` for per-item outcomes and `invalidItems` for any items rejected before processing.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateBillingTransferEndCustomerMappingsErrorBody](doi_t/errors/create_billing_transfer_end_customer_mappings_error.py)&#93;</code>

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
<summary><code>def create_billing_transfer_reseller_handshakes(idempotency_key: str, body: ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict, *, dry_run: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ResellerHandshakeBatchResult</code></summary>

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
try:
    response = client.billing_transfer.create_billing_transfer_reseller_handshakes(
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
    # TODO: Handle 'response' of type ResellerHandshakeBatchResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillingTransferResellerHandshakesErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.create_billing_transfer_reseller_handshakes(
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
    # TODO: Handle 'response' of type ResellerHandshakeBatchResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillingTransferResellerHandshakesErrorBody
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

**OnSuccess**: <code>[ResellerHandshakeBatchResult](doi_t/models/reseller_handshake_batch_result.py)</code> -- OK - Batch processed; see `results` and `summary` for per-item outcomes.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateBillingTransferResellerHandshakesErrorBody](doi_t/errors/create_billing_transfer_reseller_handshakes_error.py)&#93;</code>

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
<summary><code>def get_billing_transfer_program_management_accounts_status(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ProgramManagementAccountsStatusResponse</code></summary>

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
try:
    response = client.billing_transfer.get_billing_transfer_program_management_accounts_status(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ProgramManagementAccountsStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillingTransferProgramManagementAccountsStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.get_billing_transfer_program_management_accounts_status(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ProgramManagementAccountsStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillingTransferProgramManagementAccountsStatusErrorBody
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

**OnSuccess**: <code>[ProgramManagementAccountsStatusResponse](doi_t/models/program_management_accounts_status_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetBillingTransferProgramManagementAccountsStatusErrorBody](doi_t/errors/get_billing_transfer_program_management_accounts_status_error.py)&#93;</code>

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
<summary><code>def list_billing_transfer_end_customers(dpma_id: str, reseller_pma_account_id: str, *, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListEndCustomersResponse</code></summary>

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
try:
    response = client.billing_transfer.list_billing_transfer_end_customers(
        "some example string", "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ListEndCustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferEndCustomersErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.list_billing_transfer_end_customers(
        "some example string", "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ListEndCustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferEndCustomersErrorBody
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

**OnSuccess**: <code>[ListEndCustomersResponse](doi_t/models/list_end_customers_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListBillingTransferEndCustomersErrorBody](doi_t/errors/list_billing_transfer_end_customers_error.py)&#93;</code>

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
<summary><code>def list_billing_transfer_end_customers_by_reseller(reseller_pma_account_id: str, *, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListEndCustomersResponse</code></summary>

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
try:
    response = client.billing_transfer.list_billing_transfer_end_customers_by_reseller(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ListEndCustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferEndCustomersByResellerErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.list_billing_transfer_end_customers_by_reseller(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ListEndCustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferEndCustomersByResellerErrorBody
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

**OnSuccess**: <code>[ListEndCustomersResponse](doi_t/models/list_end_customers_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListBillingTransferEndCustomersByResellerErrorBody](doi_t/errors/list_billing_transfer_end_customers_by_reseller_error.py)&#93;</code>

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
<summary><code>def list_billing_transfer_program_management_accounts(*, max_results: int | None = 50, page_token: str | None = None, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ProgramManagementAccountList</code></summary>

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
try:
    response = client.billing_transfer.list_billing_transfer_program_management_accounts(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ProgramManagementAccountList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferProgramManagementAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.list_billing_transfer_program_management_accounts(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ProgramManagementAccountList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferProgramManagementAccountsErrorBody
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

**OnSuccess**: <code>[ProgramManagementAccountList](doi_t/models/program_management_account_list.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListBillingTransferProgramManagementAccountsErrorBody](doi_t/errors/list_billing_transfer_program_management_accounts_error.py)&#93;</code>

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
<summary><code>def list_billing_transfer_reseller_accounts(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResellerAccountsResponse</code></summary>

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
try:
    response = client.billing_transfer.list_billing_transfer_reseller_accounts(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type ListResellerAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferResellerAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.list_billing_transfer_reseller_accounts(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ListResellerAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferResellerAccountsErrorBody
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

**OnSuccess**: <code>[ListResellerAccountsResponse](doi_t/models/list_reseller_accounts_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListBillingTransferResellerAccountsErrorBody](doi_t/errors/list_billing_transfer_reseller_accounts_error.py)&#93;</code>

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
<summary><code>def list_billing_transfer_reseller_accounts_with_tenants(*, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResellerAccountsWithTenantsResponse</code></summary>

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
try:
    response = client.billing_transfer.list_billing_transfer_reseller_accounts_with_tenants(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ListResellerAccountsWithTenantsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferResellerAccountsWithTenantsErrorBody
```

**Async**

```python
try:
    response = await async_client.billing_transfer.list_billing_transfer_reseller_accounts_with_tenants(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type ListResellerAccountsWithTenantsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingTransferResellerAccountsWithTenantsErrorBody
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

**OnSuccess**: <code>[ListResellerAccountsWithTenantsResponse](doi_t/models/list_reseller_accounts_with_tenants_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListBillingTransferResellerAccountsWithTenantsErrorBody](doi_t/errors/list_billing_transfer_reseller_accounts_with_tenants_error.py)&#93;</code>

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
<summary><code>def accept_budget_suggestion(id_: str, body: BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1BudgetSuggestionsActionsAcceptResponse</code></summary>

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
try:
    response = client.budget_suggestions.accept_budget_suggestion(
        "some example string", BudgetSuggestionAcceptRequest(budget_id="some example string")
    )
    # TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsAcceptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptBudgetSuggestionErrorBody
```

**Async**

```python
try:
    response = await async_client.budget_suggestions.accept_budget_suggestion(
        "some example string", BudgetSuggestionAcceptRequest(budget_id="some example string")
    )
    # TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsAcceptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptBudgetSuggestionErrorBody
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

**OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsActionsAcceptResponse](doi_t/models/analytics_v1_budget_suggestions_actions_accept_response.py)</code> -- OK - The suggestion was accepted and linked to the budget.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AcceptBudgetSuggestionErrorBody](doi_t/errors/accept_budget_suggestion_error.py)&#93;</code>

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
<summary><code>def dismiss_budget_suggestion(id_: str, *, body: BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1BudgetSuggestionsActionsDismissResponse</code></summary>

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
try:
    response = client.budget_suggestions.dismiss_budget_suggestion("some example string")
    # TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsDismissResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DismissBudgetSuggestionErrorBody
```

**Async**

```python
try:
    response = await async_client.budget_suggestions.dismiss_budget_suggestion("some example string")
    # TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsDismissResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DismissBudgetSuggestionErrorBody
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

**OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsActionsDismissResponse](doi_t/models/analytics_v1_budget_suggestions_actions_dismiss_response.py)</code> -- OK - The suggestion was dismissed.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DismissBudgetSuggestionErrorBody](doi_t/errors/dismiss_budget_suggestion_error.py)&#93;</code>

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
<summary><code>def list_budget_suggestions(*, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1BudgetSuggestionsResponse</code></summary>

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
try:
    response = client.budget_suggestions.list_budget_suggestions()
    # TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetSuggestionsErrorBody
```

**Async**

```python
try:
    response = await async_client.budget_suggestions.list_budget_suggestions()
    # TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetSuggestionsErrorBody
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

**OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsResponse](doi_t/models/analytics_v1_budget_suggestions_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListBudgetSuggestionsErrorBody](doi_t/errors/list_budget_suggestions_error.py)&#93;</code>

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
<summary><code>def create_budget(*, body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BudgetApi</code></summary>

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
try:
    response = client.budgets.create_budget(
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
    # TODO: Handle 'response' of type BudgetApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBudgetErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.create_budget(
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
    # TODO: Handle 'response' of type BudgetApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBudgetErrorBody
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

**OnSuccess**: <code>[BudgetApi](doi_t/models/budget_api.py)</code> -- Created - New budget created.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateBudgetErrorBody](doi_t/errors/create_budget_error.py)&#93;</code>

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
<summary><code>def delete_budget(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.budgets.delete_budget("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBudgetErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.delete_budget("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBudgetErrorBody
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

**OnSuccess**: <code>Any</code> -- OK - Budget deleted.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteBudgetErrorBody](doi_t/errors/delete_budget_error.py)&#93;</code>

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
<summary><code>def get_budget(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> BudgetApi</code></summary>

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
try:
    response = client.budgets.get_budget("some example string")
    # TODO: Handle 'response' of type BudgetApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBudgetErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.get_budget("some example string")
    # TODO: Handle 'response' of type BudgetApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBudgetErrorBody
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

**OnSuccess**: <code>[BudgetApi](doi_t/models/budget_api.py)</code> -- OK - Budget details returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetBudgetErrorBody](doi_t/errors/get_budget_error.py)&#93;</code>

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
<summary><code>def list_budgets(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1BudgetsResponse</code></summary>

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
try:
    response = client.budgets.list_budgets(filter_="riskStatus:atRisk", name_contains="monthly spend")
    # TODO: Handle 'response' of type AnalyticsV1BudgetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetsErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.list_budgets(filter_="riskStatus:atRisk", name_contains="monthly spend")
    # TODO: Handle 'response' of type AnalyticsV1BudgetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetsErrorBody
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

**OnSuccess**: <code>[AnalyticsV1BudgetsResponse](doi_t/models/analytics_v1_budgets_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListBudgetsErrorBody](doi_t/errors/list_budgets_error.py)&#93;</code>

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
<summary><code>def update_budget(id_: str, *, body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BudgetApi</code></summary>

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
try:
    response = client.budgets.update_budget("some example string")
    # TODO: Handle 'response' of type BudgetApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBudgetErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.update_budget("some example string")
    # TODO: Handle 'response' of type BudgetApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBudgetErrorBody
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

**OnSuccess**: <code>[BudgetApi](doi_t/models/budget_api.py)</code> -- OK - Budget updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateBudgetErrorBody](doi_t/errors/update_budget_error.py)&#93;</code>

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
<summary><code>def create_account_role(body: CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AwsAccountResponse</code></summary>

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
try:
    response = client.cloud_connect.create_account_role(
        CoreV1CloudconnectAwsAccountsRequest(
            account_id="some example string", role_arn="some example string", enabled_features=["some example string"]
        ),
    )
    # TODO: Handle 'response' of type AwsAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAccountRoleErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_connect.create_account_role(
        CoreV1CloudconnectAwsAccountsRequest(
            account_id="some example string", role_arn="some example string", enabled_features=["some example string"]
        ),
    )
    # TODO: Handle 'response' of type AwsAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAccountRoleErrorBody
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

**OnSuccess**: <code>[AwsAccountResponse](doi_t/models/aws_account_response.py)</code> -- OK - Role created/updated successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateAccountRoleErrorBody](doi_t/errors/create_account_role_error.py)&#93;</code>

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
<summary><code>def delete_account_role(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.cloud_connect.delete_account_role("123456789012")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAccountRoleErrorBody
```

**Async**

```python
try:
    await async_client.cloud_connect.delete_account_role("123456789012")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAccountRoleErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteAccountRoleErrorBody](doi_t/errors/delete_account_role_error.py)&#93;</code>

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
<summary><code>def get_aws_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> AwsAccountResponse</code></summary>

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
try:
    response = client.cloud_connect.get_aws_account("123456789012")
    # TODO: Handle 'response' of type AwsAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_connect.get_aws_account("123456789012")
    # TODO: Handle 'response' of type AwsAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsAccountErrorBody
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

**OnSuccess**: <code>[AwsAccountResponse](doi_t/models/aws_account_response.py)</code> -- OK - Account details returned successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAwsAccountErrorBody](doi_t/errors/get_aws_account_error.py)&#93;</code>

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
<summary><code>def get_cloud_connect_supported_features(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SupportedFeaturesResponse</code></summary>

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
try:
    response = client.cloud_connect.get_cloud_connect_supported_features("some example string")
    # TODO: Handle 'response' of type SupportedFeaturesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudConnectSupportedFeaturesErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_connect.get_cloud_connect_supported_features("some example string")
    # TODO: Handle 'response' of type SupportedFeaturesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudConnectSupportedFeaturesErrorBody
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

**OnSuccess**: <code>[SupportedFeaturesResponse](doi_t/models/supported_features_response.py)</code> -- OK - Supported features returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudConnectSupportedFeaturesErrorBody](doi_t/errors/get_cloud_connect_supported_features_error.py)&#93;</code>

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
<summary><code>def update_aws_feature(account_id: str, body: CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> AwsAccountResponse</code></summary>

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
try:
    response = client.cloud_connect.update_aws_feature(
        "123456789012", CoreV1CloudconnectAwsAccountsRequest1(enabled_features=["some example string"])
    )
    # TODO: Handle 'response' of type AwsAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAwsFeatureErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_connect.update_aws_feature(
        "123456789012", CoreV1CloudconnectAwsAccountsRequest1(enabled_features=["some example string"])
    )
    # TODO: Handle 'response' of type AwsAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAwsFeatureErrorBody
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

**OnSuccess**: <code>[AwsAccountResponse](doi_t/models/aws_account_response.py)</code> -- OK - Feature updated successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateAwsFeatureErrorBody](doi_t/errors/update_aws_feature_error.py)&#93;</code>

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
<summary><code>def export_cloud_diagram_json(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> CloudDiagramExportJsonResponse</code></summary>

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
try:
    response = client.cloud_diagrams.export_cloud_diagram_json("some example string")
    # TODO: Handle 'response' of type CloudDiagramExportJsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportCloudDiagramJsonErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.export_cloud_diagram_json("some example string")
    # TODO: Handle 'response' of type CloudDiagramExportJsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportCloudDiagramJsonErrorBody
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

**OnSuccess**: <code>[CloudDiagramExportJsonResponse](doi_t/models/cloud_diagram_export_json_response.py)</code> -- OK - Diagram exported as JSON.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ExportCloudDiagramJsonErrorBody](doi_t/errors/export_cloud_diagram_json_error.py)&#93;</code>

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
<summary><code>def find_cloud_diagrams(body: FindCloudDiagramsRequest | FindCloudDiagramsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[FindCloudDiagramsResponse]</code></summary>

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
try:
    response = client.cloud_diagrams.find_cloud_diagrams(FindCloudDiagramsRequest(resources=["some example string"]))
    # TODO: Handle 'response' of type list[FindCloudDiagramsResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindCloudDiagramsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.find_cloud_diagrams(
        FindCloudDiagramsRequest(resources=["some example string"])
    )
    # TODO: Handle 'response' of type list[FindCloudDiagramsResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindCloudDiagramsErrorBody
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

**OnSuccess**: <code>list&#91;[FindCloudDiagramsResponse](doi_t/models/find_cloud_diagrams_response.py)&#93;</code> -- OK - Diagram URLs matching the criteria returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[FindCloudDiagramsErrorBody](doi_t/errors/find_cloud_diagrams_error.py)&#93;</code>

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
<summary><code>def get_cloud_diagram_components(*, components: bool | None = None, external: bool | None = None, element: bool | None = None, link: bool | None = None, group: bool | None = None, note: bool | None = None, combiner: bool | None = None, type_: list[Type10OrStr] | None = None, node_type: NodeType1OrStr | None = None, alarms_count: bool | None = None, issues_count: bool | None = None, skip_empty: bool | None = None, exclude_default_vpc: bool | None = None, exclude_empty_subnets: bool | None = None, body: CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudDiagramsGetResponse</code></summary>

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
try:
    response = client.cloud_diagrams.get_cloud_diagram_components()
    # TODO: Handle 'response' of type CloudDiagramsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramComponentsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.get_cloud_diagram_components()
    # TODO: Handle 'response' of type CloudDiagramsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramComponentsErrorBody
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

**OnSuccess**: <code>[CloudDiagramsGetResponse](doi_t/models/cloud_diagrams_get_response.py)</code> -- OK - Diagram and component data returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudDiagramComponentsErrorBody](doi_t/errors/get_cloud_diagram_components_error.py)&#93;</code>

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
<summary><code>def get_cloud_diagram_cost_snapshot(id_: str, start_date: Date, end_date: Date, *, interval: Interval1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudDiagramCostSnapshot</code></summary>

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
try:
    response = client.cloud_diagrams.get_cloud_diagram_cost_snapshot(
        "some example string", date(2024, 1, 15), date(2024, 1, 15)
    )
    # TODO: Handle 'response' of type CloudDiagramCostSnapshot
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramCostSnapshotErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.get_cloud_diagram_cost_snapshot(
        "some example string", date(2024, 1, 15), date(2024, 1, 15)
    )
    # TODO: Handle 'response' of type CloudDiagramCostSnapshot
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramCostSnapshotErrorBody
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

**OnSuccess**: <code>[CloudDiagramCostSnapshot](doi_t/models/cloud_diagram_cost_snapshot.py)</code> -- OK - Diagram cost snapshot returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudDiagramCostSnapshotErrorBody](doi_t/errors/get_cloud_diagram_cost_snapshot_error.py)&#93;</code>

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
<summary><code>def get_cloud_diagram_layer_snapshot(id_: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CloudDiagramLayerSnapshot</code></summary>

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
try:
    response = client.cloud_diagrams.get_cloud_diagram_layer_snapshot("some example string", "some example string")
    # TODO: Handle 'response' of type CloudDiagramLayerSnapshot
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramLayerSnapshotErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.get_cloud_diagram_layer_snapshot(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CloudDiagramLayerSnapshot
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramLayerSnapshotErrorBody
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

**OnSuccess**: <code>[CloudDiagramLayerSnapshot](doi_t/models/cloud_diagram_layer_snapshot.py)</code> -- OK - Snapshot returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudDiagramLayerSnapshotErrorBody](doi_t/errors/get_cloud_diagram_layer_snapshot_error.py)&#93;</code>

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
<summary><code>def get_cloud_diagram_resource_relationships(id_: str, rid: str, *, direction: DirectionOrStr | None = Direction.BOTH, depth: DepthOrStr | None = Depth.DIRECT, kind: KindOrStr | None = Kind.EDGES, request_options: RequestOptionsOrDict | None = None) -> DiagramRelationshipsResponse</code></summary>

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
try:
    response = client.cloud_diagrams.get_cloud_diagram_resource_relationships(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DiagramRelationshipsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramResourceRelationshipsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.get_cloud_diagram_resource_relationships(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DiagramRelationshipsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramResourceRelationshipsErrorBody
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

**OnSuccess**: <code>[DiagramRelationshipsResponse](doi_t/models/diagram_relationships_response.py)</code> -- OK - Related resources returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudDiagramResourceRelationshipsErrorBody](doi_t/errors/get_cloud_diagram_resource_relationships_error.py)&#93;</code>

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
<summary><code>def get_cloud_diagrams_stats(start: RFC3339DateTime, end: RFC3339DateTime, *, request_options: RequestOptionsOrDict | None = None) -> list[CloudDiagramStats]</code></summary>

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
try:
    response = client.cloud_diagrams.get_cloud_diagrams_stats(
        datetime(2026, 4, 1, 0, 0, 0, tzinfo=timezone.utc), datetime(2026, 4, 28, 0, 0, 0, tzinfo=timezone.utc)
    )
    # TODO: Handle 'response' of type list[CloudDiagramStats]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramsStatsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.get_cloud_diagrams_stats(
        datetime(2026, 4, 1, 0, 0, 0, tzinfo=timezone.utc), datetime(2026, 4, 28, 0, 0, 0, tzinfo=timezone.utc)
    )
    # TODO: Handle 'response' of type list[CloudDiagramStats]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudDiagramsStatsErrorBody
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

**OnSuccess**: <code>list&#91;[CloudDiagramStats](doi_t/models/cloud_diagram_stats.py)&#93;</code> -- OK - List of diagrams with stats returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudDiagramsStatsErrorBody](doi_t/errors/get_cloud_diagrams_stats_error.py)&#93;</code>

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
<summary><code>def get_statussheet_components(id_: str, body: CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict, *, p: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudDiagramStatussheetComponents</code></summary>

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
try:
    response = client.cloud_diagrams.get_statussheet_components(
        "some example string", CloudDiagramStatussheetGetRequest()
    )
    # TODO: Handle 'response' of type CloudDiagramStatussheetComponents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatussheetComponentsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.get_statussheet_components(
        "some example string", CloudDiagramStatussheetGetRequest()
    )
    # TODO: Handle 'response' of type CloudDiagramStatussheetComponents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatussheetComponentsErrorBody
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

**OnSuccess**: <code>[CloudDiagramStatussheetComponents](doi_t/models/cloud_diagram_statussheet_components.py)</code> -- OK - Layer components returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetStatussheetComponentsErrorBody](doi_t/errors/get_statussheet_components_error.py)&#93;</code>

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
<summary><code>def list_cloud_diagram_activity_groups(ss_id: str, *, limit: int | None = None, offset: int | None = None, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> list[CloudDiagramSnapshotActivityGroup]</code></summary>

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
try:
    response = client.cloud_diagrams.list_cloud_diagram_activity_groups("some example string")
    # TODO: Handle 'response' of type list[CloudDiagramSnapshotActivityGroup]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudDiagramActivityGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.list_cloud_diagram_activity_groups("some example string")
    # TODO: Handle 'response' of type list[CloudDiagramSnapshotActivityGroup]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudDiagramActivityGroupsErrorBody
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

**OnSuccess**: <code>list&#91;[CloudDiagramSnapshotActivityGroup](doi_t/models/cloud_diagram_snapshot_activity_group.py)&#93;</code> -- OK - Activity groups returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudDiagramActivityGroupsErrorBody](doi_t/errors/list_cloud_diagram_activity_groups_error.py)&#93;</code>

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
<summary><code>def list_cloud_diagram_layer_snapshots(id_: str, *, offset: int | None = None, limit: int | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[CloudDiagramLayerSnapshot]</code></summary>

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
try:
    response = client.cloud_diagrams.list_cloud_diagram_layer_snapshots("some example string")
    # TODO: Handle 'response' of type list[CloudDiagramLayerSnapshot]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudDiagramLayerSnapshotsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.list_cloud_diagram_layer_snapshots("some example string")
    # TODO: Handle 'response' of type list[CloudDiagramLayerSnapshot]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudDiagramLayerSnapshotsErrorBody
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

**OnSuccess**: <code>list&#91;[CloudDiagramLayerSnapshot](doi_t/models/cloud_diagram_layer_snapshot.py)&#93;</code> -- OK - Snapshots returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudDiagramLayerSnapshotsErrorBody](doi_t/errors/list_cloud_diagram_layer_snapshots_error.py)&#93;</code>

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
<summary><code>def list_cloud_diagram_node_activities(ss_id: str, node_id: str, *, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> list[CloudDiagramNodeActivity]</code></summary>

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
try:
    response = client.cloud_diagrams.list_cloud_diagram_node_activities("some example string", "some example string")
    # TODO: Handle 'response' of type list[CloudDiagramNodeActivity]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudDiagramNodeActivitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.list_cloud_diagram_node_activities(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[CloudDiagramNodeActivity]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudDiagramNodeActivitiesErrorBody
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

**OnSuccess**: <code>list&#91;[CloudDiagramNodeActivity](doi_t/models/cloud_diagram_node_activity.py)&#93;</code> -- OK - Node activity records returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudDiagramNodeActivitiesErrorBody](doi_t/errors/list_cloud_diagram_node_activities_error.py)&#93;</code>

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
<summary><code>def search_cloud_diagrams(body: CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CloudDiagramsSearchResponse</code></summary>

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
try:
    response = client.cloud_diagrams.search_cloud_diagrams(CloudDiagramsSearchRequest(query="some example string"))
    # TODO: Handle 'response' of type CloudDiagramsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCloudDiagramsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_diagrams.search_cloud_diagrams(
        CloudDiagramsSearchRequest(query="some example string")
    )
    # TODO: Handle 'response' of type CloudDiagramsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCloudDiagramsErrorBody
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

**OnSuccess**: <code>[CloudDiagramsSearchResponse](doi_t/models/cloud_diagrams_search_response.py)</code> -- OK - Search results returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[SearchCloudDiagramsErrorBody](doi_t/errors/search_cloud_diagrams_error.py)&#93;</code>

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
<summary><code>def get_known_issue(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> CoreV1CloudincidentsResponse1</code></summary>

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
try:
    response = client.cloud_incidents.get_known_issue("some example string")
    # TODO: Handle 'response' of type CoreV1CloudincidentsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKnownIssueErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_incidents.get_known_issue("some example string")
    # TODO: Handle 'response' of type CoreV1CloudincidentsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKnownIssueErrorBody
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

**OnSuccess**: <code>[CoreV1CloudincidentsResponse1](doi_t/models/core_v1_cloudincidents_response1.py)</code> -- OK - Cloud incident returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetKnownIssueErrorBody](doi_t/errors/get_known_issue_error.py)&#93;</code>

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
<summary><code>def list_known_issues(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CoreV1CloudincidentsResponse</code></summary>

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
try:
    response = client.cloud_incidents.list_known_issues()
    # TODO: Handle 'response' of type CoreV1CloudincidentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListKnownIssuesErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_incidents.list_known_issues()
    # TODO: Handle 'response' of type CoreV1CloudincidentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListKnownIssuesErrorBody
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

**OnSuccess**: <code>[CoreV1CloudincidentsResponse](doi_t/models/core_v1_cloudincidents_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListKnownIssuesErrorBody](doi_t/errors/list_known_issues_error.py)&#93;</code>

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
<summary><code>def build_cloud_flow(body: CloudFlowBuildRequest | CloudFlowBuildRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EventStream[str]</code></summary>

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
try:
    response = client.cloud_flow_api.build_cloud_flow(CloudFlowBuildRequest(question="some example string"))
    # TODO: Handle 'response' of type EventStream[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuildCloudFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.build_cloud_flow(CloudFlowBuildRequest(question="some example string"))
    # TODO: Handle 'response' of type AsyncEventStream[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuildCloudFlowErrorBody
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

**OnSuccess**: <code>EventStream&#91;str&#93;</code> -- OK - Build event stream.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[BuildCloudFlowErrorBody](doi_t/errors/build_cloud_flow_error.py)&#93;</code>

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
<summary><code>def export_cloudflow_flow(flow_id: str, *, include_variable_values: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> CloudflowFlowBundle</code></summary>

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
try:
    response = client.cloud_flow_api.export_cloudflow_flow("some example string")
    # TODO: Handle 'response' of type CloudflowFlowBundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportCloudflowFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.export_cloudflow_flow("some example string")
    # TODO: Handle 'response' of type CloudflowFlowBundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportCloudflowFlowErrorBody
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

**OnSuccess**: <code>[CloudflowFlowBundle](doi_t/models/cloudflow_flow_bundle.py)</code> -- The flow bundle.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ExportCloudflowFlowErrorBody](doi_t/errors/export_cloudflow_flow_error.py)&#93;</code>

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
<summary><code>def get_cloudflow_flow_run(flow_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowRun</code></summary>

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
try:
    response = client.cloud_flow_api.get_cloudflow_flow_run("some example string", "some example string")
    # TODO: Handle 'response' of type CloudflowRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowFlowRunErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.get_cloudflow_flow_run("some example string", "some example string")
    # TODO: Handle 'response' of type CloudflowRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowFlowRunErrorBody
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

**OnSuccess**: <code>[CloudflowRun](doi_t/models/cloudflow_run.py)</code> -- The run and its per-node detail.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudflowFlowRunErrorBody](doi_t/errors/get_cloudflow_flow_run_error.py)&#93;</code>

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
<summary><code>def get_cloudflow_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowTemplate</code></summary>

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
try:
    response = client.cloud_flow_api.get_cloudflow_template("some example string")
    # TODO: Handle 'response' of type CloudflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowTemplateErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.get_cloudflow_template("some example string")
    # TODO: Handle 'response' of type CloudflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowTemplateErrorBody
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

**OnSuccess**: <code>[CloudflowTemplate](doi_t/models/cloudflow_template.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudflowTemplateErrorBody](doi_t/errors/get_cloudflow_template_error.py)&#93;</code>

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
<summary><code>def import_cloudflow_flow(idempotency_key: str, body: CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> CloudflowImportPlan</code></summary>

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
try:
    response = client.cloud_flow_api.import_cloudflow_flow(
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
    # TODO: Handle 'response' of type CloudflowImportPlan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportCloudflowFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.import_cloudflow_flow(
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
    # TODO: Handle 'response' of type CloudflowImportPlan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportCloudflowFlowErrorBody
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

**OnSuccess**: <code>[CloudflowImportPlan](doi_t/models/cloudflow_import_plan.py)</code> -- Dry-run import plan (no writes performed).

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ImportCloudflowFlowErrorBody](doi_t/errors/import_cloudflow_flow_error.py)&#93;</code>

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
<summary><code>def list_cloudflow_flow_runs(flow_id: str, *, max_results: int | None = 50, page_token: str | None = None, mode: ModeDoiTCloudFlowApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudflowRunList</code></summary>

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
try:
    response = client.cloud_flow_api.list_cloudflow_flow_runs("some example string")
    # TODO: Handle 'response' of type CloudflowRunList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowFlowRunsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.list_cloudflow_flow_runs("some example string")
    # TODO: Handle 'response' of type CloudflowRunList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowFlowRunsErrorBody
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

**OnSuccess**: <code>[CloudflowRunList](doi_t/models/cloudflow_run_list.py)</code> -- A page of runs.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudflowFlowRunsErrorBody](doi_t/errors/list_cloudflow_flow_runs_error.py)&#93;</code>

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
<summary><code>def list_cloudflow_templates(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudflowTemplateListResponse</code></summary>

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
try:
    response = client.cloud_flow_api.list_cloudflow_templates()
    # TODO: Handle 'response' of type CloudflowTemplateListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowTemplatesErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.list_cloudflow_templates()
    # TODO: Handle 'response' of type CloudflowTemplateListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowTemplatesErrorBody
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

**OnSuccess**: <code>[CloudflowTemplateListResponse](doi_t/models/cloudflow_template_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudflowTemplatesErrorBody](doi_t/errors/list_cloudflow_templates_error.py)&#93;</code>

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
<summary><code>def list_cloudflows(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudflowListResponse</code></summary>

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
try:
    response = client.cloud_flow_api.list_cloudflows()
    # TODO: Handle 'response' of type CloudflowListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.list_cloudflows()
    # TODO: Handle 'response' of type CloudflowListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowsErrorBody
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

**OnSuccess**: <code>[CloudflowListResponse](doi_t/models/cloudflow_list_response.py)</code> -- Paginated list of CloudFlows.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudflowsErrorBody](doi_t/errors/list_cloudflows_error.py)&#93;</code>

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
<summary><code>def refine_cloud_flow(flow_id: str, body: CloudFlowRefineRequest | CloudFlowRefineRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EventStream[str]</code></summary>

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
try:
    response = client.cloud_flow_api.refine_cloud_flow(
        "some example string", CloudFlowRefineRequest(question="some example string")
    )
    # TODO: Handle 'response' of type EventStream[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefineCloudFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.refine_cloud_flow(
        "some example string", CloudFlowRefineRequest(question="some example string")
    )
    # TODO: Handle 'response' of type AsyncEventStream[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefineCloudFlowErrorBody
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

**OnSuccess**: <code>EventStream&#91;str&#93;</code> -- OK - Refine event stream.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[RefineCloudFlowErrorBody](doi_t/errors/refine_cloud_flow_error.py)&#93;</code>

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
<summary><code>def stop_cloudflow_flow(flow_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowRunSummary</code></summary>

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
try:
    response = client.cloud_flow_api.stop_cloudflow_flow("some example string")
    # TODO: Handle 'response' of type CloudflowRunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopCloudflowFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.stop_cloudflow_flow("some example string")
    # TODO: Handle 'response' of type CloudflowRunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopCloudflowFlowErrorBody
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

**OnSuccess**: <code>[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py)</code> -- The run was stopped. The body is the run as it stands after stopping.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[StopCloudflowFlowErrorBody](doi_t/errors/stop_cloudflow_flow_error.py)&#93;</code>

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
<summary><code>def test_run_cloudflow_flow(flow_id: str, idempotency_key: str, *, dry_run: bool | None = None, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudflowRunSummary</code></summary>

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
try:
    response = client.cloud_flow_api.test_run_cloudflow_flow("some example string", "some example string")
    # TODO: Handle 'response' of type CloudflowRunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestRunCloudflowFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.test_run_cloudflow_flow("some example string", "some example string")
    # TODO: Handle 'response' of type CloudflowRunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestRunCloudflowFlowErrorBody
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

**OnSuccess**: <code>[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py)</code> -- Test run accepted. The response is a snapshot taken at dispatch, so `status` is
`pending`; follow the `Location` header to read the run as it progresses.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[TestRunCloudflowFlowErrorBody](doi_t/errors/test_run_cloudflow_flow_error.py)&#93;</code>

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
<summary><code>def trigger_cloudflow_flow(flow_id: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudflowRunSummary</code></summary>

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
try:
    response = client.cloud_flow_api.trigger_cloudflow_flow("some example string")
    # TODO: Handle 'response' of type CloudflowRunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerCloudflowFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.trigger_cloudflow_flow("some example string")
    # TODO: Handle 'response' of type CloudflowRunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerCloudflowFlowErrorBody
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

**OnSuccess**: <code>[CloudflowRunSummary](doi_t/models/cloudflow_run_summary.py)</code> -- The run was started. The snapshot is taken at dispatch, so `status` is `pending`.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[TriggerCloudflowFlowErrorBody](doi_t/errors/trigger_cloudflow_flow_error.py)&#93;</code>

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
<summary><code>def trigger_cloudflow_webhook(flow_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowV1TriggerResponse</code></summary>

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
try:
    response = client.cloud_flow_api.trigger_cloudflow_webhook("some example string", {"key": "value"})
    # TODO: Handle 'response' of type CloudflowV1TriggerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerCloudflowWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.cloud_flow_api.trigger_cloudflow_webhook("some example string", {"key": "value"})
    # TODO: Handle 'response' of type CloudflowV1TriggerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerCloudflowWebhookErrorBody
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

**OnSuccess**: <code>[CloudflowV1TriggerResponse](doi_t/models/cloudflow_v1_trigger_response.py)</code> -- Accepted - CloudFlow execution started.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[TriggerCloudflowWebhookErrorBody](doi_t/errors/trigger_cloudflow_webhook_error.py)&#93;</code>

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
<summary><code>def get_commitment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> CommitmentExternal</code></summary>

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
try:
    response = client.commitment_manager.get_commitment("some example string")
    # TODO: Handle 'response' of type CommitmentExternal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCommitmentErrorBody
```

**Async**

```python
try:
    response = await async_client.commitment_manager.get_commitment("some example string")
    # TODO: Handle 'response' of type CommitmentExternal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCommitmentErrorBody
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

**OnSuccess**: <code>[CommitmentExternal](doi_t/models/commitment_external.py)</code> -- OK - Commitment returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCommitmentErrorBody](doi_t/errors/get_commitment_error.py)&#93;</code>

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
<summary><code>def list_commitments(*, sort_by: SortByDoiTCommitmentManagerApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CommitmentExternalList</code></summary>

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
try:
    response = client.commitment_manager.list_commitments(filter_="provider:google-cloud")
    # TODO: Handle 'response' of type CommitmentExternalList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCommitmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.commitment_manager.list_commitments(filter_="provider:google-cloud")
    # TODO: Handle 'response' of type CommitmentExternalList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCommitmentsErrorBody
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

**OnSuccess**: <code>[CommitmentExternalList](doi_t/models/commitment_external_list.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCommitmentsErrorBody](doi_t/errors/list_commitments_error.py)&#93;</code>

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
<summary><code>def list_composer_recipe_results(recipe_id: int, *, max_results: int | None = 50, page_token: str | None = None, sort_by: SortBy1OrStr | None = SortBy1.DETECTION_TIME, sort_order: SortOrderOrStr | None = SortOrder.DESC, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ComposerRecipeResultList</code></summary>

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
try:
    response = client.composer_insights_beta.list_composer_recipe_results(
        42, max_results=50, filter_="status:active|region:us-east-1,us-west-2"
    )
    # TODO: Handle 'response' of type ComposerRecipeResultList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListComposerRecipeResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.composer_insights_beta.list_composer_recipe_results(
        42, max_results=50, filter_="status:active|region:us-east-1,us-west-2"
    )
    # TODO: Handle 'response' of type ComposerRecipeResultList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListComposerRecipeResultsErrorBody
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

**OnSuccess**: <code>[ComposerRecipeResultList](doi_t/models/composer_recipe_result_list.py)</code> -- OK - A page of the recipe's results matching the request.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListComposerRecipeResultsErrorBody](doi_t/errors/list_composer_recipe_results_error.py)&#93;</code>

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
<summary><code>def list_composer_recipes(*, max_results: int | None = 50, page_token: str | None = None, sort_by: SortByDoiTComposerInsightsBetaApiOrStr | None = SortByDoiTComposerInsightsBetaApi.SEVERITY, sort_order: SortOrderOrStr | None = SortOrder.DESC, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ComposerRecipeList</code></summary>

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
try:
    response = client.composer_insights_beta.list_composer_recipes(
        max_results=50, filter_="severity:critical,high|provider:aws,gcp"
    )
    # TODO: Handle 'response' of type ComposerRecipeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListComposerRecipesErrorBody
```

**Async**

```python
try:
    response = await async_client.composer_insights_beta.list_composer_recipes(
        max_results=50, filter_="severity:critical,high|provider:aws,gcp"
    )
    # TODO: Handle 'response' of type ComposerRecipeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListComposerRecipesErrorBody
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

**OnSuccess**: <code>[ComposerRecipeList](doi_t/models/composer_recipe_list.py)</code> -- OK - A page of recipes matching the request.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListComposerRecipesErrorBody](doi_t/errors/list_composer_recipes_error.py)&#93;</code>

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
<summary><code>def create_cloudflow_connection(body: CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowConnection</code></summary>

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
try:
    response = client.connections.create_cloudflow_connection(CloudflowV1ConnectionsRequest(name="some example string"))
    # TODO: Handle 'response' of type CloudflowConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCloudflowConnectionErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.create_cloudflow_connection(
        CloudflowV1ConnectionsRequest(name="some example string")
    )
    # TODO: Handle 'response' of type CloudflowConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCloudflowConnectionErrorBody
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

**OnSuccess**: <code>[CloudflowConnection](doi_t/models/cloudflow_connection.py)</code> -- Created

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateCloudflowConnectionErrorBody](doi_t/errors/create_cloudflow_connection_error.py)&#93;</code>

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
<summary><code>def delete_cloudflow_connection(connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.connections.delete_cloudflow_connection("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCloudflowConnectionErrorBody
```

**Async**

```python
try:
    await async_client.connections.delete_cloudflow_connection("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCloudflowConnectionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteCloudflowConnectionErrorBody](doi_t/errors/delete_cloudflow_connection_error.py)&#93;</code>

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
<summary><code>def get_cloudflow_connection(connection_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowConnection</code></summary>

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
try:
    response = client.connections.get_cloudflow_connection("some example string")
    # TODO: Handle 'response' of type CloudflowConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowConnectionErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.get_cloudflow_connection("some example string")
    # TODO: Handle 'response' of type CloudflowConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowConnectionErrorBody
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

**OnSuccess**: <code>[CloudflowConnection](doi_t/models/cloudflow_connection.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudflowConnectionErrorBody](doi_t/errors/get_cloudflow_connection_error.py)&#93;</code>

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
<summary><code>def list_cloudflow_connections(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudflowConnectionListResponse</code></summary>

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
try:
    response = client.connections.list_cloudflow_connections()
    # TODO: Handle 'response' of type CloudflowConnectionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowConnectionsErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.list_cloudflow_connections()
    # TODO: Handle 'response' of type CloudflowConnectionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowConnectionsErrorBody
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

**OnSuccess**: <code>[CloudflowConnectionListResponse](doi_t/models/cloudflow_connection_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudflowConnectionsErrorBody](doi_t/errors/list_cloudflow_connections_error.py)&#93;</code>

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
<summary><code>def update_cloudflow_connection(connection_id: str, body: CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowConnection</code></summary>

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
try:
    response = client.connections.update_cloudflow_connection("some example string", CloudflowV1ConnectionsRequest1())
    # TODO: Handle 'response' of type CloudflowConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCloudflowConnectionErrorBody
```

**Async**

```python
try:
    response = await async_client.connections.update_cloudflow_connection(
        "some example string", CloudflowV1ConnectionsRequest1()
    )
    # TODO: Handle 'response' of type CloudflowConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCloudflowConnectionErrorBody
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

**OnSuccess**: <code>[CloudflowConnection](doi_t/models/cloudflow_connection.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateCloudflowConnectionErrorBody](doi_t/errors/update_cloudflow_connection_error.py)&#93;</code>

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
<summary><code>def archive_contract_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ContractTemplateResponse</code></summary>

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
try:
    response = client.contract_templates.archive_contract_template("some example string")
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveContractTemplateErrorBody
```

**Async**

```python
try:
    response = await async_client.contract_templates.archive_contract_template("some example string")
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveContractTemplateErrorBody
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

**OnSuccess**: <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- OK - Contract template archived.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ArchiveContractTemplateErrorBody](doi_t/errors/archive_contract_template_error.py)&#93;</code>

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
<summary><code>def assign_contract_template(template_id: str, body: AssignContractTemplateInput | AssignContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> AssignContractTemplateResponse</code></summary>

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
try:
    response = client.contract_templates.assign_contract_template(
        "some example string", AssignContractTemplateInput(customer_ids=["some example string"])
    )
    # TODO: Handle 'response' of type AssignContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignContractTemplateErrorBody
```

**Async**

```python
try:
    response = await async_client.contract_templates.assign_contract_template(
        "some example string", AssignContractTemplateInput(customer_ids=["some example string"])
    )
    # TODO: Handle 'response' of type AssignContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignContractTemplateErrorBody
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

**OnSuccess**: <code>[AssignContractTemplateResponse](doi_t/models/assign_contract_template_response.py)</code> -- Created - Draft contracts created for the specified customers.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AssignContractTemplateErrorBody](doi_t/errors/assign_contract_template_error.py)&#93;</code>

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
<summary><code>def create_contract_template(body: ContractTemplateInput | ContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ContractTemplateResponse</code></summary>

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
try:
    response = client.contract_templates.create_contract_template(
        ContractTemplateInput(
            name="some example string",
            platform="some example string",
            eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        ),
    )
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContractTemplateErrorBody
```

**Async**

```python
try:
    response = await async_client.contract_templates.create_contract_template(
        ContractTemplateInput(
            name="some example string",
            platform="some example string",
            eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        ),
    )
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContractTemplateErrorBody
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

**OnSuccess**: <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- Created - Contract template created.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateContractTemplateErrorBody](doi_t/errors/create_contract_template_error.py)&#93;</code>

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
<summary><code>def get_contract_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ContractTemplateResponse</code></summary>

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
try:
    response = client.contract_templates.get_contract_template("some example string")
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContractTemplateErrorBody
```

**Async**

```python
try:
    response = await async_client.contract_templates.get_contract_template("some example string")
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContractTemplateErrorBody
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

**OnSuccess**: <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- OK - Contract template returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetContractTemplateErrorBody](doi_t/errors/get_contract_template_error.py)&#93;</code>

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
<summary><code>def list_contract_templates(*, request_options: RequestOptionsOrDict | None = None) -> list[ContractTemplateResponse]</code></summary>

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
try:
    response = client.contract_templates.list_contract_templates()
    # TODO: Handle 'response' of type list[ContractTemplateResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContractTemplatesErrorBody
```

**Async**

```python
try:
    response = await async_client.contract_templates.list_contract_templates()
    # TODO: Handle 'response' of type list[ContractTemplateResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContractTemplatesErrorBody
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

**OnSuccess**: <code>list&#91;[ContractTemplateResponse](doi_t/models/contract_template_response.py)&#93;</code> -- OK - Contract templates returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListContractTemplatesErrorBody](doi_t/errors/list_contract_templates_error.py)&#93;</code>

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
<summary><code>def update_contract_template(template_id: str, body: ContractTemplateInput | ContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ContractTemplateResponse</code></summary>

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
try:
    response = client.contract_templates.update_contract_template(
        "some example string",
        ContractTemplateInput(
            name="some example string",
            platform="some example string",
            eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        ),
    )
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContractTemplateErrorBody
```

**Async**

```python
try:
    response = await async_client.contract_templates.update_contract_template(
        "some example string",
        ContractTemplateInput(
            name="some example string",
            platform="some example string",
            eligible_from=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        ),
    )
    # TODO: Handle 'response' of type ContractTemplateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContractTemplateErrorBody
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

**OnSuccess**: <code>[ContractTemplateResponse](doi_t/models/contract_template_response.py)</code> -- OK - Contract template updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateContractTemplateErrorBody](doi_t/errors/update_contract_template_error.py)&#93;</code>

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
<summary><code>def activate_contract(customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ContractLifecycleResponse</code></summary>

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
try:
    response = client.contracts.activate_contract("some example string", "some example string")
    # TODO: Handle 'response' of type ContractLifecycleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateContractErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.activate_contract("some example string", "some example string")
    # TODO: Handle 'response' of type ContractLifecycleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateContractErrorBody
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

**OnSuccess**: <code>[ContractLifecycleResponse](doi_t/models/contract_lifecycle_response.py)</code> -- OK - Contract activated or scheduled.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ActivateContractErrorBody](doi_t/errors/activate_contract_error.py)&#93;</code>

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
<summary><code>def cancel_contract(customer_id: str, contract_id: str, *, body: CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ContractLifecycleResponse</code></summary>

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
try:
    response = client.contracts.cancel_contract("some example string", "some example string")
    # TODO: Handle 'response' of type ContractLifecycleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelContractErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.cancel_contract("some example string", "some example string")
    # TODO: Handle 'response' of type ContractLifecycleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelContractErrorBody
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

**OnSuccess**: <code>[ContractLifecycleResponse](doi_t/models/contract_lifecycle_response.py)</code> -- OK - Contract cancelled.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CancelContractErrorBody](doi_t/errors/cancel_contract_error.py)&#93;</code>

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
<summary><code>def create_contract(customer_id: str, body: MtsContractCreateInput | MtsContractCreateInputDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateContractResponse</code></summary>

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
try:
    response = client.contracts.create_contract(
        "some example string",
        MtsContractCreateInput(
            name="some example string",
            start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            renewal_policy=RenewalPolicy1.AUTO,
        ),
    )
    # TODO: Handle 'response' of type CreateContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContractErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.create_contract(
        "some example string",
        MtsContractCreateInput(
            name="some example string",
            start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            renewal_policy=RenewalPolicy1.AUTO,
        ),
    )
    # TODO: Handle 'response' of type CreateContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContractErrorBody
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

**OnSuccess**: <code>[CreateContractResponse](doi_t/models/create_contract_response.py)</code> -- Created - The contract draft was created.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateContractErrorBody](doi_t/errors/create_contract_error.py)&#93;</code>

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
<summary><code>def get_contract(customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None) -> MtsContractDetailResponse</code></summary>

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
try:
    response = client.contracts.get_contract("some example string", "some example string")
    # TODO: Handle 'response' of type MtsContractDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContractErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.get_contract("some example string", "some example string")
    # TODO: Handle 'response' of type MtsContractDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContractErrorBody
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

**OnSuccess**: <code>[MtsContractDetailResponse](doi_t/models/mts_contract_detail_response.py)</code> -- OK - Contract returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetContractErrorBody](doi_t/errors/get_contract_error.py)&#93;</code>

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
<summary><code>def list_contracts(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> list[MtsContractResponse]</code></summary>

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
try:
    response = client.contracts.list_contracts("some example string")
    # TODO: Handle 'response' of type list[MtsContractResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContractsErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.list_contracts("some example string")
    # TODO: Handle 'response' of type list[MtsContractResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContractsErrorBody
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

**OnSuccess**: <code>list&#91;[MtsContractResponse](doi_t/models/mts_contract_response.py)&#93;</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListContractsErrorBody](doi_t/errors/list_contracts_error.py)&#93;</code>

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
<summary><code>def update_contract(customer_id: str, contract_id: str, body: MtsContractInput | MtsContractInputDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateContractResponse</code></summary>

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
try:
    response = client.contracts.update_contract(
        "some example string",
        "some example string",
        MtsContractInput(
            name="some example string",
            start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            renewal_policy=RenewalPolicy1.AUTO,
        ),
    )
    # TODO: Handle 'response' of type CreateContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContractErrorBody
```

**Async**

```python
try:
    response = await async_client.contracts.update_contract(
        "some example string",
        "some example string",
        MtsContractInput(
            name="some example string",
            start_date=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            renewal_policy=RenewalPolicy1.AUTO,
        ),
    )
    # TODO: Handle 'response' of type CreateContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContractErrorBody
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

**OnSuccess**: <code>[CreateContractResponse](doi_t/models/create_contract_response.py)</code> -- OK - New contract version created.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateContractErrorBody](doi_t/errors/update_contract_error.py)&#93;</code>

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
<summary><code>def assign_customer_group_user(customer_group_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.customer_groups.assign_customer_group_user(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignCustomerGroupUserErrorBody
```

**Async**

```python
try:
    await async_client.customer_groups.assign_customer_group_user(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignCustomerGroupUserErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AssignCustomerGroupUserErrorBody](doi_t/errors/assign_customer_group_user_error.py)&#93;</code>

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
<summary><code>def assign_customer_group_user_group(customer_group_id: str, user_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.customer_groups.assign_customer_group_user_group(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignCustomerGroupUserGroupErrorBody
```

**Async**

```python
try:
    await async_client.customer_groups.assign_customer_group_user_group(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignCustomerGroupUserGroupErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AssignCustomerGroupUserGroupErrorBody](doi_t/errors/assign_customer_group_user_group_error.py)&#93;</code>

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
<summary><code>def create_customer_group(body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroup</code></summary>

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
try:
    response = client.customer_groups.create_customer_group(
        CreateCustomerGroupRequest(name="some example string", member_customer_ids=["some example string"]),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type CustomerGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.create_customer_group(
        CreateCustomerGroupRequest(name="some example string", member_customer_ids=["some example string"]),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type CustomerGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerGroupErrorBody
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

**OnSuccess**: <code>[CustomerGroup](doi_t/models/customer_group.py)</code> -- Created

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateCustomerGroupErrorBody](doi_t/errors/create_customer_group_error.py)&#93;</code>

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
<summary><code>def delete_customer_group(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.customer_groups.delete_customer_group("some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGroupErrorBody
```

**Async**

```python
try:
    await async_client.customer_groups.delete_customer_group("some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGroupErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteCustomerGroupErrorBody](doi_t/errors/delete_customer_group_error.py)&#93;</code>

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
<summary><code>def get_customer_group(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroup</code></summary>

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
try:
    response = client.customer_groups.get_customer_group("some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type CustomerGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.get_customer_group(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CustomerGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerGroupErrorBody
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

**OnSuccess**: <code>[CustomerGroup](doi_t/models/customer_group.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCustomerGroupErrorBody](doi_t/errors/get_customer_group_error.py)&#93;</code>

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
<summary><code>def list_customer_group_user_groups(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupUserGroupsResponse</code></summary>

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
try:
    response = client.customer_groups.list_customer_group_user_groups(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CustomerGroupUserGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupUserGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.list_customer_group_user_groups(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CustomerGroupUserGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupUserGroupsErrorBody
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

**OnSuccess**: <code>[CustomerGroupUserGroupsResponse](doi_t/models/customer_group_user_groups_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCustomerGroupUserGroupsErrorBody](doi_t/errors/list_customer_group_user_groups_error.py)&#93;</code>

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
<summary><code>def list_customer_group_users(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupUsersResponse</code></summary>

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
try:
    response = client.customer_groups.list_customer_group_users(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CustomerGroupUsersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.list_customer_group_users(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CustomerGroupUsersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupUsersErrorBody
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

**OnSuccess**: <code>[CustomerGroupUsersResponse](doi_t/models/customer_group_users_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCustomerGroupUsersErrorBody](doi_t/errors/list_customer_group_users_error.py)&#93;</code>

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
<summary><code>def list_customer_groups(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupsResponse</code></summary>

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
try:
    response = client.customer_groups.list_customer_groups(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type CustomerGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.list_customer_groups(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type CustomerGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupsErrorBody
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

**OnSuccess**: <code>[CustomerGroupsResponse](doi_t/models/customer_groups_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCustomerGroupsErrorBody](doi_t/errors/list_customer_groups_error.py)&#93;</code>

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
<summary><code>def unassign_customer_group_user(customer_group_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.customer_groups.unassign_customer_group_user(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnassignCustomerGroupUserErrorBody
```

**Async**

```python
try:
    await async_client.customer_groups.unassign_customer_group_user(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnassignCustomerGroupUserErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UnassignCustomerGroupUserErrorBody](doi_t/errors/unassign_customer_group_user_error.py)&#93;</code>

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
<summary><code>def unassign_customer_group_user_group(customer_group_id: str, user_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.customer_groups.unassign_customer_group_user_group(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnassignCustomerGroupUserGroupErrorBody
```

**Async**

```python
try:
    await async_client.customer_groups.unassign_customer_group_user_group(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnassignCustomerGroupUserGroupErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UnassignCustomerGroupUserGroupErrorBody](doi_t/errors/unassign_customer_group_user_group_error.py)&#93;</code>

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
<summary><code>def update_customer_group(customer_group_id: str, body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroup</code></summary>

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
try:
    response = client.customer_groups.update_customer_group(
        "some example string", UpdateCustomerGroupRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CustomerGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.update_customer_group(
        "some example string", UpdateCustomerGroupRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CustomerGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGroupErrorBody
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

**OnSuccess**: <code>[CustomerGroup](doi_t/models/customer_group.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateCustomerGroupErrorBody](doi_t/errors/update_customer_group_error.py)&#93;</code>

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
<summary><code>def get_customer(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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
try:
    response = client.customers.get_customer("some example string")
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer("some example string")
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerErrorBody
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

**OnSuccess**: <code>[Customer](doi_t/models/customer.py)</code> -- OK - Customer returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCustomerErrorBody](doi_t/errors/get_customer_error.py)&#93;</code>

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
<summary><code>def update_customer(customer_id: str, body: CustomerUpdate | CustomerUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.customers.update_customer("some example string", CustomerUpdate())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
```

**Async**

```python
try:
    await async_client.customers.update_customer("some example string", CustomerUpdate())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateCustomerErrorBody](doi_t/errors/update_customer_error.py)&#93;</code>

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
<summary><code>def create_datahub_dataset(body: DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1DatasetsResponse1</code></summary>

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
try:
    response = client.data_hub.create_datahub_dataset(DatahubV1DatasetsRequest(name="some example string"))
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatahubDatasetErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.create_datahub_dataset(DatahubV1DatasetsRequest(name="some example string"))
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatahubDatasetErrorBody
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

**OnSuccess**: <code>[DatahubV1DatasetsResponse1](doi_t/models/datahub_v1_datasets_response1.py)</code> -- Created - Dataset created successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateDatahubDatasetErrorBody](doi_t/errors/create_datahub_dataset_error.py)&#93;</code>

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
<summary><code>def datahub_events(body: DatahubV1EventsRequest | DatahubV1EventsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1EventsResponse</code></summary>

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
try:
    response = client.data_hub.datahub_events(DatahubV1EventsRequest())
    # TODO: Handle 'response' of type DatahubV1EventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatahubEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.datahub_events(DatahubV1EventsRequest())
    # TODO: Handle 'response' of type DatahubV1EventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatahubEventsErrorBody
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

**OnSuccess**: <code>[DatahubV1EventsResponse](doi_t/models/datahub_v1_events_response.py)</code> -- OK - Ingestion succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DatahubEventsErrorBody](doi_t/errors/datahub_events_error.py)&#93;</code>

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
<summary><code>def datahub_events_csv_file(*, provider: str | None = None, file: FileInput | None = None, schema_template: str | None = None, period_start: Date | None = None, period_end: Date | None = None, replace: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> DatahubV1CsvUploadResponse</code></summary>

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
try:
    response = client.data_hub.datahub_events_csv_file(
        provider="Datadog",
        schema_template="anthropic-spend-report@1",
        period_start=date(2026, 9, 10),
        period_end=date(2026, 9, 10),
    )
    # TODO: Handle 'response' of type DatahubV1CsvUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatahubEventsCsvFileErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.datahub_events_csv_file(
        provider="Datadog",
        schema_template="anthropic-spend-report@1",
        period_start=date(2026, 9, 10),
        period_end=date(2026, 9, 10),
    )
    # TODO: Handle 'response' of type DatahubV1CsvUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatahubEventsCsvFileErrorBody
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

**OnSuccess**: <code>[DatahubV1CsvUploadResponse](doi_t/models/datahub_v1_csv_upload_response.py)</code> -- OK - Ingestion succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DatahubEventsCsvFileErrorBody](doi_t/errors/datahub_events_csv_file_error.py)&#93;</code>

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
<summary><code>def datahub_import_provider_records(body: DatahubV1ImportRequest | DatahubV1ImportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1ImportResponse</code></summary>

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
try:
    response = client.data_hub.datahub_import_provider_records(
        DatahubV1ImportRequest(
            provider="some example string",
            schema_template="some example string",
            period_start=date(2024, 1, 15),
            period_end=date(2024, 1, 15),
            records=[{}],
        ),
    )
    # TODO: Handle 'response' of type DatahubV1ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatahubImportProviderRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.datahub_import_provider_records(
        DatahubV1ImportRequest(
            provider="some example string",
            schema_template="some example string",
            period_start=date(2024, 1, 15),
            period_end=date(2024, 1, 15),
            records=[{}],
        ),
    )
    # TODO: Handle 'response' of type DatahubV1ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatahubImportProviderRecordsErrorBody
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

**OnSuccess**: <code>[DatahubV1ImportResponse](doi_t/models/datahub_v1_import_response.py)</code> -- OK - Ingestion succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DatahubImportProviderRecordsErrorBody](doi_t/errors/datahub_import_provider_records_error.py)&#93;</code>

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
<summary><code>def delete_datahub_dataset(name: str, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1DatasetsResponse2</code></summary>

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
try:
    response = client.data_hub.delete_datahub_dataset("My Custom Dataset")
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatahubDatasetErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.delete_datahub_dataset("My Custom Dataset")
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatahubDatasetErrorBody
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

**OnSuccess**: <code>[DatahubV1DatasetsResponse2](doi_t/models/datahub_v1_datasets_response2.py)</code> -- OK - Dataset deleted successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteDatahubDatasetErrorBody](doi_t/errors/delete_datahub_dataset_error.py)&#93;</code>

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
<summary><code>def delete_datahub_datasets(body: DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1DatasetsResponse2</code></summary>

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
try:
    response = client.data_hub.delete_datahub_datasets(DatahubV1DatasetsRequest1(datasets=["some example string"]))
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatahubDatasetsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.delete_datahub_datasets(
        DatahubV1DatasetsRequest1(datasets=["some example string"])
    )
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatahubDatasetsErrorBody
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

**OnSuccess**: <code>[DatahubV1DatasetsResponse2](doi_t/models/datahub_v1_datasets_response2.py)</code> -- OK - Datasets deleted successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteDatahubDatasetsErrorBody](doi_t/errors/delete_datahub_datasets_error.py)&#93;</code>

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
<summary><code>def delete_datahub_events_by_filter(body: DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1EventsDeleteResponse</code></summary>

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
try:
    response = client.data_hub.delete_datahub_events_by_filter(
        DatahubV1EventsDeleteRequest(dataset="some example string")
    )
    # TODO: Handle 'response' of type DatahubV1EventsDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatahubEventsByFilterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.delete_datahub_events_by_filter(
        DatahubV1EventsDeleteRequest(dataset="some example string")
    )
    # TODO: Handle 'response' of type DatahubV1EventsDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatahubEventsByFilterErrorBody
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

**OnSuccess**: <code>[DatahubV1EventsDeleteResponse](doi_t/models/datahub_v1_events_delete_response.py)</code> -- OK - Events deleted.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteDatahubEventsByFilterErrorBody](doi_t/errors/delete_datahub_events_by_filter_error.py)&#93;</code>

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
<summary><code>def export_datahub_dataset_records(name: str, start_time: RFC3339DateTime, end_time: RFC3339DateTime, *, format_: FormatOrStr | None = Format.CSV, max_results: int | None = 10000, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

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
try:
    response = client.data_hub.export_datahub_dataset_records(
        "My Custom Dataset",
        datetime(2026, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
        datetime(2026, 2, 1, 0, 0, 0, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportDatahubDatasetRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.export_datahub_dataset_records(
        "My Custom Dataset",
        datetime(2026, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
        datetime(2026, 2, 1, 0, 0, 0, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportDatahubDatasetRecordsErrorBody
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

**OnSuccess**: <code>FileResponse</code> -- OK - One page of records. The body is streamed.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ExportDatahubDatasetRecordsErrorBody](doi_t/errors/export_datahub_dataset_records_error.py)&#93;</code>

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
<summary><code>def get_datahub_dataset(name: str, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1DatasetsResponse4</code></summary>

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
try:
    response = client.data_hub.get_datahub_dataset("My Custom Dataset")
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse4
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDatahubDatasetErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.get_datahub_dataset("My Custom Dataset")
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse4
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDatahubDatasetErrorBody
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

**OnSuccess**: <code>[DatahubV1DatasetsResponse4](doi_t/models/datahub_v1_datasets_response4.py)</code> -- OK - Dataset returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetDatahubDatasetErrorBody](doi_t/errors/get_datahub_dataset_error.py)&#93;</code>

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
<summary><code>def list_datahub_datasets(*, request_options: RequestOptionsOrDict | None = None) -> DatahubV1DatasetsResponse</code></summary>

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
try:
    response = client.data_hub.list_datahub_datasets()
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatahubDatasetsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.list_datahub_datasets()
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatahubDatasetsErrorBody
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

**OnSuccess**: <code>[DatahubV1DatasetsResponse](doi_t/models/datahub_v1_datasets_response.py)</code> -- OK - List of datasets returned successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListDatahubDatasetsErrorBody](doi_t/errors/list_datahub_datasets_error.py)&#93;</code>

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
<summary><code>def update_datahub_dataset(name: str, body: DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> DatahubV1DatasetsResponse1</code></summary>

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
try:
    response = client.data_hub.update_datahub_dataset("My Custom Dataset", DatahubV1DatasetsRequest2())
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDatahubDatasetErrorBody
```

**Async**

```python
try:
    response = await async_client.data_hub.update_datahub_dataset("My Custom Dataset", DatahubV1DatasetsRequest2())
    # TODO: Handle 'response' of type DatahubV1DatasetsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDatahubDatasetErrorBody
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

**OnSuccess**: <code>[DatahubV1DatasetsResponse1](doi_t/models/datahub_v1_datasets_response1.py)</code> -- OK - Dataset updated successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateDatahubDatasetErrorBody](doi_t/errors/update_datahub_dataset_error.py)&#93;</code>

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
<summary><code>def get_dimensions(type_: DimensionsTypesOrStr, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> DimensionsExternalApiGetResponse</code></summary>

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
try:
    response = client.dimensions.get_dimensions(DimensionsTypes.FIXED, "service_description")
    # TODO: Handle 'response' of type DimensionsExternalApiGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDimensionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dimensions.get_dimensions(DimensionsTypes.FIXED, "service_description")
    # TODO: Handle 'response' of type DimensionsExternalApiGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDimensionsErrorBody
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

**OnSuccess**: <code>[DimensionsExternalApiGetResponse](doi_t/models/dimensions_external_api_get_response.py)</code> -- OK - The dimension returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetDimensionsErrorBody](doi_t/errors/get_dimensions_error.py)&#93;</code>

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
<summary><code>def list_dimensions(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, sort_by: SortByDoiTDimensionsApiOrStr | None = SortByDoiTDimensionsApi.ID, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> DimensionsExternalApiListResponse</code></summary>

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
try:
    response = client.dimensions.list_dimensions()
    # TODO: Handle 'response' of type DimensionsExternalApiListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDimensionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dimensions.list_dimensions()
    # TODO: Handle 'response' of type DimensionsExternalApiListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDimensionsErrorBody
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

**OnSuccess**: <code>[DimensionsExternalApiListResponse](doi_t/models/dimensions_external_api_list_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListDimensionsErrorBody](doi_t/errors/list_dimensions_error.py)&#93;</code>

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
<summary><code>def create_folder(body: CreateFolderRequest | CreateFolderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Folder</code></summary>

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
try:
    response = client.folders.create_folder(CreateFolderRequest(name="some example string"))
    # TODO: Handle 'response' of type Folder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFolderErrorBody
```

**Async**

```python
try:
    response = await async_client.folders.create_folder(CreateFolderRequest(name="some example string"))
    # TODO: Handle 'response' of type Folder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFolderErrorBody
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

**OnSuccess**: <code>[Folder](doi_t/models/folder.py)</code> -- Created - The folder was created.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateFolderErrorBody](doi_t/errors/create_folder_error.py)&#93;</code>

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
<summary><code>def delete_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.folders.delete_folder("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFolderErrorBody
```

**Async**

```python
try:
    await async_client.folders.delete_folder("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFolderErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteFolderErrorBody](doi_t/errors/delete_folder_error.py)&#93;</code>

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
<summary><code>def get_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Folder</code></summary>

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
try:
    response = client.folders.get_folder("some example string")
    # TODO: Handle 'response' of type Folder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFolderErrorBody
```

**Async**

```python
try:
    response = await async_client.folders.get_folder("some example string")
    # TODO: Handle 'response' of type Folder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFolderErrorBody
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

**OnSuccess**: <code>[Folder](doi_t/models/folder.py)</code> -- OK - Folder returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetFolderErrorBody](doi_t/errors/get_folder_error.py)&#93;</code>

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
<summary><code>def list_folders(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1FoldersResponse</code></summary>

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
try:
    response = client.folders.list_folders()
    # TODO: Handle 'response' of type AnalyticsV1FoldersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFoldersErrorBody
```

**Async**

```python
try:
    response = await async_client.folders.list_folders()
    # TODO: Handle 'response' of type AnalyticsV1FoldersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFoldersErrorBody
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

**OnSuccess**: <code>[AnalyticsV1FoldersResponse](doi_t/models/analytics_v1_folders_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListFoldersErrorBody](doi_t/errors/list_folders_error.py)&#93;</code>

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
<summary><code>def update_folder(id_: str, body: UpdateFolderRequest | UpdateFolderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Folder</code></summary>

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
try:
    response = client.folders.update_folder("some example string", UpdateFolderRequest())
    # TODO: Handle 'response' of type Folder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFolderErrorBody
```

**Async**

```python
try:
    response = await async_client.folders.update_folder("some example string", UpdateFolderRequest())
    # TODO: Handle 'response' of type Folder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFolderErrorBody
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

**OnSuccess**: <code>[Folder](doi_t/models/folder.py)</code> -- OK - Folder updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateFolderErrorBody](doi_t/errors/update_folder_error.py)&#93;</code>

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
<summary><code>def create_geographic_access_custom_region(body: CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessCustomRegion</code></summary>

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
try:
    response = client.geographic_access.create_geographic_access_custom_region(
        CreateGeographicAccessCustomRegionRequest(name="some example string", country_codes=["some example string"]),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type GeographicAccessCustomRegion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateGeographicAccessCustomRegionErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.create_geographic_access_custom_region(
        CreateGeographicAccessCustomRegionRequest(name="some example string", country_codes=["some example string"]),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type GeographicAccessCustomRegion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateGeographicAccessCustomRegionErrorBody
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

**OnSuccess**: <code>[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py)</code> -- Created

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateGeographicAccessCustomRegionErrorBody](doi_t/errors/create_geographic_access_custom_region_error.py)&#93;</code>

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
<summary><code>def delete_customer_geographic_access_scope(target_customer_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.geographic_access.delete_customer_geographic_access_scope(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGeographicAccessScopeErrorBody
```

**Async**

```python
try:
    await async_client.geographic_access.delete_customer_geographic_access_scope(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGeographicAccessScopeErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteCustomerGeographicAccessScopeErrorBody](doi_t/errors/delete_customer_geographic_access_scope_error.py)&#93;</code>

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
<summary><code>def delete_geographic_access_custom_region(custom_region_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.geographic_access.delete_geographic_access_custom_region(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteGeographicAccessCustomRegionErrorBody
```

**Async**

```python
try:
    await async_client.geographic_access.delete_geographic_access_custom_region(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteGeographicAccessCustomRegionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteGeographicAccessCustomRegionErrorBody](doi_t/errors/delete_geographic_access_custom_region_error.py)&#93;</code>

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
<summary><code>def delete_user_geographic_access_scope(target_customer_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.geographic_access.delete_user_geographic_access_scope(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserGeographicAccessScopeErrorBody
```

**Async**

```python
try:
    await async_client.geographic_access.delete_user_geographic_access_scope(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserGeographicAccessScopeErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteUserGeographicAccessScopeErrorBody](doi_t/errors/delete_user_geographic_access_scope_error.py)&#93;</code>

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
<summary><code>def get_customer_geographic_access_scope(target_customer_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessScope</code></summary>

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
try:
    response = client.geographic_access.get_customer_geographic_access_scope(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerGeographicAccessScopeErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.get_customer_geographic_access_scope(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerGeographicAccessScopeErrorBody
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

**OnSuccess**: <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCustomerGeographicAccessScopeErrorBody](doi_t/errors/get_customer_geographic_access_scope_error.py)&#93;</code>

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
<summary><code>def get_geographic_access_custom_region(custom_region_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessCustomRegion</code></summary>

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
try:
    response = client.geographic_access.get_geographic_access_custom_region(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessCustomRegion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGeographicAccessCustomRegionErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.get_geographic_access_custom_region(
        "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessCustomRegion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGeographicAccessCustomRegionErrorBody
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

**OnSuccess**: <code>[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetGeographicAccessCustomRegionErrorBody](doi_t/errors/get_geographic_access_custom_region_error.py)&#93;</code>

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
<summary><code>def get_user_geographic_access_scope(target_customer_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessScope</code></summary>

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
try:
    response = client.geographic_access.get_user_geographic_access_scope(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserGeographicAccessScopeErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.get_user_geographic_access_scope(
        "some example string", "some example string", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserGeographicAccessScopeErrorBody
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

**OnSuccess**: <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetUserGeographicAccessScopeErrorBody](doi_t/errors/get_user_geographic_access_scope_error.py)&#93;</code>

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
<summary><code>def list_geographic_access_countries(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessCountriesResponse</code></summary>

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
try:
    response = client.geographic_access.list_geographic_access_countries(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type GeographicAccessCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGeographicAccessCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.list_geographic_access_countries(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type GeographicAccessCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGeographicAccessCountriesErrorBody
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

**OnSuccess**: <code>[GeographicAccessCountriesResponse](doi_t/models/geographic_access_countries_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGeographicAccessCountriesErrorBody](doi_t/errors/list_geographic_access_countries_error.py)&#93;</code>

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
<summary><code>def list_geographic_access_custom_regions(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessCustomRegionsResponse</code></summary>

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
try:
    response = client.geographic_access.list_geographic_access_custom_regions(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type GeographicAccessCustomRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGeographicAccessCustomRegionsErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.list_geographic_access_custom_regions(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessCustomRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGeographicAccessCustomRegionsErrorBody
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

**OnSuccess**: <code>[GeographicAccessCustomRegionsResponse](doi_t/models/geographic_access_custom_regions_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGeographicAccessCustomRegionsErrorBody](doi_t/errors/list_geographic_access_custom_regions_error.py)&#93;</code>

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
<summary><code>def update_customer_geographic_access_scope(target_customer_id: str, body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessScope</code></summary>

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
try:
    response = client.geographic_access.update_customer_geographic_access_scope(
        "some example string",
        CountryGeographicAccessScopeRequest(country_code="DE"),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGeographicAccessScopeErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.update_customer_geographic_access_scope(
        "some example string",
        CountryGeographicAccessScopeRequest(country_code="DE"),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGeographicAccessScopeErrorBody
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

**OnSuccess**: <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- Updated

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateCustomerGeographicAccessScopeErrorBody](doi_t/errors/update_customer_geographic_access_scope_error.py)&#93;</code>

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
<summary><code>def update_geographic_access_custom_region(custom_region_id: str, body: UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessCustomRegion</code></summary>

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
try:
    response = client.geographic_access.update_geographic_access_custom_region(
        "some example string", UpdateGeographicAccessCustomRegionRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessCustomRegion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGeographicAccessCustomRegionErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.update_geographic_access_custom_region(
        "some example string", UpdateGeographicAccessCustomRegionRequest(), x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GeographicAccessCustomRegion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGeographicAccessCustomRegionErrorBody
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

**OnSuccess**: <code>[GeographicAccessCustomRegion](doi_t/models/geographic_access_custom_region.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateGeographicAccessCustomRegionErrorBody](doi_t/errors/update_geographic_access_custom_region_error.py)&#93;</code>

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
<summary><code>def update_user_geographic_access_scope(target_customer_id: str, user_id: str, body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GeographicAccessScope</code></summary>

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
try:
    response = client.geographic_access.update_user_geographic_access_scope(
        "some example string",
        "some example string",
        CountryGeographicAccessScopeRequest(country_code="DE"),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserGeographicAccessScopeErrorBody
```

**Async**

```python
try:
    response = await async_client.geographic_access.update_user_geographic_access_scope(
        "some example string",
        "some example string",
        CountryGeographicAccessScopeRequest(country_code="DE"),
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ",
    )
    # TODO: Handle 'response' of type GeographicAccessScope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserGeographicAccessScopeErrorBody
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

**OnSuccess**: <code>[GeographicAccessScope](doi_t/models/unions/geographic_access_scope.py)</code> -- Updated

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateUserGeographicAccessScopeErrorBody](doi_t/errors/update_user_geographic_access_scope_error.py)&#93;</code>

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
<summary><code>def delete_insight_result(source_id: SourceIdOrStr, insight_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.insights.delete_insight_result(SourceId.PUBLIC_API, "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInsightResultErrorBody
```

**Async**

```python
try:
    await async_client.insights.delete_insight_result(SourceId.PUBLIC_API, "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInsightResultErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteInsightResultErrorBody](doi_t/errors/delete_insight_result_error.py)&#93;</code>

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
<summary><code>def delete_insight_results(insight_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.insights.delete_insight_results("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInsightResultsErrorBody
```

**Async**

```python
try:
    await async_client.insights.delete_insight_results("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInsightResultsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteInsightResultsErrorBody](doi_t/errors/delete_insight_results_error.py)&#93;</code>

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
<summary><code>def get_insight_resource_results(source_id: str, insight_key: str, *, page_token: str | None = None, max_results: int | None = 1000, request_options: RequestOptionsOrDict | None = None) -> ResourceResultsResponse</code></summary>

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
try:
    response = client.insights.get_insight_resource_results("some example string", "some example string")
    # TODO: Handle 'response' of type ResourceResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightResourceResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_insight_resource_results("some example string", "some example string")
    # TODO: Handle 'response' of type ResourceResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightResourceResultsErrorBody
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

**OnSuccess**: <code>[ResourceResultsResponse](doi_t/models/resource_results_response.py)</code> -- Successful operation

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetInsightResourceResultsErrorBody](doi_t/errors/get_insight_resource_results_error.py)&#93;</code>

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
<summary><code>def get_insight_result(source_id: str, insight_key: str, *, request_options: RequestOptionsOrDict | None = None) -> InsightResponse</code></summary>

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
try:
    response = client.insights.get_insight_result("some example string", "some example string")
    # TODO: Handle 'response' of type InsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightResultErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_insight_result("some example string", "some example string")
    # TODO: Handle 'response' of type InsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightResultErrorBody
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

**OnSuccess**: <code>[InsightResponse](doi_t/models/insight_response.py)</code> -- Successful operation

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetInsightResultErrorBody](doi_t/errors/get_insight_result_error.py)&#93;</code>

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
<summary><code>def get_insight_results(*, search_term: str | None = None, display_status: list[DisplayStatus1OrStr] | None = None, category: Category1OrStr | None = None, cloud_provider: str | None = None, source: list[str] | None = None, priority: list[Priority1OrStr] | None = None, tag: list[str] | None = None, easy_win: bool | None = None, cloud_flows: bool | None = None, page_token: str | None = None, max_results: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ResultsBody</code></summary>

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
try:
    response = client.insights.get_insight_results(cloud_provider="aws")
    # TODO: Handle 'response' of type ResultsBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_insight_results(cloud_provider="aws")
    # TODO: Handle 'response' of type ResultsBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightResultsErrorBody
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

**OnSuccess**: <code>[ResultsBody](doi_t/models/results_body.py)</code> -- Successful operation

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetInsightResultsErrorBody](doi_t/errors/get_insight_results_error.py)&#93;</code>

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
<summary><code>def post_insight_resource_results(source_id: SourceIdOrStr, insight_key: str, body: CreateResourceResultsBody | CreateResourceResultsBodyDict, *, max_results: int | None = 1000, request_options: RequestOptionsOrDict | None = None) -> ResourceResultsResponse</code></summary>

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
try:
    response = client.insights.post_insight_resource_results(
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
    # TODO: Handle 'response' of type ResourceResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostInsightResourceResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.post_insight_resource_results(
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
    # TODO: Handle 'response' of type ResourceResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostInsightResourceResultsErrorBody
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

**OnSuccess**: <code>[ResourceResultsResponse](doi_t/models/resource_results_response.py)</code> -- Resource results created/replaced successfully

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[PostInsightResourceResultsErrorBody](doi_t/errors/post_insight_resource_results_error.py)&#93;</code>

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
<summary><code>def post_insight_result(source_id: SourceIdOrStr, insight_key: str, body: InsightMetadataRequest | InsightMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> InsightResponse</code></summary>

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
try:
    response = client.insights.post_insight_result(
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
    # TODO: Handle 'response' of type InsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostInsightResultErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.post_insight_result(
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
    # TODO: Handle 'response' of type InsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostInsightResultErrorBody
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

**OnSuccess**: <code>[InsightResponse](doi_t/models/insight_response.py)</code> -- Successful operation

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[PostInsightResultErrorBody](doi_t/errors/post_insight_result_error.py)&#93;</code>

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
<summary><code>def post_insight_results(*, body: CreateResultsBody | CreateResultsBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ResultsError]</code></summary>

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
try:
    response = client.insights.post_insight_results()
    # TODO: Handle 'response' of type list[ResultsError]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostInsightResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.post_insight_results()
    # TODO: Handle 'response' of type list[ResultsError]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostInsightResultsErrorBody
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

**OnSuccess**: <code>list&#91;[ResultsError](doi_t/models/results_error.py)&#93;</code> -- Successful operation

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[PostInsightResultsErrorBody](doi_t/errors/post_insight_results_error.py)&#93;</code>

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
<summary><code>def update_insight_status(source_id: SourceIdOrStr, insight_key: str, body: UpdateStatusRequest | UpdateStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.insights.update_insight_status(
        SourceId.PUBLIC_API, "some example string", UpdateStatusRequest(status=DisplayStatus.ACTIONABLE)
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInsightStatusErrorBody
```

**Async**

```python
try:
    await async_client.insights.update_insight_status(
        SourceId.PUBLIC_API, "some example string", UpdateStatusRequest(status=DisplayStatus.ACTIONABLE)
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInsightStatusErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateInsightStatusErrorBody](doi_t/errors/update_insight_status_error.py)&#93;</code>

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
<summary><code>def get_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> BillingV1InvoicesResponse1</code></summary>

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
try:
    response = client.invoices.get_invoice("some example string")
    # TODO: Handle 'response' of type BillingV1InvoicesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.get_invoice("some example string")
    # TODO: Handle 'response' of type BillingV1InvoicesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceErrorBody
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

**OnSuccess**: <code>[BillingV1InvoicesResponse1](doi_t/models/billing_v1_invoices_response1.py)</code> -- OK - Invoice details returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetInvoiceErrorBody](doi_t/errors/get_invoice_error.py)&#93;</code>

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
<summary><code>def list_invoices(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, min_creation_time: int | None = None, max_creation_time: int | None = None, request_options: RequestOptionsOrDict | None = None) -> BillingV1InvoicesResponse</code></summary>

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
try:
    response = client.invoices.list_invoices()
    # TODO: Handle 'response' of type BillingV1InvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.list_invoices()
    # TODO: Handle 'response' of type BillingV1InvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
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

**OnSuccess**: <code>[BillingV1InvoicesResponse](doi_t/models/billing_v1_invoices_response.py)</code> -- OK - All available invoices returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListInvoicesErrorBody](doi_t/errors/list_invoices_error.py)&#93;</code>

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
<summary><code>def assign_objects_to_label(id_: str, body: AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.labels.assign_objects_to_label("some example string", AssignObjectsToLabelRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignObjectsToLabelErrorBody
```

**Async**

```python
try:
    await async_client.labels.assign_objects_to_label("some example string", AssignObjectsToLabelRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignObjectsToLabelErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AssignObjectsToLabelErrorBody](doi_t/errors/assign_objects_to_label_error.py)&#93;</code>

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
<summary><code>def create_label(body: CreateLabelRequest | CreateLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> LabelListItem</code></summary>

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
try:
    response = client.labels.create_label(CreateLabelRequest(name="some example string", color=Color.BLUE))
    # TODO: Handle 'response' of type LabelListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLabelErrorBody
```

**Async**

```python
try:
    response = await async_client.labels.create_label(CreateLabelRequest(name="some example string", color=Color.BLUE))
    # TODO: Handle 'response' of type LabelListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLabelErrorBody
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

**OnSuccess**: <code>[LabelListItem](doi_t/models/label_list_item.py)</code> -- Created - Label created successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateLabelErrorBody](doi_t/errors/create_label_error.py)&#93;</code>

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
<summary><code>def delete_label(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.labels.delete_label("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteLabelErrorBody
```

**Async**

```python
try:
    response = await async_client.labels.delete_label("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteLabelErrorBody
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

**OnSuccess**: <code>Any</code> -- OK - Label deleted.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteLabelErrorBody](doi_t/errors/delete_label_error.py)&#93;</code>

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
<summary><code>def get_label(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> LabelListItem</code></summary>

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
try:
    response = client.labels.get_label("some example string")
    # TODO: Handle 'response' of type LabelListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLabelErrorBody
```

**Async**

```python
try:
    response = await async_client.labels.get_label("some example string")
    # TODO: Handle 'response' of type LabelListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLabelErrorBody
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

**OnSuccess**: <code>[LabelListItem](doi_t/models/label_list_item.py)</code> -- OK - Label returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetLabelErrorBody](doi_t/errors/get_label_error.py)&#93;</code>

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
<summary><code>def get_label_assignments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> LabelAssignmentsResponse</code></summary>

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
try:
    response = client.labels.get_label_assignments("some example string")
    # TODO: Handle 'response' of type LabelAssignmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLabelAssignmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.labels.get_label_assignments("some example string")
    # TODO: Handle 'response' of type LabelAssignmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLabelAssignmentsErrorBody
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

**OnSuccess**: <code>[LabelAssignmentsResponse](doi_t/models/label_assignments_response.py)</code> -- OK - Label assignments returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetLabelAssignmentsErrorBody](doi_t/errors/get_label_assignments_error.py)&#93;</code>

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
<summary><code>def list_labels(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, sort_by: SortByDoiTLabelsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> LabelList</code></summary>

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
try:
    response = client.labels.list_labels(filter_="name:budget", name_contains="monthly spend")
    # TODO: Handle 'response' of type LabelList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLabelsErrorBody
```

**Async**

```python
try:
    response = await async_client.labels.list_labels(filter_="name:budget", name_contains="monthly spend")
    # TODO: Handle 'response' of type LabelList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLabelsErrorBody
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

**OnSuccess**: <code>[LabelList](doi_t/models/label_list.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListLabelsErrorBody](doi_t/errors/list_labels_error.py)&#93;</code>

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
<summary><code>def update_label(id_: str, *, body: UpdateLabelRequest | UpdateLabelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> LabelListItem</code></summary>

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
try:
    response = client.labels.update_label("some example string")
    # TODO: Handle 'response' of type LabelListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLabelErrorBody
```

**Async**

```python
try:
    response = await async_client.labels.update_label("some example string")
    # TODO: Handle 'response' of type LabelListItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLabelErrorBody
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

**OnSuccess**: <code>[LabelListItem](doi_t/models/label_list_item.py)</code> -- OK - Label updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateLabelErrorBody](doi_t/errors/update_label_error.py)&#93;</code>

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
<summary><code>def list_organizations(*, request_options: RequestOptionsOrDict | None = None) -> IamV1OrganizationsResponse</code></summary>

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
try:
    response = client.organizations.list_organizations()
    # TODO: Handle 'response' of type IamV1OrganizationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.list_organizations()
    # TODO: Handle 'response' of type IamV1OrganizationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationsErrorBody
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

**OnSuccess**: <code>[IamV1OrganizationsResponse](doi_t/models/iam_v1_organizations_response.py)</code> -- OK - List of organizations returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListOrganizationsErrorBody](doi_t/errors/list_organizations_error.py)&#93;</code>

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
<summary><code>def get_aws_member_account(management_account_id: str, member_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AwsMemberAccountDetail</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.get_aws_member_account(
        "123456789012", "987654321098", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsMemberAccountDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsMemberAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.get_aws_member_account(
        "123456789012", "987654321098", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsMemberAccountDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsMemberAccountErrorBody
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

**OnSuccess**: <code>[AwsMemberAccountDetail](doi_t/models/aws_member_account_detail.py)</code> -- Single AWS member account details (same list-item fields as provided for the organization through list member accounts operation) and overview time series: 6 months stats and 30 days of commitment coverage.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAwsMemberAccountErrorBody](doi_t/errors/get_aws_member_account_error.py)&#93;</code>

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
<summary><code>def get_aws_organization(management_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AwsOrganizationDetail</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.get_aws_organization(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsOrganizationDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsOrganizationErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.get_aws_organization(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsOrganizationDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsOrganizationErrorBody
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

**OnSuccess**: <code>[AwsOrganizationDetail](doi_t/models/aws_organization_detail.py)</code> -- Single AWS organization details (same list-item fields as provided for the organization through list AWS organization operation) and overview time series: 6 months stats and 30 days of commitment coverage.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAwsOrganizationErrorBody](doi_t/errors/get_aws_organization_error.py)&#93;</code>

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
<summary><code>def get_aws_recommendation(management_account_id: str, service_id: ServiceIdOrStr, *, granularity: GranularityOrStr | None = Granularity.DAY, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AwsRecommendationWithEligibleSpend</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.get_aws_recommendation(
        "123456789012", ServiceId.COMPUTE, x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsRecommendationWithEligibleSpend
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.get_aws_recommendation(
        "123456789012", ServiceId.COMPUTE, x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsRecommendationWithEligibleSpend
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAwsRecommendationErrorBody
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

**OnSuccess**: <code>[AwsRecommendationWithEligibleSpend](doi_t/models/aws_recommendation_with_eligible_spend.py)</code> -- Commitment type recommendation together with the eligible-spend time series used for analysis and charting.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAwsRecommendationErrorBody](doi_t/errors/get_aws_recommendation_error.py)&#93;</code>

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
<summary><code>def list_aws_member_accounts(management_account_id: str, *, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.list_aws_member_accounts(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsMemberAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.list_aws_member_accounts(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsMemberAccountsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse](doi_t/models/ps4_commitments_v1_aws_organizations_member_accounts_response.py)</code> -- List of member accounts.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAwsMemberAccountsErrorBody](doi_t/errors/list_aws_member_accounts_error.py)&#93;</code>

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
<summary><code>def list_aws_organizations(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1AwsOrganizationsResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.list_aws_organizations(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsOrganizationsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.list_aws_organizations(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsOrganizationsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsResponse](doi_t/models/ps4_commitments_v1_aws_organizations_response.py)</code> -- List of AWS Organizations. One item per AWS organization.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAwsOrganizationsErrorBody](doi_t/errors/list_aws_organizations_error.py)&#93;</code>

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
<summary><code>def list_aws_organizations_settings(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1AwsSettingsResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.list_aws_organizations_settings(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsOrganizationsSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.list_aws_organizations_settings(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsOrganizationsSettingsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1AwsSettingsResponse](doi_t/models/ps4_commitments_v1_aws_settings_response.py)</code> -- Settings payload for one onboarded AWS organization, with that AWS organization's purchasing account (`purchaseAccountId`) and organization-specific commitment settings for each activated commitment type (`services[].settings`).

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAwsOrganizationsSettingsErrorBody](doi_t/errors/list_aws_organizations_settings_error.py)&#93;</code>

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
<summary><code>def list_aws_planned_purchases(management_account_id: str, *, service: Service2OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.list_aws_planned_purchases(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsPlannedPurchasesErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.list_aws_planned_purchases(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsPlannedPurchasesErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse](doi_t/models/ps4_commitments_v1_aws_organizations_planned_purchases_response.py)</code> -- Paginated list of planned purchase projections.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAwsPlannedPurchasesErrorBody](doi_t/errors/list_aws_planned_purchases_error.py)&#93;</code>

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
<summary><code>def list_aws_recommendations(management_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AwsRecommendations</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.list_aws_recommendations(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsRecommendations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsRecommendationsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.list_aws_recommendations(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type AwsRecommendations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsRecommendationsErrorBody
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

**OnSuccess**: <code>[AwsRecommendations](doi_t/models/aws_recommendations.py)</code> -- List with recommendations for each onboarded commitment type. A commitment type property is present only when that commitment type is onboarded and a recommendation is available.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAwsRecommendationsErrorBody](doi_t/errors/list_aws_recommendations_error.py)&#93;</code>

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
<summary><code>def list_aws_reserved_instances(management_account_id: str, *, status: Status3OrStr | None = None, instance_type: str | None = None, instance_family: str | None = None, region: str | None = None, offering_class: OfferingClass1OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.list_aws_reserved_instances(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsReservedInstancesErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.list_aws_reserved_instances(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsReservedInstancesErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse](doi_t/models/ps4_commitments_v1_aws_organizations_reserved_instances_response.py)</code> -- Paginated list of Reserved Instances.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAwsReservedInstancesErrorBody](doi_t/errors/list_aws_reserved_instances_error.py)&#93;</code>

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
<summary><code>def list_aws_savings_plans(management_account_id: str, *, type_: TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None = None, status: Status2OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_aws.list_aws_savings_plans(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsSavingsPlansErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_aws.list_aws_savings_plans(
        "123456789012", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAwsSavingsPlansErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse](doi_t/models/ps4_commitments_v1_aws_organizations_savings_plans_response.py)</code> -- Paginated list of Savings Plans.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListAwsSavingsPlansErrorBody](doi_t/errors/list_aws_savings_plans_error.py)&#93;</code>

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
<summary><code>def get_gcp_billing_account(billing_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GcpBillingAccountDetail</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.get_gcp_billing_account(
        "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GcpBillingAccountDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGcpBillingAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.get_gcp_billing_account(
        "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GcpBillingAccountDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGcpBillingAccountErrorBody
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

**OnSuccess**: <code>[GcpBillingAccountDetail](doi_t/models/gcp_billing_account_detail.py)</code> -- Single GCP Billing Account details (same list-item fields as provided for the billing account through list GCP billing accounts operation) and overview time series: 6 months stats and 30 days of CUD coverage.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetGcpBillingAccountErrorBody](doi_t/errors/get_gcp_billing_account_error.py)&#93;</code>

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
<summary><code>def get_gcp_recommendation(billing_account_id: str, gcp_service: GcpServiceOrStr, *, region: str | None = None, granularity: GranularityOrStr | None = Granularity.DAY, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GcpRecommendationWithEligibleSpend</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.get_gcp_recommendation(
        "01D4A2-4E3F1B-9C72A0", GcpService.COMPUTE, region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GcpRecommendationWithEligibleSpend
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGcpRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.get_gcp_recommendation(
        "01D4A2-4E3F1B-9C72A0", GcpService.COMPUTE, region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type GcpRecommendationWithEligibleSpend
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGcpRecommendationErrorBody
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

**OnSuccess**: <code>[GcpRecommendationWithEligibleSpend](doi_t/models/gcp_recommendation_with_eligible_spend.py)</code> -- Recommendation detail with eligible-spend usage series.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetGcpRecommendationErrorBody](doi_t/errors/get_gcp_recommendation_error.py)&#93;</code>

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
<summary><code>def list_gcp_billing_accounts(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1GcpBillingAccountsResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.list_gcp_billing_accounts(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpBillingAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.list_gcp_billing_accounts(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpBillingAccountsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_response.py)</code> -- List of GCP Billing Accounts. One item per billing account.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGcpBillingAccountsErrorBody](doi_t/errors/list_gcp_billing_accounts_error.py)&#93;</code>

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
<summary><code>def list_gcp_billing_accounts_settings(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1GcpSettingsResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.list_gcp_billing_accounts_settings(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpBillingAccountsSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.list_gcp_billing_accounts_settings(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpBillingAccountsSettingsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1GcpSettingsResponse](doi_t/models/ps4_commitments_v1_gcp_settings_response.py)</code> -- Settings payload for one onboarded GCP Billing Account, broken down by activated product line (`services[].settings`).

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGcpBillingAccountsSettingsErrorBody](doi_t/errors/list_gcp_billing_accounts_settings_error.py)&#93;</code>

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
<summary><code>def list_gcp_planned_purchases(billing_account_id: str, *, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.list_gcp_planned_purchases(
        "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpPlannedPurchasesErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.list_gcp_planned_purchases(
        "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpPlannedPurchasesErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_planned_purchases_response.py)</code> -- List of planned purchase projections grouped by service and region.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGcpPlannedPurchasesErrorBody](doi_t/errors/list_gcp_planned_purchases_error.py)&#93;</code>

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
<summary><code>def list_gcp_recommendations(billing_account_id: str, *, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.list_gcp_recommendations(
        "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpRecommendationsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.list_gcp_recommendations(
        "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpRecommendationsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_recommendations_response.py)</code> -- List of GCP recommendations.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGcpRecommendationsErrorBody](doi_t/errors/list_gcp_recommendations_error.py)&#93;</code>

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
<summary><code>def list_gcp_resource_cuds(billing_account_id: str, *, status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.list_gcp_resource_cuds(
        "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpResourceCudsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.list_gcp_resource_cuds(
        "01D4A2-4E3F1B-9C72A0", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpResourceCudsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_resource_based_response.py)</code> -- Paginated list of resource-based CUDs.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGcpResourceCudsErrorBody](doi_t/errors/list_gcp_resource_cuds_error.py)&#93;</code>

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
<summary><code>def list_gcp_spend_cuds(billing_account_id: str, *, status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_gcp.list_gcp_spend_cuds(
        "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpSpendCudsErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_gcp.list_gcp_spend_cuds(
        "01D4A2-4E3F1B-9C72A0", region="us_east1", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGcpSpendCudsErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse](doi_t/models/ps4_commitments_v1_gcp_billing_accounts_spend_based_response.py)</code> -- Paginated list of spend-based CUDs.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListGcpSpendCudsErrorBody](doi_t/errors/list_gcp_spend_cuds_error.py)&#93;</code>

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
<summary><code>def get_commitment_policy(policy_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CommitmentPolicyDetail</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_general.get_commitment_policy(
        "balanced", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CommitmentPolicyDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCommitmentPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_general.get_commitment_policy(
        "balanced", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type CommitmentPolicyDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCommitmentPolicyErrorBody
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

**OnSuccess**: <code>[CommitmentPolicyDetail](doi_t/models/commitment_policy_detail.py)</code> -- The commitment policy with its assignments.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCommitmentPolicyErrorBody](doi_t/errors/get_commitment_policy_error.py)&#93;</code>

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
<summary><code>def list_commitment_policies(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ps4CommitmentsV1GeneralPoliciesResponse</code></summary>

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
try:
    response = client.perfect_scale_for_commitments_general.list_commitment_policies(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type Ps4CommitmentsV1GeneralPoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCommitmentPoliciesErrorBody
```

**Async**

```python
try:
    response = await async_client.perfect_scale_for_commitments_general.list_commitment_policies(
        x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Ps4CommitmentsV1GeneralPoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCommitmentPoliciesErrorBody
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

**OnSuccess**: <code>[Ps4CommitmentsV1GeneralPoliciesResponse](doi_t/models/ps4_commitments_v1_general_policies_response.py)</code> -- One page of the tenant's commitment policies.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCommitmentPoliciesErrorBody](doi_t/errors/list_commitment_policies_error.py)&#93;</code>

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
<summary><code>def list_platforms(*, request_options: RequestOptionsOrDict | None = None) -> SupportV1MetadataPlatformsResponse</code></summary>

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
try:
    response = client.platforms.list_platforms()
    # TODO: Handle 'response' of type SupportV1MetadataPlatformsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlatformsErrorBody
```

**Async**

```python
try:
    response = await async_client.platforms.list_platforms()
    # TODO: Handle 'response' of type SupportV1MetadataPlatformsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlatformsErrorBody
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

**OnSuccess**: <code>[SupportV1MetadataPlatformsResponse](doi_t/models/support_v1_metadata_platforms_response.py)</code> -- OK - List of available platforms returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListPlatformsErrorBody](doi_t/errors/list_platforms_error.py)&#93;</code>

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
<summary><code>def list_products(*, platform: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SupportV1MetadataProductsResponse</code></summary>

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
try:
    response = client.products.list_products()
    # TODO: Handle 'response' of type SupportV1MetadataProductsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProductsErrorBody
```

**Async**

```python
try:
    response = await async_client.products.list_products()
    # TODO: Handle 'response' of type SupportV1MetadataProductsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProductsErrorBody
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

**OnSuccess**: <code>[SupportV1MetadataProductsResponse](doi_t/models/support_v1_metadata_products_response.py)</code> -- OK - List of available products returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListProductsErrorBody](doi_t/errors/list_products_error.py)&#93;</code>

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
<summary><code>def async_run_inline(idempotency_key: str, *, dry_run: bool | None = None, body: AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AsyncOperationResponse</code></summary>

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
try:
    response = client.reports.async_run_inline(
        "some example string",
        body=AnalyticsV1ReportsActionsRunRequest(
            config=ExternalConfig(
                metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
                time_interval=TimeIntervalDoiTReportsApi.MONTH,
                time_range=TimeSettings(amount=1, mode=Mode2.LAST, unit=Unit.MONTH),
            ),
        ),
    )
    # TODO: Handle 'response' of type AsyncOperationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsyncRunInlineErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.async_run_inline(
        "some example string",
        body=AnalyticsV1ReportsActionsRunRequest(
            config=ExternalConfig(
                metrics=[ExternalMetric(type_=Type2DoiTReportsApi.BASIC, value="cost")],
                time_interval=TimeIntervalDoiTReportsApi.MONTH,
                time_range=TimeSettings(amount=1, mode=Mode2.LAST, unit=Unit.MONTH),
            ),
        ),
    )
    # TODO: Handle 'response' of type AsyncOperationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsyncRunInlineErrorBody
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

**OnSuccess**: <code>[AsyncOperationResponse](doi_t/models/async_operation_response.py)</code> -- Accepted — async operation created. The Location header contains the URL to poll for status.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AsyncRunInlineErrorBody](doi_t/errors/async_run_inline_error.py)&#93;</code>

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
<summary><code>def async_run_report_by_id(id_: str, idempotency_key: str, *, dry_run: bool | None = None, time_range: str | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> AsyncOperationResponse</code></summary>

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
try:
    response = client.reports.async_run_report_by_id(
        "some example string",
        "some example string",
        time_range="P7D",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 1, 31),
    )
    # TODO: Handle 'response' of type AsyncOperationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsyncRunReportByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.async_run_report_by_id(
        "some example string",
        "some example string",
        time_range="P7D",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 1, 31),
    )
    # TODO: Handle 'response' of type AsyncOperationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsyncRunReportByIdErrorBody
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

**OnSuccess**: <code>[AsyncOperationResponse](doi_t/models/async_operation_response.py)</code> -- Accepted — async operation created. The Location header contains the URL to poll for status.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AsyncRunReportByIdErrorBody](doi_t/errors/async_run_report_by_id_error.py)&#93;</code>

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
<summary><code>def cancel_async_operation(operation_id: str, idempotency_key: str, *, dry_run: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> AsyncOperationResponse</code></summary>

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
try:
    response = client.reports.cancel_async_operation("some example string", "some example string")
    # TODO: Handle 'response' of type AsyncOperationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelAsyncOperationErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.cancel_async_operation("some example string", "some example string")
    # TODO: Handle 'response' of type AsyncOperationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelAsyncOperationErrorBody
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

**OnSuccess**: <code>[AsyncOperationResponse](doi_t/models/async_operation_response.py)</code> -- OK — operation state returned. On dry-run, the X-Dry-Run response header is set to "true" and status is "dry_run".

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CancelAsyncOperationErrorBody](doi_t/errors/cancel_async_operation_error.py)&#93;</code>

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
<summary><code>def create_report(*, body: AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ExternalReport</code></summary>

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
try:
    response = client.reports.create_report(
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
    # TODO: Handle 'response' of type ExternalReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReportErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.create_report(
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
    # TODO: Handle 'response' of type ExternalReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReportErrorBody
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

**OnSuccess**: <code>[ExternalReport](doi_t/models/external_report.py)</code> -- Created - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateReportErrorBody](doi_t/errors/create_report_error.py)&#93;</code>

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
<summary><code>def delete_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.reports.delete_report("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.delete_report("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportErrorBody
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

**OnSuccess**: <code>Any</code> -- OK - Report deleted.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteReportErrorBody](doi_t/errors/delete_report_error.py)&#93;</code>

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
<summary><code>def get_async_operation(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> AsyncOperationPollResponse</code></summary>

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
try:
    response = client.reports.get_async_operation("some example string")
    # TODO: Handle 'response' of type AsyncOperationPollResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAsyncOperationErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_async_operation("some example string")
    # TODO: Handle 'response' of type AsyncOperationPollResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAsyncOperationErrorBody
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

**OnSuccess**: <code>[AsyncOperationPollResponse](doi_t/models/async_operation_poll_response.py)</code> -- OK — current operation state. The Retry-After response header is present only on pending/running responses.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAsyncOperationErrorBody](doi_t/errors/get_async_operation_error.py)&#93;</code>

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
<summary><code>def get_async_operation_results(operation_id: str, *, file_output: FileOutputOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1ReportsOperationsResultsResponse</code></summary>

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
try:
    response = client.reports.get_async_operation_results("some example string", file_output=FileOutput.PDF)
    # TODO: Handle 'response' of type AnalyticsV1ReportsOperationsResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAsyncOperationResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_async_operation_results("some example string", file_output=FileOutput.PDF)
    # TODO: Handle 'response' of type AnalyticsV1ReportsOperationsResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAsyncOperationResultsErrorBody
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

**OnSuccess**: <code>[AnalyticsV1ReportsOperationsResultsResponse](doi_t/models/analytics_v1_reports_operations_results_response.py)</code> -- OK — the operation succeeded; body is the report result, plus report metadata when the operation was started against a saved report, plus a fileOutput URL when one was requested.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetAsyncOperationResultsErrorBody](doi_t/errors/get_async_operation_results_error.py)&#93;</code>

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
<summary><code>def get_report(id_: str, *, time_range: str | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> GetReportResponse</code></summary>

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
try:
    response = client.reports.get_report(
        "some example string", time_range="P7D", start_date=date(2025, 1, 1), end_date=date(2025, 1, 31)
    )
    # TODO: Handle 'response' of type GetReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_report(
        "some example string", time_range="P7D", start_date=date(2025, 1, 1), end_date=date(2025, 1, 31)
    )
    # TODO: Handle 'response' of type GetReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportErrorBody
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

**OnSuccess**: <code>[GetReportResponse](doi_t/models/get_report_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetReportErrorBody](doi_t/errors/get_report_error.py)&#93;</code>

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
<summary><code>def get_report_config(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ExternalReport</code></summary>

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
try:
    response = client.reports.get_report_config("some example string")
    # TODO: Handle 'response' of type ExternalReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_report_config("some example string")
    # TODO: Handle 'response' of type ExternalReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportConfigErrorBody
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

**OnSuccess**: <code>[ExternalReport](doi_t/models/external_report.py)</code> -- OK - Report configuration returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetReportConfigErrorBody](doi_t/errors/get_report_config_error.py)&#93;</code>

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
<summary><code>def list_reports(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReportList</code></summary>

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
try:
    response = client.reports.list_reports(filter_="reportName:This Month vs. Last", name_contains="monthly spend")
    # TODO: Handle 'response' of type ReportList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportsErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.list_reports(
        filter_="reportName:This Month vs. Last", name_contains="monthly spend"
    )
    # TODO: Handle 'response' of type ReportList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportsErrorBody
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

**OnSuccess**: <code>[ReportList](doi_t/models/report_list.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListReportsErrorBody](doi_t/errors/list_reports_error.py)&#93;</code>

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
<summary><code>def query(*, body: AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RunReportResult</code></summary>

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
try:
    response = client.reports.query(
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
    # TODO: Handle 'response' of type RunReportResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.query(
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
    # TODO: Handle 'response' of type RunReportResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryErrorBody
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

**OnSuccess**: <code>[RunReportResult](doi_t/models/run_report_result.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[QueryErrorBody](doi_t/errors/query_error.py)&#93;</code>

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
<summary><code>def update_report(id_: str, *, body: ExternalUpdateReport | ExternalUpdateReportDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ExternalReport</code></summary>

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
try:
    response = client.reports.update_report("some example string")
    # TODO: Handle 'response' of type ExternalReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateReportErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.update_report("some example string")
    # TODO: Handle 'response' of type ExternalReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateReportErrorBody
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

**OnSuccess**: <code>[ExternalReport](doi_t/models/external_report.py)</code> -- OK - Report updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateReportErrorBody](doi_t/errors/update_report_error.py)&#93;</code>

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
<summary><code>def create_role(idempotency_key: str, body: CreateRoleRequest | CreateRoleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RoleDoiTRolesApi</code></summary>

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
try:
    response = client.roles.create_role(
        "some example string",
        CreateRoleRequest(
            name="FinOps Analyst",
            description="Read-only access to cost reports and budgets",
            permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
        ),
    )
    # TODO: Handle 'response' of type RoleDoiTRolesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRoleErrorBody
```

**Async**

```python
try:
    response = await async_client.roles.create_role(
        "some example string",
        CreateRoleRequest(
            name="FinOps Analyst",
            description="Read-only access to cost reports and budgets",
            permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
        ),
    )
    # TODO: Handle 'response' of type RoleDoiTRolesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRoleErrorBody
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

**OnSuccess**: <code>[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py)</code> -- Created - Role created.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateRoleErrorBody](doi_t/errors/create_role_error.py)&#93;</code>

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
<summary><code>def delete_role(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.roles.delete_role("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRoleErrorBody
```

**Async**

```python
try:
    await async_client.roles.delete_role("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRoleErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteRoleErrorBody](doi_t/errors/delete_role_error.py)&#93;</code>

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
<summary><code>def get_role(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> RoleDoiTRolesApi</code></summary>

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
try:
    response = client.roles.get_role("some example string")
    # TODO: Handle 'response' of type RoleDoiTRolesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRoleErrorBody
```

**Async**

```python
try:
    response = await async_client.roles.get_role("some example string")
    # TODO: Handle 'response' of type RoleDoiTRolesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRoleErrorBody
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

**OnSuccess**: <code>[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py)</code> -- OK - Role returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetRoleErrorBody](doi_t/errors/get_role_error.py)&#93;</code>

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
<summary><code>def list_roles(*, request_options: RequestOptionsOrDict | None = None) -> IamV1RolesResponse</code></summary>

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
try:
    response = client.roles.list_roles()
    # TODO: Handle 'response' of type IamV1RolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.roles.list_roles()
    # TODO: Handle 'response' of type IamV1RolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRolesErrorBody
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

**OnSuccess**: <code>[IamV1RolesResponse](doi_t/models/iam_v1_roles_response.py)</code> -- OK - List of roles returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListRolesErrorBody](doi_t/errors/list_roles_error.py)&#93;</code>

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
<summary><code>def update_role(id_: str, body: UpdateRoleRequest | UpdateRoleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RoleDoiTRolesApi</code></summary>

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
try:
    response = client.roles.update_role(
        "some example string",
        UpdateRoleRequest(
            name="FinOps Analyst",
            description="Read-only access to cost reports and budgets",
            permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
        ),
    )
    # TODO: Handle 'response' of type RoleDoiTRolesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRoleErrorBody
```

**Async**

```python
try:
    response = await async_client.roles.update_role(
        "some example string",
        UpdateRoleRequest(
            name="FinOps Analyst",
            description="Read-only access to cost reports and budgets",
            permissions=["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
        ),
    )
    # TODO: Handle 'response' of type RoleDoiTRolesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRoleErrorBody
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

**OnSuccess**: <code>[RoleDoiTRolesApi](doi_t/models/role_doi_t_roles_api.py)</code> -- OK - Role updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateRoleErrorBody](doi_t/errors/update_role_error.py)&#93;</code>

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
<summary><code>def create_service_account(idempotency_key: str, body: CreateServiceAccountRequest | CreateServiceAccountRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ServiceAccount</code></summary>

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
try:
    response = client.service_accounts.create_service_account(
        "some example string",
        CreateServiceAccountRequest(
            name="terraform-ci",
            description="Manages DoiT resources from CI",
            permissions=["cloudAnalyticsReadOnly", "budgetsManager"],
        ),
    )
    # TODO: Handle 'response' of type ServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateServiceAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.create_service_account(
        "some example string",
        CreateServiceAccountRequest(
            name="terraform-ci",
            description="Manages DoiT resources from CI",
            permissions=["cloudAnalyticsReadOnly", "budgetsManager"],
        ),
    )
    # TODO: Handle 'response' of type ServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateServiceAccountErrorBody
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

**OnSuccess**: <code>[ServiceAccount](doi_t/models/service_account.py)</code> -- OK - Dry run only (`dryRun=true`). Every check of a real create passed and nothing was created; `id`, `createTime`, `updateTime` and `etag` are `null`.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateServiceAccountErrorBody](doi_t/errors/create_service_account_error.py)&#93;</code>

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
<summary><code>def create_service_account_token(service_account_id: str, idempotency_key: str, body: CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> CreateServiceAccountTokenResponse</code></summary>

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
try:
    response = client.service_accounts.create_service_account_token(
        "some example string",
        "some example string",
        CreateServiceAccountTokenRequest(
            name="ci-pipeline-prod", expires_time=datetime(2027, 9, 1, 8, 0, 0, tzinfo=timezone.utc)
        ),
    )
    # TODO: Handle 'response' of type CreateServiceAccountTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateServiceAccountTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.create_service_account_token(
        "some example string",
        "some example string",
        CreateServiceAccountTokenRequest(
            name="ci-pipeline-prod", expires_time=datetime(2027, 9, 1, 8, 0, 0, tzinfo=timezone.utc)
        ),
    )
    # TODO: Handle 'response' of type CreateServiceAccountTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateServiceAccountTokenErrorBody
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

**OnSuccess**: <code>[CreateServiceAccountTokenResponse](doi_t/models/create_service_account_token_response.py)</code> -- OK - Dry run only (`dryRun=true`). The name passed its bounds check and nothing was created; `id` and `createTime` are `null` and `accessToken` is an empty string. Not a guarantee that a real create would succeed — see the operation description.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateServiceAccountTokenErrorBody](doi_t/errors/create_service_account_token_error.py)&#93;</code>

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
<summary><code>def delete_service_account(id_: str, if_match: str, idempotency_key: str, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.service_accounts.delete_service_account("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteServiceAccountErrorBody
```

**Async**

```python
try:
    await async_client.service_accounts.delete_service_account(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteServiceAccountErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteServiceAccountErrorBody](doi_t/errors/delete_service_account_error.py)&#93;</code>

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
<summary><code>def delete_service_account_token(service_account_id: str, id_: str, idempotency_key: str, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.service_accounts.delete_service_account_token(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteServiceAccountTokenErrorBody
```

**Async**

```python
try:
    await async_client.service_accounts.delete_service_account_token(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteServiceAccountTokenErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteServiceAccountTokenErrorBody](doi_t/errors/delete_service_account_token_error.py)&#93;</code>

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
<summary><code>def get_service_account(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ServiceAccount</code></summary>

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
try:
    response = client.service_accounts.get_service_account("some example string")
    # TODO: Handle 'response' of type ServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetServiceAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.get_service_account("some example string")
    # TODO: Handle 'response' of type ServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetServiceAccountErrorBody
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

**OnSuccess**: <code>[ServiceAccount](doi_t/models/service_account.py)</code> -- OK - Service account returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetServiceAccountErrorBody](doi_t/errors/get_service_account_error.py)&#93;</code>

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
<summary><code>def get_service_account_token(service_account_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ServiceAccountToken</code></summary>

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
try:
    response = client.service_accounts.get_service_account_token("some example string", "some example string")
    # TODO: Handle 'response' of type ServiceAccountToken
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetServiceAccountTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.get_service_account_token(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ServiceAccountToken
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetServiceAccountTokenErrorBody
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

**OnSuccess**: <code>[ServiceAccountToken](doi_t/models/service_account_token.py)</code> -- OK - API token returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetServiceAccountTokenErrorBody](doi_t/errors/get_service_account_token_error.py)&#93;</code>

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
<summary><code>def list_service_account_tokens(service_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ServiceAccountTokensResponse</code></summary>

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
try:
    response = client.service_accounts.list_service_account_tokens("some example string")
    # TODO: Handle 'response' of type ServiceAccountTokensResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListServiceAccountTokensErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.list_service_account_tokens("some example string")
    # TODO: Handle 'response' of type ServiceAccountTokensResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListServiceAccountTokensErrorBody
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

**OnSuccess**: <code>[ServiceAccountTokensResponse](doi_t/models/service_account_tokens_response.py)</code> -- OK - API tokens returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListServiceAccountTokensErrorBody](doi_t/errors/list_service_account_tokens_error.py)&#93;</code>

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
<summary><code>def list_service_accounts(*, request_options: RequestOptionsOrDict | None = None) -> ServiceAccountsResponse</code></summary>

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
try:
    response = client.service_accounts.list_service_accounts()
    # TODO: Handle 'response' of type ServiceAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListServiceAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.list_service_accounts()
    # TODO: Handle 'response' of type ServiceAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListServiceAccountsErrorBody
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

**OnSuccess**: <code>[ServiceAccountsResponse](doi_t/models/service_accounts_response.py)</code> -- OK - Service accounts returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListServiceAccountsErrorBody](doi_t/errors/list_service_accounts_error.py)&#93;</code>

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
<summary><code>def update_service_account(id_: str, if_match: str, idempotency_key: str, body: UpdateServiceAccountRequest | UpdateServiceAccountRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ServiceAccount</code></summary>

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
try:
    response = client.service_accounts.update_service_account(
        "some example string",
        "some example string",
        "some example string",
        UpdateServiceAccountRequest(permissions=["cloudAnalyticsReadOnly"]),
    )
    # TODO: Handle 'response' of type ServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateServiceAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.update_service_account(
        "some example string",
        "some example string",
        "some example string",
        UpdateServiceAccountRequest(permissions=["cloudAnalyticsReadOnly"]),
    )
    # TODO: Handle 'response' of type ServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateServiceAccountErrorBody
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

**OnSuccess**: <code>[ServiceAccount](doi_t/models/service_account.py)</code> -- OK - Service account updated, or previewed when `dryRun=true` (the body is the merged result, and `etag` is still the current one).

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateServiceAccountErrorBody](doi_t/errors/update_service_account_error.py)&#93;</code>

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
<summary><code>def update_service_account_token(service_account_id: str, id_: str, idempotency_key: str, body: UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ServiceAccountToken</code></summary>

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
try:
    response = client.service_accounts.update_service_account_token(
        "some example string",
        "some example string",
        "some example string",
        UpdateServiceAccountTokenRequest(state=State1DoiTServiceAccountsApi.DISABLED),
    )
    # TODO: Handle 'response' of type ServiceAccountToken
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateServiceAccountTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.service_accounts.update_service_account_token(
        "some example string",
        "some example string",
        "some example string",
        UpdateServiceAccountTokenRequest(state=State1DoiTServiceAccountsApi.DISABLED),
    )
    # TODO: Handle 'response' of type ServiceAccountToken
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateServiceAccountTokenErrorBody
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

**OnSuccess**: <code>[ServiceAccountToken](doi_t/models/service_account_token.py)</code> -- OK - API token state changed, or previewed when `dryRun=true`.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateServiceAccountTokenErrorBody](doi_t/errors/update_service_account_token_error.py)&#93;</code>

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
<summary><code>def list_service_quotas(*, cloud_provider: CloudProvider1OrStr | None = None, min_utilization_percent: float | None = None, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ServiceQuotaList</code></summary>

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
try:
    response = client.service_quotas.list_service_quotas()
    # TODO: Handle 'response' of type ServiceQuotaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListServiceQuotasErrorBody
```

**Async**

```python
try:
    response = await async_client.service_quotas.list_service_quotas()
    # TODO: Handle 'response' of type ServiceQuotaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListServiceQuotasErrorBody
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

**OnSuccess**: <code>[ServiceQuotaList](doi_t/models/service_quota_list.py)</code> -- OK - Service quotas returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListServiceQuotasErrorBody](doi_t/errors/list_service_quotas_error.py)&#93;</code>

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
<summary><code>def create_custom_theme(body: CreateCustomThemeRequest | CreateCustomThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomTheme</code></summary>

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
try:
    response = client.settings.create_custom_theme(
        CreateCustomThemeRequest(
            name="some example string",
            primary_color="some example string",
            colors=ThemeColors(light=["some example string"], dark=["some example string"]),
        ),
    )
    # TODO: Handle 'response' of type CustomTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomThemeErrorBody
```

**Async**

```python
try:
    response = await async_client.settings.create_custom_theme(
        CreateCustomThemeRequest(
            name="some example string",
            primary_color="some example string",
            colors=ThemeColors(light=["some example string"], dark=["some example string"]),
        ),
    )
    # TODO: Handle 'response' of type CustomTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomThemeErrorBody
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

**OnSuccess**: <code>[CustomTheme](doi_t/models/custom_theme.py)</code> -- Created - Custom theme created successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateCustomThemeErrorBody](doi_t/errors/create_custom_theme_error.py)&#93;</code>

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
<summary><code>def delete_custom_theme(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.settings.delete_custom_theme("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomThemeErrorBody
```

**Async**

```python
try:
    response = await async_client.settings.delete_custom_theme("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomThemeErrorBody
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

**OnSuccess**: <code>Any</code> -- OK - Custom theme deleted.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteCustomThemeErrorBody](doi_t/errors/delete_custom_theme_error.py)&#93;</code>

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
<summary><code>def get_active_theme(*, request_options: RequestOptionsOrDict | None = None) -> ActiveTheme</code></summary>

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
try:
    response = client.settings.get_active_theme()
    # TODO: Handle 'response' of type ActiveTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetActiveThemeErrorBody
```

**Async**

```python
try:
    response = await async_client.settings.get_active_theme()
    # TODO: Handle 'response' of type ActiveTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetActiveThemeErrorBody
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

**OnSuccess**: <code>[ActiveTheme](doi_t/models/active_theme.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetActiveThemeErrorBody](doi_t/errors/get_active_theme_error.py)&#93;</code>

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
<summary><code>def get_custom_theme(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomTheme</code></summary>

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
try:
    response = client.settings.get_custom_theme("some example string")
    # TODO: Handle 'response' of type CustomTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomThemeErrorBody
```

**Async**

```python
try:
    response = await async_client.settings.get_custom_theme("some example string")
    # TODO: Handle 'response' of type CustomTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomThemeErrorBody
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

**OnSuccess**: <code>[CustomTheme](doi_t/models/custom_theme.py)</code> -- OK - Custom theme returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCustomThemeErrorBody](doi_t/errors/get_custom_theme_error.py)&#93;</code>

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
<summary><code>def list_custom_themes(*, request_options: RequestOptionsOrDict | None = None) -> AnalyticsV1SettingsThemesResponse</code></summary>

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
try:
    response = client.settings.list_custom_themes()
    # TODO: Handle 'response' of type AnalyticsV1SettingsThemesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomThemesErrorBody
```

**Async**

```python
try:
    response = await async_client.settings.list_custom_themes()
    # TODO: Handle 'response' of type AnalyticsV1SettingsThemesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomThemesErrorBody
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

**OnSuccess**: <code>[AnalyticsV1SettingsThemesResponse](doi_t/models/analytics_v1_settings_themes_response.py)</code> -- OK - The request succeeded.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCustomThemesErrorBody](doi_t/errors/list_custom_themes_error.py)&#93;</code>

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
<summary><code>def set_active_theme(body: SetActiveThemeRequest | SetActiveThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ActiveTheme</code></summary>

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
try:
    response = client.settings.set_active_theme(SetActiveThemeRequest(theme_id="some example string"))
    # TODO: Handle 'response' of type ActiveTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetActiveThemeErrorBody
```

**Async**

```python
try:
    response = await async_client.settings.set_active_theme(SetActiveThemeRequest(theme_id="some example string"))
    # TODO: Handle 'response' of type ActiveTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetActiveThemeErrorBody
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

**OnSuccess**: <code>[ActiveTheme](doi_t/models/active_theme.py)</code> -- OK - Active theme updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[SetActiveThemeErrorBody](doi_t/errors/set_active_theme_error.py)&#93;</code>

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
<summary><code>def update_custom_theme(id_: str, body: UpdateCustomThemeRequest | UpdateCustomThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomTheme</code></summary>

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
try:
    response = client.settings.update_custom_theme("some example string", UpdateCustomThemeRequest())
    # TODO: Handle 'response' of type CustomTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomThemeErrorBody
```

**Async**

```python
try:
    response = await async_client.settings.update_custom_theme("some example string", UpdateCustomThemeRequest())
    # TODO: Handle 'response' of type CustomTheme
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomThemeErrorBody
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

**OnSuccess**: <code>[CustomTheme](doi_t/models/custom_theme.py)</code> -- OK - Custom theme updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateCustomThemeErrorBody](doi_t/errors/update_custom_theme_error.py)&#93;</code>

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
<summary><code>def list_shared_payer_account_mappings(customer_id: str, *, management_account: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SharedPayerAccountMappingList</code></summary>

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
try:
    response = client.shared_payers.list_shared_payer_account_mappings("some example string")
    # TODO: Handle 'response' of type SharedPayerAccountMappingList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedPayerAccountMappingsErrorBody
```

**Async**

```python
try:
    response = await async_client.shared_payers.list_shared_payer_account_mappings("some example string")
    # TODO: Handle 'response' of type SharedPayerAccountMappingList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedPayerAccountMappingsErrorBody
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

**OnSuccess**: <code>[SharedPayerAccountMappingList](doi_t/models/shared_payer_account_mapping_list.py)</code> -- OK - Shared-payer account mappings returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListSharedPayerAccountMappingsErrorBody](doi_t/errors/list_shared_payer_account_mappings_error.py)&#93;</code>

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
<summary><code>def list_shared_payer_management_accounts(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SharedPayerManagementAccountList</code></summary>

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
try:
    response = client.shared_payers.list_shared_payer_management_accounts("some example string")
    # TODO: Handle 'response' of type SharedPayerManagementAccountList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedPayerManagementAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.shared_payers.list_shared_payer_management_accounts("some example string")
    # TODO: Handle 'response' of type SharedPayerManagementAccountList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedPayerManagementAccountsErrorBody
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

**OnSuccess**: <code>[SharedPayerManagementAccountList](doi_t/models/shared_payer_management_account_list.py)</code> -- OK - Shared-payer management accounts returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListSharedPayerManagementAccountsErrorBody](doi_t/errors/list_shared_payer_management_accounts_error.py)&#93;</code>

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
<summary><code>def list_shared_payers(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SharedPayerList</code></summary>

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
try:
    response = client.shared_payers.list_shared_payers("some example string")
    # TODO: Handle 'response' of type SharedPayerList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedPayersErrorBody
```

**Async**

```python
try:
    response = await async_client.shared_payers.list_shared_payers("some example string")
    # TODO: Handle 'response' of type SharedPayerList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedPayersErrorBody
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

**OnSuccess**: <code>[SharedPayerList](doi_t/models/shared_payer_list.py)</code> -- OK - Shared payers returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListSharedPayersErrorBody](doi_t/errors/list_shared_payers_error.py)&#93;</code>

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
<summary><code>def reassign_shared_payer_account(customer_id: str, asset_id: str, body: SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SharedPayerAccountReassignResult</code></summary>

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
try:
    response = client.shared_payers.reassign_shared_payer_account(
        "some example string",
        "some example string",
        SharedPayerAccountReassignRequest(customer_id="some example string"),
    )
    # TODO: Handle 'response' of type SharedPayerAccountReassignResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReassignSharedPayerAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.shared_payers.reassign_shared_payer_account(
        "some example string",
        "some example string",
        SharedPayerAccountReassignRequest(customer_id="some example string"),
    )
    # TODO: Handle 'response' of type SharedPayerAccountReassignResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReassignSharedPayerAccountErrorBody
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

**OnSuccess**: <code>[SharedPayerAccountReassignResult](doi_t/models/shared_payer_account_reassign_result.py)</code> -- OK - Account reassigned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ReassignSharedPayerAccountErrorBody](doi_t/errors/reassign_shared_payer_account_error.py)&#93;</code>

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
<summary><code>def get_resource_permission(resource_type: ResourceTypeOrStr, resource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ResourcePermissionsResponse</code></summary>

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
try:
    response = client.sharing.get_resource_permission(ResourceType.ALERTS, "some example string")
    # TODO: Handle 'response' of type ResourcePermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourcePermissionErrorBody
```

**Async**

```python
try:
    response = await async_client.sharing.get_resource_permission(ResourceType.ALERTS, "some example string")
    # TODO: Handle 'response' of type ResourcePermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourcePermissionErrorBody
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

**OnSuccess**: <code>[ResourcePermissionsResponse](doi_t/models/resource_permissions_response.py)</code> -- OK - Resource permissions returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetResourcePermissionErrorBody](doi_t/errors/get_resource_permission_error.py)&#93;</code>

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
<summary><code>def update_resource_permission(resource_type: ResourceTypeOrStr, resource_id: str, *, body: SharingV1Request | SharingV1RequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ResourcePermissionsResponse</code></summary>

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
try:
    response = client.sharing.update_resource_permission(ResourceType.ALERTS, "some example string")
    # TODO: Handle 'response' of type ResourcePermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResourcePermissionErrorBody
```

**Async**

```python
try:
    response = await async_client.sharing.update_resource_permission(ResourceType.ALERTS, "some example string")
    # TODO: Handle 'response' of type ResourcePermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResourcePermissionErrorBody
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

**OnSuccess**: <code>[ResourcePermissionsResponse](doi_t/models/resource_permissions_response.py)</code> -- OK - Resource permissions configuration updated.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateResourcePermissionErrorBody](doi_t/errors/update_resource_permission_error.py)&#93;</code>

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
<summary><code>def create_signup_request(idempotency_key: str, body: SignupRequestCreate | SignupRequestCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> SignupRequest</code></summary>

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
try:
    response = client.signup.create_signup_request(
        "some example string", SignupRequestCreate(email="user@example.com", company_name="some example string")
    )
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSignupRequestErrorBody
```

**Async**

```python
try:
    response = await async_client.signup.create_signup_request(
        "some example string", SignupRequestCreate(email="user@example.com", company_name="some example string")
    )
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSignupRequestErrorBody
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

**OnSuccess**: <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- Created - the signup request awaits the admin's verification.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateSignupRequestErrorBody](doi_t/errors/create_signup_request_error.py)&#93;</code>

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
<summary><code>def create_signup_session(signup_request_id: str, body: SignupSessionRequest | SignupSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SignupSession</code></summary>

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
try:
    response = client.signup.create_signup_session(
        "some example string", SignupSessionRequest(activation_token="some example string")
    )
    # TODO: Handle 'response' of type SignupSession
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSignupSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.signup.create_signup_session(
        "some example string", SignupSessionRequest(activation_token="some example string")
    )
    # TODO: Handle 'response' of type SignupSession
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSignupSessionErrorBody
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

**OnSuccess**: <code>[SignupSession](doi_t/models/signup_session.py)</code> -- OK - a session for the tenant admin.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateSignupSessionErrorBody](doi_t/errors/create_signup_session_error.py)&#93;</code>

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
<summary><code>def get_signup_request(signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SignupRequest</code></summary>

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
try:
    response = client.signup.get_signup_request("some example string")
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSignupRequestErrorBody
```

**Async**

```python
try:
    response = await async_client.signup.get_signup_request("some example string")
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSignupRequestErrorBody
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

**OnSuccess**: <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetSignupRequestErrorBody](doi_t/errors/get_signup_request_error.py)&#93;</code>

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
<summary><code>def resend_signup_verification(signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SignupRequest</code></summary>

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
try:
    response = client.signup.resend_signup_verification("some example string")
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResendSignupVerificationErrorBody
```

**Async**

```python
try:
    response = await async_client.signup.resend_signup_verification("some example string")
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResendSignupVerificationErrorBody
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

**OnSuccess**: <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- OK - a new code was sent; verification.sendsRemaining tells how many resends are left.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ResendSignupVerificationErrorBody](doi_t/errors/resend_signup_verification_error.py)&#93;</code>

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
<summary><code>def verify_signup_request(signup_request_id: str, body: SignupVerificationCode | SignupVerificationCodeDict, *, request_options: RequestOptionsOrDict | None = None) -> SignupRequest</code></summary>

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
try:
    response = client.signup.verify_signup_request(
        "some example string", SignupVerificationCode(code="some example string")
    )
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifySignupRequestErrorBody
```

**Async**

```python
try:
    response = await async_client.signup.verify_signup_request(
        "some example string", SignupVerificationCode(code="some example string")
    )
    # TODO: Handle 'response' of type SignupRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifySignupRequestErrorBody
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

**OnSuccess**: <code>[SignupRequest](doi_t/models/signup_request.py)</code> -- OK - the request is consented (or already past that point).

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[VerifySignupRequestErrorBody](doi_t/errors/verify_signup_request_error.py)&#93;</code>

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
<summary><code>def add_ticket_tags(ticket_id: int, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TagsResponse</code></summary>

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
try:
    response = client.support_requests.add_ticket_tags(1, TagsRequest(tags=["some example string"]))
    # TODO: Handle 'response' of type TagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddTicketTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.add_ticket_tags(1, TagsRequest(tags=["some example string"]))
    # TODO: Handle 'response' of type TagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddTicketTagsErrorBody
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

**OnSuccess**: <code>[TagsResponse](doi_t/models/tags_response.py)</code> -- OK - Tags added (or already present).

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[AddTicketTagsErrorBody](doi_t/errors/add_ticket_tags_error.py)&#93;</code>

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
<summary><code>def create_ticket(body: TicketCreateFormExtApi | TicketCreateFormExtApiDict, *, request_options: RequestOptionsOrDict | None = None) -> TicketResponseExtApi</code></summary>

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
try:
    response = client.support_requests.create_ticket(
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
    # TODO: Handle 'response' of type TicketResponseExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTicketErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.create_ticket(
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
    # TODO: Handle 'response' of type TicketResponseExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTicketErrorBody
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

**OnSuccess**: <code>[TicketResponseExtApi](doi_t/models/ticket_response_ext_api.py)</code> -- Created - New support request created.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateTicketErrorBody](doi_t/errors/create_ticket_error.py)&#93;</code>

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
<summary><code>def create_ticket_comment(ticket_id: int, body: CreateCommentRequest | CreateCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CommentExtApi</code></summary>

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
try:
    response = client.support_requests.create_ticket_comment(1, CreateCommentRequest(body="some example string"))
    # TODO: Handle 'response' of type CommentExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTicketCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.create_ticket_comment(
        1, CreateCommentRequest(body="some example string")
    )
    # TODO: Handle 'response' of type CommentExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTicketCommentErrorBody
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

**OnSuccess**: <code>[CommentExtApi](doi_t/models/comment_ext_api.py)</code> -- Created - Comment added to the support request.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CreateTicketCommentErrorBody](doi_t/errors/create_ticket_comment_error.py)&#93;</code>

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
<summary><code>def get_ticket(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> TicketDetailExtApi</code></summary>

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
try:
    response = client.support_requests.get_ticket(1)
    # TODO: Handle 'response' of type TicketDetailExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTicketErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.get_ticket(1)
    # TODO: Handle 'response' of type TicketDetailExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTicketErrorBody
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

**OnSuccess**: <code>[TicketDetailExtApi](doi_t/models/ticket_detail_ext_api.py)</code> -- OK - Support request details returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetTicketErrorBody](doi_t/errors/get_ticket_error.py)&#93;</code>

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
<summary><code>def list_ticket_comments(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> CommentsResponseExtApi</code></summary>

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
try:
    response = client.support_requests.list_ticket_comments(1)
    # TODO: Handle 'response' of type CommentsResponseExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTicketCommentsErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.list_ticket_comments(1)
    # TODO: Handle 'response' of type CommentsResponseExtApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTicketCommentsErrorBody
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

**OnSuccess**: <code>[CommentsResponseExtApi](doi_t/models/comments_response_ext_api.py)</code> -- OK - List of comments returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListTicketCommentsErrorBody](doi_t/errors/list_ticket_comments_error.py)&#93;</code>

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
<summary><code>def list_ticket_tags(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> TagsGetResponse</code></summary>

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
try:
    response = client.support_requests.list_ticket_tags(1)
    # TODO: Handle 'response' of type TagsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTicketTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.list_ticket_tags(1)
    # TODO: Handle 'response' of type TagsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTicketTagsErrorBody
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

**OnSuccess**: <code>[TagsGetResponse](doi_t/models/tags_get_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListTicketTagsErrorBody](doi_t/errors/list_ticket_tags_error.py)&#93;</code>

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
<summary><code>def list_tickets(*, max_results: int | None = 100, page_token: str | None = None, filter_: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TicketsList</code></summary>

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
try:
    response = client.support_requests.list_tickets()
    # TODO: Handle 'response' of type TicketsList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTicketsErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.list_tickets()
    # TODO: Handle 'response' of type TicketsList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTicketsErrorBody
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

**OnSuccess**: <code>[TicketsList](doi_t/models/tickets_list.py)</code> -- OK - List of historical requests returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListTicketsErrorBody](doi_t/errors/list_tickets_error.py)&#93;</code>

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
<summary><code>def remove_ticket_tags(ticket_id: int, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TagsResponse</code></summary>

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
try:
    response = client.support_requests.remove_ticket_tags(1, TagsRequest(tags=["some example string"]))
    # TODO: Handle 'response' of type TagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveTicketTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.remove_ticket_tags(1, TagsRequest(tags=["some example string"]))
    # TODO: Handle 'response' of type TagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveTicketTagsErrorBody
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

**OnSuccess**: <code>[TagsResponse](doi_t/models/tags_response.py)</code> -- OK - Tags removed (or already absent).

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[RemoveTicketTagsErrorBody](doi_t/errors/remove_ticket_tags_error.py)&#93;</code>

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
<summary><code>def update_ticket(ticket_id: int, body: SupportV1TicketsRequest | SupportV1TicketsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SupportV1TicketsResponse</code></summary>

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
try:
    response = client.support_requests.update_ticket(1, SupportV1TicketsRequest())
    # TODO: Handle 'response' of type SupportV1TicketsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTicketErrorBody
```

**Async**

```python
try:
    response = await async_client.support_requests.update_ticket(1, SupportV1TicketsRequest())
    # TODO: Handle 'response' of type SupportV1TicketsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTicketErrorBody
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

**OnSuccess**: <code>[SupportV1TicketsResponse](doi_t/models/support_v1_tickets_response.py)</code> -- OK - Request updated. Echoes the fields that were applied.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateTicketErrorBody](doi_t/errors/update_ticket_error.py)&#93;</code>

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
<summary><code>def get_cloudflow_template2(template_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CloudflowTemplate</code></summary>

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
try:
    response = client.templates.get_cloudflow_template2("some example string")
    # TODO: Handle 'response' of type CloudflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowTemplate2ErrorBody
```

**Async**

```python
try:
    response = await async_client.templates.get_cloudflow_template2("some example string")
    # TODO: Handle 'response' of type CloudflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCloudflowTemplate2ErrorBody
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

**OnSuccess**: <code>[CloudflowTemplate](doi_t/models/cloudflow_template.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetCloudflowTemplate2ErrorBody](doi_t/errors/get_cloudflow_template2_error.py)&#93;</code>

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
<summary><code>def list_cloudflow_templates2(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CloudflowTemplateListResponse</code></summary>

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
try:
    response = client.templates.list_cloudflow_templates2()
    # TODO: Handle 'response' of type CloudflowTemplateListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowTemplates2ErrorBody
```

**Async**

```python
try:
    response = await async_client.templates.list_cloudflow_templates2()
    # TODO: Handle 'response' of type CloudflowTemplateListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCloudflowTemplates2ErrorBody
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

**OnSuccess**: <code>[CloudflowTemplateListResponse](doi_t/models/cloudflow_template_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListCloudflowTemplates2ErrorBody](doi_t/errors/list_cloudflow_templates2_error.py)&#93;</code>

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
<summary><code>def cancel_invite(id_: str, idempotency_key: str, *, dry_run: bool | None = False, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> CancelInviteResponse</code></summary>

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
try:
    response = client.users.cancel_invite("some example string", "some example string")
    # TODO: Handle 'response' of type CancelInviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelInviteErrorBody
```

**Async**

```python
try:
    response = await async_client.users.cancel_invite("some example string", "some example string")
    # TODO: Handle 'response' of type CancelInviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelInviteErrorBody
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

**OnSuccess**: <code>[CancelInviteResponse](doi_t/models/cancel_invite_response.py)</code> -- OK - Invite cancelled.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[CancelInviteErrorBody](doi_t/errors/cancel_invite_error.py)&#93;</code>

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
<summary><code>def delete_user(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> DeleteUserResponse</code></summary>

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
try:
    response = client.users.delete_user("some example string")
    # TODO: Handle 'response' of type DeleteUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.delete_user("some example string")
    # TODO: Handle 'response' of type DeleteUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
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

**OnSuccess**: <code>[DeleteUserResponse](doi_t/models/delete_user_response.py)</code> -- OK - User deleted successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[DeleteUserErrorBody](doi_t/errors/delete_user_error.py)&#93;</code>

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
<summary><code>def invite_user(body: InviteUserRequest | InviteUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> InviteResponse</code></summary>

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
try:
    response = client.users.invite_user(InviteUserRequest(email="user@example.com"))
    # TODO: Handle 'response' of type InviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InviteUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.invite_user(InviteUserRequest(email="user@example.com"))
    # TODO: Handle 'response' of type InviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InviteUserErrorBody
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

**OnSuccess**: <code>[InviteResponse](doi_t/models/invite_response.py)</code> -- Created - User invitation created successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[InviteUserErrorBody](doi_t/errors/invite_user_error.py)&#93;</code>

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
<summary><code>def list_users(*, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ListUsersResponseBody</code></summary>

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
try:
    response = client.users.list_users()
    # TODO: Handle 'response' of type ListUsersResponseBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.users.list_users()
    # TODO: Handle 'response' of type ListUsersResponseBody
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
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

**OnSuccess**: <code>[ListUsersResponseBody](doi_t/models/list_users_response_body.py)</code> -- OK - List of users returned.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListUsersErrorBody](doi_t/errors/list_users_error.py)&#93;</code>

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
<summary><code>def resend_invite(id_: str, idempotency_key: str, *, dry_run: bool | None = False, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ResendInviteResponse</code></summary>

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
try:
    response = client.users.resend_invite("some example string", "some example string")
    # TODO: Handle 'response' of type ResendInviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResendInviteErrorBody
```

**Async**

```python
try:
    response = await async_client.users.resend_invite("some example string", "some example string")
    # TODO: Handle 'response' of type ResendInviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResendInviteErrorBody
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

**OnSuccess**: <code>[ResendInviteResponse](doi_t/models/resend_invite_response.py)</code> -- OK - Invite resent and expiry reset.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ResendInviteErrorBody](doi_t/errors/resend_invite_error.py)&#93;</code>

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
<summary><code>def update_user(id_: str, body: UpdateUserRequest | UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> UpdateUserResponse</code></summary>

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
try:
    response = client.users.update_user("some example string", UpdateUserRequest())
    # TODO: Handle 'response' of type UpdateUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.update_user("some example string", UpdateUserRequest())
    # TODO: Handle 'response' of type UpdateUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
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

**OnSuccess**: <code>[UpdateUserResponse](doi_t/models/update_user_response.py)</code> -- OK - User updated successfully.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[UpdateUserErrorBody](doi_t/errors/update_user_error.py)&#93;</code>

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
<summary><code>def get_widget(widget_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Widget</code></summary>

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
try:
    response = client.widgets_beta.get_widget("current-month-cloud-spend", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type Widget
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWidgetErrorBody
```

**Async**

```python
try:
    response = await async_client.widgets_beta.get_widget(
        "current-month-cloud-spend", x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ"
    )
    # TODO: Handle 'response' of type Widget
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWidgetErrorBody
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

**OnSuccess**: <code>[Widget](doi_t/models/widget.py)</code> -- OK - The widget and its latest precomputed result.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[GetWidgetErrorBody](doi_t/errors/get_widget_error.py)&#93;</code>

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
<summary><code>def list_widgets(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> WidgetList</code></summary>

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
try:
    response = client.widgets_beta.list_widgets(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type WidgetList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWidgetsErrorBody
```

**Async**

```python
try:
    response = await async_client.widgets_beta.list_widgets(x_tenant_id="Kp2mN8qL4vR0sT1wX3yZ")
    # TODO: Handle 'response' of type WidgetList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWidgetsErrorBody
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

**OnSuccess**: <code>[WidgetList](doi_t/models/widget_list.py)</code> -- OK - The complete supported widget catalogue.

**OnError**: <code>[ApiError](doi_t/core/exceptions.py)&#91;[ListWidgetsErrorBody](doi_t/errors/list_widgets_error.py)&#93;</code>

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

