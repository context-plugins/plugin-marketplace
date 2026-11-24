# Reference

> Source: [AwsXRayClient](src/client.ts)

## Creategroup

> Source: [Creategroup](src/resources/creategroup.ts)

<details>
<summary><code>createGroup(request?: Creategroup.CreateGroupRequestParams, options?: RequestOptions): ApiPromise&lt;CreateGroupResult, Creategroup.CreateGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a group resource with a name and a filter expression.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creategroup.createGroup();
  // TODO: Handle 'response' of type CreateGroupResult
} catch (err) {
  // TODO: Handle 'err' of type Creategroup.CreateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creategroup.createGroup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateGroupResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateGroupRequest](src/models/create-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creategroup.createGroup(request)`

- **OnSuccess**: <code>[CreateGroupResult](src/models/create-group-result.ts)</code>
- **OnError**: throws <code>[Creategroup.CreateGroupError](src/resources/creategroup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creategroup.createGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateGroupResult, Creategroup.CreateGroupError&gt;</code>, with `result.value` of type <code>[CreateGroupResult](src/models/create-group-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Createsamplingrule

> Source: [Createsamplingrule](src/resources/createsamplingrule.ts)

<details>
<summary><code>createSamplingRule(request?: Createsamplingrule.CreateSamplingRuleRequestParams, options?: RequestOptions): ApiPromise&lt;CreateSamplingRuleResult, Createsamplingrule.CreateSamplingRuleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createsamplingrule.createSamplingRule();
  // TODO: Handle 'response' of type CreateSamplingRuleResult
} catch (err) {
  // TODO: Handle 'err' of type Createsamplingrule.CreateSamplingRuleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createsamplingrule.createSamplingRule().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSamplingRuleResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateSamplingRuleRequest](src/models/create-sampling-rule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createsamplingrule.createSamplingRule(request)`

- **OnSuccess**: <code>[CreateSamplingRuleResult](src/models/create-sampling-rule-result.ts)</code>
- **OnError**: throws <code>[Createsamplingrule.CreateSamplingRuleError](src/resources/createsamplingrule.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createsamplingrule.createSamplingRule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSamplingRuleResult, Createsamplingrule.CreateSamplingRuleError&gt;</code>, with `result.value` of type <code>[CreateSamplingRuleResult](src/models/create-sampling-rule-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DeleteGroup

> Source: [DeleteGroup](src/resources/delete-group.ts)

<details>
<summary><code>deleteGroup(request?: DeleteGroup.DeleteGroupRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DeleteGroup.DeleteGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a group resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deleteGroup.deleteGroup();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DeleteGroup.DeleteGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteGroup.deleteGroup().asApiResult();
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
| <code>body?</code> | <code>[DeleteGroupRequest](src/models/delete-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteGroup.deleteGroup(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DeleteGroup.DeleteGroupError](src/resources/delete-group.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteGroup.deleteGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DeleteGroup.DeleteGroupError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Deleteresourcepolicy

> Source: [Deleteresourcepolicy](src/resources/deleteresourcepolicy.ts)

<details>
<summary><code>deleteResourcePolicy(request?: Deleteresourcepolicy.DeleteResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Deleteresourcepolicy.DeleteResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource policy from the target Amazon Web Services account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deleteresourcepolicy.deleteResourcePolicy();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Deleteresourcepolicy.DeleteResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteresourcepolicy.deleteResourcePolicy().asApiResult();
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
| <code>body?</code> | <code>[DeleteResourcePolicyRequest](src/models/delete-resource-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteresourcepolicy.deleteResourcePolicy(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Deleteresourcepolicy.DeleteResourcePolicyError](src/resources/deleteresourcepolicy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteresourcepolicy.deleteResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Deleteresourcepolicy.DeleteResourcePolicyError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Deletesamplingrule

> Source: [Deletesamplingrule](src/resources/deletesamplingrule.ts)

<details>
<summary><code>deleteSamplingRule(request?: Deletesamplingrule.DeleteSamplingRuleRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteSamplingRuleResult, Deletesamplingrule.DeleteSamplingRuleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sampling rule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deletesamplingrule.deleteSamplingRule();
  // TODO: Handle 'response' of type DeleteSamplingRuleResult
} catch (err) {
  // TODO: Handle 'err' of type Deletesamplingrule.DeleteSamplingRuleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deletesamplingrule.deleteSamplingRule().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteSamplingRuleResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeleteSamplingRuleRequest](src/models/delete-sampling-rule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deletesamplingrule.deleteSamplingRule(request)`

- **OnSuccess**: <code>[DeleteSamplingRuleResult](src/models/delete-sampling-rule-result.ts)</code>
- **OnError**: throws <code>[Deletesamplingrule.DeleteSamplingRuleError](src/resources/deletesamplingrule.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deletesamplingrule.deleteSamplingRule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteSamplingRuleResult, Deletesamplingrule.DeleteSamplingRuleError&gt;</code>, with `result.value` of type <code>[DeleteSamplingRuleResult](src/models/delete-sampling-rule-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EncryptionconfigApi

> Source: [EncryptionconfigApi](src/resources/encryptionconfig-api.ts)

<details>
<summary><code>getEncryptionConfig(options?: RequestOptions): ApiPromise&lt;GetEncryptionConfigResult, EncryptionconfigApi.GetEncryptionConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current encryption configuration for X-Ray data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.encryptionconfigApi.getEncryptionConfig();
  // TODO: Handle 'response' of type GetEncryptionConfigResult
} catch (err) {
  // TODO: Handle 'err' of type EncryptionconfigApi.GetEncryptionConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.encryptionconfigApi.getEncryptionConfig().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetEncryptionConfigResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.encryptionconfigApi.getEncryptionConfig()`

- **OnSuccess**: <code>[GetEncryptionConfigResult](src/models/get-encryption-config-result.ts)</code>
- **OnError**: throws <code>[EncryptionconfigApi.GetEncryptionConfigError](src/resources/encryptionconfig-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.encryptionconfigApi.getEncryptionConfig().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetEncryptionConfigResult, EncryptionconfigApi.GetEncryptionConfigError&gt;</code>, with `result.value` of type <code>[GetEncryptionConfigResult](src/models/get-encryption-config-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GetGroup

> Source: [GetGroup](src/resources/get-group.ts)

<details>
<summary><code>getGroup(request?: GetGroup.GetGroupRequestParams, options?: RequestOptions): ApiPromise&lt;GetGroupResult, GetGroup.GetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves group resource details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getGroup.getGroup();
  // TODO: Handle 'response' of type GetGroupResult
} catch (err) {
  // TODO: Handle 'err' of type GetGroup.GetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getGroup.getGroup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetGroupResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetGroupRequest](src/models/get-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getGroup.getGroup(request)`

- **OnSuccess**: <code>[GetGroupResult](src/models/get-group-result.ts)</code>
- **OnError**: throws <code>[GetGroup.GetGroupError](src/resources/get-group.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getGroup.getGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetGroupResult, GetGroup.GetGroupError&gt;</code>, with `result.value` of type <code>[GetGroupResult](src/models/get-group-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Getsamplingrules

> Source: [Getsamplingrules](src/resources/getsamplingrules.ts)

<details>
<summary><code>getSamplingRules(request?: Getsamplingrules.GetSamplingRulesRequestParams, options?: RequestOptions): ApiPromise&lt;GetSamplingRulesResult, Getsamplingrules.GetSamplingRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all sampling rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getsamplingrules.getSamplingRules();
  // TODO: Handle 'response' of type GetSamplingRulesResult
} catch (err) {
  // TODO: Handle 'err' of type Getsamplingrules.GetSamplingRulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getsamplingrules.getSamplingRules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSamplingRulesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetSamplingRulesRequest](src/models/get-sampling-rules-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getsamplingrules.getSamplingRules(request)`

- **OnSuccess**: <code>[GetSamplingRulesResult](src/models/get-sampling-rules-result.ts)</code>
- **OnError**: throws <code>[Getsamplingrules.GetSamplingRulesError](src/resources/getsamplingrules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getsamplingrules.getSamplingRules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSamplingRulesResult, Getsamplingrules.GetSamplingRulesError&gt;</code>, with `result.value` of type <code>[GetSamplingRulesResult](src/models/get-sampling-rules-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/resources/groups.ts)

<details>
<summary><code>getGroups(request?: Groups.GetGroupsRequest, options?: RequestOptions): ApiPromise&lt;GetGroupsResult, Groups.GetGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all active group details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getGroups();
  // TODO: Handle 'response' of type GetGroupsResult
} catch (err) {
  // TODO: Handle 'err' of type Groups.GetGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.getGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetGroupsResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GroupsRequest](src/models/groups-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.getGroups(request)`

- **OnSuccess**: <code>[GetGroupsResult](src/models/get-groups-result.ts)</code>
- **OnError**: throws <code>[Groups.GetGroupsError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.getGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetGroupsResult, Groups.GetGroupsError&gt;</code>, with `result.value` of type <code>[GetGroupsResult](src/models/get-groups-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsightApi

> Source: [InsightApi](src/resources/insight-api.ts)

<details>
<summary><code>getInsight(request?: InsightApi.GetInsightRequest, options?: RequestOptions): ApiPromise&lt;GetInsightResult, InsightApi.GetInsightError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.getInsight();
  // TODO: Handle 'response' of type GetInsightResult
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.GetInsightError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.getInsight().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInsightResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[InsightRequest](src/models/insight-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.getInsight(request)`

- **OnSuccess**: <code>[GetInsightResult](src/models/get-insight-result.ts)</code>
- **OnError**: throws <code>[InsightApi.GetInsightError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.getInsight(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInsightResult, InsightApi.GetInsightError&gt;</code>, with `result.value` of type <code>[GetInsightResult](src/models/get-insight-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insightevents

> Source: [Insightevents](src/resources/insightevents.ts)

<details>
<summary><code>getInsightEvents(request?: Insightevents.GetInsightEventsRequest, options?: RequestOptions): ApiPromise&lt;GetInsightEventsResult, Insightevents.GetInsightEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightevents.getInsightEvents();
  // TODO: Handle 'response' of type GetInsightEventsResult
} catch (err) {
  // TODO: Handle 'err' of type Insightevents.GetInsightEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightevents.getInsightEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInsightEventsResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[InsightEventsRequest](src/models/insight-events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightevents.getInsightEvents(request)`

- **OnSuccess**: <code>[GetInsightEventsResult](src/models/get-insight-events-result.ts)</code>
- **OnError**: throws <code>[Insightevents.GetInsightEventsError](src/resources/insightevents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightevents.getInsightEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInsightEventsResult, Insightevents.GetInsightEventsError&gt;</code>, with `result.value` of type <code>[GetInsightEventsResult](src/models/get-insight-events-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insightimpactgraph

> Source: [Insightimpactgraph](src/resources/insightimpactgraph.ts)

<details>
<summary><code>getInsightImpactGraph(request?: Insightimpactgraph.GetInsightImpactGraphRequest, options?: RequestOptions): ApiPromise&lt;GetInsightImpactGraphResult, Insightimpactgraph.GetInsightImpactGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightimpactgraph.getInsightImpactGraph();
  // TODO: Handle 'response' of type GetInsightImpactGraphResult
} catch (err) {
  // TODO: Handle 'err' of type Insightimpactgraph.GetInsightImpactGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightimpactgraph.getInsightImpactGraph().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInsightImpactGraphResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[InsightImpactGraphRequest](src/models/insight-impact-graph-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightimpactgraph.getInsightImpactGraph(request)`

- **OnSuccess**: <code>[GetInsightImpactGraphResult](src/models/get-insight-impact-graph-result.ts)</code>
- **OnError**: throws <code>[Insightimpactgraph.GetInsightImpactGraphError](src/resources/insightimpactgraph.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightimpactgraph.getInsightImpactGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInsightImpactGraphResult, Insightimpactgraph.GetInsightImpactGraphError&gt;</code>, with `result.value` of type <code>[GetInsightImpactGraphResult](src/models/get-insight-impact-graph-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insightsummaries

> Source: [Insightsummaries](src/resources/insightsummaries.ts)

<details>
<summary><code>getInsightSummaries(request?: Insightsummaries.GetInsightSummariesRequest, options?: RequestOptions): ApiPromise&lt;GetInsightSummariesResult, Insightsummaries.GetInsightSummariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the summaries of all insights in the specified group matching the provided filter values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsummaries.getInsightSummaries();
  // TODO: Handle 'response' of type GetInsightSummariesResult
} catch (err) {
  // TODO: Handle 'err' of type Insightsummaries.GetInsightSummariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsummaries.getInsightSummaries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInsightSummariesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[InsightSummariesRequest](src/models/insight-summaries-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsummaries.getInsightSummaries(request)`

- **OnSuccess**: <code>[GetInsightSummariesResult](src/models/get-insight-summaries-result.ts)</code>
- **OnError**: throws <code>[Insightsummaries.GetInsightSummariesError](src/resources/insightsummaries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsummaries.getInsightSummaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInsightSummariesResult, Insightsummaries.GetInsightSummariesError&gt;</code>, with `result.value` of type <code>[GetInsightSummariesResult](src/models/get-insight-summaries-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ListTagsForResource

> Source: [ListTagsForResource](src/resources/list-tags-for-resource.ts)

<details>
<summary><code>listTagsForResource(request?: ListTagsForResource.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise&lt;ListTagsForResourceResponse, ListTagsForResource.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listTagsForResource.listTagsForResource();
  // TODO: Handle 'response' of type ListTagsForResourceResponse
} catch (err) {
  // TODO: Handle 'err' of type ListTagsForResource.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listTagsForResource.listTagsForResource().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTagsForResourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ListTagsForResourceRequest](src/models/list-tags-for-resource-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listTagsForResource.listTagsForResource(request)`

- **OnSuccess**: <code>[ListTagsForResourceResponse](src/models/list-tags-for-resource-response.ts)</code>
- **OnError**: throws <code>[ListTagsForResource.ListTagsForResourceError](src/resources/list-tags-for-resource.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listTagsForResource.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTagsForResourceResponse, ListTagsForResource.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>[ListTagsForResourceResponse](src/models/list-tags-for-resource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Listresourcepolicies

> Source: [Listresourcepolicies](src/resources/listresourcepolicies.ts)

<details>
<summary><code>listResourcePolicies(request?: Listresourcepolicies.ListResourcePoliciesRequestParams, options?: RequestOptions): ApiPromise&lt;ListResourcePoliciesResult, Listresourcepolicies.ListResourcePoliciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of resource policies in the target Amazon Web Services account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listresourcepolicies.listResourcePolicies();
  // TODO: Handle 'response' of type ListResourcePoliciesResult
} catch (err) {
  // TODO: Handle 'err' of type Listresourcepolicies.ListResourcePoliciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listresourcepolicies.listResourcePolicies().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResourcePoliciesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ListResourcePoliciesRequest](src/models/list-resource-policies-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listresourcepolicies.listResourcePolicies(request)`

- **OnSuccess**: <code>[ListResourcePoliciesResult](src/models/list-resource-policies-result.ts)</code>
- **OnError**: throws <code>[Listresourcepolicies.ListResourcePoliciesError](src/resources/listresourcepolicies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listresourcepolicies.listResourcePolicies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResourcePoliciesResult, Listresourcepolicies.ListResourcePoliciesError&gt;</code>, with `result.value` of type <code>[ListResourcePoliciesResult](src/models/list-resource-policies-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>cancelTraceRetrieval(request?: Operations.CancelTraceRetrievalRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Operations.CancelTraceRetrievalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A successful cancellation will return an HTTP 200 response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.cancelTraceRetrieval();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Operations.CancelTraceRetrievalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.cancelTraceRetrieval().asApiResult();
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
| <code>body?</code> | <code>[CancelTraceRetrievalRequest](src/models/cancel-trace-retrieval-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.cancelTraceRetrieval(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Operations.CancelTraceRetrievalError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.cancelTraceRetrieval(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Operations.CancelTraceRetrievalError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIndexingRules(request?: Operations.GetIndexingRulesRequestParams, options?: RequestOptions): ApiPromise&lt;GetIndexingRulesResult, Operations.GetIndexingRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction Search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getIndexingRules();
  // TODO: Handle 'response' of type GetIndexingRulesResult
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetIndexingRulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.getIndexingRules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetIndexingRulesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetIndexingRulesRequest](src/models/get-indexing-rules-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getIndexingRules(request)`

- **OnSuccess**: <code>[GetIndexingRulesResult](src/models/get-indexing-rules-result.ts)</code>
- **OnError**: throws <code>[Operations.GetIndexingRulesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getIndexingRules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetIndexingRulesResult, Operations.GetIndexingRulesError&gt;</code>, with `result.value` of type <code>[GetIndexingRulesResult](src/models/get-indexing-rules-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRetrievedTracesGraph(request?: Operations.GetRetrievedTracesGraphRequestParams, options?: RequestOptions): ApiPromise&lt;GetRetrievedTracesGraphResult, Operations.GetRetrievedTracesGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch log group generated by Transaction Search. This API does not initiate a retrieval job. You must first execute StartTraceRetrieval to obtain the required RetrievalToken. The trace graph describes services that process incoming requests and any downstream services they call, which may include Amazon Web Services resources, external APIs, or databases. The response is empty until the RetrievalStatus is COMPLETE. Retry the request after the status changes from RUNNING or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch log is the destination, this API can support cross-account observability and service graph retrieval across linked accounts. For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see GetTraceGraph.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getRetrievedTracesGraph();
  // TODO: Handle 'response' of type GetRetrievedTracesGraphResult
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetRetrievedTracesGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.getRetrievedTracesGraph().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetRetrievedTracesGraphResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetRetrievedTracesGraphRequest](src/models/get-retrieved-traces-graph-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getRetrievedTracesGraph(request)`

- **OnSuccess**: <code>[GetRetrievedTracesGraphResult](src/models/get-retrieved-traces-graph-result.ts)</code>
- **OnError**: throws <code>[Operations.GetRetrievedTracesGraphError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getRetrievedTracesGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetRetrievedTracesGraphResult, Operations.GetRetrievedTracesGraphError&gt;</code>, with `result.value` of type <code>[GetRetrievedTracesGraphResult](src/models/get-retrieved-traces-graph-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceSegmentDestination(options?: RequestOptions): ApiPromise&lt;GetTraceSegmentDestinationResult, Operations.GetTraceSegmentDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol (OTLP) endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see Transaction Search and OpenTelemetry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getTraceSegmentDestination();
  // TODO: Handle 'response' of type GetTraceSegmentDestinationResult
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetTraceSegmentDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.getTraceSegmentDestination().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTraceSegmentDestinationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getTraceSegmentDestination()`

- **OnSuccess**: <code>[GetTraceSegmentDestinationResult](src/models/get-trace-segment-destination-result.ts)</code>
- **OnError**: throws <code>[Operations.GetTraceSegmentDestinationError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getTraceSegmentDestination().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTraceSegmentDestinationResult, Operations.GetTraceSegmentDestinationError&gt;</code>, with `result.value` of type <code>[GetTraceSegmentDestinationResult](src/models/get-trace-segment-destination-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRetrievedTraces(request?: Operations.ListRetrievedTracesRequestParams, options?: RequestOptions): ApiPromise&lt;ListRetrievedTracesResult, Operations.ListRetrievedTracesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated by Transaction Search. For information on what each trace returns, see BatchGetTraces. This API does not initiate a retrieval process. To start a trace retrieval, use StartTraceRetrieval, which generates the required RetrievalToken. When the RetrievalStatus is not COMPLETE, the API will return an empty response. Retry the request once the retrieval has completed to access the full list of traces. For cross-account observability, this API can retrieve traces from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details, see CloudWatch cross-account observability. For retrieving data from X-Ray directly as opposed to the Transaction Search generated log group, see BatchGetTraces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.listRetrievedTraces();
  // TODO: Handle 'response' of type ListRetrievedTracesResult
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListRetrievedTracesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.listRetrievedTraces().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListRetrievedTracesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ListRetrievedTracesRequest](src/models/list-retrieved-traces-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.listRetrievedTraces(request)`

- **OnSuccess**: <code>[ListRetrievedTracesResult](src/models/list-retrieved-traces-result.ts)</code>
- **OnError**: throws <code>[Operations.ListRetrievedTracesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listRetrievedTraces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListRetrievedTracesResult, Operations.ListRetrievedTracesError&gt;</code>, with `result.value` of type <code>[ListRetrievedTracesResult](src/models/list-retrieved-traces-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTraceRetrieval(request?: Operations.StartTraceRetrievalRequestParams, options?: RequestOptions): ApiPromise&lt;StartTraceRetrievalResult, Operations.StartTraceRetrievalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a trace retrieval process using the specified time range and for the given trace IDs in the Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results. Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to retrieve data from a linked source account, as long as both accounts have transaction search enabled. For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.startTraceRetrieval();
  // TODO: Handle 'response' of type StartTraceRetrievalResult
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartTraceRetrievalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.startTraceRetrieval().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartTraceRetrievalResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StartTraceRetrievalRequest](src/models/start-trace-retrieval-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.startTraceRetrieval(request)`

- **OnSuccess**: <code>[StartTraceRetrievalResult](src/models/start-trace-retrieval-result.ts)</code>
- **OnError**: throws <code>[Operations.StartTraceRetrievalError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startTraceRetrieval(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartTraceRetrievalResult, Operations.StartTraceRetrievalError&gt;</code>, with `result.value` of type <code>[StartTraceRetrievalResult](src/models/start-trace-retrieval-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateIndexingRule(request?: Operations.UpdateIndexingRuleRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateIndexingRuleResult, Operations.UpdateIndexingRuleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for spans indexed from CloudWatch Logs. For more information, see Transaction Search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.updateIndexingRule();
  // TODO: Handle 'response' of type UpdateIndexingRuleResult
} catch (err) {
  // TODO: Handle 'err' of type Operations.UpdateIndexingRuleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.updateIndexingRule().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateIndexingRuleResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateIndexingRuleRequest](src/models/update-indexing-rule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.updateIndexingRule(request)`

- **OnSuccess**: <code>[UpdateIndexingRuleResult](src/models/update-indexing-rule-result.ts)</code>
- **OnError**: throws <code>[Operations.UpdateIndexingRuleError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.updateIndexingRule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateIndexingRuleResult, Operations.UpdateIndexingRuleError&gt;</code>, with `result.value` of type <code>[UpdateIndexingRuleResult](src/models/update-indexing-rule-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTraceSegmentDestination(request?: Operations.UpdateTraceSegmentDestinationRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateTraceSegmentDestinationResult, Operations.UpdateTraceSegmentDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature requires the CloudWatchLogs destination. For more information, see Transaction Search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.updateTraceSegmentDestination();
  // TODO: Handle 'response' of type UpdateTraceSegmentDestinationResult
} catch (err) {
  // TODO: Handle 'err' of type Operations.UpdateTraceSegmentDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.updateTraceSegmentDestination().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateTraceSegmentDestinationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateTraceSegmentDestinationRequest](src/models/update-trace-segment-destination-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.updateTraceSegmentDestination(request)`

- **OnSuccess**: <code>[UpdateTraceSegmentDestinationResult](src/models/update-trace-segment-destination-result.ts)</code>
- **OnError**: throws <code>[Operations.UpdateTraceSegmentDestinationError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.updateTraceSegmentDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateTraceSegmentDestinationResult, Operations.UpdateTraceSegmentDestinationError&gt;</code>, with `result.value` of type <code>[UpdateTraceSegmentDestinationResult](src/models/update-trace-segment-destination-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Putencryptionconfig

> Source: [Putencryptionconfig](src/resources/putencryptionconfig.ts)

<details>
<summary><code>putEncryptionConfig(request?: Putencryptionconfig.PutEncryptionConfigRequestParams, options?: RequestOptions): ApiPromise&lt;PutEncryptionConfigResult, Putencryptionconfig.PutEncryptionConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the encryption configuration for X-Ray data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.putencryptionconfig.putEncryptionConfig();
  // TODO: Handle 'response' of type PutEncryptionConfigResult
} catch (err) {
  // TODO: Handle 'err' of type Putencryptionconfig.PutEncryptionConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.putencryptionconfig.putEncryptionConfig().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutEncryptionConfigResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PutEncryptionConfigRequest](src/models/put-encryption-config-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.putencryptionconfig.putEncryptionConfig(request)`

- **OnSuccess**: <code>[PutEncryptionConfigResult](src/models/put-encryption-config-result.ts)</code>
- **OnError**: throws <code>[Putencryptionconfig.PutEncryptionConfigError](src/resources/putencryptionconfig.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.putencryptionconfig.putEncryptionConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutEncryptionConfigResult, Putencryptionconfig.PutEncryptionConfigError&gt;</code>, with `result.value` of type <code>[PutEncryptionConfigResult](src/models/put-encryption-config-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Putresourcepolicy

> Source: [Putresourcepolicy](src/resources/putresourcepolicy.ts)

<details>
<summary><code>putResourcePolicy(request?: Putresourcepolicy.PutResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;PutResourcePolicyResult, Putresourcepolicy.PutResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.putresourcepolicy.putResourcePolicy();
  // TODO: Handle 'response' of type PutResourcePolicyResult
} catch (err) {
  // TODO: Handle 'err' of type Putresourcepolicy.PutResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.putresourcepolicy.putResourcePolicy().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutResourcePolicyResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PutResourcePolicyRequest](src/models/put-resource-policy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.putresourcepolicy.putResourcePolicy(request)`

- **OnSuccess**: <code>[PutResourcePolicyResult](src/models/put-resource-policy-result.ts)</code>
- **OnError**: throws <code>[Putresourcepolicy.PutResourcePolicyError](src/resources/putresourcepolicy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.putresourcepolicy.putResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutResourcePolicyResult, Putresourcepolicy.PutResourcePolicyError&gt;</code>, with `result.value` of type <code>[PutResourcePolicyResult](src/models/put-resource-policy-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sampling

> Source: [Sampling](src/resources/sampling.ts)

<details>
<summary><code>getSamplingRules2(request?: Sampling.GetSamplingRules2Request, options?: RequestOptions): ApiPromise&lt;GetSamplingRulesResult, Sampling.GetSamplingRules2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all sampling rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sampling.getSamplingRules2();
  // TODO: Handle 'response' of type GetSamplingRulesResult
} catch (err) {
  // TODO: Handle 'err' of type Sampling.GetSamplingRules2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sampling.getSamplingRules2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSamplingRulesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetSamplingRulesRequest](src/models/get-sampling-rules-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sampling.getSamplingRules2(request)`

- **OnSuccess**: <code>[GetSamplingRulesResult](src/models/get-sampling-rules-result.ts)</code>
- **OnError**: throws <code>[Sampling.GetSamplingRules2Error](src/resources/sampling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sampling.getSamplingRules2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSamplingRulesResult, Sampling.GetSamplingRules2Error&gt;</code>, with `result.value` of type <code>[GetSamplingRulesResult](src/models/get-sampling-rules-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Samplingstatisticsummaries

> Source: [Samplingstatisticsummaries](src/resources/samplingstatisticsummaries.ts)

<details>
<summary><code>getSamplingStatisticSummaries(request?: Samplingstatisticsummaries.GetSamplingStatisticSummariesRequest, options?: RequestOptions): ApiPromise&lt;GetSamplingStatisticSummariesResult, Samplingstatisticsummaries.GetSamplingStatisticSummariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about recent sampling results for all sampling rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.samplingstatisticsummaries.getSamplingStatisticSummaries();
  // TODO: Handle 'response' of type GetSamplingStatisticSummariesResult
} catch (err) {
  // TODO: Handle 'err' of type Samplingstatisticsummaries.GetSamplingStatisticSummariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.samplingstatisticsummaries.getSamplingStatisticSummaries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSamplingStatisticSummariesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SamplingStatisticSummariesRequest](src/models/sampling-statistic-summaries-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.samplingstatisticsummaries.getSamplingStatisticSummaries(request)`

- **OnSuccess**: <code>[GetSamplingStatisticSummariesResult](src/models/get-sampling-statistic-summaries-result.ts)</code>
- **OnError**: throws <code>[Samplingstatisticsummaries.GetSamplingStatisticSummariesError](src/resources/samplingstatisticsummaries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.samplingstatisticsummaries.getSamplingStatisticSummaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSamplingStatisticSummariesResult, Samplingstatisticsummaries.GetSamplingStatisticSummariesError&gt;</code>, with `result.value` of type <code>[GetSamplingStatisticSummariesResult](src/models/get-sampling-statistic-summaries-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Samplingtargets

> Source: [Samplingtargets](src/resources/samplingtargets.ts)

<details>
<summary><code>getSamplingTargets(request?: Samplingtargets.GetSamplingTargetsRequest, options?: RequestOptions): ApiPromise&lt;GetSamplingTargetsResult, Samplingtargets.GetSamplingTargetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests a sampling quota for rules that the service is using to sample requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.samplingtargets.getSamplingTargets();
  // TODO: Handle 'response' of type GetSamplingTargetsResult
} catch (err) {
  // TODO: Handle 'err' of type Samplingtargets.GetSamplingTargetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.samplingtargets.getSamplingTargets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSamplingTargetsResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SamplingTargetsRequest](src/models/sampling-targets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.samplingtargets.getSamplingTargets(request)`

- **OnSuccess**: <code>[GetSamplingTargetsResult](src/models/get-sampling-targets-result.ts)</code>
- **OnError**: throws <code>[Samplingtargets.GetSamplingTargetsError](src/resources/samplingtargets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.samplingtargets.getSamplingTargets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSamplingTargetsResult, Samplingtargets.GetSamplingTargetsError&gt;</code>, with `result.value` of type <code>[GetSamplingTargetsResult](src/models/get-sampling-targets-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceGraph

> Source: [ServiceGraph](src/resources/service-graph.ts)

<details>
<summary><code>getServiceGraph(request?: ServiceGraph.GetServiceGraphRequest, options?: RequestOptions): ApiPromise&lt;GetServiceGraphResult, ServiceGraph.GetServiceGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the Amazon Web Services X-Ray SDK. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceGraph.getServiceGraph();
  // TODO: Handle 'response' of type GetServiceGraphResult
} catch (err) {
  // TODO: Handle 'err' of type ServiceGraph.GetServiceGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceGraph.getServiceGraph().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetServiceGraphResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ServiceGraphRequest](src/models/service-graph-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceGraph.getServiceGraph(request)`

- **OnSuccess**: <code>[GetServiceGraphResult](src/models/get-service-graph-result.ts)</code>
- **OnError**: throws <code>[ServiceGraph.GetServiceGraphError](src/resources/service-graph.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceGraph.getServiceGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetServiceGraphResult, ServiceGraph.GetServiceGraphError&gt;</code>, with `result.value` of type <code>[GetServiceGraphResult](src/models/get-service-graph-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TagResource

> Source: [TagResource](src/resources/tag-resource.ts)

<details>
<summary><code>tagResource(request?: TagResource.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TagResource.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tagResource.tagResource();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type TagResource.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tagResource.tagResource().asApiResult();
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
| <code>body?</code> | <code>[TagResourceRequest](src/models/tag-resource-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tagResource.tagResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[TagResource.TagResourceError](src/resources/tag-resource.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tagResource.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, TagResource.TagResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Telemetryrecords

> Source: [Telemetryrecords](src/resources/telemetryrecords.ts)

<details>
<summary><code>putTelemetryRecords(request?: Telemetryrecords.PutTelemetryRecordsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Telemetryrecords.PutTelemetryRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.telemetryrecords.putTelemetryRecords();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Telemetryrecords.PutTelemetryRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.telemetryrecords.putTelemetryRecords().asApiResult();
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
| <code>body?</code> | <code>[TelemetryRecordsRequest](src/models/telemetry-records-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.telemetryrecords.putTelemetryRecords(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Telemetryrecords.PutTelemetryRecordsError](src/resources/telemetryrecords.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.telemetryrecords.putTelemetryRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Telemetryrecords.PutTelemetryRecordsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TimeseriesservicestatisticsApi

> Source: [TimeseriesservicestatisticsApi](src/resources/timeseriesservicestatistics-api.ts)

<details>
<summary><code>getTimeSeriesServiceStatistics(request?: TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsRequest, options?: RequestOptions): ApiPromise&lt;GetTimeSeriesServiceStatisticsResult, TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an aggregation of service statistics defined by a specific time range.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.timeseriesservicestatisticsApi.getTimeSeriesServiceStatistics();
  // TODO: Handle 'response' of type GetTimeSeriesServiceStatisticsResult
} catch (err) {
  // TODO: Handle 'err' of type TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.timeseriesservicestatisticsApi.getTimeSeriesServiceStatistics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTimeSeriesServiceStatisticsResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TimeSeriesServiceStatisticsRequest](src/models/time-series-service-statistics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.timeseriesservicestatisticsApi.getTimeSeriesServiceStatistics(request)`

- **OnSuccess**: <code>[GetTimeSeriesServiceStatisticsResult](src/models/get-time-series-service-statistics-result.ts)</code>
- **OnError**: throws <code>[TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError](src/resources/timeseriesservicestatistics-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.timeseriesservicestatisticsApi.getTimeSeriesServiceStatistics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTimeSeriesServiceStatisticsResult, TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError&gt;</code>, with `result.value` of type <code>[GetTimeSeriesServiceStatisticsResult](src/models/get-time-series-service-statistics-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tracegraph

> Source: [Tracegraph](src/resources/tracegraph.ts)

<details>
<summary><code>getTraceGraph(request?: Tracegraph.GetTraceGraphRequest, options?: RequestOptions): ApiPromise&lt;GetTraceGraphResult, Tracegraph.GetTraceGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph for one or more specific trace IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracegraph.getTraceGraph();
  // TODO: Handle 'response' of type GetTraceGraphResult
} catch (err) {
  // TODO: Handle 'err' of type Tracegraph.GetTraceGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracegraph.getTraceGraph().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTraceGraphResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TraceGraphRequest](src/models/trace-graph-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracegraph.getTraceGraph(request)`

- **OnSuccess**: <code>[GetTraceGraphResult](src/models/get-trace-graph-result.ts)</code>
- **OnError**: throws <code>[Tracegraph.GetTraceGraphError](src/resources/tracegraph.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracegraph.getTraceGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTraceGraphResult, Tracegraph.GetTraceGraphError&gt;</code>, with `result.value` of type <code>[GetTraceGraphResult](src/models/get-trace-graph-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](src/resources/traces.ts)

<details>
<summary><code>batchGetTraces(request?: Traces.BatchGetTracesRequest, options?: RequestOptions): ApiPromise&lt;BatchGetTracesResult, Traces.BatchGetTracesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray. Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.batchGetTraces();
  // TODO: Handle 'response' of type BatchGetTracesResult
} catch (err) {
  // TODO: Handle 'err' of type Traces.BatchGetTracesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces.batchGetTraces().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchGetTracesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TracesRequest](src/models/traces-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.batchGetTraces(request)`

- **OnSuccess**: <code>[BatchGetTracesResult](src/models/batch-get-traces-result.ts)</code>
- **OnError**: throws <code>[Traces.BatchGetTracesError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.batchGetTraces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchGetTracesResult, Traces.BatchGetTracesError&gt;</code>, with `result.value` of type <code>[BatchGetTracesResult](src/models/batch-get-traces-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceSummaries(request?: Traces.GetTraceSummariesRequest, options?: RequestOptions): ApiPromise&lt;GetTraceSummariesResult, Traces.GetTraceSummariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceSummaries();
  // TODO: Handle 'response' of type GetTraceSummariesResult
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceSummariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces.getTraceSummaries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTraceSummariesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TraceSummariesRequest](src/models/trace-summaries-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceSummaries(request)`

- **OnSuccess**: <code>[GetTraceSummariesResult](src/models/get-trace-summaries-result.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceSummariesError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceSummaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTraceSummariesResult, Traces.GetTraceSummariesError&gt;</code>, with `result.value` of type <code>[GetTraceSummariesResult](src/models/get-trace-summaries-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tracesegments

> Source: [Tracesegments](src/resources/tracesegments.ts)

<details>
<summary><code>putTraceSegments(request?: Tracesegments.PutTraceSegmentsRequest, options?: RequestOptions): ApiPromise&lt;PutTraceSegmentsResult, Tracesegments.PutTraceSegmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an in-progress segment, or an array of subsegments. Segments must include the following fields. For the full segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray Developer Guide. Required segment document fields name - The name of the service that handled the request. id - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id - A unique identifier that connects all segments and subsegments originating from a single client request. start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, t

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracesegments.putTraceSegments();
  // TODO: Handle 'response' of type PutTraceSegmentsResult
} catch (err) {
  // TODO: Handle 'err' of type Tracesegments.PutTraceSegmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracesegments.putTraceSegments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutTraceSegmentsResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TraceSegmentsRequest](src/models/trace-segments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracesegments.putTraceSegments(request)`

- **OnSuccess**: <code>[PutTraceSegmentsResult](src/models/put-trace-segments-result.ts)</code>
- **OnError**: throws <code>[Tracesegments.PutTraceSegmentsError](src/resources/tracesegments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracesegments.putTraceSegments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutTraceSegmentsResult, Tracesegments.PutTraceSegmentsError&gt;</code>, with `result.value` of type <code>[PutTraceSegmentsResult](src/models/put-trace-segments-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tracesummaries

> Source: [Tracesummaries](src/resources/tracesummaries.ts)

<details>
<summary><code>getTraceSummaries2(request?: Tracesummaries.GetTraceSummaries2Request, options?: RequestOptions): ApiPromise&lt;GetTraceSummariesResult, Tracesummaries.GetTraceSummaries2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracesummaries.getTraceSummaries2();
  // TODO: Handle 'response' of type GetTraceSummariesResult
} catch (err) {
  // TODO: Handle 'err' of type Tracesummaries.GetTraceSummaries2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracesummaries.getTraceSummaries2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTraceSummariesResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TraceSummariesRequest](src/models/trace-summaries-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracesummaries.getTraceSummaries2(request)`

- **OnSuccess**: <code>[GetTraceSummariesResult](src/models/get-trace-summaries-result.ts)</code>
- **OnError**: throws <code>[Tracesummaries.GetTraceSummaries2Error](src/resources/tracesummaries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracesummaries.getTraceSummaries2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTraceSummariesResult, Tracesummaries.GetTraceSummaries2Error&gt;</code>, with `result.value` of type <code>[GetTraceSummariesResult](src/models/get-trace-summaries-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UntagResource

> Source: [UntagResource](src/resources/untag-resource.ts)

<details>
<summary><code>untagResource(request?: UntagResource.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, UntagResource.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an aws: prefix).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.untagResource.untagResource();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type UntagResource.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.untagResource.untagResource().asApiResult();
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
| <code>body?</code> | <code>[UntagResourceRequest](src/models/untag-resource-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.untagResource.untagResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[UntagResource.UntagResourceError](src/resources/untag-resource.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.untagResource.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, UntagResource.UntagResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateGroup

> Source: [UpdateGroup](src/resources/update-group.ts)

<details>
<summary><code>updateGroup(request?: UpdateGroup.UpdateGroupRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateGroupResult, UpdateGroup.UpdateGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a group resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateGroup.updateGroup();
  // TODO: Handle 'response' of type UpdateGroupResult
} catch (err) {
  // TODO: Handle 'err' of type UpdateGroup.UpdateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateGroup.updateGroup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateGroupResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateGroupRequest](src/models/update-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateGroup.updateGroup(request)`

- **OnSuccess**: <code>[UpdateGroupResult](src/models/update-group-result.ts)</code>
- **OnError**: throws <code>[UpdateGroup.UpdateGroupError](src/resources/update-group.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateGroup.updateGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateGroupResult, UpdateGroup.UpdateGroupError&gt;</code>, with `result.value` of type <code>[UpdateGroupResult](src/models/update-group-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Updatesamplingrule

> Source: [Updatesamplingrule](src/resources/updatesamplingrule.ts)

<details>
<summary><code>updateSamplingRule(request?: Updatesamplingrule.UpdateSamplingRuleRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateSamplingRuleResult, Updatesamplingrule.UpdateSamplingRuleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies a sampling rule's configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updatesamplingrule.updateSamplingRule();
  // TODO: Handle 'response' of type UpdateSamplingRuleResult
} catch (err) {
  // TODO: Handle 'err' of type Updatesamplingrule.UpdateSamplingRuleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updatesamplingrule.updateSamplingRule().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateSamplingRuleResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateSamplingRuleRequest](src/models/update-sampling-rule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updatesamplingrule.updateSamplingRule(request)`

- **OnSuccess**: <code>[UpdateSamplingRuleResult](src/models/update-sampling-rule-result.ts)</code>
- **OnError**: throws <code>[Updatesamplingrule.UpdateSamplingRuleError](src/resources/updatesamplingrule.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updatesamplingrule.updateSamplingRule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateSamplingRuleResult, Updatesamplingrule.UpdateSamplingRuleError&gt;</code>, with `result.value` of type <code>[UpdateSamplingRuleResult](src/models/update-sampling-rule-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsXRayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

