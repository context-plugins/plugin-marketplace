# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [SalesforceServiceCloudClient](salesforce_service_cloud/client.py)

## Bot

> Source: [Bot](salesforce_service_cloud/apis/bot.py)

<details>
<summary><code>def continue_session(session_id: str, x_org_id: str, body: ChatMessageEnvelope | ChatMessageEnvelopeDict, *, x_request_id: str | None = None, x_runtime_crc: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ChatMessageResponseEnvelope, ContinueSessionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API on an active session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bot.with_raw_response.continue_session(
    "some example string",
    "00Dx0000000ALskEAG",
    ChatMessageEnvelope(message=ChoiceMessage(sequence_id=1)),
    x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChatMessageResponseEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContinueSessionErrorBody
```

**Async**

```python
result = await async_client.bot.with_raw_response.continue_session(
    "some example string",
    "00Dx0000000ALskEAG",
    ChatMessageEnvelope(message=ChoiceMessage(sequence_id=1)),
    x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChatMessageResponseEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContinueSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str</code> | ID of an active session, which is the `sessionId` returned by the bot when you start a session. |
| <code>x_org_id</code> | <code>str</code> | 18-character org ID of the Salesforce org associated with the bot. |
| <code>body</code> | <code>[ChatMessageEnvelope](salesforce_service_cloud/models/chat_message_envelope.py) \| [ChatMessageEnvelopeDict](salesforce_service_cloud/models/chat_message_envelope.py)</code> | Request payload to continue the chat. |
| <code>x_request_id</code> | <code>str \| None</code> | Request ID. A UUID in string format created by you to help with request tracking.<br>**Default**: <code>None</code> |
| <code>x_runtime_crc</code> | <code>str \| None</code> | Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](salesforce_service_cloud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](salesforce_service_cloud/core/results.py)&#91;[ChatMessageResponseEnvelope](salesforce_service_cloud/models/chat_message_response_envelope.py), [ContinueSessionErrorBody](salesforce_service_cloud/errors/continue_session_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ChatMessageResponseEnvelope](salesforce_service_cloud/models/chat_message_response_envelope.py)</code> -- OK

**On `Failure`**: `error` is <code>[ContinueSessionErrorBody](salesforce_service_cloud/errors/continue_session_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 423, 429, 503 | <code>[Error](salesforce_service_cloud/models/error.py)</code> |
| anything unmapped | <code>[RawError](salesforce_service_cloud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def end_session(session_id: str, x_org_id: str, x_session_end_reason: EndSessionReasonOrStr, *, x_request_id: str | None = None, x_runtime_crc: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ChatMessageResponseEnvelope, EndSessionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API to end a session

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bot.with_raw_response.end_session(
    "some example string",
    "00Dx0000000ALskEAG",
    EndSessionReason.TRANSFER,
    x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChatMessageResponseEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EndSessionErrorBody
```

**Async**

```python
result = await async_client.bot.with_raw_response.end_session(
    "some example string",
    "00Dx0000000ALskEAG",
    EndSessionReason.TRANSFER,
    x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChatMessageResponseEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EndSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str</code> | ID of an active session, which is the `sessionId` returned by the bot when you start a session. |
| <code>x_org_id</code> | <code>str</code> | 18-character org ID of the Salesforce org associated with the bot. |
| <code>x_session_end_reason</code> | <code>[EndSessionReasonOrStr](salesforce_service_cloud/models/enums/end_session_reason.py)</code> | Reason session ended. |
| <code>x_request_id</code> | <code>str \| None</code> | Request ID. A UUID in string format created by you to help with request tracking.<br>**Default**: <code>None</code> |
| <code>x_runtime_crc</code> | <code>str \| None</code> | Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](salesforce_service_cloud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](salesforce_service_cloud/core/results.py)&#91;[ChatMessageResponseEnvelope](salesforce_service_cloud/models/chat_message_response_envelope.py), [EndSessionErrorBody](salesforce_service_cloud/errors/end_session_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ChatMessageResponseEnvelope](salesforce_service_cloud/models/chat_message_response_envelope.py)</code> -- OK

**On `Failure`**: `error` is <code>[EndSessionErrorBody](salesforce_service_cloud/errors/end_session_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 423, 429, 503 | <code>[Error](salesforce_service_cloud/models/error.py)</code> |
| anything unmapped | <code>[RawError](salesforce_service_cloud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_session(bot_id: str, x_org_id: str, body: InitMessageEnvelope | InitMessageEnvelopeDict, *, x_request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResponseEnvelope, StartSessionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API to start a new session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bot.with_raw_response.start_session(
    "some example string",
    "00Dx0000000ALskEAG",
    InitMessageEnvelope(
        external_session_key="some example string", force_config=ForceConfig(endpoint="some example string")
    ),
    x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResponseEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSessionErrorBody
```

**Async**

```python
result = await async_client.bot.with_raw_response.start_session(
    "some example string",
    "00Dx0000000ALskEAG",
    InitMessageEnvelope(
        external_session_key="some example string", force_config=ForceConfig(endpoint="some example string")
    ),
    x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResponseEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | ID of the Einstein Bot that you want to interact with. |
| <code>x_org_id</code> | <code>str</code> | 18-character org ID of the Salesforce org associated with the bot. |
| <code>body</code> | <code>[InitMessageEnvelope](salesforce_service_cloud/models/init_message_envelope.py) \| [InitMessageEnvelopeDict](salesforce_service_cloud/models/init_message_envelope.py)</code> | Request payload to initiate a session. |
| <code>x_request_id</code> | <code>str \| None</code> | Request ID. A UUID in string format created by you to help with request tracking.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](salesforce_service_cloud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](salesforce_service_cloud/core/results.py)&#91;[ResponseEnvelope](salesforce_service_cloud/models/response_envelope.py), [StartSessionErrorBody](salesforce_service_cloud/errors/start_session_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResponseEnvelope](salesforce_service_cloud/models/response_envelope.py)</code> -- OK

**On `Failure`**: `error` is <code>[StartSessionErrorBody](salesforce_service_cloud/errors/start_session_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 423, 429, 503 | <code>[Error](salesforce_service_cloud/models/error.py)</code> |
| anything unmapped | <code>[RawError](salesforce_service_cloud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](salesforce_service_cloud/apis/health.py)

<details>
<summary><code>def check_health_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Status, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether the status of Einstein Bots API is up or down.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.health.with_raw_response.check_health_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Status
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.health.with_raw_response.check_health_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Status
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](salesforce_service_cloud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](salesforce_service_cloud/core/results.py)&#91;[Status](salesforce_service_cloud/models/status.py), [RawError](salesforce_service_cloud/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Status](salesforce_service_cloud/models/status.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](salesforce_service_cloud/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](salesforce_service_cloud/apis/versions.py)

<details>
<summary><code>def get_api_versions(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportedVersions, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of supported Einstein Bots API versions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.versions.with_raw_response.get_api_versions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedVersions
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.versions.with_raw_response.get_api_versions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedVersions
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](salesforce_service_cloud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](salesforce_service_cloud/core/results.py)&#91;[SupportedVersions](salesforce_service_cloud/models/supported_versions.py), [RawError](salesforce_service_cloud/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportedVersions](salesforce_service_cloud/models/supported_versions.py)</code> -- Supported API versions

**On `Failure`**: `error` is <code>[RawError](salesforce_service_cloud/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

