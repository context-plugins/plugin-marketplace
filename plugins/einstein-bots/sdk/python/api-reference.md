# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [EinsteinBotsClient](einstein_bots/client.py)

## Bot

> Source: [Bot](einstein_bots/apis/bot.py)

<details>
<summary><code>def continue_session(session_id: str, x_org_id: str, body: ChatMessageEnvelope | ChatMessageEnvelopeDict, *, x_request_id: str | None = None, x_runtime_crc: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ChatMessageResponseEnvelope</code></summary>

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
try:
    response = client.bot.continue_session(
        "some example string",
        "00Dx0000000ALskEAG",
        ChatMessageEnvelope(message=ChoiceMessage(sequence_id=1)),
        x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    )
    # TODO: Handle 'response' of type ChatMessageResponseEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContinueSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.bot.continue_session(
        "some example string",
        "00Dx0000000ALskEAG",
        ChatMessageEnvelope(message=ChoiceMessage(sequence_id=1)),
        x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    )
    # TODO: Handle 'response' of type ChatMessageResponseEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContinueSessionErrorBody
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
| <code>body</code> | <code>[ChatMessageEnvelope](einstein_bots/models/chat_message_envelope.py) \| [ChatMessageEnvelopeDict](einstein_bots/models/chat_message_envelope.py)</code> | Request payload to continue the chat. |
| <code>x_request_id</code> | <code>str \| None</code> | Request ID. A UUID in string format created by you to help with request tracking.<br>**Default**: <code>None</code> |
| <code>x_runtime_crc</code> | <code>str \| None</code> | Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](einstein_bots/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessageResponseEnvelope](einstein_bots/models/chat_message_response_envelope.py)</code> -- OK

**OnError**: <code>[ApiError](einstein_bots/core/exceptions.py)&#91;[ContinueSessionErrorBody](einstein_bots/errors/continue_session_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 423, 429, 503 | <code>[Error](einstein_bots/models/error.py)</code> |
| anything unmapped | <code>[RawError](einstein_bots/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def end_session(session_id: str, x_org_id: str, x_session_end_reason: EndSessionReasonOrStr, *, x_request_id: str | None = None, x_runtime_crc: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ChatMessageResponseEnvelope</code></summary>

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
try:
    response = client.bot.end_session(
        "some example string",
        "00Dx0000000ALskEAG",
        EndSessionReason.TRANSFER,
        x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    )
    # TODO: Handle 'response' of type ChatMessageResponseEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EndSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.bot.end_session(
        "some example string",
        "00Dx0000000ALskEAG",
        EndSessionReason.TRANSFER,
        x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    )
    # TODO: Handle 'response' of type ChatMessageResponseEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EndSessionErrorBody
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
| <code>x_session_end_reason</code> | <code>[EndSessionReasonOrStr](einstein_bots/models/enums/end_session_reason.py)</code> | Reason session ended. |
| <code>x_request_id</code> | <code>str \| None</code> | Request ID. A UUID in string format created by you to help with request tracking.<br>**Default**: <code>None</code> |
| <code>x_runtime_crc</code> | <code>str \| None</code> | Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](einstein_bots/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessageResponseEnvelope](einstein_bots/models/chat_message_response_envelope.py)</code> -- OK

**OnError**: <code>[ApiError](einstein_bots/core/exceptions.py)&#91;[EndSessionErrorBody](einstein_bots/errors/end_session_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 423, 429, 503 | <code>[Error](einstein_bots/models/error.py)</code> |
| anything unmapped | <code>[RawError](einstein_bots/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_session(bot_id: str, x_org_id: str, body: InitMessageEnvelope | InitMessageEnvelopeDict, *, x_request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ResponseEnvelope</code></summary>

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
try:
    response = client.bot.start_session(
        "some example string",
        "00Dx0000000ALskEAG",
        InitMessageEnvelope(
            external_session_key="some example string", force_config=ForceConfig(endpoint="some example string")
        ),
        x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    )
    # TODO: Handle 'response' of type ResponseEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.bot.start_session(
        "some example string",
        "00Dx0000000ALskEAG",
        InitMessageEnvelope(
            external_session_key="some example string", force_config=ForceConfig(endpoint="some example string")
        ),
        x_request_id="36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    )
    # TODO: Handle 'response' of type ResponseEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSessionErrorBody
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
| <code>body</code> | <code>[InitMessageEnvelope](einstein_bots/models/init_message_envelope.py) \| [InitMessageEnvelopeDict](einstein_bots/models/init_message_envelope.py)</code> | Request payload to initiate a session. |
| <code>x_request_id</code> | <code>str \| None</code> | Request ID. A UUID in string format created by you to help with request tracking.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](einstein_bots/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseEnvelope](einstein_bots/models/response_envelope.py)</code> -- OK

**OnError**: <code>[ApiError](einstein_bots/core/exceptions.py)&#91;[StartSessionErrorBody](einstein_bots/errors/start_session_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 422, 423, 429, 503 | <code>[Error](einstein_bots/models/error.py)</code> |
| anything unmapped | <code>[RawError](einstein_bots/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](einstein_bots/apis/health.py)

<details>
<summary><code>def check_health_status(*, request_options: RequestOptionsOrDict | None = None) -> Status</code></summary>

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
try:
    response = client.health.check_health_status()
    # TODO: Handle 'response' of type Status
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.health.check_health_status()
    # TODO: Handle 'response' of type Status
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](einstein_bots/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Status](einstein_bots/models/status.py)</code> -- OK

**OnError**: <code>[ApiError](einstein_bots/core/exceptions.py)&#91;[RawError](einstein_bots/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](einstein_bots/apis/versions.py)

<details>
<summary><code>def get_api_versions(*, request_options: RequestOptionsOrDict | None = None) -> SupportedVersions</code></summary>

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
try:
    response = client.versions.get_api_versions()
    # TODO: Handle 'response' of type SupportedVersions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.versions.get_api_versions()
    # TODO: Handle 'response' of type SupportedVersions
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](einstein_bots/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportedVersions](einstein_bots/models/supported_versions.py)</code> -- Supported API versions

**OnError**: <code>[ApiError](einstein_bots/core/exceptions.py)&#91;[RawError](einstein_bots/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

