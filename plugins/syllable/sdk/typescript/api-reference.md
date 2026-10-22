# Reference

> Source: [SyllableSdkClient](src/client.ts)

## Agents

> Source: [Agents](src/resources/agents.ts)

<details>
<summary><code>agentCreate(request: Agents.AgentCreateRequest, options?: RequestOptions): ApiPromise&lt;AgentResponse, Agents.AgentCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new agent

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentCreate({
    body: {
      name: "some example string",
      type: "some example string",
      promptId: 1,
      timezone: "some example string",
      variables: { key: "some example string" },
      toolHeaders: { key: "some example string" },
    },
  });
  // TODO: Handle 'response' of type AgentResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.AgentCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.agentCreate({
  body: {
    name: "some example string",
    type: "some example string",
    promptId: 1,
    timezone: "some example string",
    variables: { key: "some example string" },
    toolHeaders: { key: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentResponse
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
| <code>body</code> | <code>[AgentCreate](src/models/agent-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentCreate(request)`

- **OnSuccess**: <code>[AgentResponse](src/models/agent-response.ts)</code>
- **OnError**: throws <code>[Agents.AgentCreateError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.agentCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentResponse, Agents.AgentCreateError&gt;</code>, with `result.value` of type <code>[AgentResponse](src/models/agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>agentDelete(request: Agents.AgentDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agents.AgentDeleteError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentDelete({ agentId: 1, reason: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agents.AgentDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.agentDelete({ agentId: 1, reason: "some example string" }).asApiResult();
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
| <code>agentId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agents.AgentDeleteError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.agentDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agents.AgentDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>agentGetAvailableSttProviders(request: Agents.AgentGetAvailableSttProvidersRequest, options?: RequestOptions): ApiPromise&lt;SupportedSttProvider[], Agents.AgentGetAvailableSttProvidersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the speech-to-text providers available to agents.

Each provider's `status` is resolved against the current date. Retired providers are omitted
unless they match `selected_provider`, so an agent still saved on a retired provider can render
it as a locked field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentGetAvailableSttProviders();
  // TODO: Handle 'response' of type SupportedSttProvider[]
} catch (err) {
  // TODO: Handle 'err' of type Agents.AgentGetAvailableSttProvidersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.agentGetAvailableSttProviders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportedSttProvider[]
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
| <code>selectedProvider?</code> | <code>[SelectedProvider](src/models/unions/selected-provider.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentGetAvailableSttProviders(request)`

- **OnSuccess**: <code>[SupportedSttProvider](src/models/supported-stt-provider.ts)[]</code>
- **OnError**: throws <code>[Agents.AgentGetAvailableSttProvidersError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.agentGetAvailableSttProviders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportedSttProvider[], Agents.AgentGetAvailableSttProvidersError&gt;</code>, with `result.value` of type <code>[SupportedSttProvider](src/models/supported-stt-provider.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>agentGetAvailableVoices(request: Agents.AgentGetAvailableVoicesRequest, options?: RequestOptions): ApiPromise&lt;AgentVoice[], Agents.AgentGetAvailableVoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get available agent voices.

Each voice's `status` is resolved against the current date. Retired voices are omitted unless
their display name is passed in `selected_voice`, so a saved config still referencing a retired
voice can render it as a locked field. A voice group holds one voice per language, so the
parameter is repeatable.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentGetAvailableVoices();
  // TODO: Handle 'response' of type AgentVoice[]
} catch (err) {
  // TODO: Handle 'err' of type Agents.AgentGetAvailableVoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.agentGetAvailableVoices().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentVoice[]
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
| <code>selectedVoice?</code> | <code>[SelectedVoice](src/models/unions/selected-voice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentGetAvailableVoices(request)`

- **OnSuccess**: <code>[AgentVoice](src/models/agent-voice.ts)[]</code>
- **OnError**: throws <code>[Agents.AgentGetAvailableVoicesError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.agentGetAvailableVoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentVoice[], Agents.AgentGetAvailableVoicesError&gt;</code>, with `result.value` of type <code>[AgentVoice](src/models/agent-voice.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>agentGetById(request: Agents.AgentGetByIdRequest, options?: RequestOptions): ApiPromise&lt;AgentResponse, Agents.AgentGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an agent by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentGetById({ agentId: 1 });
  // TODO: Handle 'response' of type AgentResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.AgentGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.agentGetById({ agentId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentResponse
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
| <code>agentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentGetById(request)`

- **OnSuccess**: <code>[AgentResponse](src/models/agent-response.ts)</code>
- **OnError**: throws <code>[Agents.AgentGetByIdError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.agentGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentResponse, Agents.AgentGetByIdError&gt;</code>, with `result.value` of type <code>[AgentResponse](src/models/agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>agentList(request: Agents.AgentListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseAgentResponse, Agents.AgentListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing agents

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: AgentProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseAgentResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.AgentListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.agentList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: AgentProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseAgentResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[AgentProperties](src/models/agent-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy3](src/models/unions/order-by3.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentList(request)`

- **OnSuccess**: <code>[ListResponseAgentResponse](src/models/list-response-agent-response.ts)</code>
- **OnError**: throws <code>[Agents.AgentListError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.agentList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseAgentResponse, Agents.AgentListError&gt;</code>, with `result.value` of type <code>[ListResponseAgentResponse](src/models/list-response-agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>agentListActiveLabels(options?: RequestOptions): ApiPromise&lt;string[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all distinct labels in use across active agents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentListActiveLabels();
  // TODO: Handle 'response' of type string[]
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
const result = await client.agents.agentListActiveLabels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentListActiveLabels()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.agentListActiveLabels().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ApiError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>agentUpdate(request: Agents.AgentUpdateRequest, options?: RequestOptions): ApiPromise&lt;AgentResponse, Agents.AgentUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing agent

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.agentUpdate({
    body: {
      name: "some example string",
      type: "some example string",
      promptId: 1,
      timezone: "some example string",
      variables: { key: "some example string" },
      toolHeaders: { key: "some example string" },
      id: 1,
    },
  });
  // TODO: Handle 'response' of type AgentResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.AgentUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.agentUpdate({
  body: {
    name: "some example string",
    type: "some example string",
    promptId: 1,
    timezone: "some example string",
    variables: { key: "some example string" },
    toolHeaders: { key: "some example string" },
    id: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentResponse
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
| <code>body</code> | <code>[AgentUpdate](src/models/agent-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.agentUpdate(request)`

- **OnSuccess**: <code>[AgentResponse](src/models/agent-response.ts)</code>
- **OnError**: throws <code>[Agents.AgentUpdateError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.agentUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentResponse, Agents.AgentUpdateError&gt;</code>, with `result.value` of type <code>[AgentResponse](src/models/agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCardClickEvent(request: Agents.PostCardClickEventRequest, options?: RequestOptions): ApiPromise&lt;CardClickResponse, Agents.PostCardClickEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Log an EventLog for a client-side card click interaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.postCardClickEvent({
    testId: "some example string",
    body: { actionId: "some example string", actionType: ActionType.Action },
  });
  // TODO: Handle 'response' of type CardClickResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.PostCardClickEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.postCardClickEvent({
  testId: "some example string",
  body: { actionId: "some example string", actionType: ActionType.Action },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardClickResponse
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
| <code>testId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CardClickRequest](src/models/card-click-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.postCardClickEvent(request)`

- **OnSuccess**: <code>[CardClickResponse](src/models/card-click-response.ts)</code>
- **OnError**: throws <code>[Agents.PostCardClickEventError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.postCardClickEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardClickResponse, Agents.PostCardClickEventError&gt;</code>, with `result.value` of type <code>[CardClickResponse](src/models/card-click-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AgentsTest

> Source: [AgentsTest](src/resources/agents-test.ts)

<details>
<summary><code>sendTestMessage(request: AgentsTest.SendTestMessageRequest, options?: RequestOptions): ApiPromise&lt;TestMessageResponse, AgentsTest.SendTestMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a new message

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentsTest.sendTestMessage({
    body: {
      serviceName: "some example string",
      source: "some example string",
      testId: "some example string",
      agentId: "some example string",
    },
  });
  // TODO: Handle 'response' of type TestMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type AgentsTest.SendTestMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentsTest.sendTestMessage({
  body: {
    serviceName: "some example string",
    source: "some example string",
    testId: "some example string",
    agentId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestMessageResponse
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
| <code>body</code> | <code>[TestMessage](src/models/test-message.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentsTest.sendTestMessage(request)`

- **OnSuccess**: <code>[TestMessageResponse](src/models/test-message-response.ts)</code>
- **OnError**: throws <code>[AgentsTest.SendTestMessageError](src/resources/agents-test.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentsTest.sendTestMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestMessageResponse, AgentsTest.SendTestMessageError&gt;</code>, with `result.value` of type <code>[TestMessageResponse](src/models/test-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](src/resources/channels.ts)

<details>
<summary><code>channelsCreate(request: Channels.ChannelsCreateRequest, options?: RequestOptions): ApiPromise&lt;Channel, Channels.ChannelsCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.channelsCreate({
    body: { name: "some example string", channelService: ChannelServices2.Sip, config: {} },
  });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type Channels.ChannelsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.channelsCreate({
  body: { name: "some example string", channelService: ChannelServices2.Sip, config: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
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
| <code>body</code> | <code>[OrganizationChannelCreateRequest](src/models/organization-channel-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.channelsCreate(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[Channels.ChannelsCreateError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.channelsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, Channels.ChannelsCreateError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelsList(request: Channels.ChannelsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseChannel, Channels.ChannelsListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.channelsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: ChannelProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseChannel
} catch (err) {
  // TODO: Handle 'err' of type Channels.ChannelsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.channelsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: ChannelProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseChannel
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[ChannelProperties](src/models/channel-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy21](src/models/unions/order-by21.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields2](src/models/unions/fields2.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.channelsList(request)`

- **OnSuccess**: <code>[ListResponseChannel](src/models/list-response-channel.ts)</code>
- **OnError**: throws <code>[Channels.ChannelsListError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.channelsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseChannel, Channels.ChannelsListError&gt;</code>, with `result.value` of type <code>[ListResponseChannel](src/models/list-response-channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelsUpdate(request: Channels.ChannelsUpdateRequest, options?: RequestOptions): ApiPromise&lt;Channel, Channels.ChannelsUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.channelsUpdate({
    body: { name: "some example string", channelService: ChannelServices2.Sip, config: {}, id: 1 },
  });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type Channels.ChannelsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.channelsUpdate({
  body: { name: "some example string", channelService: ChannelServices2.Sip, config: {}, id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
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
| <code>body</code> | <code>[OrganizationChannelUpdateRequest](src/models/organization-channel-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.channelsUpdate(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[Channels.ChannelsUpdateError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.channelsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, Channels.ChannelsUpdateError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsTwilio

> Source: [ChannelsTwilio](src/resources/channels-twilio.ts)

<details>
<summary><code>channelsTwilioCreate(request: ChannelsTwilio.ChannelsTwilioCreateRequest, options?: RequestOptions): ApiPromise&lt;Channel, ChannelsTwilio.ChannelsTwilioCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTwilio.channelsTwilioCreate({
    body: {
      name: "some example string",
      config: { accountSid: "some example string", authToken: "some example string" },
    },
  });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTwilio.ChannelsTwilioCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTwilio.channelsTwilioCreate({
  body: {
    name: "some example string",
    config: { accountSid: "some example string", authToken: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
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
| <code>body</code> | <code>[TwilioChannelCreateRequest](src/models/twilio-channel-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTwilio.channelsTwilioCreate(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[ChannelsTwilio.ChannelsTwilioCreateError](src/resources/channels-twilio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTwilio.channelsTwilioCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, ChannelsTwilio.ChannelsTwilioCreateError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelsTwilioGetById(request: ChannelsTwilio.ChannelsTwilioGetByIdRequest, options?: RequestOptions): ApiPromise&lt;Channel, ChannelsTwilio.ChannelsTwilioGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTwilio.channelsTwilioGetById({ channelId: 1 });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTwilio.ChannelsTwilioGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTwilio.channelsTwilioGetById({ channelId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
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
| <code>channelId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTwilio.channelsTwilioGetById(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[ChannelsTwilio.ChannelsTwilioGetByIdError](src/resources/channels-twilio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTwilio.channelsTwilioGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, ChannelsTwilio.ChannelsTwilioGetByIdError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelsTwilioUpdate(request: ChannelsTwilio.ChannelsTwilioUpdateRequest, options?: RequestOptions): ApiPromise&lt;Channel, ChannelsTwilio.ChannelsTwilioUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTwilio.channelsTwilioUpdate({ body: { id: 1 } });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTwilio.ChannelsTwilioUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTwilio.channelsTwilioUpdate({ body: { id: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
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
| <code>body</code> | <code>[TwilioChannelUpdateRequest](src/models/twilio-channel-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTwilio.channelsTwilioUpdate(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[ChannelsTwilio.ChannelsTwilioUpdateError](src/resources/channels-twilio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTwilio.channelsTwilioUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, ChannelsTwilio.ChannelsTwilioUpdateError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsTwilioNumbers

> Source: [ChannelsTwilioNumbers](src/resources/channels-twilio-numbers.ts)

<details>
<summary><code>channelsTwilioNumbersA2PComplianceCheck(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckRequest, options?: RequestOptions): ApiPromise&lt;A2PMessagingPathCheckResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return whether Twilio shows this number on a US A2P messaging path with an approved brand.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTwilioNumbers.channelsTwilioNumbersA2PComplianceCheck({
    channelId: 1,
    body: { phone: "some example string" },
  });
  // TODO: Handle 'response' of type A2PMessagingPathCheckResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTwilioNumbers.channelsTwilioNumbersA2PComplianceCheck({
  channelId: 1,
  body: { phone: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type A2PMessagingPathCheckResponse
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
| <code>channelId</code> | <code>number</code> | - |
| <code>body</code> | <code>[A2PMessagingPathCheckRequest](src/models/a2-pmessaging-path-check-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTwilioNumbers.channelsTwilioNumbersA2PComplianceCheck(request)`

- **OnSuccess**: <code>[A2PMessagingPathCheckResponse](src/models/a2-pmessaging-path-check-response.ts)</code>
- **OnError**: throws <code>[ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError](src/resources/channels-twilio-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTwilioNumbers.channelsTwilioNumbersA2PComplianceCheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;A2PMessagingPathCheckResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError&gt;</code>, with `result.value` of type <code>[A2PMessagingPathCheckResponse](src/models/a2-pmessaging-path-check-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelsTwilioNumbersAdd(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersAddRequest, options?: RequestOptions): ApiPromise&lt;TwilioNumberAddResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purchase a Twilio number and associate it with a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTwilioNumbers.channelsTwilioNumbersAdd({
    channelId: 1,
    body: { friendlyName: "some example string", areaCode: "some example string" },
  });
  // TODO: Handle 'response' of type TwilioNumberAddResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTwilioNumbers.channelsTwilioNumbersAdd({
  channelId: 1,
  body: { friendlyName: "some example string", areaCode: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TwilioNumberAddResponse
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
| <code>channelId</code> | <code>number</code> | - |
| <code>body</code> | <code>[TwilioNumberAddRequest](src/models/twilio-number-add-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTwilioNumbers.channelsTwilioNumbersAdd(request)`

- **OnSuccess**: <code>[TwilioNumberAddResponse](src/models/twilio-number-add-response.ts)</code>
- **OnError**: throws <code>[ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError](src/resources/channels-twilio-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTwilioNumbers.channelsTwilioNumbersAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TwilioNumberAddResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError&gt;</code>, with `result.value` of type <code>[TwilioNumberAddResponse](src/models/twilio-number-add-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelsTwilioNumbersList(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersListRequest, options?: RequestOptions): ApiPromise&lt;TwilioListNumbersResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Twilio phone numbers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTwilioNumbers.channelsTwilioNumbersList({ channelId: 1 });
  // TODO: Handle 'response' of type TwilioListNumbersResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTwilioNumbers.ChannelsTwilioNumbersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTwilioNumbers.channelsTwilioNumbersList({ channelId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TwilioListNumbersResponse
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
| <code>channelId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTwilioNumbers.channelsTwilioNumbersList(request)`

- **OnSuccess**: <code>[TwilioListNumbersResponse](src/models/twilio-list-numbers-response.ts)</code>
- **OnError**: throws <code>[ChannelsTwilioNumbers.ChannelsTwilioNumbersListError](src/resources/channels-twilio-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTwilioNumbers.channelsTwilioNumbersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TwilioListNumbersResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersListError&gt;</code>, with `result.value` of type <code>[TwilioListNumbersResponse](src/models/twilio-list-numbers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelsTwilioNumbersUpdate(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateRequest, options?: RequestOptions): ApiPromise&lt;TwilioNumberUpdateResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Twilio number and associate it with a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTwilioNumbers.channelsTwilioNumbersUpdate({
    channelId: 1,
    body: { friendlyName: "some example string", phoneSid: "some example string" },
  });
  // TODO: Handle 'response' of type TwilioNumberUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTwilioNumbers.channelsTwilioNumbersUpdate({
  channelId: 1,
  body: { friendlyName: "some example string", phoneSid: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TwilioNumberUpdateResponse
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
| <code>channelId</code> | <code>number</code> | - |
| <code>body</code> | <code>[TwilioNumberUpdateRequest](src/models/twilio-number-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTwilioNumbers.channelsTwilioNumbersUpdate(request)`

- **OnSuccess**: <code>[TwilioNumberUpdateResponse](src/models/twilio-number-update-response.ts)</code>
- **OnError**: throws <code>[ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError](src/resources/channels-twilio-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTwilioNumbers.channelsTwilioNumbersUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TwilioNumberUpdateResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError&gt;</code>, with `result.value` of type <code>[TwilioNumberUpdateResponse](src/models/twilio-number-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsTargets

> Source: [ChannelsTargets](src/resources/channels-targets.ts)

<details>
<summary><code>availableTargets(request: ChannelsTargets.AvailableTargetsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseAvailableTarget, ChannelsTargets.AvailableTargetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the available phone numbers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTargets.availableTargets({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseAvailableTarget
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTargets.AvailableTargetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTargets.availableTargets({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseAvailableTarget
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[AvailableTargetProperties](src/models/available-target-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy39](src/models/unions/order-by39.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields21](src/models/unions/fields21.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTargets.availableTargets(request)`

- **OnSuccess**: <code>[ListResponseAvailableTarget](src/models/list-response-available-target.ts)</code>
- **OnError**: throws <code>[ChannelsTargets.AvailableTargetsError](src/resources/channels-targets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTargets.availableTargets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseAvailableTarget, ChannelsTargets.AvailableTargetsError&gt;</code>, with `result.value` of type <code>[ListResponseAvailableTarget](src/models/list-response-available-target.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelTargetsCreate(request: ChannelsTargets.ChannelTargetsCreateRequest, options?: RequestOptions): ApiPromise&lt;ChannelTargetResponse, ChannelsTargets.ChannelTargetsCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTargets.channelTargetsCreate({
    channelId: 1,
    body: { agentId: 1, channelId: 1, target: "some example string", targetMode: TargetModes1.Voice },
  });
  // TODO: Handle 'response' of type ChannelTargetResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTargets.ChannelTargetsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTargets.channelTargetsCreate({
  channelId: 1,
  body: { agentId: 1, channelId: 1, target: "some example string", targetMode: TargetModes1.Voice },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChannelTargetResponse
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
| <code>channelId</code> | <code>number</code> | - |
| <code>body</code> | <code>[ChannelTargetCreateRequest](src/models/channel-target-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTargets.channelTargetsCreate(request)`

- **OnSuccess**: <code>[ChannelTargetResponse](src/models/channel-target-response.ts)</code>
- **OnError**: throws <code>[ChannelsTargets.ChannelTargetsCreateError](src/resources/channels-targets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTargets.channelTargetsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChannelTargetResponse, ChannelsTargets.ChannelTargetsCreateError&gt;</code>, with `result.value` of type <code>[ChannelTargetResponse](src/models/channel-target-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelTargetsDelete(request: ChannelsTargets.ChannelTargetsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ChannelsTargets.ChannelTargetsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Hard-delete a channel target by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTargets.channelTargetsDelete({
    channelId: "some example string",
    targetId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTargets.ChannelTargetsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTargets.channelTargetsDelete({
  channelId: "some example string",
  targetId: "some example string",
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
| <code>channelId</code> | <code>string</code> | - |
| <code>targetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTargets.channelTargetsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ChannelsTargets.ChannelTargetsDeleteError](src/resources/channels-targets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTargets.channelTargetsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ChannelsTargets.ChannelTargetsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelTargetsGetById(request: ChannelsTargets.ChannelTargetsGetByIdRequest, options?: RequestOptions): ApiPromise&lt;ChannelTargetResponse, ChannelsTargets.ChannelTargetsGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTargets.channelTargetsGetById({ channelId: 1, targetId: 1 });
  // TODO: Handle 'response' of type ChannelTargetResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTargets.ChannelTargetsGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTargets.channelTargetsGetById({
  channelId: 1,
  targetId: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChannelTargetResponse
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
| <code>channelId</code> | <code>number</code> | - |
| <code>targetId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTargets.channelTargetsGetById(request)`

- **OnSuccess**: <code>[ChannelTargetResponse](src/models/channel-target-response.ts)</code>
- **OnError**: throws <code>[ChannelsTargets.ChannelTargetsGetByIdError](src/resources/channels-targets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTargets.channelTargetsGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChannelTargetResponse, ChannelsTargets.ChannelTargetsGetByIdError&gt;</code>, with `result.value` of type <code>[ChannelTargetResponse](src/models/channel-target-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelTargetsList(request: ChannelsTargets.ChannelTargetsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseChannelTargetResponse, ChannelsTargets.ChannelTargetsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List channel targets for the current suborg.

Supports the standard `ListManager` filters via `search_fields`/`search_field_values`. In
addition to `target_mode` (single value), `target_mode_list` accepts a comma-separated list of
modes (e.g. `voice,sms`) and matches targets whose mode is any of the listed values. Whitespace
around tokens is tolerated and empty tokens are ignored. If both `target_mode` and
`target_mode_list` are supplied, the two filters are combined with AND. `target_mode_list` is
filter-only and cannot be used as `order_by`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTargets.channelTargetsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: ChannelTargetOrderProperties.Target,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseChannelTargetResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTargets.ChannelTargetsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTargets.channelTargetsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: ChannelTargetOrderProperties.Target,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseChannelTargetResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[ChannelTargetProperties](src/models/channel-target-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy310](src/models/unions/order-by310.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields22](src/models/unions/fields22.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTargets.channelTargetsList(request)`

- **OnSuccess**: <code>[ListResponseChannelTargetResponse](src/models/list-response-channel-target-response.ts)</code>
- **OnError**: throws <code>[ChannelsTargets.ChannelTargetsListError](src/resources/channels-targets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTargets.channelTargetsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseChannelTargetResponse, ChannelsTargets.ChannelTargetsListError&gt;</code>, with `result.value` of type <code>[ListResponseChannelTargetResponse](src/models/list-response-channel-target-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>channelTargetsUpdate(request: ChannelsTargets.ChannelTargetsUpdateRequest, options?: RequestOptions): ApiPromise&lt;ChannelTargetResponse, ChannelsTargets.ChannelTargetsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update channel target by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTargets.channelTargetsUpdate({
    channelId: 1,
    targetId: 1,
    body: { agentId: 1, channelId: 1, target: "some example string", targetMode: TargetModes1.Voice, id: 1 },
  });
  // TODO: Handle 'response' of type ChannelTargetResponse
} catch (err) {
  // TODO: Handle 'err' of type ChannelsTargets.ChannelTargetsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelsTargets.channelTargetsUpdate({
  channelId: 1,
  targetId: 1,
  body: { agentId: 1, channelId: 1, target: "some example string", targetMode: TargetModes1.Voice, id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChannelTargetResponse
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
| <code>channelId</code> | <code>number</code> | - |
| <code>targetId</code> | <code>number</code> | - |
| <code>body</code> | <code>[ChannelTargetUpdateRequest](src/models/channel-target-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelsTargets.channelTargetsUpdate(request)`

- **OnSuccess**: <code>[ChannelTargetResponse](src/models/channel-target-response.ts)</code>
- **OnError**: throws <code>[ChannelsTargets.ChannelTargetsUpdateError](src/resources/channels-targets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelsTargets.channelTargetsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChannelTargetResponse, ChannelsTargets.ChannelTargetsUpdateError&gt;</code>, with `result.value` of type <code>[ChannelTargetResponse](src/models/channel-target-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Conversations

> Source: [Conversations](src/resources/conversations.ts)

<details>
<summary><code>conversationsList(request: Conversations.ConversationsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseConversation, Conversations.ConversationsListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseConversation
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseConversation
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[ConversationProperties](src/models/conversation-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy31](src/models/unions/order-by31.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields3](src/models/unions/fields3.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsList(request)`

- **OnSuccess**: <code>[ListResponseConversation](src/models/list-response-conversation.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsListError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseConversation, Conversations.ConversationsListError&gt;</code>, with `result.value` of type <code>[ListResponseConversation](src/models/list-response-conversation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomMessages

> Source: [CustomMessages](src/resources/custom-messages.ts)

<details>
<summary><code>customMessageGetById(request: CustomMessages.CustomMessageGetByIdRequest, options?: RequestOptions): ApiPromise&lt;CustomMessageResponse, CustomMessages.CustomMessageGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the custom message by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMessages.customMessageGetById({ customMessageId: 1 });
  // TODO: Handle 'response' of type CustomMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMessages.CustomMessageGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMessages.customMessageGetById({ customMessageId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomMessageResponse
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
| <code>customMessageId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMessages.customMessageGetById(request)`

- **OnSuccess**: <code>[CustomMessageResponse](src/models/custom-message-response.ts)</code>
- **OnError**: throws <code>[CustomMessages.CustomMessageGetByIdError](src/resources/custom-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMessages.customMessageGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomMessageResponse, CustomMessages.CustomMessageGetByIdError&gt;</code>, with `result.value` of type <code>[CustomMessageResponse](src/models/custom-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customMessagesCreate(request: CustomMessages.CustomMessagesCreateRequest, options?: RequestOptions): ApiPromise&lt;CustomMessageResponse, CustomMessages.CustomMessagesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new custom message

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMessages.customMessagesCreate({
    body: { name: "some example string", text: "some example string" },
  });
  // TODO: Handle 'response' of type CustomMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMessages.CustomMessagesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMessages.customMessagesCreate({
  body: { name: "some example string", text: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomMessageResponse
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
| <code>body</code> | <code>[CustomMessageCreateRequest](src/models/custom-message-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMessages.customMessagesCreate(request)`

- **OnSuccess**: <code>[CustomMessageResponse](src/models/custom-message-response.ts)</code>
- **OnError**: throws <code>[CustomMessages.CustomMessagesCreateError](src/resources/custom-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMessages.customMessagesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomMessageResponse, CustomMessages.CustomMessagesCreateError&gt;</code>, with `result.value` of type <code>[CustomMessageResponse](src/models/custom-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customMessagesDelete(request: CustomMessages.CustomMessagesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CustomMessages.CustomMessagesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete custom message by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMessages.customMessagesDelete({
    customMessageId: 1,
    reason: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CustomMessages.CustomMessagesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMessages.customMessagesDelete({
  customMessageId: 1,
  reason: "some example string",
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
| <code>customMessageId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMessages.customMessagesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CustomMessages.CustomMessagesDeleteError](src/resources/custom-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMessages.customMessagesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CustomMessages.CustomMessagesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customMessagesList(request: CustomMessages.CustomMessagesListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseCustomMessageResponse, CustomMessages.CustomMessagesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing custom_messages

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMessages.customMessagesList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: CustomMessageProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseCustomMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMessages.CustomMessagesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMessages.customMessagesList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: CustomMessageProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseCustomMessageResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[CustomMessageProperties](src/models/custom-message-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy32](src/models/unions/order-by32.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields14](src/models/unions/fields14.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMessages.customMessagesList(request)`

- **OnSuccess**: <code>[ListResponseCustomMessageResponse](src/models/list-response-custom-message-response.ts)</code>
- **OnError**: throws <code>[CustomMessages.CustomMessagesListError](src/resources/custom-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMessages.customMessagesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseCustomMessageResponse, CustomMessages.CustomMessagesListError&gt;</code>, with `result.value` of type <code>[ListResponseCustomMessageResponse](src/models/list-response-custom-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customMessagesUpdate(request: CustomMessages.CustomMessagesUpdateRequest, options?: RequestOptions): ApiPromise&lt;CustomMessageResponse, CustomMessages.CustomMessagesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom message

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMessages.customMessagesUpdate({
    body: { name: "some example string", text: "some example string", id: 1 },
  });
  // TODO: Handle 'response' of type CustomMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMessages.CustomMessagesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMessages.customMessagesUpdate({
  body: { name: "some example string", text: "some example string", id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomMessageResponse
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
| <code>body</code> | <code>[CustomMessageUpdateRequest](src/models/custom-message-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMessages.customMessagesUpdate(request)`

- **OnSuccess**: <code>[CustomMessageResponse](src/models/custom-message-response.ts)</code>
- **OnError**: throws <code>[CustomMessages.CustomMessagesUpdateError](src/resources/custom-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMessages.customMessagesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomMessageResponse, CustomMessages.CustomMessagesUpdateError&gt;</code>, with `result.value` of type <code>[CustomMessageResponse](src/models/custom-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dashboards

> Source: [Dashboards](src/resources/dashboards.ts)

<details>
<summary><code>postGetDashboard(request: Dashboards.PostGetDashboardRequest, options?: RequestOptions): ApiPromise&lt;DashboardTokenResponse, Dashboards.PostGetDashboardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

METHOD: POST
URL: /dashboard/fetch_info
ARGUMENTS: None
RETURNS: Dashboard info for embedding

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboards.postGetDashboard({ dashboardName: "some example string" });
  // TODO: Handle 'response' of type DashboardTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Dashboards.PostGetDashboardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dashboards.postGetDashboard({
  dashboardName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DashboardTokenResponse
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
| <code>dashboardName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboards.postGetDashboard(request)`

- **OnSuccess**: <code>[DashboardTokenResponse](src/models/dashboard-token-response.ts)</code>
- **OnError**: throws <code>[Dashboards.PostGetDashboardError](src/resources/dashboards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dashboards.postGetDashboard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DashboardTokenResponse, Dashboards.PostGetDashboardError&gt;</code>, with `result.value` of type <code>[DashboardTokenResponse](src/models/dashboard-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postListDashboard(request: Dashboards.PostListDashboardRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDashboardResponse, Dashboards.PostListDashboardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

METHOD: POST
URL: /dashboard/list
ARGUMENTS: None
RETURNS: List of dashboards

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboards.postListDashboard({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: DashboardProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseDashboardResponse
} catch (err) {
  // TODO: Handle 'err' of type Dashboards.PostListDashboardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dashboards.postListDashboard({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: DashboardProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDashboardResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[DashboardProperties](src/models/dashboard-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy312](src/models/unions/order-by312.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields24](src/models/unions/fields24.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboards.postListDashboard(request)`

- **OnSuccess**: <code>[ListResponseDashboardResponse](src/models/list-response-dashboard-response.ts)</code>
- **OnError**: throws <code>[Dashboards.PostListDashboardError](src/resources/dashboards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dashboards.postListDashboard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDashboardResponse, Dashboards.PostListDashboardError&gt;</code>, with `result.value` of type <code>[ListResponseDashboardResponse](src/models/list-response-dashboard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSessionEventsDashboard(options?: RequestOptions): ApiPromise&lt;Dashboard, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

METHOD: POST
URL: /dashboard/session_events
ARGUMENTS: None
RETURNS: Dashboard info for embedding
DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboards.postSessionEventsDashboard();
  // TODO: Handle 'response' of type Dashboard
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
const result = await client.dashboards.postSessionEventsDashboard().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dashboard
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboards.postSessionEventsDashboard()`

- **OnSuccess**: <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dashboards.postSessionEventsDashboard().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dashboard, ApiError&gt;</code>, with `result.value` of type <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSessionSummaryDashboard(options?: RequestOptions): ApiPromise&lt;Dashboard, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

METHOD: POST
URL: /dashboard/session_summary
ARGUMENTS: None
RETURNS: Dashboard info for embedding
DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboards.postSessionSummaryDashboard();
  // TODO: Handle 'response' of type Dashboard
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
const result = await client.dashboards.postSessionSummaryDashboard().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dashboard
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboards.postSessionSummaryDashboard()`

- **OnSuccess**: <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dashboards.postSessionSummaryDashboard().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dashboard, ApiError&gt;</code>, with `result.value` of type <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSessionTransfersDashboard(options?: RequestOptions): ApiPromise&lt;Dashboard, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

METHOD: POST
URL: /dashboard/session_transfers
ARGUMENTS: None
RETURNS: Dashboard info for embedding
DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboards.postSessionTransfersDashboard();
  // TODO: Handle 'response' of type Dashboard
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
const result = await client.dashboards.postSessionTransfersDashboard().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dashboard
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboards.postSessionTransfersDashboard()`

- **OnSuccess**: <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dashboards.postSessionTransfersDashboard().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dashboard, ApiError&gt;</code>, with `result.value` of type <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSessionsDashboard(options?: RequestOptions): ApiPromise&lt;Dashboard, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

METHOD: POST
URL: /dashboard/sessions
ARGUMENTS: None
RETURNS: Dashboard info for embedding
DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboards.postSessionsDashboard();
  // TODO: Handle 'response' of type Dashboard
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
const result = await client.dashboards.postSessionsDashboard().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dashboard
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboards.postSessionsDashboard()`

- **OnSuccess**: <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dashboards.postSessionsDashboard().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dashboard, ApiError&gt;</code>, with `result.value` of type <code>[Dashboard](src/models/dashboard.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataSources

> Source: [DataSources](src/resources/data-sources.ts)

<details>
<summary><code>dataSourcesCreate(request: DataSources.DataSourcesCreateRequest, options?: RequestOptions): ApiPromise&lt;DataSourceDetailResponse, DataSources.DataSourcesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new data source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.dataSourcesCreate({
    body: { name: "some example string", chunk: true, text: "some example string" },
  });
  // TODO: Handle 'response' of type DataSourceDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DataSourcesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.dataSourcesCreate({
  body: { name: "some example string", chunk: true, text: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataSourceDetailResponse
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
| <code>body</code> | <code>[DataSourceCreateRequest](src/models/data-source-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.dataSourcesCreate(request)`

- **OnSuccess**: <code>[DataSourceDetailResponse](src/models/data-source-detail-response.ts)</code>
- **OnError**: throws <code>[DataSources.DataSourcesCreateError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.dataSourcesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataSourceDetailResponse, DataSources.DataSourcesCreateError&gt;</code>, with `result.value` of type <code>[DataSourceDetailResponse](src/models/data-source-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataSourcesDelete(request: DataSources.DataSourcesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DataSources.DataSourcesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a given data source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.dataSourcesDelete({
    dataSourceId: 1,
    reason: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DataSourcesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.dataSourcesDelete({
  dataSourceId: 1,
  reason: "some example string",
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
| <code>dataSourceId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.dataSourcesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DataSources.DataSourcesDeleteError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.dataSourcesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DataSources.DataSourcesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataSourcesGetById(request: DataSources.DataSourcesGetByIdRequest, options?: RequestOptions): ApiPromise&lt;DataSourceDetailResponse, DataSources.DataSourcesGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a given data source, including its text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.dataSourcesGetById({ dataSourceId: 1 });
  // TODO: Handle 'response' of type DataSourceDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DataSourcesGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.dataSourcesGetById({ dataSourceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataSourceDetailResponse
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
| <code>dataSourceId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.dataSourcesGetById(request)`

- **OnSuccess**: <code>[DataSourceDetailResponse](src/models/data-source-detail-response.ts)</code>
- **OnError**: throws <code>[DataSources.DataSourcesGetByIdError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.dataSourcesGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataSourceDetailResponse, DataSources.DataSourcesGetByIdError&gt;</code>, with `result.value` of type <code>[DataSourceDetailResponse](src/models/data-source-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataSourcesList(request: DataSources.DataSourcesListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDataSourceMetadataResponse, DataSources.DataSourcesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch metadata about all data sources, not including their text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.dataSourcesList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: DataSourceProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseDataSourceMetadataResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DataSourcesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.dataSourcesList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: DataSourceProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDataSourceMetadataResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[DataSourceProperties](src/models/data-source-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy4](src/models/unions/order-by4.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields4](src/models/unions/fields4.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.dataSourcesList(request)`

- **OnSuccess**: <code>[ListResponseDataSourceMetadataResponse](src/models/list-response-data-source-metadata-response.ts)</code>
- **OnError**: throws <code>[DataSources.DataSourcesListError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.dataSourcesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDataSourceMetadataResponse, DataSources.DataSourcesListError&gt;</code>, with `result.value` of type <code>[ListResponseDataSourceMetadataResponse](src/models/list-response-data-source-metadata-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dataSourcesUpdate(request: DataSources.DataSourcesUpdateRequest, options?: RequestOptions): ApiPromise&lt;DataSourceDetailResponse, DataSources.DataSourcesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing data source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.dataSourcesUpdate({
    body: { name: "some example string", chunk: true, id: 1, text: "some example string" },
  });
  // TODO: Handle 'response' of type DataSourceDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DataSourcesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.dataSourcesUpdate({
  body: { name: "some example string", chunk: true, id: 1, text: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataSourceDetailResponse
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
| <code>body</code> | <code>[DataSourceUpdateRequest](src/models/data-source-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.dataSourcesUpdate(request)`

- **OnSuccess**: <code>[DataSourceDetailResponse](src/models/data-source-detail-response.ts)</code>
- **OnError**: throws <code>[DataSources.DataSourcesUpdateError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.dataSourcesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataSourceDetailResponse, DataSources.DataSourcesUpdateError&gt;</code>, with `result.value` of type <code>[DataSourceDetailResponse](src/models/data-source-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Directory

> Source: [Directory](src/resources/directory.ts)

<details>
<summary><code>directoryMemberBulkLoad(request: Directory.DirectoryMemberBulkLoadRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Directory.DirectoryMemberBulkLoadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Load Directory Members: records with an id update that member, records without create.

Updates only touch fields the record carries: omitting extensions, contact_tags, or
comments leaves the stored values unchanged, while an explicit empty value clears them.
The whole payload is applied in one transaction. A record whose id matches no existing
member in the caller's organization, or an id appearing twice in the payload, fails the
upload with a 400 naming the offending record(s); nothing is written.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberBulkLoad({ file: new Uint8Array() });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberBulkLoadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberBulkLoad({ file: new Uint8Array() }).asApiResult();
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
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberBulkLoad(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Directory.DirectoryMemberBulkLoadError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberBulkLoad(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Directory.DirectoryMemberBulkLoadError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberCreate(request: Directory.DirectoryMemberCreateRequest, options?: RequestOptions): ApiPromise&lt;DirectoryMember, Directory.DirectoryMemberCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new member in the directory

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberCreate({
    body: { name: "some example string", type: "some example string" },
  });
  // TODO: Handle 'response' of type DirectoryMember
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberCreate({
  body: { name: "some example string", type: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DirectoryMember
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
| <code>responseFormat?</code> | <code>[DirectoryResponseFormat1](src/models/directory-response-format1.ts)</code> | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |
| <code>body</code> | <code>[DirectoryMemberCreate](src/models/directory-member-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberCreate(request)`

- **OnSuccess**: <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: throws <code>[Directory.DirectoryMemberCreateError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DirectoryMember, Directory.DirectoryMemberCreateError&gt;</code>, with `result.value` of type <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberDelete(request: Directory.DirectoryMemberDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Directory.DirectoryMemberDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a DirectoryMember.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberDelete({
    memberId: 1,
    comment: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberDelete({
  memberId: 1,
  comment: "some example string",
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
| <code>memberId</code> | <code>number</code> | - |
| <code>comment</code> | <code>string</code> | Comment stored in version history for this deletion |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Directory.DirectoryMemberDeleteError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Directory.DirectoryMemberDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberDownload(request: Directory.DirectoryMemberDownloadRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Directory.DirectoryMemberDownloadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the entire directory as a JSON file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberDownload();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberDownloadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberDownload().asApiResult();
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
| <code>responseFormat?</code> | <code>[DirectoryResponseFormat1](src/models/directory-response-format1.ts)</code> | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberDownload(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Directory.DirectoryMemberDownloadError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberDownload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Directory.DirectoryMemberDownloadError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberGetById(request: Directory.DirectoryMemberGetByIdRequest, options?: RequestOptions): ApiPromise&lt;DirectoryMember, Directory.DirectoryMemberGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a DirectoryMember by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberGetById({ memberId: 1 });
  // TODO: Handle 'response' of type DirectoryMember
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberGetById({ memberId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DirectoryMember
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
| <code>memberId</code> | <code>number</code> | - |
| <code>responseFormat?</code> | <code>[DirectoryResponseFormat1](src/models/directory-response-format1.ts)</code> | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberGetById(request)`

- **OnSuccess**: <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: throws <code>[Directory.DirectoryMemberGetByIdError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DirectoryMember, Directory.DirectoryMemberGetByIdError&gt;</code>, with `result.value` of type <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberHistory(request: Directory.DirectoryMemberHistoryRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDirectoryMemberHistoryResponse, Directory.DirectoryMemberHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get version history for a directory member (contact).
Version 1 is always the oldest; order_by_direction only controls response order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberHistory({ memberId: 1 });
  // TODO: Handle 'response' of type ListResponseDirectoryMemberHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberHistory({ memberId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDirectoryMemberHistoryResponse
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
| <code>memberId</code> | <code>number</code> | - |
| <code>page?</code> | <code>number</code> | Page number (0-based)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | Items per page<br>**Default**: 25 |
| <code>orderByDirection?</code> | <code>[OrderByDirection1Enum](src/models/order-by-direction1-enum.ts)</code> | Sort by oldest first (asc) or newest first (desc). Version 1 is always the oldest. |
| <code>responseFormat?</code> | <code>[DirectoryResponseFormat1](src/models/directory-response-format1.ts)</code> | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberHistory(request)`

- **OnSuccess**: <code>[ListResponseDirectoryMemberHistoryResponse](src/models/list-response-directory-member-history-response.ts)</code>
- **OnError**: throws <code>[Directory.DirectoryMemberHistoryError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDirectoryMemberHistoryResponse, Directory.DirectoryMemberHistoryError&gt;</code>, with `result.value` of type <code>[ListResponseDirectoryMemberHistoryResponse](src/models/list-response-directory-member-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberList(request: Directory.DirectoryMemberListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDirectoryMember, Directory.DirectoryMemberListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List directory members.

Filter by contact tags with `tags.<key>=<value>`. Repeat a key to match any of its
values; filters for different keys must all match. Unknown keys return no matches.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberList();
  // TODO: Handle 'response' of type ListResponseDirectoryMember
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDirectoryMember
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
| <code>includeDeleted?</code> | <code>boolean</code> | If true, include soft-deleted members in the list. Default excludes them. Ignored when status is explicitly supplied.<br>**Default**: false |
| <code>status?</code> | <code>[Status4](src/models/unions/status4.ts)</code> | Filter contacts by deletion status: all includes active and deleted contacts; active excludes deleted contacts; deleted includes only deleted contacts. When supplied, overrides include_deleted. When omitted, include_deleted controls inclusion. |
| <code>responseFormat?</code> | <code>[DirectoryResponseFormat1](src/models/directory-response-format1.ts)</code> | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |
| <code>page?</code> | <code>[Page25](src/models/unions/page25.ts)</code> | Page number (0-based) |
| <code>limit?</code> | <code>number</code> | Items per page<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[DirectoryMemberProperties](src/models/directory-member-properties.ts)[]</code> | Fields to search; aligns with search_field_values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values for search_fields in matching order |
| <code>orderBy?</code> | <code>[OrderBy3111](src/models/unions/order-by3111.ts)</code> | Field to order results by |
| <code>orderByDirection?</code> | <code>[OrderByDirection22](src/models/unions/order-by-direction22.ts)</code> | Direction to order results |
| <code>fields?</code> | <code>[Fields23](src/models/unions/fields23.ts)</code> | Fields to include in response |
| <code>startDatetime?</code> | <code>[StartDatetime29](src/models/unions/start-datetime29.ts)</code> | Start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime29](src/models/unions/end-datetime29.ts)</code> | End datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberList(request)`

- **OnSuccess**: <code>[ListResponseDirectoryMember](src/models/list-response-directory-member.ts)</code>
- **OnError**: throws <code>[Directory.DirectoryMemberListError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDirectoryMember, Directory.DirectoryMemberListError&gt;</code>, with `result.value` of type <code>[ListResponseDirectoryMember](src/models/list-response-directory-member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberRestore(request: Directory.DirectoryMemberRestoreRequest, options?: RequestOptions): ApiPromise&lt;DirectoryMember, Directory.DirectoryMemberRestoreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore a soft-deleted directory member.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberRestore({ memberId: 1, body: {} });
  // TODO: Handle 'response' of type DirectoryMember
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberRestoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberRestore({ memberId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DirectoryMember
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
| <code>memberId</code> | <code>number</code> | - |
| <code>responseFormat?</code> | <code>[DirectoryResponseFormat6](src/models/directory-response-format6.ts)</code> | Directory response format for the restored member. |
| <code>body</code> | <code>[DirectoryMemberRestore](src/models/directory-member-restore.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberRestore(request)`

- **OnSuccess**: <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: throws <code>[Directory.DirectoryMemberRestoreError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberRestore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DirectoryMember, Directory.DirectoryMemberRestoreError&gt;</code>, with `result.value` of type <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberTestExtension(request: Directory.DirectoryMemberTestExtensionRequest, options?: RequestOptions): ApiPromise&lt;DirectoryMemberTestResponse, Directory.DirectoryMemberTestExtensionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test directory member extension at a specific timestamp and language.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberTestExtension({
    memberId: 1,
    timestamp: "some example string",
  });
  // TODO: Handle 'response' of type DirectoryMemberTestResponse
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberTestExtensionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberTestExtension({
  memberId: 1,
  timestamp: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DirectoryMemberTestResponse
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
| <code>memberId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>string</code> | Timestamp for test in ISO 8601 format (e.g., 2025-12-04T14:29:39) |
| <code>languageCode?</code> | <code>[LanguageCode2](src/models/unions/language-code2.ts)</code> | Optional language code for test |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberTestExtension(request)`

- **OnSuccess**: <code>[DirectoryMemberTestResponse](src/models/directory-member-test-response.ts)</code>
- **OnError**: throws <code>[Directory.DirectoryMemberTestExtensionError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberTestExtension(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DirectoryMemberTestResponse, Directory.DirectoryMemberTestExtensionError&gt;</code>, with `result.value` of type <code>[DirectoryMemberTestResponse](src/models/directory-member-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>directoryMemberUpdate(request: Directory.DirectoryMemberUpdateRequest, options?: RequestOptions): ApiPromise&lt;DirectoryMember, Directory.DirectoryMemberUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a DirectoryMember.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.directory.directoryMemberUpdate({
    memberId: 1,
    body: { name: "some example string", type: "some example string", id: 1 },
  });
  // TODO: Handle 'response' of type DirectoryMember
} catch (err) {
  // TODO: Handle 'err' of type Directory.DirectoryMemberUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.directory.directoryMemberUpdate({
  memberId: 1,
  body: { name: "some example string", type: "some example string", id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DirectoryMember
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
| <code>memberId</code> | <code>number</code> | - |
| <code>responseFormat?</code> | <code>[DirectoryResponseFormat1](src/models/directory-response-format1.ts)</code> | Directory response format: normalized (default) strips @hours and formats times; raw returns stored @hours values. |
| <code>body</code> | <code>[DirectoryMemberUpdate](src/models/directory-member-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.directory.directoryMemberUpdate(request)`

- **OnSuccess**: <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: throws <code>[Directory.DirectoryMemberUpdateError](src/resources/directory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.directory.directoryMemberUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DirectoryMember, Directory.DirectoryMemberUpdateError&gt;</code>, with `result.value` of type <code>[DirectoryMember](src/models/directory-member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>eventsList(request: Events.EventsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseEvent, Events.EventsListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.eventsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseEvent
} catch (err) {
  // TODO: Handle 'err' of type Events.EventsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.eventsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseEvent
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[EventProperties](src/models/event-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy5](src/models/unions/order-by5.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields5](src/models/unions/fields5.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.eventsList(request)`

- **OnSuccess**: <code>[ListResponseEvent](src/models/list-response-event.ts)</code>
- **OnError**: throws <code>[Events.EventsListError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.eventsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseEvent, Events.EventsListError&gt;</code>, with `result.value` of type <code>[ListResponseEvent](src/models/list-response-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Incidents

> Source: [Incidents](src/resources/incidents.ts)

<details>
<summary><code>incidentCreate(request: Incidents.IncidentCreateRequestParams, options?: RequestOptions): ApiPromise&lt;IncidentResponse, Incidents.IncidentCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new incident

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.incidentCreate({
    body: {
      description: "some example string",
      startDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      resolutionDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      impactCategory: "some example string",
      sessionsImpacted: 1,
      markdown: "some example string",
    },
  });
  // TODO: Handle 'response' of type IncidentResponse
} catch (err) {
  // TODO: Handle 'err' of type Incidents.IncidentCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents.incidentCreate({
  body: {
    description: "some example string",
    startDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    resolutionDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    impactCategory: "some example string",
    sessionsImpacted: 1,
    markdown: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncidentResponse
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
| <code>body</code> | <code>[IncidentCreateRequest](src/models/incident-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.incidentCreate(request)`

- **OnSuccess**: <code>[IncidentResponse](src/models/incident-response.ts)</code>
- **OnError**: throws <code>[Incidents.IncidentCreateError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.incidentCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncidentResponse, Incidents.IncidentCreateError&gt;</code>, with `result.value` of type <code>[IncidentResponse](src/models/incident-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incidentDelete(request: Incidents.IncidentDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Incidents.IncidentDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an incident by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.incidentDelete({ incidentId: 1, reason: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Incidents.IncidentDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents.incidentDelete({
  incidentId: 1,
  reason: "some example string",
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
| <code>incidentId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.incidentDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Incidents.IncidentDeleteError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.incidentDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Incidents.IncidentDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incidentGetById(request: Incidents.IncidentGetByIdRequest, options?: RequestOptions): ApiPromise&lt;IncidentResponse, Incidents.IncidentGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get incident by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.incidentGetById({ incidentId: 1 });
  // TODO: Handle 'response' of type IncidentResponse
} catch (err) {
  // TODO: Handle 'err' of type Incidents.IncidentGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents.incidentGetById({ incidentId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncidentResponse
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
| <code>incidentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.incidentGetById(request)`

- **OnSuccess**: <code>[IncidentResponse](src/models/incident-response.ts)</code>
- **OnError**: throws <code>[Incidents.IncidentGetByIdError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.incidentGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncidentResponse, Incidents.IncidentGetByIdError&gt;</code>, with `result.value` of type <code>[IncidentResponse](src/models/incident-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incidentGetOrganizations(options?: RequestOptions): ApiPromise&lt;IncidentOrganizationResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all organizations

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.incidentGetOrganizations();
  // TODO: Handle 'response' of type IncidentOrganizationResponse[]
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
const result = await client.incidents.incidentGetOrganizations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncidentOrganizationResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.incidentGetOrganizations()`

- **OnSuccess**: <code>[IncidentOrganizationResponse](src/models/incident-organization-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.incidents.incidentGetOrganizations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncidentOrganizationResponse[], ApiError&gt;</code>, with `result.value` of type <code>[IncidentOrganizationResponse](src/models/incident-organization-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incidentList(request: Incidents.IncidentListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseIncidentResponse, Incidents.IncidentListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List service incidents with pagination and filtering

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.incidentList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseIncidentResponse
} catch (err) {
  // TODO: Handle 'err' of type Incidents.IncidentListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents.incidentList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseIncidentResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[IncidentProperties](src/models/incident-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy7](src/models/unions/order-by7.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields7](src/models/unions/fields7.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.incidentList(request)`

- **OnSuccess**: <code>[ListResponseIncidentResponse](src/models/list-response-incident-response.ts)</code>
- **OnError**: throws <code>[Incidents.IncidentListError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.incidentList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseIncidentResponse, Incidents.IncidentListError&gt;</code>, with `result.value` of type <code>[ListResponseIncidentResponse](src/models/list-response-incident-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incidentUpdate(request: Incidents.IncidentUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;IncidentResponse, Incidents.IncidentUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing incident

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incidents.incidentUpdate({
    body: {
      description: "some example string",
      startDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      resolutionDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      impactCategory: "some example string",
      sessionsImpacted: 1,
      markdown: "some example string",
      id: 1,
    },
  });
  // TODO: Handle 'response' of type IncidentResponse
} catch (err) {
  // TODO: Handle 'err' of type Incidents.IncidentUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incidents.incidentUpdate({
  body: {
    description: "some example string",
    startDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    resolutionDatetime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    impactCategory: "some example string",
    sessionsImpacted: 1,
    markdown: "some example string",
    id: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncidentResponse
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
| <code>body</code> | <code>[IncidentUpdateRequest](src/models/incident-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incidents.incidentUpdate(request)`

- **OnSuccess**: <code>[IncidentResponse](src/models/incident-response.ts)</code>
- **OnError**: throws <code>[Incidents.IncidentUpdateError](src/resources/incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incidents.incidentUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncidentResponse, Incidents.IncidentUpdateError&gt;</code>, with `result.value` of type <code>[IncidentResponse](src/models/incident-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsightsApi

> Source: [InsightsApi](src/resources/insights-api.ts)

<details>
<summary><code>insightsList(request: InsightsApi.InsightsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseInsightsOutput, InsightsApi.InsightsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the evaluated insights for sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsApi.insightsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseInsightsOutput
} catch (err) {
  // TODO: Handle 'err' of type InsightsApi.InsightsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsApi.insightsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseInsightsOutput
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[InsightsProperties](src/models/insights-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy8](src/models/unions/order-by8.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields8](src/models/unions/fields8.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsApi.insightsList(request)`

- **OnSuccess**: <code>[ListResponseInsightsOutput](src/models/list-response-insights-output.ts)</code>
- **OnError**: throws <code>[InsightsApi.InsightsListError](src/resources/insights-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsApi.insightsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseInsightsOutput, InsightsApi.InsightsListError&gt;</code>, with `result.value` of type <code>[ListResponseInsightsOutput](src/models/list-response-insights-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsightsFolders

> Source: [InsightsFolders](src/resources/insights-folders.ts)

<details>
<summary><code>insightsFolderCreate(request: InsightsFolders.InsightsFolderCreateRequest, options?: RequestOptions): ApiPromise&lt;ResponseInsightsFolderCreate, InsightsFolders.InsightsFolderCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsFolderCreate({
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type ResponseInsightsFolderCreate
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsFolderCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsFolderCreate({
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseInsightsFolderCreate
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
| <code>body</code> | <code>[InsightsFolderInput](src/models/insights-folder-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsFolderCreate(request)`

- **OnSuccess**: <code>[ResponseInsightsFolderCreate](src/models/unions/response-insights-folder-create.ts)</code>
- **OnError**: throws <code>[InsightsFolders.InsightsFolderCreateError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsFolderCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseInsightsFolderCreate, InsightsFolders.InsightsFolderCreateError&gt;</code>, with `result.value` of type <code>[ResponseInsightsFolderCreate](src/models/unions/response-insights-folder-create.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsFolderDelete(request: InsightsFolders.InsightsFolderDeleteRequest, options?: RequestOptions): ApiPromise&lt;boolean, InsightsFolders.InsightsFolderDeleteError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsFolderDelete({ folderId: 1 });
  // TODO: Handle 'response' of type boolean
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsFolderDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsFolderDelete({ folderId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean
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
| <code>folderId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsFolderDelete(request)`

- **OnSuccess**: <code>boolean</code>
- **OnError**: throws <code>[InsightsFolders.InsightsFolderDeleteError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsFolderDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean, InsightsFolders.InsightsFolderDeleteError&gt;</code>, with `result.value` of type <code>boolean</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsFolderGetById(request: InsightsFolders.InsightsFolderGetByIdRequest, options?: RequestOptions): ApiPromise&lt;FolderDetails, InsightsFolders.InsightsFolderGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsFolderGetById({ folderId: 1 });
  // TODO: Handle 'response' of type FolderDetails
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsFolderGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsFolderGetById({ folderId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderDetails
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
| <code>folderId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsFolderGetById(request)`

- **OnSuccess**: <code>[FolderDetails](src/models/folder-details.ts)</code>
- **OnError**: throws <code>[InsightsFolders.InsightsFolderGetByIdError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsFolderGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderDetails, InsightsFolders.InsightsFolderGetByIdError&gt;</code>, with `result.value` of type <code>[FolderDetails](src/models/folder-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsFolderList(request: InsightsFolders.InsightsFolderListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseInsightsFolder, InsightsFolders.InsightsFolderListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsFolderList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: InsightsFolderProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseInsightsFolder
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsFolderListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsFolderList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: InsightsFolderProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseInsightsFolder
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[InsightsFolderProperties](src/models/insights-folder-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy9](src/models/unions/order-by9.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields9](src/models/unions/fields9.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsFolderList(request)`

- **OnSuccess**: <code>[ListResponseInsightsFolder](src/models/list-response-insights-folder.ts)</code>
- **OnError**: throws <code>[InsightsFolders.InsightsFolderListError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsFolderList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseInsightsFolder, InsightsFolders.InsightsFolderListError&gt;</code>, with `result.value` of type <code>[ListResponseInsightsFolder](src/models/list-response-insights-folder.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsFolderUpdate(request: InsightsFolders.InsightsFolderUpdateRequest, options?: RequestOptions): ApiPromise&lt;InsightsFolder, InsightsFolders.InsightsFolderUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsFolderUpdate({
    folderId: 1,
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type InsightsFolder
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsFolderUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsFolderUpdate({
  folderId: 1,
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsFolder
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
| <code>folderId</code> | <code>number</code> | - |
| <code>body</code> | <code>[InsightsFolderInput](src/models/insights-folder-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsFolderUpdate(request)`

- **OnSuccess**: <code>[InsightsFolder](src/models/insights-folder.ts)</code>
- **OnError**: throws <code>[InsightsFolders.InsightsFolderUpdateError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsFolderUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsFolder, InsightsFolders.InsightsFolderUpdateError&gt;</code>, with `result.value` of type <code>[InsightsFolder](src/models/insights-folder.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsFolderUploadFile(request: InsightsFolders.InsightsFolderUploadFileRequest, options?: RequestOptions): ApiPromise&lt;InsightsUploadFile, InsightsFolders.InsightsFolderUploadFileError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsFolderUploadFile({
    folderId: 1,
    callId: "some example string",
  });
  // TODO: Handle 'response' of type InsightsUploadFile
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsFolderUploadFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsFolderUploadFile({
  folderId: 1,
  callId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsUploadFile
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
| <code>folderId</code> | <code>number</code> | - |
| <code>callId</code> | <code>string</code> | A unique identifier for the call |
| <code>agentNumber?</code> | <code>[AgentNumber1](src/models/unions/agent-number1.ts)</code> | The phone number or ID of the agent involved. |
| <code>customerNumber?</code> | <code>[CustomerNumber1](src/models/unions/customer-number1.ts)</code> | The phone number or ID of the customer. |
| <code>startTime?</code> | <code>[StartTime1](src/models/unions/start-time1.ts)</code> | The timestamp of the call's beginning |
| <code>endTime?</code> | <code>[EndTime1](src/models/unions/end-time1.ts)</code> | The timestamp of the call's end. |
| <code>duration?</code> | <code>[Duration2](src/models/unions/duration2.ts)</code> | The call duration in seconds. |
| <code>metadata?</code> | <code>[Metadata8](src/models/unions/metadata8.ts)</code> | - |
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsFolderUploadFile(request)`

- **OnSuccess**: <code>[InsightsUploadFile](src/models/insights-upload-file.ts)</code>
- **OnError**: throws <code>[InsightsFolders.InsightsFolderUploadFileError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsFolderUploadFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsUploadFile, InsightsFolders.InsightsFolderUploadFileError&gt;</code>, with `result.value` of type <code>[InsightsUploadFile](src/models/insights-upload-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsUploadListFiles(request: InsightsFolders.InsightsUploadListFilesRequest, options?: RequestOptions): ApiPromise&lt;ListResponseInsightsUploadFile, InsightsFolders.InsightsUploadListFilesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsUploadListFiles({
    folderId: 1,
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseInsightsUploadFile
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsUploadListFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsUploadListFiles({
  folderId: 1,
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseInsightsUploadFile
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
| <code>folderId</code> | <code>number</code> | - |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[InsightsUploadFileProperties](src/models/insights-upload-file-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy10](src/models/unions/order-by10.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields10](src/models/unions/fields10.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsUploadListFiles(request)`

- **OnSuccess**: <code>[ListResponseInsightsUploadFile](src/models/list-response-insights-upload-file.ts)</code>
- **OnError**: throws <code>[InsightsFolders.InsightsUploadListFilesError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsUploadListFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseInsightsUploadFile, InsightsFolders.InsightsUploadListFilesError&gt;</code>, with `result.value` of type <code>[ListResponseInsightsUploadFile](src/models/list-response-insights-upload-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsUploadMoveFiles(request: InsightsFolders.InsightsUploadMoveFilesRequest, options?: RequestOptions): ApiPromise&lt;InsightsUploadFile[], InsightsFolders.InsightsUploadMoveFilesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsFolders.insightsUploadMoveFiles({
    folderId: 1,
    body: { destinationFolderId: 1, fileIdList: [1] },
  });
  // TODO: Handle 'response' of type InsightsUploadFile[]
} catch (err) {
  // TODO: Handle 'err' of type InsightsFolders.InsightsUploadMoveFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsFolders.insightsUploadMoveFiles({
  folderId: 1,
  body: { destinationFolderId: 1, fileIdList: [1] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsUploadFile[]
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
| <code>folderId</code> | <code>number</code> | - |
| <code>body</code> | <code>[InsightsFolderFileMove](src/models/insights-folder-file-move.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsFolders.insightsUploadMoveFiles(request)`

- **OnSuccess**: <code>[InsightsUploadFile](src/models/insights-upload-file.ts)[]</code>
- **OnError**: throws <code>[InsightsFolders.InsightsUploadMoveFilesError](src/resources/insights-folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsFolders.insightsUploadMoveFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsUploadFile[], InsightsFolders.InsightsUploadMoveFilesError&gt;</code>, with `result.value` of type <code>[InsightsUploadFile](src/models/insights-upload-file.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsightsTools

> Source: [InsightsTools](src/resources/insights-tools.ts)

<details>
<summary><code>insightToolGetById(request: InsightsTools.InsightToolGetByIdRequest, options?: RequestOptions): ApiPromise&lt;InsightToolResponse, InsightsTools.InsightToolGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a InsightTool by Name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsTools.insightToolGetById({ toolId: "some example string" });
  // TODO: Handle 'response' of type InsightToolResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightsTools.InsightToolGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsTools.insightToolGetById({ toolId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightToolResponse
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
| <code>toolId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsTools.insightToolGetById(request)`

- **OnSuccess**: <code>[InsightToolResponse](src/models/insight-tool-response.ts)</code>
- **OnError**: throws <code>[InsightsTools.InsightToolGetByIdError](src/resources/insights-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsTools.insightToolGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightToolResponse, InsightsTools.InsightToolGetByIdError&gt;</code>, with `result.value` of type <code>[InsightToolResponse](src/models/insight-tool-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightToolGetDefinitions(options?: RequestOptions): ApiPromise&lt;InsightToolDefinition[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a InsightTool by Name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsTools.insightToolGetDefinitions();
  // TODO: Handle 'response' of type InsightToolDefinition[]
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
const result = await client.insightsTools.insightToolGetDefinitions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightToolDefinition[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsTools.insightToolGetDefinitions()`

- **OnSuccess**: <code>[InsightToolDefinition](src/models/insight-tool-definition.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.insightsTools.insightToolGetDefinitions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightToolDefinition[], ApiError&gt;</code>, with `result.value` of type <code>[InsightToolDefinition](src/models/insight-tool-definition.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightToolList(request: InsightsTools.InsightToolListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseInsightToolResponse, InsightsTools.InsightToolListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing insight_tools

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsTools.insightToolList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: InsightToolProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseInsightToolResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightsTools.InsightToolListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsTools.insightToolList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: InsightToolProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseInsightToolResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[InsightToolProperties](src/models/insight-tool-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy311](src/models/unions/order-by311.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields13](src/models/unions/fields13.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsTools.insightToolList(request)`

- **OnSuccess**: <code>[ListResponseInsightToolResponse](src/models/list-response-insight-tool-response.ts)</code>
- **OnError**: throws <code>[InsightsTools.InsightToolListError](src/resources/insights-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsTools.insightToolList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseInsightToolResponse, InsightsTools.InsightToolListError&gt;</code>, with `result.value` of type <code>[ListResponseInsightToolResponse](src/models/list-response-insight-tool-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsToolCreate(request: InsightsTools.InsightsToolCreateRequest, options?: RequestOptions): ApiPromise&lt;InsightToolResponse, InsightsTools.InsightsToolCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new insight tool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsTools.insightsToolCreate({
    body: {
      name: "some example string",
      description: "some example string",
      version: 1,
      toolArguments: {},
      insightToolDefinitionId: 1,
    },
  });
  // TODO: Handle 'response' of type InsightToolResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightsTools.InsightsToolCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsTools.insightsToolCreate({
  body: {
    name: "some example string",
    description: "some example string",
    version: 1,
    toolArguments: {},
    insightToolDefinitionId: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightToolResponse
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
| <code>body</code> | <code>[InsightToolInput](src/models/insight-tool-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsTools.insightsToolCreate(request)`

- **OnSuccess**: <code>[InsightToolResponse](src/models/insight-tool-response.ts)</code>
- **OnError**: throws <code>[InsightsTools.InsightsToolCreateError](src/resources/insights-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsTools.insightsToolCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightToolResponse, InsightsTools.InsightsToolCreateError&gt;</code>, with `result.value` of type <code>[InsightToolResponse](src/models/insight-tool-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsToolDelete(request: InsightsTools.InsightsToolDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, InsightsTools.InsightsToolDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Insights tool configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsTools.insightsToolDelete({ toolId: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type InsightsTools.InsightsToolDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsTools.insightsToolDelete({ toolId: 1 }).asApiResult();
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
| <code>toolId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsTools.insightsToolDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[InsightsTools.InsightsToolDeleteError](src/resources/insights-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsTools.insightsToolDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, InsightsTools.InsightsToolDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsToolTest(request: InsightsTools.InsightsToolTestRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, InsightsTools.InsightsToolTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run the saved tool against one session or uploaded file without persisting insights.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsTools.insightsToolTest({ body: { toolName: "some example string" } });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type InsightsTools.InsightsToolTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsTools.insightsToolTest({
  body: { toolName: "some example string" },
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
| <code>body</code> | <code>[InsightToolTestInput](src/models/insight-tool-test-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsTools.insightsToolTest(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[InsightsTools.InsightsToolTestError](src/resources/insights-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsTools.insightsToolTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, InsightsTools.InsightsToolTestError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsToolUpdate(request: InsightsTools.InsightsToolUpdateRequest, options?: RequestOptions): ApiPromise&lt;InsightToolResponse, InsightsTools.InsightsToolUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Insights tool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsTools.insightsToolUpdate({
    toolId: 1,
    body: {
      name: "some example string",
      description: "some example string",
      version: 1,
      toolArguments: {},
      insightToolDefinitionId: 1,
    },
  });
  // TODO: Handle 'response' of type InsightToolResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightsTools.InsightsToolUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsTools.insightsToolUpdate({
  toolId: 1,
  body: {
    name: "some example string",
    description: "some example string",
    version: 1,
    toolArguments: {},
    insightToolDefinitionId: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightToolResponse
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
| <code>toolId</code> | <code>number</code> | - |
| <code>body</code> | <code>[InsightToolInput](src/models/insight-tool-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsTools.insightsToolUpdate(request)`

- **OnSuccess**: <code>[InsightToolResponse](src/models/insight-tool-response.ts)</code>
- **OnError**: throws <code>[InsightsTools.InsightsToolUpdateError](src/resources/insights-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsTools.insightsToolUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightToolResponse, InsightsTools.InsightsToolUpdateError&gt;</code>, with `result.value` of type <code>[InsightToolResponse](src/models/insight-tool-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsightsWorkflows

> Source: [InsightsWorkflows](src/resources/insights-workflows.ts)

<details>
<summary><code>insightsWorkflowActivate(request: InsightsWorkflows.InsightsWorkflowActivateRequest, options?: RequestOptions): ApiPromise&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowActivateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate an InsightWorkflow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowActivate({
    workflowId: 1,
    body: {
      isAcknowledged: true,
      estimate: {
        backfillCount: 1,
        backfillDuration: 1.5,
        estimatedDailyCount: 1,
        estimatedDailyDuration: 1.5,
        estimatedDailyCost: 1.5,
        estimatedBackfillCost: 1.5,
      },
    },
  });
  // TODO: Handle 'response' of type InsightWorkflowOutput
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowActivateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowActivate({
  workflowId: 1,
  body: {
    isAcknowledged: true,
    estimate: {
      backfillCount: 1,
      backfillDuration: 1.5,
      estimatedDailyCount: 1,
      estimatedDailyDuration: 1.5,
      estimatedDailyCost: 1.5,
      estimatedBackfillCost: 1.5,
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightWorkflowOutput
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
| <code>workflowId</code> | <code>number</code> | - |
| <code>body</code> | <code>[InsightWorkflowActivate](src/models/insight-workflow-activate.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowActivate(request)`

- **OnSuccess**: <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowActivateError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowActivate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowActivateError&gt;</code>, with `result.value` of type <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowCreate(request: InsightsWorkflows.InsightsWorkflowCreateRequest, options?: RequestOptions): ApiPromise&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tool in the insights

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowCreate({
    body: {
      name: "some example string",
      source: "some example string",
      description: "some example string",
      insightToolIds: [1],
      conditions: {},
    },
  });
  // TODO: Handle 'response' of type InsightWorkflowOutput
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowCreate({
  body: {
    name: "some example string",
    source: "some example string",
    description: "some example string",
    insightToolIds: [1],
    conditions: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightWorkflowOutput
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
| <code>body</code> | <code>[InsightWorkflowInput](src/models/insight-workflow-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowCreate(request)`

- **OnSuccess**: <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowCreateError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowCreateError&gt;</code>, with `result.value` of type <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowDelete(request: InsightsWorkflows.InsightsWorkflowDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, InsightsWorkflows.InsightsWorkflowDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Insights workflow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowDelete({ workflowId: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowDelete({ workflowId: 1 }).asApiResult();
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
| <code>workflowId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowDeleteError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, InsightsWorkflows.InsightsWorkflowDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowExecutions(request: InsightsWorkflows.InsightsWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseInsightWorkflowExecutionOutput, InsightsWorkflows.InsightsWorkflowExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a workflow's execution rows.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowExecutions({
    workflowId: 1,
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: OrderBy.CreatedAt,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseInsightWorkflowExecutionOutput
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowExecutions({
  workflowId: 1,
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: OrderBy.CreatedAt,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseInsightWorkflowExecutionOutput
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
| <code>workflowId</code> | <code>number</code> | - |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[SearchField](src/models/search-field.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy12](src/models/unions/order-by12.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields12](src/models/unions/fields12.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowExecutions(request)`

- **OnSuccess**: <code>[ListResponseInsightWorkflowExecutionOutput](src/models/list-response-insight-workflow-execution-output.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowExecutionsError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseInsightWorkflowExecutionOutput, InsightsWorkflows.InsightsWorkflowExecutionsError&gt;</code>, with `result.value` of type <code>[ListResponseInsightWorkflowExecutionOutput](src/models/list-response-insight-workflow-execution-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowExecutionsSummary(request: InsightsWorkflows.InsightsWorkflowExecutionsSummaryRequest, options?: RequestOptions): ApiPromise&lt;InsightWorkflowExecutionSummary, InsightsWorkflows.InsightsWorkflowExecutionsSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return how many of a workflow's executions are in each status, optionally
within a created_at range (for example, since the workflow's `updated_at`
passed as `start_datetime`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowExecutionsSummary({
    workflowId: 1,
    startDatetime: "2026-08-27T13:57:00.123456+00:00",
    endDatetime: "2026-08-28T00:00:00Z",
  });
  // TODO: Handle 'response' of type InsightWorkflowExecutionSummary
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowExecutionsSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowExecutionsSummary({
  workflowId: 1,
  startDatetime: "2026-08-27T13:57:00.123456+00:00",
  endDatetime: "2026-08-28T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightWorkflowExecutionSummary
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
| <code>workflowId</code> | <code>number</code> | - |
| <code>startDatetime?</code> | <code>[StartDatetime18](src/models/unions/start-datetime18.ts)</code> | ISO 8601 start datetime (inclusive) for created_at filtering |
| <code>endDatetime?</code> | <code>[EndDatetime18](src/models/unions/end-datetime18.ts)</code> | ISO 8601 end datetime (exclusive) for created_at filtering |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowExecutionsSummary(request)`

- **OnSuccess**: <code>[InsightWorkflowExecutionSummary](src/models/insight-workflow-execution-summary.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowExecutionsSummaryError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowExecutionsSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightWorkflowExecutionSummary, InsightsWorkflows.InsightsWorkflowExecutionsSummaryError&gt;</code>, with `result.value` of type <code>[InsightWorkflowExecutionSummary](src/models/insight-workflow-execution-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowFiles(request: InsightsWorkflows.InsightsWorkflowFilesRequest, options?: RequestOptions): ApiPromise&lt;ListResponseWorkflowFileRow, InsightsWorkflows.InsightsWorkflowFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the uploaded files under a workflow, one row per file, with each
tool's results grouped into a ``results`` dict keyed by tool name.

Files come from the workflow's execution queue, so pending, processing and
failed files show up too, not just completed ones. A file that was queued
more than once appears only once. Insights reused from another workflow
still show up here.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowFiles({
    workflowId: 1,
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: OrderBy2.UploadFileId,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseWorkflowFileRow
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowFiles({
  workflowId: 1,
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: OrderBy2.UploadFileId,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseWorkflowFileRow
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
| <code>workflowId</code> | <code>number</code> | - |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[SearchField2](src/models/search-field2.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy211](src/models/unions/order-by211.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowFiles(request)`

- **OnSuccess**: <code>[ListResponseWorkflowFileRow](src/models/list-response-workflow-file-row.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowFilesError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseWorkflowFileRow, InsightsWorkflows.InsightsWorkflowFilesError&gt;</code>, with `result.value` of type <code>[ListResponseWorkflowFileRow](src/models/list-response-workflow-file-row.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowGetById(request: InsightsWorkflows.InsightsWorkflowGetByIdRequest, options?: RequestOptions): ApiPromise&lt;InsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a InsightWorkflow by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowGetById({ workflowId: 1 });
  // TODO: Handle 'response' of type InsightWorkflowResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowGetById({ workflowId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightWorkflowResponse
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
| <code>workflowId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowGetById(request)`

- **OnSuccess**: <code>[InsightWorkflowResponse](src/models/insight-workflow-response.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowGetByIdError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowGetByIdError&gt;</code>, with `result.value` of type <code>[InsightWorkflowResponse](src/models/insight-workflow-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowInactivate(request: InsightsWorkflows.InsightsWorkflowInactivateRequest, options?: RequestOptions): ApiPromise&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowInactivateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inactivate an InsightWorkflow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowInactivate({ workflowId: 1 });
  // TODO: Handle 'response' of type InsightWorkflowOutput
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowInactivateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowInactivate({ workflowId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightWorkflowOutput
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
| <code>workflowId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowInactivate(request)`

- **OnSuccess**: <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowInactivateError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowInactivate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowInactivateError&gt;</code>, with `result.value` of type <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowList(request: InsightsWorkflows.InsightsWorkflowListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseInsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing insight_workflows

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: InsightWorkflowProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseInsightWorkflowResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: InsightWorkflowProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseInsightWorkflowResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[InsightWorkflowProperties](src/models/insight-workflow-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy111](src/models/unions/order-by111.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields11](src/models/unions/fields11.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowList(request)`

- **OnSuccess**: <code>[ListResponseInsightWorkflowResponse](src/models/list-response-insight-workflow-response.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowListError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseInsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowListError&gt;</code>, with `result.value` of type <code>[ListResponseInsightWorkflowResponse](src/models/list-response-insight-workflow-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowQueueWork(request: InsightsWorkflows.InsightsWorkflowQueueWorkRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, InsightsWorkflows.InsightsWorkflowQueueWorkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually queue sessions for insights workflow evaluation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowQueueWork({
    body: { workflowName: "some example string" },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowQueueWorkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowQueueWork({
  body: { workflowName: "some example string" },
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
| <code>body</code> | <code>[InsightsWorkflowQueueSession](src/models/insights-workflow-queue-session.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowQueueWork(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowQueueWorkError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowQueueWork(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, InsightsWorkflows.InsightsWorkflowQueueWorkError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowSessions(request: InsightsWorkflows.InsightsWorkflowSessionsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseWorkflowSessionRow, InsightsWorkflows.InsightsWorkflowSessionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the sessions under a workflow, one row per session, with each tool's
results grouped into a ``results`` dict keyed by tool name.

Sessions come from the workflow's execution queue, so pending, processing and
failed sessions show up too, not just completed ones. A session that was
queued more than once appears only once. Insights reused from another
workflow still show up here.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowSessions({
    workflowId: 1,
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: OrderBy1.SessionId,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseWorkflowSessionRow
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowSessionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowSessions({
  workflowId: 1,
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: OrderBy1.SessionId,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseWorkflowSessionRow
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
| <code>workflowId</code> | <code>number</code> | - |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[SearchField1](src/models/search-field1.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy13](src/models/unions/order-by13.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowSessions(request)`

- **OnSuccess**: <code>[ListResponseWorkflowSessionRow](src/models/list-response-workflow-session-row.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowSessionsError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowSessions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseWorkflowSessionRow, InsightsWorkflows.InsightsWorkflowSessionsError&gt;</code>, with `result.value` of type <code>[ListResponseWorkflowSessionRow](src/models/list-response-workflow-session-row.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insightsWorkflowUpdate(request: InsightsWorkflows.InsightsWorkflowUpdateRequest, options?: RequestOptions): ApiPromise&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a InsightWorkflow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsWorkflows.insightsWorkflowUpdate({
    workflowId: 1,
    body: {
      name: "some example string",
      source: "some example string",
      description: "some example string",
      insightToolIds: [1],
      conditions: {},
    },
  });
  // TODO: Handle 'response' of type InsightWorkflowOutput
} catch (err) {
  // TODO: Handle 'err' of type InsightsWorkflows.InsightsWorkflowUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsWorkflows.insightsWorkflowUpdate({
  workflowId: 1,
  body: {
    name: "some example string",
    source: "some example string",
    description: "some example string",
    insightToolIds: [1],
    conditions: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightWorkflowOutput
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
| <code>workflowId</code> | <code>number</code> | - |
| <code>body</code> | <code>[InsightWorkflowInput](src/models/insight-workflow-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsWorkflows.insightsWorkflowUpdate(request)`

- **OnSuccess**: <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: throws <code>[InsightsWorkflows.InsightsWorkflowUpdateError](src/resources/insights-workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsWorkflows.insightsWorkflowUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowUpdateError&gt;</code>, with `result.value` of type <code>[InsightWorkflowOutput](src/models/insight-workflow-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LanguageGroups

> Source: [LanguageGroups](src/resources/language-groups.ts)

<details>
<summary><code>languageGroupsCreate(request: LanguageGroups.LanguageGroupsCreateRequest, options?: RequestOptions): ApiPromise&lt;LanguageGroupResponse, LanguageGroups.LanguageGroupsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated alias for `POST /api/v1/voice_groups/`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.languageGroups.languageGroupsCreate({
    body: {
      name: "some example string",
      languageConfigs: [
        {
          languageCode: LanguageCode1.YueHk,
          voiceProvider: TtsProvider2.OpenAi,
          voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
          dtmfCode: 1,
        },
      ],
      skipCurrentLanguageInMessage: true,
    },
  });
  // TODO: Handle 'response' of type LanguageGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type LanguageGroups.LanguageGroupsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageGroups.languageGroupsCreate({
  body: {
    name: "some example string",
    languageConfigs: [
      {
        languageCode: LanguageCode1.YueHk,
        voiceProvider: TtsProvider2.OpenAi,
        voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
        dtmfCode: 1,
      },
    ],
    skipCurrentLanguageInMessage: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LanguageGroupResponse
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
| <code>body</code> | <code>[LanguageGroupCreateRequest](src/models/language-group-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageGroups.languageGroupsCreate(request)`

- **OnSuccess**: <code>[LanguageGroupResponse](src/models/language-group-response.ts)</code>
- **OnError**: throws <code>[LanguageGroups.LanguageGroupsCreateError](src/resources/language-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageGroups.languageGroupsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LanguageGroupResponse, LanguageGroups.LanguageGroupsCreateError&gt;</code>, with `result.value` of type <code>[LanguageGroupResponse](src/models/language-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>languageGroupsCreateVoiceSample(request: LanguageGroups.LanguageGroupsCreateVoiceSampleRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, LanguageGroups.LanguageGroupsCreateVoiceSampleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated alias for `POST /api/v1/voice_groups/voices/sample`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.languageGroups.languageGroupsCreateVoiceSample({
    body: {
      languageCode: LanguageCode1.YueHk,
      voiceProvider: TtsProvider2.OpenAi,
      voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
    },
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type LanguageGroups.LanguageGroupsCreateVoiceSampleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageGroups.languageGroupsCreateVoiceSample({
  body: {
    languageCode: LanguageCode1.YueHk,
    voiceProvider: TtsProvider2.OpenAi,
    voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
  },
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
| <code>body</code> | <code>[LanguageSampleCreateRequest](src/models/language-sample-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageGroups.languageGroupsCreateVoiceSample(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[LanguageGroups.LanguageGroupsCreateVoiceSampleError](src/resources/language-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageGroups.languageGroupsCreateVoiceSample(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, LanguageGroups.LanguageGroupsCreateVoiceSampleError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>languageGroupsDelete(request: LanguageGroups.LanguageGroupsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, LanguageGroups.LanguageGroupsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated alias for `DELETE /api/v1/voice_groups/{voice_group_id}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.languageGroups.languageGroupsDelete({
    languageGroupId: 1,
    reason: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type LanguageGroups.LanguageGroupsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageGroups.languageGroupsDelete({
  languageGroupId: 1,
  reason: "some example string",
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
| <code>languageGroupId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageGroups.languageGroupsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[LanguageGroups.LanguageGroupsDeleteError](src/resources/language-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageGroups.languageGroupsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, LanguageGroups.LanguageGroupsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>languageGroupsGetById(request: LanguageGroups.LanguageGroupsGetByIdRequest, options?: RequestOptions): ApiPromise&lt;LanguageGroupResponse, LanguageGroups.LanguageGroupsGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated alias for `GET /api/v1/voice_groups/{voice_group_id}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.languageGroups.languageGroupsGetById({ languageGroupId: 1 });
  // TODO: Handle 'response' of type LanguageGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type LanguageGroups.LanguageGroupsGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageGroups.languageGroupsGetById({ languageGroupId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LanguageGroupResponse
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
| <code>languageGroupId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageGroups.languageGroupsGetById(request)`

- **OnSuccess**: <code>[LanguageGroupResponse](src/models/language-group-response.ts)</code>
- **OnError**: throws <code>[LanguageGroups.LanguageGroupsGetByIdError](src/resources/language-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageGroups.languageGroupsGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LanguageGroupResponse, LanguageGroups.LanguageGroupsGetByIdError&gt;</code>, with `result.value` of type <code>[LanguageGroupResponse](src/models/language-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>languageGroupsList(request: LanguageGroups.LanguageGroupsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseLanguageGroupResponse, LanguageGroups.LanguageGroupsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated alias for `GET /api/v1/voice_groups/`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.languageGroups.languageGroupsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: LanguageGroupProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseLanguageGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type LanguageGroups.LanguageGroupsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageGroups.languageGroupsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: LanguageGroupProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseLanguageGroupResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[LanguageGroupProperties](src/models/language-group-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy315](src/models/unions/order-by315.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields27](src/models/unions/fields27.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageGroups.languageGroupsList(request)`

- **OnSuccess**: <code>[ListResponseLanguageGroupResponse](src/models/list-response-language-group-response.ts)</code>
- **OnError**: throws <code>[LanguageGroups.LanguageGroupsListError](src/resources/language-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageGroups.languageGroupsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseLanguageGroupResponse, LanguageGroups.LanguageGroupsListError&gt;</code>, with `result.value` of type <code>[ListResponseLanguageGroupResponse](src/models/list-response-language-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>languageGroupsUpdate(request: LanguageGroups.LanguageGroupsUpdateRequest, options?: RequestOptions): ApiPromise&lt;LanguageGroupResponse, LanguageGroups.LanguageGroupsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated alias for `PUT /api/v1/voice_groups/`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.languageGroups.languageGroupsUpdate({
    body: {
      name: "some example string",
      languageConfigs: [
        {
          languageCode: LanguageCode1.YueHk,
          voiceProvider: TtsProvider2.OpenAi,
          voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
          dtmfCode: 1,
        },
      ],
      skipCurrentLanguageInMessage: true,
      id: 1,
    },
  });
  // TODO: Handle 'response' of type LanguageGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type LanguageGroups.LanguageGroupsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageGroups.languageGroupsUpdate({
  body: {
    name: "some example string",
    languageConfigs: [
      {
        languageCode: LanguageCode1.YueHk,
        voiceProvider: TtsProvider2.OpenAi,
        voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
        dtmfCode: 1,
      },
    ],
    skipCurrentLanguageInMessage: true,
    id: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LanguageGroupResponse
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
| <code>body</code> | <code>[LanguageGroupUpdateRequest](src/models/language-group-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageGroups.languageGroupsUpdate(request)`

- **OnSuccess**: <code>[LanguageGroupResponse](src/models/language-group-response.ts)</code>
- **OnError**: throws <code>[LanguageGroups.LanguageGroupsUpdateError](src/resources/language-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageGroups.languageGroupsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LanguageGroupResponse, LanguageGroups.LanguageGroupsUpdateError&gt;</code>, with `result.value` of type <code>[LanguageGroupResponse](src/models/language-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/resources/organizations.ts)

<details>
<summary><code>organizationsCreate(request: Organizations.OrganizationsCreateRequest, options?: RequestOptions): ApiPromise&lt;OrganizationResponse, Organizations.OrganizationsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.organizationsCreate({
    logo: new Uint8Array(),
    displayName: "My Great Org",
    description: "An organization that does great things with agentic AI",
    domains: "mygreatorg.com,mygreatorg.org",
    samlProviderId: "saml.syllablesso",
  });
  // TODO: Handle 'response' of type OrganizationResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.OrganizationsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.organizationsCreate({
  logo: new Uint8Array(),
  displayName: "My Great Org",
  description: "An organization that does great things with agentic AI",
  domains: "mygreatorg.com,mygreatorg.org",
  samlProviderId: "saml.syllablesso",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationResponse
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
| <code>logo</code> | <code>FileInput</code> | The organization logo image file to upload. Must be a PNG file and 120x120 pixels. |
| <code>displayName</code> | <code>string</code> | The human-readable display name of the organization |
| <code>description?</code> | <code>[Description9](src/models/unions/description9.ts)</code> | Description of the organization |
| <code>domains?</code> | <code>[Domains](src/models/unions/domains.ts)</code> | Comma-delimited list of domains that users at the organization may have in their email addresses |
| <code>samlProviderId?</code> | <code>[SamlProviderId](src/models/unions/saml-provider-id.ts)</code> | SAML provider ID for user authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.organizationsCreate(request)`

- **OnSuccess**: <code>[OrganizationResponse](src/models/organization-response.ts)</code>
- **OnError**: throws <code>[Organizations.OrganizationsCreateError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.organizationsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationResponse, Organizations.OrganizationsCreateError&gt;</code>, with `result.value` of type <code>[OrganizationResponse](src/models/organization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationsDelete(request: Organizations.OrganizationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Organizations.OrganizationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the current organization and all its users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.organizationsDelete({
    deleteComments: "Deleted the organization because it was no longer needed",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Organizations.OrganizationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.organizationsDelete({
  deleteComments: "Deleted the organization because it was no longer needed",
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
| <code>deleteComments?</code> | <code>[DeleteComments](src/models/unions/delete-comments.ts)</code> | Comments explaining the deletion |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.organizationsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Organizations.OrganizationsDeleteError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.organizationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Organizations.OrganizationsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationsGet(options?: RequestOptions): ApiPromise&lt;OrganizationResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the current organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.organizationsGet();
  // TODO: Handle 'response' of type OrganizationResponse
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
const result = await client.organizations.organizationsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.organizationsGet()`

- **OnSuccess**: <code>[OrganizationResponse](src/models/organization-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.organizations.organizationsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationResponse, ApiError&gt;</code>, with `result.value` of type <code>[OrganizationResponse](src/models/organization-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationsUpdate(request: Organizations.OrganizationsUpdateRequest, options?: RequestOptions): ApiPromise&lt;OrganizationResponse, Organizations.OrganizationsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the current organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.organizationsUpdate({
    displayName: "My Great Org",
    description: "An organization that does great things with agentic AI",
    domains: "mygreatorg.com,mygreatorg.org",
    samlProviderId: "saml.syllablesso",
    updateComments: "Updated the organization to add a new domain",
  });
  // TODO: Handle 'response' of type OrganizationResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.OrganizationsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.organizationsUpdate({
  displayName: "My Great Org",
  description: "An organization that does great things with agentic AI",
  domains: "mygreatorg.com,mygreatorg.org",
  samlProviderId: "saml.syllablesso",
  updateComments: "Updated the organization to add a new domain",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationResponse
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
| <code>displayName</code> | <code>string</code> | The human-readable display name of the organization |
| <code>logo?</code> | <code>[Logo](src/models/unions/logo.ts)</code> | The organization logo image file to upload. Must be a PNG file and 120x120 pixels. If not provided, the logo will not be updated. |
| <code>description?</code> | <code>[Description9](src/models/unions/description9.ts)</code> | Description of the organization |
| <code>domains?</code> | <code>[Domains](src/models/unions/domains.ts)</code> | Comma-delimited list of domains that users at the organization may have in their email addresses |
| <code>samlProviderId?</code> | <code>[SamlProviderId](src/models/unions/saml-provider-id.ts)</code> | SAML provider ID for user authentication |
| <code>updateComments?</code> | <code>[UpdateComments](src/models/unions/update-comments.ts)</code> | Comments about the update |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.organizationsUpdate(request)`

- **OnSuccess**: <code>[OrganizationResponse](src/models/organization-response.ts)</code>
- **OnError**: throws <code>[Organizations.OrganizationsUpdateError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.organizationsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationResponse, Organizations.OrganizationsUpdateError&gt;</code>, with `result.value` of type <code>[OrganizationResponse](src/models/organization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OutboundCampaigns

> Source: [OutboundCampaigns](src/resources/outbound-campaigns.ts)

<details>
<summary><code>outboundCampaignCreate(request: OutboundCampaigns.OutboundCampaignCreateRequest, options?: RequestOptions): ApiPromise&lt;ResponseOutboundCampaignCreate, OutboundCampaigns.OutboundCampaignCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCampaigns.outboundCampaignCreate({
    body: {
      campaignName: "some example string",
      campaignVariables: { key: "some example string" },
      callerId: "some example string",
      activeDays: [DaysOfWeekEnum.Mon],
    },
  });
  // TODO: Handle 'response' of type ResponseOutboundCampaignCreate
} catch (err) {
  // TODO: Handle 'err' of type OutboundCampaigns.OutboundCampaignCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCampaigns.outboundCampaignCreate({
  body: {
    campaignName: "some example string",
    campaignVariables: { key: "some example string" },
    callerId: "some example string",
    activeDays: [DaysOfWeekEnum.Mon],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseOutboundCampaignCreate
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
| <code>body</code> | <code>[OutboundCampaignInput](src/models/outbound-campaign-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCampaigns.outboundCampaignCreate(request)`

- **OnSuccess**: <code>[ResponseOutboundCampaignCreate](src/models/unions/response-outbound-campaign-create.ts)</code>
- **OnError**: throws <code>[OutboundCampaigns.OutboundCampaignCreateError](src/resources/outbound-campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCampaigns.outboundCampaignCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseOutboundCampaignCreate, OutboundCampaigns.OutboundCampaignCreateError&gt;</code>, with `result.value` of type <code>[ResponseOutboundCampaignCreate](src/models/unions/response-outbound-campaign-create.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundCampaignDelete(request: OutboundCampaigns.OutboundCampaignDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, OutboundCampaigns.OutboundCampaignDeleteError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCampaigns.outboundCampaignDelete({ campaignId: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type OutboundCampaigns.OutboundCampaignDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCampaigns.outboundCampaignDelete({ campaignId: 1 }).asApiResult();
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
| <code>campaignId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCampaigns.outboundCampaignDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[OutboundCampaigns.OutboundCampaignDeleteError](src/resources/outbound-campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCampaigns.outboundCampaignDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, OutboundCampaigns.OutboundCampaignDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundCampaignGetById(request: OutboundCampaigns.OutboundCampaignGetByIdRequest, options?: RequestOptions): ApiPromise&lt;OutboundCampaign, OutboundCampaigns.OutboundCampaignGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCampaigns.outboundCampaignGetById({ campaignId: 1 });
  // TODO: Handle 'response' of type OutboundCampaign
} catch (err) {
  // TODO: Handle 'err' of type OutboundCampaigns.OutboundCampaignGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCampaigns.outboundCampaignGetById({ campaignId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OutboundCampaign
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
| <code>campaignId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCampaigns.outboundCampaignGetById(request)`

- **OnSuccess**: <code>[OutboundCampaign](src/models/outbound-campaign.ts)</code>
- **OnError**: throws <code>[OutboundCampaigns.OutboundCampaignGetByIdError](src/resources/outbound-campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCampaigns.outboundCampaignGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OutboundCampaign, OutboundCampaigns.OutboundCampaignGetByIdError&gt;</code>, with `result.value` of type <code>[OutboundCampaign](src/models/outbound-campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundCampaignList(request: OutboundCampaigns.OutboundCampaignListRequest, options?: RequestOptions): ApiPromise&lt;ResponseOutboundCampaignList, OutboundCampaigns.OutboundCampaignListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCampaigns.outboundCampaignList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ResponseOutboundCampaignList
} catch (err) {
  // TODO: Handle 'err' of type OutboundCampaigns.OutboundCampaignListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCampaigns.outboundCampaignList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseOutboundCampaignList
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[CampaignProperties](src/models/campaign-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy314](src/models/unions/order-by314.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields26](src/models/unions/fields26.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCampaigns.outboundCampaignList(request)`

- **OnSuccess**: <code>[ResponseOutboundCampaignList](src/models/unions/response-outbound-campaign-list.ts)</code>
- **OnError**: throws <code>[OutboundCampaigns.OutboundCampaignListError](src/resources/outbound-campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCampaigns.outboundCampaignList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseOutboundCampaignList, OutboundCampaigns.OutboundCampaignListError&gt;</code>, with `result.value` of type <code>[ResponseOutboundCampaignList](src/models/unions/response-outbound-campaign-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundCampaignUpdate(request: OutboundCampaigns.OutboundCampaignUpdateRequest, options?: RequestOptions): ApiPromise&lt;OutboundCampaign, OutboundCampaigns.OutboundCampaignUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCampaigns.outboundCampaignUpdate({
    campaignId: 1,
    body: {
      campaignName: "some example string",
      campaignVariables: { key: "some example string" },
      callerId: "some example string",
      activeDays: [DaysOfWeekEnum.Mon],
    },
  });
  // TODO: Handle 'response' of type OutboundCampaign
} catch (err) {
  // TODO: Handle 'err' of type OutboundCampaigns.OutboundCampaignUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCampaigns.outboundCampaignUpdate({
  campaignId: 1,
  body: {
    campaignName: "some example string",
    campaignVariables: { key: "some example string" },
    callerId: "some example string",
    activeDays: [DaysOfWeekEnum.Mon],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OutboundCampaign
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
| <code>campaignId</code> | <code>number</code> | - |
| <code>body</code> | <code>[OutboundCampaignInput](src/models/outbound-campaign-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCampaigns.outboundCampaignUpdate(request)`

- **OnSuccess**: <code>[OutboundCampaign](src/models/outbound-campaign.ts)</code>
- **OnError**: throws <code>[OutboundCampaigns.OutboundCampaignUpdateError](src/resources/outbound-campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCampaigns.outboundCampaignUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OutboundCampaign, OutboundCampaigns.OutboundCampaignUpdateError&gt;</code>, with `result.value` of type <code>[OutboundCampaign](src/models/outbound-campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OutboundBatches

> Source: [OutboundBatches](src/resources/outbound-batches.ts)

<details>
<summary><code>outboundBatchAdd(request: OutboundBatches.OutboundBatchAddRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchAddError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchAdd({
    batchId: "some example string",
    body: {
      referenceId: "some example string",
      target: "some example string",
      requestVariables: { key: "some example string" },
    },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchAdd({
  batchId: "some example string",
  body: {
    referenceId: "some example string",
    target: "some example string",
    requestVariables: { key: "some example string" },
  },
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
| <code>batchId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CommunicationRequest](src/models/communication-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchAdd(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchAddError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchAddError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchCreate(request: OutboundBatches.OutboundBatchCreateRequest, options?: RequestOptions): ApiPromise&lt;ResponseOutboundBatchCreate, OutboundBatches.OutboundBatchCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchCreate({
    body: { batchId: "some example string", campaignId: 1 },
  });
  // TODO: Handle 'response' of type ResponseOutboundBatchCreate
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchCreate({
  body: { batchId: "some example string", campaignId: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseOutboundBatchCreate
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
| <code>body</code> | <code>[CommunicationBatchInput](src/models/communication-batch-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchCreate(request)`

- **OnSuccess**: <code>[ResponseOutboundBatchCreate](src/models/unions/response-outbound-batch-create.ts)</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchCreateError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseOutboundBatchCreate, OutboundBatches.OutboundBatchCreateError&gt;</code>, with `result.value` of type <code>[ResponseOutboundBatchCreate](src/models/unions/response-outbound-batch-create.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchDelete(request: OutboundBatches.OutboundBatchDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchDeleteError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchDelete({
    batchId: "some example string",
    deleteReason: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchDelete({
  batchId: "some example string",
  deleteReason: "some example string",
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
| <code>batchId</code> | <code>string</code> | - |
| <code>deleteReason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchDeleteError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchGetById(request: OutboundBatches.OutboundBatchGetByIdRequest, options?: RequestOptions): ApiPromise&lt;BatchDetails, OutboundBatches.OutboundBatchGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchGetById({ batchId: "some example string" });
  // TODO: Handle 'response' of type BatchDetails
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchGetById({
  batchId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchDetails
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
| <code>batchId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchGetById(request)`

- **OnSuccess**: <code>[BatchDetails](src/models/batch-details.ts)</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchGetByIdError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchDetails, OutboundBatches.OutboundBatchGetByIdError&gt;</code>, with `result.value` of type <code>[BatchDetails](src/models/batch-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchList(request: OutboundBatches.OutboundBatchListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseCommunicationBatch, OutboundBatches.OutboundBatchListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseCommunicationBatch
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseCommunicationBatch
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[BatchProperties](src/models/batch-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy313](src/models/unions/order-by313.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields25](src/models/unions/fields25.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchList(request)`

- **OnSuccess**: <code>[ListResponseCommunicationBatch](src/models/list-response-communication-batch.ts)</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchListError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseCommunicationBatch, OutboundBatches.OutboundBatchListError&gt;</code>, with `result.value` of type <code>[ListResponseCommunicationBatch](src/models/list-response-communication-batch.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchRemove(request: OutboundBatches.OutboundBatchRemoveRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchRemoveError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchRemove({
    batchId: "some example string",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchRemove({
  batchId: "some example string",
  body: ["some example string"],
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
| <code>batchId</code> | <code>string</code> | - |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchRemove(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchRemoveError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchRemoveError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchResults(request: OutboundBatches.OutboundBatchResultsRequest, options?: RequestOptions): ApiPromise&lt;CommunicationRequestResult[], OutboundBatches.OutboundBatchResultsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchResults({ batchId: "some example string" });
  // TODO: Handle 'response' of type CommunicationRequestResult[]
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchResults({
  batchId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommunicationRequestResult[]
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
| <code>batchId</code> | <code>string</code> | - |
| <code>referenceId?</code> | <code>[ReferenceId](src/models/unions/reference-id.ts)</code> | - |
| <code>status?</code> | <code>[Status5](src/models/unions/status5.ts)</code> | - |
| <code>insightsStatus?</code> | <code>[InsightsStatus1](src/models/unions/insights-status1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchResults(request)`

- **OnSuccess**: <code>[CommunicationRequestResult](src/models/communication-request-result.ts)[]</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchResultsError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommunicationRequestResult[], OutboundBatches.OutboundBatchResultsError&gt;</code>, with `result.value` of type <code>[CommunicationRequestResult](src/models/communication-request-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchUpdate(request: OutboundBatches.OutboundBatchUpdateRequest, options?: RequestOptions): ApiPromise&lt;CommunicationBatch, OutboundBatches.OutboundBatchUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchUpdate({
    batchId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CommunicationBatch
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchUpdate({
  batchId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommunicationBatch
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
| <code>batchId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CommunicationBatchUpdate](src/models/communication-batch-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchUpdate(request)`

- **OnSuccess**: <code>[CommunicationBatch](src/models/communication-batch.ts)</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchUpdateError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommunicationBatch, OutboundBatches.OutboundBatchUpdateError&gt;</code>, with `result.value` of type <code>[CommunicationBatch](src/models/communication-batch.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>outboundBatchUpload(request: OutboundBatches.OutboundBatchUploadRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchUploadError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundBatches.outboundBatchUpload({ batchId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type OutboundBatches.OutboundBatchUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundBatches.outboundBatchUpload({
  batchId: "some example string",
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
| <code>batchId</code> | <code>string</code> | - |
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundBatches.outboundBatchUpload(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[OutboundBatches.OutboundBatchUploadError](src/resources/outbound-batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundBatches.outboundBatchUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, OutboundBatches.OutboundBatchUploadError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Permissions

> Source: [Permissions](src/resources/permissions.ts)

<details>
<summary><code>permissionsList(options?: RequestOptions): ApiPromise&lt;PermissionGroupResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all available permissions in the system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.permissions.permissionsList();
  // TODO: Handle 'response' of type PermissionGroupResponse[]
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
const result = await client.permissions.permissionsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PermissionGroupResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.permissionsList()`

- **OnSuccess**: <code>[PermissionGroupResponse](src/models/permission-group-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.permissions.permissionsList().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PermissionGroupResponse[], ApiError&gt;</code>, with `result.value` of type <code>[PermissionGroupResponse](src/models/permission-group-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Prompts

> Source: [Prompts](src/resources/prompts.ts)

<details>
<summary><code>promptGetSupportedLlms(request: Prompts.PromptGetSupportedLlmsRequest, options?: RequestOptions): ApiPromise&lt;SupportedLlm[], Prompts.PromptGetSupportedLlmsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get supported LLM configs.

Each config's `status` is resolved against the current date. Retired models are omitted unless
they match `selected_model`, so a saved config still referencing a retired model can render it
as a locked field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prompts.promptGetSupportedLlms();
  // TODO: Handle 'response' of type SupportedLlm[]
} catch (err) {
  // TODO: Handle 'err' of type Prompts.PromptGetSupportedLlmsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prompts.promptGetSupportedLlms().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportedLlm[]
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
| <code>selectedModel?</code> | <code>[SelectedModel](src/models/unions/selected-model.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prompts.promptGetSupportedLlms(request)`

- **OnSuccess**: <code>[SupportedLlm](src/models/supported-llm.ts)[]</code>
- **OnError**: throws <code>[Prompts.PromptGetSupportedLlmsError](src/resources/prompts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prompts.promptGetSupportedLlms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportedLlm[], Prompts.PromptGetSupportedLlmsError&gt;</code>, with `result.value` of type <code>[SupportedLlm](src/models/supported-llm.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promptsCreate(request: Prompts.PromptsCreateRequest, options?: RequestOptions): ApiPromise&lt;PromptResponse, Prompts.PromptsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new prompt

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prompts.promptsCreate({
    body: { name: "some example string", type: "some example string", llmConfig: {} },
  });
  // TODO: Handle 'response' of type PromptResponse
} catch (err) {
  // TODO: Handle 'err' of type Prompts.PromptsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prompts.promptsCreate({
  body: { name: "some example string", type: "some example string", llmConfig: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PromptResponse
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
| <code>body</code> | <code>[PromptCreateRequest](src/models/prompt-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prompts.promptsCreate(request)`

- **OnSuccess**: <code>[PromptResponse](src/models/prompt-response.ts)</code>
- **OnError**: throws <code>[Prompts.PromptsCreateError](src/resources/prompts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prompts.promptsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PromptResponse, Prompts.PromptsCreateError&gt;</code>, with `result.value` of type <code>[PromptResponse](src/models/prompt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promptsDelete(request: Prompts.PromptsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Prompts.PromptsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a prompt

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prompts.promptsDelete({ promptId: 1, reason: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Prompts.PromptsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prompts.promptsDelete({
  promptId: 1,
  reason: "some example string",
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
| <code>promptId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prompts.promptsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Prompts.PromptsDeleteError](src/resources/prompts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prompts.promptsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Prompts.PromptsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promptsGetById(request: Prompts.PromptsGetByIdRequest, options?: RequestOptions): ApiPromise&lt;PromptResponse, Prompts.PromptsGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a prompt by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prompts.promptsGetById({ promptId: 1 });
  // TODO: Handle 'response' of type PromptResponse
} catch (err) {
  // TODO: Handle 'err' of type Prompts.PromptsGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prompts.promptsGetById({ promptId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PromptResponse
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
| <code>promptId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prompts.promptsGetById(request)`

- **OnSuccess**: <code>[PromptResponse](src/models/prompt-response.ts)</code>
- **OnError**: throws <code>[Prompts.PromptsGetByIdError](src/resources/prompts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prompts.promptsGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PromptResponse, Prompts.PromptsGetByIdError&gt;</code>, with `result.value` of type <code>[PromptResponse](src/models/prompt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promptsHistory(request: Prompts.PromptsHistoryRequest, options?: RequestOptions): ApiPromise&lt;PromptHistoryResponse[], Prompts.PromptsHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of historical versions of a prompt by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prompts.promptsHistory({ promptId: 1 });
  // TODO: Handle 'response' of type PromptHistoryResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Prompts.PromptsHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prompts.promptsHistory({ promptId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PromptHistoryResponse[]
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
| <code>promptId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prompts.promptsHistory(request)`

- **OnSuccess**: <code>[PromptHistoryResponse](src/models/prompt-history-response.ts)[]</code>
- **OnError**: throws <code>[Prompts.PromptsHistoryError](src/resources/prompts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prompts.promptsHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PromptHistoryResponse[], Prompts.PromptsHistoryError&gt;</code>, with `result.value` of type <code>[PromptHistoryResponse](src/models/prompt-history-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promptsList(request: Prompts.PromptsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponsePromptResponse, Prompts.PromptsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing prompts

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prompts.promptsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: PromptProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponsePromptResponse
} catch (err) {
  // TODO: Handle 'err' of type Prompts.PromptsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prompts.promptsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: PromptProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponsePromptResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[PromptProperties](src/models/prompt-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy33](src/models/unions/order-by33.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields15](src/models/unions/fields15.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prompts.promptsList(request)`

- **OnSuccess**: <code>[ListResponsePromptResponse](src/models/list-response-prompt-response.ts)</code>
- **OnError**: throws <code>[Prompts.PromptsListError](src/resources/prompts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prompts.promptsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponsePromptResponse, Prompts.PromptsListError&gt;</code>, with `result.value` of type <code>[ListResponsePromptResponse](src/models/list-response-prompt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promptsUpdate(request: Prompts.PromptsUpdateRequest, options?: RequestOptions): ApiPromise&lt;PromptResponse, Prompts.PromptsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing prompt

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prompts.promptsUpdate({
    body: { name: "some example string", type: "some example string", llmConfig: {}, id: 1 },
  });
  // TODO: Handle 'response' of type PromptResponse
} catch (err) {
  // TODO: Handle 'err' of type Prompts.PromptsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prompts.promptsUpdate({
  body: { name: "some example string", type: "some example string", llmConfig: {}, id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PromptResponse
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
| <code>body</code> | <code>[PromptUpdateRequest](src/models/prompt-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prompts.promptsUpdate(request)`

- **OnSuccess**: <code>[PromptResponse](src/models/prompt-response.ts)</code>
- **OnError**: throws <code>[Prompts.PromptsUpdateError](src/resources/prompts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prompts.promptsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PromptResponse, Prompts.PromptsUpdateError&gt;</code>, with `result.value` of type <code>[PromptResponse](src/models/prompt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/resources/roles.ts)

<details>
<summary><code>rolesCreate(request: Roles.RolesCreateRequest, options?: RequestOptions): ApiPromise&lt;RoleResponse, Roles.RolesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.rolesCreate({
    body: { name: "some example string", permissions: ["some example string"] },
  });
  // TODO: Handle 'response' of type RoleResponse
} catch (err) {
  // TODO: Handle 'err' of type Roles.RolesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.rolesCreate({
  body: { name: "some example string", permissions: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleResponse
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
| <code>body</code> | <code>[RoleCreateRequest](src/models/role-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.rolesCreate(request)`

- **OnSuccess**: <code>[RoleResponse](src/models/role-response.ts)</code>
- **OnError**: throws <code>[Roles.RolesCreateError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.rolesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleResponse, Roles.RolesCreateError&gt;</code>, with `result.value` of type <code>[RoleResponse](src/models/role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rolesDelete(request: Roles.RolesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Roles.RolesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a role. Optionally, reassign existing users with that role to a new role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.rolesDelete({ roleId: 1, reason: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Roles.RolesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.rolesDelete({ roleId: 1, reason: "some example string" }).asApiResult();
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
| <code>roleId</code> | <code>number</code> | The ID of the role to delete |
| <code>reason</code> | <code>string</code> | The reason for deleting the role |
| <code>newRoleId?</code> | <code>[NewRoleId](src/models/unions/new-role-id.ts)</code> | Users with the deleted role will be reassigned to the new role, if a new role ID is provided |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.rolesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Roles.RolesDeleteError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.rolesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Roles.RolesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rolesGetById(request: Roles.RolesGetByIdRequest, options?: RequestOptions): ApiPromise&lt;RoleResponse, Roles.RolesGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a given role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.rolesGetById({ roleId: 1 });
  // TODO: Handle 'response' of type RoleResponse
} catch (err) {
  // TODO: Handle 'err' of type Roles.RolesGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.rolesGetById({ roleId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleResponse
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
| <code>roleId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.rolesGetById(request)`

- **OnSuccess**: <code>[RoleResponse](src/models/role-response.ts)</code>
- **OnError**: throws <code>[Roles.RolesGetByIdError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.rolesGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleResponse, Roles.RolesGetByIdError&gt;</code>, with `result.value` of type <code>[RoleResponse](src/models/role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rolesList(request: Roles.RolesListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseRoleResponse, Roles.RolesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing roles.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.rolesList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: BridgePhrasesProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseRoleResponse
} catch (err) {
  // TODO: Handle 'err' of type Roles.RolesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.rolesList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: BridgePhrasesProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseRoleResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[RoleProperties](src/models/role-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy11](src/models/unions/order-by11.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields1](src/models/unions/fields1.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.rolesList(request)`

- **OnSuccess**: <code>[ListResponseRoleResponse](src/models/list-response-role-response.ts)</code>
- **OnError**: throws <code>[Roles.RolesListError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.rolesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseRoleResponse, Roles.RolesListError&gt;</code>, with `result.value` of type <code>[ListResponseRoleResponse](src/models/list-response-role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rolesUpdate(request: Roles.RolesUpdateRequest, options?: RequestOptions): ApiPromise&lt;RoleResponse, Roles.RolesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.rolesUpdate({
    body: { name: "some example string", permissions: ["some example string"], id: 1 },
  });
  // TODO: Handle 'response' of type RoleResponse
} catch (err) {
  // TODO: Handle 'err' of type Roles.RolesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.rolesUpdate({
  body: { name: "some example string", permissions: ["some example string"], id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleResponse
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
| <code>body</code> | <code>[RoleUpdateRequest](src/models/role-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.rolesUpdate(request)`

- **OnSuccess**: <code>[RoleResponse](src/models/role-response.ts)</code>
- **OnError**: throws <code>[Roles.RolesUpdateError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.rolesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleResponse, Roles.RolesUpdateError&gt;</code>, with `result.value` of type <code>[RoleResponse](src/models/role-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Services

> Source: [Services](src/resources/services.ts)

<details>
<summary><code>serviceCreate(request: Services.ServiceCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ServiceResponse, Services.ServiceCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.services.serviceCreate({
    body: { name: "some example string", description: "some example string" },
  });
  // TODO: Handle 'response' of type ServiceResponse
} catch (err) {
  // TODO: Handle 'err' of type Services.ServiceCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.services.serviceCreate({
  body: { name: "some example string", description: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceResponse
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
| <code>body</code> | <code>[ServiceCreateRequest](src/models/service-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.services.serviceCreate(request)`

- **OnSuccess**: <code>[ServiceResponse](src/models/service-response.ts)</code>
- **OnError**: throws <code>[Services.ServiceCreateError](src/resources/services.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.services.serviceCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceResponse, Services.ServiceCreateError&gt;</code>, with `result.value` of type <code>[ServiceResponse](src/models/service-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceDelete(request: Services.ServiceDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Services.ServiceDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a service. A service with linked tools cannot be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.services.serviceDelete({ serviceId: 1, reason: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Services.ServiceDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.services.serviceDelete({
  serviceId: 1,
  reason: "some example string",
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
| <code>serviceId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.services.serviceDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Services.ServiceDeleteError](src/resources/services.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.services.serviceDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Services.ServiceDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceList(request: Services.ServiceListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseServiceResponse, Services.ServiceListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing services

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.services.serviceList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: ServiceProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseServiceResponse
} catch (err) {
  // TODO: Handle 'err' of type Services.ServiceListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.services.serviceList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: ServiceProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseServiceResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[ServiceProperties](src/models/service-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy35](src/models/unions/order-by35.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields17](src/models/unions/fields17.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.services.serviceList(request)`

- **OnSuccess**: <code>[ListResponseServiceResponse](src/models/list-response-service-response.ts)</code>
- **OnError**: throws <code>[Services.ServiceListError](src/resources/services.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.services.serviceList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseServiceResponse, Services.ServiceListError&gt;</code>, with `result.value` of type <code>[ListResponseServiceResponse](src/models/list-response-service-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceUpdate(request: Services.ServiceUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;ServiceResponse, Services.ServiceUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.services.serviceUpdate({
    body: { name: "some example string", description: "some example string", id: 1 },
  });
  // TODO: Handle 'response' of type ServiceResponse
} catch (err) {
  // TODO: Handle 'err' of type Services.ServiceUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.services.serviceUpdate({
  body: { name: "some example string", description: "some example string", id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceResponse
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
| <code>body</code> | <code>[ServiceUpdateRequest](src/models/service-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.services.serviceUpdate(request)`

- **OnSuccess**: <code>[ServiceResponse](src/models/service-response.ts)</code>
- **OnError**: throws <code>[Services.ServiceUpdateError](src/resources/services.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.services.serviceUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceResponse, Services.ServiceUpdateError&gt;</code>, with `result.value` of type <code>[ServiceResponse](src/models/service-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>servicesGetById(request: Services.ServicesGetByIdRequest, options?: RequestOptions): ApiPromise&lt;ServiceResponse, Services.ServicesGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a service by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.services.servicesGetById({ serviceId: 1 });
  // TODO: Handle 'response' of type ServiceResponse
} catch (err) {
  // TODO: Handle 'err' of type Services.ServicesGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.services.servicesGetById({ serviceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceResponse
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
| <code>serviceId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.services.servicesGetById(request)`

- **OnSuccess**: <code>[ServiceResponse](src/models/service-response.ts)</code>
- **OnError**: throws <code>[Services.ServicesGetByIdError](src/resources/services.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.services.servicesGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceResponse, Services.ServicesGetByIdError&gt;</code>, with `result.value` of type <code>[ServiceResponse](src/models/service-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sessions

> Source: [Sessions](src/resources/sessions.ts)

<details>
<summary><code>generateSessionRecordingUrls(request: Sessions.GenerateSessionRecordingUrlsRequest, options?: RequestOptions): ApiPromise&lt;SessionRecordingResponse, Sessions.GenerateSessionRecordingUrlsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.generateSessionRecordingUrls({ sessionId: "some example string" });
  // TODO: Handle 'response' of type SessionRecordingResponse
} catch (err) {
  // TODO: Handle 'err' of type Sessions.GenerateSessionRecordingUrlsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions.generateSessionRecordingUrls({
  sessionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionRecordingResponse
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
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.generateSessionRecordingUrls(request)`

- **OnSuccess**: <code>[SessionRecordingResponse](src/models/session-recording-response.ts)</code>
- **OnError**: throws <code>[Sessions.GenerateSessionRecordingUrlsError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.generateSessionRecordingUrls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionRecordingResponse, Sessions.GenerateSessionRecordingUrlsError&gt;</code>, with `result.value` of type <code>[SessionRecordingResponse](src/models/session-recording-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sessionGetById(request: Sessions.SessionGetByIdRequest, options?: RequestOptions): ApiPromise&lt;Session, Sessions.SessionGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.sessionGetById({ sessionId: "some example string" });
  // TODO: Handle 'response' of type Session
} catch (err) {
  // TODO: Handle 'err' of type Sessions.SessionGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions.sessionGetById({ sessionId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Session
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
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.sessionGetById(request)`

- **OnSuccess**: <code>[Session](src/models/session.ts)</code>
- **OnError**: throws <code>[Sessions.SessionGetByIdError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.sessionGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Session, Sessions.SessionGetByIdError&gt;</code>, with `result.value` of type <code>[Session](src/models/session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sessionRecordingStream(request: Sessions.SessionRecordingStreamRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Sessions.SessionRecordingStreamError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.sessionRecordingStream({ token: "some example string" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Sessions.SessionRecordingStreamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions.sessionRecordingStream({ token: "some example string" }).asApiResult();
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
| <code>token</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.sessionRecordingStream(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Sessions.SessionRecordingStreamError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.sessionRecordingStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Sessions.SessionRecordingStreamError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sessionsList(request: Sessions.SessionsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseSession, Sessions.SessionsListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.sessionsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseSession
} catch (err) {
  // TODO: Handle 'err' of type Sessions.SessionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions.sessionsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseSession
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[SessionProperties](src/models/session-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy37](src/models/unions/order-by37.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields19](src/models/unions/fields19.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.sessionsList(request)`

- **OnSuccess**: <code>[ListResponseSession](src/models/list-response-session.ts)</code>
- **OnError**: throws <code>[Sessions.SessionsListError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.sessionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseSession, Sessions.SessionsListError&gt;</code>, with `result.value` of type <code>[ListResponseSession](src/models/list-response-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SessionLabels

> Source: [SessionLabels](src/resources/session-labels.ts)

<details>
<summary><code>sessionLabelCreate(request: SessionLabels.SessionLabelCreateRequest, options?: RequestOptions): ApiPromise&lt;SessionLabel, SessionLabels.SessionLabelCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new label

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionLabels.sessionLabelCreate({
    body: {
      sessionId: 1,
      type: "some example string",
      code: "some example string",
      userEmail: "some example string",
    },
  });
  // TODO: Handle 'response' of type SessionLabel
} catch (err) {
  // TODO: Handle 'err' of type SessionLabels.SessionLabelCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionLabels.sessionLabelCreate({
  body: {
    sessionId: 1,
    type: "some example string",
    code: "some example string",
    userEmail: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionLabel
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
| <code>body</code> | <code>[SessionLabelCreate](src/models/session-label-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionLabels.sessionLabelCreate(request)`

- **OnSuccess**: <code>[SessionLabel](src/models/session-label.ts)</code>
- **OnError**: throws <code>[SessionLabels.SessionLabelCreateError](src/resources/session-labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionLabels.sessionLabelCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionLabel, SessionLabels.SessionLabelCreateError&gt;</code>, with `result.value` of type <code>[SessionLabel](src/models/session-label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sessionLabelGetById(request: SessionLabels.SessionLabelGetByIdRequest, options?: RequestOptions): ApiPromise&lt;SessionLabel, SessionLabels.SessionLabelGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionLabels.sessionLabelGetById({ sessionLabelId: 1 });
  // TODO: Handle 'response' of type SessionLabel
} catch (err) {
  // TODO: Handle 'err' of type SessionLabels.SessionLabelGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionLabels.sessionLabelGetById({ sessionLabelId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionLabel
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
| <code>sessionLabelId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionLabels.sessionLabelGetById(request)`

- **OnSuccess**: <code>[SessionLabel](src/models/session-label.ts)</code>
- **OnError**: throws <code>[SessionLabels.SessionLabelGetByIdError](src/resources/session-labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionLabels.sessionLabelGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionLabel, SessionLabels.SessionLabelGetByIdError&gt;</code>, with `result.value` of type <code>[SessionLabel](src/models/session-label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sessionLabelsList(request: SessionLabels.SessionLabelsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseSessionLabel, SessionLabels.SessionLabelsListError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionLabels.sessionLabelsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseSessionLabel
} catch (err) {
  // TODO: Handle 'err' of type SessionLabels.SessionLabelsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionLabels.sessionLabelsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseSessionLabel
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[SessionLabelProperties](src/models/session-label-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy36](src/models/unions/order-by36.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields18](src/models/unions/fields18.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionLabels.sessionLabelsList(request)`

- **OnSuccess**: <code>[ListResponseSessionLabel](src/models/list-response-session-label.ts)</code>
- **OnError**: throws <code>[SessionLabels.SessionLabelsListError](src/resources/session-labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionLabels.sessionLabelsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseSessionLabel, SessionLabels.SessionLabelsListError&gt;</code>, with `result.value` of type <code>[ListResponseSessionLabel](src/models/list-response-session-label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ToolsApi

> Source: [ToolsApi](src/resources/tools-api.ts)

<details>
<summary><code>toolCreate(request: ToolsApi.ToolCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ToolResponse, ToolsApi.ToolCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tool

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.toolsApi.toolCreate({
    body: { name: "some example string", definition: { tool: { function: {} } }, serviceId: 1 },
  });
  // TODO: Handle 'response' of type ToolResponse
} catch (err) {
  // TODO: Handle 'err' of type ToolsApi.ToolCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.toolsApi.toolCreate({
  body: { name: "some example string", definition: { tool: { function: {} } }, serviceId: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolResponse
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
| <code>body</code> | <code>[ToolCreateRequest](src/models/tool-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.toolsApi.toolCreate(request)`

- **OnSuccess**: <code>[ToolResponse](src/models/tool-response.ts)</code>
- **OnError**: throws <code>[ToolsApi.ToolCreateError](src/resources/tools-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.toolsApi.toolCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolResponse, ToolsApi.ToolCreateError&gt;</code>, with `result.value` of type <code>[ToolResponse](src/models/tool-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toolDelete(request: ToolsApi.ToolDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ToolsApi.ToolDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a tool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.toolsApi.toolDelete({
    toolName: "some example string",
    reason: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ToolsApi.ToolDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.toolsApi.toolDelete({
  toolName: "some example string",
  reason: "some example string",
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
| <code>toolName</code> | <code>string</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.toolsApi.toolDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ToolsApi.ToolDeleteError](src/resources/tools-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.toolsApi.toolDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ToolsApi.ToolDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toolGetByName(request: ToolsApi.ToolGetByNameRequest, options?: RequestOptions): ApiPromise&lt;ToolDetailResponse, ToolsApi.ToolGetByNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a specific tool

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.toolsApi.toolGetByName({ toolName: "some example string" });
  // TODO: Handle 'response' of type ToolDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type ToolsApi.ToolGetByNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.toolsApi.toolGetByName({ toolName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolDetailResponse
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
| <code>toolName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.toolsApi.toolGetByName(request)`

- **OnSuccess**: <code>[ToolDetailResponse](src/models/tool-detail-response.ts)</code>
- **OnError**: throws <code>[ToolsApi.ToolGetByNameError](src/resources/tools-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.toolsApi.toolGetByName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolDetailResponse, ToolsApi.ToolGetByNameError&gt;</code>, with `result.value` of type <code>[ToolDetailResponse](src/models/tool-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toolHistory(request: ToolsApi.ToolHistoryRequest, options?: RequestOptions): ApiPromise&lt;ListResponseToolHistoryResponse, ToolsApi.ToolHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get version history for a tool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.toolsApi.toolHistory({ toolId: 1 });
  // TODO: Handle 'response' of type ListResponseToolHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type ToolsApi.ToolHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.toolsApi.toolHistory({ toolId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseToolHistoryResponse
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
| <code>toolId</code> | <code>number</code> | - |
| <code>page?</code> | <code>number</code> | Page number (0-based)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | Items per page<br>**Default**: 25 |
| <code>orderByDirection?</code> | <code>[OrderByDirection1Enum](src/models/order-by-direction1-enum.ts)</code> | Sort by oldest first (asc) or newest first (desc). Version 1 is always the oldest. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.toolsApi.toolHistory(request)`

- **OnSuccess**: <code>[ListResponseToolHistoryResponse](src/models/list-response-tool-history-response.ts)</code>
- **OnError**: throws <code>[ToolsApi.ToolHistoryError](src/resources/tools-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.toolsApi.toolHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseToolHistoryResponse, ToolsApi.ToolHistoryError&gt;</code>, with `result.value` of type <code>[ListResponseToolHistoryResponse](src/models/list-response-tool-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toolList(request: ToolsApi.ToolListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseToolResponse, ToolsApi.ToolListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing tools

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.toolsApi.toolList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: ToolProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseToolResponse
} catch (err) {
  // TODO: Handle 'err' of type ToolsApi.ToolListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.toolsApi.toolList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: ToolProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseToolResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[ToolProperties](src/models/tool-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy38](src/models/unions/order-by38.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields20](src/models/unions/fields20.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.toolsApi.toolList(request)`

- **OnSuccess**: <code>[ListResponseToolResponse](src/models/list-response-tool-response.ts)</code>
- **OnError**: throws <code>[ToolsApi.ToolListError](src/resources/tools-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.toolsApi.toolList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseToolResponse, ToolsApi.ToolListError&gt;</code>, with `result.value` of type <code>[ListResponseToolResponse](src/models/list-response-tool-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toolUpdate(request: ToolsApi.ToolUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;ToolResponse, ToolsApi.ToolUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing tool

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.toolsApi.toolUpdate({
    body: { name: "some example string", definition: { tool: { function: {} } }, serviceId: 1, id: 1 },
  });
  // TODO: Handle 'response' of type ToolResponse
} catch (err) {
  // TODO: Handle 'err' of type ToolsApi.ToolUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.toolsApi.toolUpdate({
  body: { name: "some example string", definition: { tool: { function: {} } }, serviceId: 1, id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolResponse
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
| <code>body</code> | <code>[ToolUpdateRequest](src/models/tool-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.toolsApi.toolUpdate(request)`

- **OnSuccess**: <code>[ToolResponse](src/models/tool-response.ts)</code>
- **OnError**: throws <code>[ToolsApi.ToolUpdateError](src/resources/tools-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.toolsApi.toolUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolResponse, ToolsApi.ToolUpdateError&gt;</code>, with `result.value` of type <code>[ToolResponse](src/models/tool-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BridgePhrases

> Source: [BridgePhrases](src/resources/bridge-phrases.ts)

<details>
<summary><code>bridgePhrasesCreate(request: BridgePhrases.BridgePhrasesCreateRequestParams, options?: RequestOptions): ApiPromise&lt;BridgePhrasesResponse, BridgePhrases.BridgePhrasesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bridge phrases config.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bridgePhrases.bridgePhrasesCreate({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type BridgePhrasesResponse
} catch (err) {
  // TODO: Handle 'err' of type BridgePhrases.BridgePhrasesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bridgePhrases.bridgePhrasesCreate({
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BridgePhrasesResponse
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
| <code>body</code> | <code>[BridgePhrasesCreateRequest](src/models/bridge-phrases-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bridgePhrases.bridgePhrasesCreate(request)`

- **OnSuccess**: <code>[BridgePhrasesResponse](src/models/bridge-phrases-response.ts)</code>
- **OnError**: throws <code>[BridgePhrases.BridgePhrasesCreateError](src/resources/bridge-phrases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bridgePhrases.bridgePhrasesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BridgePhrasesResponse, BridgePhrases.BridgePhrasesCreateError&gt;</code>, with `result.value` of type <code>[BridgePhrasesResponse](src/models/bridge-phrases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bridgePhrasesDelete(request: BridgePhrases.BridgePhrasesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, BridgePhrases.BridgePhrasesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a bridge phrases config.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bridgePhrases.bridgePhrasesDelete({
    bridgePhrasesId: 1,
    reason: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type BridgePhrases.BridgePhrasesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bridgePhrases.bridgePhrasesDelete({
  bridgePhrasesId: 1,
  reason: "some example string",
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
| <code>bridgePhrasesId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bridgePhrases.bridgePhrasesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[BridgePhrases.BridgePhrasesDeleteError](src/resources/bridge-phrases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bridgePhrases.bridgePhrasesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, BridgePhrases.BridgePhrasesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bridgePhrasesGetById(request: BridgePhrases.BridgePhrasesGetByIdRequest, options?: RequestOptions): ApiPromise&lt;BridgePhrasesResponse, BridgePhrases.BridgePhrasesGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a given bridge phrases config.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bridgePhrases.bridgePhrasesGetById({ bridgePhrasesId: 1 });
  // TODO: Handle 'response' of type BridgePhrasesResponse
} catch (err) {
  // TODO: Handle 'err' of type BridgePhrases.BridgePhrasesGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bridgePhrases.bridgePhrasesGetById({ bridgePhrasesId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BridgePhrasesResponse
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
| <code>bridgePhrasesId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bridgePhrases.bridgePhrasesGetById(request)`

- **OnSuccess**: <code>[BridgePhrasesResponse](src/models/bridge-phrases-response.ts)</code>
- **OnError**: throws <code>[BridgePhrases.BridgePhrasesGetByIdError](src/resources/bridge-phrases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bridgePhrases.bridgePhrasesGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BridgePhrasesResponse, BridgePhrases.BridgePhrasesGetByIdError&gt;</code>, with `result.value` of type <code>[BridgePhrasesResponse](src/models/bridge-phrases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bridgePhrasesList(request: BridgePhrases.BridgePhrasesListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseBridgePhrasesResponse, BridgePhrases.BridgePhrasesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch bridge phrases configs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bridgePhrases.bridgePhrasesList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: BridgePhrasesProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseBridgePhrasesResponse
} catch (err) {
  // TODO: Handle 'err' of type BridgePhrases.BridgePhrasesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bridgePhrases.bridgePhrasesList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: BridgePhrasesProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseBridgePhrasesResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[BridgePhrasesProperties](src/models/bridge-phrases-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy11](src/models/unions/order-by11.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields1](src/models/unions/fields1.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bridgePhrases.bridgePhrasesList(request)`

- **OnSuccess**: <code>[ListResponseBridgePhrasesResponse](src/models/list-response-bridge-phrases-response.ts)</code>
- **OnError**: throws <code>[BridgePhrases.BridgePhrasesListError](src/resources/bridge-phrases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bridgePhrases.bridgePhrasesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseBridgePhrasesResponse, BridgePhrases.BridgePhrasesListError&gt;</code>, with `result.value` of type <code>[ListResponseBridgePhrasesResponse](src/models/list-response-bridge-phrases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bridgePhrasesUpdate(request: BridgePhrases.BridgePhrasesUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;BridgePhrasesResponse, BridgePhrases.BridgePhrasesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing bridge phrases config.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bridgePhrases.bridgePhrasesUpdate({
    body: { name: "some example string", id: 1 },
  });
  // TODO: Handle 'response' of type BridgePhrasesResponse
} catch (err) {
  // TODO: Handle 'err' of type BridgePhrases.BridgePhrasesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bridgePhrases.bridgePhrasesUpdate({
  body: { name: "some example string", id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BridgePhrasesResponse
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
| <code>body</code> | <code>[BridgePhrasesUpdateRequest](src/models/bridge-phrases-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bridgePhrases.bridgePhrasesUpdate(request)`

- **OnSuccess**: <code>[BridgePhrasesResponse](src/models/bridge-phrases-response.ts)</code>
- **OnError**: throws <code>[BridgePhrases.BridgePhrasesUpdateError](src/resources/bridge-phrases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bridgePhrases.bridgePhrasesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BridgePhrasesResponse, BridgePhrases.BridgePhrasesUpdateError&gt;</code>, with `result.value` of type <code>[BridgePhrasesResponse](src/models/bridge-phrases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConversationConfig

> Source: [ConversationConfig](src/resources/conversation-config.ts)

<details>
<summary><code>getBridgePhrasesConfig(request: ConversationConfig.GetBridgePhrasesConfigRequest, options?: RequestOptions): ApiPromise&lt;BridgePhrasesConfig, ConversationConfig.GetBridgePhrasesConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the bridge phrases configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationConfig.getBridgePhrasesConfig();
  // TODO: Handle 'response' of type BridgePhrasesConfig
} catch (err) {
  // TODO: Handle 'err' of type ConversationConfig.GetBridgePhrasesConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationConfig.getBridgePhrasesConfig().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BridgePhrasesConfig
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
| <code>agentId?</code> | <code>[AgentId3](src/models/unions/agent-id3.ts)</code> | Agent ID to fetch config for |
| <code>toolName?</code> | <code>[ToolName1](src/models/unions/tool-name1.ts)</code> | Tool name to fetch config for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationConfig.getBridgePhrasesConfig(request)`

- **OnSuccess**: <code>[BridgePhrasesConfig](src/models/bridge-phrases-config.ts)</code>
- **OnError**: throws <code>[ConversationConfig.GetBridgePhrasesConfigError](src/resources/conversation-config.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationConfig.getBridgePhrasesConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BridgePhrasesConfig, ConversationConfig.GetBridgePhrasesConfigError&gt;</code>, with `result.value` of type <code>[BridgePhrasesConfig](src/models/bridge-phrases-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBridgePhrasesConfig(request: ConversationConfig.UpdateBridgePhrasesConfigRequest, options?: RequestOptions): ApiPromise&lt;BridgePhrasesConfig, ConversationConfig.UpdateBridgePhrasesConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the bridge phrases configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationConfig.updateBridgePhrasesConfig({ body: {} });
  // TODO: Handle 'response' of type BridgePhrasesConfig
} catch (err) {
  // TODO: Handle 'err' of type ConversationConfig.UpdateBridgePhrasesConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationConfig.updateBridgePhrasesConfig({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BridgePhrasesConfig
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
| <code>agentId?</code> | <code>[AgentId4](src/models/unions/agent-id4.ts)</code> | Agent ID to update config for |
| <code>toolName?</code> | <code>[ToolName2](src/models/unions/tool-name2.ts)</code> | Tool name to update config for |
| <code>body</code> | <code>[BridgePhrasesConfig](src/models/bridge-phrases-config.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationConfig.updateBridgePhrasesConfig(request)`

- **OnSuccess**: <code>[BridgePhrasesConfig](src/models/bridge-phrases-config.ts)</code>
- **OnError**: throws <code>[ConversationConfig.UpdateBridgePhrasesConfigError](src/resources/conversation-config.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationConfig.updateBridgePhrasesConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BridgePhrasesConfig, ConversationConfig.UpdateBridgePhrasesConfigError&gt;</code>, with `result.value` of type <code>[BridgePhrasesConfig](src/models/bridge-phrases-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Experiments

> Source: [Experiments](src/resources/experiments.ts)

<details>
<summary><code>experimentsCreate(request: Experiments.ExperimentsCreateRequest, options?: RequestOptions): ApiPromise&lt;ExperimentResponse, Experiments.ExperimentsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new experiment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsCreate({
    body: {
      name: "some example string",
      variants: [{ name: "some example string", weight: 1, agentId: 1 }],
      targetId: 1,
    },
  });
  // TODO: Handle 'response' of type ExperimentResponse
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsCreate({
  body: {
    name: "some example string",
    variants: [{ name: "some example string", weight: 1, agentId: 1 }],
    targetId: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperimentResponse
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
| <code>body</code> | <code>[ExperimentCreateRequest](src/models/experiment-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsCreate(request)`

- **OnSuccess**: <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: throws <code>[Experiments.ExperimentsCreateError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperimentResponse, Experiments.ExperimentsCreateError&gt;</code>, with `result.value` of type <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>experimentsDelete(request: Experiments.ExperimentsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Experiments.ExperimentsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a (non-running) experiment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsDelete({ experimentId: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsDelete({ experimentId: 1 }).asApiResult();
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
| <code>experimentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Experiments.ExperimentsDeleteError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Experiments.ExperimentsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>experimentsGetById(request: Experiments.ExperimentsGetByIdRequest, options?: RequestOptions): ApiPromise&lt;ExperimentResponse, Experiments.ExperimentsGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an experiment by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsGetById({ experimentId: 1 });
  // TODO: Handle 'response' of type ExperimentResponse
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsGetById({ experimentId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperimentResponse
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
| <code>experimentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsGetById(request)`

- **OnSuccess**: <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: throws <code>[Experiments.ExperimentsGetByIdError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperimentResponse, Experiments.ExperimentsGetByIdError&gt;</code>, with `result.value` of type <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>experimentsList(request: Experiments.ExperimentsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseExperimentResponse, Experiments.ExperimentsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing experiments

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: ExperimentProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseExperimentResponse
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: ExperimentProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseExperimentResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[ExperimentProperties](src/models/experiment-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy6](src/models/unions/order-by6.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields6](src/models/unions/fields6.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsList(request)`

- **OnSuccess**: <code>[ListResponseExperimentResponse](src/models/list-response-experiment-response.ts)</code>
- **OnError**: throws <code>[Experiments.ExperimentsListError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseExperimentResponse, Experiments.ExperimentsListError&gt;</code>, with `result.value` of type <code>[ListResponseExperimentResponse](src/models/list-response-experiment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>experimentsResults(request: Experiments.ExperimentsResultsRequest, options?: RequestOptions): ApiPromise&lt;ExperimentResultsResponse, Experiments.ExperimentsResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the number of sessions each variant of an experiment has handled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsResults({ experimentId: 1 });
  // TODO: Handle 'response' of type ExperimentResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsResults({ experimentId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperimentResultsResponse
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
| <code>experimentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsResults(request)`

- **OnSuccess**: <code>[ExperimentResultsResponse](src/models/experiment-results-response.ts)</code>
- **OnError**: throws <code>[Experiments.ExperimentsResultsError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperimentResultsResponse, Experiments.ExperimentsResultsError&gt;</code>, with `result.value` of type <code>[ExperimentResultsResponse](src/models/experiment-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>experimentsStart(request: Experiments.ExperimentsStartRequest, options?: RequestOptions): ApiPromise&lt;ExperimentStartResponse, Experiments.ExperimentsStartError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an experiment. (Only an experiment in 'draft' status can be started.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsStart({ experimentId: 1 });
  // TODO: Handle 'response' of type ExperimentStartResponse
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsStartError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsStart({ experimentId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperimentStartResponse
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
| <code>experimentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsStart(request)`

- **OnSuccess**: <code>[ExperimentStartResponse](src/models/experiment-start-response.ts)</code>
- **OnError**: throws <code>[Experiments.ExperimentsStartError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsStart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperimentStartResponse, Experiments.ExperimentsStartError&gt;</code>, with `result.value` of type <code>[ExperimentStartResponse](src/models/experiment-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>experimentsStop(request: Experiments.ExperimentsStopRequest, options?: RequestOptions): ApiPromise&lt;ExperimentResponse, Experiments.ExperimentsStopError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a running experiment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsStop({ experimentId: 1 });
  // TODO: Handle 'response' of type ExperimentResponse
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsStopError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsStop({ experimentId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperimentResponse
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
| <code>experimentId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsStop(request)`

- **OnSuccess**: <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: throws <code>[Experiments.ExperimentsStopError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsStop(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperimentResponse, Experiments.ExperimentsStopError&gt;</code>, with `result.value` of type <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>experimentsUpdate(request: Experiments.ExperimentsUpdateRequest, options?: RequestOptions): ApiPromise&lt;ExperimentResponse, Experiments.ExperimentsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an experiment. Only an experiment in 'draft' status can be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiments.experimentsUpdate({
    experimentId: 1,
    body: { name: "some example string", variants: [{ name: "some example string", weight: 1, agentId: 1 }] },
  });
  // TODO: Handle 'response' of type ExperimentResponse
} catch (err) {
  // TODO: Handle 'err' of type Experiments.ExperimentsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiments.experimentsUpdate({
  experimentId: 1,
  body: { name: "some example string", variants: [{ name: "some example string", weight: 1, agentId: 1 }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperimentResponse
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
| <code>experimentId</code> | <code>number</code> | - |
| <code>body</code> | <code>[ExperimentUpdateRequest](src/models/experiment-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiments.experimentsUpdate(request)`

- **OnSuccess**: <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: throws <code>[Experiments.ExperimentsUpdateError](src/resources/experiments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiments.experimentsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperimentResponse, Experiments.ExperimentsUpdateError&gt;</code>, with `result.value` of type <code>[ExperimentResponse](src/models/experiment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pronunciations

> Source: [Pronunciations](src/resources/pronunciations.ts)

<details>
<summary><code>pronunciationsDeleteCsv(options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.pronunciations.pronunciationsDeleteCsv();
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
const result = await client.pronunciations.pronunciationsDeleteCsv().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pronunciations.pronunciationsDeleteCsv()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pronunciations.pronunciationsDeleteCsv().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pronunciationsDownloadCsv(options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.pronunciations.pronunciationsDownloadCsv();
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
const result = await client.pronunciations.pronunciationsDownloadCsv().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pronunciations.pronunciationsDownloadCsv()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pronunciations.pronunciationsDownloadCsv().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pronunciationsGet(options?: RequestOptions): ApiPromise&lt;PronunciationOverridesDictionary, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pronunciations.pronunciationsGet();
  // TODO: Handle 'response' of type PronunciationOverridesDictionary
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
const result = await client.pronunciations.pronunciationsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PronunciationOverridesDictionary
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pronunciations.pronunciationsGet()`

- **OnSuccess**: <code>[PronunciationOverridesDictionary](src/models/pronunciation-overrides-dictionary.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pronunciations.pronunciationsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PronunciationOverridesDictionary, ApiError&gt;</code>, with `result.value` of type <code>[PronunciationOverridesDictionary](src/models/pronunciation-overrides-dictionary.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pronunciationsGetMetadata(options?: RequestOptions): ApiPromise&lt;DictionaryMetadata, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pronunciations.pronunciationsGetMetadata();
  // TODO: Handle 'response' of type DictionaryMetadata
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
const result = await client.pronunciations.pronunciationsGetMetadata().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DictionaryMetadata
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pronunciations.pronunciationsGetMetadata()`

- **OnSuccess**: <code>[DictionaryMetadata](src/models/dictionary-metadata.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pronunciations.pronunciationsGetMetadata().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DictionaryMetadata, ApiError&gt;</code>, with `result.value` of type <code>[DictionaryMetadata](src/models/dictionary-metadata.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pronunciationsUploadCsv(request: Pronunciations.PronunciationsUploadCsvRequest, options?: RequestOptions): ApiPromise&lt;PronunciationsCsvUploadResponse, Pronunciations.PronunciationsUploadCsvError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pronunciations.pronunciationsUploadCsv({ file: new Uint8Array() });
  // TODO: Handle 'response' of type PronunciationsCsvUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Pronunciations.PronunciationsUploadCsvError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pronunciations.pronunciationsUploadCsv({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PronunciationsCsvUploadResponse
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
| <code>file</code> | <code>FileInput</code> | CSV file containing pronunciation overrides |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pronunciations.pronunciationsUploadCsv(request)`

- **OnSuccess**: <code>[PronunciationsCsvUploadResponse](src/models/pronunciations-csv-upload-response.ts)</code>
- **OnError**: throws <code>[Pronunciations.PronunciationsUploadCsvError](src/resources/pronunciations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pronunciations.pronunciationsUploadCsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PronunciationsCsvUploadResponse, Pronunciations.PronunciationsUploadCsvError&gt;</code>, with `result.value` of type <code>[PronunciationsCsvUploadResponse](src/models/pronunciations-csv-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SessionsTranscript

> Source: [SessionsTranscript](src/resources/sessions-transcript.ts)

<details>
<summary><code>sessionTranscriptGetById(request: SessionsTranscript.SessionTranscriptGetByIdRequest, options?: RequestOptions): ApiPromise&lt;SessionTranscriptionResponse, SessionsTranscript.SessionTranscriptGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a session's transcript, and whether it is complete.

Transcript records reach the logs database through an asynchronous pipeline, so a read taken
immediately after a session ends can return a short record. `transcript_complete` is true only
when everything the session reported writing is present, across both the spoken transcript and
the tool activity in `actions`. A caller that needs the whole record should re-request with
exponential backoff until it is true, or until its own time limit passes, keeping the last
response either way.

A time limit is required rather than optional. `transcript_complete` never turns true for a
session still in progress, for a session on a channel that reports no expected count (only
voice reports one today), or for a session that ended before the field was introduced - so a
caller polling without a limit would never stop.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionsTranscript.sessionTranscriptGetById({
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type SessionTranscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type SessionsTranscript.SessionTranscriptGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionsTranscript.sessionTranscriptGetById({
  sessionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionTranscriptionResponse
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
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionsTranscript.sessionTranscriptGetById(request)`

- **OnSuccess**: <code>[SessionTranscriptionResponse](src/models/session-transcription-response.ts)</code>
- **OnError**: throws <code>[SessionsTranscript.SessionTranscriptGetByIdError](src/resources/sessions-transcript.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionsTranscript.sessionTranscriptGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionTranscriptionResponse, SessionsTranscript.SessionTranscriptGetByIdError&gt;</code>, with `result.value` of type <code>[SessionTranscriptionResponse](src/models/session-transcription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SessionsFullSummary

> Source: [SessionsFullSummary](src/resources/sessions-full-summary.ts)

<details>
<summary><code>sessionFullSummaryGetById(request: SessionsFullSummary.SessionFullSummaryGetByIdRequest, options?: RequestOptions): ApiPromise&lt;SessionSummaryResponse, SessionsFullSummary.SessionFullSummaryGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionsFullSummary.sessionFullSummaryGetById({
    sessionId: "some example string",
  });
  // TODO: Handle 'response' of type SessionSummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type SessionsFullSummary.SessionFullSummaryGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionsFullSummary.sessionFullSummaryGetById({
  sessionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionSummaryResponse
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
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionsFullSummary.sessionFullSummaryGetById(request)`

- **OnSuccess**: <code>[SessionSummaryResponse](src/models/session-summary-response.ts)</code>
- **OnError**: throws <code>[SessionsFullSummary.SessionFullSummaryGetByIdError](src/resources/sessions-full-summary.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionsFullSummary.sessionFullSummaryGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionSummaryResponse, SessionsFullSummary.SessionFullSummaryGetByIdError&gt;</code>, with `result.value` of type <code>[SessionSummaryResponse](src/models/session-summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SessionsLatency

> Source: [SessionsLatency](src/resources/sessions-latency.ts)

<details>
<summary><code>sessionLatencyGetById(request: SessionsLatency.SessionLatencyGetByIdRequest, options?: RequestOptions): ApiPromise&lt;InspectLatencyResponse, SessionsLatency.SessionLatencyGetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionsLatency.sessionLatencyGetById({ sessionId: "some example string" });
  // TODO: Handle 'response' of type InspectLatencyResponse
} catch (err) {
  // TODO: Handle 'err' of type SessionsLatency.SessionLatencyGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionsLatency.sessionLatencyGetById({
  sessionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InspectLatencyResponse
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
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionsLatency.sessionLatencyGetById(request)`

- **OnSuccess**: <code>[InspectLatencyResponse](src/models/inspect-latency-response.ts)</code>
- **OnError**: throws <code>[SessionsLatency.SessionLatencyGetByIdError](src/resources/sessions-latency.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionsLatency.sessionLatencyGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InspectLatencyResponse, SessionsLatency.SessionLatencyGetByIdError&gt;</code>, with `result.value` of type <code>[InspectLatencyResponse](src/models/inspect-latency-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SessionsTimeline

> Source: [SessionsTimeline](src/resources/sessions-timeline.ts)

<details>
<summary><code>sessionTimelineGetById(request: SessionsTimeline.SessionTimelineGetByIdRequest, options?: RequestOptions): ApiPromise&lt;SessionTimelineResponse, SessionsTimeline.SessionTimelineGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Consolidated, time-ordered timeline of a session's events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionsTimeline.sessionTimelineGetById({ sessionId: "some example string" });
  // TODO: Handle 'response' of type SessionTimelineResponse
} catch (err) {
  // TODO: Handle 'err' of type SessionsTimeline.SessionTimelineGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionsTimeline.sessionTimelineGetById({
  sessionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionTimelineResponse
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
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionsTimeline.sessionTimelineGetById(request)`

- **OnSuccess**: <code>[SessionTimelineResponse](src/models/session-timeline-response.ts)</code>
- **OnError**: throws <code>[SessionsTimeline.SessionTimelineGetByIdError](src/resources/sessions-timeline.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionsTimeline.sessionTimelineGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionTimelineResponse, SessionsTimeline.SessionTimelineGetByIdError&gt;</code>, with `result.value` of type <code>[SessionTimelineResponse](src/models/session-timeline-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SessionDebug

> Source: [SessionDebug](src/resources/session-debug.ts)

<details>
<summary><code>getSessionDataBySessionId(request: SessionDebug.GetSessionDataBySessionIdRequest, options?: RequestOptions): ApiPromise&lt;SessionData, SessionDebug.GetSessionDataBySessionIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionDebug.getSessionDataBySessionId({ sessionId: 1 });
  // TODO: Handle 'response' of type SessionData
} catch (err) {
  // TODO: Handle 'err' of type SessionDebug.GetSessionDataBySessionIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionDebug.getSessionDataBySessionId({ sessionId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionData
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
| <code>sessionId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionDebug.getSessionDataBySessionId(request)`

- **OnSuccess**: <code>[SessionData](src/models/session-data.ts)</code>
- **OnError**: throws <code>[SessionDebug.GetSessionDataBySessionIdError](src/resources/session-debug.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionDebug.getSessionDataBySessionId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionData, SessionDebug.GetSessionDataBySessionIdError&gt;</code>, with `result.value` of type <code>[SessionData](src/models/session-data.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSessionDataBySid(request: SessionDebug.GetSessionDataBySidRequest, options?: RequestOptions): ApiPromise&lt;SessionData, SessionDebug.GetSessionDataBySidError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionDebug.getSessionDataBySid({
    channelManagerService: "some example string",
    channelManagerSid: "some example string",
  });
  // TODO: Handle 'response' of type SessionData
} catch (err) {
  // TODO: Handle 'err' of type SessionDebug.GetSessionDataBySidError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionDebug.getSessionDataBySid({
  channelManagerService: "some example string",
  channelManagerSid: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionData
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
| <code>channelManagerService</code> | <code>string</code> | - |
| <code>channelManagerSid</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionDebug.getSessionDataBySid(request)`

- **OnSuccess**: <code>[SessionData](src/models/session-data.ts)</code>
- **OnError**: throws <code>[SessionDebug.GetSessionDataBySidError](src/resources/session-debug.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionDebug.getSessionDataBySid(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionData, SessionDebug.GetSessionDataBySidError&gt;</code>, with `result.value` of type <code>[SessionData](src/models/session-data.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSessionToolCallResultById(request: SessionDebug.GetSessionToolCallResultByIdRequest, options?: RequestOptions): ApiPromise&lt;ToolResultData, SessionDebug.GetSessionToolCallResultByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionDebug.getSessionToolCallResultById({
    sessionId: 1,
    toolCallId: "some example string",
  });
  // TODO: Handle 'response' of type ToolResultData
} catch (err) {
  // TODO: Handle 'err' of type SessionDebug.GetSessionToolCallResultByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionDebug.getSessionToolCallResultById({
  sessionId: 1,
  toolCallId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolResultData
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
| <code>sessionId</code> | <code>number</code> | - |
| <code>toolCallId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionDebug.getSessionToolCallResultById(request)`

- **OnSuccess**: <code>[ToolResultData](src/models/tool-result-data.ts)</code>
- **OnError**: throws <code>[SessionDebug.GetSessionToolCallResultByIdError](src/resources/session-debug.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionDebug.getSessionToolCallResultById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolResultData, SessionDebug.GetSessionToolCallResultByIdError&gt;</code>, with `result.value` of type <code>[ToolResultData](src/models/tool-result-data.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationsSipIpRanges

> Source: [OrganizationsSipIpRanges](src/resources/organizations-sip-ip-ranges.ts)

<details>
<summary><code>organizationSipIpRangesCreate(request: OrganizationsSipIpRanges.OrganizationSipIpRangesCreateRequest, options?: RequestOptions): ApiPromise&lt;OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an unverified SIP signaling/media IP range for the current organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsSipIpRanges.organizationSipIpRangesCreate({
    body: { type: OrganizationSipIpRangeType1.Signaling, ipRange: "some example string" },
  });
  // TODO: Handle 'response' of type OrganizationSipIpRange
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsSipIpRanges.organizationSipIpRangesCreate({
  body: { type: OrganizationSipIpRangeType1.Signaling, ipRange: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationSipIpRange
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
| <code>body</code> | <code>[OrganizationSipIpRangeCreate](src/models/organization-sip-ip-range-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsSipIpRanges.organizationSipIpRangesCreate(request)`

- **OnSuccess**: <code>[OrganizationSipIpRange](src/models/organization-sip-ip-range.ts)</code>
- **OnError**: throws <code>[OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError](src/resources/organizations-sip-ip-ranges.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsSipIpRanges.organizationSipIpRangesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError&gt;</code>, with `result.value` of type <code>[OrganizationSipIpRange](src/models/organization-sip-ip-range.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationSipIpRangesDelete(request: OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a SIP signaling/media IP range for the current organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.organizationsSipIpRanges.organizationSipIpRangesDelete({ sipIpRangeId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsSipIpRanges.organizationSipIpRangesDelete({
  sipIpRangeId: 1,
}).asApiResult();
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
| <code>sipIpRangeId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsSipIpRanges.organizationSipIpRangesDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError](src/resources/organizations-sip-ip-ranges.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsSipIpRanges.organizationSipIpRangesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationSipIpRangesList(options?: RequestOptions): ApiPromise&lt;OrganizationSipIpRange[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List SIP signaling/media IP ranges for the current organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsSipIpRanges.organizationSipIpRangesList();
  // TODO: Handle 'response' of type OrganizationSipIpRange[]
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
const result = await client.organizationsSipIpRanges.organizationSipIpRangesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationSipIpRange[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsSipIpRanges.organizationSipIpRangesList()`

- **OnSuccess**: <code>[OrganizationSipIpRange](src/models/organization-sip-ip-range.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.organizationsSipIpRanges.organizationSipIpRangesList().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationSipIpRange[], ApiError&gt;</code>, with `result.value` of type <code>[OrganizationSipIpRange](src/models/organization-sip-ip-range.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationSipIpRangesUpdate(request: OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateRequest, options?: RequestOptions): ApiPromise&lt;OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a SIP IP range. The verified status is managed by Syllable only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsSipIpRanges.organizationSipIpRangesUpdate({
    sipIpRangeId: 1,
    body: {},
  });
  // TODO: Handle 'response' of type OrganizationSipIpRange
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsSipIpRanges.organizationSipIpRangesUpdate({
  sipIpRangeId: 1,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationSipIpRange
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
| <code>sipIpRangeId</code> | <code>number</code> | - |
| <code>body</code> | <code>[OrganizationSipIpRangeUpdate](src/models/organization-sip-ip-range-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsSipIpRanges.organizationSipIpRangesUpdate(request)`

- **OnSuccess**: <code>[OrganizationSipIpRange](src/models/organization-sip-ip-range.ts)</code>
- **OnError**: throws <code>[OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError](src/resources/organizations-sip-ip-ranges.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsSipIpRanges.organizationSipIpRangesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError&gt;</code>, with `result.value` of type <code>[OrganizationSipIpRange](src/models/organization-sip-ip-range.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VoiceGroups

> Source: [VoiceGroups](src/resources/voice-groups.ts)

<details>
<summary><code>voiceGroupsCreate(request: VoiceGroups.VoiceGroupsCreateRequest, options?: RequestOptions): ApiPromise&lt;VoiceGroupResponse, VoiceGroups.VoiceGroupsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new voice group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceGroups.voiceGroupsCreate({
    body: {
      name: "some example string",
      languageConfigs: [
        {
          languageCode: LanguageCode1.YueHk,
          voiceProvider: TtsProvider2.OpenAi,
          voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
          dtmfCode: 1,
        },
      ],
      skipCurrentLanguageInMessage: true,
    },
  });
  // TODO: Handle 'response' of type VoiceGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type VoiceGroups.VoiceGroupsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceGroups.voiceGroupsCreate({
  body: {
    name: "some example string",
    languageConfigs: [
      {
        languageCode: LanguageCode1.YueHk,
        voiceProvider: TtsProvider2.OpenAi,
        voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
        dtmfCode: 1,
      },
    ],
    skipCurrentLanguageInMessage: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoiceGroupResponse
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
| <code>body</code> | <code>[VoiceGroupCreateRequest](src/models/voice-group-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceGroups.voiceGroupsCreate(request)`

- **OnSuccess**: <code>[VoiceGroupResponse](src/models/voice-group-response.ts)</code>
- **OnError**: throws <code>[VoiceGroups.VoiceGroupsCreateError](src/resources/voice-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceGroups.voiceGroupsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoiceGroupResponse, VoiceGroups.VoiceGroupsCreateError&gt;</code>, with `result.value` of type <code>[VoiceGroupResponse](src/models/voice-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voiceGroupsCreateVoiceSample(request: VoiceGroups.VoiceGroupsCreateVoiceSampleRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, VoiceGroups.VoiceGroupsCreateVoiceSampleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate voice sample.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceGroups.voiceGroupsCreateVoiceSample({
    body: {
      languageCode: LanguageCode1.YueHk,
      voiceProvider: TtsProvider2.OpenAi,
      voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
    },
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type VoiceGroups.VoiceGroupsCreateVoiceSampleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceGroups.voiceGroupsCreateVoiceSample({
  body: {
    languageCode: LanguageCode1.YueHk,
    voiceProvider: TtsProvider2.OpenAi,
    voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
  },
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
| <code>body</code> | <code>[VoiceSampleCreateRequest](src/models/voice-sample-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceGroups.voiceGroupsCreateVoiceSample(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[VoiceGroups.VoiceGroupsCreateVoiceSampleError](src/resources/voice-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceGroups.voiceGroupsCreateVoiceSample(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, VoiceGroups.VoiceGroupsCreateVoiceSampleError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voiceGroupsDelete(request: VoiceGroups.VoiceGroupsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, VoiceGroups.VoiceGroupsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a voice group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceGroups.voiceGroupsDelete({
    voiceGroupId: 1,
    reason: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type VoiceGroups.VoiceGroupsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceGroups.voiceGroupsDelete({
  voiceGroupId: 1,
  reason: "some example string",
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
| <code>voiceGroupId</code> | <code>number</code> | - |
| <code>reason</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceGroups.voiceGroupsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[VoiceGroups.VoiceGroupsDeleteError](src/resources/voice-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceGroups.voiceGroupsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, VoiceGroups.VoiceGroupsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voiceGroupsGetById(request: VoiceGroups.VoiceGroupsGetByIdRequest, options?: RequestOptions): ApiPromise&lt;VoiceGroupResponse, VoiceGroups.VoiceGroupsGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a given voice group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceGroups.voiceGroupsGetById({ voiceGroupId: 1 });
  // TODO: Handle 'response' of type VoiceGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type VoiceGroups.VoiceGroupsGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceGroups.voiceGroupsGetById({ voiceGroupId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoiceGroupResponse
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
| <code>voiceGroupId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceGroups.voiceGroupsGetById(request)`

- **OnSuccess**: <code>[VoiceGroupResponse](src/models/voice-group-response.ts)</code>
- **OnError**: throws <code>[VoiceGroups.VoiceGroupsGetByIdError](src/resources/voice-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceGroups.voiceGroupsGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoiceGroupResponse, VoiceGroups.VoiceGroupsGetByIdError&gt;</code>, with `result.value` of type <code>[VoiceGroupResponse](src/models/voice-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voiceGroupsList(request: VoiceGroups.VoiceGroupsListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseVoiceGroupResponse, VoiceGroups.VoiceGroupsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch voice groups.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceGroups.voiceGroupsList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    orderBy: LanguageGroupProperties.Name,
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseVoiceGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type VoiceGroups.VoiceGroupsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceGroups.voiceGroupsList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  orderBy: LanguageGroupProperties.Name,
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseVoiceGroupResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[VoiceGroupProperties](src/models/voice-group-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy315](src/models/unions/order-by315.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields27](src/models/unions/fields27.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceGroups.voiceGroupsList(request)`

- **OnSuccess**: <code>[ListResponseVoiceGroupResponse](src/models/list-response-voice-group-response.ts)</code>
- **OnError**: throws <code>[VoiceGroups.VoiceGroupsListError](src/resources/voice-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceGroups.voiceGroupsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseVoiceGroupResponse, VoiceGroups.VoiceGroupsListError&gt;</code>, with `result.value` of type <code>[ListResponseVoiceGroupResponse](src/models/list-response-voice-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voiceGroupsUpdate(request: VoiceGroups.VoiceGroupsUpdateRequest, options?: RequestOptions): ApiPromise&lt;VoiceGroupResponse, VoiceGroups.VoiceGroupsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing voice group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceGroups.voiceGroupsUpdate({
    body: {
      name: "some example string",
      languageConfigs: [
        {
          languageCode: LanguageCode1.YueHk,
          voiceProvider: TtsProvider2.OpenAi,
          voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
          dtmfCode: 1,
        },
      ],
      skipCurrentLanguageInMessage: true,
      id: 1,
    },
  });
  // TODO: Handle 'response' of type VoiceGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type VoiceGroups.VoiceGroupsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceGroups.voiceGroupsUpdate({
  body: {
    name: "some example string",
    languageConfigs: [
      {
        languageCode: LanguageCode1.YueHk,
        voiceProvider: TtsProvider2.OpenAi,
        voiceDisplayName: AgentVoiceDisplayName3.AchernarEnglish,
        dtmfCode: 1,
      },
    ],
    skipCurrentLanguageInMessage: true,
    id: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoiceGroupResponse
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
| <code>body</code> | <code>[VoiceGroupUpdateRequest](src/models/voice-group-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceGroups.voiceGroupsUpdate(request)`

- **OnSuccess**: <code>[VoiceGroupResponse](src/models/voice-group-response.ts)</code>
- **OnError**: throws <code>[VoiceGroups.VoiceGroupsUpdateError](src/resources/voice-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceGroups.voiceGroupsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoiceGroupResponse, VoiceGroups.VoiceGroupsUpdateError&gt;</code>, with `result.value` of type <code>[VoiceGroupResponse](src/models/voice-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Takeouts

> Source: [Takeouts](src/resources/takeouts.ts)

<details>
<summary><code>takeoutsCreate(options?: RequestOptions): ApiPromise&lt;CreateTakeoutResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.takeouts.takeoutsCreate();
  // TODO: Handle 'response' of type CreateTakeoutResponse
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
const result = await client.takeouts.takeoutsCreate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTakeoutResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.takeouts.takeoutsCreate()`

- **OnSuccess**: <code>[CreateTakeoutResponse](src/models/create-takeout-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.takeouts.takeoutsCreate().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTakeoutResponse, ApiError&gt;</code>, with `result.value` of type <code>[CreateTakeoutResponse](src/models/create-takeout-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>takeoutsGetByJobId(request: Takeouts.TakeoutsGetByJobIdRequest, options?: RequestOptions): ApiPromise&lt;TakeoutStatusResponse, Takeouts.TakeoutsGetByJobIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.takeouts.takeoutsGetByJobId({ jobId: "some example string" });
  // TODO: Handle 'response' of type TakeoutStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Takeouts.TakeoutsGetByJobIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.takeouts.takeoutsGetByJobId({ jobId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TakeoutStatusResponse
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
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.takeouts.takeoutsGetByJobId(request)`

- **OnSuccess**: <code>[TakeoutStatusResponse](src/models/takeout-status-response.ts)</code>
- **OnError**: throws <code>[Takeouts.TakeoutsGetByJobIdError](src/resources/takeouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.takeouts.takeoutsGetByJobId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TakeoutStatusResponse, Takeouts.TakeoutsGetByJobIdError&gt;</code>, with `result.value` of type <code>[TakeoutStatusResponse](src/models/takeout-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>takeoutsGetFile(request: Takeouts.TakeoutsGetFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, Takeouts.TakeoutsGetFileError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.takeouts.takeoutsGetFile({ jobId: "some example string", fileName: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Takeouts.TakeoutsGetFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.takeouts.takeoutsGetFile({
  jobId: "some example string",
  fileName: "some example string",
}).asApiResult();
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
| <code>jobId</code> | <code>string</code> | - |
| <code>fileName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.takeouts.takeoutsGetFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Takeouts.TakeoutsGetFileError](src/resources/takeouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.takeouts.takeoutsGetFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Takeouts.TakeoutsGetFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>usersCreate(request: Users.UsersCreateRequest, options?: RequestOptions): ApiPromise&lt;UserResponse, Users.UsersCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersCreate({ body: { email: "some example string", roleId: 1 } });
  // TODO: Handle 'response' of type UserResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersCreate({
  body: { email: "some example string", roleId: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponse
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
| <code>body</code> | <code>[UserCreateRequest](src/models/user-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersCreate(request)`

- **OnSuccess**: <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: throws <code>[Users.UsersCreateError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponse, Users.UsersCreateError&gt;</code>, with `result.value` of type <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersDelete(request: Users.UsersDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Users.UsersDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersDelete({
    body: { email: "some example string", reason: "some example string" },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersDelete({
  body: { email: "some example string", reason: "some example string" },
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
| <code>body</code> | <code>[UserDeleteRequest](src/models/user-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Users.UsersDeleteError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Users.UsersDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersDeleteAccount(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request removal of the account of the user calling this endpoint. Intended for removing trial
accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersDeleteAccount();
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.users.usersDeleteAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersDeleteAccount()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.usersDeleteAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersGetByEmail(request: Users.UsersGetByEmailRequest, options?: RequestOptions): ApiPromise&lt;UserResponse, Users.UsersGetByEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a given user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersGetByEmail({ userEmail: "some example string" });
  // TODO: Handle 'response' of type UserResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersGetByEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersGetByEmail({ userEmail: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponse
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
| <code>userEmail</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersGetByEmail(request)`

- **OnSuccess**: <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: throws <code>[Users.UsersGetByEmailError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersGetByEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponse, Users.UsersGetByEmailError&gt;</code>, with `result.value` of type <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersList(request: Users.UsersListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseUserResponse, Users.UsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseUserResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[UserProperties](src/models/user-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy317](src/models/unions/order-by317.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields29](src/models/unions/fields29.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersList(request)`

- **OnSuccess**: <code>[ListResponseUserResponse](src/models/list-response-user-response.ts)</code>
- **OnError**: throws <code>[Users.UsersListError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseUserResponse, Users.UsersListError&gt;</code>, with `result.value` of type <code>[ListResponseUserResponse](src/models/list-response-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersSendEmail(request: Users.UsersSendEmailRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Users.UsersSendEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a welcome email to a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersSendEmail({ userEmail: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersSendEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersSendEmail({ userEmail: "some example string" }).asApiResult();
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
| <code>userEmail</code> | <code>string</code> | - |
| <code>skipAuth?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersSendEmail(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Users.UsersSendEmailError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersSendEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Users.UsersSendEmailError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersUpdate(request: Users.UsersUpdateRequest, options?: RequestOptions): ApiPromise&lt;UserResponse, Users.UsersUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersUpdate({ body: { email: "some example string", roleId: 1 } });
  // TODO: Handle 'response' of type UserResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersUpdate({
  body: { email: "some example string", roleId: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponse
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
| <code>body</code> | <code>[UserUpdateRequest](src/models/user-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersUpdate(request)`

- **OnSuccess**: <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: throws <code>[Users.UsersUpdateError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponse, Users.UsersUpdateError&gt;</code>, with `result.value` of type <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## V1

> Source: [V1](src/resources/v1.ts)

<details>
<summary><code>usersCreate(request: V1.UsersCreateRequest, options?: RequestOptions): ApiPromise&lt;UserResponse, V1.UsersCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1.usersCreate({ body: { email: "some example string", roleId: 1 } });
  // TODO: Handle 'response' of type UserResponse
} catch (err) {
  // TODO: Handle 'err' of type V1.UsersCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1.usersCreate({
  body: { email: "some example string", roleId: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponse
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
| <code>body</code> | <code>[UserCreateRequest](src/models/user-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1.usersCreate(request)`

- **OnSuccess**: <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: throws <code>[V1.UsersCreateError](src/resources/v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.v1.usersCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponse, V1.UsersCreateError&gt;</code>, with `result.value` of type <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersDelete(request: V1.UsersDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, V1.UsersDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1.usersDelete({
    body: { email: "some example string", reason: "some example string" },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type V1.UsersDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1.usersDelete({
  body: { email: "some example string", reason: "some example string" },
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
| <code>body</code> | <code>[UserDeleteRequest](src/models/user-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1.usersDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[V1.UsersDeleteError](src/resources/v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.v1.usersDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, V1.UsersDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersDeleteAccount(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request removal of the account of the user calling this endpoint. Intended for removing trial
accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1.usersDeleteAccount();
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.v1.usersDeleteAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1.usersDeleteAccount()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.v1.usersDeleteAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersGetByEmail(request: V1.UsersGetByEmailRequest, options?: RequestOptions): ApiPromise&lt;UserResponse, V1.UsersGetByEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a given user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1.usersGetByEmail({ userEmail: "some example string" });
  // TODO: Handle 'response' of type UserResponse
} catch (err) {
  // TODO: Handle 'err' of type V1.UsersGetByEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1.usersGetByEmail({ userEmail: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponse
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
| <code>userEmail</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1.usersGetByEmail(request)`

- **OnSuccess**: <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: throws <code>[V1.UsersGetByEmailError](src/resources/v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.v1.usersGetByEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponse, V1.UsersGetByEmailError&gt;</code>, with `result.value` of type <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersList(request: V1.UsersListRequest, options?: RequestOptions): ApiPromise&lt;ListResponseUserResponse, V1.UsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the existing users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1.usersList({
    page: 0,
    limit: 25,
    searchFieldValues: ["Some Object Name"],
    startDatetime: "2023-01-01T00:00:00Z",
    endDatetime: "2024-01-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type ListResponseUserResponse
} catch (err) {
  // TODO: Handle 'err' of type V1.UsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1.usersList({
  page: 0,
  limit: 25,
  searchFieldValues: ["Some Object Name"],
  startDatetime: "2023-01-01T00:00:00Z",
  endDatetime: "2024-01-01T00:00:00Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseUserResponse
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
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | The page number from which to start (0-based) |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return<br>**Default**: 25 |
| <code>searchFields?</code> | <code>[UserProperties](src/models/user-properties.ts)[]</code> | String names of fields to search. Correspond by index to search field values |
| <code>searchFieldValues?</code> | <code>string[]</code> | Values of fields to search. Correspond by index to search fields. Unless field name contains "list", an individual search field value cannot be a list |
| <code>orderBy?</code> | <code>[OrderBy317](src/models/unions/order-by317.ts)</code> | The field whose value should be used to order the results |
| <code>orderByDirection?</code> | <code>[OrderByDirection1](src/models/unions/order-by-direction1.ts)</code> | The direction in which to order the results |
| <code>fields?</code> | <code>[Fields29](src/models/unions/fields29.ts)</code> | The fields to include in the response |
| <code>startDatetime?</code> | <code>[StartDatetime3](src/models/unions/start-datetime3.ts)</code> | The start datetime for filtering results |
| <code>endDatetime?</code> | <code>[EndDatetime3](src/models/unions/end-datetime3.ts)</code> | The end datetime for filtering results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1.usersList(request)`

- **OnSuccess**: <code>[ListResponseUserResponse](src/models/list-response-user-response.ts)</code>
- **OnError**: throws <code>[V1.UsersListError](src/resources/v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.v1.usersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseUserResponse, V1.UsersListError&gt;</code>, with `result.value` of type <code>[ListResponseUserResponse](src/models/list-response-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersSendEmail(request: V1.UsersSendEmailRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, V1.UsersSendEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a welcome email to a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1.usersSendEmail({ userEmail: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type V1.UsersSendEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1.usersSendEmail({ userEmail: "some example string" }).asApiResult();
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
| <code>userEmail</code> | <code>string</code> | - |
| <code>skipAuth?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1.usersSendEmail(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[V1.UsersSendEmailError](src/resources/v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.v1.usersSendEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, V1.UsersSendEmailError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersUpdate(request: V1.UsersUpdateRequest, options?: RequestOptions): ApiPromise&lt;UserResponse, V1.UsersUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1.usersUpdate({ body: { email: "some example string", roleId: 1 } });
  // TODO: Handle 'response' of type UserResponse
} catch (err) {
  // TODO: Handle 'err' of type V1.UsersUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1.usersUpdate({
  body: { email: "some example string", roleId: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponse
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
| <code>body</code> | <code>[UserUpdateRequest](src/models/user-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1.usersUpdate(request)`

- **OnSuccess**: <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: throws <code>[V1.UsersUpdateError](src/resources/v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.v1.usersUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponse, V1.UsersUpdateError&gt;</code>, with `result.value` of type <code>[UserResponse](src/models/user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SyllableSdkError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

