# Reference

> Source: [HightouchClient](src/client.ts)

## Campaigns

> Source: [Campaigns](src/resources/campaigns.ts)

<details>
<summary><code>getSendStatuses(request: Campaigns.GetSendStatusesRequest, options?: RequestOptions): ApiPromise&lt;BatchSendStatusResponse, Campaigns.GetSendStatusesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.getSendStatuses({
    campaignId: "some example string",
    body: { sendIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type BatchSendStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.GetSendStatusesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns
  .getSendStatuses({ campaignId: "some example string", body: { sendIds: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchSendStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaignId</code> | <code>string</code> | - |
| <code>body</code> | <code>[BatchSendStatusRequest](src/models/batch-send-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.getSendStatuses(request)`

- **OnSuccess**: <code>[BatchSendStatusResponse](src/models/batch-send-status-response.ts)</code>
- **OnError**: throws <code>[Campaigns.GetSendStatusesError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.getSendStatuses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchSendStatusResponse, Campaigns.GetSendStatusesError&gt;</code>, with `result.value` of type <code>[BatchSendStatusResponse](src/models/batch-send-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerCampaign(request: Campaigns.TriggerCampaignRequest, options?: RequestOptions): ApiPromise&lt;CampaignsTriggerResponse, Campaigns.TriggerCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an API-triggered campaign: send to the given recipients.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.triggerCampaign({
    campaignId: "some example string",
    body: { recipients: [{}] },
  });
  // TODO: Handle 'response' of type CampaignsTriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.TriggerCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns
  .triggerCampaign({ campaignId: "some example string", body: { recipients: [{}] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignsTriggerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaignId</code> | <code>string</code> | - |
| <code>body</code> | <code>[StartCampaignRequest](src/models/start-campaign-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.triggerCampaign(request)`

- **OnSuccess**: <code>[CampaignsTriggerResponse](src/models/unions/campaigns-trigger-response.ts)</code>
- **OnError**: throws <code>[Campaigns.TriggerCampaignError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.triggerCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignsTriggerResponse, Campaigns.TriggerCampaignError&gt;</code>, with `result.value` of type <code>[CampaignsTriggerResponse](src/models/unions/campaigns-trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DecisionEngine

> Source: [DecisionEngine](src/resources/decision-engine.ts)

<details>
<summary><code>cloneMessage(request: DecisionEngine.CloneMessageRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowMessagesCloneResponse, DecisionEngine.CloneMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clone a message within a flow. The copy keeps the source message's
config, tags, guardrails, and variables, and is created disabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.cloneMessage({
    flowId: "some example string",
    messageId: "some example string",
  });
  // TODO: Handle 'response' of type DecisionEngineFlowMessagesCloneResponse
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.CloneMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine
  .cloneMessage({ flowId: "some example string", messageId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowMessagesCloneResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |
| <code>messageId</code> | <code>string</code> | The UUID of the message to clone |
| <code>body?</code> | <code>[DecisionEngineMessageClone](src/models/decision-engine-message-clone.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.cloneMessage(request)`

- **OnSuccess**: <code>[DecisionEngineFlowMessagesCloneResponse](src/models/unions/decision-engine-flow-messages-clone-response.ts)</code>
- **OnError**: throws <code>[DecisionEngine.CloneMessageError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.cloneMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowMessagesCloneResponse, DecisionEngine.CloneMessageError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowMessagesCloneResponse](src/models/unions/decision-engine-flow-messages-clone-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMessage(request: DecisionEngine.CreateMessageRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowMessagesResponse11, DecisionEngine.CreateMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a message in a flow

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.createMessage({
    flowId: "some example string",
    body: { name: "some example string", channelId: "some example string", config: { key: {} } },
  });
  // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse11
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.CreateMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine
  .createMessage({
    flowId: "some example string",
    body: { name: "some example string", channelId: "some example string", config: { key: {} } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowMessagesResponse11
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |
| <code>body</code> | <code>[DecisionEngineMessageCreate](src/models/decision-engine-message-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.createMessage(request)`

- **OnSuccess**: <code>[DecisionEngineFlowMessagesResponse11](src/models/unions/decision-engine-flow-messages-response11.ts)</code>
- **OnError**: throws <code>[DecisionEngine.CreateMessageError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.createMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowMessagesResponse11, DecisionEngine.CreateMessageError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowMessagesResponse11](src/models/unions/decision-engine-flow-messages-response11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMessage(request: DecisionEngine.DeleteMessageRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowMessagesResponse13, DecisionEngine.DeleteMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a message. The message is soft-deleted and disabled in the flow,
so it is no longer returned by the API and is ineligible for future sends.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.deleteMessage({
    flowId: "some example string",
    messageId: "some example string",
  });
  // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse13
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.DeleteMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine
  .deleteMessage({ flowId: "some example string", messageId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowMessagesResponse13
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |
| <code>messageId</code> | <code>string</code> | The UUID of the message |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.deleteMessage(request)`

- **OnSuccess**: <code>[DecisionEngineFlowMessagesResponse13](src/models/unions/decision-engine-flow-messages-response13.ts)</code>
- **OnError**: throws <code>[DecisionEngine.DeleteMessageError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.deleteMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowMessagesResponse13, DecisionEngine.DeleteMessageError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowMessagesResponse13](src/models/unions/decision-engine-flow-messages-response13.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlow(request: DecisionEngine.GetFlowRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowResponse, DecisionEngine.GetFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a decision engine flow by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.getFlow({ flowId: "some example string" });
  // TODO: Handle 'response' of type DecisionEngineFlowResponse
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.GetFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine.getFlow({ flowId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.getFlow(request)`

- **OnSuccess**: <code>[DecisionEngineFlowResponse](src/models/unions/decision-engine-flow-response.ts)</code>
- **OnError**: throws <code>[DecisionEngine.GetFlowError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.getFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowResponse, DecisionEngine.GetFlowError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowResponse](src/models/unions/decision-engine-flow-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMessage(request: DecisionEngine.GetMessageRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowMessagesResponse11, DecisionEngine.GetMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single message by flow and message ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.getMessage({
    flowId: "some example string",
    messageId: "some example string",
  });
  // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse11
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.GetMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine
  .getMessage({ flowId: "some example string", messageId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowMessagesResponse11
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |
| <code>messageId</code> | <code>string</code> | The UUID of the message |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.getMessage(request)`

- **OnSuccess**: <code>[DecisionEngineFlowMessagesResponse11](src/models/unions/decision-engine-flow-messages-response11.ts)</code>
- **OnError**: throws <code>[DecisionEngine.GetMessageError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.getMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowMessagesResponse11, DecisionEngine.GetMessageError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowMessagesResponse11](src/models/unions/decision-engine-flow-messages-response11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFlows(request?: DecisionEngine.ListFlowsRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowsResponse1, DecisionEngine.ListFlowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List decision engine flows in the workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.listFlows();
  // TODO: Handle 'response' of type DecisionEngineFlowsResponse1
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.ListFlowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine.listFlows().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name?</code> | <code>string</code> | optional filter by flow name |
| <code>limit?</code> | <code>number</code> | max results (default 100)<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | pagination offset<br>**Default**: 0 |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | sort field<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.listFlows(request)`

- **OnSuccess**: <code>[DecisionEngineFlowsResponse1](src/models/unions/decision-engine-flows-response1.ts)</code>
- **OnError**: throws <code>[DecisionEngine.ListFlowsError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.listFlows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowsResponse1, DecisionEngine.ListFlowsError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowsResponse1](src/models/unions/decision-engine-flows-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMessages(request: DecisionEngine.ListMessagesRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowMessagesResponse1, DecisionEngine.ListMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List messages for a flow

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.listMessages({ flowId: "some example string" });
  // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse1
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.ListMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine.listMessages({ flowId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowMessagesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.listMessages(request)`

- **OnSuccess**: <code>[DecisionEngineFlowMessagesResponse1](src/models/unions/decision-engine-flow-messages-response1.ts)</code>
- **OnError**: throws <code>[DecisionEngine.ListMessagesError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.listMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowMessagesResponse1, DecisionEngine.ListMessagesError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowMessagesResponse1](src/models/unions/decision-engine-flow-messages-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runFlow(request: DecisionEngine.RunFlowRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowRunResponse, DecisionEngine.RunFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a decision engine run for a specific flow

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.runFlow({ flowId: "some example string" });
  // TODO: Handle 'response' of type DecisionEngineFlowRunResponse
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.RunFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine.runFlow({ flowId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowRunResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.runFlow(request)`

- **OnSuccess**: <code>[DecisionEngineFlowRunResponse](src/models/unions/decision-engine-flow-run-response.ts)</code>
- **OnError**: throws <code>[DecisionEngine.RunFlowError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.runFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowRunResponse, DecisionEngine.RunFlowError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowRunResponse](src/models/unions/decision-engine-flow-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMessage(request: DecisionEngine.UpdateMessageRequest, options?: RequestOptions): ApiPromise&lt;DecisionEngineFlowMessagesResponse11, DecisionEngine.UpdateMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a message

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionEngine.updateMessage({
    flowId: "some example string",
    messageId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse11
} catch (err) {
  // TODO: Handle 'err' of type DecisionEngine.UpdateMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionEngine
  .updateMessage({ flowId: "some example string", messageId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DecisionEngineFlowMessagesResponse11
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flowId</code> | <code>string</code> | The UUID of the flow |
| <code>messageId</code> | <code>string</code> | The UUID of the message |
| <code>body</code> | <code>[DecisionEngineMessageUpdate](src/models/decision-engine-message-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionEngine.updateMessage(request)`

- **OnSuccess**: <code>[DecisionEngineFlowMessagesResponse11](src/models/unions/decision-engine-flow-messages-response11.ts)</code>
- **OnError**: throws <code>[DecisionEngine.UpdateMessageError](src/resources/decision-engine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionEngine.updateMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DecisionEngineFlowMessagesResponse11, DecisionEngine.UpdateMessageError&gt;</code>, with `result.value` of type <code>[DecisionEngineFlowMessagesResponse11](src/models/unions/decision-engine-flow-messages-response11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Destinations

> Source: [Destinations](src/resources/destinations.ts)

<details>
<summary><code>createDestination(request: Destinations.CreateDestinationRequest, options?: RequestOptions): ApiPromise&lt;DestinationsResponse1, Destinations.CreateDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new destination

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.createDestination({
    body: {
      name: "Webhook Website",
      slug: "webhookwebsite",
      type: "webhook",
      configuration: { url: "http://httpstat.us/200", methodKey: "url" },
    },
  });
  // TODO: Handle 'response' of type DestinationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Destinations.CreateDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations
  .createDestination({
    body: {
      name: "Webhook Website",
      slug: "webhookwebsite",
      type: "webhook",
      configuration: { url: "http://httpstat.us/200", methodKey: "url" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DestinationsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DestinationCreate](src/models/destination-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.createDestination(request)`

- **OnSuccess**: <code>[DestinationsResponse1](src/models/unions/destinations-response1.ts)</code>
- **OnError**: throws <code>[Destinations.CreateDestinationError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.createDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DestinationsResponse1, Destinations.CreateDestinationError&gt;</code>, with `result.value` of type <code>[DestinationsResponse1](src/models/unions/destinations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDestination(request: Destinations.GetDestinationRequest, options?: RequestOptions): ApiPromise&lt;Destination, Destinations.GetDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a destination based on its Hightouch ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getDestination({ destinationId: 1.5 });
  // TODO: Handle 'response' of type Destination
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getDestination({ destinationId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Destination
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinationId</code> | <code>number</code> | The destination's ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getDestination(request)`

- **OnSuccess**: <code>[Destination](src/models/destination.ts)</code>
- **OnError**: throws <code>[Destinations.GetDestinationError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Destination, Destinations.GetDestinationError&gt;</code>, with `result.value` of type <code>[Destination](src/models/destination.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDestination(request?: Destinations.ListDestinationRequest, options?: RequestOptions): ApiPromise&lt;DestinationsResponse, Destinations.ListDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the destinations in the user's workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.listDestination();
  // TODO: Handle 'response' of type DestinationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.ListDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.listDestination().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DestinationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name?</code> | <code>string</code> | Filter based on the destination's name |
| <code>slug?</code> | <code>string</code> | Filter based on destination's slug |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderByHightouchDestinationsApi](src/models/order-by-hightouch-destinations-api.ts)</code> | Order the returned destinations<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.listDestination(request)`

- **OnSuccess**: <code>[DestinationsResponse](src/models/destinations-response.ts)</code>
- **OnError**: throws <code>[Destinations.ListDestinationError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.listDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DestinationsResponse, Destinations.ListDestinationError&gt;</code>, with `result.value` of type <code>[DestinationsResponse](src/models/destinations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDestination(request: Destinations.UpdateDestinationRequest, options?: RequestOptions): ApiPromise&lt;DestinationsResponse1, Destinations.UpdateDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing destination

Patch a destination based on its Hightouch ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.updateDestination({
    destinationId: 1.5,
    body: {
      name: "Webhook Website code 201",
      configuration: { url: "http://httpstat.us/201", methodKey: "url" },
    },
  });
  // TODO: Handle 'response' of type DestinationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Destinations.UpdateDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations
  .updateDestination({
    destinationId: 1.5,
    body: {
      name: "Webhook Website code 201",
      configuration: { url: "http://httpstat.us/201", methodKey: "url" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DestinationsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinationId</code> | <code>number</code> | The destination's ID |
| <code>body</code> | <code>[DestinationUpdate](src/models/destination-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.updateDestination(request)`

- **OnSuccess**: <code>[DestinationsResponse1](src/models/unions/destinations-response1.ts)</code>
- **OnError**: throws <code>[Destinations.UpdateDestinationError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.updateDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DestinationsResponse1, Destinations.UpdateDestinationError&gt;</code>, with `result.value` of type <code>[DestinationsResponse1](src/models/unions/destinations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>createContract(request: Events.CreateContractRequest, options?: RequestOptions): ApiPromise&lt;EventsContractsResponse1, Events.CreateContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event contract

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.createContract({
    body: {
      name: "My Contract",
      events: [
        {
          schema: { type: "object", properties: {} },
          onUndeclaredFields: OnUndeclaredFields.AllowEvent,
          onSchemaViolation: OnSchemaViolation.BlockEvent,
          name: "Checked Out",
          type: Type.Track,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type EventsContractsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Events.CreateContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .createContract({
    body: {
      name: "My Contract",
      events: [
        {
          schema: { type: "object", properties: {} },
          onUndeclaredFields: OnUndeclaredFields.AllowEvent,
          onSchemaViolation: OnSchemaViolation.BlockEvent,
          name: "Checked Out",
          type: Type.Track,
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsContractsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EventContractCreate](src/models/event-contract-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.createContract(request)`

- **OnSuccess**: <code>[EventsContractsResponse1](src/models/unions/events-contracts-response1.ts)</code>
- **OnError**: throws <code>[Events.CreateContractError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.createContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsContractsResponse1, Events.CreateContractError&gt;</code>, with `result.value` of type <code>[EventsContractsResponse1](src/models/unions/events-contracts-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDomain(request: Events.CreateDomainRequest, options?: RequestOptions): ApiPromise&lt;EventsDomainsResponse1, Events.CreateDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event domain, with its events and components.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.createDomain({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type EventsDomainsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Events.CreateDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.createDomain({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsDomainsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EventDomainCreate](src/models/event-domain-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.createDomain(request)`

- **OnSuccess**: <code>[EventsDomainsResponse1](src/models/unions/events-domains-response1.ts)</code>
- **OnError**: throws <code>[Events.CreateDomainError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.createDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsDomainsResponse1, Events.CreateDomainError&gt;</code>, with `result.value` of type <code>[EventsDomainsResponse1](src/models/unions/events-domains-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContract(request: Events.GetContractRequest, options?: RequestOptions): ApiPromise&lt;EventsContractsResponse1, Events.GetContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a contract based on its contract ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getContract({ contractId: "some example string" });
  // TODO: Handle 'response' of type EventsContractsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Events.GetContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.getContract({ contractId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsContractsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contractId</code> | <code>string</code> | The id of the contract |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getContract(request)`

- **OnSuccess**: <code>[EventsContractsResponse1](src/models/unions/events-contracts-response1.ts)</code>
- **OnError**: throws <code>[Events.GetContractError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsContractsResponse1, Events.GetContractError&gt;</code>, with `result.value` of type <code>[EventsContractsResponse1](src/models/unions/events-contracts-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDomain(request: Events.GetDomainRequest, options?: RequestOptions): ApiPromise&lt;EventsDomainsResponse1, Events.GetDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a domain by its id, including its events and components.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getDomain({ domainId: "some example string" });
  // TODO: Handle 'response' of type EventsDomainsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Events.GetDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.getDomain({ domainId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsDomainsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainId</code> | <code>string</code> | The id of the domain |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getDomain(request)`

- **OnSuccess**: <code>[EventsDomainsResponse1](src/models/unions/events-domains-response1.ts)</code>
- **OnError**: throws <code>[Events.GetDomainError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsDomainsResponse1, Events.GetDomainError&gt;</code>, with `result.value` of type <code>[EventsDomainsResponse1](src/models/unions/events-domains-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContracts(request?: Events.ListContractsRequest, options?: RequestOptions): ApiPromise&lt;EventsContractsResponse, Events.ListContractsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all event contracts in the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listContracts();
  // TODO: Handle 'response' of type EventsContractsResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.ListContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.listContracts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsContractsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name?</code> | <code>string</code> | - |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderByHightouchEventsApi](src/models/order-by-hightouch-events-api.ts)</code> | specify the order<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.listContracts(request)`

- **OnSuccess**: <code>[EventsContractsResponse](src/models/events-contracts-response.ts)</code>
- **OnError**: throws <code>[Events.ListContractsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.listContracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsContractsResponse, Events.ListContractsError&gt;</code>, with `result.value` of type <code>[EventsContractsResponse](src/models/events-contracts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDomains(request?: Events.ListDomainsRequest, options?: RequestOptions): ApiPromise&lt;EventsDomainsResponse, Events.ListDomainsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listDomains();
  // TODO: Handle 'response' of type EventsDomainsResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.ListDomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.listDomains().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsDomainsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name?</code> | <code>string</code> | - |
| <code>source?</code> | <code>string</code> | filter to domains (and components) for this event source slug |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderByHightouchEventsApi](src/models/order-by-hightouch-events-api.ts)</code> | specify the order<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.listDomains(request)`

- **OnSuccess**: <code>[EventsDomainsResponse](src/models/events-domains-response.ts)</code>
- **OnError**: throws <code>[Events.ListDomainsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.listDomains(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsDomainsResponse, Events.ListDomainsError&gt;</code>, with `result.value` of type <code>[EventsDomainsResponse](src/models/events-domains-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContract(request: Events.UpdateContractRequest, options?: RequestOptions): ApiPromise&lt;EventsContractsResponse11, Events.UpdateContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing event contract

Patch an event contract based on its Hightouch ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.updateContract({
    contractId: "some example string",
    body: {
      events: [
        {
          schema: { type: "object", properties: {} },
          onUndeclaredFields: OnUndeclaredFields.BlockEvent,
          onSchemaViolation: OnSchemaViolation.BlockEvent,
          name: "Checked Out",
          type: Type.Track,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type EventsContractsResponse11
} catch (err) {
  // TODO: Handle 'err' of type Events.UpdateContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .updateContract({
    contractId: "some example string",
    body: {
      events: [
        {
          schema: { type: "object", properties: {} },
          onUndeclaredFields: OnUndeclaredFields.BlockEvent,
          onSchemaViolation: OnSchemaViolation.BlockEvent,
          name: "Checked Out",
          type: Type.Track,
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsContractsResponse11
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contractId</code> | <code>string</code> | - |
| <code>body</code> | <code>[EventContractUpdate](src/models/event-contract-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.updateContract(request)`

- **OnSuccess**: <code>[EventsContractsResponse11](src/models/unions/events-contracts-response11.ts)</code>
- **OnError**: throws <code>[Events.UpdateContractError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.updateContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsContractsResponse11, Events.UpdateContractError&gt;</code>, with `result.value` of type <code>[EventsContractsResponse11](src/models/unions/events-contracts-response11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDomain(request: Events.UpdateDomainRequest, options?: RequestOptions): ApiPromise&lt;EventsDomainsResponse1, Events.UpdateDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing event domain, replacing its events and components.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.updateDomain({ domainId: "some example string", body: {} });
  // TODO: Handle 'response' of type EventsDomainsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Events.UpdateDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.updateDomain({ domainId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsDomainsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainId</code> | <code>string</code> | The domain's id |
| <code>body</code> | <code>[EventDomainUpdate](src/models/event-domain-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.updateDomain(request)`

- **OnSuccess**: <code>[EventsDomainsResponse1](src/models/unions/events-domains-response1.ts)</code>
- **OnError**: throws <code>[Events.UpdateDomainError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.updateDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsDomainsResponse1, Events.UpdateDomainError&gt;</code>, with `result.value` of type <code>[EventsDomainsResponse1](src/models/unions/events-domains-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IdGraphs

> Source: [IdGraphs](src/resources/id-graphs.ts)

<details>
<summary><code>triggerRunIdGraph(request: IdGraphs.TriggerRunIdGraphRequest, options?: RequestOptions): ApiPromise&lt;TriggerRunIdrOutput, IdGraphs.TriggerRunIdGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: use `/idr/{graphId}/trigger` instead

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.idGraphs.triggerRunIdGraph({ graphId: "some example string" });
  // TODO: Handle 'response' of type TriggerRunIdrOutput
} catch (err) {
  // TODO: Handle 'err' of type IdGraphs.TriggerRunIdGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.idGraphs.triggerRunIdGraph({ graphId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerRunIdrOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graphId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TriggerRunIdrInput](src/models/trigger-run-idr-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.idGraphs.triggerRunIdGraph(request)`

- **OnSuccess**: <code>[TriggerRunIdrOutput](src/models/trigger-run-idr-output.ts)</code>
- **OnError**: throws <code>[IdGraphs.TriggerRunIdGraphError](src/resources/id-graphs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.idGraphs.triggerRunIdGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerRunIdrOutput, IdGraphs.TriggerRunIdGraphError&gt;</code>, with `result.value` of type <code>[TriggerRunIdrOutput](src/models/trigger-run-idr-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Idr

> Source: [Idr](src/resources/idr.ts)

<details>
<summary><code>listIdrRuns(request: Idr.ListIdrRunsRequest, options?: RequestOptions): ApiPromise&lt;ListIdrRunsOutput, Idr.ListIdrRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List runs for a given IDR graph

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.idr.listIdrRuns({ graphId: "some example string" });
  // TODO: Handle 'response' of type ListIdrRunsOutput
} catch (err) {
  // TODO: Handle 'err' of type Idr.ListIdrRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.idr.listIdrRuns({ graphId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListIdrRunsOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graphId</code> | <code>string</code> | Required. ID of the graph to list runs for. |
| <code>runId?</code> | <code>string</code> | Run ID to query for. |
| <code>after?</code> | <code>Date</code> (date-time) | Select runs that started on or after this ISO timestamp. |
| <code>before?</code> | <code>Date</code> (date-time) | Select runs that started on or before this ISO timestamp. |
| <code>limit?</code> | <code>number</code> | Maximum number of runs to return.<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | Offset to start at for pagination.<br>**Default**: 0 |
| <code>orderBy?</code> | <code>[OrderByHightouchIdrApi](src/models/order-by-hightouch-idr-api.ts)</code> | Field to sort by.<br>**Default**: "created_at" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.idr.listIdrRuns(request)`

- **OnSuccess**: <code>[ListIdrRunsOutput](src/models/list-idr-runs-output.ts)</code>
- **OnError**: throws <code>[Idr.ListIdrRunsError](src/resources/idr.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.idr.listIdrRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListIdrRunsOutput, Idr.ListIdrRunsError&gt;</code>, with `result.value` of type <code>[ListIdrRunsOutput](src/models/list-idr-runs-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queueForReprocessing(request: Idr.QueueForReprocessingRequest, options?: RequestOptions): ApiPromise&lt;IdrQueueForReprocessingOutput, Idr.QueueForReprocessingError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.idr.queueForReprocessing({
    graphId: "some example string",
    body: {
      identifiers: [{ value: "a@b.com", identifier: "email" }, { value: "1234567890", identifier: "phone" }],
      block: true,
    },
  });
  // TODO: Handle 'response' of type IdrQueueForReprocessingOutput
} catch (err) {
  // TODO: Handle 'err' of type Idr.QueueForReprocessingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.idr
  .queueForReprocessing({
    graphId: "some example string",
    body: {
      identifiers: [{ value: "a@b.com", identifier: "email" }, { value: "1234567890", identifier: "phone" }],
      block: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdrQueueForReprocessingOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graphId</code> | <code>string</code> | Required. ID of the graph containing the identifiers. |
| <code>body?</code> | <code>[IdrQueueForReprocessingInput](src/models/idr-queue-for-reprocessing-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.idr.queueForReprocessing(request)`

- **OnSuccess**: <code>[IdrQueueForReprocessingOutput](src/models/idr-queue-for-reprocessing-output.ts)</code>
- **OnError**: throws <code>[Idr.QueueForReprocessingError](src/resources/idr.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.idr.queueForReprocessing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdrQueueForReprocessingOutput, Idr.QueueForReprocessingError&gt;</code>, with `result.value` of type <code>[IdrQueueForReprocessingOutput](src/models/idr-queue-for-reprocessing-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reprocessStatus(request: Idr.ReprocessStatusRequest, options?: RequestOptions): ApiPromise&lt;IdrReprocessStatusOutput, Idr.ReprocessStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a reprocessing request

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.idr.reprocessStatus({
    graphId: "some example string",
    requestId: "some example string",
  });
  // TODO: Handle 'response' of type IdrReprocessStatusOutput
} catch (err) {
  // TODO: Handle 'err' of type Idr.ReprocessStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.idr
  .reprocessStatus({ graphId: "some example string", requestId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdrReprocessStatusOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graphId</code> | <code>string</code> | Required. ID of the graph for the reprocessing request. |
| <code>requestId</code> | <code>string</code> | Required. ID of the reprocessing request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.idr.reprocessStatus(request)`

- **OnSuccess**: <code>[IdrReprocessStatusOutput](src/models/idr-reprocess-status-output.ts)</code>
- **OnError**: throws <code>[Idr.ReprocessStatusError](src/resources/idr.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.idr.reprocessStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdrReprocessStatusOutput, Idr.ReprocessStatusError&gt;</code>, with `result.value` of type <code>[IdrReprocessStatusOutput](src/models/idr-reprocess-status-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerIdrRun(request: Idr.TriggerIdrRunRequest, options?: RequestOptions): ApiPromise&lt;TriggerRunIdrOutput, Idr.TriggerIdrRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new IDR run for a graph

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.idr.triggerIdrRun({ graphId: "some example string" });
  // TODO: Handle 'response' of type TriggerRunIdrOutput
} catch (err) {
  // TODO: Handle 'err' of type Idr.TriggerIdrRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.idr.triggerIdrRun({ graphId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerRunIdrOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>graphId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TriggerRunIdrInput](src/models/trigger-run-idr-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.idr.triggerIdrRun(request)`

- **OnSuccess**: <code>[TriggerRunIdrOutput](src/models/trigger-run-idr-output.ts)</code>
- **OnError**: throws <code>[Idr.TriggerIdrRunError](src/resources/idr.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.idr.triggerIdrRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerRunIdrOutput, Idr.TriggerIdrRunError&gt;</code>, with `result.value` of type <code>[TriggerRunIdrOutput](src/models/trigger-run-idr-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Models

> Source: [Models](src/resources/models.ts)

<details>
<summary><code>createModel(request: Models.CreateModelRequest, options?: RequestOptions): ApiPromise&lt;ModelsResponse1, Models.CreateModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new model

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.createModel({
    body: {
      name: "testModel3",
      slug: "testModel3",
      queryType: "raw_sql",
      sourceId: 1,
      isSchema: false,
      raw: { sql: "select id, last_name from users" },
      primaryKey: "id",
      description: "Users with their last names",
    },
  });
  // TODO: Handle 'response' of type ModelsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Models.CreateModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .createModel({
    body: {
      name: "testModel3",
      slug: "testModel3",
      queryType: "raw_sql",
      sourceId: 1,
      isSchema: false,
      raw: { sql: "select id, last_name from users" },
      primaryKey: "id",
      description: "Users with their last names",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>skipColumnQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>body</code> | <code>[ModelCreate](src/models/model-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.createModel(request)`

- **OnSuccess**: <code>[ModelsResponse1](src/models/unions/models-response1.ts)</code>
- **OnError**: throws <code>[Models.CreateModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.createModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsResponse1, Models.CreateModelError&gt;</code>, with `result.value` of type <code>[ModelsResponse1](src/models/unions/models-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteModel(request: Models.DeleteModelRequest, options?: RequestOptions): ApiPromise&lt;ModelsResponse11, Models.DeleteModelError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.deleteModel({ modelId: 1.5 });
  // TODO: Handle 'response' of type ModelsResponse11
} catch (err) {
  // TODO: Handle 'err' of type Models.DeleteModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.deleteModel({ modelId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsResponse11
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>number</code> | The model's ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.deleteModel(request)`

- **OnSuccess**: <code>[ModelsResponse11](src/models/unions/models-response11.ts)</code>
- **OnError**: throws <code>[Models.DeleteModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.deleteModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsResponse11, Models.DeleteModelError&gt;</code>, with `result.value` of type <code>[ModelsResponse11](src/models/unions/models-response11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudienceSize(request: Models.GetAudienceSizeRequest, options?: RequestOptions): ApiPromise&lt;ModelsSizeResponse1, Models.GetAudienceSizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the state of an audience size job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.getAudienceSize({ modelId: 1.5, jobId: "some example string" });
  // TODO: Handle 'response' of type ModelsSizeResponse1
} catch (err) {
  // TODO: Handle 'err' of type Models.GetAudienceSizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .getAudienceSize({ modelId: 1.5, jobId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsSizeResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>number</code> | The id of the audience |
| <code>jobId</code> | <code>string</code> | The id returned when the size job was started |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.getAudienceSize(request)`

- **OnSuccess**: <code>[ModelsSizeResponse1](src/models/unions/models-size-response1.ts)</code>
- **OnError**: throws <code>[Models.GetAudienceSizeError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.getAudienceSize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsSizeResponse1, Models.GetAudienceSizeError&gt;</code>, with `result.value` of type <code>[ModelsSizeResponse1](src/models/unions/models-size-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getModel(request: Models.GetModelRequest, options?: RequestOptions): ApiPromise&lt;Model, Models.GetModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve models from model ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.getModel({ modelId: 1.5 });
  // TODO: Handle 'response' of type Model
} catch (err) {
  // TODO: Handle 'err' of type Models.GetModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.getModel({ modelId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Model
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>number</code> | The id of the model |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.getModel(request)`

- **OnSuccess**: <code>[Model](src/models/model.ts)</code>
- **OnError**: throws <code>[Models.GetModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.getModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Model, Models.GetModelError&gt;</code>, with `result.value` of type <code>[Model](src/models/model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEnrichmentRuns(request: Models.ListEnrichmentRunsRequest, options?: RequestOptions): ApiPromise&lt;ModelsMatchBoosterRunsResponse, Models.ListEnrichmentRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Match Booster enrichment runs for a model, most recent first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.listEnrichmentRuns({ modelId: 1.5 });
  // TODO: Handle 'response' of type ModelsMatchBoosterRunsResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ListEnrichmentRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.listEnrichmentRuns({ modelId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsMatchBoosterRunsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>number</code> | The id of the model |
| <code>region?</code> | <code>[Region1](src/models/region1.ts)</code> | Filter runs to a Match Booster region |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.listEnrichmentRuns(request)`

- **OnSuccess**: <code>[ModelsMatchBoosterRunsResponse](src/models/unions/models-match-booster-runs-response.ts)</code>
- **OnError**: throws <code>[Models.ListEnrichmentRunsError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.listEnrichmentRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsMatchBoosterRunsResponse, Models.ListEnrichmentRunsError&gt;</code>, with `result.value` of type <code>[ModelsMatchBoosterRunsResponse](src/models/unions/models-match-booster-runs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listModel(request?: Models.ListModelRequest, options?: RequestOptions): ApiPromise&lt;ModelsResponse, Models.ListModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the models in the current workspace including parent and related models

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.listModel();
  // TODO: Handle 'response' of type ModelsResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ListModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.listModel().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name?</code> | <code>string</code> | filter based on name |
| <code>slug?</code> | <code>string</code> | filter based on slug |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderByHightouchDestinationsApi](src/models/order-by-hightouch-destinations-api.ts)</code> | specify the order<br>**Default**: "id" |
| <code>tags?</code> | <code>string[]</code> | filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter for multiple tags. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.listModel(request)`

- **OnSuccess**: <code>[ModelsResponse](src/models/models-response.ts)</code>
- **OnError**: throws <code>[Models.ListModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.listModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsResponse, Models.ListModelError&gt;</code>, with `result.value` of type <code>[ModelsResponse](src/models/models-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAudienceSizeJob(request: Models.StartAudienceSizeJobRequest, options?: RequestOptions): ApiPromise&lt;ModelsSizeResponse, Models.StartAudienceSizeJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a background job to compute audience size.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.startAudienceSizeJob({ modelId: 1.5 });
  // TODO: Handle 'response' of type ModelsSizeResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.StartAudienceSizeJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.startAudienceSizeJob({ modelId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsSizeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>number</code> | The id of the audience |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.startAudienceSizeJob(request)`

- **OnSuccess**: <code>[ModelsSizeResponse](src/models/unions/models-size-response.ts)</code>
- **OnError**: throws <code>[Models.StartAudienceSizeJobError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.startAudienceSizeJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsSizeResponse, Models.StartAudienceSizeJobError&gt;</code>, with `result.value` of type <code>[ModelsSizeResponse](src/models/unions/models-size-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerEnrichment(request: Models.TriggerEnrichmentRequest, options?: RequestOptions): ApiPromise&lt;ModelsMatchBoosterTriggerResponse, Models.TriggerEnrichmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a Match Booster enrichment run for a model. The model must have
Match Booster enabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.triggerEnrichment({
    modelId: 1.5,
    body: { forceFullEnrichment: false },
  });
  // TODO: Handle 'response' of type ModelsMatchBoosterTriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.TriggerEnrichmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .triggerEnrichment({ modelId: 1.5, body: { forceFullEnrichment: false } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsMatchBoosterTriggerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>number</code> | The id of the model to enrich |
| <code>body?</code> | <code>[MatchBoosterTriggerInput](src/models/match-booster-trigger-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.triggerEnrichment(request)`

- **OnSuccess**: <code>[ModelsMatchBoosterTriggerResponse](src/models/unions/models-match-booster-trigger-response.ts)</code>
- **OnError**: throws <code>[Models.TriggerEnrichmentError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.triggerEnrichment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsMatchBoosterTriggerResponse, Models.TriggerEnrichmentError&gt;</code>, with `result.value` of type <code>[ModelsMatchBoosterTriggerResponse](src/models/unions/models-match-booster-trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateModel(request: Models.UpdateModelRequest, options?: RequestOptions): ApiPromise&lt;ModelsResponse1, Models.UpdateModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing model

Patch a model based on its Hightouch ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.updateModel({
    modelId: 1.5,
    body: {
      name: "testmodel",
      description: "Names of all users",
      raw: { sql: "select name from users" },
      primaryKey: "id",
    },
  });
  // TODO: Handle 'response' of type ModelsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Models.UpdateModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .updateModel({
    modelId: 1.5,
    body: {
      name: "testmodel",
      description: "Names of all users",
      raw: { sql: "select name from users" },
      primaryKey: "id",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>number</code> | The model's ID |
| <code>body</code> | <code>[ModelUpdate](src/models/model-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.updateModel(request)`

- **OnSuccess**: <code>[ModelsResponse1](src/models/unions/models-response1.ts)</code>
- **OnError**: throws <code>[Models.UpdateModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.updateModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelsResponse1, Models.UpdateModelError&gt;</code>, with `result.value` of type <code>[ModelsResponse1](src/models/unions/models-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Signups

> Source: [Signups](src/resources/signups.ts)

<details>
<summary><code>createSignup(request: Signups.CreateSignupRequestParams, options?: RequestOptions): ApiPromise&lt;SignupsResponse, Signups.CreateSignupError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signups.createSignup({
    body: { channel: SignupChannel.Email, handle: "some example string" },
  });
  // TODO: Handle 'response' of type SignupsResponse
} catch (err) {
  // TODO: Handle 'err' of type Signups.CreateSignupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signups
  .createSignup({ body: { channel: SignupChannel.Email, handle: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignupsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSignupRequest](src/models/create-signup-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signups.createSignup(request)`

- **OnSuccess**: <code>[SignupsResponse](src/models/unions/signups-response.ts)</code>
- **OnError**: throws <code>[Signups.CreateSignupError](src/resources/signups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signups.createSignup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignupsResponse, Signups.CreateSignupError&gt;</code>, with `result.value` of type <code>[SignupsResponse](src/models/unions/signups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](src/resources/sources.ts)

<details>
<summary><code>createSource(request: Sources.CreateSourceRequest, options?: RequestOptions): ApiPromise&lt;SourcesResponse1, Sources.CreateSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new source

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.createSource({
    body: {
      name: "postgres-connection2",
      slug: "postgres-connection2",
      type: "postgres",
      configuration: {
        host: "example.example.us-east-1.rds.amazonaws.com",
        port: 5432,
        user: "dbUserName",
        database: "dbName",
        password: "password!123",
      },
    },
  });
  // TODO: Handle 'response' of type SourcesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Sources.CreateSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources
  .createSource({
    body: {
      name: "postgres-connection2",
      slug: "postgres-connection2",
      type: "postgres",
      configuration: {
        host: "example.example.us-east-1.rds.amazonaws.com",
        port: 5432,
        user: "dbUserName",
        database: "dbName",
        password: "password!123",
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourcesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SourceCreate](src/models/source-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.createSource(request)`

- **OnSuccess**: <code>[SourcesResponse1](src/models/unions/sources-response1.ts)</code>
- **OnError**: throws <code>[Sources.CreateSourceError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.createSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourcesResponse1, Sources.CreateSourceError&gt;</code>, with `result.value` of type <code>[SourcesResponse1](src/models/unions/sources-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSource(request: Sources.GetSourceRequest, options?: RequestOptions): ApiPromise&lt;Source, Sources.GetSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve source from source ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getSource({ sourceId: 1.5 });
  // TODO: Handle 'response' of type Source
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getSource({ sourceId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Source
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourceId</code> | <code>number</code> | The id of the source |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getSource(request)`

- **OnSuccess**: <code>[Source](src/models/source.ts)</code>
- **OnError**: throws <code>[Sources.GetSourceError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Source, Sources.GetSourceError&gt;</code>, with `result.value` of type <code>[Source](src/models/source.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSource(request?: Sources.ListSourceRequest, options?: RequestOptions): ApiPromise&lt;SourcesResponse, Sources.ListSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the sources in the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.listSource();
  // TODO: Handle 'response' of type SourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.ListSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.listSource().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name?</code> | <code>string</code> | filter based on name |
| <code>slug?</code> | <code>string</code> | filter based on slug |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderByHightouchDestinationsApi](src/models/order-by-hightouch-destinations-api.ts)</code> | specify the order<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.listSource(request)`

- **OnSuccess**: <code>[SourcesResponse](src/models/sources-response.ts)</code>
- **OnError**: throws <code>[Sources.ListSourceError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.listSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourcesResponse, Sources.ListSourceError&gt;</code>, with `result.value` of type <code>[SourcesResponse](src/models/sources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSource(request: Sources.UpdateSourceRequest, options?: RequestOptions): ApiPromise&lt;SourcesResponse1, Sources.UpdateSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing source

Patch a source based on its Hightouch ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.updateSource({
    sourceId: 1.5,
    body: { name: "postgres-connection2", configuration: { port: 5555 } },
  });
  // TODO: Handle 'response' of type SourcesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Sources.UpdateSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources
  .updateSource({ sourceId: 1.5, body: { name: "postgres-connection2", configuration: { port: 5555 } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourcesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourceId</code> | <code>number</code> | The source's ID |
| <code>body</code> | <code>[SourceUpdate](src/models/source-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.updateSource(request)`

- **OnSuccess**: <code>[SourcesResponse1](src/models/unions/sources-response1.ts)</code>
- **OnError**: throws <code>[Sources.UpdateSourceError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.updateSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourcesResponse1, Sources.UpdateSourceError&gt;</code>, with `result.value` of type <code>[SourcesResponse1](src/models/unions/sources-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SyncSequences

> Source: [SyncSequences](src/resources/sync-sequences.ts)

<details>
<summary><code>getSyncSequenceRun(request: SyncSequences.GetSyncSequenceRunRequest, options?: RequestOptions): ApiPromise&lt;SyncSequenceStatusOutput, SyncSequences.GetSyncSequenceRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a sync sequence run.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncSequences.getSyncSequenceRun({
    syncSequenceRunId: "some example string",
  });
  // TODO: Handle 'response' of type SyncSequenceStatusOutput
} catch (err) {
  // TODO: Handle 'err' of type SyncSequences.GetSyncSequenceRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncSequences
  .getSyncSequenceRun({ syncSequenceRunId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncSequenceStatusOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncSequenceRunId</code> | <code>string</code> | The id of the sync sequence run |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncSequences.getSyncSequenceRun(request)`

- **OnSuccess**: <code>[SyncSequenceStatusOutput](src/models/sync-sequence-status-output.ts)</code>
- **OnError**: throws <code>[SyncSequences.GetSyncSequenceRunError](src/resources/sync-sequences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncSequences.getSyncSequenceRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncSequenceStatusOutput, SyncSequences.GetSyncSequenceRunError&gt;</code>, with `result.value` of type <code>[SyncSequenceStatusOutput](src/models/sync-sequence-status-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerSequenceRun(request: SyncSequences.TriggerSequenceRunRequest, options?: RequestOptions): ApiPromise&lt;TriggerSequenceRunOutput, SyncSequences.TriggerSequenceRunError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncSequences.triggerSequenceRun({ syncSequenceId: "some example string" });
  // TODO: Handle 'response' of type TriggerSequenceRunOutput
} catch (err) {
  // TODO: Handle 'err' of type SyncSequences.TriggerSequenceRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncSequences
  .triggerSequenceRun({ syncSequenceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerSequenceRunOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncSequenceId</code> | <code>string</code> | The id of the sync sequence to trigger a run |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncSequences.triggerSequenceRun(request)`

- **OnSuccess**: <code>[TriggerSequenceRunOutput](src/models/trigger-sequence-run-output.ts)</code>
- **OnError**: throws <code>[SyncSequences.TriggerSequenceRunError](src/resources/sync-sequences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncSequences.triggerSequenceRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerSequenceRunOutput, SyncSequences.TriggerSequenceRunError&gt;</code>, with `result.value` of type <code>[TriggerSequenceRunOutput](src/models/trigger-sequence-run-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SyncTemplates

> Source: [SyncTemplates](src/resources/sync-templates.ts)

<details>
<summary><code>createSyncTemplate(request: SyncTemplates.CreateSyncTemplateRequest, options?: RequestOptions): ApiPromise&lt;SyncTemplatesResponse1, SyncTemplates.CreateSyncTemplateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncTemplates.createSyncTemplate({
    body: {
      name: "Salesforce Contacts Template",
      modelId: 42,
      destinationId: 17,
      configuration: { mode: "upsert", object: "Contact", externalIdMapping: {}, mappings: {} },
      overrideConfig: { mappings: { overridable: true } },
    },
  });
  // TODO: Handle 'response' of type SyncTemplatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type SyncTemplates.CreateSyncTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncTemplates
  .createSyncTemplate({
    body: {
      name: "Salesforce Contacts Template",
      modelId: 42,
      destinationId: 17,
      configuration: { mode: "upsert", object: "Contact", externalIdMapping: {}, mappings: {} },
      overrideConfig: { mappings: { overridable: true } },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncTemplatesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SyncTemplateCreate](src/models/sync-template-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncTemplates.createSyncTemplate(request)`

- **OnSuccess**: <code>[SyncTemplatesResponse1](src/models/unions/sync-templates-response1.ts)</code>
- **OnError**: throws <code>[SyncTemplates.CreateSyncTemplateError](src/resources/sync-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncTemplates.createSyncTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncTemplatesResponse1, SyncTemplates.CreateSyncTemplateError&gt;</code>, with `result.value` of type <code>[SyncTemplatesResponse1](src/models/unions/sync-templates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSyncTemplate(request: SyncTemplates.GetSyncTemplateRequest, options?: RequestOptions): ApiPromise&lt;SyncTemplate, SyncTemplates.GetSyncTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a sync template given its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncTemplates.getSyncTemplate({ syncTemplateId: 1.5 });
  // TODO: Handle 'response' of type SyncTemplate
} catch (err) {
  // TODO: Handle 'err' of type SyncTemplates.GetSyncTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncTemplates.getSyncTemplate({ syncTemplateId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncTemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncTemplateId</code> | <code>number</code> | The id of the sync template |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncTemplates.getSyncTemplate(request)`

- **OnSuccess**: <code>[SyncTemplate](src/models/sync-template.ts)</code>
- **OnError**: throws <code>[SyncTemplates.GetSyncTemplateError](src/resources/sync-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncTemplates.getSyncTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncTemplate, SyncTemplates.GetSyncTemplateError&gt;</code>, with `result.value` of type <code>[SyncTemplate](src/models/sync-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSyncTemplates(request?: SyncTemplates.ListSyncTemplatesRequest, options?: RequestOptions): ApiPromise&lt;SyncTemplatesResponse, SyncTemplates.ListSyncTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the sync templates in the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncTemplates.listSyncTemplates();
  // TODO: Handle 'response' of type SyncTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type SyncTemplates.ListSyncTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncTemplates.listSyncTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncTemplatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name?</code> | <code>string</code> | filter based on name |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderByHightouchEventsApi](src/models/order-by-hightouch-events-api.ts)</code> | specify the order<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncTemplates.listSyncTemplates(request)`

- **OnSuccess**: <code>[SyncTemplatesResponse](src/models/sync-templates-response.ts)</code>
- **OnError**: throws <code>[SyncTemplates.ListSyncTemplatesError](src/resources/sync-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncTemplates.listSyncTemplates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncTemplatesResponse, SyncTemplates.ListSyncTemplatesError&gt;</code>, with `result.value` of type <code>[SyncTemplatesResponse](src/models/sync-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSyncTemplate(request: SyncTemplates.UpdateSyncTemplateRequest, options?: RequestOptions): ApiPromise&lt;SyncTemplatesResponse1, SyncTemplates.UpdateSyncTemplateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncTemplates.updateSyncTemplate({
    syncTemplateId: 1.5,
    body: {
      name: "Salesforce Contacts Template (v2)",
      schedulePaused: true,
      overrideConfig: { mappings: { overridable: true }, externalIdMapping: { overridable: true } },
    },
  });
  // TODO: Handle 'response' of type SyncTemplatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type SyncTemplates.UpdateSyncTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncTemplates
  .updateSyncTemplate({
    syncTemplateId: 1.5,
    body: {
      name: "Salesforce Contacts Template (v2)",
      schedulePaused: true,
      overrideConfig: { mappings: { overridable: true }, externalIdMapping: { overridable: true } },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncTemplatesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncTemplateId</code> | <code>number</code> | The sync template's ID |
| <code>body</code> | <code>[SyncTemplateUpdate](src/models/sync-template-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncTemplates.updateSyncTemplate(request)`

- **OnSuccess**: <code>[SyncTemplatesResponse1](src/models/unions/sync-templates-response1.ts)</code>
- **OnError**: throws <code>[SyncTemplates.UpdateSyncTemplateError](src/resources/sync-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncTemplates.updateSyncTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncTemplatesResponse1, SyncTemplates.UpdateSyncTemplateError&gt;</code>, with `result.value` of type <code>[SyncTemplatesResponse1](src/models/unions/sync-templates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Syncs

> Source: [Syncs](src/resources/syncs.ts)

<details>
<summary><code>approveSyncDraft(request: Syncs.ApproveSyncDraftRequest, options?: RequestOptions): ApiPromise&lt;SyncDraft, Syncs.ApproveSyncDraftError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve a sync draft and apply its change. Fails with 409 and applies
nothing when the draft or the sync changed after the versions you send.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.approveSyncDraft({
    syncId: 1.5,
    draftId: "some example string",
    body: { expectedDraftVersion: "some example string", expectedResourceVersion: "some example string" },
  });
  // TODO: Handle 'response' of type SyncDraft
} catch (err) {
  // TODO: Handle 'err' of type Syncs.ApproveSyncDraftError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs
  .approveSyncDraft({
    syncId: 1.5,
    draftId: "some example string",
    body: { expectedDraftVersion: "some example string", expectedResourceVersion: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncDraft
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | The id of the sync |
| <code>draftId</code> | <code>string</code> | The id of the draft |
| <code>body</code> | <code>[ApproveSyncDraftInput](src/models/approve-sync-draft-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.approveSyncDraft(request)`

- **OnSuccess**: <code>[SyncDraft](src/models/sync-draft.ts)</code>
- **OnError**: throws <code>[Syncs.ApproveSyncDraftError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.approveSyncDraft(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncDraft, Syncs.ApproveSyncDraftError&gt;</code>, with `result.value` of type <code>[SyncDraft](src/models/sync-draft.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSync(request: Syncs.CreateSyncRequest, options?: RequestOptions): ApiPromise&lt;SyncsResponse1, Syncs.CreateSyncError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.createSync({
    body: {
      slug: "testsync3",
      modelId: 4.0,
      schedule: { type: "some example string" },
      disabled: false,
      destinationId: 1.0,
      configuration: {
        mode: "upsert",
        object: "contacts",
        mappings: {},
        objectId: "0-1",
        externalIdMapping: {},
        associationMappings: {},
      },
    },
  });
  // TODO: Handle 'response' of type SyncsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Syncs.CreateSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs
  .createSync({
    body: {
      slug: "testsync3",
      modelId: 4.0,
      schedule: { type: "some example string" },
      disabled: false,
      destinationId: 1.0,
      configuration: {
        mode: "upsert",
        object: "contacts",
        mappings: {},
        objectId: "0-1",
        externalIdMapping: {},
        associationMappings: {},
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SyncCreate](src/models/sync-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.createSync(request)`

- **OnSuccess**: <code>[SyncsResponse1](src/models/unions/syncs-response1.ts)</code>
- **OnError**: throws <code>[Syncs.CreateSyncError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.createSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncsResponse1, Syncs.CreateSyncError&gt;</code>, with `result.value` of type <code>[SyncsResponse1](src/models/unions/syncs-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSync(request: Syncs.DeleteSyncRequest, options?: RequestOptions): ApiPromise&lt;SyncsResponse11, Syncs.DeleteSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a sync

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.deleteSync({ syncId: 1.5 });
  // TODO: Handle 'response' of type SyncsResponse11
} catch (err) {
  // TODO: Handle 'err' of type Syncs.DeleteSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.deleteSync({ syncId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncsResponse11
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | The sync's ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.deleteSync(request)`

- **OnSuccess**: <code>[SyncsResponse11](src/models/unions/syncs-response11.ts)</code>
- **OnError**: throws <code>[Syncs.DeleteSyncError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.deleteSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncsResponse11, Syncs.DeleteSyncError&gt;</code>, with `result.value` of type <code>[SyncsResponse11](src/models/unions/syncs-response11.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSync(request: Syncs.GetSyncRequest, options?: RequestOptions): ApiPromise&lt;Sync, Syncs.GetSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve sync from sync ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.getSync({ syncId: 1.5 });
  // TODO: Handle 'response' of type Sync
} catch (err) {
  // TODO: Handle 'err' of type Syncs.GetSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.getSync({ syncId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Sync
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | The id of the sync |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.getSync(request)`

- **OnSuccess**: <code>[Sync](src/models/sync.ts)</code>
- **OnError**: throws <code>[Syncs.GetSyncError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.getSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Sync, Syncs.GetSyncError&gt;</code>, with `result.value` of type <code>[Sync](src/models/sync.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSyncDraft(request: Syncs.GetSyncDraftRequest, options?: RequestOptions): ApiPromise&lt;SyncDraftDetail, Syncs.GetSyncDraftError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a sync draft with the sync as it is now and as approval would
leave it. Send its `draftVersion` and `resourceVersion` to approve it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.getSyncDraft({ syncId: 1.5, draftId: "some example string" });
  // TODO: Handle 'response' of type SyncDraftDetail
} catch (err) {
  // TODO: Handle 'err' of type Syncs.GetSyncDraftError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.getSyncDraft({ syncId: 1.5, draftId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncDraftDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | The id of the sync |
| <code>draftId</code> | <code>string</code> | The id of the draft |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.getSyncDraft(request)`

- **OnSuccess**: <code>[SyncDraftDetail](src/models/sync-draft-detail.ts)</code>
- **OnError**: throws <code>[Syncs.GetSyncDraftError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.getSyncDraft(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncDraftDetail, Syncs.GetSyncDraftError&gt;</code>, with `result.value` of type <code>[SyncDraftDetail](src/models/sync-draft-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDraftsForSync(request: Syncs.ListDraftsForSyncRequest, options?: RequestOptions): ApiPromise&lt;SyncDraftList, Syncs.ListDraftsForSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List one sync's drafts, oldest change first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.listDraftsForSync({ syncId: 1.5 });
  // TODO: Handle 'response' of type SyncDraftList
} catch (err) {
  // TODO: Handle 'err' of type Syncs.ListDraftsForSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.listDraftsForSync({ syncId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncDraftList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | The id of the sync |
| <code>status?</code> | <code>[SyncDraftStatus](src/models/sync-draft-status.ts)</code> | filter on the draft's status (default `pending`) |
| <code>updatedSince?</code> | <code>Date</code> (date-time) | only drafts changed at or after this ISO timestamp |
| <code>limit?</code> | <code>number</code> | the most drafts to return on a page, from 1 to 100 (default 100)<br>**Default**: 100 |
| <code>cursor?</code> | <code>string</code> | the `nextCursor` from the previous page |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.listDraftsForSync(request)`

- **OnSuccess**: <code>[SyncDraftList](src/models/sync-draft-list.ts)</code>
- **OnError**: throws <code>[Syncs.ListDraftsForSyncError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.listDraftsForSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncDraftList, Syncs.ListDraftsForSyncError&gt;</code>, with `result.value` of type <code>[SyncDraftList](src/models/sync-draft-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSync(request?: Syncs.ListSyncRequest, options?: RequestOptions): ApiPromise&lt;SyncsResponse, Syncs.ListSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the syncs in the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.listSync();
  // TODO: Handle 'response' of type SyncsResponse
} catch (err) {
  // TODO: Handle 'err' of type Syncs.ListSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.listSync().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug?</code> | <code>string</code> | filter based on slug |
| <code>modelId?</code> | <code>number</code> | filter based on modelId |
| <code>destinationId?</code> | <code>number</code> | filter based on destinationId |
| <code>after?</code> | <code>Date</code> (date-time) | select syncs that were run after given ISO timestamp |
| <code>before?</code> | <code>Date</code> (date-time) | select syncs that were run before given ISO timestamp |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderByHightouchDestinationsApi](src/models/order-by-hightouch-destinations-api.ts)</code> | specify the order<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.listSync(request)`

- **OnSuccess**: <code>[SyncsResponse](src/models/syncs-response.ts)</code>
- **OnError**: throws <code>[Syncs.ListSyncError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.listSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncsResponse, Syncs.ListSyncError&gt;</code>, with `result.value` of type <code>[SyncsResponse](src/models/syncs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSyncDrafts(request?: Syncs.ListSyncDraftsRequest, options?: RequestOptions): ApiPromise&lt;SyncDraftList, Syncs.ListSyncDraftsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.listSyncDrafts();
  // TODO: Handle 'response' of type SyncDraftList
} catch (err) {
  // TODO: Handle 'err' of type Syncs.ListSyncDraftsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.listSyncDrafts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncDraftList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[SyncDraftStatus](src/models/sync-draft-status.ts)</code> | filter on the draft's status (default `pending`) |
| <code>syncId?</code> | <code>number</code> | only drafts for this sync |
| <code>updatedSince?</code> | <code>Date</code> (date-time) | only drafts changed at or after this ISO timestamp |
| <code>limit?</code> | <code>number</code> | the most drafts to return on a page, from 1 to 100 (default 100)<br>**Default**: 100 |
| <code>cursor?</code> | <code>string</code> | the `nextCursor` from the previous page |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.listSyncDrafts(request)`

- **OnSuccess**: <code>[SyncDraftList](src/models/sync-draft-list.ts)</code>
- **OnError**: throws <code>[Syncs.ListSyncDraftsError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.listSyncDrafts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncDraftList, Syncs.ListSyncDraftsError&gt;</code>, with `result.value` of type <code>[SyncDraftList](src/models/sync-draft-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSyncRuns(request: Syncs.ListSyncRunsRequest, options?: RequestOptions): ApiPromise&lt;SyncsRunsResponse, Syncs.ListSyncRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all sync runs under a sync

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.listSyncRuns({ syncId: 1.5 });
  // TODO: Handle 'response' of type SyncsRunsResponse
} catch (err) {
  // TODO: Handle 'err' of type Syncs.ListSyncRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.listSyncRuns({ syncId: 1.5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncsRunsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | - |
| <code>runId?</code> | <code>number</code> | query for specific run id |
| <code>after?</code> | <code>Date</code> (date-time) | select sync runs that are started after given ISO timestamp |
| <code>before?</code> | <code>Date</code> (date-time) | select sync runs that are started before certain ISO timestamp |
| <code>within?</code> | <code>number</code> | select sync runs that are started within last given minutes |
| <code>offset?</code> | <code>number</code> | set the offset on results (for pagination)<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | limit the number of objects returned (default is 100)<br>**Default**: 100 |
| <code>orderBy?</code> | <code>[OrderBy1](src/models/order-by1.ts)</code> | specify the order<br>**Default**: "id" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.listSyncRuns(request)`

- **OnSuccess**: <code>[SyncsRunsResponse](src/models/syncs-runs-response.ts)</code>
- **OnError**: throws <code>[Syncs.ListSyncRunsError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.listSyncRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncsRunsResponse, Syncs.ListSyncRunsError&gt;</code>, with `result.value` of type <code>[SyncsRunsResponse](src/models/syncs-runs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rejectSyncDraft(request: Syncs.RejectSyncDraftRequest, options?: RequestOptions): ApiPromise&lt;SyncDraft, Syncs.RejectSyncDraftError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reject a sync draft. The draft closes without applying its change; to try
again, the requester edits the sync.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.rejectSyncDraft({
    syncId: 1.5,
    draftId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SyncDraft
} catch (err) {
  // TODO: Handle 'err' of type Syncs.RejectSyncDraftError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs
  .rejectSyncDraft({ syncId: 1.5, draftId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncDraft
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | The id of the sync |
| <code>draftId</code> | <code>string</code> | The id of the draft |
| <code>body</code> | <code>[RejectSyncDraftInput](src/models/reject-sync-draft-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.rejectSyncDraft(request)`

- **OnSuccess**: <code>[SyncDraft](src/models/sync-draft.ts)</code>
- **OnError**: throws <code>[Syncs.RejectSyncDraftError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.rejectSyncDraft(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncDraft, Syncs.RejectSyncDraftError&gt;</code>, with `result.value` of type <code>[SyncDraft](src/models/sync-draft.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerRun(request: Syncs.TriggerRunRequest, options?: RequestOptions): ApiPromise&lt;TriggerRunOutput, Syncs.TriggerRunError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.triggerRun({ syncId: "some example string" });
  // TODO: Handle 'response' of type TriggerRunOutput
} catch (err) {
  // TODO: Handle 'err' of type Syncs.TriggerRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.triggerRun({ syncId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerRunOutput
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>string</code> | The id of the sync to trigger a run |
| <code>body?</code> | <code>[TriggerRunInput](src/models/trigger-run-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.triggerRun(request)`

- **OnSuccess**: <code>[TriggerRunOutput](src/models/trigger-run-output.ts)</code>
- **OnError**: throws <code>[Syncs.TriggerRunError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.triggerRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerRunOutput, Syncs.TriggerRunError&gt;</code>, with `result.value` of type <code>[TriggerRunOutput](src/models/trigger-run-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerRunCustom(request: Syncs.TriggerRunCustomRequest, options?: RequestOptions): ApiPromise&lt;SyncsTriggerResponse, Syncs.TriggerRunCustomError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.triggerRunCustom({ body: {} });
  // TODO: Handle 'response' of type SyncsTriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type Syncs.TriggerRunCustomError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs.triggerRunCustom({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncsTriggerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TriggerRunCustomInput](src/models/trigger-run-custom-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.triggerRunCustom(request)`

- **OnSuccess**: <code>[SyncsTriggerResponse](src/models/unions/syncs-trigger-response.ts)</code>
- **OnError**: throws <code>[Syncs.TriggerRunCustomError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.triggerRunCustom(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncsTriggerResponse, Syncs.TriggerRunCustomError&gt;</code>, with `result.value` of type <code>[SyncsTriggerResponse](src/models/unions/syncs-trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSync(request: Syncs.UpdateSyncRequest, options?: RequestOptions): ApiPromise&lt;SyncsResponse1, Syncs.UpdateSyncError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.syncs.updateSync({
    syncId: 1.5,
    body: {
      configuration: {
        mode: "upsert",
        object: "contacts",
        mappings: {},
        objectId: "0-1",
        externalIdMapping: {},
        associationMappings: {},
      },
      schedule: { type: "some example string" },
      disabled: true,
    },
  });
  // TODO: Handle 'response' of type SyncsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Syncs.UpdateSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.syncs
  .updateSync({
    syncId: 1.5,
    body: {
      configuration: {
        mode: "upsert",
        object: "contacts",
        mappings: {},
        objectId: "0-1",
        externalIdMapping: {},
        associationMappings: {},
      },
      schedule: { type: "some example string" },
      disabled: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>syncId</code> | <code>number</code> | The sync's ID |
| <code>body</code> | <code>[SyncUpdate](src/models/sync-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.syncs.updateSync(request)`

- **OnSuccess**: <code>[SyncsResponse1](src/models/unions/syncs-response1.ts)</code>
- **OnError**: throws <code>[Syncs.UpdateSyncError](src/resources/syncs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.syncs.updateSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncsResponse1, Syncs.UpdateSyncError&gt;</code>, with `result.value` of type <code>[SyncsResponse1](src/models/unions/syncs-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HightouchError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

