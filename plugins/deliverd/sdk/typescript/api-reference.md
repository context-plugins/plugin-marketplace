# Reference

> Source: [DeliverdClient](src/client.ts)

## Actions

> Source: [Actions](src/resources/actions.ts)

<details>
<summary><code>getApiV1Actions(request?: Actions.GetApiV1ActionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ActionsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actions.getApiV1Actions();
  // TODO: Handle 'response' of type ApiV1ActionsResponse1
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
const result = await client.actions.getApiV1Actions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ActionsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actions.getApiV1Actions(request)`

- **OnSuccess**: <code>[ApiV1ActionsResponse1](src/models/api-v1-actions-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.actions.getApiV1Actions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ActionsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ActionsResponse1](src/models/api-v1-actions-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Actions(request?: Actions.PostApiV1ActionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ActionsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Actions are stable organisational vocabulary and tools are implementation details — several agents calling three differently named functions may all be performing finance.refund, and policy is written about the business action rather than the function name. Upsert, not create: this runs on every deploy, so registering the same id again is the normal case. It overwrites only the half the code owns; an administrator's title, risk and sensitivity overrides survive it, and no administrator can edit the input schema, because a schema they could loosen is a check the code no longer performs. An agent principal is refused: policy is keyed on the action id, so an agent able to name actions could name its way around the rule that governs it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actions.postApiV1Actions();
  // TODO: Handle 'response' of type ApiV1ActionsResponse
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
const result = await client.actions.postApiV1Actions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ActionsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1ActionsRequest](src/models/api-v1-actions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actions.postApiV1Actions(request)`

- **OnSuccess**: <code>[ApiV1ActionsResponse](src/models/api-v1-actions-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.actions.postApiV1Actions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ActionsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ActionsResponse](src/models/api-v1-actions-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Agents

> Source: [Agents](src/resources/agents.ts)

<details>
<summary><code>getApiV1Agents(request?: Agents.GetApiV1AgentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AgentsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's agents and the platforms they run on. Registering one is an administrator's act in the app.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.getApiV1Agents();
  // TODO: Handle 'response' of type ApiV1AgentsResponse
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
const result = await client.agents.getApiV1Agents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AgentsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.getApiV1Agents(request)`

- **OnSuccess**: <code>[ApiV1AgentsResponse](src/models/api-v1-agents-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.getApiV1Agents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AgentsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1AgentsResponse](src/models/api-v1-agents-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1AgentsById(request: Agents.GetApiV1AgentsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AgentsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.getApiV1AgentsById({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1AgentsResponse1
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
const result = await client.agents
  .getApiV1AgentsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AgentsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.getApiV1AgentsById(request)`

- **OnSuccess**: <code>[ApiV1AgentsResponse1](src/models/api-v1-agents-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.getApiV1AgentsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AgentsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1AgentsResponse1](src/models/api-v1-agents-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AiSystems

> Source: [AiSystems](src/resources/ai-systems.ts)

<details>
<summary><code>getApiV1AiSystems(request?: AiSystems.GetApiV1AiSystemsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiSystems.getApiV1AiSystems();
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
const result = await client.aiSystems.getApiV1AiSystems().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[StatusDeliverdDevAiSystemsApi](src/models/status-deliverd-dev-ai-systems-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiSystems.getApiV1AiSystems(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.aiSystems.getApiV1AiSystems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1AiSystemsById(request: AiSystems.GetApiV1AiSystemsByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`system` is the record; `status` and `steps` say where it stands in its lifecycle and which steps out of it the caller may take (with every reason when not); `roles` are the members who answer for it; `history` is every move; `versions` are snapshots of what it said; `governedTaskIds` are the governed tasks naming it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiSystems.getApiV1AiSystemsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.aiSystems
  .getApiV1AiSystemsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiSystems.getApiV1AiSystemsById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.aiSystems.getApiV1AiSystemsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1AiSystemsByIdTransitions(request: AiSystems.GetApiV1AiSystemsByIdTransitionsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiSystems.getApiV1AiSystemsByIdTransitions({
    id: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.aiSystems
  .getApiV1AiSystemsByIdTransitions({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiSystems.getApiV1AiSystemsByIdTransitions(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.aiSystems.getApiV1AiSystemsByIdTransitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1AiSystemsById(request: AiSystems.PatchApiV1AiSystemsByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, AiSystems.PatchApiV1AiSystemsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (`POST /api/v1/ai-systems/{id}/transitions`). Each change is a new version; values a key or an agent writes are labelled in `provenance` as imported or suggested until a person saves them. 409 when the record changed since it was read.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiSystems.patchApiV1AiSystemsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type AiSystems.PatchApiV1AiSystemsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiSystems
  .patchApiV1AiSystemsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1AiSystemsRequest1](src/models/api-v1-ai-systems-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiSystems.patchApiV1AiSystemsById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[AiSystems.PatchApiV1AiSystemsByIdError](src/resources/ai-systems.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiSystems.patchApiV1AiSystemsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, AiSystems.PatchApiV1AiSystemsByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1AiSystems(request?: AiSystems.PostApiV1AiSystemsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, AiSystems.PostApiV1AiSystemsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiSystems.postApiV1AiSystems();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type AiSystems.PostApiV1AiSystemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiSystems.postApiV1AiSystems().asApiResult();
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
| <code>body?</code> | <code>[ApiV1AiSystemsRequest](src/models/api-v1-ai-systems-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiSystems.postApiV1AiSystems(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[AiSystems.PostApiV1AiSystemsError](src/resources/ai-systems.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiSystems.postApiV1AiSystems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, AiSystems.PostApiV1AiSystemsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1AiSystemsByIdModelChange(request: AiSystems.PostApiV1AiSystemsByIdModelChangeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, AiSystems.PostApiV1AiSystemsByIdModelChangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. `promptHash` and `guardrailsHash` are digests (`sha256:…`, a commit, a version tag), never the text. Every governed task using the system gets a reassessment, which closes its gate until a person completes it, and the evaluation, resilience testing, change record and compliance approval of the old release stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a first fingerprint changes nothing; changing or removing one does. `changed` names the parts that differ from what was recorded: the same release again changes nothing and records nothing, so a build step may send it on every build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiSystems.postApiV1AiSystemsByIdModelChange({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type AiSystems.PostApiV1AiSystemsByIdModelChangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiSystems
  .postApiV1AiSystemsByIdModelChange({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1AiSystemsModelChangeRequest](src/models/api-v1-ai-systems-model-change-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiSystems.postApiV1AiSystemsByIdModelChange(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[AiSystems.PostApiV1AiSystemsByIdModelChangeError](src/resources/ai-systems.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiSystems.postApiV1AiSystemsByIdModelChange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, AiSystems.PostApiV1AiSystemsByIdModelChangeError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1AiSystemsByIdTransitions(request: AiSystems.PostApiV1AiSystemsByIdTransitionsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, AiSystems.PostApiV1AiSystemsByIdTransitionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A key or an agent may put a proposal forward (`submit`) or take it back (`withdraw`). Approving, rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and the caller holds a role on the record or moved it to its current status. 409 when the record changed since it was read.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiSystems.postApiV1AiSystemsByIdTransitions({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type AiSystems.PostApiV1AiSystemsByIdTransitionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiSystems
  .postApiV1AiSystemsByIdTransitions({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1AiSystemsTransitionsRequest](src/models/api-v1-ai-systems-transitions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiSystems.postApiV1AiSystemsByIdTransitions(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[AiSystems.PostApiV1AiSystemsByIdTransitionsError](src/resources/ai-systems.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiSystems.postApiV1AiSystemsByIdTransitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, AiSystems.PostApiV1AiSystemsByIdTransitionsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](src/resources/analytics.ts)

<details>
<summary><code>getApiV1Analytics(request?: Analytics.GetApiV1AnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsResponse, Analytics.GetApiV1AnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`GET /reports/{idOrSlug}/analytics` needs to be told which report, so "what is getting read" meant walking the list and adding up. The half that cannot be reconstructed that way is `inactiveReports` — a report nobody has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the per-report call returns a total view count on every plan.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.getApiV1Analytics();
  // TODO: Handle 'response' of type ApiV1AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.GetApiV1AnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.getApiV1Analytics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days?</code> | <code>number</code> | The window to count over. 30 by default. |
| <code>limit?</code> | <code>number</code> | How many reports in each list. 10 by default. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.getApiV1Analytics(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsResponse](src/models/api-v1-analytics-response.ts)</code>
- **OnError**: throws <code>[Analytics.GetApiV1AnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.getApiV1Analytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsResponse, Analytics.GetApiV1AnalyticsError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsResponse](src/models/api-v1-analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Approvals

> Source: [Approvals](src/resources/approvals.ts)

<details>
<summary><code>getApiV1Approvals(request?: Approvals.GetApiV1ApprovalsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ApprovalsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.approvals.getApiV1Approvals();
  // TODO: Handle 'response' of type ApiV1ApprovalsResponse1
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
const result = await client.approvals.getApiV1Approvals().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ApprovalsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |
| <code>status?</code> | <code>[Status1](src/models/status1.ts)</code> | - |
| <code>externalId?</code> | <code>string</code> | - |
| <code>approver?</code> | <code>string</code> | The requests naming one person: a member's id or email, or an admitted guest's email. An approver's inbox, for your own UI. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.approvals.getApiV1Approvals(request)`

- **OnSuccess**: <code>[ApiV1ApprovalsResponse1](src/models/api-v1-approvals-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.approvals.getApiV1Approvals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ApprovalsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ApprovalsResponse1](src/models/api-v1-approvals-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ApprovalsById(request: Approvals.GetApiV1ApprovalsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ApprovalsResponse, Approvals.GetApiV1ApprovalsByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.approvals.getApiV1ApprovalsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1ApprovalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Approvals.GetApiV1ApprovalsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.approvals
  .getApiV1ApprovalsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ApprovalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.approvals.getApiV1ApprovalsById(request)`

- **OnSuccess**: <code>[ApiV1ApprovalsResponse](src/models/api-v1-approvals-response.ts)</code>
- **OnError**: throws <code>[Approvals.GetApiV1ApprovalsByIdError](src/resources/approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.approvals.getApiV1ApprovalsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ApprovalsResponse, Approvals.GetApiV1ApprovalsByIdError&gt;</code>, with `result.value` of type <code>[ApiV1ApprovalsResponse](src/models/api-v1-approvals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Approvals(request?: Approvals.PostApiV1ApprovalsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ApprovalsResponse, Approvals.PostApiV1ApprovalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a request and returns its page. The decision is a person's: read it by polling GET /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired), or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when omitted. The requester cannot be an approver of their own request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.approvals.postApiV1Approvals();
  // TODO: Handle 'response' of type ApiV1ApprovalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Approvals.PostApiV1ApprovalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.approvals.postApiV1Approvals().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ApprovalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1ApprovalsRequest](src/models/api-v1-approvals-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.approvals.postApiV1Approvals(request)`

- **OnSuccess**: <code>[ApiV1ApprovalsResponse](src/models/api-v1-approvals-response.ts)</code>
- **OnError**: throws <code>[Approvals.PostApiV1ApprovalsError](src/resources/approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.approvals.postApiV1Approvals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ApprovalsResponse, Approvals.PostApiV1ApprovalsError&gt;</code>, with `result.value` of type <code>[ApiV1ApprovalsResponse](src/models/api-v1-approvals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ApprovalsByIdAnswers(request: Approvals.PostApiV1ApprovalsByIdAnswersRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ApprovalsAnswersResponse, Approvals.PostApiV1ApprovalsByIdAnswersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only the requester may answer. The answer is shown on the page and the asker is told.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.approvals.postApiV1ApprovalsByIdAnswers({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1ApprovalsAnswersResponse
} catch (err) {
  // TODO: Handle 'err' of type Approvals.PostApiV1ApprovalsByIdAnswersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.approvals
  .postApiV1ApprovalsByIdAnswers({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ApprovalsAnswersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ApprovalsAnswersRequest](src/models/api-v1-approvals-answers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.approvals.postApiV1ApprovalsByIdAnswers(request)`

- **OnSuccess**: <code>[ApiV1ApprovalsAnswersResponse](src/models/api-v1-approvals-answers-response.ts)</code>
- **OnError**: throws <code>[Approvals.PostApiV1ApprovalsByIdAnswersError](src/resources/approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.approvals.postApiV1ApprovalsByIdAnswers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ApprovalsAnswersResponse, Approvals.PostApiV1ApprovalsByIdAnswersError&gt;</code>, with `result.value` of type <code>[ApiV1ApprovalsAnswersResponse](src/models/api-v1-approvals-answers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ApprovalsByIdCancel(request: Approvals.PostApiV1ApprovalsByIdCancelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ApprovalsCancelResponse, Approvals.PostApiV1ApprovalsByIdCancelError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.approvals.postApiV1ApprovalsByIdCancel({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1ApprovalsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Approvals.PostApiV1ApprovalsByIdCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.approvals
  .postApiV1ApprovalsByIdCancel({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ApprovalsCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.approvals.postApiV1ApprovalsByIdCancel(request)`

- **OnSuccess**: <code>[ApiV1ApprovalsCancelResponse](src/models/api-v1-approvals-cancel-response.ts)</code>
- **OnError**: throws <code>[Approvals.PostApiV1ApprovalsByIdCancelError](src/resources/approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.approvals.postApiV1ApprovalsByIdCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ApprovalsCancelResponse, Approvals.PostApiV1ApprovalsByIdCancelError&gt;</code>, with `result.value` of type <code>[ApiV1ApprovalsCancelResponse](src/models/api-v1-approvals-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ApprovalsByIdSessions(request: Approvals.PostApiV1ApprovalsByIdSessionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ApprovalsSessionsResponse, Approvals.PostApiV1ApprovalsByIdSessionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decision sessions are how an approval is decided in your own app. `mode: "hosted"` returns a `url` to send the approver to, with an optional `returnUrl` for afterwards (`deliverd_session` and `deliverd_decision` are added to it). `mode: "embedded"` returns a `clientSecret` to mount with https://deliverd.dev/elements/v1.js, framed only by `origin`, which must be on the organisation's embedding allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The `url` and `clientSecret` are returned once. Neither decides anything: the approver signs in, or confirms a code sent to their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.approvals.postApiV1ApprovalsByIdSessions({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1ApprovalsSessionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Approvals.PostApiV1ApprovalsByIdSessionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.approvals
  .postApiV1ApprovalsByIdSessions({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ApprovalsSessionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ApprovalsSessionsRequest](src/models/api-v1-approvals-sessions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.approvals.postApiV1ApprovalsByIdSessions(request)`

- **OnSuccess**: <code>[ApiV1ApprovalsSessionsResponse](src/models/api-v1-approvals-sessions-response.ts)</code>
- **OnError**: throws <code>[Approvals.PostApiV1ApprovalsByIdSessionsError](src/resources/approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.approvals.postApiV1ApprovalsByIdSessions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ApprovalsSessionsResponse, Approvals.PostApiV1ApprovalsByIdSessionsError&gt;</code>, with `result.value` of type <code>[ApiV1ApprovalsSessionsResponse](src/models/api-v1-approvals-sessions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Audiences

> Source: [Audiences](src/resources/audiences.ts)

<details>
<summary><code>postApiV1AudiencesResolve(request?: Audiences.PostApiV1AudiencesResolveRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AudiencesResolveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.postApiV1AudiencesResolve();
  // TODO: Handle 'response' of type ApiV1AudiencesResolveResponse
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
const result = await client.audiences.postApiV1AudiencesResolve().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AudiencesResolveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1AudiencesResolveRequest](src/models/api-v1-audiences-resolve-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.postApiV1AudiencesResolve(request)`

- **OnSuccess**: <code>[ApiV1AudiencesResolveResponse](src/models/api-v1-audiences-resolve-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.audiences.postApiV1AudiencesResolve(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AudiencesResolveResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1AudiencesResolveResponse](src/models/api-v1-audiences-resolve-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuditEvents

> Source: [AuditEvents](src/resources/audit-events.ts)

<details>
<summary><code>getApiV1AuditEvents(request?: AuditEvents.GetApiV1AuditEventsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AuditEventsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's script. Each entry carries its position in the organisation's hash chain (`chainSeq`), the hash before it (`prevHash`) and its own (`rowHash`). Needs `audit:read` and a key bound to an owner, an administrator or a security administrator, read on every call; an agent key is refused (`403 agent_not_permitted`), as is anybody else (`403 not_permitted`). To tail the log, pass `afterSeq` (the last `chainSeq` you have): entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time, as `since` can. For a live feed, subscribe a webhook endpoint to `audit.event` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditEvents.getApiV1AuditEvents();
  // TODO: Handle 'response' of type ApiV1AuditEventsResponse
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
const result = await client.auditEvents.getApiV1AuditEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AuditEventsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |
| <code>since?</code> | <code>Date</code> (date-time) | Entries at or after this time (ISO 8601). |
| <code>until?</code> | <code>Date</code> (date-time) | Entries at or before this time (ISO 8601). |
| <code>eventType?</code> | <code>string</code> | An event type (`report.published`), or a family ending in a dot (`legal_hold.`). |
| <code>actorId?</code> | <code>string</code> | The person, agent or key that acted. |
| <code>actorType?</code> | <code>[ActorType](src/models/actor-type.ts)</code> | What kind of actor. |
| <code>resourceType?</code> | <code>string</code> | What the entry is about, e.g. `report`. |
| <code>resourceId?</code> | <code>string</code> | The id of what it is about. |
| <code>flowId?</code> | <code>string</code> | Entries about this flow (project) and everything attached to it: its approvals, reviews, requests and reports. |
| <code>afterSeq?</code> | <code>number</code> | Entries after this chain position, oldest first: the way to tail the log. Pass the last chainSeq you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry written late with an earlier time. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditEvents.getApiV1AuditEvents(request)`

- **OnSuccess**: <code>[ApiV1AuditEventsResponse](src/models/api-v1-audit-events-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.auditEvents.getApiV1AuditEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AuditEventsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1AuditEventsResponse](src/models/api-v1-audit-events-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Collections

> Source: [Collections](src/resources/collections.ts)

<details>
<summary><code>getApiV1Collections(request?: Collections.GetApiV1CollectionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CollectionsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.getApiV1Collections();
  // TODO: Handle 'response' of type ApiV1CollectionsResponse1
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
const result = await client.collections.getApiV1Collections().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CollectionsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |
| <code>status?</code> | <code>[StatusDeliverdDevCollectionsApi](src/models/status-deliverd-dev-collections-api.ts)</code> | - |
| <code>externalId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.getApiV1Collections(request)`

- **OnSuccess**: <code>[ApiV1CollectionsResponse1](src/models/api-v1-collections-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.collections.getApiV1Collections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CollectionsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1CollectionsResponse1](src/models/api-v1-collections-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1CollectionsById(request: Collections.GetApiV1CollectionsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CollectionsResponse, Collections.GetApiV1CollectionsByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.getApiV1CollectionsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1CollectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.GetApiV1CollectionsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections
  .getApiV1CollectionsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CollectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.getApiV1CollectionsById(request)`

- **OnSuccess**: <code>[ApiV1CollectionsResponse](src/models/api-v1-collections-response.ts)</code>
- **OnError**: throws <code>[Collections.GetApiV1CollectionsByIdError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.getApiV1CollectionsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CollectionsResponse, Collections.GetApiV1CollectionsByIdError&gt;</code>, with `result.value` of type <code>[ApiV1CollectionsResponse](src/models/api-v1-collections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Collections(request?: Collections.PostApiV1CollectionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CollectionsResponse, Collections.PostApiV1CollectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a request and returns the page people fill in. The answers are theirs: read them by polling GET /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or by the MCP tool get_collection. There is no endpoint that submits an answer — a key is not a person. Respondents are named by email or id and must be active members or guests the organisation already knows; anyone else is refused. Answers are checked against the kind of question that asked for them, and a required question blocks submission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.postApiV1Collections();
  // TODO: Handle 'response' of type ApiV1CollectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.PostApiV1CollectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.postApiV1Collections().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CollectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1CollectionsRequest](src/models/api-v1-collections-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.postApiV1Collections(request)`

- **OnSuccess**: <code>[ApiV1CollectionsResponse](src/models/api-v1-collections-response.ts)</code>
- **OnError**: throws <code>[Collections.PostApiV1CollectionsError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.postApiV1Collections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CollectionsResponse, Collections.PostApiV1CollectionsError&gt;</code>, with `result.value` of type <code>[ApiV1CollectionsResponse](src/models/api-v1-collections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1CollectionsByIdCancel(request: Collections.PostApiV1CollectionsByIdCancelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CollectionsCancelResponse, Collections.PostApiV1CollectionsByIdCancelError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.postApiV1CollectionsByIdCancel({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1CollectionsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.PostApiV1CollectionsByIdCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections
  .postApiV1CollectionsByIdCancel({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CollectionsCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.postApiV1CollectionsByIdCancel(request)`

- **OnSuccess**: <code>[ApiV1CollectionsCancelResponse](src/models/api-v1-collections-cancel-response.ts)</code>
- **OnError**: throws <code>[Collections.PostApiV1CollectionsByIdCancelError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.postApiV1CollectionsByIdCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CollectionsCancelResponse, Collections.PostApiV1CollectionsByIdCancelError&gt;</code>, with `result.value` of type <code>[ApiV1CollectionsCancelResponse](src/models/api-v1-collections-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Comments

> Source: [Comments](src/resources/comments.ts)

<details>
<summary><code>getApiV1Comments(request?: Comments.GetApiV1CommentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

"Is anything waiting on me?", without naming a report first. `GET /reports/{idOrSlug}/comments` answers it one report at a time, which means walking every report to find the two with feedback on them.

Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from the report's own endpoint once you know where to look. Threads on archived reports are left out: the URL does not serve, so nothing can be done about them until it is unarchived.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.getApiV1Comments();
  // TODO: Handle 'response' of type ApiV1CommentsResponse
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
const result = await client.comments.getApiV1Comments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.getApiV1Comments(request)`

- **OnSuccess**: <code>[ApiV1CommentsResponse](src/models/api-v1-comments-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.getApiV1Comments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1CommentsResponse](src/models/api-v1-comments-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1CommentsByThreadIdResolve(request: Comments.PostApiV1CommentsByThreadIdResolveRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a thread resolved, or reopens it with `reopen`. The note is for the reader who raised it, so say what changed rather than that it was handled — resolving without a new version is allowed and is worth explaining when you do it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.comments.postApiV1CommentsByThreadIdResolve({
    threadId: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.comments
  .postApiV1CommentsByThreadIdResolve({ threadId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>threadId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1CommentsResolveRequest](src/models/api-v1-comments-resolve-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.postApiV1CommentsByThreadIdResolve(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.postApiV1CommentsByThreadIdResolve(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DecisionSessions

> Source: [DecisionSessions](src/resources/decision-sessions.ts)

<details>
<summary><code>getApiV1DecisionSessionsById(request: DecisionSessions.GetApiV1DecisionSessionsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DecisionSessionsResponse, DecisionSessions.GetApiV1DecisionSessionsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`open`, `verified` (the approver confirmed who they are), `complete` (they decided, here or anywhere else) or `expired`, with their decision and the request's own status. Never the secret. Needs approvals:read.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionSessions.getApiV1DecisionSessionsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1DecisionSessionsResponse
} catch (err) {
  // TODO: Handle 'err' of type DecisionSessions.GetApiV1DecisionSessionsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionSessions
  .getApiV1DecisionSessionsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DecisionSessionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionSessions.getApiV1DecisionSessionsById(request)`

- **OnSuccess**: <code>[ApiV1DecisionSessionsResponse](src/models/api-v1-decision-sessions-response.ts)</code>
- **OnError**: throws <code>[DecisionSessions.GetApiV1DecisionSessionsByIdError](src/resources/decision-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionSessions.getApiV1DecisionSessionsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DecisionSessionsResponse, DecisionSessions.GetApiV1DecisionSessionsByIdError&gt;</code>, with `result.value` of type <code>[ApiV1DecisionSessionsResponse](src/models/api-v1-decision-sessions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1DecisionSessionsByIdExpire(request: DecisionSessions.PostApiV1DecisionSessionsByIdExpireRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DecisionSessionsExpireResponse, DecisionSessions.PostApiV1DecisionSessionsByIdExpireError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A decision already made through it stays made. Needs approvals:write.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.decisionSessions.postApiV1DecisionSessionsByIdExpire({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1DecisionSessionsExpireResponse
} catch (err) {
  // TODO: Handle 'err' of type DecisionSessions.PostApiV1DecisionSessionsByIdExpireError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.decisionSessions
  .postApiV1DecisionSessionsByIdExpire({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DecisionSessionsExpireResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.decisionSessions.postApiV1DecisionSessionsByIdExpire(request)`

- **OnSuccess**: <code>[ApiV1DecisionSessionsExpireResponse](src/models/api-v1-decision-sessions-expire-response.ts)</code>
- **OnError**: throws <code>[DecisionSessions.PostApiV1DecisionSessionsByIdExpireError](src/resources/decision-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.decisionSessions.postApiV1DecisionSessionsByIdExpire(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DecisionSessionsExpireResponse, DecisionSessions.PostApiV1DecisionSessionsByIdExpireError&gt;</code>, with `result.value` of type <code>[ApiV1DecisionSessionsExpireResponse](src/models/api-v1-decision-sessions-expire-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Drafts

> Source: [Drafts](src/resources/drafts.ts)

<details>
<summary><code>postApiV1Drafts(request?: Drafts.PostApiV1DraftsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DraftsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an AI with no Deliverd connection. Send an HTML document (JSON `{ html, title?, sourceTool? }` or a raw `text/html` body) and give the person the `claimUrl` that comes back. They sign in, or create a free account, and publish it with one click; it is private to them until they share it. Nothing is served from a draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and expire after 24 hours. Answers `413 too_large`, `422 scan_blocked` or `429 rate_limited` when refused.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.drafts.postApiV1Drafts();
  // TODO: Handle 'response' of type ApiV1DraftsResponse
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
const result = await client.drafts.postApiV1Drafts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DraftsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1DraftsRequest](src/models/api-v1-drafts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.drafts.postApiV1Drafts(request)`

- **OnSuccess**: <code>[ApiV1DraftsResponse](src/models/api-v1-drafts-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.drafts.postApiV1Drafts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DraftsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1DraftsResponse](src/models/api-v1-drafts-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Evidence

> Source: [Evidence](src/resources/evidence.ts)

<details>
<summary><code>postApiV1EvidenceVerify(request?: Evidence.PostApiV1EvidenceVerifyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1EvidenceVerifyResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key, published at `/.well-known/deliverd-evidence-key`. Nothing is stored. `deliverd verify ` makes the same check offline, which does not rely on asking us.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.evidence.postApiV1EvidenceVerify();
  // TODO: Handle 'response' of type ApiV1EvidenceVerifyResponse
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
const result = await client.evidence.postApiV1EvidenceVerify().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1EvidenceVerifyResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.evidence.postApiV1EvidenceVerify(request)`

- **OnSuccess**: <code>[ApiV1EvidenceVerifyResponse](src/models/api-v1-evidence-verify-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.evidence.postApiV1EvidenceVerify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1EvidenceVerifyResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1EvidenceVerifyResponse](src/models/api-v1-evidence-verify-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Flows

> Source: [Flows](src/resources/flows.ts)

<details>
<summary><code>getApiV1Flows(request?: Flows.GetApiV1FlowsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FlowsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flows.getApiV1Flows();
  // TODO: Handle 'response' of type ApiV1FlowsResponse1
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
const result = await client.flows.getApiV1Flows().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FlowsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |
| <code>status?</code> | <code>[StatusDeliverdDevFlowsApi](src/models/status-deliverd-dev-flows-api.ts)</code> | - |
| <code>externalId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flows.getApiV1Flows(request)`

- **OnSuccess**: <code>[ApiV1FlowsResponse1](src/models/api-v1-flows-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.flows.getApiV1Flows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FlowsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1FlowsResponse1](src/models/api-v1-flows-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1FlowsById(request: Flows.GetApiV1FlowsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FlowsResponse, Flows.GetApiV1FlowsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended as it goes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flows.getApiV1FlowsById({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1FlowsResponse
} catch (err) {
  // TODO: Handle 'err' of type Flows.GetApiV1FlowsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.flows
  .getApiV1FlowsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FlowsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flows.getApiV1FlowsById(request)`

- **OnSuccess**: <code>[ApiV1FlowsResponse](src/models/api-v1-flows-response.ts)</code>
- **OnError**: throws <code>[Flows.GetApiV1FlowsByIdError](src/resources/flows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.flows.getApiV1FlowsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FlowsResponse, Flows.GetApiV1FlowsByIdError&gt;</code>, with `result.value` of type <code>[ApiV1FlowsResponse](src/models/api-v1-flows-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1FlowsByIdEvidence(request: Flows.GetApiV1FlowsByIdEvidenceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Flows.GetApiV1FlowsByIdEvidenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flows.getApiV1FlowsByIdEvidence({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Flows.GetApiV1FlowsByIdEvidenceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.flows
  .getApiV1FlowsByIdEvidence({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flows.getApiV1FlowsByIdEvidence(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Flows.GetApiV1FlowsByIdEvidenceError](src/resources/flows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.flows.getApiV1FlowsByIdEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Flows.GetApiV1FlowsByIdEvidenceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Flows(request?: Flows.PostApiV1FlowsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FlowsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flows.postApiV1Flows();
  // TODO: Handle 'response' of type ApiV1FlowsResponse
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
const result = await client.flows.postApiV1Flows().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FlowsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1FlowsRequest](src/models/api-v1-flows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flows.postApiV1Flows(request)`

- **OnSuccess**: <code>[ApiV1FlowsResponse](src/models/api-v1-flows-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.flows.postApiV1Flows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FlowsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1FlowsResponse](src/models/api-v1-flows-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1FlowsByIdCancel(request: Flows.PostApiV1FlowsByIdCancelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FlowsCancelResponse, Flows.PostApiV1FlowsByIdCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing inside it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flows.postApiV1FlowsByIdCancel({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1FlowsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Flows.PostApiV1FlowsByIdCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.flows
  .postApiV1FlowsByIdCancel({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FlowsCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flows.postApiV1FlowsByIdCancel(request)`

- **OnSuccess**: <code>[ApiV1FlowsCancelResponse](src/models/api-v1-flows-cancel-response.ts)</code>
- **OnError**: throws <code>[Flows.PostApiV1FlowsByIdCancelError](src/resources/flows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.flows.postApiV1FlowsByIdCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FlowsCancelResponse, Flows.PostApiV1FlowsByIdCancelError&gt;</code>, with `result.value` of type <code>[ApiV1FlowsCancelResponse](src/models/api-v1-flows-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1FlowsByIdComplete(request: Flows.PostApiV1FlowsByIdCompleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FlowsCompleteResponse, Flows.PostApiV1FlowsByIdCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding; how many is recorded and sent with the flow.completed event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flows.postApiV1FlowsByIdComplete({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1FlowsCompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Flows.PostApiV1FlowsByIdCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.flows
  .postApiV1FlowsByIdComplete({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FlowsCompleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flows.postApiV1FlowsByIdComplete(request)`

- **OnSuccess**: <code>[ApiV1FlowsCompleteResponse](src/models/api-v1-flows-complete-response.ts)</code>
- **OnError**: throws <code>[Flows.PostApiV1FlowsByIdCompleteError](src/resources/flows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.flows.postApiV1FlowsByIdComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FlowsCompleteResponse, Flows.PostApiV1FlowsByIdCompleteError&gt;</code>, with `result.value` of type <code>[ApiV1FlowsCompleteResponse](src/models/api-v1-flows-complete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Gates

> Source: [Gates](src/resources/gates.ts)

<details>
<summary><code>getApiV1GatesById(request: Gates.GetApiV1GatesByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GatesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gates.getApiV1GatesById({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1GatesResponse
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
const result = await client.gates
  .getApiV1GatesById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GatesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The gate decision |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gates.getApiV1GatesById(request)`

- **OnSuccess**: <code>[ApiV1GatesResponse](src/models/api-v1-gates-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.gates.getApiV1GatesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GatesResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1GatesResponse](src/models/api-v1-gates-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GatesByIdEvidence(request: Gates.GetApiV1GatesByIdEvidenceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The act, the policy, the scope, who was asked and under what authority, what each said, what the agent reported, and in words what Deliverd did not check. `?format=csv` is the timeline alone. Needs `approvals:read` as well.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gates.getApiV1GatesByIdEvidence({
    id: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.gates
  .getApiV1GatesByIdEvidence({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The gate |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gates.getApiV1GatesByIdEvidence(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.gates.getApiV1GatesByIdEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Gates(request?: Gates.PostApiV1GatesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GatesResponse, Gates.PostApiV1GatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Declare the action you are about to perform and the arguments you will perform it with; your organisation's policy answers. Three outcomes, one field to branch on: `allowed: true` with status `allowed` (a rule permitted it), `allowed: false` with status `denied` (a rule refused it, and `reason` says which), or status `pending` — nobody has decided yet, an ordinary approval has been raised, and `GET /gates/{id}` or the SDK's `wait()` will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not describe, and a policy that cannot be read all refuse or ask a person. `externalId` is required, unlike every other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate is also a scoped permission: name the `destination`, the `artifact` and the `classification`, and the answer carries `decision` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), `canExecute`, and the window and use count of the permission. An approval covers that scope and nothing else. `canExecute: true` is the organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gates.postApiV1Gates();
  // TODO: Handle 'response' of type ApiV1GatesResponse
} catch (err) {
  // TODO: Handle 'err' of type Gates.PostApiV1GatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gates.postApiV1Gates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1GatesRequest](src/models/api-v1-gates-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gates.postApiV1Gates(request)`

- **OnSuccess**: <code>[ApiV1GatesResponse](src/models/api-v1-gates-response.ts)</code>
- **OnError**: throws <code>[Gates.PostApiV1GatesError](src/resources/gates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gates.postApiV1Gates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GatesResponse, Gates.PostApiV1GatesError&gt;</code>, with `result.value` of type <code>[ApiV1GatesResponse](src/models/api-v1-gates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GatesByIdCancel(request: Gates.PostApiV1GatesByIdCancelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GatesCancelResponse, Gates.PostApiV1GatesByIdCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked may. A used permission cannot be withdrawn.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gates.postApiV1GatesByIdCancel({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1GatesCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Gates.PostApiV1GatesByIdCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gates
  .postApiV1GatesByIdCancel({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GatesCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The gate |
| <code>body?</code> | <code>[ApiV1GatesCancelRequest](src/models/api-v1-gates-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gates.postApiV1GatesByIdCancel(request)`

- **OnSuccess**: <code>[ApiV1GatesCancelResponse](src/models/api-v1-gates-cancel-response.ts)</code>
- **OnError**: throws <code>[Gates.PostApiV1GatesByIdCancelError](src/resources/gates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gates.postApiV1GatesByIdCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GatesCancelResponse, Gates.PostApiV1GatesByIdCancelError&gt;</code>, with `result.value` of type <code>[ApiV1GatesCancelResponse](src/models/api-v1-gates-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GatesByIdExecution(request: Gates.PostApiV1GatesByIdExecutionRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GatesExecutionResponse, Gates.PostApiV1GatesByIdExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`started` claims a use before you act; `completed` or `failed` finishes that claim. A `completed` with no `claimId` claims and reports in one. Checked against what was authorised: another artifact hash is `approval_invalidated`, another destination is `destination_mismatch`. A spent, lapsed, revoked or withdrawn permission is refused with a code saying which. What you report is recorded as your report: `hash_matched` when Deliverd checked the hash, `reported` when there was nothing to check; `verified` is reserved for acts Deliverd performed itself.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gates.postApiV1GatesByIdExecution({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1GatesExecutionResponse
} catch (err) {
  // TODO: Handle 'err' of type Gates.PostApiV1GatesByIdExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gates
  .postApiV1GatesByIdExecution({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GatesExecutionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The gate |
| <code>body?</code> | <code>[ApiV1GatesExecutionRequest](src/models/api-v1-gates-execution-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gates.postApiV1GatesByIdExecution(request)`

- **OnSuccess**: <code>[ApiV1GatesExecutionResponse](src/models/api-v1-gates-execution-response.ts)</code>
- **OnError**: throws <code>[Gates.PostApiV1GatesByIdExecutionError](src/resources/gates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gates.postApiV1GatesByIdExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GatesExecutionResponse, Gates.PostApiV1GatesByIdExecutionError&gt;</code>, with `result.value` of type <code>[ApiV1GatesExecutionResponse](src/models/api-v1-gates-execution-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GatesByIdRelease(request: Gates.PostApiV1GatesByIdReleaseRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GatesReleaseResponse, Gates.PostApiV1GatesByIdReleaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The staged report version the gate names goes live, if the gate still authorises it and the report lives where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a person approved. The receipt is `verified` — Deliverd did it. Needs `reports:write` as well.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gates.postApiV1GatesByIdRelease({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1GatesReleaseResponse
} catch (err) {
  // TODO: Handle 'err' of type Gates.PostApiV1GatesByIdReleaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gates
  .postApiV1GatesByIdRelease({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GatesReleaseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The gate |
| <code>body?</code> | <code>[ApiV1GatesReleaseRequest](src/models/api-v1-gates-release-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gates.postApiV1GatesByIdRelease(request)`

- **OnSuccess**: <code>[ApiV1GatesReleaseResponse](src/models/api-v1-gates-release-response.ts)</code>
- **OnError**: throws <code>[Gates.PostApiV1GatesByIdReleaseError](src/resources/gates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gates.postApiV1GatesByIdRelease(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GatesReleaseResponse, Gates.PostApiV1GatesByIdReleaseError&gt;</code>, with `result.value` of type <code>[ApiV1GatesReleaseResponse](src/models/api-v1-gates-release-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GatesVerifyToken(request?: Gates.PostApiV1GatesVerifyTokenRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GatesVerifyTokenResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Whether a gate's `decisionToken` is this deployment's signature over this action and input, for your organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check locally with the key at `/.well-known/deliverd-evidence-key`. A refused token is a 200 with `valid: false` and the `reason`. It does not spend a use: report the execution for that.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gates.postApiV1GatesVerifyToken();
  // TODO: Handle 'response' of type ApiV1GatesVerifyTokenResponse
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
const result = await client.gates.postApiV1GatesVerifyToken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GatesVerifyTokenResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1GatesVerifyTokenRequest](src/models/api-v1-gates-verify-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gates.postApiV1GatesVerifyToken(request)`

- **OnSuccess**: <code>[ApiV1GatesVerifyTokenResponse](src/models/api-v1-gates-verify-token-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.gates.postApiV1GatesVerifyToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GatesVerifyTokenResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1GatesVerifyTokenResponse](src/models/api-v1-gates-verify-token-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GovernanceApi

> Source: [GovernanceApi](src/resources/governance-api.ts)

<details>
<summary><code>getApiV1GovernanceFrameworks(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are applied at which version. A pack maps requirements onto controls for review; it is not legal advice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernanceFrameworks();
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
const result = await client.governanceApi.getApiV1GovernanceFrameworks().asApiResult();
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

**Direct**: `await client.governanceApi.getApiV1GovernanceFrameworks()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.governanceApi.getApiV1GovernanceFrameworks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GovernanceFrameworksMapping(request?: GovernanceApi.GetApiV1GovernanceFrameworksMappingRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With `taskId`, how far that governed task's completed controls cover each requirement. A mapping, never a compliance verdict.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernanceFrameworksMapping();
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
const result = await client.governanceApi.getApiV1GovernanceFrameworksMapping().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId?</code> | <code>string</code> | - |
| <code>framework?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.getApiV1GovernanceFrameworksMapping(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.governanceApi.getApiV1GovernanceFrameworksMapping(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GovernanceIctRegister(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DORA's register of information, for the providers behind the organisation's AI systems: who keeps it (`entity`), the `providers`, the `arrangements` (contracts) with the AI systems that run under each, what each entry still lacks (`gaps`), the `concentration` on each provider, and the AI systems not yet in the register.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernanceIctRegister();
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
const result = await client.governanceApi.getApiV1GovernanceIctRegister().asApiResult();
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

**Direct**: `await client.governanceApi.getApiV1GovernanceIctRegister()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.governanceApi.getApiV1GovernanceIctRegister().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GovernanceIctRegisterExport(request?: GovernanceApi.GetApiV1GovernanceIctRegisterExportRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GovernanceApi.GetApiV1GovernanceIctRegisterExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the regulation's column codes. JSON is every template (or `template`) with its columns and rows; `format=csv` is one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register to take in, not the submission itself.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernanceIctRegisterExport();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GovernanceApi.GetApiV1GovernanceIctRegisterExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.governanceApi.getApiV1GovernanceIctRegisterExport().asApiResult();
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
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | - |
| <code>template?</code> | <code>[Template](src/models/template.ts)</code> | - |
| <code>asOf?</code> | <code>string</code> (date) | The reporting date; today when omitted |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.getApiV1GovernanceIctRegisterExport(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GovernanceApi.GetApiV1GovernanceIctRegisterExportError](src/resources/governance-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.governanceApi.getApiV1GovernanceIctRegisterExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GovernanceApi.GetApiV1GovernanceIctRegisterExportError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GovernanceIncidents(request?: GovernanceApi.GetApiV1GovernanceIncidentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1GovernanceIncidentsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paged with `limit` and `cursor`; `nextCursor` is null at the end. Incidents against a task you cannot read are left out.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernanceIncidents();
  // TODO: Handle 'response' of type ApiV1GovernanceIncidentsResponse
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
const result = await client.governanceApi.getApiV1GovernanceIncidents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1GovernanceIncidentsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[StatusDeliverdDevGovernanceApi](src/models/status-deliverd-dev-governance-api.ts)</code> | - |
| <code>aiSystemId?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.getApiV1GovernanceIncidents(request)`

- **OnSuccess**: <code>[ApiV1GovernanceIncidentsResponse](src/models/api-v1-governance-incidents-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.governanceApi.getApiV1GovernanceIncidents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1GovernanceIncidentsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1GovernanceIncidentsResponse](src/models/api-v1-governance-incidents-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GovernanceIncidentsById(request: GovernanceApi.GetApiV1GovernanceIncidentsByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GovernanceApi.GetApiV1GovernanceIncidentsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The incident, its DORA classification (`dora`: the facts, `major`, each criterion and the reason), its reports with their sign-off status, and `schedule`: which report is due next and by when. Nothing is due unless it is classified major.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernanceIncidentsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GovernanceApi.GetApiV1GovernanceIncidentsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.governanceApi
  .getApiV1GovernanceIncidentsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.getApiV1GovernanceIncidentsById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GovernanceApi.GetApiV1GovernanceIncidentsByIdError](src/resources/governance-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.governanceApi.getApiV1GovernanceIncidentsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GovernanceApi.GetApiV1GovernanceIncidentsByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GovernancePolicies(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Governed tasks record the version they were evaluated against. Publishing a version is done by a person in Deliverd.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernancePolicies();
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
const result = await client.governanceApi.getApiV1GovernancePolicies().asApiResult();
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

**Direct**: `await client.governanceApi.getApiV1GovernancePolicies()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.governanceApi.getApiV1GovernancePolicies().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GovernanceSummary(request?: GovernanceApi.GetApiV1GovernanceSummaryRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GovernanceApi.GetApiV1GovernanceSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what needs review. `jurisdiction` and `framework` filters are Enterprise. Never a compliance percentage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.getApiV1GovernanceSummary();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GovernanceApi.GetApiV1GovernanceSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.governanceApi.getApiV1GovernanceSummary().asApiResult();
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
| <code>aiSystemId?</code> | <code>string</code> | - |
| <code>risk?</code> | <code>[Risk](src/models/risk.ts)</code> | - |
| <code>owner?</code> | <code>string</code> | - |
| <code>provider?</code> | <code>string</code> | - |
| <code>dataClassification?</code> | <code>string</code> | - |
| <code>jurisdiction?</code> | <code>string</code> | - |
| <code>framework?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.getApiV1GovernanceSummary(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GovernanceApi.GetApiV1GovernanceSummaryError](src/resources/governance-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.governanceApi.getApiV1GovernanceSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GovernanceApi.GetApiV1GovernanceSummaryError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GovernanceAuthorityEvaluate(request?: GovernanceApi.PostApiV1GovernanceAuthorityEvaluateRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. `mode` is allowed, approval or denied. Records nothing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.postApiV1GovernanceAuthorityEvaluate();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.governanceApi.postApiV1GovernanceAuthorityEvaluate().asApiResult();
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
| <code>body?</code> | <code>[ApiV1GovernanceAuthorityEvaluateRequest](src/models/api-v1-governance-authority-evaluate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.postApiV1GovernanceAuthorityEvaluate(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError](src/resources/governance-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.governanceApi.postApiV1GovernanceAuthorityEvaluate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GovernanceFrameworks(request?: GovernanceApi.PostApiV1GovernanceFrameworksRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceFrameworksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is never edited — a change is a new version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.postApiV1GovernanceFrameworks();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GovernanceApi.PostApiV1GovernanceFrameworksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.governanceApi.postApiV1GovernanceFrameworks().asApiResult();
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
| <code>body?</code> | <code>[ApiV1GovernanceFrameworksRequest](src/models/api-v1-governance-frameworks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.postApiV1GovernanceFrameworks(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GovernanceApi.PostApiV1GovernanceFrameworksError](src/resources/governance-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.governanceApi.postApiV1GovernanceFrameworks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceFrameworksError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GovernanceIncidents(request?: GovernanceApi.PostApiV1GovernanceIncidentsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceIncidentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a person resolves it. Permanent: it cannot be edited or withdrawn.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.postApiV1GovernanceIncidents();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GovernanceApi.PostApiV1GovernanceIncidentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.governanceApi.postApiV1GovernanceIncidents().asApiResult();
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
| <code>body?</code> | <code>[ApiV1GovernanceIncidentsRequest](src/models/api-v1-governance-incidents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.postApiV1GovernanceIncidents(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GovernanceApi.PostApiV1GovernanceIncidentsError](src/resources/governance-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.governanceApi.postApiV1GovernanceIncidents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceIncidentsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1GovernanceIncidentsByIdReports(request: GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as tasks:write.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.governanceApi.postApiV1GovernanceIncidentsByIdReports({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.governanceApi
  .postApiV1GovernanceIncidentsByIdReports({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1GovernanceIncidentsReportsRequest](src/models/api-v1-governance-incidents-reports-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.governanceApi.postApiV1GovernanceIncidentsByIdReports(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError](src/resources/governance-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.governanceApi.postApiV1GovernanceIncidentsByIdReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Knowledge

> Source: [Knowledge](src/resources/knowledge.ts)

<details>
<summary><code>getApiV1Knowledge(request?: Knowledge.GetApiV1KnowledgeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ranked by relevance to `q`, or newest first without it. Confirmed entries unless `status` says otherwise: only those are to be relied on. `more` is true when the list was cut at `limit`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledge.getApiV1Knowledge();
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
const result = await client.knowledge.getApiV1Knowledge().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | - |
| <code>kind?</code> | <code>[KindDeliverdDevKnowledgeApi](src/models/kind-deliverd-dev-knowledge-api.ts)</code> | - |
| <code>status?</code> | <code>[StatusDeliverdDevKnowledgeApi](src/models/status-deliverd-dev-knowledge-api.ts)</code> | - |
| <code>workspaceId?</code> | <code>string</code> | - |
| <code>flowId?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledge.getApiV1Knowledge(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.knowledge.getApiV1Knowledge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1KnowledgeAgentsMd(request?: Knowledge.GetApiV1KnowledgeAgentsMdRequest, options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a tool that reads files rather than calling tools. A snapshot that says where the live version is.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledge.getApiV1KnowledgeAgentsMd();
  // TODO: Handle 'response' of type string
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
const result = await client.knowledge.getApiV1KnowledgeAgentsMd().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledge.getApiV1KnowledgeAgentsMd(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.knowledge.getApiV1KnowledgeAgentsMd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1KnowledgeById(request: Knowledge.GetApiV1KnowledgeByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Knowledge.GetApiV1KnowledgeByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledge.getApiV1KnowledgeById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Knowledge.GetApiV1KnowledgeByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledge
  .getApiV1KnowledgeById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledge.getApiV1KnowledgeById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Knowledge.GetApiV1KnowledgeByIdError](src/resources/knowledge.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledge.getApiV1KnowledgeById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Knowledge.GetApiV1KnowledgeByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1KnowledgeExport(request?: Knowledge.GetApiV1KnowledgeExportRequest, options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledge.getApiV1KnowledgeExport();
  // TODO: Handle 'response' of type string
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
const result = await client.knowledge.getApiV1KnowledgeExport().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format?</code> | <code>[FormatDeliverdDevKnowledgeApi](src/models/format-deliverd-dev-knowledge-api.ts)</code> | - |
| <code>status?</code> | <code>[StatusDeliverdDevKnowledgeApi](src/models/status-deliverd-dev-knowledge-api.ts)</code> | - |
| <code>workspaceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledge.getApiV1KnowledgeExport(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.knowledge.getApiV1KnowledgeExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1KnowledgeById(request: Knowledge.PatchApiV1KnowledgeByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Knowledge.PatchApiV1KnowledgeByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words never change: propose a revision.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledge.patchApiV1KnowledgeById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Knowledge.PatchApiV1KnowledgeByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledge
  .patchApiV1KnowledgeById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1KnowledgeRequest1](src/models/api-v1-knowledge-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledge.patchApiV1KnowledgeById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Knowledge.PatchApiV1KnowledgeByIdError](src/resources/knowledge.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledge.patchApiV1KnowledgeById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Knowledge.PatchApiV1KnowledgeByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Knowledge(request?: Knowledge.PostApiV1KnowledgeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Knowledge.PostApiV1KnowledgeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal data is said back as `screening`. With `supersedesId` it is a revision that replaces the confirmed entry once confirmed. With `externalId`, an open entry under the same one is returned instead (`resumed: true`, status 200).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledge.postApiV1Knowledge();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Knowledge.PostApiV1KnowledgeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledge.postApiV1Knowledge().asApiResult();
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
| <code>body?</code> | <code>[ApiV1KnowledgeRequest](src/models/api-v1-knowledge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledge.postApiV1Knowledge(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Knowledge.PostApiV1KnowledgeError](src/resources/knowledge.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledge.postApiV1Knowledge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Knowledge.PostApiV1KnowledgeError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1KnowledgeImport(request?: Knowledge.PostApiV1KnowledgeImportRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Knowledge.PostApiV1KnowledgeImportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one proposed entry. Entries already there by title or id are skipped and said so.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledge.postApiV1KnowledgeImport();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Knowledge.PostApiV1KnowledgeImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledge.postApiV1KnowledgeImport().asApiResult();
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
| <code>body?</code> | <code>[ApiV1KnowledgeImportRequest](src/models/api-v1-knowledge-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledge.postApiV1KnowledgeImport(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Knowledge.PostApiV1KnowledgeImportError](src/resources/knowledge.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledge.postApiV1KnowledgeImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Knowledge.PostApiV1KnowledgeImportError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Playbooks

> Source: [Playbooks](src/resources/playbooks.ts)

<details>
<summary><code>getApiV1Playbooks(request?: Playbooks.GetApiV1PlaybooksRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One row per playbook: its newest version, and `inForce`, the version that runs. Approved prompts are playbooks of `kind` prompt; `?kind=` keeps one or the other.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.getApiV1Playbooks();
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
const result = await client.playbooks.getApiV1Playbooks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>kind?</code> | <code>[KindDeliverdDevPlaybooksApi](src/models/kind-deliverd-dev-playbooks-api.ts)</code> | procedure for playbooks of steps, prompt for approved prompts; both when omitted |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.getApiV1Playbooks(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.playbooks.getApiV1Playbooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1PlaybooksById(request: Playbooks.GetApiV1PlaybooksByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Playbooks.GetApiV1PlaybooksByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.getApiV1PlaybooksById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Playbooks.GetApiV1PlaybooksByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playbooks
  .getApiV1PlaybooksById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.getApiV1PlaybooksById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Playbooks.GetApiV1PlaybooksByIdError](src/resources/playbooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playbooks.getApiV1PlaybooksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Playbooks.GetApiV1PlaybooksByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1PlaybooksById(request: Playbooks.PatchApiV1PlaybooksByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Playbooks.PatchApiV1PlaybooksByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only before it has been put to anybody. After that, draft the next version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.patchApiV1PlaybooksById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Playbooks.PatchApiV1PlaybooksByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playbooks
  .patchApiV1PlaybooksById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1PlaybooksRequest](src/models/api-v1-playbooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.patchApiV1PlaybooksById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Playbooks.PatchApiV1PlaybooksByIdError](src/resources/playbooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playbooks.patchApiV1PlaybooksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Playbooks.PatchApiV1PlaybooksByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Playbooks(request?: Playbooks.PostApiV1PlaybooksRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Steps, each with the rule that applies before it acts: `none`, `gate` (with the `action` to check), `approval` or `review`. Or `prompt` instead of steps, for an approved prompt: its words with `{input}` placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an approval of it is approved.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.postApiV1Playbooks();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Playbooks.PostApiV1PlaybooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playbooks.postApiV1Playbooks().asApiResult();
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
| <code>body?</code> | <code>[ApiV1PlaybooksRequest](src/models/api-v1-playbooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.postApiV1Playbooks(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Playbooks.PostApiV1PlaybooksError](src/resources/playbooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playbooks.postApiV1Playbooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PlaybooksByIdApproval(request: Playbooks.PostApiV1PlaybooksByIdApprovalRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdApprovalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Deliverd approval of the playbook; approved, it goes in force. Needs `approvals:write` and `tasks:write`. Its content is fixed from here.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.postApiV1PlaybooksByIdApproval({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Playbooks.PostApiV1PlaybooksByIdApprovalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playbooks
  .postApiV1PlaybooksByIdApproval({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1PlaybooksApprovalRequest](src/models/api-v1-playbooks-approval-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.postApiV1PlaybooksByIdApproval(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Playbooks.PostApiV1PlaybooksByIdApprovalError](src/resources/playbooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playbooks.postApiV1PlaybooksByIdApproval(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdApprovalError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PlaybooksByIdStart(request: Playbooks.PostApiV1PlaybooksByIdStartRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdStartError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the version in force as an objective, with a side task per step holding its instruction and the call its rule needs. Naming an older version runs the one in force (`ranOlderVersion`). Missing required inputs are refused with `details.missingInputs`. With `externalId`, an open run is returned instead (status 200).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.postApiV1PlaybooksByIdStart({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Playbooks.PostApiV1PlaybooksByIdStartError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playbooks
  .postApiV1PlaybooksByIdStart({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1PlaybooksStartRequest](src/models/api-v1-playbooks-start-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.postApiV1PlaybooksByIdStart(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Playbooks.PostApiV1PlaybooksByIdStartError](src/resources/playbooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playbooks.postApiV1PlaybooksByIdStart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdStartError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PlaybooksByIdUse(request: Playbooks.PostApiV1PlaybooksByIdUseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdUseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against the version. Naming an older version hands out the one in force (`ranOlderVersion`). Required inputs not given are listed in `missingInputs` and their placeholders left in the words. Needs `tasks:read`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.postApiV1PlaybooksByIdUse({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Playbooks.PostApiV1PlaybooksByIdUseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playbooks
  .postApiV1PlaybooksByIdUse({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1PlaybooksUseRequest](src/models/api-v1-playbooks-use-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.postApiV1PlaybooksByIdUse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Playbooks.PostApiV1PlaybooksByIdUseError](src/resources/playbooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playbooks.postApiV1PlaybooksByIdUse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdUseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PlaybooksByIdVersions(request: Playbooks.PostApiV1PlaybooksByIdVersionsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The version in force keeps running until this one is put in force.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playbooks.postApiV1PlaybooksByIdVersions({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Playbooks.PostApiV1PlaybooksByIdVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playbooks
  .postApiV1PlaybooksByIdVersions({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1PlaybooksVersionsRequest](src/models/api-v1-playbooks-versions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playbooks.postApiV1PlaybooksByIdVersions(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Playbooks.PostApiV1PlaybooksByIdVersionsError](src/resources/playbooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playbooks.postApiV1PlaybooksByIdVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Playbooks.PostApiV1PlaybooksByIdVersionsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Policies

> Source: [Policies](src/resources/policies.ts)

<details>
<summary><code>getApiV1Policies(request?: Policies.GetApiV1PoliciesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PoliciesResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.getApiV1Policies();
  // TODO: Handle 'response' of type ApiV1PoliciesResponse1
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
const result = await client.policies.getApiV1Policies().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PoliciesResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.getApiV1Policies(request)`

- **OnSuccess**: <code>[ApiV1PoliciesResponse1](src/models/api-v1-policies-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.policies.getApiV1Policies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PoliciesResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1PoliciesResponse1](src/models/api-v1-policies-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Policies(request?: Policies.PostApiV1PoliciesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PoliciesResponse, Policies.PostApiV1PoliciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A policy is an identity that survives editing; a version is an immutable rule set. Pass `rules` to store them as version 1 and `activate: true` to put that version in force, so a push is one request rather than three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same name is refused, because overwriting one would silently replace the rules an organisation is running under. The key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a person.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.postApiV1Policies();
  // TODO: Handle 'response' of type ApiV1PoliciesResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.PostApiV1PoliciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies.postApiV1Policies().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PoliciesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1PoliciesRequest](src/models/api-v1-policies-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.postApiV1Policies(request)`

- **OnSuccess**: <code>[ApiV1PoliciesResponse](src/models/api-v1-policies-response.ts)</code>
- **OnError**: throws <code>[Policies.PostApiV1PoliciesError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.postApiV1Policies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PoliciesResponse, Policies.PostApiV1PoliciesError&gt;</code>, with `result.value` of type <code>[ApiV1PoliciesResponse](src/models/api-v1-policies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PoliciesByIdActivate(request: Policies.PostApiV1PoliciesByIdActivateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PoliciesActivateResponse, Policies.PostApiV1PoliciesByIdActivateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new version instead, because bringing one back would change what every decision pointing at it meant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.postApiV1PoliciesByIdActivate({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1PoliciesActivateResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.PostApiV1PoliciesByIdActivateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .postApiV1PoliciesByIdActivate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PoliciesActivateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The policy |
| <code>body?</code> | <code>[ApiV1PoliciesActivateRequest](src/models/api-v1-policies-activate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.postApiV1PoliciesByIdActivate(request)`

- **OnSuccess**: <code>[ApiV1PoliciesActivateResponse](src/models/api-v1-policies-activate-response.ts)</code>
- **OnError**: throws <code>[Policies.PostApiV1PoliciesByIdActivateError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.postApiV1PoliciesByIdActivate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PoliciesActivateResponse, Policies.PostApiV1PoliciesByIdActivateError&gt;</code>, with `result.value` of type <code>[ApiV1PoliciesActivateResponse](src/models/api-v1-policies-activate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PoliciesByIdVersions(request: Policies.PostApiV1PoliciesByIdVersionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PoliciesVersionsResponse, Policies.PostApiV1PoliciesByIdVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision points at. It lands as a draft unless `activate` is set. Rules are validated against the action registry now rather than at activation: a condition naming a field the action's schema does not declare is refused here, since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has been in force can never be edited — the database refuses it, not only this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.postApiV1PoliciesByIdVersions({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1PoliciesVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.PostApiV1PoliciesByIdVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .postApiV1PoliciesByIdVersions({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PoliciesVersionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The policy |
| <code>body?</code> | <code>[ApiV1PoliciesVersionsRequest](src/models/api-v1-policies-versions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.postApiV1PoliciesByIdVersions(request)`

- **OnSuccess**: <code>[ApiV1PoliciesVersionsResponse](src/models/api-v1-policies-versions-response.ts)</code>
- **OnError**: throws <code>[Policies.PostApiV1PoliciesByIdVersionsError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.postApiV1PoliciesByIdVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PoliciesVersionsResponse, Policies.PostApiV1PoliciesByIdVersionsError&gt;</code>, with `result.value` of type <code>[ApiV1PoliciesVersionsResponse](src/models/api-v1-policies-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PoliciesReplay(request?: Policies.PostApiV1PoliciesReplayRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PoliciesReplayResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-evaluates the organisation's recorded gate requests from the last `days` (default 30, newest 5,000) twice: under the rules in force, and with the proposal standing in for its policy's version in force. The proposal is a stored version (`policyId` and `version`) or a policy file not yet pushed (`name` and `rules`). Reports how many decisions change and which way, and the requests a person rejected that would now be allowed. `fail` applies `failOn`, for CI. Policy rules only: ethics checks are not replayed. Nothing is written.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.postApiV1PoliciesReplay();
  // TODO: Handle 'response' of type ApiV1PoliciesReplayResponse
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
const result = await client.policies.postApiV1PoliciesReplay().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PoliciesReplayResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1PoliciesReplayRequest](src/models/api-v1-policies-replay-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.postApiV1PoliciesReplay(request)`

- **OnSuccess**: <code>[ApiV1PoliciesReplayResponse](src/models/api-v1-policies-replay-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.policies.postApiV1PoliciesReplay(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PoliciesReplayResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1PoliciesReplayResponse](src/models/api-v1-policies-replay-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PoliciesSimulate(request?: Policies.PostApiV1PoliciesSimulateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PoliciesSimulateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped to one policy, because enforcement flattens every active version into one rule set and takes the first decisive rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a simulation that wrote a decision row would put invented traffic into the autonomy rate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.postApiV1PoliciesSimulate();
  // TODO: Handle 'response' of type ApiV1PoliciesSimulateResponse
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
const result = await client.policies.postApiV1PoliciesSimulate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PoliciesSimulateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1PoliciesSimulateRequest](src/models/api-v1-policies-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.postApiV1PoliciesSimulate(request)`

- **OnSuccess**: <code>[ApiV1PoliciesSimulateResponse](src/models/api-v1-policies-simulate-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.policies.postApiV1PoliciesSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PoliciesSimulateResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1PoliciesSimulateResponse](src/models/api-v1-policies-simulate-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1PoliciesTest(request?: Policies.PostApiV1PoliciesTestRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PoliciesTestResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates each test case against the proposal, with every other policy in force as it is, after validating its input against the action's schema as a real request would be. A case passes when the effect, and the deciding rule when `expect.rule` is given, match. Nothing is written.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.postApiV1PoliciesTest();
  // TODO: Handle 'response' of type ApiV1PoliciesTestResponse
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
const result = await client.policies.postApiV1PoliciesTest().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PoliciesTestResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1PoliciesTestRequest](src/models/api-v1-policies-test-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.postApiV1PoliciesTest(request)`

- **OnSuccess**: <code>[ApiV1PoliciesTestResponse](src/models/api-v1-policies-test-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.policies.postApiV1PoliciesTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PoliciesTestResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1PoliciesTestResponse](src/models/api-v1-policies-test-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>deleteApiV1ReportsByIdOrSlugCommentsByCommentId(request: Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsCommentsResponse2, Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once somebody has replied it stays, so their reply is never left answering something no longer on the page. Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted. `commentId` comes from the `POST` above or from `GET /reports/{idOrSlug}/comments`, which marks the one message this credential can still take back.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.deleteApiV1ReportsByIdOrSlugCommentsByCommentId({
    idOrSlug: "some example string",
    commentId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1ReportsCommentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .deleteApiV1ReportsByIdOrSlugCommentsByCommentId({
    idOrSlug: "some example string",
    commentId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsCommentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>commentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.deleteApiV1ReportsByIdOrSlugCommentsByCommentId(request)`

- **OnSuccess**: <code>[ApiV1ReportsCommentsResponse2](src/models/api-v1-reports-comments-response2.ts)</code>
- **OnError**: throws <code>[Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.deleteApiV1ReportsByIdOrSlugCommentsByCommentId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsCommentsResponse2, Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsCommentsResponse2](src/models/api-v1-reports-comments-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiV1ReportsByIdOrSlugDataByName(request: Reports.DeleteApiV1ReportsByIdOrSlugDataByNameRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.reports.deleteApiV1ReportsByIdOrSlugDataByName({
    idOrSlug: "some example string",
    name: "some example string",
  });
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
const result = await client.reports
  .deleteApiV1ReportsByIdOrSlugDataByName({ idOrSlug: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.deleteApiV1ReportsByIdOrSlugDataByName(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.deleteApiV1ReportsByIdOrSlugDataByName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiV1ReportsByIdOrSlugShare(request: Reports.DeleteApiV1ReportsByIdOrSlugShareRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsShareResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Take access away from the same audience phrase that granted it. By audience rather than by grant id because that is all a caller has: the audience on `GET /reports/{idOrSlug}` carries each grant's *principal* id, never the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is open.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.deleteApiV1ReportsByIdOrSlugShare({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsShareResponse1
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
const result = await client.reports
  .deleteApiV1ReportsByIdOrSlugShare({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsShareResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsShareRequest1](src/models/api-v1-reports-share-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.deleteApiV1ReportsByIdOrSlugShare(request)`

- **OnSuccess**: <code>[ApiV1ReportsShareResponse1](src/models/api-v1-reports-share-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.deleteApiV1ReportsByIdOrSlugShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsShareResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsShareResponse1](src/models/api-v1-reports-share-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Reports(request?: Reports.GetApiV1ReportsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getApiV1Reports();
  // TODO: Handle 'response' of type ApiV1ReportsResponse
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
const result = await client.reports.getApiV1Reports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Searches title, slug and description |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getApiV1Reports(request)`

- **OnSuccess**: <code>[ApiV1ReportsResponse](src/models/api-v1-reports-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.getApiV1Reports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsResponse](src/models/api-v1-reports-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ReportsByIdOrSlug(request: Reports.GetApiV1ReportsByIdOrSlugRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsResponse4, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getApiV1ReportsByIdOrSlug({ idOrSlug: "some example string" });
  // TODO: Handle 'response' of type ApiV1ReportsResponse4
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
const result = await client.reports
  .getApiV1ReportsByIdOrSlug({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsResponse4
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getApiV1ReportsByIdOrSlug(request)`

- **OnSuccess**: <code>[ApiV1ReportsResponse4](src/models/api-v1-reports-response4.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.getApiV1ReportsByIdOrSlug(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsResponse4, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsResponse4](src/models/api-v1-reports-response4.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ReportsByIdOrSlugAnalytics(request: Reports.GetApiV1ReportsByIdOrSlugAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsAnalyticsResponse, Reports.GetApiV1ReportsByIdOrSlugAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same figures the report page shows. Total views are on every plan; unique, internal and external viewers, the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getApiV1ReportsByIdOrSlugAnalytics({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsAnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetApiV1ReportsByIdOrSlugAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getApiV1ReportsByIdOrSlugAnalytics({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsAnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getApiV1ReportsByIdOrSlugAnalytics(request)`

- **OnSuccess**: <code>[ApiV1ReportsAnalyticsResponse](src/models/api-v1-reports-analytics-response.ts)</code>
- **OnError**: throws <code>[Reports.GetApiV1ReportsByIdOrSlugAnalyticsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getApiV1ReportsByIdOrSlugAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsAnalyticsResponse, Reports.GetApiV1ReportsByIdOrSlugAnalyticsError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsAnalyticsResponse](src/models/api-v1-reports-analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ReportsByIdOrSlugComments(request: Reports.GetApiV1ReportsByIdOrSlugCommentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsCommentsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version, so a client can find what to change without fetching the file. `anchorStatus` says whether the commented text still exists: `anchored` and `shifted` mean it does; `stale` means it was edited away, and the excerpt then comes from the version the comment was written against.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getApiV1ReportsByIdOrSlugComments({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsCommentsResponse
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
const result = await client.reports
  .getApiV1ReportsByIdOrSlugComments({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsCommentsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>status?</code> | <code>[Status12](src/models/status12.ts)</code> | Defaults to open — the threads still needing action |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getApiV1ReportsByIdOrSlugComments(request)`

- **OnSuccess**: <code>[ApiV1ReportsCommentsResponse](src/models/api-v1-reports-comments-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.getApiV1ReportsByIdOrSlugComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsCommentsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsCommentsResponse](src/models/api-v1-reports-comments-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ReportsByIdOrSlugData(request: Reports.GetApiV1ReportsByIdOrSlugDataRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsDataResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getApiV1ReportsByIdOrSlugData({ idOrSlug: "some example string" });
  // TODO: Handle 'response' of type ApiV1ReportsDataResponse
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
const result = await client.reports
  .getApiV1ReportsByIdOrSlugData({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsDataResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getApiV1ReportsByIdOrSlugData(request)`

- **OnSuccess**: <code>[ApiV1ReportsDataResponse](src/models/api-v1-reports-data-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.getApiV1ReportsByIdOrSlugData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsDataResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsDataResponse](src/models/api-v1-reports-data-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ReportsByIdOrSlugEvidence(request: Reports.GetApiV1ReportsByIdOrSlugEvidenceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Reports.GetApiV1ReportsByIdOrSlugEvidenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor usually names and works for work done before flows existed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getApiV1ReportsByIdOrSlugEvidence({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetApiV1ReportsByIdOrSlugEvidenceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getApiV1ReportsByIdOrSlugEvidence({ idOrSlug: "some example string" })
  .asApiResult();
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
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getApiV1ReportsByIdOrSlugEvidence(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Reports.GetApiV1ReportsByIdOrSlugEvidenceError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getApiV1ReportsByIdOrSlugEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Reports.GetApiV1ReportsByIdOrSlugEvidenceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ReportsByIdOrSlugVersions(request: Reports.GetApiV1ReportsByIdOrSlugVersionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsVersionsResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getApiV1ReportsByIdOrSlugVersions({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsVersionsResponse2
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
const result = await client.reports
  .getApiV1ReportsByIdOrSlugVersions({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsVersionsResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getApiV1ReportsByIdOrSlugVersions(request)`

- **OnSuccess**: <code>[ApiV1ReportsVersionsResponse2](src/models/api-v1-reports-versions-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.getApiV1ReportsByIdOrSlugVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsVersionsResponse2, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsVersionsResponse2](src/models/api-v1-reports-versions-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1ReportsByIdOrSlug(request: Reports.PatchApiV1ReportsByIdOrSlugRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsResponse3, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to the new URL, so links already shared keep working. `previousSlug` names the address that was kept, or null when only the title changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.patchApiV1ReportsByIdOrSlug({ idOrSlug: "some example string" });
  // TODO: Handle 'response' of type ApiV1ReportsResponse3
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
const result = await client.reports
  .patchApiV1ReportsByIdOrSlug({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsResponse3
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsRequest1](src/models/api-v1-reports-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.patchApiV1ReportsByIdOrSlug(request)`

- **OnSuccess**: <code>[ApiV1ReportsResponse3](src/models/api-v1-reports-response3.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.patchApiV1ReportsByIdOrSlug(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsResponse3, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsResponse3](src/models/api-v1-reports-response3.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Reports(request?: Reports.PostApiV1ReportsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new versions after that. `taskId` keeps the report with a Task Graph task: it is listed on the task and returned in the task's context. A later publish naming another task moves it there, and one naming none leaves it where it is. Naming a task needs `tasks:read` on the key and the Tasks plan feature (`402 feature_unavailable` without it).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1Reports();
  // TODO: Handle 'response' of type ApiV1ReportsResponse1
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
const result = await client.reports.postApiV1Reports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1ReportsRequest](src/models/api-v1-reports-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1Reports(request)`

- **OnSuccess**: <code>[ApiV1ReportsResponse1](src/models/api-v1-reports-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.postApiV1Reports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsResponse1](src/models/api-v1-reports-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugArchive(request: Reports.PostApiV1ReportsByIdOrSlugArchiveRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsArchiveResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer available. Nothing is deleted and the audience is kept, so `{"archived": false}` restores it exactly as it was. The body is optional and defaults to archiving.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugArchive({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsArchiveResponse
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
const result = await client.reports
  .postApiV1ReportsByIdOrSlugArchive({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsArchiveResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsArchiveRequest](src/models/api-v1-reports-archive-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugArchive(request)`

- **OnSuccess**: <code>[ApiV1ReportsArchiveResponse](src/models/api-v1-reports-archive-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsArchiveResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsArchiveResponse](src/models/api-v1-reports-archive-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugComments(request: Reports.PostApiV1ReportsByIdOrSlugCommentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsCommentsResponse1, Reports.PostApiV1ReportsByIdOrSlugCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Omit `quote` for a comment about the report as a whole. Include it and the comment attaches to that passage and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version; otherwise the request is refused rather than placed on a guess.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugComments({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsCommentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Reports.PostApiV1ReportsByIdOrSlugCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .postApiV1ReportsByIdOrSlugComments({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsCommentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsCommentsRequest](src/models/api-v1-reports-comments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugComments(request)`

- **OnSuccess**: <code>[ApiV1ReportsCommentsResponse1](src/models/api-v1-reports-comments-response1.ts)</code>
- **OnError**: throws <code>[Reports.PostApiV1ReportsByIdOrSlugCommentsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsCommentsResponse1, Reports.PostApiV1ReportsByIdOrSlugCommentsError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsCommentsResponse1](src/models/api-v1-reports-comments-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugCopy(request: Reports.PostApiV1ReportsByIdOrSlugCopyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsCopyResponse, Reports.PostApiV1ReportsByIdOrSlugCopyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Duplicate a report's current version into a new report you own — the primitive behind duplicating a report and behind using one as a template. The copy carries the content, the classification and any datasets; it carries **no** audience, comments or share links, and starts private to you. Requires that you can already read the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugCopy({ idOrSlug: "some example string" });
  // TODO: Handle 'response' of type ApiV1ReportsCopyResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.PostApiV1ReportsByIdOrSlugCopyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .postApiV1ReportsByIdOrSlugCopy({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsCopyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsCopyRequest](src/models/api-v1-reports-copy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugCopy(request)`

- **OnSuccess**: <code>[ApiV1ReportsCopyResponse](src/models/api-v1-reports-copy-response.ts)</code>
- **OnError**: throws <code>[Reports.PostApiV1ReportsByIdOrSlugCopyError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugCopy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsCopyResponse, Reports.PostApiV1ReportsByIdOrSlugCopyError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsCopyResponse](src/models/api-v1-reports-copy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugRevisionBriefs(request: Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsRevisionBriefsResponse, Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in the current version, the conversation, and signed links to the images readers attached, ending with how to publish the next version and close each thread. Composing a brief is recorded on the report. Pass `threadIds` to include only some open threads.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugRevisionBriefs({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsRevisionBriefsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .postApiV1ReportsByIdOrSlugRevisionBriefs({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsRevisionBriefsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsRevisionBriefsRequest](src/models/api-v1-reports-revision-briefs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugRevisionBriefs(request)`

- **OnSuccess**: <code>[ApiV1ReportsRevisionBriefsResponse](src/models/api-v1-reports-revision-briefs-response.ts)</code>
- **OnError**: throws <code>[Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugRevisionBriefs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsRevisionBriefsResponse, Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsRevisionBriefsResponse](src/models/api-v1-reports-revision-briefs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugRollback(request: Reports.PostApiV1ReportsByIdOrSlugRollbackRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsRollbackResponse, Reports.PostApiV1ReportsByIdOrSlugRollbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serve an earlier version again at the same URL. Name it by number — the `currentVersion` and `latestVersion` every other endpoint returns — or by `versionId` from the versions list. Nothing is deleted: roll forward the same way.

Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugRollback({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsRollbackResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.PostApiV1ReportsByIdOrSlugRollbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .postApiV1ReportsByIdOrSlugRollback({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsRollbackResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsRollbackRequest](src/models/api-v1-reports-rollback-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugRollback(request)`

- **OnSuccess**: <code>[ApiV1ReportsRollbackResponse](src/models/api-v1-reports-rollback-response.ts)</code>
- **OnError**: throws <code>[Reports.PostApiV1ReportsByIdOrSlugRollbackError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugRollback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsRollbackResponse, Reports.PostApiV1ReportsByIdOrSlugRollbackError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsRollbackResponse](src/models/api-v1-reports-rollback-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugSend(request: Reports.PostApiV1ReportsByIdOrSlugSendRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsSendResponse, Reports.PostApiV1ReportsByIdOrSlugSendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Distinct from `POST …/share`, which grants access to people the organisation already knows. This takes bare email addresses, creates the guest records behind them, grants access and emails each recipient a link with the sender's covering note.

**Not a mailing list.** Each recipient gets their own link tied to their own guest record, which is what makes the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps working as the report is updated, so there is no new file to send next time.

Governed by everything a share is, because it grants through the same function: the `share_external` publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own allow-list, the expiry clamp, the audit trail and the `report.shared` webhook. A recipient who already had access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugSend({ idOrSlug: "some example string" });
  // TODO: Handle 'response' of type ApiV1ReportsSendResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.PostApiV1ReportsByIdOrSlugSendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .postApiV1ReportsByIdOrSlugSend({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsSendResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsSendRequest](src/models/api-v1-reports-send-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugSend(request)`

- **OnSuccess**: <code>[ApiV1ReportsSendResponse](src/models/api-v1-reports-send-response.ts)</code>
- **OnError**: throws <code>[Reports.PostApiV1ReportsByIdOrSlugSendError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugSend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsSendResponse, Reports.PostApiV1ReportsByIdOrSlugSendError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsSendResponse](src/models/api-v1-reports-send-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugShare(request: Reports.PostApiV1ReportsByIdOrSlugShareRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsShareResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`capability` is what the audience may do: `view` (the default) or `comment`. A grant that already exists is only ever raised, never lowered, by granting again.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugShare({ idOrSlug: "some example string" });
  // TODO: Handle 'response' of type ApiV1ReportsShareResponse
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
const result = await client.reports
  .postApiV1ReportsByIdOrSlugShare({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsShareResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsShareRequest](src/models/api-v1-reports-share-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugShare(request)`

- **OnSuccess**: <code>[ApiV1ReportsShareResponse](src/models/api-v1-reports-share-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsShareResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsShareResponse](src/models/api-v1-reports-share-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReportsByIdOrSlugVersions(request: Reports.PostApiV1ReportsByIdOrSlugVersionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsVersionsResponse, Reports.PostApiV1ReportsByIdOrSlugVersionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.postApiV1ReportsByIdOrSlugVersions({
    idOrSlug: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.PostApiV1ReportsByIdOrSlugVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .postApiV1ReportsByIdOrSlugVersions({ idOrSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsVersionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ReportsVersionsRequest](src/models/api-v1-reports-versions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.postApiV1ReportsByIdOrSlugVersions(request)`

- **OnSuccess**: <code>[ApiV1ReportsVersionsResponse](src/models/api-v1-reports-versions-response.ts)</code>
- **OnError**: throws <code>[Reports.PostApiV1ReportsByIdOrSlugVersionsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.postApiV1ReportsByIdOrSlugVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsVersionsResponse, Reports.PostApiV1ReportsByIdOrSlugVersionsError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsVersionsResponse](src/models/api-v1-reports-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putApiV1ReportsByIdOrSlugDataByName(request: Reports.PutApiV1ReportsByIdOrSlugDataByNameRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportsDataResponse1, Reports.PutApiV1ReportsByIdOrSlugDataByNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Data the published report fetches at view time, so a dashboard can show current numbers without republishing. The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never edge-cached.

**A dataset is mutable and a version is not.** Rolling the report back does not roll the data back — the earlier markup renders today's numbers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.putApiV1ReportsByIdOrSlugDataByName({
    idOrSlug: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ReportsDataResponse1
} catch (err) {
  // TODO: Handle 'err' of type Reports.PutApiV1ReportsByIdOrSlugDataByNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .putApiV1ReportsByIdOrSlugDataByName({ idOrSlug: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportsDataResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idOrSlug</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.putApiV1ReportsByIdOrSlugDataByName(request)`

- **OnSuccess**: <code>[ApiV1ReportsDataResponse1](src/models/api-v1-reports-data-response1.ts)</code>
- **OnError**: throws <code>[Reports.PutApiV1ReportsByIdOrSlugDataByNameError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.putApiV1ReportsByIdOrSlugDataByName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportsDataResponse1, Reports.PutApiV1ReportsByIdOrSlugDataByNameError&gt;</code>, with `result.value` of type <code>[ApiV1ReportsDataResponse1](src/models/api-v1-reports-data-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reviews

> Source: [Reviews](src/resources/reviews.ts)

<details>
<summary><code>getApiV1Reviews(request?: Reviews.GetApiV1ReviewsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReviewsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.getApiV1Reviews();
  // TODO: Handle 'response' of type ApiV1ReviewsResponse1
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
const result = await client.reviews.getApiV1Reviews().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReviewsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |
| <code>status?</code> | <code>[StatusDeliverdDevReviewsApi](src/models/status-deliverd-dev-reviews-api.ts)</code> | - |
| <code>externalId?</code> | <code>string</code> | - |
| <code>reportId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.getApiV1Reviews(request)`

- **OnSuccess**: <code>[ApiV1ReviewsResponse1](src/models/api-v1-reviews-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reviews.getApiV1Reviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReviewsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1ReviewsResponse1](src/models/api-v1-reviews-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ReviewsById(request: Reviews.GetApiV1ReviewsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReviewsResponse, Reviews.GetApiV1ReviewsByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.getApiV1ReviewsById({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1ReviewsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reviews.GetApiV1ReviewsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews
  .getApiV1ReviewsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReviewsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.getApiV1ReviewsById(request)`

- **OnSuccess**: <code>[ApiV1ReviewsResponse](src/models/api-v1-reviews-response.ts)</code>
- **OnError**: throws <code>[Reviews.GetApiV1ReviewsByIdError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.getApiV1ReviewsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReviewsResponse, Reviews.GetApiV1ReviewsByIdError&gt;</code>, with `result.value` of type <code>[ApiV1ReviewsResponse](src/models/api-v1-reviews-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Reviews(request?: Reviews.PostApiV1ReviewsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReviewsResponse, Reviews.PostApiV1ReviewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a review and returns its page. The verdict is a person's: read it by polling GET /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by email or id and must be active members or guests who can already open the report; anyone else is refused. The requester cannot review their own request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.postApiV1Reviews();
  // TODO: Handle 'response' of type ApiV1ReviewsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reviews.PostApiV1ReviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews.postApiV1Reviews().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReviewsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1ReviewsRequest](src/models/api-v1-reviews-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.postApiV1Reviews(request)`

- **OnSuccess**: <code>[ApiV1ReviewsResponse](src/models/api-v1-reviews-response.ts)</code>
- **OnError**: throws <code>[Reviews.PostApiV1ReviewsError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.postApiV1Reviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReviewsResponse, Reviews.PostApiV1ReviewsError&gt;</code>, with `result.value` of type <code>[ApiV1ReviewsResponse](src/models/api-v1-reviews-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1ReviewsByIdCancel(request: Reviews.PostApiV1ReviewsByIdCancelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReviewsCancelResponse, Reviews.PostApiV1ReviewsByIdCancelError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.postApiV1ReviewsByIdCancel({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1ReviewsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Reviews.PostApiV1ReviewsByIdCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews
  .postApiV1ReviewsByIdCancel({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReviewsCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.postApiV1ReviewsByIdCancel(request)`

- **OnSuccess**: <code>[ApiV1ReviewsCancelResponse](src/models/api-v1-reviews-cancel-response.ts)</code>
- **OnError**: throws <code>[Reviews.PostApiV1ReviewsByIdCancelError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.postApiV1ReviewsByIdCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReviewsCancelResponse, Reviews.PostApiV1ReviewsByIdCancelError&gt;</code>, with `result.value` of type <code>[ApiV1ReviewsCancelResponse](src/models/api-v1-reviews-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RiskIndicators

> Source: [RiskIndicators](src/resources/risk-indicators.ts)

<details>
<summary><code>getApiV1RiskIndicators(request?: RiskIndicators.GetApiV1RiskIndicatorsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, RiskIndicators.GetApiV1RiskIndicatorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each indicator the appetite turns on: its figure for the month against the limits it was judged by (`green`, `amber`, `red` or `not_measurable`), the two months before, the trend, where a measured indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskIndicators.getApiV1RiskIndicators();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type RiskIndicators.GetApiV1RiskIndicatorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskIndicators.getApiV1RiskIndicators().asApiResult();
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
| <code>period?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskIndicators.getApiV1RiskIndicators(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[RiskIndicators.GetApiV1RiskIndicatorsError](src/resources/risk-indicators.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskIndicators.getApiV1RiskIndicators(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, RiskIndicators.GetApiV1RiskIndicatorsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1RiskIndicatorsByKeyReadings(request: RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime, training. Give `value`, or `numerator` and `denominator` for a ratio, and `evidence` saying where it comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting one is a person's, in the app, with a reason. 409 when a figure already stands.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskIndicators.postApiV1RiskIndicatorsByKeyReadings({
    key: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskIndicators
  .postApiV1RiskIndicatorsByKeyReadings({ key: "some example string" })
  .asApiResult();
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
| <code>key</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1RiskIndicatorsReadingsRequest](src/models/api-v1-risk-indicators-readings-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskIndicators.postApiV1RiskIndicatorsByKeyReadings(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError](src/resources/risk-indicators.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskIndicators.postApiV1RiskIndicatorsByKeyReadings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Schedules

> Source: [Schedules](src/resources/schedules.ts)

<details>
<summary><code>deleteApiV1SchedulesById(request: Schedules.DeleteApiV1SchedulesByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Schedules.DeleteApiV1SchedulesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The report and its versions are untouched. Use `PATCH` with `{"enabled": false}` to pause one instead, which keeps the record that it existed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.schedules.deleteApiV1SchedulesById({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Schedules.DeleteApiV1SchedulesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schedules.deleteApiV1SchedulesById({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schedules.deleteApiV1SchedulesById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Schedules.DeleteApiV1SchedulesByIdError](src/resources/schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schedules.deleteApiV1SchedulesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Schedules.DeleteApiV1SchedulesByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1Schedules(request?: Schedules.GetApiV1SchedulesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SchedulesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An agent key sees only its own schedules. `due=1` narrows to the ones waiting on a publish: a schedule is due once it has fired and the report has had no new version since, and publishing clears it — there is nothing to acknowledge.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schedules.getApiV1Schedules();
  // TODO: Handle 'response' of type ApiV1SchedulesResponse
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
const result = await client.schedules.getApiV1Schedules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SchedulesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>due?</code> | <code>[Due](src/models/due.ts)</code> | Return only schedules waiting on a publish |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schedules.getApiV1Schedules(request)`

- **OnSuccess**: <code>[ApiV1SchedulesResponse](src/models/api-v1-schedules-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.schedules.getApiV1Schedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SchedulesResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1SchedulesResponse](src/models/api-v1-schedules-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1SchedulesById(request: Schedules.PatchApiV1SchedulesByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SchedulesResponse1, Schedules.PatchApiV1SchedulesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month carries a next run a month in the past.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schedules.patchApiV1SchedulesById({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1SchedulesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Schedules.PatchApiV1SchedulesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schedules.patchApiV1SchedulesById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SchedulesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1SchedulesRequest1](src/models/api-v1-schedules-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schedules.patchApiV1SchedulesById(request)`

- **OnSuccess**: <code>[ApiV1SchedulesResponse1](src/models/api-v1-schedules-response1.ts)</code>
- **OnError**: throws <code>[Schedules.PatchApiV1SchedulesByIdError](src/resources/schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schedules.patchApiV1SchedulesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SchedulesResponse1, Schedules.PatchApiV1SchedulesByIdError&gt;</code>, with `result.value` of type <code>[ApiV1SchedulesResponse1](src/models/api-v1-schedules-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Schedules(request?: Schedules.PostApiV1SchedulesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SchedulesResponse1, Schedules.PostApiV1SchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`recurrence` is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — `0 0 30 2 *` is five well-formed fields and a date that never arrives, and is refused rather than stored.

An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a person's decision. The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the report's audience either way. Nothing publishes by itself: the agent polls `GET /schedules?due=1` and does the work.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schedules.postApiV1Schedules();
  // TODO: Handle 'response' of type ApiV1SchedulesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Schedules.PostApiV1SchedulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schedules.postApiV1Schedules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SchedulesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1SchedulesRequest](src/models/api-v1-schedules-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schedules.postApiV1Schedules(request)`

- **OnSuccess**: <code>[ApiV1SchedulesResponse1](src/models/api-v1-schedules-response1.ts)</code>
- **OnError**: throws <code>[Schedules.PostApiV1SchedulesError](src/resources/schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schedules.postApiV1Schedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SchedulesResponse1, Schedules.PostApiV1SchedulesError&gt;</code>, with `result.value` of type <code>[ApiV1SchedulesResponse1](src/models/api-v1-schedules-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Screen

> Source: [Screen](src/resources/screen.ts)

<details>
<summary><code>postApiV1Screen(request?: Screen.PostApiV1ScreenRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ScreenResponse, Screen.PostApiV1ScreenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category data and the organisation's own terms, and decides against what the AI register approves the model (`aiSystemId`) to receive: `allow`, `redact` (send `redactedText`), `ask` (a person decides through the approval in `approval`; send the original only once it is approved) or `deny`. Send `text`, screened in memory and never stored, or `counts`, what the SDK found on the caller's machine, so the text never leaves it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only (`mode: report_only`): it runs and is audited, `verdict` is always `allow`, and `wouldBe` says what a paid plan would have done. A net, not a guarantee: names are not reliably found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screen.postApiV1Screen();
  // TODO: Handle 'response' of type ApiV1ScreenResponse
} catch (err) {
  // TODO: Handle 'err' of type Screen.PostApiV1ScreenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screen.postApiV1Screen().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ScreenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1ScreenRequest](src/models/api-v1-screen-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screen.postApiV1Screen(request)`

- **OnSuccess**: <code>[ApiV1ScreenResponse](src/models/api-v1-screen-response.ts)</code>
- **OnError**: throws <code>[Screen.PostApiV1ScreenError](src/resources/screen.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screen.postApiV1Screen(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ScreenResponse, Screen.PostApiV1ScreenError&gt;</code>, with `result.value` of type <code>[ApiV1ScreenResponse](src/models/api-v1-screen-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>getApiV1Tasks(request?: Tasks.GetApiV1TasksRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Most recently active first. Side tasks are reached through the objective they belong to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1Tasks();
  // TODO: Handle 'response' of type ApiV1TasksResponse2
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
const result = await client.tasks.getApiV1Tasks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |
| <code>status?</code> | <code>[Status2DeliverdDevTasksApi](src/models/status2-deliverd-dev-tasks-api.ts)</code> | - |
| <code>externalId?</code> | <code>string</code> | - |
| <code>q?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1Tasks(request)`

- **OnSuccess**: <code>[ApiV1TasksResponse2](src/models/api-v1-tasks-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.getApiV1Tasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksResponse2, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1TasksResponse2](src/models/api-v1-tasks-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1TasksById(request: Tasks.GetApiV1TasksByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksResponse, Tasks.GetApiV1TasksByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1TasksById({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1TasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetApiV1TasksByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getApiV1TasksById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1TasksById(request)`

- **OnSuccess**: <code>[ApiV1TasksResponse](src/models/api-v1-tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetApiV1TasksByIdError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getApiV1TasksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksResponse, Tasks.GetApiV1TasksByIdError&gt;</code>, with `result.value` of type <code>[ApiV1TasksResponse](src/models/api-v1-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1TasksByIdContext(request: Tasks.GetApiV1TasksByIdContextRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The objective, where the task stands, confirmed and suggested decisions, open questions, constraints, side-task results, the next action, the reports published for the task (`reports`: up to ten live ones, newest first, each `{ id, title, url, version, publishedAt }`), and a paragraph to re-anchor on.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1TasksByIdContext({
    id: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.tasks
  .getApiV1TasksByIdContext({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1TasksByIdContext(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.getApiV1TasksByIdContext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1TasksByIdContextGiven(request: Tasks.GetApiV1TasksByIdContextGivenRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who confirmed each entry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1TasksByIdContextGiven({
    id: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.tasks
  .getApiV1TasksByIdContextGiven({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1TasksByIdContextGiven(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.getApiV1TasksByIdContextGiven(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1TasksByIdGovernance(request: Tasks.GetApiV1TasksByIdGovernanceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.GetApiV1TasksByIdGovernanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate answer. A side task's id answers for its objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1TasksByIdGovernance({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetApiV1TasksByIdGovernanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getApiV1TasksByIdGovernance({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1TasksByIdGovernance(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.GetApiV1TasksByIdGovernanceError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getApiV1TasksByIdGovernance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.GetApiV1TasksByIdGovernanceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1TasksByIdGovernanceGate(request: Tasks.GetApiV1TasksByIdGovernanceGateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksGovernanceGateResponse, Tasks.GetApiV1TasksByIdGovernanceGateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`allowed`, `reason`, `missingControls` and `blockers` — an open reassessment, an overdue review or a high or critical incident, which only a person clears. With `?action=` (Enterprise) it also asks agent authority: `authority.mode` is allowed, approval or denied. Every check is recorded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1TasksByIdGovernanceGate({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1TasksGovernanceGateResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetApiV1TasksByIdGovernanceGateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getApiV1TasksByIdGovernanceGate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksGovernanceGateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>action?</code> | <code>[ActionDeliverdDevGovernanceApi](src/models/action-deliverd-dev-governance-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1TasksByIdGovernanceGate(request)`

- **OnSuccess**: <code>[ApiV1TasksGovernanceGateResponse](src/models/api-v1-tasks-governance-gate-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetApiV1TasksByIdGovernanceGateError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getApiV1TasksByIdGovernanceGate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksGovernanceGateResponse, Tasks.GetApiV1TasksByIdGovernanceGateError&gt;</code>, with `result.value` of type <code>[ApiV1TasksGovernanceGateResponse](src/models/api-v1-tasks-governance-gate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1TasksByIdGovernancePack(request: Tasks.GetApiV1TasksByIdGovernancePackRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a sha256 digest. `?format=html` to read and print. It assists audit; it does not certify compliance with any law. Every export is audited.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1TasksByIdGovernancePack({
    id: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.tasks
  .getApiV1TasksByIdGovernancePack({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1TasksByIdGovernancePack(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.getApiV1TasksByIdGovernancePack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1TasksByIdGraph(request: Tasks.GetApiV1TasksByIdGraphRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksGraphResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getApiV1TasksByIdGraph({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1TasksGraphResponse
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
const result = await client.tasks
  .getApiV1TasksByIdGraph({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksGraphResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getApiV1TasksByIdGraph(request)`

- **OnSuccess**: <code>[ApiV1TasksGraphResponse](src/models/api-v1-tasks-graph-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.getApiV1TasksByIdGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksGraphResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1TasksGraphResponse](src/models/api-v1-tasks-graph-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1TasksById(request: Tasks.PatchApiV1TasksByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksResponse, Tasks.PatchApiV1TasksByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a person changes what the work is for.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.patchApiV1TasksById({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type ApiV1TasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PatchApiV1TasksByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .patchApiV1TasksById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksRequest1](src/models/api-v1-tasks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.patchApiV1TasksById(request)`

- **OnSuccess**: <code>[ApiV1TasksResponse](src/models/api-v1-tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.PatchApiV1TasksByIdError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.patchApiV1TasksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksResponse, Tasks.PatchApiV1TasksByIdError&gt;</code>, with `result.value` of type <code>[ApiV1TasksResponse](src/models/api-v1-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1TasksByIdGovernance(request: Tasks.PatchApiV1TasksByIdGovernanceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PatchApiV1TasksByIdGovernanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight or clears a fact (403 not_permitted).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.patchApiV1TasksByIdGovernance({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PatchApiV1TasksByIdGovernanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .patchApiV1TasksByIdGovernance({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksGovernanceRequest1](src/models/api-v1-tasks-governance-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.patchApiV1TasksByIdGovernance(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PatchApiV1TasksByIdGovernanceError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.patchApiV1TasksByIdGovernance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PatchApiV1TasksByIdGovernanceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1Tasks(request?: Tasks.PostApiV1TasksRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What the work is ultimately for, kept apart from the conversation and returned at the top of every context. With externalId, an open objective the caller already started under it is returned instead (resumed: true, status 200).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1Tasks();
  // TODO: Handle 'response' of type ApiV1TasksResponse
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
const result = await client.tasks.postApiV1Tasks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1TasksRequest](src/models/api-v1-tasks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1Tasks(request)`

- **OnSuccess**: <code>[ApiV1TasksResponse](src/models/api-v1-tasks-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.postApiV1Tasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1TasksResponse](src/models/api-v1-tasks-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdApply(request: Tasks.PostApiV1TasksByIdApplyRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdApplyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a summary, merges open questions and takes the next action. Answers with the parent's context and a message that returns to the objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdApply({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdApplyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdApply({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksApplyRequest](src/models/api-v1-tasks-apply-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdApply(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdApplyError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdApply(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdApplyError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdCancel(request: Tasks.PostApiV1TasksByIdCancelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksCancelResponse, Tasks.PostApiV1TasksByIdCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancelling an objective cancels the side tasks still open under it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdCancel({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1TasksCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdCancel({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksCancelRequest](src/models/api-v1-tasks-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdCancel(request)`

- **OnSuccess**: <code>[ApiV1TasksCancelResponse](src/models/api-v1-tasks-cancel-response.ts)</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdCancelError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksCancelResponse, Tasks.PostApiV1TasksByIdCancelError&gt;</code>, with `result.value` of type <code>[ApiV1TasksCancelResponse](src/models/api-v1-tasks-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdComplete(request: Tasks.PostApiV1TasksByIdCompleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksCompleteResponse, Tasks.PostApiV1TasksByIdCompleteError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdComplete({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1TasksCompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdComplete({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksCompleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksCompleteRequest](src/models/api-v1-tasks-complete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdComplete(request)`

- **OnSuccess**: <code>[ApiV1TasksCompleteResponse](src/models/api-v1-tasks-complete-response.ts)</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdCompleteError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksCompleteResponse, Tasks.PostApiV1TasksByIdCompleteError&gt;</code>, with `result.value` of type <code>[ApiV1TasksCompleteResponse](src/models/api-v1-tasks-complete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdFindings(request: Tasks.PostApiV1TasksByIdFindingsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A decision is stored as a suggestion until a person confirms it or an approval decides it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdFindings({
    id: "00000000-0000-0000-0000-000000000000",
  });
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
const result = await client.tasks
  .postApiV1TasksByIdFindings({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksFindingsRequest](src/models/api-v1-tasks-findings-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdFindings(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.postApiV1TasksByIdFindings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdFindingsByFindingIdApproval(request: Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdFindingsByFindingIdApproval({
    id: "00000000-0000-0000-0000-000000000000",
    findingId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdFindingsByFindingIdApproval({
    id: "00000000-0000-0000-0000-000000000000",
    findingId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>findingId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksFindingsApprovalRequest](src/models/api-v1-tasks-findings-approval-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdFindingsByFindingIdApproval(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdFindingsByFindingIdApproval(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdFindingsByFindingIdKnowledge(request: Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdFindingsByFindingIdKnowledge({
    id: "00000000-0000-0000-0000-000000000000",
    findingId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdFindingsByFindingIdKnowledge({
    id: "00000000-0000-0000-0000-000000000000",
    findingId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>findingId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksFindingsKnowledgeRequest](src/models/api-v1-tasks-findings-knowledge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdFindingsByFindingIdKnowledge(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdFindingsByFindingIdKnowledge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdGovernance(request: Tasks.PostApiV1TasksByIdGovernanceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put an objective under Compliance Mode with what is known of its profile. Idempotent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdGovernance({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdGovernanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdGovernance({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksGovernanceRequest](src/models/api-v1-tasks-governance-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdGovernance(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdGovernanceError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdGovernance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdGovernanceControlsByKeyApproval(request: Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An ordinary approval through the organisation's approval process. The control is satisfied when it is approved. Needs approvals:write.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdGovernanceControlsByKeyApproval({
    id: "00000000-0000-0000-0000-000000000000",
    key: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdGovernanceControlsByKeyApproval({
    id: "00000000-0000-0000-0000-000000000000",
    key: "some example string",
  })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksGovernanceControlsApprovalRequest](src/models/api-v1-tasks-governance-controls-approval-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdGovernanceControlsByKeyApproval(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdGovernanceControlsByKeyApproval(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdGovernanceEvidence(request: Tasks.PostApiV1TasksByIdGovernanceEvidenceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceEvidenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by evidence. Scored evidence carries `results` (what was measured), a tool's own `report` (promptfoo, Inspect, garak, Weave, Braintrust, JUnit and more), turned into results here, or a `pull` from the organisation's connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with keys the caller never holds. `release` names the release the results tested — `provider`, `model`, `modelVersion`, `promptHash`, `guardrailsHash`, digests never the text — and is kept on the run: evidence naming another release than the AI system now runs does not count, and says so (`otherRelease`); evidence naming none counts as before. A control with thresholds is met only when its newest scored evidence of this release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409 `connection_refused` when the tool refuses the stored key, and 502 `upstream_unavailable` when it cannot be read.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdGovernanceEvidence({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdGovernanceEvidenceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdGovernanceEvidence({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksGovernanceEvidenceRequest](src/models/api-v1-tasks-governance-evidence-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdGovernanceEvidence(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdGovernanceEvidenceError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdGovernanceEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceEvidenceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdGovernanceReassessments(request: Tasks.PostApiV1TasksByIdGovernanceReassessmentsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceReassessmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdGovernanceReassessments({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdGovernanceReassessmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdGovernanceReassessments({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksGovernanceReassessmentsRequest](src/models/api-v1-tasks-governance-reassessments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdGovernanceReassessments(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdGovernanceReassessmentsError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdGovernanceReassessments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tasks.PostApiV1TasksByIdGovernanceReassessmentsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdLinks(request: Tasks.PostApiV1TasksByIdLinksRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdLinks({ id: "00000000-0000-0000-0000-000000000000" });
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
const result = await client.tasks
  .postApiV1TasksByIdLinks({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksLinksRequest](src/models/api-v1-tasks-links-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdLinks(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.postApiV1TasksByIdLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdReopen(request: Tasks.PostApiV1TasksByIdReopenRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksReopenResponse, Tasks.PostApiV1TasksByIdReopenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The earlier result is kept in previousResults.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdReopen({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1TasksReopenResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdReopenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdReopen({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksReopenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdReopen(request)`

- **OnSuccess**: <code>[ApiV1TasksReopenResponse](src/models/api-v1-tasks-reopen-response.ts)</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdReopenError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdReopen(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksReopenResponse, Tasks.PostApiV1TasksByIdReopenError&gt;</code>, with `result.value` of type <code>[ApiV1TasksReopenResponse](src/models/api-v1-tasks-reopen-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1TasksByIdSideTasks(request: Tasks.PostApiV1TasksByIdSideTasksRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TasksSideTasksResponse, Tasks.PostApiV1TasksByIdSideTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It begins with a snapshot of the parent: objective, state, decisions and constraints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postApiV1TasksByIdSideTasks({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1TasksSideTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.PostApiV1TasksByIdSideTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .postApiV1TasksByIdSideTasks({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TasksSideTasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TasksSideTasksRequest](src/models/api-v1-tasks-side-tasks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postApiV1TasksByIdSideTasks(request)`

- **OnSuccess**: <code>[ApiV1TasksSideTasksResponse](src/models/api-v1-tasks-side-tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.PostApiV1TasksByIdSideTasksError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.postApiV1TasksByIdSideTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TasksSideTasksResponse, Tasks.PostApiV1TasksByIdSideTasksError&gt;</code>, with `result.value` of type <code>[ApiV1TasksSideTasksResponse](src/models/api-v1-tasks-side-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/resources/templates.ts)

<details>
<summary><code>getApiV1Templates(options?: RequestOptions): ApiPromise&lt;ApiV1TemplatesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.getApiV1Templates();
  // TODO: Handle 'response' of type ApiV1TemplatesResponse
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
const result = await client.templates.getApiV1Templates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TemplatesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.getApiV1Templates()`

- **OnSuccess**: <code>[ApiV1TemplatesResponse](src/models/api-v1-templates-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.templates.getApiV1Templates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TemplatesResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1TemplatesResponse](src/models/api-v1-templates-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Uploads

> Source: [Uploads](src/resources/uploads.ts)

<details>
<summary><code>postApiV1Uploads(options?: RequestOptions): ApiPromise&lt;ApiV1UploadsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.postApiV1Uploads();
  // TODO: Handle 'response' of type ApiV1UploadsResponse
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
const result = await client.uploads.postApiV1Uploads().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.postApiV1Uploads()`

- **OnSuccess**: <code>[ApiV1UploadsResponse](src/models/api-v1-uploads-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.postApiV1Uploads().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadsResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1UploadsResponse](src/models/api-v1-uploads-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookEndpoints

> Source: [WebhookEndpoints](src/resources/webhook-endpoints.ts)

<details>
<summary><code>deleteApiV1WebhookEndpointsById(request: WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Its delivery log goes with it. `PATCH` with `{"enabled": false}` stops deliveries and keeps both.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookEndpoints.deleteApiV1WebhookEndpointsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookEndpoints
  .deleteApiV1WebhookEndpointsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | The endpoint |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookEndpoints.deleteApiV1WebhookEndpointsById(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError](src/resources/webhook-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookEndpoints.deleteApiV1WebhookEndpointsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1WebhookEndpoints(request?: WebhookEndpoints.GetApiV1WebhookEndpointsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WebhookEndpointsResponse, WebhookEndpoints.GetApiV1WebhookEndpointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookEndpoints.getApiV1WebhookEndpoints();
  // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse
} catch (err) {
  // TODO: Handle 'err' of type WebhookEndpoints.GetApiV1WebhookEndpointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookEndpoints.getApiV1WebhookEndpoints().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WebhookEndpointsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Rows per page. Above the maximum you get the maximum, not an error. |
| <code>cursor?</code> | <code>string</code> | nextCursor from a previous response. One we did not issue is refused. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookEndpoints.getApiV1WebhookEndpoints(request)`

- **OnSuccess**: <code>[ApiV1WebhookEndpointsResponse](src/models/api-v1-webhook-endpoints-response.ts)</code>
- **OnError**: throws <code>[WebhookEndpoints.GetApiV1WebhookEndpointsError](src/resources/webhook-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookEndpoints.getApiV1WebhookEndpoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WebhookEndpointsResponse, WebhookEndpoints.GetApiV1WebhookEndpointsError&gt;</code>, with `result.value` of type <code>[ApiV1WebhookEndpointsResponse](src/models/api-v1-webhook-endpoints-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1WebhookEndpointsById(request: WebhookEndpoints.GetApiV1WebhookEndpointsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WebhookEndpointsResponse2, WebhookEndpoints.GetApiV1WebhookEndpointsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With its delivery health. Never its signing secret.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookEndpoints.getApiV1WebhookEndpointsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
} catch (err) {
  // TODO: Handle 'err' of type WebhookEndpoints.GetApiV1WebhookEndpointsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookEndpoints
  .getApiV1WebhookEndpointsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WebhookEndpointsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The endpoint |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookEndpoints.getApiV1WebhookEndpointsById(request)`

- **OnSuccess**: <code>[ApiV1WebhookEndpointsResponse2](src/models/api-v1-webhook-endpoints-response2.ts)</code>
- **OnError**: throws <code>[WebhookEndpoints.GetApiV1WebhookEndpointsByIdError](src/resources/webhook-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookEndpoints.getApiV1WebhookEndpointsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WebhookEndpointsResponse2, WebhookEndpoints.GetApiV1WebhookEndpointsByIdError&gt;</code>, with `result.value` of type <code>[ApiV1WebhookEndpointsResponse2](src/models/api-v1-webhook-endpoints-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchApiV1WebhookEndpointsById(request: WebhookEndpoints.PatchApiV1WebhookEndpointsByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WebhookEndpointsResponse2, WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it again for a new one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookEndpoints.patchApiV1WebhookEndpointsById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
} catch (err) {
  // TODO: Handle 'err' of type WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookEndpoints
  .patchApiV1WebhookEndpointsById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WebhookEndpointsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The endpoint |
| <code>body?</code> | <code>[ApiV1WebhookEndpointsRequest1](src/models/api-v1-webhook-endpoints-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookEndpoints.patchApiV1WebhookEndpointsById(request)`

- **OnSuccess**: <code>[ApiV1WebhookEndpointsResponse2](src/models/api-v1-webhook-endpoints-response2.ts)</code>
- **OnError**: throws <code>[WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError](src/resources/webhook-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookEndpoints.patchApiV1WebhookEndpointsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WebhookEndpointsResponse2, WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError&gt;</code>, with `result.value` of type <code>[ApiV1WebhookEndpointsResponse2](src/models/api-v1-webhook-endpoints-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1WebhookEndpoints(request?: WebhookEndpoints.PostApiV1WebhookEndpointsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WebhookEndpointsResponse1, WebhookEndpoints.PostApiV1WebhookEndpointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every event the endpoint subscribes to then arrives as a signed POST. `events` empty or absent means every event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named.

The response carries **`secret`, on this response only**. No other call returns it and it cannot be retrieved afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same `Idempotency-Key` gets this same response back.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookEndpoints.postApiV1WebhookEndpoints();
  // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse1
} catch (err) {
  // TODO: Handle 'err' of type WebhookEndpoints.PostApiV1WebhookEndpointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookEndpoints.postApiV1WebhookEndpoints().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WebhookEndpointsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1WebhookEndpointsRequest](src/models/api-v1-webhook-endpoints-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookEndpoints.postApiV1WebhookEndpoints(request)`

- **OnSuccess**: <code>[ApiV1WebhookEndpointsResponse1](src/models/api-v1-webhook-endpoints-response1.ts)</code>
- **OnError**: throws <code>[WebhookEndpoints.PostApiV1WebhookEndpointsError](src/resources/webhook-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookEndpoints.postApiV1WebhookEndpoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WebhookEndpointsResponse1, WebhookEndpoints.PostApiV1WebhookEndpointsError&gt;</code>, with `result.value` of type <code>[ApiV1WebhookEndpointsResponse1](src/models/api-v1-webhook-endpoints-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApiV1WebhookEndpointsByIdTest(request: WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WebhookEndpointsTestResponse, WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Posts the event now, with the same signature and headers as a real delivery, `"test": true` beside `event` and obviously fake ids in `data`. One shot: never retried, and never counted toward the failures that switch an endpoint off. `delivered: false` is an answer about the endpoint, not a failure of this call. The body is optional.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookEndpoints.postApiV1WebhookEndpointsByIdTest({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ApiV1WebhookEndpointsTestResponse
} catch (err) {
  // TODO: Handle 'err' of type WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookEndpoints
  .postApiV1WebhookEndpointsByIdTest({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WebhookEndpointsTestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The endpoint |
| <code>body?</code> | <code>[ApiV1WebhookEndpointsTestRequest](src/models/api-v1-webhook-endpoints-test-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookEndpoints.postApiV1WebhookEndpointsByIdTest(request)`

- **OnSuccess**: <code>[ApiV1WebhookEndpointsTestResponse](src/models/api-v1-webhook-endpoints-test-response.ts)</code>
- **OnError**: throws <code>[WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError](src/resources/webhook-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookEndpoints.postApiV1WebhookEndpointsByIdTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WebhookEndpointsTestResponse, WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError&gt;</code>, with `result.value` of type <code>[ApiV1WebhookEndpointsTestResponse](src/models/api-v1-webhook-endpoints-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/resources/workspaces.ts)

<details>
<summary><code>getApiV1Workspaces(options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.workspaces.getApiV1Workspaces();
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
const result = await client.workspaces.getApiV1Workspaces().asApiResult();
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

**Direct**: `await client.workspaces.getApiV1Workspaces()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.getApiV1Workspaces().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DeliverdError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

