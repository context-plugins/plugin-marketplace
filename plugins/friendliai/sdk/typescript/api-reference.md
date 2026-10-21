# Reference

> Source: [FriendliSuiteApiReferenceClient](src/client.ts)

## ServerlessChat

> Source: [ServerlessChat](src/resources/serverless-chat.ts)

<details>
<summary><code>serverlessChatComplete(request: ServerlessChat.ServerlessChatCompleteRequest, options?: RequestOptions): ApiPromise&lt;ChatResult, ServerlessChat.ServerlessChatCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessChat.serverlessChatComplete({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  // TODO: Handle 'response' of type ChatResult
} catch (err) {
  // TODO: Handle 'err' of type ServerlessChat.ServerlessChatCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessChat.serverlessChatComplete({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessChatCompletionBody](src/models/serverless-chat-completion-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessChat.serverlessChatComplete(request)`

- **OnSuccess**: <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: throws <code>[ServerlessChat.ServerlessChatCompleteError](src/resources/serverless-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessChat.serverlessChatComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatResult, ServerlessChat.ServerlessChatCompleteError&gt;</code>, with `result.value` of type <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessChatStream(request: ServerlessChat.ServerlessChatStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedChatResult&gt;, ServerlessChat.ServerlessChatStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.serverlessChat.serverlessChatStream({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedChatResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ServerlessChat.ServerlessChatStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessChat.serverlessChatStream({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedChatResult>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessChatCompletionStreamBody](src/models/serverless-chat-completion-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessChat.serverlessChatStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedChatResult](src/models/streamed-chat-result.ts)&gt;</code>
- **OnError**: throws <code>[ServerlessChat.ServerlessChatStreamError](src/resources/serverless-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessChat.serverlessChatStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedChatResult&gt;, ServerlessChat.ServerlessChatStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedChatResult](src/models/streamed-chat-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessToolAssistedChat

> Source: [ServerlessToolAssistedChat](src/resources/serverless-tool-assisted-chat.ts)

<details>
<summary><code>serverlessToolAssistedChatComplete(request: ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteRequest, options?: RequestOptions): ApiPromise&lt;ChatResult, ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs. Additionally, the model can utilize built-in tools for tool calls, enhancing its capability to provide more comprehensive and actionable responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessToolAssistedChat.serverlessToolAssistedChatComplete({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  // TODO: Handle 'response' of type ChatResult
} catch (err) {
  // TODO: Handle 'err' of type ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessToolAssistedChat.serverlessToolAssistedChatComplete({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessToolAssistedChatCompletionBody](src/models/serverless-tool-assisted-chat-completion-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessToolAssistedChat.serverlessToolAssistedChatComplete(request)`

- **OnSuccess**: <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: throws <code>[ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteError](src/resources/serverless-tool-assisted-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessToolAssistedChat.serverlessToolAssistedChatComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatResult, ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteError&gt;</code>, with `result.value` of type <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessToolAssistedChatStream(request: ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;ServerlessToolAssistedChatCompletionStreamSuccess&gt;, ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs. Additionally, the model can utilize built-in tools for tool calls, enhancing its capability to provide more comprehensive and actionable responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.serverlessToolAssistedChat.serverlessToolAssistedChatStream({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type ServerlessToolAssistedChatCompletionStreamSuccess, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessToolAssistedChat.serverlessToolAssistedChatStream({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<ServerlessToolAssistedChatCompletionStreamSuccess>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessToolAssistedChatCompletionStreamBody](src/models/serverless-tool-assisted-chat-completion-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessToolAssistedChat.serverlessToolAssistedChatStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[ServerlessToolAssistedChatCompletionStreamSuccess](src/models/unions/serverless-tool-assisted-chat-completion-stream-success.ts)&gt;</code>
- **OnError**: throws <code>[ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamError](src/resources/serverless-tool-assisted-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessToolAssistedChat.serverlessToolAssistedChatStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;ServerlessToolAssistedChatCompletionStreamSuccess&gt;, ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[ServerlessToolAssistedChatCompletionStreamSuccess](src/models/unions/serverless-tool-assisted-chat-completion-stream-success.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessResponses

> Source: [ServerlessResponses](src/resources/serverless-responses.ts)

<details>
<summary><code>serverlessResponses(request: ServerlessResponses.ServerlessResponsesRequest, options?: RequestOptions): ApiPromise&lt;ServerlessResponsesSuccess, ServerlessResponses.ServerlessResponsesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from text or image inputs. Follows the OpenAI Responses API format, with support for streaming, function and custom tool calls, structured outputs, and reasoning controls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessResponses.serverlessResponses({
    body: { input: "some example string", model: "some example string" },
  });
  // TODO: Handle 'response' of type ServerlessResponsesSuccess
} catch (err) {
  // TODO: Handle 'err' of type ServerlessResponses.ServerlessResponsesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessResponses.serverlessResponses({
  body: { input: "some example string", model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServerlessResponsesSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessResponsesBody](src/models/serverless-responses-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessResponses.serverlessResponses(request)`

- **OnSuccess**: <code>[ServerlessResponsesSuccess](src/models/serverless-responses-success.ts)</code>
- **OnError**: throws <code>[ServerlessResponses.ServerlessResponsesError](src/resources/serverless-responses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessResponses.serverlessResponses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServerlessResponsesSuccess, ServerlessResponses.ServerlessResponsesError&gt;</code>, with `result.value` of type <code>[ServerlessResponsesSuccess](src/models/serverless-responses-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessResponsesStream(request: ServerlessResponses.ServerlessResponsesStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;ServerlessResponsesStreamSuccess&gt;, ServerlessResponses.ServerlessResponsesStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from text or image inputs. Follows the OpenAI Responses API format, with support for streaming, function and custom tool calls, structured outputs, and reasoning controls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.serverlessResponses.serverlessResponsesStream({
    body: { input: "some example string", model: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type ServerlessResponsesStreamSuccess, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ServerlessResponses.ServerlessResponsesStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessResponses.serverlessResponsesStream({
  body: { input: "some example string", model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<ServerlessResponsesStreamSuccess>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessResponsesStreamBody](src/models/serverless-responses-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessResponses.serverlessResponsesStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[ServerlessResponsesStreamSuccess](src/models/serverless-responses-stream-success.ts)&gt;</code>
- **OnError**: throws <code>[ServerlessResponses.ServerlessResponsesStreamError](src/resources/serverless-responses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessResponses.serverlessResponsesStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;ServerlessResponsesStreamSuccess&gt;, ServerlessResponses.ServerlessResponsesStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[ServerlessResponsesStreamSuccess](src/models/serverless-responses-stream-success.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessMessages

> Source: [ServerlessMessages](src/resources/serverless-messages.ts)

<details>
<summary><code>serverlessMessages(request: ServerlessMessages.ServerlessMessagesRequest, options?: RequestOptions): ApiPromise&lt;ServerlessMessagesSuccess, ServerlessMessages.ServerlessMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a conversation using the Anthropic Messages API format. Supports streaming, function tool calls, and extended thinking.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessMessages.serverlessMessages({
    body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
  });
  // TODO: Handle 'response' of type ServerlessMessagesSuccess
} catch (err) {
  // TODO: Handle 'err' of type ServerlessMessages.ServerlessMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessMessages.serverlessMessages({
  body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServerlessMessagesSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessMessagesBody](src/models/serverless-messages-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessMessages.serverlessMessages(request)`

- **OnSuccess**: <code>[ServerlessMessagesSuccess](src/models/serverless-messages-success.ts)</code>
- **OnError**: throws <code>[ServerlessMessages.ServerlessMessagesError](src/resources/serverless-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessMessages.serverlessMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServerlessMessagesSuccess, ServerlessMessages.ServerlessMessagesError&gt;</code>, with `result.value` of type <code>[ServerlessMessagesSuccess](src/models/serverless-messages-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessMessagesStream(request: ServerlessMessages.ServerlessMessagesStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;ServerlessMessagesStreamSuccess&gt;, ServerlessMessages.ServerlessMessagesStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a conversation using the Anthropic Messages API format. Supports streaming, function tool calls, and extended thinking.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.serverlessMessages.serverlessMessagesStream({
    body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type ServerlessMessagesStreamSuccess, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ServerlessMessages.ServerlessMessagesStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessMessages.serverlessMessagesStream({
  body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<ServerlessMessagesStreamSuccess>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessMessagesStreamBody](src/models/serverless-messages-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessMessages.serverlessMessagesStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[ServerlessMessagesStreamSuccess](src/models/serverless-messages-stream-success.ts)&gt;</code>
- **OnError**: throws <code>[ServerlessMessages.ServerlessMessagesStreamError](src/resources/serverless-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessMessages.serverlessMessagesStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;ServerlessMessagesStreamSuccess&gt;, ServerlessMessages.ServerlessMessagesStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[ServerlessMessagesStreamSuccess](src/models/serverless-messages-stream-success.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessChatRender

> Source: [ServerlessChatRender](src/resources/serverless-chat-render.ts)

<details>
<summary><code>serverlessChatRender(request: ServerlessChatRender.ServerlessChatRenderRequest, options?: RequestOptions): ApiPromise&lt;ServerlessChatRenderSuccess, ServerlessChatRender.ServerlessChatRenderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Render a list of chat messages into the prompt text sent to the model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessChatRender.serverlessChatRender({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  // TODO: Handle 'response' of type ServerlessChatRenderSuccess
} catch (err) {
  // TODO: Handle 'err' of type ServerlessChatRender.ServerlessChatRenderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessChatRender.serverlessChatRender({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServerlessChatRenderSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessChatRenderBody](src/models/serverless-chat-render-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessChatRender.serverlessChatRender(request)`

- **OnSuccess**: <code>[ServerlessChatRenderSuccess](src/models/serverless-chat-render-success.ts)</code>
- **OnError**: throws <code>[ServerlessChatRender.ServerlessChatRenderError](src/resources/serverless-chat-render.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessChatRender.serverlessChatRender(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServerlessChatRenderSuccess, ServerlessChatRender.ServerlessChatRenderError&gt;</code>, with `result.value` of type <code>[ServerlessChatRenderSuccess](src/models/serverless-chat-render-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessCompletions

> Source: [ServerlessCompletions](src/resources/serverless-completions.ts)

<details>
<summary><code>serverlessCompletionsComplete(request: ServerlessCompletions.ServerlessCompletionsCompleteRequest, options?: RequestOptions): ApiPromise&lt;CompletionsResult, ServerlessCompletions.ServerlessCompletionsCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a text completion from a prompt or token sequence. Supports streaming and configurable generation parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessCompletions.serverlessCompletionsComplete({
    body: { model: "some example string", prompt: "some example string" },
  });
  // TODO: Handle 'response' of type CompletionsResult
} catch (err) {
  // TODO: Handle 'err' of type ServerlessCompletions.ServerlessCompletionsCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessCompletions.serverlessCompletionsComplete({
  body: { model: "some example string", prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompletionsResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessCompletionsBody](src/models/unions/serverless-completions-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessCompletions.serverlessCompletionsComplete(request)`

- **OnSuccess**: <code>[CompletionsResult](src/models/completions-result.ts)</code>
- **OnError**: throws <code>[ServerlessCompletions.ServerlessCompletionsCompleteError](src/resources/serverless-completions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessCompletions.serverlessCompletionsComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompletionsResult, ServerlessCompletions.ServerlessCompletionsCompleteError&gt;</code>, with `result.value` of type <code>[CompletionsResult](src/models/completions-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessCompletionsStream(request: ServerlessCompletions.ServerlessCompletionsStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedCompletionsResult&gt;, ServerlessCompletions.ServerlessCompletionsStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a text completion from a prompt or token sequence. Supports streaming and configurable generation parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.serverlessCompletions.serverlessCompletionsStream({
    body: { model: "some example string", prompt: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedCompletionsResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ServerlessCompletions.ServerlessCompletionsStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessCompletions.serverlessCompletionsStream({
  body: { model: "some example string", prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedCompletionsResult>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessCompletionsStreamBody](src/models/unions/serverless-completions-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessCompletions.serverlessCompletionsStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedCompletionsResult](src/models/streamed-completions-result.ts)&gt;</code>
- **OnError**: throws <code>[ServerlessCompletions.ServerlessCompletionsStreamError](src/resources/serverless-completions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessCompletions.serverlessCompletionsStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedCompletionsResult&gt;, ServerlessCompletions.ServerlessCompletionsStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedCompletionsResult](src/models/streamed-completions-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessToken

> Source: [ServerlessToken](src/resources/serverless-token.ts)

<details>
<summary><code>serverlessDetokenization(request: ServerlessToken.ServerlessDetokenizationRequest, options?: RequestOptions): ApiPromise&lt;ServerlessDetokenizationSuccess, ServerlessToken.ServerlessDetokenizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a list of token IDs back into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessToken.serverlessDetokenization({
    body: { model: "some example string", tokens: [1] },
  });
  // TODO: Handle 'response' of type ServerlessDetokenizationSuccess
} catch (err) {
  // TODO: Handle 'err' of type ServerlessToken.ServerlessDetokenizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessToken.serverlessDetokenization({
  body: { model: "some example string", tokens: [1] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServerlessDetokenizationSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessDetokenizationBody](src/models/serverless-detokenization-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessToken.serverlessDetokenization(request)`

- **OnSuccess**: <code>[ServerlessDetokenizationSuccess](src/models/serverless-detokenization-success.ts)</code>
- **OnError**: throws <code>[ServerlessToken.ServerlessDetokenizationError](src/resources/serverless-token.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessToken.serverlessDetokenization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServerlessDetokenizationSuccess, ServerlessToken.ServerlessDetokenizationError&gt;</code>, with `result.value` of type <code>[ServerlessDetokenizationSuccess](src/models/serverless-detokenization-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessTokenization(request: ServerlessToken.ServerlessTokenizationRequest, options?: RequestOptions): ApiPromise&lt;ServerlessTokenizationSuccess, ServerlessToken.ServerlessTokenizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text input into token IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessToken.serverlessTokenization({
    body: { model: "some example string", prompt: "some example string" },
  });
  // TODO: Handle 'response' of type ServerlessTokenizationSuccess
} catch (err) {
  // TODO: Handle 'err' of type ServerlessToken.ServerlessTokenizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessToken.serverlessTokenization({
  body: { model: "some example string", prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServerlessTokenizationSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessTokenizationBody](src/models/serverless-tokenization-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessToken.serverlessTokenization(request)`

- **OnSuccess**: <code>[ServerlessTokenizationSuccess](src/models/serverless-tokenization-success.ts)</code>
- **OnError**: throws <code>[ServerlessToken.ServerlessTokenizationError](src/resources/serverless-token.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessToken.serverlessTokenization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServerlessTokenizationSuccess, ServerlessToken.ServerlessTokenizationError&gt;</code>, with `result.value` of type <code>[ServerlessTokenizationSuccess](src/models/serverless-tokenization-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessAudio

> Source: [ServerlessAudio](src/resources/serverless-audio.ts)

<details>
<summary><code>serverlessAudioTranscriptions(request: ServerlessAudio.ServerlessAudioTranscriptionsRequest, options?: RequestOptions): ApiPromise&lt;AudioTranscriptionResult, ServerlessAudio.ServerlessAudioTranscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribe an audio file into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessAudio.serverlessAudioTranscriptions({
    model: "openai/whisper-large-v3",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type AudioTranscriptionResult
} catch (err) {
  // TODO: Handle 'err' of type ServerlessAudio.ServerlessAudioTranscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessAudio.serverlessAudioTranscriptions({
  model: "openai/whisper-large-v3",
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudioTranscriptionResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>model</code> | <code>string</code> | Code of the model to use. See [available model list](https://friendli.ai/docs/guides/model-apis/pricing#billing-methods). |
| <code>file</code> | <code>FileInput</code> | The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac, ogg, and many other standard audio formats. |
| <code>chunkingStrategy?</code> | <code>[ChunkingStrategy1](src/models/unions/chunking-strategy1.ts)</code> | Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as a single block. |
| <code>language?</code> | <code>[Language](src/models/unions/language.ts)</code> | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency. |
| <code>stream?</code> | <code>[Stream6](src/models/unions/stream6.ts)</code> | Whether to stream the transcription result. When set to `true`, the transcription is sent as [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) once generated. |
| <code>temperature?</code> | <code>[Temperature12](src/models/unions/temperature12.ts)</code> | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessAudio.serverlessAudioTranscriptions(request)`

- **OnSuccess**: <code>[AudioTranscriptionResult](src/models/audio-transcription-result.ts)</code>
- **OnError**: throws <code>[ServerlessAudio.ServerlessAudioTranscriptionsError](src/resources/serverless-audio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessAudio.serverlessAudioTranscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudioTranscriptionResult, ServerlessAudio.ServerlessAudioTranscriptionsError&gt;</code>, with `result.value` of type <code>[AudioTranscriptionResult](src/models/audio-transcription-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessAudioTranscriptionsStream(request: ServerlessAudio.ServerlessAudioTranscriptionsStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedAudioTranscriptionResult&gt;, ServerlessAudio.ServerlessAudioTranscriptionsStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribe an audio file into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.serverlessAudio.serverlessAudioTranscriptionsStream({
    model: "openai/whisper-large-v3",
    file: new Uint8Array(),
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedAudioTranscriptionResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ServerlessAudio.ServerlessAudioTranscriptionsStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessAudio.serverlessAudioTranscriptionsStream({
  model: "openai/whisper-large-v3",
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedAudioTranscriptionResult>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>model</code> | <code>string</code> | Code of the model to use. See [available model list](https://friendli.ai/docs/guides/model-apis/pricing#billing-methods). |
| <code>file</code> | <code>FileInput</code> | The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac, ogg, and many other standard audio formats. |
| <code>chunkingStrategy?</code> | <code>[ChunkingStrategy1](src/models/unions/chunking-strategy1.ts)</code> | Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as a single block. |
| <code>language?</code> | <code>[Language](src/models/unions/language.ts)</code> | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency. |
| <code>stream?</code> | <code>boolean</code> | Whether to stream the transcription result. When set to `true`, the transcription is sent as [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) once generated.<br>**Default**: true |
| <code>temperature?</code> | <code>[Temperature12](src/models/unions/temperature12.ts)</code> | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessAudio.serverlessAudioTranscriptionsStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedAudioTranscriptionResult](src/models/streamed-audio-transcription-result.ts)&gt;</code>
- **OnError**: throws <code>[ServerlessAudio.ServerlessAudioTranscriptionsStreamError](src/resources/serverless-audio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessAudio.serverlessAudioTranscriptionsStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedAudioTranscriptionResult&gt;, ServerlessAudio.ServerlessAudioTranscriptionsStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedAudioTranscriptionResult](src/models/streamed-audio-transcription-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessModel

> Source: [ServerlessModel](src/resources/serverless-model.ts)

<details>
<summary><code>serverlessModels(options?: RequestOptions): ApiPromise&lt;ServerlessModelListSuccess, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the currently available models, and provides basic information about each one such as pricing and functionality.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessModel.serverlessModels();
  // TODO: Handle 'response' of type ServerlessModelListSuccess
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
const result = await client.serverlessModel.serverlessModels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServerlessModelListSuccess
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessModel.serverlessModels()`

- **OnSuccess**: <code>[ServerlessModelListSuccess](src/models/serverless-model-list-success.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.serverlessModel.serverlessModels().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServerlessModelListSuccess, ApiError&gt;</code>, with `result.value` of type <code>[ServerlessModelListSuccess](src/models/serverless-model-list-success.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serverlessOpenrouterModels(options?: RequestOptions): ApiPromise&lt;OpenRouterModelListSuccess, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the currently available models for OpenRouter integration, and provides basic information about each one such as pricing and functionality.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessModel.serverlessOpenrouterModels();
  // TODO: Handle 'response' of type OpenRouterModelListSuccess
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
const result = await client.serverlessModel.serverlessOpenrouterModels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OpenRouterModelListSuccess
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessModel.serverlessOpenrouterModels()`

- **OnSuccess**: <code>[OpenRouterModelListSuccess](src/models/open-router-model-list-success.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.serverlessModel.serverlessOpenrouterModels().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OpenRouterModelListSuccess, ApiError&gt;</code>, with `result.value` of type <code>[OpenRouterModelListSuccess](src/models/open-router-model-list-success.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServerlessKnowledge

> Source: [ServerlessKnowledge](src/resources/serverless-knowledge.ts)

<details>
<summary><code>serverlessKnowledgeRetrieve(request: ServerlessKnowledge.ServerlessKnowledgeRetrieveRequest, options?: RequestOptions): ApiPromise&lt;ServerlessKnowledgeRetrievalSuccess, ServerlessKnowledge.ServerlessKnowledgeRetrieveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve related documents from the chosen knowledge base by similarity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverlessKnowledge.serverlessKnowledgeRetrieve({
    body: { query: "some example string", k: 1, knowledgeIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type ServerlessKnowledgeRetrievalSuccess
} catch (err) {
  // TODO: Handle 'err' of type ServerlessKnowledge.ServerlessKnowledgeRetrieveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverlessKnowledge.serverlessKnowledgeRetrieve({
  body: { query: "some example string", k: 1, knowledgeIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServerlessKnowledgeRetrievalSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[ServerlessKnowledgeRetrievalBody](src/models/serverless-knowledge-retrieval-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serverlessKnowledge.serverlessKnowledgeRetrieve(request)`

- **OnSuccess**: <code>[ServerlessKnowledgeRetrievalSuccess](src/models/serverless-knowledge-retrieval-success.ts)</code>
- **OnError**: throws <code>[ServerlessKnowledge.ServerlessKnowledgeRetrieveError](src/resources/serverless-knowledge.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverlessKnowledge.serverlessKnowledgeRetrieve(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServerlessKnowledgeRetrievalSuccess, ServerlessKnowledge.ServerlessKnowledgeRetrieveError&gt;</code>, with `result.value` of type <code>[ServerlessKnowledgeRetrievalSuccess](src/models/serverless-knowledge-retrieval-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedChat

> Source: [DedicatedChat](src/resources/dedicated-chat.ts)

<details>
<summary><code>dedicatedChatComplete(request: DedicatedChat.DedicatedChatCompleteRequest, options?: RequestOptions): ApiPromise&lt;ChatResult, DedicatedChat.DedicatedChatCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedChat.dedicatedChatComplete({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  // TODO: Handle 'response' of type ChatResult
} catch (err) {
  // TODO: Handle 'err' of type DedicatedChat.DedicatedChatCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedChat.dedicatedChatComplete({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedChatCompletionBody](src/models/dedicated-chat-completion-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedChat.dedicatedChatComplete(request)`

- **OnSuccess**: <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: throws <code>[DedicatedChat.DedicatedChatCompleteError](src/resources/dedicated-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedChat.dedicatedChatComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatResult, DedicatedChat.DedicatedChatCompleteError&gt;</code>, with `result.value` of type <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedChatStream(request: DedicatedChat.DedicatedChatStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedChatResult&gt;, DedicatedChat.DedicatedChatStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.dedicatedChat.dedicatedChatStream({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedChatResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type DedicatedChat.DedicatedChatStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedChat.dedicatedChatStream({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedChatResult>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedChatCompletionStreamBody](src/models/dedicated-chat-completion-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedChat.dedicatedChatStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedChatResult](src/models/streamed-chat-result.ts)&gt;</code>
- **OnError**: throws <code>[DedicatedChat.DedicatedChatStreamError](src/resources/dedicated-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedChat.dedicatedChatStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedChatResult&gt;, DedicatedChat.DedicatedChatStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedChatResult](src/models/streamed-chat-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedResponses

> Source: [DedicatedResponses](src/resources/dedicated-responses.ts)

<details>
<summary><code>dedicatedResponses(request: DedicatedResponses.DedicatedResponsesRequest, options?: RequestOptions): ApiPromise&lt;DedicatedResponsesSuccess, DedicatedResponses.DedicatedResponsesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from text or image inputs. Follows the OpenAI Responses API format, with support for streaming, function and custom tool calls, structured outputs, and reasoning controls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedResponses.dedicatedResponses({
    body: { input: "some example string", model: "some example string" },
  });
  // TODO: Handle 'response' of type DedicatedResponsesSuccess
} catch (err) {
  // TODO: Handle 'err' of type DedicatedResponses.DedicatedResponsesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedResponses.dedicatedResponses({
  body: { input: "some example string", model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedResponsesSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedResponsesBody](src/models/dedicated-responses-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedResponses.dedicatedResponses(request)`

- **OnSuccess**: <code>[DedicatedResponsesSuccess](src/models/dedicated-responses-success.ts)</code>
- **OnError**: throws <code>[DedicatedResponses.DedicatedResponsesError](src/resources/dedicated-responses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedResponses.dedicatedResponses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedResponsesSuccess, DedicatedResponses.DedicatedResponsesError&gt;</code>, with `result.value` of type <code>[DedicatedResponsesSuccess](src/models/dedicated-responses-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedResponsesStream(request: DedicatedResponses.DedicatedResponsesStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;DedicatedResponsesStreamSuccess&gt;, DedicatedResponses.DedicatedResponsesStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from text or image inputs. Follows the OpenAI Responses API format, with support for streaming, function and custom tool calls, structured outputs, and reasoning controls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.dedicatedResponses.dedicatedResponsesStream({
    body: { input: "some example string", model: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type DedicatedResponsesStreamSuccess, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type DedicatedResponses.DedicatedResponsesStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedResponses.dedicatedResponsesStream({
  body: { input: "some example string", model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<DedicatedResponsesStreamSuccess>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedResponsesStreamBody](src/models/dedicated-responses-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedResponses.dedicatedResponsesStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[DedicatedResponsesStreamSuccess](src/models/dedicated-responses-stream-success.ts)&gt;</code>
- **OnError**: throws <code>[DedicatedResponses.DedicatedResponsesStreamError](src/resources/dedicated-responses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedResponses.dedicatedResponsesStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;DedicatedResponsesStreamSuccess&gt;, DedicatedResponses.DedicatedResponsesStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[DedicatedResponsesStreamSuccess](src/models/dedicated-responses-stream-success.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedMessages

> Source: [DedicatedMessages](src/resources/dedicated-messages.ts)

<details>
<summary><code>dedicatedMessages(request: DedicatedMessages.DedicatedMessagesRequest, options?: RequestOptions): ApiPromise&lt;DedicatedMessagesSuccess, DedicatedMessages.DedicatedMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a conversation using the Anthropic Messages API format. Supports streaming, function tool calls, and extended thinking.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedMessages.dedicatedMessages({
    body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
  });
  // TODO: Handle 'response' of type DedicatedMessagesSuccess
} catch (err) {
  // TODO: Handle 'err' of type DedicatedMessages.DedicatedMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedMessages.dedicatedMessages({
  body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedMessagesSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedMessagesBody](src/models/dedicated-messages-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedMessages.dedicatedMessages(request)`

- **OnSuccess**: <code>[DedicatedMessagesSuccess](src/models/dedicated-messages-success.ts)</code>
- **OnError**: throws <code>[DedicatedMessages.DedicatedMessagesError](src/resources/dedicated-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedMessages.dedicatedMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedMessagesSuccess, DedicatedMessages.DedicatedMessagesError&gt;</code>, with `result.value` of type <code>[DedicatedMessagesSuccess](src/models/dedicated-messages-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedMessagesStream(request: DedicatedMessages.DedicatedMessagesStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;DedicatedMessagesStreamSuccess&gt;, DedicatedMessages.DedicatedMessagesStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a conversation using the Anthropic Messages API format. Supports streaming, function tool calls, and extended thinking.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.dedicatedMessages.dedicatedMessagesStream({
    body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type DedicatedMessagesStreamSuccess, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type DedicatedMessages.DedicatedMessagesStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedMessages.dedicatedMessagesStream({
  body: { messages: [{ role: Role.User, content: "some example string" }], model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<DedicatedMessagesStreamSuccess>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedMessagesStreamBody](src/models/dedicated-messages-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedMessages.dedicatedMessagesStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[DedicatedMessagesStreamSuccess](src/models/dedicated-messages-stream-success.ts)&gt;</code>
- **OnError**: throws <code>[DedicatedMessages.DedicatedMessagesStreamError](src/resources/dedicated-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedMessages.dedicatedMessagesStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;DedicatedMessagesStreamSuccess&gt;, DedicatedMessages.DedicatedMessagesStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[DedicatedMessagesStreamSuccess](src/models/dedicated-messages-stream-success.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedChatRender

> Source: [DedicatedChatRender](src/resources/dedicated-chat-render.ts)

<details>
<summary><code>dedicatedChatRender(request: DedicatedChatRender.DedicatedChatRenderRequest, options?: RequestOptions): ApiPromise&lt;DedicatedChatRenderSuccess, DedicatedChatRender.DedicatedChatRenderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Render a list of chat messages into the prompt text sent to the model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedChatRender.dedicatedChatRender({
    body: { model: "some example string", messages: [{ role: "assistant" }] },
  });
  // TODO: Handle 'response' of type DedicatedChatRenderSuccess
} catch (err) {
  // TODO: Handle 'err' of type DedicatedChatRender.DedicatedChatRenderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedChatRender.dedicatedChatRender({
  body: { model: "some example string", messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedChatRenderSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedChatRenderBody](src/models/dedicated-chat-render-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedChatRender.dedicatedChatRender(request)`

- **OnSuccess**: <code>[DedicatedChatRenderSuccess](src/models/dedicated-chat-render-success.ts)</code>
- **OnError**: throws <code>[DedicatedChatRender.DedicatedChatRenderError](src/resources/dedicated-chat-render.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedChatRender.dedicatedChatRender(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedChatRenderSuccess, DedicatedChatRender.DedicatedChatRenderError&gt;</code>, with `result.value` of type <code>[DedicatedChatRenderSuccess](src/models/dedicated-chat-render-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedCompletions

> Source: [DedicatedCompletions](src/resources/dedicated-completions.ts)

<details>
<summary><code>dedicatedCompletionsComplete(request: DedicatedCompletions.DedicatedCompletionsCompleteRequest, options?: RequestOptions): ApiPromise&lt;CompletionsResult, DedicatedCompletions.DedicatedCompletionsCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a text completion from a prompt or token sequence. Supports streaming and configurable generation parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedCompletions.dedicatedCompletionsComplete({
    body: { model: "some example string", prompt: "some example string" },
  });
  // TODO: Handle 'response' of type CompletionsResult
} catch (err) {
  // TODO: Handle 'err' of type DedicatedCompletions.DedicatedCompletionsCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedCompletions.dedicatedCompletionsComplete({
  body: { model: "some example string", prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompletionsResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedCompletionsBody](src/models/unions/dedicated-completions-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedCompletions.dedicatedCompletionsComplete(request)`

- **OnSuccess**: <code>[CompletionsResult](src/models/completions-result.ts)</code>
- **OnError**: throws <code>[DedicatedCompletions.DedicatedCompletionsCompleteError](src/resources/dedicated-completions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedCompletions.dedicatedCompletionsComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompletionsResult, DedicatedCompletions.DedicatedCompletionsCompleteError&gt;</code>, with `result.value` of type <code>[CompletionsResult](src/models/completions-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedCompletionsStream(request: DedicatedCompletions.DedicatedCompletionsStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedCompletionsResult&gt;, DedicatedCompletions.DedicatedCompletionsStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a text completion from a prompt or token sequence. Supports streaming and configurable generation parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.dedicatedCompletions.dedicatedCompletionsStream({
    body: { model: "some example string", prompt: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedCompletionsResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type DedicatedCompletions.DedicatedCompletionsStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedCompletions.dedicatedCompletionsStream({
  body: { model: "some example string", prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedCompletionsResult>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedCompletionsStreamBody](src/models/unions/dedicated-completions-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedCompletions.dedicatedCompletionsStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedCompletionsResult](src/models/streamed-completions-result.ts)&gt;</code>
- **OnError**: throws <code>[DedicatedCompletions.DedicatedCompletionsStreamError](src/resources/dedicated-completions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedCompletions.dedicatedCompletionsStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedCompletionsResult&gt;, DedicatedCompletions.DedicatedCompletionsStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedCompletionsResult](src/models/streamed-completions-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedEmbeddings

> Source: [DedicatedEmbeddings](src/resources/dedicated-embeddings.ts)

<details>
<summary><code>dedicatedEmbeddings(request: DedicatedEmbeddings.DedicatedEmbeddingsRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEmbeddingsSuccess, DedicatedEmbeddings.DedicatedEmbeddingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an embedding vector from input text or token sequence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEmbeddings.dedicatedEmbeddings({
    body: { model: "some example string" },
  });
  // TODO: Handle 'response' of type DedicatedEmbeddingsSuccess
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEmbeddings.DedicatedEmbeddingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEmbeddings.dedicatedEmbeddings({
  body: { model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEmbeddingsSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedEmbeddingsBody](src/models/dedicated-embeddings-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEmbeddings.dedicatedEmbeddings(request)`

- **OnSuccess**: <code>[DedicatedEmbeddingsSuccess](src/models/dedicated-embeddings-success.ts)</code>
- **OnError**: throws <code>[DedicatedEmbeddings.DedicatedEmbeddingsError](src/resources/dedicated-embeddings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEmbeddings.dedicatedEmbeddings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEmbeddingsSuccess, DedicatedEmbeddings.DedicatedEmbeddingsError&gt;</code>, with `result.value` of type <code>[DedicatedEmbeddingsSuccess](src/models/dedicated-embeddings-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedToken

> Source: [DedicatedToken](src/resources/dedicated-token.ts)

<details>
<summary><code>dedicatedDetokenization(request: DedicatedToken.DedicatedDetokenizationRequest, options?: RequestOptions): ApiPromise&lt;DedicatedDetokenizationSuccess, DedicatedToken.DedicatedDetokenizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a list of token IDs back into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedToken.dedicatedDetokenization({
    body: { model: "some example string", tokens: [1] },
  });
  // TODO: Handle 'response' of type DedicatedDetokenizationSuccess
} catch (err) {
  // TODO: Handle 'err' of type DedicatedToken.DedicatedDetokenizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedToken.dedicatedDetokenization({
  body: { model: "some example string", tokens: [1] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedDetokenizationSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedDetokenizationBody](src/models/dedicated-detokenization-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedToken.dedicatedDetokenization(request)`

- **OnSuccess**: <code>[DedicatedDetokenizationSuccess](src/models/dedicated-detokenization-success.ts)</code>
- **OnError**: throws <code>[DedicatedToken.DedicatedDetokenizationError](src/resources/dedicated-token.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedToken.dedicatedDetokenization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedDetokenizationSuccess, DedicatedToken.DedicatedDetokenizationError&gt;</code>, with `result.value` of type <code>[DedicatedDetokenizationSuccess](src/models/dedicated-detokenization-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedTokenization(request: DedicatedToken.DedicatedTokenizationRequest, options?: RequestOptions): ApiPromise&lt;DedicatedTokenizationSuccess, DedicatedToken.DedicatedTokenizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text input into token IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedToken.dedicatedTokenization({
    body: { model: "some example string", prompt: "some example string" },
  });
  // TODO: Handle 'response' of type DedicatedTokenizationSuccess
} catch (err) {
  // TODO: Handle 'err' of type DedicatedToken.DedicatedTokenizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedToken.dedicatedTokenization({
  body: { model: "some example string", prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedTokenizationSuccess
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedTokenizationBody](src/models/dedicated-tokenization-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedToken.dedicatedTokenization(request)`

- **OnSuccess**: <code>[DedicatedTokenizationSuccess](src/models/dedicated-tokenization-success.ts)</code>
- **OnError**: throws <code>[DedicatedToken.DedicatedTokenizationError](src/resources/dedicated-token.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedToken.dedicatedTokenization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedTokenizationSuccess, DedicatedToken.DedicatedTokenizationError&gt;</code>, with `result.value` of type <code>[DedicatedTokenizationSuccess](src/models/dedicated-tokenization-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedImage

> Source: [DedicatedImage](src/resources/dedicated-image.ts)

<details>
<summary><code>dedicatedImagesEdit(request: DedicatedImage.DedicatedImagesEditRequest, options?: RequestOptions): ApiPromise&lt;ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesEditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edit an image based on a text prompt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedImage.dedicatedImagesEdit({
    body: {
      image: { image: "some example string" },
      prompt: "some example string",
      model: "some example string",
    },
  });
  // TODO: Handle 'response' of type ImageGenerationDedicatedResult
} catch (err) {
  // TODO: Handle 'err' of type DedicatedImage.DedicatedImagesEditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedImage.dedicatedImagesEdit({
  body: {
    image: { image: "some example string" },
    prompt: "some example string",
    model: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImageGenerationDedicatedResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedImageEditBody](src/models/dedicated-image-edit-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedImage.dedicatedImagesEdit(request)`

- **OnSuccess**: <code>[ImageGenerationDedicatedResult](src/models/image-generation-dedicated-result.ts)</code>
- **OnError**: throws <code>[DedicatedImage.DedicatedImagesEditError](src/resources/dedicated-image.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedImage.dedicatedImagesEdit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesEditError&gt;</code>, with `result.value` of type <code>[ImageGenerationDedicatedResult](src/models/image-generation-dedicated-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedImagesGenerate(request: DedicatedImage.DedicatedImagesGenerateRequest, options?: RequestOptions): ApiPromise&lt;ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesGenerateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an image from a text prompt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedImage.dedicatedImagesGenerate({
    body: { model: "some example string", prompt: "some example string" },
  });
  // TODO: Handle 'response' of type ImageGenerationDedicatedResult
} catch (err) {
  // TODO: Handle 'err' of type DedicatedImage.DedicatedImagesGenerateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedImage.dedicatedImagesGenerate({
  body: { model: "some example string", prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImageGenerationDedicatedResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedImageGenerationBody](src/models/dedicated-image-generation-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedImage.dedicatedImagesGenerate(request)`

- **OnSuccess**: <code>[ImageGenerationDedicatedResult](src/models/image-generation-dedicated-result.ts)</code>
- **OnError**: throws <code>[DedicatedImage.DedicatedImagesGenerateError](src/resources/dedicated-image.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedImage.dedicatedImagesGenerate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesGenerateError&gt;</code>, with `result.value` of type <code>[ImageGenerationDedicatedResult](src/models/image-generation-dedicated-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedAudio

> Source: [DedicatedAudio](src/resources/dedicated-audio.ts)

<details>
<summary><code>dedicatedAudioTranscriptions(request: DedicatedAudio.DedicatedAudioTranscriptionsRequest, options?: RequestOptions): ApiPromise&lt;AudioTranscriptionResult, DedicatedAudio.DedicatedAudioTranscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribe an audio file into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedAudio.dedicatedAudioTranscriptions({
    model: "(endpoint-id)",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type AudioTranscriptionResult
} catch (err) {
  // TODO: Handle 'err' of type DedicatedAudio.DedicatedAudioTranscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedAudio.dedicatedAudioTranscriptions({
  model: "(endpoint-id)",
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudioTranscriptionResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>model</code> | <code>string</code> | ID of target endpoint. If you want to send request to specific adapter, use the format "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone. |
| <code>file</code> | <code>FileInput</code> | The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac, ogg, and many other standard audio formats. |
| <code>chunkingStrategy?</code> | <code>[ChunkingStrategy1](src/models/unions/chunking-strategy1.ts)</code> | Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as a single block. |
| <code>language?</code> | <code>[Language](src/models/unions/language.ts)</code> | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency. |
| <code>stream?</code> | <code>[Stream6](src/models/unions/stream6.ts)</code> | Whether to stream the transcription result. When set to `true`, the transcription is sent as [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) once generated. |
| <code>temperature?</code> | <code>[Temperature12](src/models/unions/temperature12.ts)</code> | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedAudio.dedicatedAudioTranscriptions(request)`

- **OnSuccess**: <code>[AudioTranscriptionResult](src/models/audio-transcription-result.ts)</code>
- **OnError**: throws <code>[DedicatedAudio.DedicatedAudioTranscriptionsError](src/resources/dedicated-audio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedAudio.dedicatedAudioTranscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudioTranscriptionResult, DedicatedAudio.DedicatedAudioTranscriptionsError&gt;</code>, with `result.value` of type <code>[AudioTranscriptionResult](src/models/audio-transcription-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedAudioTranscriptionsStream(request: DedicatedAudio.DedicatedAudioTranscriptionsStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedAudioTranscriptionResult&gt;, DedicatedAudio.DedicatedAudioTranscriptionsStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribe an audio file into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.dedicatedAudio.dedicatedAudioTranscriptionsStream({
    model: "(endpoint-id)",
    file: new Uint8Array(),
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedAudioTranscriptionResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type DedicatedAudio.DedicatedAudioTranscriptionsStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedAudio.dedicatedAudioTranscriptionsStream({
  model: "(endpoint-id)",
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedAudioTranscriptionResult>
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>model</code> | <code>string</code> | ID of target endpoint. If you want to send request to specific adapter, use the format "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone. |
| <code>file</code> | <code>FileInput</code> | The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac, ogg, and many other standard audio formats. |
| <code>chunkingStrategy?</code> | <code>[ChunkingStrategy1](src/models/unions/chunking-strategy1.ts)</code> | Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as a single block. |
| <code>language?</code> | <code>[Language](src/models/unions/language.ts)</code> | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency. |
| <code>stream?</code> | <code>boolean</code> | Whether to stream the transcription result. When set to `true`, the transcription is sent as [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) once generated.<br>**Default**: true |
| <code>temperature?</code> | <code>[Temperature12](src/models/unions/temperature12.ts)</code> | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedAudio.dedicatedAudioTranscriptionsStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedAudioTranscriptionResult](src/models/streamed-audio-transcription-result.ts)&gt;</code>
- **OnError**: throws <code>[DedicatedAudio.DedicatedAudioTranscriptionsStreamError](src/resources/dedicated-audio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedAudio.dedicatedAudioTranscriptionsStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedAudioTranscriptionResult&gt;, DedicatedAudio.DedicatedAudioTranscriptionsStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedAudioTranscriptionResult](src/models/streamed-audio-transcription-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedEndpoint

> Source: [DedicatedEndpoint](src/resources/dedicated-endpoint.ts)

<details>
<summary><code>dedicatedCreateEndpoint(request: DedicatedEndpoint.DedicatedCreateEndpointRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedCreateEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new endpoint and return its status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedCreateEndpoint({
    body: {
      projectId: "some example string",
      name: "some example string",
      instanceOptionId: "some example string",
      advanced: { tokenizerSkipSpecialTokens: true, tokenizerAddSpecialTokens: true },
    },
  });
  // TODO: Handle 'response' of type DedicatedEndpointStatus
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedCreateEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedCreateEndpoint({
  body: {
    projectId: "some example string",
    name: "some example string",
    instanceOptionId: "some example string",
    advanced: { tokenizerSkipSpecialTokens: true, tokenizerAddSpecialTokens: true },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointStatus
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedEndpointCreateBody](src/models/dedicated-endpoint-create-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedCreateEndpoint(request)`

- **OnSuccess**: <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedCreateEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedCreateEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedCreateEndpointError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedDeleteEndpoint(request: DedicatedEndpoint.DedicatedDeleteEndpointRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DedicatedEndpoint.DedicatedDeleteEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a specific endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedDeleteEndpoint({
    endpointId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedDeleteEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedDeleteEndpoint({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedDeleteEndpoint(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedDeleteEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedDeleteEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DedicatedEndpoint.DedicatedDeleteEndpointError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedEndpointWandbArtifactCreate(request: DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointWandbArtifactCreateResponse, DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an endpoint from Weights & Biases artifact. If the idempotency key is provided, the API will check if the endpoint already exists, and rollout the existing endpoint if it does. In such cases, the project id must be provided.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedEndpointWandbArtifactCreate({
    body: { wandbArtifactVersionName: "some example string" },
  });
  // TODO: Handle 'response' of type DedicatedEndpointWandbArtifactCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedEndpointWandbArtifactCreate({
  body: { wandbArtifactVersionName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointWandbArtifactCreateResponse
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedEndpointWandbArtifactCreateBody](src/models/dedicated-endpoint-wandb-artifact-create-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedEndpointWandbArtifactCreate(request)`

- **OnSuccess**: <code>[DedicatedEndpointWandbArtifactCreateResponse](src/models/dedicated-endpoint-wandb-artifact-create-response.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedEndpointWandbArtifactCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointWandbArtifactCreateResponse, DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointWandbArtifactCreateResponse](src/models/dedicated-endpoint-wandb-artifact-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedGetEndpoint(request: DedicatedEndpoint.DedicatedGetEndpointRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointSpec, DedicatedEndpoint.DedicatedGetEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specification of an endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedGetEndpoint({ endpointId: "some example string" });
  // TODO: Handle 'response' of type DedicatedEndpointSpec
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedGetEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedGetEndpoint({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointSpec
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedGetEndpoint(request)`

- **OnSuccess**: <code>[DedicatedEndpointSpec](src/models/dedicated-endpoint-spec.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedGetEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedGetEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointSpec, DedicatedEndpoint.DedicatedGetEndpointError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointSpec](src/models/dedicated-endpoint-spec.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedGetEndpointStatus(request: DedicatedEndpoint.DedicatedGetEndpointStatusRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedGetEndpointStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a specific endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedGetEndpointStatus({
    endpointId: "some example string",
  });
  // TODO: Handle 'response' of type DedicatedEndpointStatus
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedGetEndpointStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedGetEndpointStatus({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointStatus
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedGetEndpointStatus(request)`

- **OnSuccess**: <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedGetEndpointStatusError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedGetEndpointStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedGetEndpointStatusError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedGetEndpointVersionHistory(request: DedicatedEndpoint.DedicatedGetEndpointVersionHistoryRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointVersionHistoryResponse, DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get version history of a specific endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedGetEndpointVersionHistory({
    endpointId: "some example string",
  });
  // TODO: Handle 'response' of type DedicatedEndpointVersionHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedGetEndpointVersionHistory({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointVersionHistoryResponse
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | Cursor for pagination. |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | Limit of items per page. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedGetEndpointVersionHistory(request)`

- **OnSuccess**: <code>[DedicatedEndpointVersionHistoryResponse](src/models/dedicated-endpoint-version-history-response.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedGetEndpointVersionHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointVersionHistoryResponse, DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointVersionHistoryResponse](src/models/dedicated-endpoint-version-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedListEndpoints(request: DedicatedEndpoint.DedicatedListEndpointsRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointListResponse, DedicatedEndpoint.DedicatedListEndpointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all endpoint statuses

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedListEndpoints();
  // TODO: Handle 'response' of type DedicatedEndpointListResponse
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedListEndpointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedListEndpoints().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointListResponse
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
| <code>projectId?</code> | <code>[ProjectId1](src/models/unions/project-id1.ts)</code> | The ID of the project. If omitted, query all endpoints under the team. |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | Cursor for pagination. |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | Limit of items per page. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedListEndpoints(request)`

- **OnSuccess**: <code>[DedicatedEndpointListResponse](src/models/dedicated-endpoint-list-response.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedListEndpointsError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedListEndpoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointListResponse, DedicatedEndpoint.DedicatedListEndpointsError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointListResponse](src/models/dedicated-endpoint-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedRestartEndpoint(request: DedicatedEndpoint.DedicatedRestartEndpointRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedRestartEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restart a FAILED or TERMINATED endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedRestartEndpoint({
    endpointId: "some example string",
  });
  // TODO: Handle 'response' of type DedicatedEndpointStatus
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedRestartEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedRestartEndpoint({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointStatus
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedRestartEndpoint(request)`

- **OnSuccess**: <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedRestartEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedRestartEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedRestartEndpointError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedSleepEndpoint(request: DedicatedEndpoint.DedicatedSleepEndpointRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedSleepEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put a specific endpoint to sleep

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedSleepEndpoint({
    endpointId: "some example string",
  });
  // TODO: Handle 'response' of type DedicatedEndpointStatus
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedSleepEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedSleepEndpoint({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointStatus
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedSleepEndpoint(request)`

- **OnSuccess**: <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedSleepEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedSleepEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedSleepEndpointError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedTerminateEndpoint(request: DedicatedEndpoint.DedicatedTerminateEndpointRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedTerminateEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Terminate a specific endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedTerminateEndpoint({
    endpointId: "some example string",
  });
  // TODO: Handle 'response' of type DedicatedEndpointStatus
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedTerminateEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedTerminateEndpoint({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointStatus
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedTerminateEndpoint(request)`

- **OnSuccess**: <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedTerminateEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedTerminateEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedTerminateEndpointError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedUpdateEndpoint(request: DedicatedEndpoint.DedicatedUpdateEndpointRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointSpec, DedicatedEndpoint.DedicatedUpdateEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specification of a specific endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedUpdateEndpoint({
    endpointId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type DedicatedEndpointSpec
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedUpdateEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedUpdateEndpoint({
  endpointId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointSpec
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedEndpointUpdateBody](src/models/dedicated-endpoint-update-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedUpdateEndpoint(request)`

- **OnSuccess**: <code>[DedicatedEndpointSpec](src/models/dedicated-endpoint-spec.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedUpdateEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedUpdateEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointSpec, DedicatedEndpoint.DedicatedUpdateEndpointError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointSpec](src/models/dedicated-endpoint-spec.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dedicatedWakeEndpoint(request: DedicatedEndpoint.DedicatedWakeEndpointRequest, options?: RequestOptions): ApiPromise&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedWakeEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Wake up a specific endpoint

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedEndpoint.dedicatedWakeEndpoint({
    endpointId: "some example string",
  });
  // TODO: Handle 'response' of type DedicatedEndpointStatus
} catch (err) {
  // TODO: Handle 'err' of type DedicatedEndpoint.DedicatedWakeEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedEndpoint.dedicatedWakeEndpoint({
  endpointId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DedicatedEndpointStatus
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
| <code>endpointId</code> | <code>string</code> | The ID of the endpoint. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedEndpoint.dedicatedWakeEndpoint(request)`

- **OnSuccess**: <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: throws <code>[DedicatedEndpoint.DedicatedWakeEndpointError](src/resources/dedicated-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedEndpoint.dedicatedWakeEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DedicatedEndpointStatus, DedicatedEndpoint.DedicatedWakeEndpointError&gt;</code>, with `result.value` of type <code>[DedicatedEndpointStatus](src/models/dedicated-endpoint-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerChat

> Source: [ContainerChat](src/resources/container-chat.ts)

<details>
<summary><code>containerChatComplete(request: ContainerChat.ContainerChatCompleteRequest, options?: RequestOptions): ApiPromise&lt;ChatResult, ContainerChat.ContainerChatCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerChat.containerChatComplete({
    body: { messages: [{ role: "assistant" }] },
  });
  // TODO: Handle 'response' of type ChatResult
} catch (err) {
  // TODO: Handle 'err' of type ContainerChat.ContainerChatCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerChat.containerChatComplete({
  body: { messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatResult
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
| <code>body</code> | <code>[ContainerChatCompletionBody](src/models/container-chat-completion-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerChat.containerChatComplete(request)`

- **OnSuccess**: <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: throws <code>[ContainerChat.ContainerChatCompleteError](src/resources/container-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerChat.containerChatComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatResult, ContainerChat.ContainerChatCompleteError&gt;</code>, with `result.value` of type <code>[ChatResult](src/models/chat-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containerChatStream(request: ContainerChat.ContainerChatStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedChatResult&gt;, ContainerChat.ContainerChatStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a list of messages comprising a conversation. Compatible with the OpenAI Chat Completions API, with support for streaming, tool calls, and structured outputs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.containerChat.containerChatStream({
    body: { messages: [{ role: "assistant" }] },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedChatResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ContainerChat.ContainerChatStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerChat.containerChatStream({
  body: { messages: [{ role: "assistant" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedChatResult>
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
| <code>body</code> | <code>[ContainerChatCompletionStreamBody](src/models/container-chat-completion-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerChat.containerChatStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedChatResult](src/models/streamed-chat-result.ts)&gt;</code>
- **OnError**: throws <code>[ContainerChat.ContainerChatStreamError](src/resources/container-chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerChat.containerChatStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedChatResult&gt;, ContainerChat.ContainerChatStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedChatResult](src/models/streamed-chat-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerResponses

> Source: [ContainerResponses](src/resources/container-responses.ts)

<details>
<summary><code>containerResponses(request: ContainerResponses.ContainerResponsesRequest, options?: RequestOptions): ApiPromise&lt;ContainerResponsesSuccess, ContainerResponses.ContainerResponsesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from text or image inputs. Follows the OpenAI Responses API format, with support for streaming, function and custom tool calls, structured outputs, and reasoning controls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerResponses.containerResponses({
    body: { input: "some example string" },
  });
  // TODO: Handle 'response' of type ContainerResponsesSuccess
} catch (err) {
  // TODO: Handle 'err' of type ContainerResponses.ContainerResponsesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerResponses.containerResponses({
  body: { input: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContainerResponsesSuccess
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
| <code>body</code> | <code>[ContainerResponsesBody](src/models/container-responses-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerResponses.containerResponses(request)`

- **OnSuccess**: <code>[ContainerResponsesSuccess](src/models/container-responses-success.ts)</code>
- **OnError**: throws <code>[ContainerResponses.ContainerResponsesError](src/resources/container-responses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerResponses.containerResponses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContainerResponsesSuccess, ContainerResponses.ContainerResponsesError&gt;</code>, with `result.value` of type <code>[ContainerResponsesSuccess](src/models/container-responses-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containerResponsesStream(request: ContainerResponses.ContainerResponsesStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;ContainerResponsesStreamSuccess&gt;, ContainerResponses.ContainerResponsesStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from text or image inputs. Follows the OpenAI Responses API format, with support for streaming, function and custom tool calls, structured outputs, and reasoning controls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.containerResponses.containerResponsesStream({
    body: { input: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type ContainerResponsesStreamSuccess, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ContainerResponses.ContainerResponsesStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerResponses.containerResponsesStream({
  body: { input: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<ContainerResponsesStreamSuccess>
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
| <code>body</code> | <code>[ContainerResponsesStreamBody](src/models/container-responses-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerResponses.containerResponsesStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[ContainerResponsesStreamSuccess](src/models/container-responses-stream-success.ts)&gt;</code>
- **OnError**: throws <code>[ContainerResponses.ContainerResponsesStreamError](src/resources/container-responses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerResponses.containerResponsesStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;ContainerResponsesStreamSuccess&gt;, ContainerResponses.ContainerResponsesStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[ContainerResponsesStreamSuccess](src/models/container-responses-stream-success.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerMessages

> Source: [ContainerMessages](src/resources/container-messages.ts)

<details>
<summary><code>containerMessages(request: ContainerMessages.ContainerMessagesRequest, options?: RequestOptions): ApiPromise&lt;ContainerMessagesSuccess, ContainerMessages.ContainerMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a conversation using the Anthropic Messages API format. Supports streaming, function tool calls, and extended thinking.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerMessages.containerMessages({
    body: { messages: [{ role: Role.User, content: "some example string" }] },
  });
  // TODO: Handle 'response' of type ContainerMessagesSuccess
} catch (err) {
  // TODO: Handle 'err' of type ContainerMessages.ContainerMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerMessages.containerMessages({
  body: { messages: [{ role: Role.User, content: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContainerMessagesSuccess
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
| <code>body</code> | <code>[ContainerMessagesBody](src/models/container-messages-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerMessages.containerMessages(request)`

- **OnSuccess**: <code>[ContainerMessagesSuccess](src/models/container-messages-success.ts)</code>
- **OnError**: throws <code>[ContainerMessages.ContainerMessagesError](src/resources/container-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerMessages.containerMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContainerMessagesSuccess, ContainerMessages.ContainerMessagesError&gt;</code>, with `result.value` of type <code>[ContainerMessagesSuccess](src/models/container-messages-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containerMessagesStream(request: ContainerMessages.ContainerMessagesStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;ContainerMessagesStreamSuccess&gt;, ContainerMessages.ContainerMessagesStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a model response from a conversation using the Anthropic Messages API format. Supports streaming, function tool calls, and extended thinking.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.containerMessages.containerMessagesStream({
    body: { messages: [{ role: Role.User, content: "some example string" }] },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type ContainerMessagesStreamSuccess, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ContainerMessages.ContainerMessagesStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerMessages.containerMessagesStream({
  body: { messages: [{ role: Role.User, content: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<ContainerMessagesStreamSuccess>
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
| <code>body</code> | <code>[ContainerMessagesStreamBody](src/models/container-messages-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerMessages.containerMessagesStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[ContainerMessagesStreamSuccess](src/models/container-messages-stream-success.ts)&gt;</code>
- **OnError**: throws <code>[ContainerMessages.ContainerMessagesStreamError](src/resources/container-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerMessages.containerMessagesStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;ContainerMessagesStreamSuccess&gt;, ContainerMessages.ContainerMessagesStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[ContainerMessagesStreamSuccess](src/models/container-messages-stream-success.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerCompletions

> Source: [ContainerCompletions](src/resources/container-completions.ts)

<details>
<summary><code>containerCompletionsComplete(request: ContainerCompletions.ContainerCompletionsCompleteRequest, options?: RequestOptions): ApiPromise&lt;CompletionsResult, ContainerCompletions.ContainerCompletionsCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a text completion from a prompt or token sequence. Supports streaming and configurable generation parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerCompletions.containerCompletionsComplete({
    body: { prompt: "some example string" },
  });
  // TODO: Handle 'response' of type CompletionsResult
} catch (err) {
  // TODO: Handle 'err' of type ContainerCompletions.ContainerCompletionsCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerCompletions.containerCompletionsComplete({
  body: { prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompletionsResult
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
| <code>body</code> | <code>[ContainerCompletionsBody](src/models/unions/container-completions-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerCompletions.containerCompletionsComplete(request)`

- **OnSuccess**: <code>[CompletionsResult](src/models/completions-result.ts)</code>
- **OnError**: throws <code>[ContainerCompletions.ContainerCompletionsCompleteError](src/resources/container-completions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerCompletions.containerCompletionsComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompletionsResult, ContainerCompletions.ContainerCompletionsCompleteError&gt;</code>, with `result.value` of type <code>[CompletionsResult](src/models/completions-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containerCompletionsStream(request: ContainerCompletions.ContainerCompletionsStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedCompletionsResult&gt;, ContainerCompletions.ContainerCompletionsStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a text completion from a prompt or token sequence. Supports streaming and configurable generation parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.containerCompletions.containerCompletionsStream({
    body: { prompt: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedCompletionsResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ContainerCompletions.ContainerCompletionsStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerCompletions.containerCompletionsStream({
  body: { prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedCompletionsResult>
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
| <code>body</code> | <code>[ContainerCompletionsStreamBody](src/models/unions/container-completions-stream-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerCompletions.containerCompletionsStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedCompletionsResult](src/models/streamed-completions-result.ts)&gt;</code>
- **OnError**: throws <code>[ContainerCompletions.ContainerCompletionsStreamError](src/resources/container-completions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerCompletions.containerCompletionsStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedCompletionsResult&gt;, ContainerCompletions.ContainerCompletionsStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedCompletionsResult](src/models/streamed-completions-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerToken

> Source: [ContainerToken](src/resources/container-token.ts)

<details>
<summary><code>containerDetokenization(request: ContainerToken.ContainerDetokenizationRequest, options?: RequestOptions): ApiPromise&lt;ContainerDetokenizationSuccess, ContainerToken.ContainerDetokenizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a list of token IDs back into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerToken.containerDetokenization({ body: { tokens: [1] } });
  // TODO: Handle 'response' of type ContainerDetokenizationSuccess
} catch (err) {
  // TODO: Handle 'err' of type ContainerToken.ContainerDetokenizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerToken.containerDetokenization({ body: { tokens: [1] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContainerDetokenizationSuccess
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
| <code>body</code> | <code>[ContainerDetokenizationBody](src/models/container-detokenization-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerToken.containerDetokenization(request)`

- **OnSuccess**: <code>[ContainerDetokenizationSuccess](src/models/container-detokenization-success.ts)</code>
- **OnError**: throws <code>[ContainerToken.ContainerDetokenizationError](src/resources/container-token.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerToken.containerDetokenization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContainerDetokenizationSuccess, ContainerToken.ContainerDetokenizationError&gt;</code>, with `result.value` of type <code>[ContainerDetokenizationSuccess](src/models/container-detokenization-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containerTokenization(request: ContainerToken.ContainerTokenizationRequest, options?: RequestOptions): ApiPromise&lt;ContainerTokenizationSuccess, ContainerToken.ContainerTokenizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text input into token IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerToken.containerTokenization({
    body: { prompt: "some example string" },
  });
  // TODO: Handle 'response' of type ContainerTokenizationSuccess
} catch (err) {
  // TODO: Handle 'err' of type ContainerToken.ContainerTokenizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerToken.containerTokenization({
  body: { prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContainerTokenizationSuccess
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
| <code>body</code> | <code>[ContainerTokenizationBody](src/models/container-tokenization-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerToken.containerTokenization(request)`

- **OnSuccess**: <code>[ContainerTokenizationSuccess](src/models/container-tokenization-success.ts)</code>
- **OnError**: throws <code>[ContainerToken.ContainerTokenizationError](src/resources/container-token.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerToken.containerTokenization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContainerTokenizationSuccess, ContainerToken.ContainerTokenizationError&gt;</code>, with `result.value` of type <code>[ContainerTokenizationSuccess](src/models/container-tokenization-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerImage

> Source: [ContainerImage](src/resources/container-image.ts)

<details>
<summary><code>containerImagesEdit(request: ContainerImage.ContainerImagesEditRequest, options?: RequestOptions): ApiPromise&lt;ImageGenerationContainerResult, ContainerImage.ContainerImagesEditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edit an image based on a text prompt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerImage.containerImagesEdit({
    body: { image: { image: "some example string" }, prompt: "some example string" },
  });
  // TODO: Handle 'response' of type ImageGenerationContainerResult
} catch (err) {
  // TODO: Handle 'err' of type ContainerImage.ContainerImagesEditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerImage.containerImagesEdit({
  body: { image: { image: "some example string" }, prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImageGenerationContainerResult
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
| <code>body</code> | <code>[ContainerImageEditBody](src/models/container-image-edit-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerImage.containerImagesEdit(request)`

- **OnSuccess**: <code>[ImageGenerationContainerResult](src/models/image-generation-container-result.ts)</code>
- **OnError**: throws <code>[ContainerImage.ContainerImagesEditError](src/resources/container-image.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerImage.containerImagesEdit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImageGenerationContainerResult, ContainerImage.ContainerImagesEditError&gt;</code>, with `result.value` of type <code>[ImageGenerationContainerResult](src/models/image-generation-container-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containerImagesGenerate(request: ContainerImage.ContainerImagesGenerateRequest, options?: RequestOptions): ApiPromise&lt;ImageGenerationContainerResult, ContainerImage.ContainerImagesGenerateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an image from a text prompt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerImage.containerImagesGenerate({
    body: { prompt: "some example string" },
  });
  // TODO: Handle 'response' of type ImageGenerationContainerResult
} catch (err) {
  // TODO: Handle 'err' of type ContainerImage.ContainerImagesGenerateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerImage.containerImagesGenerate({
  body: { prompt: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImageGenerationContainerResult
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
| <code>body</code> | <code>[ContainerImageGenerationBody](src/models/container-image-generation-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerImage.containerImagesGenerate(request)`

- **OnSuccess**: <code>[ImageGenerationContainerResult](src/models/image-generation-container-result.ts)</code>
- **OnError**: throws <code>[ContainerImage.ContainerImagesGenerateError](src/resources/container-image.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerImage.containerImagesGenerate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImageGenerationContainerResult, ContainerImage.ContainerImagesGenerateError&gt;</code>, with `result.value` of type <code>[ImageGenerationContainerResult](src/models/image-generation-container-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerAudio

> Source: [ContainerAudio](src/resources/container-audio.ts)

<details>
<summary><code>containerAudioTranscriptions(request: ContainerAudio.ContainerAudioTranscriptionsRequest, options?: RequestOptions): ApiPromise&lt;AudioTranscriptionResult, ContainerAudio.ContainerAudioTranscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribe an audio file into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerAudio.containerAudioTranscriptions({
    file: new Uint8Array(),
    model: "(adapter-route)",
  });
  // TODO: Handle 'response' of type AudioTranscriptionResult
} catch (err) {
  // TODO: Handle 'err' of type ContainerAudio.ContainerAudioTranscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerAudio.containerAudioTranscriptions({
  file: new Uint8Array(),
  model: "(adapter-route)",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudioTranscriptionResult
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
| <code>file</code> | <code>FileInput</code> | The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac, ogg, and many other standard audio formats. |
| <code>model?</code> | <code>[Model1](src/models/unions/model1.ts)</code> | Routes the request to a specific adapter. |
| <code>chunkingStrategy?</code> | <code>[ChunkingStrategy1](src/models/unions/chunking-strategy1.ts)</code> | Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as a single block. |
| <code>language?</code> | <code>[Language](src/models/unions/language.ts)</code> | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency. |
| <code>stream?</code> | <code>[Stream6](src/models/unions/stream6.ts)</code> | Whether to stream the transcription result. When set to `true`, the transcription is sent as [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) once generated. |
| <code>temperature?</code> | <code>[Temperature12](src/models/unions/temperature12.ts)</code> | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerAudio.containerAudioTranscriptions(request)`

- **OnSuccess**: <code>[AudioTranscriptionResult](src/models/audio-transcription-result.ts)</code>
- **OnError**: throws <code>[ContainerAudio.ContainerAudioTranscriptionsError](src/resources/container-audio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerAudio.containerAudioTranscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudioTranscriptionResult, ContainerAudio.ContainerAudioTranscriptionsError&gt;</code>, with `result.value` of type <code>[AudioTranscriptionResult](src/models/audio-transcription-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containerAudioTranscriptionsStream(request: ContainerAudio.ContainerAudioTranscriptionsStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;StreamedAudioTranscriptionResult&gt;, ContainerAudio.ContainerAudioTranscriptionsStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribe an audio file into text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.containerAudio.containerAudioTranscriptionsStream({
    file: new Uint8Array(),
    model: "(adapter-route)",
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type StreamedAudioTranscriptionResult, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type ContainerAudio.ContainerAudioTranscriptionsStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are FriendliSuiteApiReferenceError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerAudio.containerAudioTranscriptionsStream({
  file: new Uint8Array(),
  model: "(adapter-route)",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<StreamedAudioTranscriptionResult>
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
| <code>file</code> | <code>FileInput</code> | The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac, ogg, and many other standard audio formats. |
| <code>model?</code> | <code>[Model1](src/models/unions/model1.ts)</code> | Routes the request to a specific adapter. |
| <code>chunkingStrategy?</code> | <code>[ChunkingStrategy1](src/models/unions/chunking-strategy1.ts)</code> | Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as a single block. |
| <code>language?</code> | <code>[Language](src/models/unions/language.ts)</code> | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency. |
| <code>stream?</code> | <code>boolean</code> | Whether to stream the transcription result. When set to `true`, the transcription is sent as [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) once generated.<br>**Default**: true |
| <code>temperature?</code> | <code>[Temperature12](src/models/unions/temperature12.ts)</code> | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerAudio.containerAudioTranscriptionsStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedAudioTranscriptionResult](src/models/streamed-audio-transcription-result.ts)&gt;</code>
- **OnError**: throws <code>[ContainerAudio.ContainerAudioTranscriptionsStreamError](src/resources/container-audio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerAudio.containerAudioTranscriptionsStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;StreamedAudioTranscriptionResult&gt;, ContainerAudio.ContainerAudioTranscriptionsStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[StreamedAudioTranscriptionResult](src/models/streamed-audio-transcription-result.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Cost

> Source: [Cost](src/resources/cost.ts)

<details>
<summary><code>getCost(request: Cost.GetCostRequest, options?: RequestOptions): ApiPromise&lt;CostResponse, Cost.GetCostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get cost details for the team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cost.getCost({
    startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  });
  // TODO: Handle 'response' of type CostResponse
} catch (err) {
  // TODO: Handle 'err' of type Cost.GetCostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cost.getCost({
  startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CostResponse
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
| <code>startTime</code> | <code>Date</code> (date-time) | RFC 3339 timestamp in UTC. The time portion must be zeroed out (e.g., 2026-01-01T00:00:00Z). Must be no earlier than one year ago. |
| <code>endTime</code> | <code>Date</code> (date-time) | RFC 3339 timestamp in UTC. The time portion must be zeroed out (e.g., 2026-01-02T00:00:00Z). Must not be later than midnight UTC of the next day. |
| <code>bucketWidth?</code> | <code>[BucketWidth](src/models/unions/bucket-width.ts)</code> | Width of each time bucket in response. Currently only `1d` is supported, default to `1d`. |
| <code>limit?</code> | <code>number</code> | A limit on the number of buckets to be returned. Limit can range between 1 and 35, and the default is 7.<br>**Default**: 7 |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. |
| <code>groupBy?</code> | <code>[GroupBy](src/models/unions/group-by.ts)</code> | Group the costs by the specified fields. Currently only `line_item` is supported. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cost.getCost(request)`

- **OnSuccess**: <code>[CostResponse](src/models/cost-response.ts)</code>
- **OnError**: throws <code>[Cost.GetCostError](src/resources/cost.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cost.getCost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CostResponse, Cost.GetCostError&gt;</code>, with `result.value` of type <code>[CostResponse](src/models/cost-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UsageApi

> Source: [UsageApi](src/resources/usage-api.ts)

<details>
<summary><code>getUsage(request: UsageApi.GetUsageRequest, options?: RequestOptions): ApiPromise&lt;UsageResponse, UsageApi.GetUsageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageApi.getUsage({
    startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  });
  // TODO: Handle 'response' of type UsageResponse
} catch (err) {
  // TODO: Handle 'err' of type UsageApi.GetUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usageApi.getUsage({
  startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageResponse
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
| <code>startTime</code> | <code>Date</code> (date-time) | RFC 3339 timestamp in UTC. Must be within the past 365 days and align with the selected `bucket_width` (e.g., 11:05:00Z for 5m, 11:00:00Z for 1h). |
| <code>endTime</code> | <code>Date</code> (date-time) | RFC 3339 timestamp in UTC. Must be later than `start_time` and align with the selected `bucket_width` (e.g., 11:10:00Z for 5m, 12:00:00Z for 1h). |
| <code>bucketWidth?</code> | <code>[BucketWidth1](src/models/unions/bucket-width1.ts)</code> | Width of each time bucket. Must be selected based on the query duration (end_time - start_time) and must not exceed the query duration. |
| <code>limit?</code> | <code>[Limit2](src/models/unions/limit2.ts)</code> | Specifies the number of buckets to return.<br><br> - `bucket_width=1d`: default 7, max 31<br>- `bucket_width=12h`: default 2, max 14<br>- `bucket_width=6h`: default 4, max 28<br>- `bucket_width=1h`: default 24, max 168<br>- `bucket_width=45m`: default 2, max 32<br>- `bucket_width=30m`: default 2, max 48<br>- `bucket_width=15m`: default 4, max 96<br>- `bucket_width=5m`: default 12, max 288 |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. |
| <code>groupBy?</code> | <code>[GroupBy1](src/models/unions/group-by1.ts)</code> | Group the usage by the specified fields. Support fields include `model`, `product_type`, `user_id` and any combination of them. |
| <code>models?</code> | <code>[Models](src/models/unions/models.ts)</code> | Return only usage for the listed Model APIs and Dedicated Endpoints. Values are model IDs, endpoint IDs, or a mix. |
| <code>userIds?</code> | <code>[UserIds](src/models/unions/user-ids.ts)</code> | Return only usage for these users. |
| <code>productTypes?</code> | <code>[ProductTypes](src/models/unions/product-types.ts)</code> | Return only usage for the specified product types. Supported fields include `model_apis`, `dedicated_endpoints` and any combination of them. |
| <code>gpuTypes?</code> | <code>[GpuTypes](src/models/unions/gpu-types.ts)</code> | Return only usage for the specified GPU types. When this filter is given, `gpu_usage` and `reserved_gpu_usage` will be provided if present; request, token, and audio usage fields are omitted. Combining `gpu_types` with `product_types=model_apis` is rejected with HTTP 400. |
| <code>capacityTypes?</code> | <code>[CapacityTypes](src/models/unions/capacity-types.ts)</code> | Return only usage for the specified capacity types. Supported fields include `reservation` only. When this filter is given, only `reserved_gpu_usage` will be provided; `gpu_usage`, request, token, and audio usage fields are omitted. Combining `capacity_types` with `product_types=model_apis` is rejected with HTTP 400. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usageApi.getUsage(request)`

- **OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: throws <code>[UsageApi.GetUsageError](src/resources/usage-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usageApi.getUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageResponse, UsageApi.GetUsageError&gt;</code>, with `result.value` of type <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dataset

> Source: [Dataset](src/resources/dataset.ts)

<details>
<summary><code>addSamples(request: Dataset.AddSamplesRequest, options?: RequestOptions): ApiPromise&lt;AddSamplesResponse, Dataset.AddSamplesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add samples to the split.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.addSamples({
    datasetId: "some example string",
    splitId: "some example string",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type AddSamplesResponse
} catch (err) {
  // TODO: Handle 'err' of type Dataset.AddSamplesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.addSamples({
  datasetId: "some example string",
  splitId: "some example string",
  body: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddSamplesResponse
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>splitId</code> | <code>string</code> | ID of the split. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.addSamples(request)`

- **OnSuccess**: <code>[AddSamplesResponse](src/models/add-samples-response.ts)</code>
- **OnError**: throws <code>[Dataset.AddSamplesError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.addSamples(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddSamplesResponse, Dataset.AddSamplesError&gt;</code>, with `result.value` of type <code>[AddSamplesResponse](src/models/add-samples-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDataset(request: Dataset.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;DatasetInfo, Dataset.CreateDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.createDataset({
    body: { name: "some example string", projectId: "some example string", modality: {} },
  });
  // TODO: Handle 'response' of type DatasetInfo
} catch (err) {
  // TODO: Handle 'err' of type Dataset.CreateDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.createDataset({
  body: { name: "some example string", projectId: "some example string", modality: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetInfo
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[CreateDatasetRequest](src/models/create-dataset-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.createDataset(request)`

- **OnSuccess**: <code>[DatasetInfo](src/models/dataset-info.ts)</code>
- **OnError**: throws <code>[Dataset.CreateDatasetError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.createDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetInfo, Dataset.CreateDatasetError&gt;</code>, with `result.value` of type <code>[DatasetInfo](src/models/dataset-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSplit(request: Dataset.CreateSplitRequest, options?: RequestOptions): ApiPromise&lt;SplitInfo, Dataset.CreateSplitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new split in the dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.createSplit({
    datasetId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type SplitInfo
} catch (err) {
  // TODO: Handle 'err' of type Dataset.CreateSplitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.createSplit({
  datasetId: "some example string",
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SplitInfo
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>name</code> | <code>string</code> | - |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.createSplit(request)`

- **OnSuccess**: <code>[SplitInfo](src/models/split-info.ts)</code>
- **OnError**: throws <code>[Dataset.CreateSplitError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.createSplit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SplitInfo, Dataset.CreateSplitError&gt;</code>, with `result.value` of type <code>[SplitInfo](src/models/split-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVersion(request: Dataset.CreateVersionRequest, options?: RequestOptions): ApiPromise&lt;VersionInfo, Dataset.CreateVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a version for the current state of the split.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.createVersion({
    datasetId: "some example string",
    comment: "some example string",
  });
  // TODO: Handle 'response' of type VersionInfo
} catch (err) {
  // TODO: Handle 'err' of type Dataset.CreateVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.createVersion({
  datasetId: "some example string",
  comment: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VersionInfo
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>comment</code> | <code>string</code> | - |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.createVersion(request)`

- **OnSuccess**: <code>[VersionInfo](src/models/version-info.ts)</code>
- **OnError**: throws <code>[Dataset.CreateVersionError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.createVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VersionInfo, Dataset.CreateVersionError&gt;</code>, with `result.value` of type <code>[VersionInfo](src/models/version-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDataset(request: Dataset.DeleteDatasetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Dataset.DeleteDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a specific dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.deleteDataset({ datasetId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Dataset.DeleteDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.deleteDataset({ datasetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset to delete. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.deleteDataset(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Dataset.DeleteDatasetError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.deleteDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Dataset.DeleteDatasetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSamples(request: Dataset.DeleteSamplesRequest, options?: RequestOptions): ApiPromise&lt;DeleteSamplesResponse, Dataset.DeleteSamplesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete samples from the split.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.deleteSamples({
    datasetId: "some example string",
    splitId: "some example string",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type DeleteSamplesResponse
} catch (err) {
  // TODO: Handle 'err' of type Dataset.DeleteSamplesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.deleteSamples({
  datasetId: "some example string",
  splitId: "some example string",
  body: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteSamplesResponse
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>splitId</code> | <code>string</code> | ID of the split. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[Sampleid](src/models/unions/sampleid.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.deleteSamples(request)`

- **OnSuccess**: <code>[DeleteSamplesResponse](src/models/delete-samples-response.ts)</code>
- **OnError**: throws <code>[Dataset.DeleteSamplesError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.deleteSamples(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteSamplesResponse, Dataset.DeleteSamplesError&gt;</code>, with `result.value` of type <code>[DeleteSamplesResponse](src/models/delete-samples-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSplit(request: Dataset.DeleteSplitRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Dataset.DeleteSplitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a specific split.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.deleteSplit({
    datasetId: "some example string",
    splitId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Dataset.DeleteSplitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.deleteSplit({
  datasetId: "some example string",
  splitId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>splitId</code> | <code>string</code> | ID of the split. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.deleteSplit(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Dataset.DeleteSplitError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.deleteSplit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Dataset.DeleteSplitError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVersion(request: Dataset.DeleteVersionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Dataset.DeleteVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a version from the dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.deleteVersion({
    datasetId: "some example string",
    versionId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Dataset.DeleteVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.deleteVersion({
  datasetId: "some example string",
  versionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>versionId</code> | <code>string</code> | ID of the version to delete. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.deleteVersion(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Dataset.DeleteVersionError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.deleteVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Dataset.DeleteVersionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDataset(request: Dataset.GetDatasetRequest, options?: RequestOptions): ApiPromise&lt;DatasetInfo, Dataset.GetDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.getDataset({ datasetId: "some example string" });
  // TODO: Handle 'response' of type DatasetInfo
} catch (err) {
  // TODO: Handle 'err' of type Dataset.GetDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.getDataset({ datasetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetInfo
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset to retrieve. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.getDataset(request)`

- **OnSuccess**: <code>[DatasetInfo](src/models/dataset-info.ts)</code>
- **OnError**: throws <code>[Dataset.GetDatasetError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.getDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetInfo, Dataset.GetDatasetError&gt;</code>, with `result.value` of type <code>[DatasetInfo](src/models/dataset-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSplit(request: Dataset.GetSplitRequest, options?: RequestOptions): ApiPromise&lt;SplitInfo, Dataset.GetSplitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific split.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.getSplit({
    datasetId: "some example string",
    splitId: "some example string",
  });
  // TODO: Handle 'response' of type SplitInfo
} catch (err) {
  // TODO: Handle 'err' of type Dataset.GetSplitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.getSplit({
  datasetId: "some example string",
  splitId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SplitInfo
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>splitId</code> | <code>string</code> | ID of the split. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.getSplit(request)`

- **OnSuccess**: <code>[SplitInfo](src/models/split-info.ts)</code>
- **OnError**: throws <code>[Dataset.GetSplitError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.getSplit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SplitInfo, Dataset.GetSplitError&gt;</code>, with `result.value` of type <code>[SplitInfo](src/models/split-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersion(request: Dataset.GetVersionRequest, options?: RequestOptions): ApiPromise&lt;VersionInfo, Dataset.GetVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a dataset version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.getVersion({
    datasetId: "some example string",
    versionId: "some example string",
  });
  // TODO: Handle 'response' of type VersionInfo
} catch (err) {
  // TODO: Handle 'err' of type Dataset.GetVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.getVersion({
  datasetId: "some example string",
  versionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VersionInfo
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>versionId</code> | <code>string</code> | ID of the version to get. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.getVersion(request)`

- **OnSuccess**: <code>[VersionInfo](src/models/version-info.ts)</code>
- **OnError**: throws <code>[Dataset.GetVersionError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.getVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VersionInfo, Dataset.GetVersionError&gt;</code>, with `result.value` of type <code>[VersionInfo](src/models/version-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatasets(request: Dataset.ListDatasetsRequest, options?: RequestOptions): ApiPromise&lt;ListDatasetsResponse, Dataset.ListDatasetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List datasets accessible to the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.listDatasets({ projectId: "some example string" });
  // TODO: Handle 'response' of type ListDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dataset.ListDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.listDatasets({ projectId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDatasetsResponse
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
| <code>projectId</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>[Cursor2](src/models/unions/cursor2.ts)</code> | - |
| <code>limit?</code> | <code>[Limit3](src/models/unions/limit3.ts)</code> | - |
| <code>direction?</code> | <code>[Direction1](src/models/unions/direction1.ts)</code> | - |
| <code>nameSearch?</code> | <code>[Namesearch](src/models/unions/namesearch.ts)</code> | - |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.listDatasets(request)`

- **OnSuccess**: <code>[ListDatasetsResponse](src/models/list-datasets-response.ts)</code>
- **OnError**: throws <code>[Dataset.ListDatasetsError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.listDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDatasetsResponse, Dataset.ListDatasetsError&gt;</code>, with `result.value` of type <code>[ListDatasetsResponse](src/models/list-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSamples(request: Dataset.ListSamplesRequest, options?: RequestOptions): ApiPromise&lt;ListSamplesResponse, Dataset.ListSamplesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List samples from the split.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.listSamples({
    datasetId: "some example string",
    splitId: "some example string",
  });
  // TODO: Handle 'response' of type ListSamplesResponse
} catch (err) {
  // TODO: Handle 'err' of type Dataset.ListSamplesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.listSamples({
  datasetId: "some example string",
  splitId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSamplesResponse
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>splitId</code> | <code>string</code> | ID of the split. |
| <code>cursor?</code> | <code>[Cursor2](src/models/unions/cursor2.ts)</code> | - |
| <code>limit?</code> | <code>[Limit3](src/models/unions/limit3.ts)</code> | - |
| <code>direction?</code> | <code>[Direction1](src/models/unions/direction1.ts)</code> | - |
| <code>versionId?</code> | <code>[Versionid](src/models/unions/versionid.ts)</code> | - |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.listSamples(request)`

- **OnSuccess**: <code>[ListSamplesResponse](src/models/list-samples-response.ts)</code>
- **OnError**: throws <code>[Dataset.ListSamplesError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.listSamples(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSamplesResponse, Dataset.ListSamplesError&gt;</code>, with `result.value` of type <code>[ListSamplesResponse](src/models/list-samples-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSplits(request: Dataset.ListSplitsRequest, options?: RequestOptions): ApiPromise&lt;ListSplitsResponse, Dataset.ListSplitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List splits in the dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.listSplits({ datasetId: "some example string" });
  // TODO: Handle 'response' of type ListSplitsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dataset.ListSplitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.listSplits({ datasetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSplitsResponse
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>cursor?</code> | <code>[Cursor2](src/models/unions/cursor2.ts)</code> | - |
| <code>limit?</code> | <code>[Limit3](src/models/unions/limit3.ts)</code> | - |
| <code>direction?</code> | <code>[Direction1](src/models/unions/direction1.ts)</code> | - |
| <code>versionId?</code> | <code>[Versionid](src/models/unions/versionid.ts)</code> | - |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.listSplits(request)`

- **OnSuccess**: <code>[ListSplitsResponse](src/models/list-splits-response.ts)</code>
- **OnError**: throws <code>[Dataset.ListSplitsError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.listSplits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSplitsResponse, Dataset.ListSplitsError&gt;</code>, with `result.value` of type <code>[ListSplitsResponse](src/models/list-splits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVersions(request: Dataset.ListVersionsRequest, options?: RequestOptions): ApiPromise&lt;ListVersionsResponse, Dataset.ListVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List versions for a dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.listVersions({ datasetId: "some example string" });
  // TODO: Handle 'response' of type ListVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dataset.ListVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.listVersions({ datasetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListVersionsResponse
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.listVersions(request)`

- **OnSuccess**: <code>[ListVersionsResponse](src/models/list-versions-response.ts)</code>
- **OnError**: throws <code>[Dataset.ListVersionsError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.listVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListVersionsResponse, Dataset.ListVersionsError&gt;</code>, with `result.value` of type <code>[ListVersionsResponse](src/models/list-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadRawSamples(request: Dataset.UploadRawSamplesRequest, options?: RequestOptions): ApiPromise&lt;AddSamplesResponse, Dataset.UploadRawSamplesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update samples as raw file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.uploadRawSamples({
    datasetId: "some example string",
    splitId: "some example string",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type AddSamplesResponse
} catch (err) {
  // TODO: Handle 'err' of type Dataset.UploadRawSamplesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset.uploadRawSamples({
  datasetId: "some example string",
  splitId: "some example string",
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddSamplesResponse
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
| <code>datasetId</code> | <code>string</code> | ID of the dataset. |
| <code>splitId</code> | <code>string</code> | ID of the split. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>file</code> | <code>FileInput</code> | File to update samples. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.uploadRawSamples(request)`

- **OnSuccess**: <code>[AddSamplesResponse](src/models/add-samples-response.ts)</code>
- **OnError**: throws <code>[Dataset.UploadRawSamplesError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.uploadRawSamples(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddSamplesResponse, Dataset.UploadRawSamplesError&gt;</code>, with `result.value` of type <code>[AddSamplesResponse](src/models/add-samples-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## File

> Source: [File](src/resources/file.ts)

<details>
<summary><code>completeUpload(request: File.CompleteUploadRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, File.CompleteUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Complete file upload.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.file.completeUpload({ fileId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type File.CompleteUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.file.completeUpload({ fileId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>fileId</code> | <code>string</code> | File ID. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.file.completeUpload(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[File.CompleteUploadError](src/resources/file.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.file.completeUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, File.CompleteUploadError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDownloadUrl(request: File.GetDownloadUrlRequest, options?: RequestOptions): ApiPromise&lt;FileGetDownloadUrlResponse, File.GetDownloadUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get file download URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.file.getDownloadUrl({ fileId: "some example string" });
  // TODO: Handle 'response' of type FileGetDownloadUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type File.GetDownloadUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.file.getDownloadUrl({ fileId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileGetDownloadUrlResponse
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
| <code>fileId</code> | <code>string</code> | File ID. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.file.getDownloadUrl(request)`

- **OnSuccess**: <code>[FileGetDownloadUrlResponse](src/models/file-get-download-url-response.ts)</code>
- **OnError**: throws <code>[File.GetDownloadUrlError](src/resources/file.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.file.getDownloadUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileGetDownloadUrlResponse, File.GetDownloadUrlError&gt;</code>, with `result.value` of type <code>[FileGetDownloadUrlResponse](src/models/file-get-download-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInfo(request: File.GetInfoRequest, options?: RequestOptions): ApiPromise&lt;FileInfo, File.GetInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get file info.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.file.getInfo({ fileId: "some example string" });
  // TODO: Handle 'response' of type FileInfo
} catch (err) {
  // TODO: Handle 'err' of type File.GetInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.file.getInfo({ fileId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileInfo
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
| <code>fileId</code> | <code>string</code> | File ID. |
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.file.getInfo(request)`

- **OnSuccess**: <code>[FileInfo](src/models/file-info.ts)</code>
- **OnError**: throws <code>[File.GetInfoError](src/resources/file.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.file.getInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileInfo, File.GetInfoError&gt;</code>, with `result.value` of type <code>[FileInfo](src/models/file-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initUpload(request: File.InitUploadRequest, options?: RequestOptions): ApiPromise&lt;FileInitUploadResponse, File.InitUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate file upload.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.file.initUpload({
    body: {
      name: "some example string",
      size: 1,
      digest: "some example string",
      projectId: "some example string",
    },
  });
  // TODO: Handle 'response' of type FileInitUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type File.InitUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.file.initUpload({
  body: {
    name: "some example string",
    size: 1,
    digest: "some example string",
    projectId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileInitUploadResponse
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[FileInitUploadRequest](src/models/file-init-upload-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.file.initUpload(request)`

- **OnSuccess**: <code>[FileInitUploadResponse](src/models/file-init-upload-response.ts)</code>
- **OnError**: throws <code>[File.InitUploadError](src/resources/file.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.file.initUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileInitUploadResponse, File.InitUploadError&gt;</code>, with `result.value` of type <code>[FileInitUploadResponse](src/models/file-init-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DedicatedClassification

> Source: [DedicatedClassification](src/resources/dedicated-classification.ts)

<details>
<summary><code>dedicatedTextClassification(request: DedicatedClassification.DedicatedTextClassificationRequest, options?: RequestOptions): ApiPromise&lt;TextClassificationResult, DedicatedClassification.DedicatedTextClassificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify text input into categories with per-class probabilities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dedicatedClassification.dedicatedTextClassification({
    body: { model: "some example string" },
  });
  // TODO: Handle 'response' of type TextClassificationResult
} catch (err) {
  // TODO: Handle 'err' of type DedicatedClassification.DedicatedTextClassificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dedicatedClassification.dedicatedTextClassification({
  body: { model: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TextClassificationResult
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
| <code>xFriendliTeam?</code> | <code>[XFriendliTeam](src/models/unions/xfriendli-team.ts)</code> | ID of team to run requests as (optional parameter). |
| <code>body</code> | <code>[DedicatedTextClassificationBody](src/models/dedicated-text-classification-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dedicatedClassification.dedicatedTextClassification(request)`

- **OnSuccess**: <code>[TextClassificationResult](src/models/text-classification-result.ts)</code>
- **OnError**: throws <code>[DedicatedClassification.DedicatedTextClassificationError](src/resources/dedicated-classification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dedicatedClassification.dedicatedTextClassification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TextClassificationResult, DedicatedClassification.DedicatedTextClassificationError&gt;</code>, with `result.value` of type <code>[TextClassificationResult](src/models/text-classification-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContainerClassification

> Source: [ContainerClassification](src/resources/container-classification.ts)

<details>
<summary><code>containerTextClassification(request: ContainerClassification.ContainerTextClassificationRequest, options?: RequestOptions): ApiPromise&lt;TextClassificationResult, ContainerClassification.ContainerTextClassificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify text input into categories with per-class probabilities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.containerClassification.containerTextClassification({ body: {} });
  // TODO: Handle 'response' of type TextClassificationResult
} catch (err) {
  // TODO: Handle 'err' of type ContainerClassification.ContainerTextClassificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.containerClassification.containerTextClassification({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TextClassificationResult
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
| <code>body</code> | <code>[ContainerTextClassificationBody](src/models/container-text-classification-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.containerClassification.containerTextClassification(request)`

- **OnSuccess**: <code>[TextClassificationResult](src/models/text-classification-result.ts)</code>
- **OnError**: throws <code>[ContainerClassification.ContainerTextClassificationError](src/resources/container-classification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.containerClassification.containerTextClassification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TextClassificationResult, ContainerClassification.ContainerTextClassificationError&gt;</code>, with `result.value` of type <code>[TextClassificationResult](src/models/text-classification-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FriendliSuiteApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

