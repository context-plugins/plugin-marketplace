# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [HightouchClient](hightouch/client.py)

## Campaigns

> Source: [Campaigns](hightouch/apis/campaigns.py)

<details>
<summary><code>def get_send_statuses(campaign_id: str, body: BatchSendStatusRequest | BatchSendStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchSendStatusResponse, GetSendStatusesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the delivery status of up to 100 sends in a single request, using the
`sendId` values returned from the start endpoint. Prefer this over polling
the single-send endpoint once per `sendId`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns.with_raw_response.get_send_statuses(
    "some example string", BatchSendStatusRequest(send_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchSendStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSendStatusesErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.get_send_statuses(
    "some example string", BatchSendStatusRequest(send_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchSendStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSendStatusesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BatchSendStatusRequest](hightouch/models/batch_send_status_request.py) \| [BatchSendStatusRequestDict](hightouch/models/batch_send_status_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[BatchSendStatusResponse](hightouch/models/batch_send_status_response.py), [GetSendStatusesErrorBody](hightouch/errors/get_send_statuses_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchSendStatusResponse](hightouch/models/batch_send_status_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetSendStatusesErrorBody](hightouch/errors/get_send_statuses_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_campaign(campaign_id: str, body: StartCampaignRequest | StartCampaignRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignsTriggerResponse, TriggerCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an API-triggered campaign: send to the given recipients.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns.with_raw_response.trigger_campaign(
    "some example string", StartCampaignRequest(recipients=[HandleCampaignRecipient()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignsTriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.trigger_campaign(
    "some example string", StartCampaignRequest(recipients=[HandleCampaignRecipient()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignsTriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StartCampaignRequest](hightouch/models/start_campaign_request.py) \| [StartCampaignRequestDict](hightouch/models/start_campaign_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[CampaignsTriggerResponse](hightouch/models/unions/campaigns_trigger_response.py), [TriggerCampaignErrorBody](hightouch/errors/trigger_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignsTriggerResponse](hightouch/models/unions/campaigns_trigger_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[TriggerCampaignErrorBody](hightouch/errors/trigger_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429 | <code>[TriggerErrorResponse](hightouch/models/trigger_error_response.py)</code> |
| 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DecisionEngine

> Source: [DecisionEngine](hightouch/apis/decision_engine.py)

<details>
<summary><code>def clone_message(flow_id: str, message_id: str, *, body: DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowMessagesCloneResponse, CloneMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clone a message within a flow. The copy keeps the source message's
config, tags, guardrails, and variables, and is created disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.clone_message("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesCloneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CloneMessageErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.clone_message(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesCloneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CloneMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>message_id</code> | <code>str</code> | The UUID of the message to clone |
| <code>body</code> | <code>[DecisionEngineMessageClone](hightouch/models/decision_engine_message_clone.py) \| [DecisionEngineMessageCloneDict](hightouch/models/decision_engine_message_clone.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowMessagesCloneResponse](hightouch/models/unions/decision_engine_flow_messages_clone_response.py), [CloneMessageErrorBody](hightouch/errors/clone_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowMessagesCloneResponse](hightouch/models/unions/decision_engine_flow_messages_clone_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CloneMessageErrorBody](hightouch/errors/clone_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 404 | <code>[DecisionEngineErrorResponse](hightouch/models/decision_engine_error_response.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[DecisionEngineFlowMessagesCloneResponse1](hightouch/models/unions/decision_engine_flow_messages_clone_response1.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_message(flow_id: str, body: DecisionEngineMessageCreate | DecisionEngineMessageCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowMessagesResponse11, CreateMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a message in a flow

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.create_message(
    "some example string",
    DecisionEngineMessageCreate(name="some example string", channel_id="some example string", config={"key": {}}),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMessageErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.create_message(
    "some example string",
    DecisionEngineMessageCreate(name="some example string", channel_id="some example string", config={"key": {}}),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>body</code> | <code>[DecisionEngineMessageCreate](hightouch/models/decision_engine_message_create.py) \| [DecisionEngineMessageCreateDict](hightouch/models/decision_engine_message_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowMessagesResponse11](hightouch/models/unions/decision_engine_flow_messages_response11.py), [CreateMessageErrorBody](hightouch/errors/create_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowMessagesResponse11](hightouch/models/unions/decision_engine_flow_messages_response11.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateMessageErrorBody](hightouch/errors/create_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_message(flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowMessagesResponse13, DeleteMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a message. The message is soft-deleted and disabled in the flow,
so it is no longer returned by the API and is ineligible for future sends.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.delete_message("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse13
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMessageErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.delete_message(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse13
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>message_id</code> | <code>str</code> | The UUID of the message |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowMessagesResponse13](hightouch/models/unions/decision_engine_flow_messages_response13.py), [DeleteMessageErrorBody](hightouch/errors/delete_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowMessagesResponse13](hightouch/models/unions/decision_engine_flow_messages_response13.py)</code> -- Ok

**On `Failure`**: `error` is <code>[DeleteMessageErrorBody](hightouch/errors/delete_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 404 | <code>[DecisionEngineErrorResponse](hightouch/models/decision_engine_error_response.py)</code> |
| 500 | <code>[DecisionEngineFlowMessagesResponse14](hightouch/models/unions/decision_engine_flow_messages_response14.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_flow(flow_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowResponse, GetFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a decision engine flow by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.get_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFlowErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.get_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowResponse](hightouch/models/unions/decision_engine_flow_response.py), [GetFlowErrorBody](hightouch/errors/get_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowResponse](hightouch/models/unions/decision_engine_flow_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetFlowErrorBody](hightouch/errors/get_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_message(flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowMessagesResponse11, GetMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single message by flow and message ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.get_message("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMessageErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.get_message("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>message_id</code> | <code>str</code> | The UUID of the message |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowMessagesResponse11](hightouch/models/unions/decision_engine_flow_messages_response11.py), [GetMessageErrorBody](hightouch/errors/get_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowMessagesResponse11](hightouch/models/unions/decision_engine_flow_messages_response11.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetMessageErrorBody](hightouch/errors/get_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_flows(*, name: str | None = None, limit: float | None = 100.0, offset: float | None = 0.0, order_by: OrderByOrStr | None = OrderBy.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowsResponse1, ListFlowsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List decision engine flows in the workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.list_flows()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFlowsErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.list_flows()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFlowsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | optional filter by flow name<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | max results (default 100)<br>**Default**: <code>100.0</code> |
| <code>offset</code> | <code>float \| None</code> | pagination offset<br>**Default**: <code>0.0</code> |
| <code>order_by</code> | <code>[OrderByOrStr](hightouch/models/enums/order_by.py) \| None</code> | sort field<br>**Default**: <code>OrderBy.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowsResponse1](hightouch/models/unions/decision_engine_flows_response1.py), [ListFlowsErrorBody](hightouch/errors/list_flows_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowsResponse1](hightouch/models/unions/decision_engine_flows_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListFlowsErrorBody](hightouch/errors/list_flows_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_messages(flow_id: str, *, limit: float | None = 100.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowMessagesResponse1, ListMessagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List messages for a flow

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.list_messages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMessagesErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.list_messages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMessagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowMessagesResponse1](hightouch/models/unions/decision_engine_flow_messages_response1.py), [ListMessagesErrorBody](hightouch/errors/list_messages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowMessagesResponse1](hightouch/models/unions/decision_engine_flow_messages_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListMessagesErrorBody](hightouch/errors/list_messages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_flow(flow_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowRunResponse, RunFlowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a decision engine run for a specific flow

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.run_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunFlowErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.run_flow("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowRunResponse](hightouch/models/unions/decision_engine_flow_run_response.py), [RunFlowErrorBody](hightouch/errors/run_flow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowRunResponse](hightouch/models/unions/decision_engine_flow_run_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[RunFlowErrorBody](hightouch/errors/run_flow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_message(flow_id: str, message_id: str, body: DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DecisionEngineFlowMessagesResponse11, UpdateMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a message

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.decision_engine.with_raw_response.update_message(
    "some example string", "some example string", DecisionEngineMessageUpdate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMessageErrorBody
```

**Async**

```python
result = await async_client.decision_engine.with_raw_response.update_message(
    "some example string", "some example string", DecisionEngineMessageUpdate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DecisionEngineFlowMessagesResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flow_id</code> | <code>str</code> | The UUID of the flow |
| <code>message_id</code> | <code>str</code> | The UUID of the message |
| <code>body</code> | <code>[DecisionEngineMessageUpdate](hightouch/models/decision_engine_message_update.py) \| [DecisionEngineMessageUpdateDict](hightouch/models/decision_engine_message_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DecisionEngineFlowMessagesResponse11](hightouch/models/unions/decision_engine_flow_messages_response11.py), [UpdateMessageErrorBody](hightouch/errors/update_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DecisionEngineFlowMessagesResponse11](hightouch/models/unions/decision_engine_flow_messages_response11.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateMessageErrorBody](hightouch/errors/update_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Destinations

> Source: [Destinations](hightouch/apis/destinations.py)

<details>
<summary><code>def create_destination(body: DestinationCreate | DestinationCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DestinationsResponse1, CreateDestinationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new destination

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.destinations.with_raw_response.create_destination(
    DestinationCreate(
        name="Webhook Website",
        slug="webhookwebsite",
        type_="webhook",
        configuration={"url": "http://httpstat.us/200", "methodKey": "url"},
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DestinationsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDestinationErrorBody
```

**Async**

```python
result = await async_client.destinations.with_raw_response.create_destination(
    DestinationCreate(
        name="Webhook Website",
        slug="webhookwebsite",
        type_="webhook",
        configuration={"url": "http://httpstat.us/200", "methodKey": "url"},
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DestinationsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DestinationCreate](hightouch/models/destination_create.py) \| [DestinationCreateDict](hightouch/models/destination_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DestinationsResponse1](hightouch/models/unions/destinations_response1.py), [CreateDestinationErrorBody](hightouch/errors/create_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DestinationsResponse1](hightouch/models/unions/destinations_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateDestinationErrorBody](hightouch/errors/create_destination_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_destination(destination_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Destination, GetDestinationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a destination based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.destinations.with_raw_response.get_destination(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Destination
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDestinationErrorBody
```

**Async**

```python
result = await async_client.destinations.with_raw_response.get_destination(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Destination
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destination_id</code> | <code>float</code> | The destination's ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[Destination](hightouch/models/destination.py), [GetDestinationErrorBody](hightouch/errors/get_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Destination](hightouch/models/destination.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetDestinationErrorBody](hightouch/errors/get_destination_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_destination(*, name: str | None = None, slug: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DestinationsResponse, ListDestinationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the destinations in the user's workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.destinations.with_raw_response.list_destination()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DestinationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDestinationErrorBody
```

**Async**

```python
result = await async_client.destinations.with_raw_response.list_destination()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DestinationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | Filter based on the destination's name<br>**Default**: <code>None</code> |
| <code>slug</code> | <code>str \| None</code> | Filter based on destination's slug<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchDestinationsApiOrStr](hightouch/models/enums/order_by_hightouch_destinations_api.py) \| None</code> | Order the returned destinations<br>**Default**: <code>OrderByHightouchDestinationsApi.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DestinationsResponse](hightouch/models/destinations_response.py), [ListDestinationErrorBody](hightouch/errors/list_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DestinationsResponse](hightouch/models/destinations_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListDestinationErrorBody](hightouch/errors/list_destination_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_destination(destination_id: float, body: DestinationUpdate | DestinationUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DestinationsResponse1, UpdateDestinationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing destination

Patch a destination based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.destinations.with_raw_response.update_destination(
    1.5,
    DestinationUpdate(
        name="Webhook Website code 201", configuration={"url": "http://httpstat.us/201", "methodKey": "url"}
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DestinationsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDestinationErrorBody
```

**Async**

```python
result = await async_client.destinations.with_raw_response.update_destination(
    1.5,
    DestinationUpdate(
        name="Webhook Website code 201", configuration={"url": "http://httpstat.us/201", "methodKey": "url"}
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DestinationsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destination_id</code> | <code>float</code> | The destination's ID |
| <code>body</code> | <code>[DestinationUpdate](hightouch/models/destination_update.py) \| [DestinationUpdateDict](hightouch/models/destination_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[DestinationsResponse1](hightouch/models/unions/destinations_response1.py), [UpdateDestinationErrorBody](hightouch/errors/update_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DestinationsResponse1](hightouch/models/unions/destinations_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateDestinationErrorBody](hightouch/errors/update_destination_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](hightouch/apis/events.py)

<details>
<summary><code>def create_contract(body: EventContractCreate | EventContractCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsContractsResponse1, CreateContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event contract

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.create_contract(
    EventContractCreate(
        name="My Contract",
        events=[
            Event2(
                schema_value={"type": "object", "properties": {}},
                on_undeclared_fields=OnUndeclaredFields.ALLOW_EVENT,
                on_schema_violation=OnSchemaViolation.BLOCK_EVENT,
                name="Checked Out",
                type_=Type.TRACK,
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContractErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.create_contract(
    EventContractCreate(
        name="My Contract",
        events=[
            Event2(
                schema_value={"type": "object", "properties": {}},
                on_undeclared_fields=OnUndeclaredFields.ALLOW_EVENT,
                on_schema_violation=OnSchemaViolation.BLOCK_EVENT,
                name="Checked Out",
                type_=Type.TRACK,
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse1
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
| <code>body</code> | <code>[EventContractCreate](hightouch/models/event_contract_create.py) \| [EventContractCreateDict](hightouch/models/event_contract_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsContractsResponse1](hightouch/models/unions/events_contracts_response1.py), [CreateContractErrorBody](hightouch/errors/create_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsContractsResponse1](hightouch/models/unions/events_contracts_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateContractErrorBody](hightouch/errors/create_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_domain(body: EventDomainCreate | EventDomainCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsDomainsResponse1, CreateDomainErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event domain, with its events and components.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.create_domain(EventDomainCreate(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDomainErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.create_domain(EventDomainCreate(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EventDomainCreate](hightouch/models/event_domain_create.py) \| [EventDomainCreateDict](hightouch/models/event_domain_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsDomainsResponse1](hightouch/models/unions/events_domains_response1.py), [CreateDomainErrorBody](hightouch/errors/create_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsDomainsResponse1](hightouch/models/unions/events_domains_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateDomainErrorBody](hightouch/errors/create_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contract(contract_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsContractsResponse1, GetContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a contract based on its contract ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.get_contract("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContractErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_contract("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse1
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
| <code>contract_id</code> | <code>str</code> | The id of the contract |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsContractsResponse1](hightouch/models/unions/events_contracts_response1.py), [GetContractErrorBody](hightouch/errors/get_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsContractsResponse1](hightouch/models/unions/events_contracts_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetContractErrorBody](hightouch/errors/get_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsDomainsResponse1, GetDomainErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a domain by its id, including its events and components.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.get_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDomainErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_id</code> | <code>str</code> | The id of the domain |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsDomainsResponse1](hightouch/models/unions/events_domains_response1.py), [GetDomainErrorBody](hightouch/errors/get_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsDomainsResponse1](hightouch/models/unions/events_domains_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetDomainErrorBody](hightouch/errors/get_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contracts(*, name: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsContractsResponse, ListContractsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all event contracts in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.list_contracts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContractsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.list_contracts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse
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
| <code>name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchEventsApiOrStr](hightouch/models/enums/order_by_hightouch_events_api.py) \| None</code> | specify the order<br>**Default**: <code>OrderByHightouchEventsApi.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsContractsResponse](hightouch/models/events_contracts_response.py), [ListContractsErrorBody](hightouch/errors/list_contracts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsContractsResponse](hightouch/models/events_contracts_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListContractsErrorBody](hightouch/errors/list_contracts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_domains(*, name: str | None = None, source: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsDomainsResponse, ListDomainsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all event domains in the current workspace.

Optional query `source`: filter to domains linked to that event source
(slug). When set, returned components are also filtered to those
applicable to the source.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.list_domains()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.list_domains()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | filter to domains (and components) for this event source slug<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchEventsApiOrStr](hightouch/models/enums/order_by_hightouch_events_api.py) \| None</code> | specify the order<br>**Default**: <code>OrderByHightouchEventsApi.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsDomainsResponse](hightouch/models/events_domains_response.py), [ListDomainsErrorBody](hightouch/errors/list_domains_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsDomainsResponse](hightouch/models/events_domains_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListDomainsErrorBody](hightouch/errors/list_domains_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contract(contract_id: str, body: EventContractUpdate | EventContractUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsContractsResponse11, UpdateContractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing event contract

Patch an event contract based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.update_contract(
    "some example string",
    EventContractUpdate(
        events=[
            Event2(
                schema_value={"type": "object", "properties": {}},
                on_undeclared_fields=OnUndeclaredFields.BLOCK_EVENT,
                on_schema_violation=OnSchemaViolation.BLOCK_EVENT,
                name="Checked Out",
                type_=Type.TRACK,
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContractErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.update_contract(
    "some example string",
    EventContractUpdate(
        events=[
            Event2(
                schema_value={"type": "object", "properties": {}},
                on_undeclared_fields=OnUndeclaredFields.BLOCK_EVENT,
                on_schema_violation=OnSchemaViolation.BLOCK_EVENT,
                name="Checked Out",
                type_=Type.TRACK,
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsContractsResponse11
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
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[EventContractUpdate](hightouch/models/event_contract_update.py) \| [EventContractUpdateDict](hightouch/models/event_contract_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsContractsResponse11](hightouch/models/unions/events_contracts_response11.py), [UpdateContractErrorBody](hightouch/errors/update_contract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsContractsResponse11](hightouch/models/unions/events_contracts_response11.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateContractErrorBody](hightouch/errors/update_contract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_domain(domain_id: str, body: EventDomainUpdate | EventDomainUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventsDomainsResponse1, UpdateDomainErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing event domain, replacing its events and components.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.update_domain("some example string", EventDomainUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDomainErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.update_domain("some example string", EventDomainUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventsDomainsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_id</code> | <code>str</code> | The domain's id |
| <code>body</code> | <code>[EventDomainUpdate](hightouch/models/event_domain_update.py) \| [EventDomainUpdateDict](hightouch/models/event_domain_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[EventsDomainsResponse1](hightouch/models/unions/events_domains_response1.py), [UpdateDomainErrorBody](hightouch/errors/update_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventsDomainsResponse1](hightouch/models/unions/events_domains_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateDomainErrorBody](hightouch/errors/update_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IdGraphs

> Source: [IdGraphs](hightouch/apis/id_graphs.py)

<details>
<summary><code>def trigger_run_id_graph(graph_id: str, *, body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TriggerRunIdrOutput, TriggerRunIdGraphErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: use `/idr/{graphId}/trigger` instead

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.id_graphs.with_raw_response.trigger_run_id_graph("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerRunIdrOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerRunIdGraphErrorBody
```

**Async**

```python
result = await async_client.id_graphs.with_raw_response.trigger_run_id_graph("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerRunIdrOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerRunIdGraphErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graph_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[TriggerRunIdrInput](hightouch/models/trigger_run_idr_input.py) \| [TriggerRunIdrInputDict](hightouch/models/trigger_run_idr_input.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[TriggerRunIdrOutput](hightouch/models/trigger_run_idr_output.py), [TriggerRunIdGraphErrorBody](hightouch/errors/trigger_run_id_graph_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TriggerRunIdrOutput](hightouch/models/trigger_run_idr_output.py)</code> -- Ok

**On `Failure`**: `error` is <code>[TriggerRunIdGraphErrorBody](hightouch/errors/trigger_run_id_graph_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Idr

> Source: [Idr](hightouch/apis/idr.py)

<details>
<summary><code>def list_idr_runs(graph_id: str, *, run_id: str | None = None, after: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, limit: float | None = 20.0, offset: float | None = 0.0, order_by: OrderByHightouchIdrApiOrStr | None = OrderByHightouchIdrApi.CREATED_AT, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListIdrRunsOutput, ListIdrRunsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List runs for a given IDR graph

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.idr.with_raw_response.list_idr_runs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListIdrRunsOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListIdrRunsErrorBody
```

**Async**

```python
result = await async_client.idr.with_raw_response.list_idr_runs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListIdrRunsOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListIdrRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graph_id</code> | <code>str</code> | Required. ID of the graph to list runs for. |
| <code>run_id</code> | <code>str \| None</code> | Run ID to query for.<br>**Default**: <code>None</code> |
| <code>after</code> | <code>RFC3339DateTime \| None</code> | Select runs that started on or after this ISO timestamp.<br>**Default**: <code>None</code> |
| <code>before</code> | <code>RFC3339DateTime \| None</code> | Select runs that started on or before this ISO timestamp.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Maximum number of runs to return.<br>**Default**: <code>20.0</code> |
| <code>offset</code> | <code>float \| None</code> | Offset to start at for pagination.<br>**Default**: <code>0.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchIdrApiOrStr](hightouch/models/enums/order_by_hightouch_idr_api.py) \| None</code> | Field to sort by.<br>**Default**: <code>OrderByHightouchIdrApi.CREATED_AT</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ListIdrRunsOutput](hightouch/models/list_idr_runs_output.py), [ListIdrRunsErrorBody](hightouch/errors/list_idr_runs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListIdrRunsOutput](hightouch/models/list_idr_runs_output.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListIdrRunsErrorBody](hightouch/errors/list_idr_runs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def queue_for_reprocessing(graph_id: str, *, body: IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IdrQueueForReprocessingOutput, QueueForReprocessingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an async job to queue identifier values for reprocessing, optionally adding them to the blocklist.
If `block` is true (the default), identifier values will be added to the blocklist and ignored in future runs.
Clusters containing these identifier values will be queued for reprocessing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.idr.with_raw_response.queue_for_reprocessing(
    "some example string",
    body=IdrQueueForReprocessingInput(
        identifiers=[
            Identifier(value="a@b.com", identifier="email"), Identifier(value="1234567890", identifier="phone")
        ],
        block=True,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdrQueueForReprocessingOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueueForReprocessingErrorBody
```

**Async**

```python
result = await async_client.idr.with_raw_response.queue_for_reprocessing(
    "some example string",
    body=IdrQueueForReprocessingInput(
        identifiers=[
            Identifier(value="a@b.com", identifier="email"), Identifier(value="1234567890", identifier="phone")
        ],
        block=True,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdrQueueForReprocessingOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueueForReprocessingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graph_id</code> | <code>str</code> | Required. ID of the graph containing the identifiers. |
| <code>body</code> | <code>[IdrQueueForReprocessingInput](hightouch/models/idr_queue_for_reprocessing_input.py) \| [IdrQueueForReprocessingInputDict](hightouch/models/idr_queue_for_reprocessing_input.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[IdrQueueForReprocessingOutput](hightouch/models/idr_queue_for_reprocessing_output.py), [QueueForReprocessingErrorBody](hightouch/errors/queue_for_reprocessing_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IdrQueueForReprocessingOutput](hightouch/models/idr_queue_for_reprocessing_output.py)</code> -- ID associated with the reprocessing request. This can be used to query the status of the request.

**On `Failure`**: `error` is <code>[QueueForReprocessingErrorBody](hightouch/errors/queue_for_reprocessing_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reprocess_status(graph_id: str, request_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IdrReprocessStatusOutput, ReprocessStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a reprocessing request

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.idr.with_raw_response.reprocess_status("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdrReprocessStatusOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReprocessStatusErrorBody
```

**Async**

```python
result = await async_client.idr.with_raw_response.reprocess_status("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdrReprocessStatusOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReprocessStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graph_id</code> | <code>str</code> | Required. ID of the graph for the reprocessing request. |
| <code>request_id</code> | <code>str</code> | Required. ID of the reprocessing request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[IdrReprocessStatusOutput](hightouch/models/idr_reprocess_status_output.py), [ReprocessStatusErrorBody](hightouch/errors/reprocess_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IdrReprocessStatusOutput](hightouch/models/idr_reprocess_status_output.py)</code> -- The status of the reprocessing request.

**On `Failure`**: `error` is <code>[ReprocessStatusErrorBody](hightouch/errors/reprocess_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_idr_run(graph_id: str, *, body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TriggerRunIdrOutput, TriggerIdrRunErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new IDR run for a graph

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.idr.with_raw_response.trigger_idr_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerRunIdrOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerIdrRunErrorBody
```

**Async**

```python
result = await async_client.idr.with_raw_response.trigger_idr_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerRunIdrOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerIdrRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graph_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[TriggerRunIdrInput](hightouch/models/trigger_run_idr_input.py) \| [TriggerRunIdrInputDict](hightouch/models/trigger_run_idr_input.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[TriggerRunIdrOutput](hightouch/models/trigger_run_idr_output.py), [TriggerIdrRunErrorBody](hightouch/errors/trigger_idr_run_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TriggerRunIdrOutput](hightouch/models/trigger_run_idr_output.py)</code> -- Ok

**On `Failure`**: `error` is <code>[TriggerIdrRunErrorBody](hightouch/errors/trigger_idr_run_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](hightouch/apis/models_api.py)

<details>
<summary><code>def create_model(body: ModelCreate | ModelCreateDict, *, skip_column_query: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsResponse1, CreateModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new model

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.create_model(
    ModelCreate(
        name="testModel3",
        slug="testModel3",
        query_type="raw_sql",
        source_id=1,
        is_schema=False,
        raw=Raw(sql="select id, last_name from users"),
        primary_key="id",
        description="Users with their last names",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.create_model(
    ModelCreate(
        name="testModel3",
        slug="testModel3",
        query_type="raw_sql",
        source_id=1,
        is_schema=False,
        raw=Raw(sql="select id, last_name from users"),
        primary_key="id",
        description="Users with their last names",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ModelCreate](hightouch/models/model_create.py) \| [ModelCreateDict](hightouch/models/model_create.py)</code> | The request body. |
| <code>skip_column_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsResponse1](hightouch/models/unions/models_response1.py), [CreateModelErrorBody](hightouch/errors/create_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsResponse1](hightouch/models/unions/models_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateModelErrorBody](hightouch/errors/create_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_model(model_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsResponse11, DeleteModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a model

Deletes a model based on its Hightouch ID. Any syncs that use the model are
deleted as well. Deleting a parent model also deletes every audience built
on it. A model that is still referenced by a journey, priority list,
decision engine agent, dynamic content condition, saved chart, or identity
resolution graph cannot be deleted until those references are removed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.delete_model(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.delete_model(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>float</code> | The model's ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsResponse11](hightouch/models/unions/models_response11.py), [DeleteModelErrorBody](hightouch/errors/delete_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsResponse11](hightouch/models/unions/models_response11.py)</code> -- Ok

**On `Failure`**: `error` is <code>[DeleteModelErrorBody](hightouch/errors/delete_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_audience_size(model_id: float, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsSizeResponse1, GetAudienceSizeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the state of an audience size job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.get_audience_size(1.5, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsSizeResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAudienceSizeErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.get_audience_size(1.5, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsSizeResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAudienceSizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>float</code> | The id of the audience |
| <code>job_id</code> | <code>str</code> | The id returned when the size job was started |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsSizeResponse1](hightouch/models/unions/models_size_response1.py), [GetAudienceSizeErrorBody](hightouch/errors/get_audience_size_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsSizeResponse1](hightouch/models/unions/models_size_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetAudienceSizeErrorBody](hightouch/errors/get_audience_size_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_model(model_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Model, GetModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve models from model ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.get_model(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.get_model(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>float</code> | The id of the model |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[Model](hightouch/models/model.py), [GetModelErrorBody](hightouch/errors/get_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Model](hightouch/models/model.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetModelErrorBody](hightouch/errors/get_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_enrichment_runs(model_id: float, *, region: Region1OrStr | None = None, limit: float | None = 100.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsMatchBoosterRunsResponse, ListEnrichmentRunsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Match Booster enrichment runs for a model, most recent first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.list_enrichment_runs(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsMatchBoosterRunsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnrichmentRunsErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.list_enrichment_runs(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsMatchBoosterRunsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnrichmentRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>float</code> | The id of the model |
| <code>region</code> | <code>[Region1OrStr](hightouch/models/enums/region1.py) \| None</code> | Filter runs to a Match Booster region<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsMatchBoosterRunsResponse](hightouch/models/unions/models_match_booster_runs_response.py), [ListEnrichmentRunsErrorBody](hightouch/errors/list_enrichment_runs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsMatchBoosterRunsResponse](hightouch/models/unions/models_match_booster_runs_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListEnrichmentRunsErrorBody](hightouch/errors/list_enrichment_runs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_model(*, name: str | None = None, slug: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsResponse, ListModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the models in the current workspace including parent and related models

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.list_model()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.list_model()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | filter based on name<br>**Default**: <code>None</code> |
| <code>slug</code> | <code>str \| None</code> | filter based on slug<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchDestinationsApiOrStr](hightouch/models/enums/order_by_hightouch_destinations_api.py) \| None</code> | specify the order<br>**Default**: <code>OrderByHightouchDestinationsApi.ID</code> |
| <code>tags</code> | <code>list&#91;str&#93; \| None</code> | filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter for multiple tags.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsResponse](hightouch/models/models_response.py), [ListModelErrorBody](hightouch/errors/list_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsResponse](hightouch/models/models_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListModelErrorBody](hightouch/errors/list_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_audience_size_job(model_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsSizeResponse, StartAudienceSizeJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a background job to compute audience size.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.start_audience_size_job(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsSizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartAudienceSizeJobErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.start_audience_size_job(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsSizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartAudienceSizeJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>float</code> | The id of the audience |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsSizeResponse](hightouch/models/unions/models_size_response.py), [StartAudienceSizeJobErrorBody](hightouch/errors/start_audience_size_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsSizeResponse](hightouch/models/unions/models_size_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[StartAudienceSizeJobErrorBody](hightouch/errors/start_audience_size_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_enrichment(model_id: float, *, body: MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsMatchBoosterTriggerResponse, TriggerEnrichmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a Match Booster enrichment run for a model. The model must have
Match Booster enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.trigger_enrichment(
    1.5, body=MatchBoosterTriggerInput(force_full_enrichment=False)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsMatchBoosterTriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerEnrichmentErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.trigger_enrichment(
    1.5, body=MatchBoosterTriggerInput(force_full_enrichment=False)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsMatchBoosterTriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerEnrichmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>float</code> | The id of the model to enrich |
| <code>body</code> | <code>[MatchBoosterTriggerInput](hightouch/models/match_booster_trigger_input.py) \| [MatchBoosterTriggerInputDict](hightouch/models/match_booster_trigger_input.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsMatchBoosterTriggerResponse](hightouch/models/unions/models_match_booster_trigger_response.py), [TriggerEnrichmentErrorBody](hightouch/errors/trigger_enrichment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsMatchBoosterTriggerResponse](hightouch/models/unions/models_match_booster_trigger_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[TriggerEnrichmentErrorBody](hightouch/errors/trigger_enrichment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_model(model_id: float, body: ModelUpdate | ModelUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelsResponse1, UpdateModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing model

Patch a model based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.update_model(
    1.5,
    ModelUpdate(
        name="testmodel", description="Names of all users", raw=Raw(sql="select name from users"), primary_key="id"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.update_model(
    1.5,
    ModelUpdate(
        name="testmodel", description="Names of all users", raw=Raw(sql="select name from users"), primary_key="id"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>float</code> | The model's ID |
| <code>body</code> | <code>[ModelUpdate](hightouch/models/model_update.py) \| [ModelUpdateDict](hightouch/models/model_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[ModelsResponse1](hightouch/models/unions/models_response1.py), [UpdateModelErrorBody](hightouch/errors/update_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelsResponse1](hightouch/models/unions/models_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateModelErrorBody](hightouch/errors/update_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Signups

> Source: [Signups](hightouch/apis/signups.py)

<details>
<summary><code>def create_signup(body: CreateSignupRequest | CreateSignupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignupsResponse, CreateSignupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record a signup: consent for a delivery handle, plus the fields the form
collected.

Whether consent settles immediately or waits for a double opt-in
confirmation is the channel's configuration, so one call covers both and
the response says which happened.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signups.with_raw_response.create_signup(
    CreateSignupRequest(channel=SignupChannel.EMAIL, handle="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignupErrorBody
```

**Async**

```python
result = await async_client.signups.with_raw_response.create_signup(
    CreateSignupRequest(channel=SignupChannel.EMAIL, handle="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSignupRequest](hightouch/models/create_signup_request.py) \| [CreateSignupRequestDict](hightouch/models/create_signup_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SignupsResponse](hightouch/models/unions/signups_response.py), [CreateSignupErrorBody](hightouch/errors/create_signup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignupsResponse](hightouch/models/unions/signups_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateSignupErrorBody](hightouch/errors/create_signup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 502 | <code>[SignupErrorResponse](hightouch/models/signup_error_response.py)</code> |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[SignupsResponse1](hightouch/models/unions/signups_response1.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](hightouch/apis/sources.py)

<details>
<summary><code>def create_source(body: SourceCreate | SourceCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourcesResponse1, CreateSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new source

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sources.with_raw_response.create_source(
    SourceCreate(
        name="postgres-connection2",
        slug="postgres-connection2",
        type_="postgres",
        configuration={
            "host": "example.example.us-east-1.rds.amazonaws.com",
            "port": 5432,
            "user": "dbUserName",
            "database": "dbName",
            "password": "password!123",
        },
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourcesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSourceErrorBody
```

**Async**

```python
result = await async_client.sources.with_raw_response.create_source(
    SourceCreate(
        name="postgres-connection2",
        slug="postgres-connection2",
        type_="postgres",
        configuration={
            "host": "example.example.us-east-1.rds.amazonaws.com",
            "port": 5432,
            "user": "dbUserName",
            "database": "dbName",
            "password": "password!123",
        },
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourcesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SourceCreate](hightouch/models/source_create.py) \| [SourceCreateDict](hightouch/models/source_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SourcesResponse1](hightouch/models/unions/sources_response1.py), [CreateSourceErrorBody](hightouch/errors/create_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourcesResponse1](hightouch/models/unions/sources_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateSourceErrorBody](hightouch/errors/create_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_source(source_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Source, GetSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve source from source ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sources.with_raw_response.get_source(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Source
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSourceErrorBody
```

**Async**

```python
result = await async_client.sources.with_raw_response.get_source(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Source
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>float</code> | The id of the source |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[Source](hightouch/models/source.py), [GetSourceErrorBody](hightouch/errors/get_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Source](hightouch/models/source.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetSourceErrorBody](hightouch/errors/get_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_source(*, name: str | None = None, slug: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourcesResponse, ListSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the sources in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sources.with_raw_response.list_source()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceErrorBody
```

**Async**

```python
result = await async_client.sources.with_raw_response.list_source()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | filter based on name<br>**Default**: <code>None</code> |
| <code>slug</code> | <code>str \| None</code> | filter based on slug<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchDestinationsApiOrStr](hightouch/models/enums/order_by_hightouch_destinations_api.py) \| None</code> | specify the order<br>**Default**: <code>OrderByHightouchDestinationsApi.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SourcesResponse](hightouch/models/sources_response.py), [ListSourceErrorBody](hightouch/errors/list_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourcesResponse](hightouch/models/sources_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListSourceErrorBody](hightouch/errors/list_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_source(source_id: float, body: SourceUpdate | SourceUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourcesResponse1, UpdateSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing source

Patch a source based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sources.with_raw_response.update_source(
    1.5, SourceUpdate(name="postgres-connection2", configuration={"port": 5555})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourcesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSourceErrorBody
```

**Async**

```python
result = await async_client.sources.with_raw_response.update_source(
    1.5, SourceUpdate(name="postgres-connection2", configuration={"port": 5555})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourcesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>float</code> | The source's ID |
| <code>body</code> | <code>[SourceUpdate](hightouch/models/source_update.py) \| [SourceUpdateDict](hightouch/models/source_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SourcesResponse1](hightouch/models/unions/sources_response1.py), [UpdateSourceErrorBody](hightouch/errors/update_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourcesResponse1](hightouch/models/unions/sources_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateSourceErrorBody](hightouch/errors/update_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SyncSequences

> Source: [SyncSequences](hightouch/apis/sync_sequences.py)

<details>
<summary><code>def get_sync_sequence_run(sync_sequence_run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncSequenceStatusOutput, GetSyncSequenceRunErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a sync sequence run.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sync_sequences.with_raw_response.get_sync_sequence_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncSequenceStatusOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncSequenceRunErrorBody
```

**Async**

```python
result = await async_client.sync_sequences.with_raw_response.get_sync_sequence_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncSequenceStatusOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncSequenceRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_sequence_run_id</code> | <code>str</code> | The id of the sync sequence run |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncSequenceStatusOutput](hightouch/models/sync_sequence_status_output.py), [GetSyncSequenceRunErrorBody](hightouch/errors/get_sync_sequence_run_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncSequenceStatusOutput](hightouch/models/sync_sequence_status_output.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetSyncSequenceRunErrorBody](hightouch/errors/get_sync_sequence_run_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_sequence_run(sync_sequence_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TriggerSequenceRunOutput, TriggerSequenceRunErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new run for the given sync sequence.

A sequence never runs concurrently with itself. If a run is already in
progress, then where run queueing is enabled for the workspace, a single
follow-up run is queued and starts after the current run completes
(repeated triggers return the same queued run); otherwise the id of the
run already in progress is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sync_sequences.with_raw_response.trigger_sequence_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerSequenceRunOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerSequenceRunErrorBody
```

**Async**

```python
result = await async_client.sync_sequences.with_raw_response.trigger_sequence_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerSequenceRunOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerSequenceRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_sequence_id</code> | <code>str</code> | The id of the sync sequence to trigger a run |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[TriggerSequenceRunOutput](hightouch/models/trigger_sequence_run_output.py), [TriggerSequenceRunErrorBody](hightouch/errors/trigger_sequence_run_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TriggerSequenceRunOutput](hightouch/models/trigger_sequence_run_output.py)</code> -- Ok

**On `Failure`**: `error` is <code>[TriggerSequenceRunErrorBody](hightouch/errors/trigger_sequence_run_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SyncTemplates

> Source: [SyncTemplates](hightouch/apis/sync_templates.py)

<details>
<summary><code>def create_sync_template(body: SyncTemplateCreate | SyncTemplateCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncTemplatesResponse1, CreateSyncTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new sync template

A sync template holds a destination configuration that syncs created from
it share. `overrideConfig` names the configuration fields those syncs may
set for themselves; every other field is locked to the template's value.
Create a sync from the template with `POST /syncs` and `syncTemplateId`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sync_templates.with_raw_response.create_sync_template(
    SyncTemplateCreate(
        name="Salesforce Contacts Template",
        model_id=42,
        destination_id=17,
        configuration={"mode": "upsert", "object": "Contact", "externalIdMapping": {}, "mappings": {}},
        override_config={"mappings": SyncTemplateOverrideOption(overridable=True)},
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSyncTemplateErrorBody
```

**Async**

```python
result = await async_client.sync_templates.with_raw_response.create_sync_template(
    SyncTemplateCreate(
        name="Salesforce Contacts Template",
        model_id=42,
        destination_id=17,
        configuration={"mode": "upsert", "object": "Contact", "externalIdMapping": {}, "mappings": {}},
        override_config={"mappings": SyncTemplateOverrideOption(overridable=True)},
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSyncTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SyncTemplateCreate](hightouch/models/sync_template_create.py) \| [SyncTemplateCreateDict](hightouch/models/sync_template_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncTemplatesResponse1](hightouch/models/unions/sync_templates_response1.py), [CreateSyncTemplateErrorBody](hightouch/errors/create_sync_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncTemplatesResponse1](hightouch/models/unions/sync_templates_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateSyncTemplateErrorBody](hightouch/errors/create_sync_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sync_template(sync_template_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncTemplate, GetSyncTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a sync template given its ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sync_templates.with_raw_response.get_sync_template(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncTemplateErrorBody
```

**Async**

```python
result = await async_client.sync_templates.with_raw_response.get_sync_template(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_template_id</code> | <code>float</code> | The id of the sync template |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncTemplate](hightouch/models/sync_template.py), [GetSyncTemplateErrorBody](hightouch/errors/get_sync_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncTemplate](hightouch/models/sync_template.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetSyncTemplateErrorBody](hightouch/errors/get_sync_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sync_templates(*, name: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncTemplatesResponse, ListSyncTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the sync templates in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sync_templates.with_raw_response.list_sync_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncTemplatesErrorBody
```

**Async**

```python
result = await async_client.sync_templates.with_raw_response.list_sync_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | filter based on name<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchEventsApiOrStr](hightouch/models/enums/order_by_hightouch_events_api.py) \| None</code> | specify the order<br>**Default**: <code>OrderByHightouchEventsApi.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncTemplatesResponse](hightouch/models/sync_templates_response.py), [ListSyncTemplatesErrorBody](hightouch/errors/list_sync_templates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncTemplatesResponse](hightouch/models/sync_templates_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListSyncTemplatesErrorBody](hightouch/errors/list_sync_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_sync_template(sync_template_id: float, body: SyncTemplateUpdate | SyncTemplateUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncTemplatesResponse1, UpdateSyncTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing sync template

Patch a sync template based on its Hightouch ID. The `destinationId` of a
sync template cannot be changed after creation. Syncs created from the
template pick up a new `configuration` on their next run; a new
`overrideConfig` replaces the previous one and applies to the next write
of each sync's `syncTemplateOverrides`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sync_templates.with_raw_response.update_sync_template(
    1.5,
    SyncTemplateUpdate(
        name="Salesforce Contacts Template (v2)",
        schedule_paused=True,
        override_config={
            "mappings": SyncTemplateOverrideOption(overridable=True),
            "externalIdMapping": SyncTemplateOverrideOption(overridable=True),
        },
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSyncTemplateErrorBody
```

**Async**

```python
result = await async_client.sync_templates.with_raw_response.update_sync_template(
    1.5,
    SyncTemplateUpdate(
        name="Salesforce Contacts Template (v2)",
        schedule_paused=True,
        override_config={
            "mappings": SyncTemplateOverrideOption(overridable=True),
            "externalIdMapping": SyncTemplateOverrideOption(overridable=True),
        },
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSyncTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_template_id</code> | <code>float</code> | The sync template's ID |
| <code>body</code> | <code>[SyncTemplateUpdate](hightouch/models/sync_template_update.py) \| [SyncTemplateUpdateDict](hightouch/models/sync_template_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncTemplatesResponse1](hightouch/models/unions/sync_templates_response1.py), [UpdateSyncTemplateErrorBody](hightouch/errors/update_sync_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncTemplatesResponse1](hightouch/models/unions/sync_templates_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateSyncTemplateErrorBody](hightouch/errors/update_sync_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Syncs

> Source: [Syncs](hightouch/apis/syncs.py)

<details>
<summary><code>def approve_sync_draft(sync_id: float, draft_id: str, body: ApproveSyncDraftInput | ApproveSyncDraftInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncDraft, ApproveSyncDraftErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve a sync draft and apply its change. Fails with 409 and applies
nothing when the draft or the sync changed after the versions you send.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.approve_sync_draft(
    1.5,
    "some example string",
    ApproveSyncDraftInput(
        expected_draft_version="some example string", expected_resource_version="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraft
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApproveSyncDraftErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.approve_sync_draft(
    1.5,
    "some example string",
    ApproveSyncDraftInput(
        expected_draft_version="some example string", expected_resource_version="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraft
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApproveSyncDraftErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | The id of the sync |
| <code>draft_id</code> | <code>str</code> | The id of the draft |
| <code>body</code> | <code>[ApproveSyncDraftInput](hightouch/models/approve_sync_draft_input.py) \| [ApproveSyncDraftInputDict](hightouch/models/approve_sync_draft_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncDraft](hightouch/models/sync_draft.py), [ApproveSyncDraftErrorBody](hightouch/errors/approve_sync_draft_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncDraft](hightouch/models/sync_draft.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ApproveSyncDraftErrorBody](hightouch/errors/approve_sync_draft_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 413 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_sync(body: SyncCreate | SyncCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncsResponse1, CreateSyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new sync

A sync either owns its configuration (`destinationId` and
`configuration`) or is created from a sync template (`syncTemplateId`).
A sync created from a template uses the template's destination and
configuration, and may set the fields the template's `overrideConfig`
marks as overridable through `syncTemplateOverrides`. The effective
configuration is validated for the destination either way, and
`configuration.` errors on a template sync refer to that merged
configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.create_sync(
    SyncCreate(
        slug="testsync3",
        model_id=4,
        schedule=Schedule(type_="some example string"),
        disabled=False,
        destination_id=1,
        configuration={
            "mode": "upsert",
            "object": "contacts",
            "mappings": {},
            "objectId": "0-1",
            "externalIdMapping": {},
            "associationMappings": {},
        },
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSyncErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.create_sync(
    SyncCreate(
        slug="testsync3",
        model_id=4,
        schedule=Schedule(type_="some example string"),
        disabled=False,
        destination_id=1,
        configuration={
            "mode": "upsert",
            "object": "contacts",
            "mappings": {},
            "objectId": "0-1",
            "externalIdMapping": {},
            "associationMappings": {},
        },
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SyncCreate](hightouch/models/sync_create.py) \| [SyncCreateDict](hightouch/models/sync_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncsResponse1](hightouch/models/unions/syncs_response1.py), [CreateSyncErrorBody](hightouch/errors/create_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncsResponse1](hightouch/models/unions/syncs_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[CreateSyncErrorBody](hightouch/errors/create_sync_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_sync(sync_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncsResponse11, DeleteSyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a sync

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.delete_sync(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSyncErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.delete_sync(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse11
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | The sync's ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncsResponse11](hightouch/models/unions/syncs_response11.py), [DeleteSyncErrorBody](hightouch/errors/delete_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncsResponse11](hightouch/models/unions/syncs_response11.py)</code> -- Ok

**On `Failure`**: `error` is <code>[DeleteSyncErrorBody](hightouch/errors/delete_sync_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sync(sync_id: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Sync, GetSyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve sync from sync ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.get_sync(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Sync
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.get_sync(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Sync
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | The id of the sync |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[Sync](hightouch/models/sync.py), [GetSyncErrorBody](hightouch/errors/get_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Sync](hightouch/models/sync.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetSyncErrorBody](hightouch/errors/get_sync_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sync_draft(sync_id: float, draft_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncDraftDetail, GetSyncDraftErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a sync draft with the sync as it is now and as approval would
leave it. Send its `draftVersion` and `resourceVersion` to approve it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.get_sync_draft(1.5, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraftDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncDraftErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.get_sync_draft(1.5, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraftDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSyncDraftErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | The id of the sync |
| <code>draft_id</code> | <code>str</code> | The id of the draft |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncDraftDetail](hightouch/models/sync_draft_detail.py), [GetSyncDraftErrorBody](hightouch/errors/get_sync_draft_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncDraftDetail](hightouch/models/sync_draft_detail.py)</code> -- Ok

**On `Failure`**: `error` is <code>[GetSyncDraftErrorBody](hightouch/errors/get_sync_draft_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_drafts_for_sync(sync_id: float, *, status: SyncDraftStatusOrStr | None = None, updated_since: RFC3339DateTime | None = None, limit: float | None = 100.0, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncDraftList, ListDraftsForSyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List one sync's drafts, oldest change first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.list_drafts_for_sync(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraftList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDraftsForSyncErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.list_drafts_for_sync(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraftList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDraftsForSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | The id of the sync |
| <code>status</code> | <code>[SyncDraftStatusOrStr](hightouch/models/enums/sync_draft_status.py) \| None</code> | filter on the draft's status (default `pending`)<br>**Default**: <code>None</code> |
| <code>updated_since</code> | <code>RFC3339DateTime \| None</code> | only drafts changed at or after this ISO timestamp<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | the most drafts to return on a page, from 1 to 100 (default 100)<br>**Default**: <code>100.0</code> |
| <code>cursor</code> | <code>str \| None</code> | the `nextCursor` from the previous page<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncDraftList](hightouch/models/sync_draft_list.py), [ListDraftsForSyncErrorBody](hightouch/errors/list_drafts_for_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncDraftList](hightouch/models/sync_draft_list.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListDraftsForSyncErrorBody](hightouch/errors/list_drafts_for_sync_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sync(*, slug: str | None = None, model_id: float | None = None, destination_id: float | None = None, after: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncsResponse, ListSyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the syncs in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.list_sync()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.list_sync()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str \| None</code> | filter based on slug<br>**Default**: <code>None</code> |
| <code>model_id</code> | <code>float \| None</code> | filter based on modelId<br>**Default**: <code>None</code> |
| <code>destination_id</code> | <code>float \| None</code> | filter based on destinationId<br>**Default**: <code>None</code> |
| <code>after</code> | <code>RFC3339DateTime \| None</code> | select syncs that were run after given ISO timestamp<br>**Default**: <code>None</code> |
| <code>before</code> | <code>RFC3339DateTime \| None</code> | select syncs that were run before given ISO timestamp<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderByHightouchDestinationsApiOrStr](hightouch/models/enums/order_by_hightouch_destinations_api.py) \| None</code> | specify the order<br>**Default**: <code>OrderByHightouchDestinationsApi.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncsResponse](hightouch/models/syncs_response.py), [ListSyncErrorBody](hightouch/errors/list_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncsResponse](hightouch/models/syncs_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListSyncErrorBody](hightouch/errors/list_sync_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sync_drafts(*, status: SyncDraftStatusOrStr | None = None, sync_id: float | None = None, updated_since: RFC3339DateTime | None = None, limit: float | None = 100.0, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncDraftList, ListSyncDraftsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List sync drafts across every sync in the workspace, oldest change first.
Poll with `status=pending` and read every page each time: the list shows
the current state, not a feed of changes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.list_sync_drafts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraftList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncDraftsErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.list_sync_drafts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraftList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncDraftsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[SyncDraftStatusOrStr](hightouch/models/enums/sync_draft_status.py) \| None</code> | filter on the draft's status (default `pending`)<br>**Default**: <code>None</code> |
| <code>sync_id</code> | <code>float \| None</code> | only drafts for this sync<br>**Default**: <code>None</code> |
| <code>updated_since</code> | <code>RFC3339DateTime \| None</code> | only drafts changed at or after this ISO timestamp<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | the most drafts to return on a page, from 1 to 100 (default 100)<br>**Default**: <code>100.0</code> |
| <code>cursor</code> | <code>str \| None</code> | the `nextCursor` from the previous page<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncDraftList](hightouch/models/sync_draft_list.py), [ListSyncDraftsErrorBody](hightouch/errors/list_sync_drafts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncDraftList](hightouch/models/sync_draft_list.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListSyncDraftsErrorBody](hightouch/errors/list_sync_drafts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sync_runs(sync_id: float, *, run_id: float | None = None, after: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, within: float | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderBy1OrStr | None = OrderBy1.ID, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncsRunsResponse, ListSyncRunsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all sync runs under a sync

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.list_sync_runs(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsRunsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncRunsErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.list_sync_runs(1.5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsRunsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSyncRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | Value sent with the request. |
| <code>run_id</code> | <code>float \| None</code> | query for specific run id<br>**Default**: <code>None</code> |
| <code>after</code> | <code>RFC3339DateTime \| None</code> | select sync runs that are started after given ISO timestamp<br>**Default**: <code>None</code> |
| <code>before</code> | <code>RFC3339DateTime \| None</code> | select sync runs that are started before certain ISO timestamp<br>**Default**: <code>None</code> |
| <code>within</code> | <code>float \| None</code> | select sync runs that are started within last given minutes<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | set the offset on results (for pagination)<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | limit the number of objects returned (default is 100)<br>**Default**: <code>100.0</code> |
| <code>order_by</code> | <code>[OrderBy1OrStr](hightouch/models/enums/order_by1.py) \| None</code> | specify the order<br>**Default**: <code>OrderBy1.ID</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncsRunsResponse](hightouch/models/syncs_runs_response.py), [ListSyncRunsErrorBody](hightouch/errors/list_sync_runs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncsRunsResponse](hightouch/models/syncs_runs_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[ListSyncRunsErrorBody](hightouch/errors/list_sync_runs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reject_sync_draft(sync_id: float, draft_id: str, body: RejectSyncDraftInput | RejectSyncDraftInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncDraft, RejectSyncDraftErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reject a sync draft. The draft closes without applying its change; to try
again, the requester edits the sync.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.reject_sync_draft(1.5, "some example string", RejectSyncDraftInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraft
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RejectSyncDraftErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.reject_sync_draft(
    1.5, "some example string", RejectSyncDraftInput()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncDraft
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RejectSyncDraftErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | The id of the sync |
| <code>draft_id</code> | <code>str</code> | The id of the draft |
| <code>body</code> | <code>[RejectSyncDraftInput](hightouch/models/reject_sync_draft_input.py) \| [RejectSyncDraftInputDict](hightouch/models/reject_sync_draft_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncDraft](hightouch/models/sync_draft.py), [RejectSyncDraftErrorBody](hightouch/errors/reject_sync_draft_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncDraft](hightouch/models/sync_draft.py)</code> -- Ok

**On `Failure`**: `error` is <code>[RejectSyncDraftErrorBody](hightouch/errors/reject_sync_draft_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 413 | <code>[RawError](hightouch/core/results.py)</code> |
| 409, 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_run(sync_id: str, *, body: TriggerRunInput | TriggerRunInputDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TriggerRunOutput, TriggerRunErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new run for the given sync.

If a run is already in progress, this queues a sync run that will get
executed immediately after the current run completes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.trigger_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerRunOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerRunErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.trigger_run("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TriggerRunOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>str</code> | The id of the sync to trigger a run |
| <code>body</code> | <code>[TriggerRunInput](hightouch/models/trigger_run_input.py) \| [TriggerRunInputDict](hightouch/models/trigger_run_input.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[TriggerRunOutput](hightouch/models/trigger_run_output.py), [TriggerRunErrorBody](hightouch/errors/trigger_run_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TriggerRunOutput](hightouch/models/trigger_run_output.py)</code> -- Ok

**On `Failure`**: `error` is <code>[TriggerRunErrorBody](hightouch/errors/trigger_run_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_run_custom(body: TriggerRunCustomInput | TriggerRunCustomInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncsTriggerResponse, TriggerRunCustomErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new run globally based on sync id or sync slug

If a run is already in progress, this queues a sync run that will get
executed immediately after the current run completes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.trigger_run_custom(TriggerRunCustomInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsTriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerRunCustomErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.trigger_run_custom(TriggerRunCustomInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsTriggerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerRunCustomErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TriggerRunCustomInput](hightouch/models/trigger_run_custom_input.py) \| [TriggerRunCustomInputDict](hightouch/models/trigger_run_custom_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncsTriggerResponse](hightouch/models/unions/syncs_trigger_response.py), [TriggerRunCustomErrorBody](hightouch/errors/trigger_run_custom_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncsTriggerResponse](hightouch/models/unions/syncs_trigger_response.py)</code> -- Ok

**On `Failure`**: `error` is <code>[TriggerRunCustomErrorBody](hightouch/errors/trigger_run_custom_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_sync(sync_id: float, body: SyncUpdate | SyncUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncsResponse1, UpdateSyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing sync

Patch a sync based on its Hightouch ID. A sync bound to a sync template
takes its configuration from the template: change this sync's values
with `syncTemplateOverrides`, bind it to another template or detach it
with `syncTemplateId`, but do not set `configuration` while it is bound.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.syncs.with_raw_response.update_sync(
    1.5,
    SyncUpdate(
        configuration={
            "mode": "upsert",
            "object": "contacts",
            "mappings": {},
            "objectId": "0-1",
            "externalIdMapping": {},
            "associationMappings": {},
        },
        schedule=Schedule(type_="some example string"),
        disabled=True,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSyncErrorBody
```

**Async**

```python
result = await async_client.syncs.with_raw_response.update_sync(
    1.5,
    SyncUpdate(
        configuration={
            "mode": "upsert",
            "object": "contacts",
            "mappings": {},
            "objectId": "0-1",
            "externalIdMapping": {},
            "associationMappings": {},
        },
        schedule=Schedule(type_="some example string"),
        disabled=True,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sync_id</code> | <code>float</code> | The sync's ID |
| <code>body</code> | <code>[SyncUpdate](hightouch/models/sync_update.py) \| [SyncUpdateDict](hightouch/models/sync_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hightouch/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hightouch/core/results.py)&#91;[SyncsResponse1](hightouch/models/unions/syncs_response1.py), [UpdateSyncErrorBody](hightouch/errors/update_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncsResponse1](hightouch/models/unions/syncs_response1.py)</code> -- Ok

**On `Failure`**: `error` is <code>[UpdateSyncErrorBody](hightouch/errors/update_sync_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](hightouch/core/results.py)</code> |
| 422 | <code>[ValidateErrorJson](hightouch/models/validate_error_json.py)</code> |
| 500 | <code>[InternalServerErrorOrStr](hightouch/models/enums/internal_server_error.py)</code> |
| anything unmapped | <code>[RawError](hightouch/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

