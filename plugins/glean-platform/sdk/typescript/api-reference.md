# Reference

> Source: [GleanPlatformApiClient](src/client.ts)

## Agents

> Source: [Agents](src/resources/agents.ts)

<details>
<summary><code>platformAgentsCancelRun(request: Agents.PlatformAgentsCancelRunRequest, options?: RequestOptions): ApiPromise&lt;PlatformAgentRunResponse, Agents.PlatformAgentsCancelRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request cooperative cancellation of the durable agent run identified by `run_id` in the JSON body. Requires ownership, current agent access, and the agents.run scope. Sending a cancellation signal does not itself change an active run from RUNNING; poll GET run for the final state. Paused runs become CANCELLED without resuming execution. Repeated requests and requests for terminal runs return the current snapshot. Completion may win a race with cancellation. Completed tool side effects cannot be undone, and external work may continue if a tool does not support cancellation. Cancellation targets this run, not separate background-subagent executions. An active run without a cancellation registration returns 409. Cancellation signaling requires Redis. An interrupted active run can instead become FAILED through deadline cleanup; this does not verify that external tool work has stopped.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.platformAgentsCancelRun({
    agentId: "{agent_id}",
    body: { runId: "some example string" },
  });
  // TODO: Handle 'response' of type PlatformAgentRunResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PlatformAgentsCancelRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.platformAgentsCancelRun({
  agentId: "{agent_id}",
  body: { runId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformAgentRunResponse
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
| <code>agentId</code> | <code>string</code> | ID of the agent that owns the run. |
| <code>body</code> | <code>[PlatformAgentRunCancellationRequest](src/models/platform-agent-run-cancellation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.platformAgentsCancelRun(request)`

- **OnSuccess**: <code>[PlatformAgentRunResponse](src/models/platform-agent-run-response.ts)</code>
- **OnError**: throws <code>[Agents.PlatformAgentsCancelRunError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.platformAgentsCancelRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformAgentRunResponse, Agents.PlatformAgentsCancelRunError&gt;</code>, with `result.value` of type <code>[PlatformAgentRunResponse](src/models/platform-agent-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAgentsCreateRun(request: Agents.PlatformAgentsCreateRunRequest, options?: RequestOptions): ApiPromise&lt;PlatformAgentRunWaitResponse, Agents.PlatformAgentsCreateRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Execute an agent run. By default, set `stream` to true to receive server-sent events; otherwise the response contains the final agent messages. Set `execution_mode` to `DURABLE` to persist a new run and return its initial snapshot with HTTP 201 without waiting for execution. Poll the agent-scoped GET run endpoint for progress. Durable execution continues after an HTTP disconnect, but is not automatically resumed after a QE restart or crash. An active turn becomes overdue more than 40 minutes after acceptance (a 30-minute execution timeout plus 10 minutes of grace). The next GET of the run marks the overdue turn FAILED without replay; there is no periodic sweep. Without a GET, the stored run can remain RUNNING. Failure does not prove that external tool work has stopped. Paused runs are not expired; an accepted approval continuation starts a fresh deadline. Each POST creates a new run; retrying a POST can create another execution. Submit pending approval decisions through the run responses endpoint, and cancellation can be requested through the run cancellations endpoint. A run tracks one workflow execution; automatic background-subagent wake turns are separate executions, not continuations tracked by this run ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.platformAgentsCreateRun({ agentId: "{agent_id}", body: {} });
  // TODO: Handle 'response' of type PlatformAgentRunWaitResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PlatformAgentsCreateRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.platformAgentsCreateRun({ agentId: "{agent_id}", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformAgentRunWaitResponse
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
| <code>agentId</code> | <code>string</code> | ID of the agent to run. |
| <code>body</code> | <code>[PlatformAgentRunCreateRequest](src/models/platform-agent-run-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.platformAgentsCreateRun(request)`

- **OnSuccess**: <code>[PlatformAgentRunWaitResponse](src/models/platform-agent-run-wait-response.ts)</code>
- **OnError**: throws <code>[Agents.PlatformAgentsCreateRunError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.platformAgentsCreateRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformAgentRunWaitResponse, Agents.PlatformAgentsCreateRunError&gt;</code>, with `result.value` of type <code>[PlatformAgentRunWaitResponse](src/models/platform-agent-run-wait-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAgentsCreateRunResponses(request: Agents.PlatformAgentsCreateRunResponsesRequest, options?: RequestOptions): ApiPromise&lt;PlatformAgentRunResponse, Agents.PlatformAgentsCreateRunResponsesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit decisions for every pending tool approval in the paused run's current batch. The run is identified by `run_id` in the JSON body. Decisions apply only to the stored invocations and arguments; argument edits, authentication responses, and session-wide grants are not supported. The caller must own the run, still have agent access, and have the agents.run scope. Acceptance persists the decisions before resuming the same run and chat session. Identical accepted decisions return the current snapshot without another continuation. Conflicting, stale, incomplete, or non-pending decisions return 409. Cancellation registration failure returns 503 without accepting the decisions; retry the same approval batch. This retry guarantee does not cover an indeterminate database commit outcome. Go workflow approval resumes currently support one tool invocation and one approval response. Unsupported multi-tool or multi-decision Go resumes fail without executing tools. The resumed action must resolve to the tool identified by the stored approval request and paused checkpoint. Missing or inconsistent identity fails without executing tools. Execution continues after HTTP disconnects, but is not automatically resumed after a QE crash. Each accepted continuation starts a fresh 30-minute execution timeout and 40-minute cleanup deadline. Identical retries do not extend that deadline. Waiting for approval does not expire a run. The next GET marks an overdue active turn FAILED without replaying execution.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.platformAgentsCreateRunResponses({
    agentId: "{agent_id}",
    body: {
      runId: "some example string",
      responses: [{ interactionId: "some example string", decision: Decision.Approve }],
    },
  });
  // TODO: Handle 'response' of type PlatformAgentRunResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PlatformAgentsCreateRunResponsesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.platformAgentsCreateRunResponses({
  agentId: "{agent_id}",
  body: {
    runId: "some example string",
    responses: [{ interactionId: "some example string", decision: Decision.Approve }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformAgentRunResponse
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
| <code>agentId</code> | <code>string</code> | ID of the agent that owns the run. |
| <code>body</code> | <code>[PlatformAgentRunResponsesRequest](src/models/platform-agent-run-responses-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.platformAgentsCreateRunResponses(request)`

- **OnSuccess**: <code>[PlatformAgentRunResponse](src/models/platform-agent-run-response.ts)</code>
- **OnError**: throws <code>[Agents.PlatformAgentsCreateRunResponsesError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.platformAgentsCreateRunResponses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformAgentRunResponse, Agents.PlatformAgentsCreateRunResponsesError&gt;</code>, with `result.value` of type <code>[PlatformAgentRunResponse](src/models/platform-agent-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAgentsGet(request: Agents.PlatformAgentsGetRequest, options?: RequestOptions): ApiPromise&lt;PlatformAgentGetResponse, Agents.PlatformAgentsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details for an agent available to the authenticated user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.platformAgentsGet({ agentId: "{agent_id}" });
  // TODO: Handle 'response' of type PlatformAgentGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PlatformAgentsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.platformAgentsGet({ agentId: "{agent_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformAgentGetResponse
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
| <code>agentId</code> | <code>string</code> | ID of the agent to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.platformAgentsGet(request)`

- **OnSuccess**: <code>[PlatformAgentGetResponse](src/models/platform-agent-get-response.ts)</code>
- **OnError**: throws <code>[Agents.PlatformAgentsGetError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.platformAgentsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformAgentGetResponse, Agents.PlatformAgentsGetError&gt;</code>, with `result.value` of type <code>[PlatformAgentGetResponse](src/models/platform-agent-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAgentsGetRun(request: Agents.PlatformAgentsGetRunRequest, options?: RequestOptions): ApiPromise&lt;PlatformAgentRunResponse, Agents.PlatformAgentsGetRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a persisted workflow execution owned by the authenticated user. The run must belong to the specified agent, and the user must still have access to that agent. Unknown runs, runs owned by another user, and mismatched agent/run identifiers return 404. Requires the agents.run scope. Executions without a persisted workflow record are not available through this endpoint.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.platformAgentsGetRun({ agentId: "{agent_id}", runId: "{run_id}" });
  // TODO: Handle 'response' of type PlatformAgentRunResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PlatformAgentsGetRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.platformAgentsGetRun({
  agentId: "{agent_id}",
  runId: "{run_id}",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformAgentRunResponse
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
| <code>agentId</code> | <code>string</code> | ID of the agent that owns the run. |
| <code>runId</code> | <code>string</code> | ID of the durable run to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.platformAgentsGetRun(request)`

- **OnSuccess**: <code>[PlatformAgentRunResponse](src/models/platform-agent-run-response.ts)</code>
- **OnError**: throws <code>[Agents.PlatformAgentsGetRunError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.platformAgentsGetRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformAgentRunResponse, Agents.PlatformAgentsGetRunError&gt;</code>, with `result.value` of type <code>[PlatformAgentRunResponse](src/models/platform-agent-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAgentsGetSchemas(request: Agents.PlatformAgentsGetSchemasRequest, options?: RequestOptions): ApiPromise&lt;PlatformAgentSchemasResponse, Agents.PlatformAgentsGetSchemasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an agent's input and output JSON schemas.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.platformAgentsGetSchemas({ agentId: "{agent_id}" });
  // TODO: Handle 'response' of type PlatformAgentSchemasResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PlatformAgentsGetSchemasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.platformAgentsGetSchemas({ agentId: "{agent_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformAgentSchemasResponse
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
| <code>agentId</code> | <code>string</code> | ID of the agent whose schemas should be retrieved. |
| <code>includeTools?</code> | <code>boolean</code> | Whether to include tool metadata in the response.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.platformAgentsGetSchemas(request)`

- **OnSuccess**: <code>[PlatformAgentSchemasResponse](src/models/platform-agent-schemas-response.ts)</code>
- **OnError**: throws <code>[Agents.PlatformAgentsGetSchemasError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.platformAgentsGetSchemas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformAgentSchemasResponse, Agents.PlatformAgentsGetSchemasError&gt;</code>, with `result.value` of type <code>[PlatformAgentSchemasResponse](src/models/platform-agent-schemas-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAgentsSearch(request: Agents.PlatformAgentsSearchRequestParams, options?: RequestOptions): ApiPromise&lt;PlatformAgentsSearchResponse, Agents.PlatformAgentsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search agents available to the authenticated user by agent name.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.platformAgentsSearch({ body: {} });
  // TODO: Handle 'response' of type PlatformAgentsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PlatformAgentsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.platformAgentsSearch({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformAgentsSearchResponse
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
| <code>body</code> | <code>[PlatformAgentsSearchRequest](src/models/platform-agents-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.platformAgentsSearch(request)`

- **OnSuccess**: <code>[PlatformAgentsSearchResponse](src/models/platform-agents-search-response.ts)</code>
- **OnError**: throws <code>[Agents.PlatformAgentsSearchError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.platformAgentsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformAgentsSearchResponse, Agents.PlatformAgentsSearchError&gt;</code>, with `result.value` of type <code>[PlatformAgentsSearchResponse](src/models/platform-agents-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Chat

> Source: [Chat](src/resources/chat.ts)

<details>
<summary><code>platformChatCreate(request: Chat.PlatformChatCreateRequestParams, options?: RequestOptions): ApiPromise&lt;PlatformChatCompletedResponse, Chat.PlatformChatCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run an assistant turn. The default response is JSON. HTTP clients request server-sent events by setting `stream` to true in the JSON body. An `Accept: text/event-stream` header does not replace `stream`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.platformChatCreate({ body: { input: "some example string" } });
  // TODO: Handle 'response' of type PlatformChatCompletedResponse
} catch (err) {
  // TODO: Handle 'err' of type Chat.PlatformChatCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.platformChatCreate({ body: { input: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformChatCompletedResponse
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
| <code>body</code> | <code>[ApiChatRequest](src/models/api-chat-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.platformChatCreate(request)`

- **OnSuccess**: <code>[PlatformChatCompletedResponse](src/models/platform-chat-completed-response.ts)</code>
- **OnError**: throws <code>[Chat.PlatformChatCreateError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.platformChatCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformChatCompletedResponse, Chat.PlatformChatCreateError&gt;</code>, with `result.value` of type <code>[PlatformChatCompletedResponse](src/models/platform-chat-completed-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformChatCreateStream(request: Chat.PlatformChatCreateStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;PlatformChatStreamEventServerSentEvent&gt;, Chat.PlatformChatCreateStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

SDK-only logical operation. HTTP clients must call the base path; the URL fragment is not sent. Run an assistant turn as server-sent events. HTTP clients request this mode by setting `stream` to true in the JSON body.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.chat.platformChatCreateStream({ body: { input: "some example string" } });
  for await (const event of stream) {
    // TODO: Handle 'event' of type PlatformChatStreamEventServerSentEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Chat.PlatformChatCreateStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are GleanPlatformApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.platformChatCreateStream({
  body: { input: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<PlatformChatStreamEventServerSentEvent>
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
| <code>body</code> | <code>[ApiChatStreamRequest](src/models/api-chat-stream-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.platformChatCreateStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[PlatformChatStreamEventServerSentEvent](src/models/unions/platform-chat-stream-event-server-sent-event.ts)&gt;</code>
- **OnError**: throws <code>[Chat.PlatformChatCreateStreamError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.platformChatCreateStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;PlatformChatStreamEventServerSentEvent&gt;, Chat.PlatformChatCreateStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[PlatformChatStreamEventServerSentEvent](src/models/unions/platform-chat-stream-event-server-sent-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Skills

> Source: [Skills](src/resources/skills.ts)

<details>
<summary><code>platformSkillsCreate(request: Skills.PlatformSkillsCreateRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillCreateResponse, Skills.PlatformSkillsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a skill from an uploaded SKILL.md, .zip, or .skill bundle. If the authenticated user already has a skill with the same name, the existing skill is superseded with a new version, unless it is source-managed: a same-name create over a GitHub-imported skill returns 409, and the caller syncs the existing skill instead. Two concurrent same-name creates can still produce two skills.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsCreate({ file: new Uint8Array() });
  // TODO: Handle 'response' of type PlatformSkillCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsCreate({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillCreateResponse
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
| <code>file</code> | <code>FileInput</code> | SKILL.md, .zip, or .skill bundle to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsCreate(request)`

- **OnSuccess**: <code>[PlatformSkillCreateResponse](src/models/platform-skill-create-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsCreateError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillCreateResponse, Skills.PlatformSkillsCreateError&gt;</code>, with `result.value` of type <code>[PlatformSkillCreateResponse](src/models/platform-skill-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsCreateVersion(request: Skills.PlatformSkillsCreateVersionRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillVersionCreateResponse, Skills.PlatformSkillsCreateVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new immutable version for an existing caller-managed skill from an uploaded SKILL.md, .zip, or .skill bundle. A create-version over a GitHub-imported skill returns 409, and the caller syncs the existing skill instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsCreateVersion({
    skillId: "{skill_id}",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type PlatformSkillVersionCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsCreateVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsCreateVersion({
  skillId: "{skill_id}",
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillVersionCreateResponse
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |
| <code>file</code> | <code>FileInput</code> | SKILL.md, .zip, or .skill bundle to store as a new version. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsCreateVersion(request)`

- **OnSuccess**: <code>[PlatformSkillVersionCreateResponse](src/models/platform-skill-version-create-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsCreateVersionError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsCreateVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillVersionCreateResponse, Skills.PlatformSkillsCreateVersionError&gt;</code>, with `result.value` of type <code>[PlatformSkillVersionCreateResponse](src/models/platform-skill-version-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsDelete(request: Skills.PlatformSkillsDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Skills.PlatformSkillsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a skill the authenticated caller is allowed to manage. This operation permanently removes all versions of the skill.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.skills.platformSkillsDelete({ skillId: "{skill_id}" });
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsDelete({ skillId: "{skill_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Skills.PlatformSkillsDeleteError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Skills.PlatformSkillsDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsGet(request: Skills.PlatformSkillsGetRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillGetResponse, Skills.PlatformSkillsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve metadata for a skill available to the authenticated user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsGet({ skillId: "{skill_id}" });
  // TODO: Handle 'response' of type PlatformSkillGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsGet({ skillId: "{skill_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillGetResponse
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsGet(request)`

- **OnSuccess**: <code>[PlatformSkillGetResponse](src/models/platform-skill-get-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsGetError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillGetResponse, Skills.PlatformSkillsGetError&gt;</code>, with `result.value` of type <code>[PlatformSkillGetResponse](src/models/platform-skill-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsGetContent(request: Skills.PlatformSkillsGetContentRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Skills.PlatformSkillsGetContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the latest installable bundle for a skill available to the authenticated user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsGetContent({ skillId: "{skill_id}" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsGetContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsGetContent({ skillId: "{skill_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsGetContent(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Skills.PlatformSkillsGetContentError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsGetContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Skills.PlatformSkillsGetContentError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsGetVersion(request: Skills.PlatformSkillsGetVersionRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillVersionGetResponse, Skills.PlatformSkillsGetVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve metadata for a skill version available to the authenticated user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsGetVersion({ skillId: "{skill_id}", version: 1 });
  // TODO: Handle 'response' of type PlatformSkillVersionGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsGetVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsGetVersion({
  skillId: "{skill_id}",
  version: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillVersionGetResponse
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |
| <code>version</code> | <code>number</code> | Major version number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsGetVersion(request)`

- **OnSuccess**: <code>[PlatformSkillVersionGetResponse](src/models/platform-skill-version-get-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsGetVersionError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsGetVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillVersionGetResponse, Skills.PlatformSkillsGetVersionError&gt;</code>, with `result.value` of type <code>[PlatformSkillVersionGetResponse](src/models/platform-skill-version-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsGetVersionContent(request: Skills.PlatformSkillsGetVersionContentRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Skills.PlatformSkillsGetVersionContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the installable bundle for a skill version available to the authenticated user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsGetVersionContent({ skillId: "{skill_id}", version: 1 });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsGetVersionContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsGetVersionContent({
  skillId: "{skill_id}",
  version: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |
| <code>version</code> | <code>number</code> | Major version number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsGetVersionContent(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Skills.PlatformSkillsGetVersionContentError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsGetVersionContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Skills.PlatformSkillsGetVersionContentError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsImport(request: Skills.PlatformSkillsImportRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillImportResponse, Skills.PlatformSkillsImportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import one or more skills selected from a GitHub source preview. Each source URL is fetched and persisted as an independent skill with source provenance. This operation does not create a durable source resource. The import is atomic: if any source cannot be fetched, validated, or persisted, no skills are created.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsImport({
    body: { sourceUrls: ["some example string"] },
  });
  // TODO: Handle 'response' of type PlatformSkillImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsImport({
  body: { sourceUrls: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillImportResponse
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
| <code>body</code> | <code>[PlatformSkillImportRequest](src/models/platform-skill-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsImport(request)`

- **OnSuccess**: <code>[PlatformSkillImportResponse](src/models/platform-skill-import-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsImportError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillImportResponse, Skills.PlatformSkillsImportError&gt;</code>, with `result.value` of type <code>[PlatformSkillImportResponse](src/models/platform-skill-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsList(request: Skills.PlatformSkillsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillsListResponse, Skills.PlatformSkillsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List every custom skill the authenticated caller can access. Built-in skills are excluded: they have no versions, content download, update, or delete, so their identifiers would fail most skill operations. Chat-authored skills shared with the caller without a listed grant are omitted: they stay retrievable by identifier when it is known, but this list does not discover them.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsList();
  // TODO: Handle 'response' of type PlatformSkillsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillsListResponse
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
| <code>pageSize?</code> | <code>number</code> | Maximum number of skills to return. Defaults to 20. Maximum is 100.<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsList(request)`

- **OnSuccess**: <code>[PlatformSkillsListResponse](src/models/platform-skills-list-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsListError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillsListResponse, Skills.PlatformSkillsListError&gt;</code>, with `result.value` of type <code>[PlatformSkillsListResponse](src/models/platform-skills-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsListVersions(request: Skills.PlatformSkillsListVersionsRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillVersionsListResponse, Skills.PlatformSkillsListVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List versions for a skill available to the authenticated user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsListVersions({ skillId: "{skill_id}" });
  // TODO: Handle 'response' of type PlatformSkillVersionsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsListVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsListVersions({ skillId: "{skill_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillVersionsListResponse
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |
| <code>pageSize?</code> | <code>number</code> | Maximum number of versions to return. Defaults to 20. Maximum is 100.<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsListVersions(request)`

- **OnSuccess**: <code>[PlatformSkillVersionsListResponse](src/models/platform-skill-versions-list-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsListVersionsError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsListVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillVersionsListResponse, Skills.PlatformSkillsListVersionsError&gt;</code>, with `result.value` of type <code>[PlatformSkillVersionsListResponse](src/models/platform-skill-versions-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsPreviewSource(request: Skills.PlatformSkillsPreviewSourceRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillSourcePreviewResponse, Skills.PlatformSkillsPreviewSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspect a GitHub URL without persisting a source or any discovered skills. Set stream to true to receive repository scan progress as server-sent events; otherwise the response contains the completed preview.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsPreviewSource({
    body: { sourceUrl: "some example string" },
  });
  // TODO: Handle 'response' of type PlatformSkillSourcePreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsPreviewSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsPreviewSource({
  body: { sourceUrl: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillSourcePreviewResponse
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
| <code>body</code> | <code>[ApiSkillsSourcesPreviewRequest](src/models/api-skills-sources-preview-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsPreviewSource(request)`

- **OnSuccess**: <code>[PlatformSkillSourcePreviewResponse](src/models/platform-skill-source-preview-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsPreviewSourceError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsPreviewSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillSourcePreviewResponse, Skills.PlatformSkillsPreviewSourceError&gt;</code>, with `result.value` of type <code>[PlatformSkillSourcePreviewResponse](src/models/platform-skill-source-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsPreviewSourceStream(request: Skills.PlatformSkillsPreviewSourceStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;PlatformSkillSourcePreviewStreamEventServerSentEvent&gt;, Skills.PlatformSkillsPreviewSourceStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

SDK-only logical operation. HTTP clients must call the base path; the URL fragment is not sent. Inspect a GitHub URL as server-sent events. HTTP clients request this mode by setting `stream` to true in the JSON body.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.skills.platformSkillsPreviewSourceStream({
    body: { sourceUrl: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type PlatformSkillSourcePreviewStreamEventServerSentEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsPreviewSourceStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are GleanPlatformApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsPreviewSourceStream({
  body: { sourceUrl: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<PlatformSkillSourcePreviewStreamEventServerSentEvent>
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
| <code>body</code> | <code>[ApiSkillsSourcesPreviewStreamRequest](src/models/api-skills-sources-preview-stream-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsPreviewSourceStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[PlatformSkillSourcePreviewStreamEventServerSentEvent](src/models/unions/platform-skill-source-preview-stream-event-server-sent-event.ts)&gt;</code>
- **OnError**: throws <code>[Skills.PlatformSkillsPreviewSourceStreamError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsPreviewSourceStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;PlatformSkillSourcePreviewStreamEventServerSentEvent&gt;, Skills.PlatformSkillsPreviewSourceStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[PlatformSkillSourcePreviewStreamEventServerSentEvent](src/models/unions/platform-skill-source-preview-stream-event-server-sent-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsSync(request: Skills.PlatformSkillsSyncRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillSyncResponse, Skills.PlatformSkillsSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refresh one GitHub-imported skill from its stored source URL. If the skill content has changed, this operation creates a new skill version. If the skill is no longer present upstream, the stored skill is left unchanged and must be deleted explicitly.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsSync({ skillId: "{skill_id}" });
  // TODO: Handle 'response' of type PlatformSkillSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsSync({ skillId: "{skill_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillSyncResponse
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
| <code>skillId</code> | <code>string</code> | ID of the GitHub-imported skill to sync. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsSync(request)`

- **OnSuccess**: <code>[PlatformSkillSyncResponse](src/models/platform-skill-sync-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsSyncError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillSyncResponse, Skills.PlatformSkillsSyncError&gt;</code>, with `result.value` of type <code>[PlatformSkillSyncResponse](src/models/platform-skill-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsUpdate(request: Skills.PlatformSkillsUpdateRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillUpdateResponse, Skills.PlatformSkillsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable the skill for the authenticated caller without changing its content. The owner's update sets the skill's stored status. Any other caller's update applies only to that caller.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsUpdate({
    skillId: "{skill_id}",
    body: { status: PlatformSkillUpdateStatus.Enabled },
  });
  // TODO: Handle 'response' of type PlatformSkillUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsUpdate({
  skillId: "{skill_id}",
  body: { status: PlatformSkillUpdateStatus.Enabled },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillUpdateResponse
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
| <code>skillId</code> | <code>string</code> | Glean skill ID. |
| <code>body</code> | <code>[PlatformSkillUpdateRequest](src/models/platform-skill-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsUpdate(request)`

- **OnSuccess**: <code>[PlatformSkillUpdateResponse](src/models/platform-skill-update-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsUpdateError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillUpdateResponse, Skills.PlatformSkillsUpdateError&gt;</code>, with `result.value` of type <code>[PlatformSkillUpdateResponse](src/models/platform-skill-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSkillsValidate(request: Skills.PlatformSkillsValidateRequest, options?: RequestOptions): ApiPromise&lt;PlatformSkillValidationResponse, Skills.PlatformSkillsValidateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a skill bundle without persisting it. Accepts a SKILL.md, .zip, or .skill upload and returns parsed metadata plus the normalized file layout.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.skills.platformSkillsValidate({ file: new Uint8Array() });
  // TODO: Handle 'response' of type PlatformSkillValidationResponse
} catch (err) {
  // TODO: Handle 'err' of type Skills.PlatformSkillsValidateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.skills.platformSkillsValidate({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSkillValidationResponse
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
| <code>file</code> | <code>FileInput</code> | SKILL.md, .zip, or .skill bundle to validate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.skills.platformSkillsValidate(request)`

- **OnSuccess**: <code>[PlatformSkillValidationResponse](src/models/platform-skill-validation-response.ts)</code>
- **OnError**: throws <code>[Skills.PlatformSkillsValidateError](src/resources/skills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.skills.platformSkillsValidate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSkillValidationResponse, Skills.PlatformSkillsValidateError&gt;</code>, with `result.value` of type <code>[PlatformSkillValidationResponse](src/models/platform-skill-validation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>platformSearch(request: Search.PlatformSearchRequestParams, options?: RequestOptions): ApiPromise&lt;PlatformSearchResponse, Search.PlatformSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search your organization's connected content and return ranked document results with cursor pagination. Use `GET /api/search/filters` to discover datasource identifiers and common filter fields. Built-in filter names are validated; other field names are accepted as custom filters and behavior depends on your Glean configuration and connected sources.
Errors: HTTP 422 `unprocessable_query` returns no `results` or `next_cursor`. See `warnings` on the response for non-blocking issues such as partially available results. Not every query issue produces a warning or error.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.platformSearch({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type PlatformSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.PlatformSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.platformSearch({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSearchResponse
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
| <code>body</code> | <code>[PlatformSearchRequest](src/models/platform-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.platformSearch(request)`

- **OnSuccess**: <code>[PlatformSearchResponse](src/models/platform-search-response.ts)</code>
- **OnError**: throws <code>[Search.PlatformSearchError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.platformSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSearchResponse, Search.PlatformSearchError&gt;</code>, with `result.value` of type <code>[PlatformSearchResponse](src/models/platform-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformSearchFilters(request: Search.PlatformSearchFiltersRequest, options?: RequestOptions): ApiPromise&lt;PlatformSearchFiltersResponse, Search.PlatformSearchFiltersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List datasources and common built-in filter fields visible to the authenticated user. This is a best-effort catalog, not an exhaustive list of every filter search accepts.
Without `query`, returns field metadata only and does not run a search. With a nonblank `query`, provide exactly one `datasources` value to request suggested filter values for that query; no documents are returned and this endpoint does not include warning objects. See `FilterFieldInfo.values` for limitations on suggested values. Rate-limited requests return HTTP 429 with `Retry-After`; temporary backend unavailability returns HTTP 503.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.platformSearchFilters();
  // TODO: Handle 'response' of type PlatformSearchFiltersResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.PlatformSearchFiltersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.platformSearchFilters().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformSearchFiltersResponse
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
| <code>datasources?</code> | <code>string[]</code> | Restrict metadata to one or more datasource identifiers as returned by this endpoint (for example, `jira`). With a nonblank `query`, exactly one datasource is required. Unknown or inaccessible identifiers return `invalid_datasource`. |
| <code>query?</code> | <code>string</code> | Optional search query that requests suggested filter values for the selected datasource. Must be nonblank when present. Triggers a search for facet values only; does not return documents. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.platformSearchFilters(request)`

- **OnSuccess**: <code>[PlatformSearchFiltersResponse](src/models/platform-search-filters-response.ts)</code>
- **OnError**: throws <code>[Search.PlatformSearchFiltersError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.platformSearchFilters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformSearchFiltersResponse, Search.PlatformSearchFiltersError&gt;</code>, with `result.value` of type <code>[PlatformSearchFiltersResponse](src/models/platform-search-filters-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminUsage

> Source: [AdminUsage](src/resources/admin-usage.ts)

<details>
<summary><code>platformAdminUsageLimitsBatch(request: AdminUsage.PlatformAdminUsageLimitsBatchRequest, options?: RequestOptions): ApiPromise&lt;PlatformBatchUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Apply one or more usage limit policy changes atomically. This action sets policy by natural key; it does not create addressable resources or return resource locations. Every change succeeds or none are applied. USER targets may be identified by user_id or email; each resolves to the canonical user_id before duplicate natural keys are checked. Requires admin.usage.limits:write and permission to edit workspace billing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageLimitsBatch({
    body: [
      {
        target: { type: PlatformUsageTargetType1.Organization },
        usageSelector: { clientId: "glean", period: {} },
        allocationMode: PlatformAllocationMode1.SharedPool,
        value: {
          mode: PlatformAmountMode1.Finite,
          amount: "1000.00",
          unit: PlatformUsageUnit1.Usd,
          enforcement: PlatformEnforcement1.Hard,
        },
      },
      {
        target: { type: PlatformUsageTargetType1.User, email: "user@example.com" },
        usageSelector: { clientId: "glean", period: {} },
        value: {
          mode: PlatformAmountMode1.Finite,
          amount: "50.00",
          unit: PlatformUsageUnit1.Usd,
          enforcement: PlatformEnforcement1.Hard,
        },
      },
    ],
  });
  // TODO: Handle 'response' of type PlatformBatchUsageLimitsResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageLimitsBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageLimitsBatch({
  body: [
    {
      target: { type: PlatformUsageTargetType1.Organization },
      usageSelector: { clientId: "glean", period: {} },
      allocationMode: PlatformAllocationMode1.SharedPool,
      value: {
        mode: PlatformAmountMode1.Finite,
        amount: "1000.00",
        unit: PlatformUsageUnit1.Usd,
        enforcement: PlatformEnforcement1.Hard,
      },
    },
    {
      target: { type: PlatformUsageTargetType1.User, email: "user@example.com" },
      usageSelector: { clientId: "glean", period: {} },
      value: {
        mode: PlatformAmountMode1.Finite,
        amount: "50.00",
        unit: PlatformUsageUnit1.Usd,
        enforcement: PlatformEnforcement1.Hard,
      },
    },
  ],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformBatchUsageLimitsResponse
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
| <code>body</code> | <code>[PlatformUsageLimit](src/models/platform-usage-limit.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageLimitsBatch(request)`

- **OnSuccess**: <code>[PlatformBatchUsageLimitsResponse](src/models/platform-batch-usage-limits-response.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageLimitsBatchError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageLimitsBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformBatchUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsBatchError&gt;</code>, with `result.value` of type <code>[PlatformBatchUsageLimitsResponse](src/models/platform-batch-usage-limits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageLimitsEvaluate(request: AdminUsage.PlatformAdminUsageLimitsEvaluateRequest, options?: RequestOptions): ApiPromise&lt;PlatformEvaluateUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsEvaluateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluate the effective usage limits for a selector and return the current decision (AVAILABLE, WARNING, or BLOCKED) based on accrued usage. Requires admin.usage:evaluate and permission to read workspace billing, not a global administrator role. An explicit usage_selector.client_id selects the Glean or external spend client; it is never inferred from the caller. Returns all applicable limit values and counters, with effective headroom separated by unit. Agent counters retain aggregate scope. Billing readers receive exact IdP-group source identities. A USER target may be identified by user_id or email. Evaluation reports configured-budget status even when runtime enforcement switches are off; it does not perform request admission, model eligibility, or agent-run preflight checks.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageLimitsEvaluate({
    body: { usageSelector: {}, target: { type: Type5.User } },
  });
  // TODO: Handle 'response' of type PlatformEvaluateUsageLimitResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageLimitsEvaluateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageLimitsEvaluate({
  body: { usageSelector: {}, target: { type: Type5.User } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformEvaluateUsageLimitResponse
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
| <code>body</code> | <code>[PlatformEvaluateUsageLimitRequest](src/models/platform-evaluate-usage-limit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageLimitsEvaluate(request)`

- **OnSuccess**: <code>[PlatformEvaluateUsageLimitResponse](src/models/platform-evaluate-usage-limit-response.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageLimitsEvaluateError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageLimitsEvaluate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformEvaluateUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsEvaluateError&gt;</code>, with `result.value` of type <code>[PlatformEvaluateUsageLimitResponse](src/models/platform-evaluate-usage-limit-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageLimitsList(request: AdminUsage.PlatformAdminUsageLimitsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformListUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List configured limits across Glean and external spend clients, plus aggregate agent limits. Organization and user limits identify their spend client; aggregate agent limits omit client_id. USER targets return the canonical user_id and, when available, the user's directory email. Requires admin.usage.limits:read and permission to read workspace billing. Optional filters match configured limits. Pages contain up to page_size matching results; the service continues scanning until the page is full or the collection is exhausted. Continue with next_cursor while has_more is true, keeping the same filters on every continuation request. The undeclared client_id and target_type query parameters are rejected; use the canonical filters parameter instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageLimitsList({
    pageSize: 20,
    cursor: "{cursor}",
    filters: [
      { field: "client_id", values: ["glean"] },
      { field: "target_type", values: ["ORGANIZATION", "USER"], operator: PlatformFilterOperator.Equals },
    ],
  });
  // TODO: Handle 'response' of type PlatformListUsageLimitsResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageLimitsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageLimitsList({
  pageSize: 20,
  cursor: "{cursor}",
  filters: [
    { field: "client_id", values: ["glean"] },
    { field: "target_type", values: ["ORGANIZATION", "USER"], operator: PlatformFilterOperator.Equals },
  ],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformListUsageLimitsResponse
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
| <code>pageSize?</code> | <code>number</code> | Maximum number of limits to return. Defaults to 20; the maximum allowed is 100.<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | Opaque cursor from a previous list response; resend the same filters when continuing. |
| <code>filters?</code> | <code>[Filter](src/models/filter.ts)[]</code> | JSON-encoded array of filters. Supported fields are client_id and target_type; only EQUALS is supported and is the default operator. Values within a filter are OR'd; filters are AND'd, including repeated fields. Client IDs are opaque, case-sensitive strings, matched exactly without trimming; whitespace-only values are invalid. Client filters include organization, default-user, and user policies, but exclude aggregate agent policies without a client_id. target_type values are ORGANIZATION, DEFAULT_USER, USER, DEFAULT_AGENT, and AGENT. URL-encode the JSON array as one filters query value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageLimitsList(request)`

- **OnSuccess**: <code>[PlatformListUsageLimitsResponse](src/models/platform-list-usage-limits-response.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageLimitsListError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageLimitsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformListUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsListError&gt;</code>, with `result.value` of type <code>[PlatformListUsageLimitsResponse](src/models/platform-list-usage-limits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageLimitsReset(request: AdminUsage.PlatformAdminUsageLimitsResetRequest, options?: RequestOptions): ApiPromise&lt;PlatformResetUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsResetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a configured usage limit matching the selector without clearing measured usage. A USER target may be identified by user_id or email, including a user no longer in the directory. Requires admin.usage.limits:write and permission to edit workspace billing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageLimitsReset({
    body: {
      target: { type: PlatformUsageTargetType1.User, email: "user@example.com" },
      usageSelector: { clientId: "glean", period: {} },
    },
  });
  // TODO: Handle 'response' of type PlatformResetUsageLimitsResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageLimitsResetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageLimitsReset({
  body: {
    target: { type: PlatformUsageTargetType1.User, email: "user@example.com" },
    usageSelector: { clientId: "glean", period: {} },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformResetUsageLimitsResponse
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
| <code>body</code> | <code>[PlatformUsageLimitKey](src/models/platform-usage-limit-key.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageLimitsReset(request)`

- **OnSuccess**: <code>[PlatformResetUsageLimitsResponse](src/models/platform-reset-usage-limits-response.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageLimitsResetError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageLimitsReset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformResetUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsResetError&gt;</code>, with `result.value` of type <code>[PlatformResetUsageLimitsResponse](src/models/platform-reset-usage-limits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageLimitsUpsert(request: AdminUsage.PlatformAdminUsageLimitsUpsertRequest, options?: RequestOptions): ApiPromise&lt;PlatformUpsertUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsUpsertError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or replace a single usage limit by its natural key. Always returns 200 with the normalized limit. A USER target may be identified by user_id or email; an unknown user returns 404. Requires admin.usage.limits:write and permission to edit workspace billing. Personal usage grants do not allow limit changes.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageLimitsUpsert({
    body: {
      target: { type: PlatformUsageTargetType1.Organization },
      usageSelector: { clientId: "glean", period: {} },
      allocationMode: PlatformAllocationMode1.SharedPool,
      value: {
        mode: PlatformAmountMode1.Finite,
        amount: "1000.00",
        unit: PlatformUsageUnit1.Usd,
        enforcement: PlatformEnforcement1.Hard,
      },
    },
  });
  // TODO: Handle 'response' of type PlatformUpsertUsageLimitResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageLimitsUpsertError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageLimitsUpsert({
  body: {
    target: { type: PlatformUsageTargetType1.Organization },
    usageSelector: { clientId: "glean", period: {} },
    allocationMode: PlatformAllocationMode1.SharedPool,
    value: {
      mode: PlatformAmountMode1.Finite,
      amount: "1000.00",
      unit: PlatformUsageUnit1.Usd,
      enforcement: PlatformEnforcement1.Hard,
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformUpsertUsageLimitResponse
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
| <code>body</code> | <code>[PlatformUsageLimit](src/models/platform-usage-limit.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageLimitsUpsert(request)`

- **OnSuccess**: <code>[PlatformUpsertUsageLimitResponse](src/models/platform-upsert-usage-limit-response.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageLimitsUpsertError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageLimitsUpsert(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformUpsertUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsUpsertError&gt;</code>, with `result.value` of type <code>[PlatformUpsertUsageLimitResponse](src/models/platform-upsert-usage-limit-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageRequestsCreate(request: AdminUsage.PlatformAdminUsageRequestsCreateRequest, options?: RequestOptions): ApiPromise&lt;PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires usage.limit_increase_requests:write, the same scope as personal creation, and current edit permission on the agent, not billing permissions. The caller supplies the agent, client, and optional business justification. Requester identity comes from authentication; the server assigns the request identifier and current UTC month. Requires shared Platform authentication with the required scope, experimental opt-in, and the existing request-more enablement flag. Missing opt-in or a disabled flag returns 404.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageRequestsCreate({
    body: { agentId: "{agent_id}", clientId: "glean" },
  });
  // TODO: Handle 'response' of type PlatformRequestResponse1
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageRequestsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageRequestsCreate({
  body: { agentId: "{agent_id}", clientId: "glean" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformRequestResponse1
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
| <code>body</code> | <code>[PlatformAgentRequestCreate1](src/models/platform-agent-request-create1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageRequestsCreate(request)`

- **OnSuccess**: <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageRequestsCreateError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageRequestsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsCreateError&gt;</code>, with `result.value` of type <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageRequestsGet(request: AdminUsage.PlatformAdminUsageRequestsGetRequest, options?: RequestOptions): ApiPromise&lt;PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires admin.usage.limit_increase_requests:read and current workspace billing read permission. Authorization precedes resource disclosure. Owner-only agent reads are not supported. Supported token issuance, experimental opt-in, and request-more enablement are required. Missing opt-in or a disabled flag returns 404.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageRequestsGet({ requestId: "{request_id}" });
  // TODO: Handle 'response' of type PlatformRequestResponse1
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageRequestsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageRequestsGet({
  requestId: "{request_id}",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformRequestResponse1
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
| <code>requestId</code> | <code>string</code> | Opaque request identifier; not an authorization grant. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageRequestsGet(request)`

- **OnSuccess**: <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageRequestsGetError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageRequestsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsGetError&gt;</code>, with `result.value` of type <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageRequestsList(request: AdminUsage.PlatformAdminUsageRequestsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformRequestListResponse1, AdminUsage.PlatformAdminUsageRequestsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires admin.usage.limit_increase_requests:read and current workspace billing read permission. Agent ownership is not queue access. Cursors bind filters and current authorization context. Supported token issuance, experimental opt-in, and request-more enablement are required. Missing opt-in or a disabled flag returns 404, not a successful empty page.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageRequestsList();
  // TODO: Handle 'response' of type PlatformRequestListResponse1
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageRequestsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageRequestsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformRequestListResponse1
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
| <code>pageSize?</code> | <code>number</code> | Maximum page size; defaults to 20 and cannot exceed 100.<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | Opaque continuation bound to filters and current authorization. |
| <code>filters?</code> | <code>[PlatformRequestFilter1](src/models/platform-request-filter1.ts)[]</code> | Optional structured filters on request status. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageRequestsList(request)`

- **OnSuccess**: <code>[PlatformRequestListResponse1](src/models/platform-request-list-response1.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageRequestsListError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageRequestsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformRequestListResponse1, AdminUsage.PlatformAdminUsageRequestsListError&gt;</code>, with `result.value` of type <code>[PlatformRequestListResponse1](src/models/platform-request-list-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageRequestsUpdate(request: AdminUsage.PlatformAdminUsageRequestsUpdateRequest, options?: RequestOptions): ApiPromise&lt;PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a pending request with an approval decision or denial. Requires admin.usage.limit_increase_requests:write and current billing edit permission. A pending request can record an approved positive increase amount or be denied with an optional resolution note. PERIOD approval retains the request's stored month and requires the current UTC month; expired approvals return 409 before mutation or approval writes. A successful approval write triggers spend-limit cache refresh before reload; refresh failure logs a warning without failing the decision. The existing backend consumes eligible USER current-period grants to raise enforcement headroom without changing standing rules. This does not add capacity for agents or other unsupported targets, integrate usage settings, or promise new delivery or atomicity guarantees. Supported token issuance, experimental opt-in, and request-more enablement are required. Missing opt-in or a disabled flag returns 404. Once enabled and opted in, ONGOING returns typed 503 without reading or modifying the request; its private policy preparation is not shared with this adapter. Use the existing app operation for ongoing user approvals.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageRequestsUpdate({
    requestId: "{request_id}",
    body: { status: Status.Approved, approvedIncreaseAmount: "100.00", scope: PlatformRequestScope2.Period },
  });
  // TODO: Handle 'response' of type PlatformRequestResponse1
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageRequestsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageRequestsUpdate({
  requestId: "{request_id}",
  body: { status: Status.Approved, approvedIncreaseAmount: "100.00", scope: PlatformRequestScope2.Period },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformRequestResponse1
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
| <code>requestId</code> | <code>string</code> | Opaque request identifier; not an authorization grant. |
| <code>body</code> | <code>[PlatformAdministrativeRequestUpdate1](src/models/platform-administrative-request-update1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageRequestsUpdate(request)`

- **OnSuccess**: <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageRequestsUpdateError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageRequestsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsUpdateError&gt;</code>, with `result.value` of type <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageSettingsGet(options?: RequestOptions): ApiPromise&lt;PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve workspace-wide policy from the same configuration used by Billing. Group resolution uses the configured policy and its backend defaults; business justification is currently optional. No per-user settings are read, and updated_at is omitted because no policy-update timestamp is available. Requires admin.usage.settings:read and permission to read workspace billing; a global administrator role is not required.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageSettingsGet();
  // TODO: Handle 'response' of type PlatformUsageSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageSettingsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageSettingsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformUsageSettingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageSettingsGet()`

- **OnSuccess**: <code>[PlatformUsageSettingsResponse](src/models/platform-usage-settings-response.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageSettingsGetError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageSettingsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsGetError&gt;</code>, with `result.value` of type <code>[PlatformUsageSettingsResponse](src/models/platform-usage-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformAdminUsageSettingsUpdate(request: AdminUsage.PlatformAdminUsageSettingsUpdateRequest, options?: RequestOptions): ApiPromise&lt;PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assign workspace-wide usage policy. Assignment is currently unavailable until a writer to authoritative Billing configuration is integrated. The backend config platform.usageSettingsWritesEnabled is disabled by default; enabling it alone does not implement assignment, and an authorized request still returns 503 without changing configuration or persisting a second copy of policy. Requires admin.usage.settings:write and permission to edit workspace billing; a global administrator role is not required.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsage.platformAdminUsageSettingsUpdate({
    body: {
      multipleMembershipResolution: { perMember: { idpGroups: IdpGroups.Highest } },
      limitIncreaseRequests: { businessJustification: BusinessJustification.Required },
    },
  });
  // TODO: Handle 'response' of type PlatformUsageSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminUsage.PlatformAdminUsageSettingsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsage.platformAdminUsageSettingsUpdate({
  body: {
    multipleMembershipResolution: { perMember: { idpGroups: IdpGroups.Highest } },
    limitIncreaseRequests: { businessJustification: BusinessJustification.Required },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformUsageSettingsResponse
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
| <code>body</code> | <code>[PlatformUsageSettingsUpdateRequest2](src/models/unions/platform-usage-settings-update-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsage.platformAdminUsageSettingsUpdate(request)`

- **OnSuccess**: <code>[PlatformUsageSettingsResponse](src/models/platform-usage-settings-response.ts)</code>
- **OnError**: throws <code>[AdminUsage.PlatformAdminUsageSettingsUpdateError](src/resources/admin-usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsage.platformAdminUsageSettingsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsUpdateError&gt;</code>, with `result.value` of type <code>[PlatformUsageSettingsResponse](src/models/platform-usage-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/resources/usage.ts)

<details>
<summary><code>platformUsageLimitsEvaluate(request: Usage.PlatformUsageLimitsEvaluateRequest, options?: RequestOptions): ApiPromise&lt;PlatformEvaluateUsageLimitResponse, Usage.PlatformUsageLimitsEvaluateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluate the effective usage limits for a selector and return the current decision (AVAILABLE, WARNING, or BLOCKED) based on accrued usage. Requires usage:evaluate, without workspace billing permission. Omit target to evaluate the authenticated canonical user. An explicit USER must identify that user by canonical ID, known alias ID, email, or known alias email; every supplied field must identify the caller. An explicit AGENT requires current owner/editor or applicable global agent-edit permission; disabled agents remain eligible. Subagents, other users, ORGANIZATION, and default targets are forbidden on this route, even for billing administrators. Missing, inaccessible, and subagent targets return the same 403 insufficient_permissions. An explicit usage_selector.client_id selects the Glean or external spend client; it is never inferred from the caller. Agent evaluation reports aggregate agent usage, not the caller's personal slice or a complete run preflight. Returns only the target's own policies, such as user, default, department, IdP-group, and agent limits, with their values, used counters, decisions, and headroom; USD and credits have separate effective_limits. Shared budgets, such as the selected client's organization limit, are never itemized and never contribute values, counters, warnings, or headroom; a reached shared hard limit still makes decision BLOCKED and adds a decision_causes entry with budget_scope SHARED and its source_type. The response is the same for every caller, including billing administrators. IDP_GROUP sources always have is_identity_restricted true and no group_id. Use the administrative route for shared-budget details. Evaluation reports configured-budget status even when runtime enforcement switches are off; it does not perform request admission, model eligibility, or agent-run preflight checks.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.platformUsageLimitsEvaluate({ body: { usageSelector: {} } });
  // TODO: Handle 'response' of type PlatformEvaluateUsageLimitResponse
} catch (err) {
  // TODO: Handle 'err' of type Usage.PlatformUsageLimitsEvaluateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.platformUsageLimitsEvaluate({ body: { usageSelector: {} } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformEvaluateUsageLimitResponse
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
| <code>body</code> | <code>[PlatformEvaluateCallerUsageLimitRequest](src/models/platform-evaluate-caller-usage-limit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.platformUsageLimitsEvaluate(request)`

- **OnSuccess**: <code>[PlatformEvaluateUsageLimitResponse](src/models/platform-evaluate-usage-limit-response.ts)</code>
- **OnError**: throws <code>[Usage.PlatformUsageLimitsEvaluateError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.platformUsageLimitsEvaluate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformEvaluateUsageLimitResponse, Usage.PlatformUsageLimitsEvaluateError&gt;</code>, with `result.value` of type <code>[PlatformEvaluateUsageLimitResponse](src/models/platform-evaluate-usage-limit-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformUsageRequestsCreate(request: Usage.PlatformUsageRequestsCreateRequest, options?: RequestOptions): ApiPromise&lt;PlatformRequestResponse1, Usage.PlatformUsageRequestsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires usage.limit_increase_requests:write. The target is the authenticated canonical user, and requester identity comes from authentication. The caller supplies the client and optional business justification. The server assigns the request identifier and current UTC month. Billing grants do not widen this route. Requires shared Platform authentication with the required scope, experimental opt-in, and the existing request-more enablement flag. Missing opt-in or a disabled flag returns 404.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.platformUsageRequestsCreate({ body: { clientId: "glean" } });
  // TODO: Handle 'response' of type PlatformRequestResponse1
} catch (err) {
  // TODO: Handle 'err' of type Usage.PlatformUsageRequestsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.platformUsageRequestsCreate({ body: { clientId: "glean" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformRequestResponse1
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
| <code>body</code> | <code>[PlatformPersonalRequestCreate1](src/models/platform-personal-request-create1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.platformUsageRequestsCreate(request)`

- **OnSuccess**: <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: throws <code>[Usage.PlatformUsageRequestsCreateError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.platformUsageRequestsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformRequestResponse1, Usage.PlatformUsageRequestsCreateError&gt;</code>, with `result.value` of type <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformUsageRequestsGet(request: Usage.PlatformUsageRequestsGetRequest, options?: RequestOptions): ApiPromise&lt;PlatformRequestResponse1, Usage.PlatformUsageRequestsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires usage.limit_increase_requests:read and the current user's request. Authorization precedes resource disclosure. Missing and inaccessible records return the same 404. Supported token issuance, experimental opt-in, and request-more enablement are required. Missing opt-in or a disabled flag also returns 404.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.platformUsageRequestsGet({ requestId: "{request_id}" });
  // TODO: Handle 'response' of type PlatformRequestResponse1
} catch (err) {
  // TODO: Handle 'err' of type Usage.PlatformUsageRequestsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.platformUsageRequestsGet({ requestId: "{request_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformRequestResponse1
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
| <code>requestId</code> | <code>string</code> | Opaque personal request identifier; not an authorization grant. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.platformUsageRequestsGet(request)`

- **OnSuccess**: <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: throws <code>[Usage.PlatformUsageRequestsGetError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.platformUsageRequestsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformRequestResponse1, Usage.PlatformUsageRequestsGetError&gt;</code>, with `result.value` of type <code>[PlatformRequestResponse1](src/models/platform-request-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformUsageRequestsList(request: Usage.PlatformUsageRequestsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformRequestListResponse1, Usage.PlatformUsageRequestsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires usage.limit_increase_requests:read. The collection is limited to the authenticated canonical user's requests, including resolved requests. Cursors bind the filters and current authorization context; a billing grant cannot widen results. Supported token issuance, experimental opt-in, and request-more enablement are required. Missing opt-in or a disabled flag returns 404.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.platformUsageRequestsList();
  // TODO: Handle 'response' of type PlatformRequestListResponse1
} catch (err) {
  // TODO: Handle 'err' of type Usage.PlatformUsageRequestsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.platformUsageRequestsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformRequestListResponse1
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
| <code>pageSize?</code> | <code>number</code> | Maximum page size; defaults to 20 and cannot exceed 100.<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | Opaque continuation bound to filters and current authorization. |
| <code>filters?</code> | <code>[PlatformRequestFilter1](src/models/platform-request-filter1.ts)[]</code> | Optional structured filters on request status. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.platformUsageRequestsList(request)`

- **OnSuccess**: <code>[PlatformRequestListResponse1](src/models/platform-request-list-response1.ts)</code>
- **OnError**: throws <code>[Usage.PlatformUsageRequestsListError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.platformUsageRequestsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformRequestListResponse1, Usage.PlatformUsageRequestsListError&gt;</code>, with `result.value` of type <code>[PlatformRequestListResponse1](src/models/platform-request-list-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Departments

> Source: [Departments](src/resources/departments.ts)

<details>
<summary><code>platformDepartmentsList(request: Departments.PlatformDepartmentsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformListDepartmentsResponse, Departments.PlatformDepartmentsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the departments in the Glean directory, ordered by display_name and then by department_id. The list includes every department that at least one user belongs to or that a usage limit names, so a caller can show the name of a department that a usage limit still names after its users leave it. Department names are exact, so names that differ only by case are different departments.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.departments.platformDepartmentsList();
  // TODO: Handle 'response' of type PlatformListDepartmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Departments.PlatformDepartmentsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.departments.platformDepartmentsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformListDepartmentsResponse
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
| <code>pageSize?</code> | <code>number</code> | Maximum number of departments to return. Defaults to 50. Maximum is 100.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.departments.platformDepartmentsList(request)`

- **OnSuccess**: <code>[PlatformListDepartmentsResponse](src/models/platform-list-departments-response.ts)</code>
- **OnError**: throws <code>[Departments.PlatformDepartmentsListError](src/resources/departments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.departments.platformDepartmentsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformListDepartmentsResponse, Departments.PlatformDepartmentsListError&gt;</code>, with `result.value` of type <code>[PlatformListDepartmentsResponse](src/models/platform-list-departments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IdPGroupsApi

> Source: [IdPGroupsApi](src/resources/id-pgroups-api.ts)

<details>
<summary><code>platformAdminIdpGroupsList(request: IdPGroupsApi.PlatformAdminIdpGroupsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformListIdpGroupsResponse, IdPGroupsApi.PlatformAdminIdpGroupsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the identity provider (IdP) groups that Glean loads from the directory, ordered by display_name and then by idp_group_id. Use idp_group_id to name a group in other Platform APIs. An IdP group is active when Glean loaded it from the directory. An IdP group is inactive when only a usage limit names it, for example after the group was removed from the identity provider. Inactive IdP groups are left out unless an is_active filter includes the value "false". Usage limits apply only to IdP groups from the datasource instance that the usage settings select, so use the provider_instance filter to list only those groups. Internal O365 ownership groups and SharePoint groups are left out. The caller must be able to read the workspace configuration or the workspace billing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.idPGroupsApi.platformAdminIdpGroupsList();
  // TODO: Handle 'response' of type PlatformListIdpGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type IdPGroupsApi.PlatformAdminIdpGroupsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.idPGroupsApi.platformAdminIdpGroupsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformListIdpGroupsResponse
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
| <code>pageSize?</code> | <code>number</code> | Maximum number of IdP groups to return. Defaults to 50. Maximum is 100.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. Send the same filters that the previous request used. |
| <code>filters?</code> | <code>[PlatformIdpGroupFilter1](src/models/platform-idp-group-filter1.ts)[]</code> | JSON-encoded filters that choose which IdP groups are returned. The supported fields are is_active, with the values "true" and "false", and provider_instance, with datasource instance names such as "okta". provider_instance values match without case. The only supported operator is EQUALS. Multiple values OR within a filter. Multiple filters AND together. Without an is_active filter, only active IdP groups are returned. To return active and inactive IdP groups, send [{"field":"is_active","values":["true","false"]}]. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.idPGroupsApi.platformAdminIdpGroupsList(request)`

- **OnSuccess**: <code>[PlatformListIdpGroupsResponse](src/models/platform-list-idp-groups-response.ts)</code>
- **OnError**: throws <code>[IdPGroupsApi.PlatformAdminIdpGroupsListError](src/resources/id-pgroups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.idPGroupsApi.platformAdminIdpGroupsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformListIdpGroupsResponse, IdPGroupsApi.PlatformAdminIdpGroupsListError&gt;</code>, with `result.value` of type <code>[PlatformListIdpGroupsResponse](src/models/platform-list-idp-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>platformUsersList(request: Users.PlatformUsersListRequest, options?: RequestOptions): ApiPromise&lt;PlatformListUsersResponse, Users.PlatformUsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the users in the Glean directory, ordered by display_name and then by user_id. The list includes the same people as the Glean People directory. Filter by name, email, manager_id, or department_id to find specific users. Use the returned user_id values with other Platform APIs, for example as usage limit targets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.platformUsersList({ filters: [{ field: "name", values: ["hoover"] }] });
  // TODO: Handle 'response' of type PlatformListUsersResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.PlatformUsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.platformUsersList({
  filters: [{ field: "name", values: ["hoover"] }],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformListUsersResponse
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
| <code>pageSize?</code> | <code>number</code> | Maximum number of users to return. Defaults to 50. Maximum is 100.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. Send the same filters that the previous request used. |
| <code>filters?</code> | <code>[PlatformUserFilter1](src/models/platform-user-filter1.ts)[]</code> | JSON-encoded filters that choose which users are returned. The supported fields are name, email, manager_id, and department_id, each with the operator EQUALS. Multiple values OR within a filter. Multiple filters AND together. Each field may appear in only one filter. A value that matches no user, such as an unknown email or department_id, returns no users rather than an error. |
| <code>include?</code> | <code>[PlatformUserInclude](src/models/platform-user-include.ts)[]</code> | Optional fields to add to each user. Each value only adds fields; it does not change which users are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.platformUsersList(request)`

- **OnSuccess**: <code>[PlatformListUsersResponse](src/models/platform-list-users-response.ts)</code>
- **OnError**: throws <code>[Users.PlatformUsersListError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.platformUsersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformListUsersResponse, Users.PlatformUsersListError&gt;</code>, with `result.value` of type <code>[PlatformListUsersResponse](src/models/platform-list-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminAgents

> Source: [AdminAgents](src/resources/admin-agents.ts)

<details>
<summary><code>platformAdminAgentsList(request: AdminAgents.PlatformAdminAgentsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformListAdminAgentsResponse, AdminAgents.PlatformAdminAgentsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List every agent in the workspace, ordered by display_name and then by agent_id. Unlike agent search, the list does not depend on who an agent is shared with, so it includes private and disabled agents. Deleted agents are inactive and are left out unless an is_active filter includes the value "false". Use the agent_id of an active agent with other Platform APIs, for example as a usage limit target. A deleted agent is not a valid usage limit target. The caller must be able to read all agents, administer agents, or read workspace billing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminAgents.platformAdminAgentsList();
  // TODO: Handle 'response' of type PlatformListAdminAgentsResponse
} catch (err) {
  // TODO: Handle 'err' of type AdminAgents.PlatformAdminAgentsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminAgents.platformAdminAgentsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformListAdminAgentsResponse
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
| <code>pageSize?</code> | <code>number</code> | Maximum number of agents to return. Defaults to 50. Maximum is 100.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. Send the same filters that the previous request used. |
| <code>filters?</code> | <code>[PlatformAdminAgentFilter1](src/models/platform-admin-agent-filter1.ts)[]</code> | JSON-encoded filters that choose which agents are returned. The only supported field is is_active, with the values "true" and "false" and the operator EQUALS. Multiple values OR within a filter. Multiple filters AND together. Without an is_active filter, only active agents are returned. To return active and deleted agents, send [{"field":"is_active","values":["true","false"]}]. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminAgents.platformAdminAgentsList(request)`

- **OnSuccess**: <code>[PlatformListAdminAgentsResponse](src/models/platform-list-admin-agents-response.ts)</code>
- **OnError**: throws <code>[AdminAgents.PlatformAdminAgentsListError](src/resources/admin-agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminAgents.platformAdminAgentsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformListAdminAgentsResponse, AdminAgents.PlatformAdminAgentsListError&gt;</code>, with `result.value` of type <code>[PlatformListAdminAgentsResponse](src/models/platform-list-admin-agents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Triggers

> Source: [Triggers](src/resources/triggers.ts)

<details>
<summary><code>platformTriggerPresetsEventsSearch(request: Triggers.PlatformTriggerPresetsEventsSearchRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerEventSearchResponse, Triggers.PlatformTriggerPresetsEventsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search recent content events an unsaved trigger built from this preset would match, to preview it before creating the trigger. Read-only — no trigger is created and no webhook delivery is made. Covers the last seven days.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggerPresetsEventsSearch({ presetId: "{preset_id}" });
  // TODO: Handle 'response' of type PlatformTriggerEventSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggerPresetsEventsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggerPresetsEventsSearch({
  presetId: "{preset_id}",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerEventSearchResponse
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
| <code>presetId</code> | <code>string</code> | ID of the preset to preview. |
| <code>body?</code> | <code>[PlatformTriggerPresetEventSearchRequest](src/models/platform-trigger-preset-event-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggerPresetsEventsSearch(request)`

- **OnSuccess**: <code>[PlatformTriggerEventSearchResponse](src/models/platform-trigger-event-search-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggerPresetsEventsSearchError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggerPresetsEventsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerEventSearchResponse, Triggers.PlatformTriggerPresetsEventsSearchError&gt;</code>, with `result.value` of type <code>[PlatformTriggerEventSearchResponse](src/models/platform-trigger-event-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggerPresetsGet(request: Triggers.PlatformTriggerPresetsGetRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerPresetGetResponse, Triggers.PlatformTriggerPresetsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single trigger preset by id.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggerPresetsGet({ presetId: "{preset_id}" });
  // TODO: Handle 'response' of type PlatformTriggerPresetGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggerPresetsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggerPresetsGet({ presetId: "{preset_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerPresetGetResponse
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
| <code>presetId</code> | <code>string</code> | ID of the preset to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggerPresetsGet(request)`

- **OnSuccess**: <code>[PlatformTriggerPresetGetResponse](src/models/platform-trigger-preset-get-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggerPresetsGetError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggerPresetsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerPresetGetResponse, Triggers.PlatformTriggerPresetsGetError&gt;</code>, with `result.value` of type <code>[PlatformTriggerPresetGetResponse](src/models/platform-trigger-preset-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggerPresetsInputValuesList(request: Triggers.PlatformTriggerPresetsInputValuesListRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerPresetInputValueListResponse, Triggers.PlatformTriggerPresetsInputValuesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return up to 300 selectable values for a single picklist input on a preset. Results are intended for typeahead selection and are not cursor-paginated. When `is_truncated` is true, refine `query` to narrow the result set.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggerPresetsInputValuesList({
    presetId: "{preset_id}",
    field: "{field}",
  });
  // TODO: Handle 'response' of type PlatformTriggerPresetInputValueListResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggerPresetsInputValuesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggerPresetsInputValuesList({
  presetId: "{preset_id}",
  field: "{field}",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerPresetInputValueListResponse
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
| <code>presetId</code> | <code>string</code> | ID of the preset the input belongs to. |
| <code>field</code> | <code>string</code> | Field identifier of the input whose values to list. |
| <code>query?</code> | <code>string</code> | Prefix filter over the input's option values, for typeahead. Matching is on the option value, not its display name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggerPresetsInputValuesList(request)`

- **OnSuccess**: <code>[PlatformTriggerPresetInputValueListResponse](src/models/platform-trigger-preset-input-value-list-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggerPresetsInputValuesListError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggerPresetsInputValuesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerPresetInputValueListResponse, Triggers.PlatformTriggerPresetsInputValuesListError&gt;</code>, with `result.value` of type <code>[PlatformTriggerPresetInputValueListResponse](src/models/platform-trigger-preset-input-value-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggerPresetsList(request: Triggers.PlatformTriggerPresetsListRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerPresetListResponse, Triggers.PlatformTriggerPresetsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the trigger presets available to the caller. A preset is a curated content-trigger template (e.g. a new Jira ticket) which is passed when creating a trigger.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggerPresetsList();
  // TODO: Handle 'response' of type PlatformTriggerPresetListResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggerPresetsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggerPresetsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerPresetListResponse
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
| <code>datasource?</code> | <code>string</code> | Restrict results to presets for a single datasource (e.g. github). |
| <code>pageSize?</code> | <code>number</code> | Maximum number of presets to return.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggerPresetsList(request)`

- **OnSuccess**: <code>[PlatformTriggerPresetListResponse](src/models/platform-trigger-preset-list-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggerPresetsListError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggerPresetsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerPresetListResponse, Triggers.PlatformTriggerPresetsListError&gt;</code>, with `result.value` of type <code>[PlatformTriggerPresetListResponse](src/models/platform-trigger-preset-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggersCreate(request: Triggers.PlatformTriggersCreateRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerCreateResponse, Triggers.PlatformTriggersCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a trigger from a preset and return it with its signing secret.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggersCreate({
    body: { presetId: "some example string", delivery: { webhookUrl: "https://example.com" } },
  });
  // TODO: Handle 'response' of type PlatformTriggerCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggersCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggersCreate({
  body: { presetId: "some example string", delivery: { webhookUrl: "https://example.com" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerCreateResponse
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
| <code>body</code> | <code>[PlatformTriggerCreateRequest](src/models/platform-trigger-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggersCreate(request)`

- **OnSuccess**: <code>[PlatformTriggerCreateResponse](src/models/platform-trigger-create-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggersCreateError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggersCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerCreateResponse, Triggers.PlatformTriggersCreateError&gt;</code>, with `result.value` of type <code>[PlatformTriggerCreateResponse](src/models/platform-trigger-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggersDelete(request: Triggers.PlatformTriggersDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Triggers.PlatformTriggersDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a trigger.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.triggers.platformTriggersDelete({ triggerId: "{trigger_id}" });
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggersDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggersDelete({ triggerId: "{trigger_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>triggerId</code> | <code>string</code> | ID of the trigger to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggersDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Triggers.PlatformTriggersDeleteError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggersDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Triggers.PlatformTriggersDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggersEventsSearch(request: Triggers.PlatformTriggersEventsSearchRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerEventSearchResponse, Triggers.PlatformTriggersEventsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search recent content events an existing trigger matches. Read-only — no webhook delivery is made. Covers the last seven days.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggersEventsSearch({ triggerId: "{trigger_id}" });
  // TODO: Handle 'response' of type PlatformTriggerEventSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggersEventsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggersEventsSearch({
  triggerId: "{trigger_id}",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerEventSearchResponse
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
| <code>triggerId</code> | <code>string</code> | ID of the trigger whose events to search. |
| <code>body?</code> | <code>[PlatformTriggerEventSearchRequest](src/models/platform-trigger-event-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggersEventsSearch(request)`

- **OnSuccess**: <code>[PlatformTriggerEventSearchResponse](src/models/platform-trigger-event-search-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggersEventsSearchError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggersEventsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerEventSearchResponse, Triggers.PlatformTriggersEventsSearchError&gt;</code>, with `result.value` of type <code>[PlatformTriggerEventSearchResponse](src/models/platform-trigger-event-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggersGet(request: Triggers.PlatformTriggersGetRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerGetResponse, Triggers.PlatformTriggersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a trigger owned by the authenticated caller.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggersGet({ triggerId: "{trigger_id}" });
  // TODO: Handle 'response' of type PlatformTriggerGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggersGet({ triggerId: "{trigger_id}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerGetResponse
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
| <code>triggerId</code> | <code>string</code> | ID of the trigger to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggersGet(request)`

- **OnSuccess**: <code>[PlatformTriggerGetResponse](src/models/platform-trigger-get-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggersGetError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerGetResponse, Triggers.PlatformTriggersGetError&gt;</code>, with `result.value` of type <code>[PlatformTriggerGetResponse](src/models/platform-trigger-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggersList(request: Triggers.PlatformTriggersListRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerListResponse, Triggers.PlatformTriggersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List triggers owned by the authenticated caller.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggersList();
  // TODO: Handle 'response' of type PlatformTriggerListResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggersList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerListResponse
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
| <code>pageSize?</code> | <code>number</code> | Maximum number of triggers to return.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggersList(request)`

- **OnSuccess**: <code>[PlatformTriggerListResponse](src/models/platform-trigger-list-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggersListError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerListResponse, Triggers.PlatformTriggersListError&gt;</code>, with `result.value` of type <code>[PlatformTriggerListResponse](src/models/platform-trigger-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platformTriggersUpdate(request: Triggers.PlatformTriggersUpdateRequest, options?: RequestOptions): ApiPromise&lt;PlatformTriggerGetResponse, Triggers.PlatformTriggersUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a trigger.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.triggers.platformTriggersUpdate({ triggerId: "{trigger_id}", body: {} });
  // TODO: Handle 'response' of type PlatformTriggerGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Triggers.PlatformTriggersUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.triggers.platformTriggersUpdate({
  triggerId: "{trigger_id}",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformTriggerGetResponse
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
| <code>triggerId</code> | <code>string</code> | ID of the trigger to update. |
| <code>body</code> | <code>[PlatformTriggerUpdateRequest](src/models/platform-trigger-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.triggers.platformTriggersUpdate(request)`

- **OnSuccess**: <code>[PlatformTriggerGetResponse](src/models/platform-trigger-get-response.ts)</code>
- **OnError**: throws <code>[Triggers.PlatformTriggersUpdateError](src/resources/triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.triggers.platformTriggersUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformTriggerGetResponse, Triggers.PlatformTriggersUpdateError&gt;</code>, with `result.value` of type <code>[PlatformTriggerGetResponse](src/models/platform-trigger-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanPlatformApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

