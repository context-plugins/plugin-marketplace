# Reference

> Source: [SalesforceServiceCloudClient](src/client.ts)

## Bot

> Source: [Bot](src/resources/bot.ts)

<details>
<summary><code>continueSession(request: Bot.ContinueSessionRequest, options?: RequestOptions): ApiPromise&lt;ChatMessageResponseEnvelope, Bot.ContinueSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API on an active session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bot.continueSession({
    sessionId: "some example string",
    xOrgId: "00Dx0000000ALskEAG",
    xRequestId: "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    body: { message: { sequenceId: 1 } },
  });
  // TODO: Handle 'response' of type ChatMessageResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Bot.ContinueSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bot
  .continueSession({
    sessionId: "some example string",
    xOrgId: "00Dx0000000ALskEAG",
    xRequestId: "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    body: { message: { sequenceId: 1 } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatMessageResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId</code> | <code>string</code> | ID of an active session, which is the `sessionId` returned by the bot when you start a session. |
| <code>xOrgId</code> | <code>string</code> | 18-character org ID of the Salesforce org associated with the bot. |
| <code>xRequestId?</code> | <code>string</code> | Request ID. A UUID in string format created by you to help with request tracking. |
| <code>xRuntimeCrc?</code> | <code>string</code> | Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response. |
| <code>body</code> | <code>[ChatMessageEnvelope](src/models/chat-message-envelope.ts)</code> | Request payload to continue the chat. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bot.continueSession(request)`

- **OnSuccess**: <code>[ChatMessageResponseEnvelope](src/models/chat-message-response-envelope.ts)</code>
- **OnError**: throws <code>[Bot.ContinueSessionError](src/resources/bot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bot.continueSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatMessageResponseEnvelope, Bot.ContinueSessionError&gt;</code>, with `result.value` of type <code>[ChatMessageResponseEnvelope](src/models/chat-message-response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SalesforceServiceCloudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>endSession(request: Bot.EndSessionRequest, options?: RequestOptions): ApiPromise&lt;ChatMessageResponseEnvelope, Bot.EndSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API to end a session

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bot.endSession({
    sessionId: "some example string",
    xOrgId: "00Dx0000000ALskEAG",
    xSessionEndReason: EndSessionReason.Transfer,
    xRequestId: "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
  });
  // TODO: Handle 'response' of type ChatMessageResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Bot.EndSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bot
  .endSession({
    sessionId: "some example string",
    xOrgId: "00Dx0000000ALskEAG",
    xSessionEndReason: EndSessionReason.Transfer,
    xRequestId: "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatMessageResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId</code> | <code>string</code> | ID of an active session, which is the `sessionId` returned by the bot when you start a session. |
| <code>xOrgId</code> | <code>string</code> | 18-character org ID of the Salesforce org associated with the bot. |
| <code>xSessionEndReason</code> | <code>[EndSessionReason](src/models/end-session-reason.ts)</code> | Reason session ended. |
| <code>xRequestId?</code> | <code>string</code> | Request ID. A UUID in string format created by you to help with request tracking. |
| <code>xRuntimeCrc?</code> | <code>string</code> | Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bot.endSession(request)`

- **OnSuccess**: <code>[ChatMessageResponseEnvelope](src/models/chat-message-response-envelope.ts)</code>
- **OnError**: throws <code>[Bot.EndSessionError](src/resources/bot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bot.endSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatMessageResponseEnvelope, Bot.EndSessionError&gt;</code>, with `result.value` of type <code>[ChatMessageResponseEnvelope](src/models/chat-message-response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SalesforceServiceCloudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSession(request: Bot.StartSessionRequest, options?: RequestOptions): ApiPromise&lt;ResponseEnvelope, Bot.StartSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API to start a new session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bot.startSession({
    botId: "some example string",
    xOrgId: "00Dx0000000ALskEAG",
    xRequestId: "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    body: { externalSessionKey: "some example string", forceConfig: { endpoint: "some example string" } },
  });
  // TODO: Handle 'response' of type ResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type Bot.StartSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bot
  .startSession({
    botId: "some example string",
    xOrgId: "00Dx0000000ALskEAG",
    xRequestId: "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    body: { externalSessionKey: "some example string", forceConfig: { endpoint: "some example string" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>botId</code> | <code>string</code> | ID of the Einstein Bot that you want to interact with. |
| <code>xOrgId</code> | <code>string</code> | 18-character org ID of the Salesforce org associated with the bot. |
| <code>xRequestId?</code> | <code>string</code> | Request ID. A UUID in string format created by you to help with request tracking. |
| <code>body</code> | <code>[InitMessageEnvelope](src/models/init-message-envelope.ts)</code> | Request payload to initiate a session. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bot.startSession(request)`

- **OnSuccess**: <code>[ResponseEnvelope](src/models/response-envelope.ts)</code>
- **OnError**: throws <code>[Bot.StartSessionError](src/resources/bot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bot.startSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseEnvelope, Bot.StartSessionError&gt;</code>, with `result.value` of type <code>[ResponseEnvelope](src/models/response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SalesforceServiceCloudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/resources/health.ts)

<details>
<summary><code>checkHealthStatus(options?: RequestOptions): ApiPromise&lt;Status, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether the status of Einstein Bots API is up or down.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.checkHealthStatus();
  // TODO: Handle 'response' of type Status
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.health.checkHealthStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Status
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.checkHealthStatus()`

- **OnSuccess**: <code>[Status](src/models/status.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.health.checkHealthStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Status, ApiError&gt;</code>, with `result.value` of type <code>[Status](src/models/status.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SalesforceServiceCloudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](src/resources/versions.ts)

<details>
<summary><code>getApiVersions(options?: RequestOptions): ApiPromise&lt;SupportedVersions, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of supported Einstein Bots API versions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.getApiVersions();
  // TODO: Handle 'response' of type SupportedVersions
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.getApiVersions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportedVersions
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.getApiVersions()`

- **OnSuccess**: <code>[SupportedVersions](src/models/supported-versions.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.versions.getApiVersions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportedVersions, ApiError&gt;</code>, with `result.value` of type <code>[SupportedVersions](src/models/supported-versions.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SalesforceServiceCloudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

