# Reference

> Source: [AmazonSwfClient](src/client.ts)

## AmazonSimpleWorkflowService

> Source: [AmazonSimpleWorkflowService](src/resources/amazon-simple-workflow-service.ts)

<details>
<summary><code>countClosedWorkflowExecutions(request: AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.countClosedWorkflowExecutions({
    xAmzTarget: XAmzTarget.SimpleWorkflowServiceCountClosedWorkflowExecutions,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .countClosedWorkflowExecutions({
    xAmzTarget: XAmzTarget.SimpleWorkflowServiceCountClosedWorkflowExecutions,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.countClosedWorkflowExecutions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.countClosedWorkflowExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countOpenWorkflowExecutions(request: AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.countOpenWorkflowExecutions({
    xAmzTarget: XAmzTarget1.SimpleWorkflowServiceCountOpenWorkflowExecutions,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .countOpenWorkflowExecutions({ xAmzTarget: XAmzTarget1.SimpleWorkflowServiceCountOpenWorkflowExecutions })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.countOpenWorkflowExecutions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.countOpenWorkflowExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countPendingActivityTasks(request: AmazonSimpleWorkflowService.CountPendingActivityTasksRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.CountPendingActivityTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.countPendingActivityTasks({
    xAmzTarget: XAmzTarget2.SimpleWorkflowServiceCountPendingActivityTasks,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.CountPendingActivityTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .countPendingActivityTasks({ xAmzTarget: XAmzTarget2.SimpleWorkflowServiceCountPendingActivityTasks })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.countPendingActivityTasks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.CountPendingActivityTasksError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.countPendingActivityTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.CountPendingActivityTasksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countPendingDecisionTasks(request: AmazonSimpleWorkflowService.CountPendingDecisionTasksRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.CountPendingDecisionTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.countPendingDecisionTasks({
    xAmzTarget: XAmzTarget3.SimpleWorkflowServiceCountPendingDecisionTasks,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.CountPendingDecisionTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .countPendingDecisionTasks({ xAmzTarget: XAmzTarget3.SimpleWorkflowServiceCountPendingDecisionTasks })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.countPendingDecisionTasks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.CountPendingDecisionTasksError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.countPendingDecisionTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.CountPendingDecisionTasksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecateActivityType(request: AmazonSimpleWorkflowService.DeprecateActivityTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.DeprecateActivityTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.deprecateActivityType({
    xAmzTarget: XAmzTarget4.SimpleWorkflowServiceDeprecateActivityType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.DeprecateActivityTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .deprecateActivityType({ xAmzTarget: XAmzTarget4.SimpleWorkflowServiceDeprecateActivityType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.deprecateActivityType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.DeprecateActivityTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.deprecateActivityType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.DeprecateActivityTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecateDomain(request: AmazonSimpleWorkflowService.DeprecateDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.DeprecateDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.deprecateDomain({
    xAmzTarget: XAmzTarget5.SimpleWorkflowServiceDeprecateDomain,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.DeprecateDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .deprecateDomain({ xAmzTarget: XAmzTarget5.SimpleWorkflowServiceDeprecateDomain })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.deprecateDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.DeprecateDomainError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.deprecateDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.DeprecateDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecateWorkflowType(request: AmazonSimpleWorkflowService.DeprecateWorkflowTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.DeprecateWorkflowTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, se

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.deprecateWorkflowType({
    xAmzTarget: XAmzTarget6.SimpleWorkflowServiceDeprecateWorkflowType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.DeprecateWorkflowTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .deprecateWorkflowType({ xAmzTarget: XAmzTarget6.SimpleWorkflowServiceDeprecateWorkflowType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.deprecateWorkflowType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.DeprecateWorkflowTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.deprecateWorkflowType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.DeprecateWorkflowTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeActivityType(request: AmazonSimpleWorkflowService.DescribeActivityTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.DescribeActivityTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.describeActivityType({
    xAmzTarget: XAmzTarget20.SimpleWorkflowServiceDescribeActivityType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.DescribeActivityTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .describeActivityType({ xAmzTarget: XAmzTarget20.SimpleWorkflowServiceDescribeActivityType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget20](src/models/xamz-target20.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.describeActivityType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.DescribeActivityTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.describeActivityType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.DescribeActivityTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDomain(request: AmazonSimpleWorkflowService.DescribeDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.DescribeDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified domain, including description and status. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.describeDomain({
    xAmzTarget: XAmzTarget26.SimpleWorkflowServiceDescribeDomain,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.DescribeDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .describeDomain({ xAmzTarget: XAmzTarget26.SimpleWorkflowServiceDescribeDomain })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget26](src/models/xamz-target26.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.describeDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.DescribeDomainError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.describeDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.DescribeDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeWorkflowExecution(request: AmazonSimpleWorkflowService.DescribeWorkflowExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.DescribeWorkflowExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified workflow execution including its type and some statistics. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.describeWorkflowExecution({
    xAmzTarget: XAmzTarget29.SimpleWorkflowServiceDescribeWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.DescribeWorkflowExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .describeWorkflowExecution({ xAmzTarget: XAmzTarget29.SimpleWorkflowServiceDescribeWorkflowExecution })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget29](src/models/xamz-target29.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.describeWorkflowExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.DescribeWorkflowExecutionError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.describeWorkflowExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.DescribeWorkflowExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeWorkflowType(request: AmazonSimpleWorkflowService.DescribeWorkflowTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.DescribeWorkflowTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified workflow type. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.describeWorkflowType({
    xAmzTarget: XAmzTarget23.SimpleWorkflowServiceDescribeWorkflowType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.DescribeWorkflowTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .describeWorkflowType({ xAmzTarget: XAmzTarget23.SimpleWorkflowServiceDescribeWorkflowType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget23](src/models/xamz-target23.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.describeWorkflowType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.DescribeWorkflowTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.describeWorkflowType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.DescribeWorkflowTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkflowExecutionHistory(request: AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.getWorkflowExecutionHistory({
    xAmzTarget: XAmzTarget31.SimpleWorkflowServiceGetWorkflowExecutionHistory,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .getWorkflowExecutionHistory({ xAmzTarget: XAmzTarget31.SimpleWorkflowServiceGetWorkflowExecutionHistory })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget31](src/models/xamz-target31.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.getWorkflowExecutionHistory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.getWorkflowExecutionHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listActivityTypes(request: AmazonSimpleWorkflowService.ListActivityTypesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.ListActivityTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.listActivityTypes({
    xAmzTarget: XAmzTarget21.SimpleWorkflowServiceListActivityTypes,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.ListActivityTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .listActivityTypes({ xAmzTarget: XAmzTarget21.SimpleWorkflowServiceListActivityTypes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget21](src/models/xamz-target21.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.listActivityTypes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.ListActivityTypesError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.listActivityTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.ListActivityTypesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClosedWorkflowExecutions(request: AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and e

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.listClosedWorkflowExecutions({
    xAmzTarget: XAmzTarget32.SimpleWorkflowServiceListClosedWorkflowExecutions,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .listClosedWorkflowExecutions({
    xAmzTarget: XAmzTarget32.SimpleWorkflowServiceListClosedWorkflowExecutions,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget32](src/models/xamz-target32.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.listClosedWorkflowExecutions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.listClosedWorkflowExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDomains(request: AmazonSimpleWorkflowService.ListDomainsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.ListDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. The element must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.listDomains({
    xAmzTarget: XAmzTarget27.SimpleWorkflowServiceListDomains,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.ListDomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .listDomains({ xAmzTarget: XAmzTarget27.SimpleWorkflowServiceListDomains })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget27](src/models/xamz-target27.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.listDomains(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.ListDomainsError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.listDomains(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.ListDomainsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOpenWorkflowExecutions(request: AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and exa

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.listOpenWorkflowExecutions({
    xAmzTarget: XAmzTarget33.SimpleWorkflowServiceListOpenWorkflowExecutions,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .listOpenWorkflowExecutions({ xAmzTarget: XAmzTarget33.SimpleWorkflowServiceListOpenWorkflowExecutions })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget33](src/models/xamz-target33.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.listOpenWorkflowExecutions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.listOpenWorkflowExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource(request: AmazonSimpleWorkflowService.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tags for a given domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.listTagsForResource({
    xAmzTarget: XAmzTarget34.SimpleWorkflowServiceListTagsForResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .listTagsForResource({ xAmzTarget: XAmzTarget34.SimpleWorkflowServiceListTagsForResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget34](src/models/xamz-target34.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.ListTagsForResourceError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkflowTypes(request: AmazonSimpleWorkflowService.ListWorkflowTypesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.ListWorkflowTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.listWorkflowTypes({
    xAmzTarget: XAmzTarget24.SimpleWorkflowServiceListWorkflowTypes,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.ListWorkflowTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .listWorkflowTypes({ xAmzTarget: XAmzTarget24.SimpleWorkflowServiceListWorkflowTypes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget24](src/models/xamz-target24.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.listWorkflowTypes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.ListWorkflowTypesError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.listWorkflowTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.ListWorkflowTypesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pollForActivityTask(request: AmazonSimpleWorkflowService.PollForActivityTaskRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.PollForActivityTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly. Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.pollForActivityTask({
    xAmzTarget: XAmzTarget7.SimpleWorkflowServicePollForActivityTask,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.PollForActivityTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .pollForActivityTask({ xAmzTarget: XAmzTarget7.SimpleWorkflowServicePollForActivityTask })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.pollForActivityTask(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.PollForActivityTaskError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.pollForActivityTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.PollForActivityTaskError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pollForDecisionTask(request: AmazonSimpleWorkflowService.PollForDecisionTaskRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.PollForDecisionTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.pollForDecisionTask({
    xAmzTarget: XAmzTarget8.SimpleWorkflowServicePollForDecisionTask,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.PollForDecisionTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .pollForDecisionTask({ xAmzTarget: XAmzTarget8.SimpleWorkflowServicePollForDecisionTask })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.pollForDecisionTask(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.PollForDecisionTaskError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.pollForDecisionTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.PollForDecisionTaskError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordActivityTaskHeartbeat(request: AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress. The worker can also specify details of the progress, for example percent complete, using the details parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived activities to repor

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.recordActivityTaskHeartbeat({
    xAmzTarget: XAmzTarget9.SimpleWorkflowServiceRecordActivityTaskHeartbeat,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .recordActivityTaskHeartbeat({ xAmzTarget: XAmzTarget9.SimpleWorkflowServiceRecordActivityTaskHeartbeat })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.recordActivityTaskHeartbeat(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.recordActivityTaskHeartbeat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerActivityType(request: AmazonSimpleWorkflowService.RegisterActivityTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RegisterActivityTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a new activity type along with its configuration settings in the specified domain. A TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.registerActivityType({
    xAmzTarget: XAmzTarget22.SimpleWorkflowServiceRegisterActivityType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RegisterActivityTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .registerActivityType({ xAmzTarget: XAmzTarget22.SimpleWorkflowServiceRegisterActivityType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget22](src/models/xamz-target22.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.registerActivityType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RegisterActivityTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.registerActivityType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RegisterActivityTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerDomain(request: AmazonSimpleWorkflowService.RegisterDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RegisterDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.registerDomain({
    xAmzTarget: XAmzTarget28.SimpleWorkflowServiceRegisterDomain,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RegisterDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .registerDomain({ xAmzTarget: XAmzTarget28.SimpleWorkflowServiceRegisterDomain })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget28](src/models/xamz-target28.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.registerDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RegisterDomainError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.registerDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RegisterDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerWorkflowType(request: AmazonSimpleWorkflowService.RegisterWorkflowTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RegisterWorkflowTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a new workflow type and its configuration settings in the specified domain. The retention period for the workflow history is set by the RegisterDomain action. If the type already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.registerWorkflowType({
    xAmzTarget: XAmzTarget25.SimpleWorkflowServiceRegisterWorkflowType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RegisterWorkflowTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .registerWorkflowType({ xAmzTarget: XAmzTarget25.SimpleWorkflowServiceRegisterWorkflowType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget25](src/models/xamz-target25.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.registerWorkflowType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RegisterWorkflowTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.registerWorkflowType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RegisterWorkflowTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestCancelWorkflowExecution(request: AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow execution with the specified workflowId in the domain. Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cau

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.requestCancelWorkflowExecution({
    xAmzTarget: XAmzTarget10.SimpleWorkflowServiceRequestCancelWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .requestCancelWorkflowExecution({
    xAmzTarget: XAmzTarget10.SimpleWorkflowServiceRequestCancelWorkflowExecution,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget10](src/models/xamz-target10.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.requestCancelWorkflowExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.requestCancelWorkflowExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondActivityTaskCanceled(request: AmazonSimpleWorkflowService.RespondActivityTaskCanceledRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RespondActivityTaskCanceledError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled. Additional details can be provided using the details argument. These details (if provided) appear in the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside t

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.respondActivityTaskCanceled({
    xAmzTarget: XAmzTarget11.SimpleWorkflowServiceRespondActivityTaskCanceled,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RespondActivityTaskCanceledError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .respondActivityTaskCanceled({ xAmzTarget: XAmzTarget11.SimpleWorkflowServiceRespondActivityTaskCanceled })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget11](src/models/xamz-target11.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.respondActivityTaskCanceled(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RespondActivityTaskCanceledError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.respondActivityTaskCanceled(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RespondActivityTaskCanceledError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondActivityTaskCompleted(request: AmazonSimpleWorkflowService.RespondActivityTaskCompletedRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RespondActivityTaskCompletedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.respondActivityTaskCompleted({
    xAmzTarget: XAmzTarget12.SimpleWorkflowServiceRespondActivityTaskCompleted,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RespondActivityTaskCompletedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .respondActivityTaskCompleted({
    xAmzTarget: XAmzTarget12.SimpleWorkflowServiceRespondActivityTaskCompleted,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget12](src/models/xamz-target12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.respondActivityTaskCompleted(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RespondActivityTaskCompletedError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.respondActivityTaskCompleted(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RespondActivityTaskCompletedError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondActivityTaskFailed(request: AmazonSimpleWorkflowService.RespondActivityTaskFailedRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RespondActivityTaskFailedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.respondActivityTaskFailed({
    xAmzTarget: XAmzTarget13.SimpleWorkflowServiceRespondActivityTaskFailed,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RespondActivityTaskFailedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .respondActivityTaskFailed({ xAmzTarget: XAmzTarget13.SimpleWorkflowServiceRespondActivityTaskFailed })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget13](src/models/xamz-target13.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.respondActivityTaskFailed(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RespondActivityTaskFailedError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.respondActivityTaskFailed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RespondActivityTaskFailedError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondDecisionTaskCompleted(request: AmazonSimpleWorkflowService.RespondDecisionTaskCompletedRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed. The decisions argument specifies the list of decisions made while processing the task. A DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the event in the workflow execution history. Access Control If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.respondDecisionTaskCompleted({
    xAmzTarget: XAmzTarget14.SimpleWorkflowServiceRespondDecisionTaskCompleted,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .respondDecisionTaskCompleted({
    xAmzTarget: XAmzTarget14.SimpleWorkflowServiceRespondDecisionTaskCompleted,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget14](src/models/xamz-target14.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.respondDecisionTaskCompleted(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.respondDecisionTaskCompleted(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signalWorkflowExecution(request: AmazonSimpleWorkflowService.SignalWorkflowExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.SignalWorkflowExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided). If a runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain. If the specified workflow execution isn't open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.signalWorkflowExecution({
    xAmzTarget: XAmzTarget15.SimpleWorkflowServiceSignalWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.SignalWorkflowExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .signalWorkflowExecution({ xAmzTarget: XAmzTarget15.SimpleWorkflowServiceSignalWorkflowExecution })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget15](src/models/xamz-target15.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.signalWorkflowExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.SignalWorkflowExecutionError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.signalWorkflowExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.SignalWorkflowExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startWorkflowExecution(request: AmazonSimpleWorkflowService.StartWorkflowExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.StartWorkflowExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an execution of the workflow type in the specified domain using the provided workflowId and input data. This action returns the newly started workflow execution. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1. tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3. tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.startWorkflowExecution({
    xAmzTarget: XAmzTarget30.SimpleWorkflowServiceStartWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.StartWorkflowExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .startWorkflowExecution({ xAmzTarget: XAmzTarget30.SimpleWorkflowServiceStartWorkflowExecution })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget30](src/models/xamz-target30.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.startWorkflowExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.StartWorkflowExecutionError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.startWorkflowExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.StartWorkflowExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: AmazonSimpleWorkflowService.TagResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a tag to a Amazon SWF domain. Amazon SWF supports a maximum of 50 tags per resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.tagResource({
    xAmzTarget: XAmzTarget35.SimpleWorkflowServiceTagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .tagResource({ xAmzTarget: XAmzTarget35.SimpleWorkflowServiceTagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget35](src/models/xamz-target35.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.TagResourceError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>terminateWorkflowExecution(request: AmazonSimpleWorkflowService.TerminateWorkflowExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.TerminateWorkflowExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution. If the identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified con

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.terminateWorkflowExecution({
    xAmzTarget: XAmzTarget16.SimpleWorkflowServiceTerminateWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.TerminateWorkflowExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .terminateWorkflowExecution({ xAmzTarget: XAmzTarget16.SimpleWorkflowServiceTerminateWorkflowExecution })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget16](src/models/xamz-target16.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.terminateWorkflowExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.TerminateWorkflowExecutionError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.terminateWorkflowExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.TerminateWorkflowExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>undeprecateActivityType(request: AmazonSimpleWorkflowService.UndeprecateActivityTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.UndeprecateActivityTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can create new tasks of that activity type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.undeprecateActivityType({
    xAmzTarget: XAmzTarget17.SimpleWorkflowServiceUndeprecateActivityType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.UndeprecateActivityTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .undeprecateActivityType({ xAmzTarget: XAmzTarget17.SimpleWorkflowServiceUndeprecateActivityType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget17](src/models/xamz-target17.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.undeprecateActivityType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.UndeprecateActivityTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.undeprecateActivityType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.UndeprecateActivityTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>undeprecateDomain(request: AmazonSimpleWorkflowService.UndeprecateDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.UndeprecateDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.undeprecateDomain({
    xAmzTarget: XAmzTarget18.SimpleWorkflowServiceUndeprecateDomain,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.UndeprecateDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .undeprecateDomain({ xAmzTarget: XAmzTarget18.SimpleWorkflowServiceUndeprecateDomain })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget18](src/models/xamz-target18.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.undeprecateDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.UndeprecateDomainError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.undeprecateDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.UndeprecateDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>undeprecateWorkflowType(request: AmazonSimpleWorkflowService.UndeprecateWorkflowTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can create new executions of that type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.undeprecateWorkflowType({
    xAmzTarget: XAmzTarget19.SimpleWorkflowServiceUndeprecateWorkflowType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .undeprecateWorkflowType({ xAmzTarget: XAmzTarget19.SimpleWorkflowServiceUndeprecateWorkflowType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget19](src/models/xamz-target19.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.undeprecateWorkflowType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.undeprecateWorkflowType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: AmazonSimpleWorkflowService.UntagResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonSimpleWorkflowService.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a tag from a Amazon SWF domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonSimpleWorkflowService.untagResource({
    xAmzTarget: XAmzTarget36.SimpleWorkflowServiceUntagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonSimpleWorkflowService.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonSimpleWorkflowService
  .untagResource({ xAmzTarget: XAmzTarget36.SimpleWorkflowServiceUntagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget36](src/models/xamz-target36.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonSimpleWorkflowService.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonSimpleWorkflowService.UntagResourceError](src/resources/amazon-simple-workflow-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonSimpleWorkflowService.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonSimpleWorkflowService.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>countClosedWorkflowExecutions2(request: Operations.CountClosedWorkflowExecutions2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.CountClosedWorkflowExecutions2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.countClosedWorkflowExecutions2({
    xAmzTarget: XAmzTarget.SimpleWorkflowServiceCountClosedWorkflowExecutions,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.CountClosedWorkflowExecutions2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .countClosedWorkflowExecutions2({
    xAmzTarget: XAmzTarget.SimpleWorkflowServiceCountClosedWorkflowExecutions,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.countClosedWorkflowExecutions2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.CountClosedWorkflowExecutions2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.countClosedWorkflowExecutions2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.CountClosedWorkflowExecutions2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countOpenWorkflowExecutions2(request: Operations.CountOpenWorkflowExecutions2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.CountOpenWorkflowExecutions2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.countOpenWorkflowExecutions2({
    xAmzTarget: XAmzTarget1.SimpleWorkflowServiceCountOpenWorkflowExecutions,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.CountOpenWorkflowExecutions2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .countOpenWorkflowExecutions2({ xAmzTarget: XAmzTarget1.SimpleWorkflowServiceCountOpenWorkflowExecutions })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.countOpenWorkflowExecutions2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.CountOpenWorkflowExecutions2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.countOpenWorkflowExecutions2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.CountOpenWorkflowExecutions2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countPendingActivityTasks2(request: Operations.CountPendingActivityTasks2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.CountPendingActivityTasks2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.countPendingActivityTasks2({
    xAmzTarget: XAmzTarget2.SimpleWorkflowServiceCountPendingActivityTasks,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.CountPendingActivityTasks2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .countPendingActivityTasks2({ xAmzTarget: XAmzTarget2.SimpleWorkflowServiceCountPendingActivityTasks })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.countPendingActivityTasks2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.CountPendingActivityTasks2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.countPendingActivityTasks2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.CountPendingActivityTasks2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countPendingDecisionTasks2(request: Operations.CountPendingDecisionTasks2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.CountPendingDecisionTasks2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.countPendingDecisionTasks2({
    xAmzTarget: XAmzTarget3.SimpleWorkflowServiceCountPendingDecisionTasks,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.CountPendingDecisionTasks2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .countPendingDecisionTasks2({ xAmzTarget: XAmzTarget3.SimpleWorkflowServiceCountPendingDecisionTasks })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.countPendingDecisionTasks2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.CountPendingDecisionTasks2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.countPendingDecisionTasks2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.CountPendingDecisionTasks2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteActivityType(request: Operations.DeleteActivityTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DeleteActivityTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified activity type. Note: Prior to deletion, activity types must first be deprecated. After an activity type has been deleted, you cannot schedule new activities of that type. Activities that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.deleteActivityType({
    xAmzTarget: XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi.SimpleWorkflowServiceDeleteActivityType,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeleteActivityTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deleteActivityType({
    xAmzTarget: XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi.SimpleWorkflowServiceDeleteActivityType,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi](src/models/xamz-target20-amazon-simple-workflow-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.deleteActivityType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DeleteActivityTypeError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deleteActivityType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DeleteActivityTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWorkflowType(request: Operations.DeleteWorkflowTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DeleteWorkflowTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified workflow type. Note: Prior to deletion, workflow types must first be deprecated. After a workflow type has been deleted, you cannot create new executions of that type. Executions that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.deleteWorkflowType({
    xAmzTarget: XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi.SimpleWorkflowServiceDeleteWorkflowType,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeleteWorkflowTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deleteWorkflowType({
    xAmzTarget: XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi.SimpleWorkflowServiceDeleteWorkflowType,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi](src/models/xamz-target21-amazon-simple-workflow-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.deleteWorkflowType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DeleteWorkflowTypeError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deleteWorkflowType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DeleteWorkflowTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecateActivityType2(request: Operations.DeprecateActivityType2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DeprecateActivityType2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.deprecateActivityType2({
    xAmzTarget: XAmzTarget4.SimpleWorkflowServiceDeprecateActivityType,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeprecateActivityType2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deprecateActivityType2({ xAmzTarget: XAmzTarget4.SimpleWorkflowServiceDeprecateActivityType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.deprecateActivityType2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DeprecateActivityType2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deprecateActivityType2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DeprecateActivityType2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecateDomain2(request: Operations.DeprecateDomain2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DeprecateDomain2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.deprecateDomain2({ xAmzTarget: XAmzTarget5.SimpleWorkflowServiceDeprecateDomain });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeprecateDomain2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deprecateDomain2({ xAmzTarget: XAmzTarget5.SimpleWorkflowServiceDeprecateDomain })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.deprecateDomain2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DeprecateDomain2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deprecateDomain2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DeprecateDomain2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecateWorkflowType2(request: Operations.DeprecateWorkflowType2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DeprecateWorkflowType2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, se

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.deprecateWorkflowType2({
    xAmzTarget: XAmzTarget6.SimpleWorkflowServiceDeprecateWorkflowType,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeprecateWorkflowType2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deprecateWorkflowType2({ xAmzTarget: XAmzTarget6.SimpleWorkflowServiceDeprecateWorkflowType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.deprecateWorkflowType2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DeprecateWorkflowType2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deprecateWorkflowType2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DeprecateWorkflowType2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pollForActivityTask2(request: Operations.PollForActivityTask2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.PollForActivityTask2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly. Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.pollForActivityTask2({
    xAmzTarget: XAmzTarget7.SimpleWorkflowServicePollForActivityTask,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.PollForActivityTask2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .pollForActivityTask2({ xAmzTarget: XAmzTarget7.SimpleWorkflowServicePollForActivityTask })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.pollForActivityTask2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.PollForActivityTask2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.pollForActivityTask2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.PollForActivityTask2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pollForDecisionTask2(request: Operations.PollForDecisionTask2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.PollForDecisionTask2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.pollForDecisionTask2({
    xAmzTarget: XAmzTarget8.SimpleWorkflowServicePollForDecisionTask,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.PollForDecisionTask2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .pollForDecisionTask2({ xAmzTarget: XAmzTarget8.SimpleWorkflowServicePollForDecisionTask })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.pollForDecisionTask2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.PollForDecisionTask2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.pollForDecisionTask2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.PollForDecisionTask2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordActivityTaskHeartbeat2(request: Operations.RecordActivityTaskHeartbeat2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RecordActivityTaskHeartbeat2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress. The worker can also specify details of the progress, for example percent complete, using the details parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived activities to repor

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.recordActivityTaskHeartbeat2({
    xAmzTarget: XAmzTarget9.SimpleWorkflowServiceRecordActivityTaskHeartbeat,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RecordActivityTaskHeartbeat2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .recordActivityTaskHeartbeat2({ xAmzTarget: XAmzTarget9.SimpleWorkflowServiceRecordActivityTaskHeartbeat })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.recordActivityTaskHeartbeat2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RecordActivityTaskHeartbeat2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.recordActivityTaskHeartbeat2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RecordActivityTaskHeartbeat2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestCancelWorkflowExecution2(request: Operations.RequestCancelWorkflowExecution2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RequestCancelWorkflowExecution2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow execution with the specified workflowId in the domain. Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cau

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.requestCancelWorkflowExecution2({
    xAmzTarget: XAmzTarget10.SimpleWorkflowServiceRequestCancelWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RequestCancelWorkflowExecution2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .requestCancelWorkflowExecution2({
    xAmzTarget: XAmzTarget10.SimpleWorkflowServiceRequestCancelWorkflowExecution,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget10](src/models/xamz-target10.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.requestCancelWorkflowExecution2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RequestCancelWorkflowExecution2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.requestCancelWorkflowExecution2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RequestCancelWorkflowExecution2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondActivityTaskCanceled2(request: Operations.RespondActivityTaskCanceled2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RespondActivityTaskCanceled2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled. Additional details can be provided using the details argument. These details (if provided) appear in the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside t

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.respondActivityTaskCanceled2({
    xAmzTarget: XAmzTarget11.SimpleWorkflowServiceRespondActivityTaskCanceled,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RespondActivityTaskCanceled2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .respondActivityTaskCanceled2({ xAmzTarget: XAmzTarget11.SimpleWorkflowServiceRespondActivityTaskCanceled })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget11](src/models/xamz-target11.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.respondActivityTaskCanceled2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RespondActivityTaskCanceled2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.respondActivityTaskCanceled2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RespondActivityTaskCanceled2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondActivityTaskCompleted2(request: Operations.RespondActivityTaskCompleted2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RespondActivityTaskCompleted2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.respondActivityTaskCompleted2({
    xAmzTarget: XAmzTarget12.SimpleWorkflowServiceRespondActivityTaskCompleted,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RespondActivityTaskCompleted2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .respondActivityTaskCompleted2({
    xAmzTarget: XAmzTarget12.SimpleWorkflowServiceRespondActivityTaskCompleted,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget12](src/models/xamz-target12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.respondActivityTaskCompleted2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RespondActivityTaskCompleted2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.respondActivityTaskCompleted2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RespondActivityTaskCompleted2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondActivityTaskFailed2(request: Operations.RespondActivityTaskFailed2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RespondActivityTaskFailed2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.respondActivityTaskFailed2({
    xAmzTarget: XAmzTarget13.SimpleWorkflowServiceRespondActivityTaskFailed,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RespondActivityTaskFailed2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .respondActivityTaskFailed2({ xAmzTarget: XAmzTarget13.SimpleWorkflowServiceRespondActivityTaskFailed })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget13](src/models/xamz-target13.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.respondActivityTaskFailed2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RespondActivityTaskFailed2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.respondActivityTaskFailed2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RespondActivityTaskFailed2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>respondDecisionTaskCompleted2(request: Operations.RespondDecisionTaskCompleted2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RespondDecisionTaskCompleted2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed. The decisions argument specifies the list of decisions made while processing the task. A DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the event in the workflow execution history. Access Control If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.respondDecisionTaskCompleted2({
    xAmzTarget: XAmzTarget14.SimpleWorkflowServiceRespondDecisionTaskCompleted,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RespondDecisionTaskCompleted2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .respondDecisionTaskCompleted2({
    xAmzTarget: XAmzTarget14.SimpleWorkflowServiceRespondDecisionTaskCompleted,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget14](src/models/xamz-target14.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.respondDecisionTaskCompleted2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RespondDecisionTaskCompleted2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.respondDecisionTaskCompleted2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RespondDecisionTaskCompleted2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signalWorkflowExecution2(request: Operations.SignalWorkflowExecution2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.SignalWorkflowExecution2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided). If a runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain. If the specified workflow execution isn't open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.signalWorkflowExecution2({
    xAmzTarget: XAmzTarget15.SimpleWorkflowServiceSignalWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.SignalWorkflowExecution2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .signalWorkflowExecution2({ xAmzTarget: XAmzTarget15.SimpleWorkflowServiceSignalWorkflowExecution })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget15](src/models/xamz-target15.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.signalWorkflowExecution2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.SignalWorkflowExecution2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.signalWorkflowExecution2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.SignalWorkflowExecution2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>terminateWorkflowExecution2(request: Operations.TerminateWorkflowExecution2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.TerminateWorkflowExecution2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution. If the identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified con

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.terminateWorkflowExecution2({
    xAmzTarget: XAmzTarget16.SimpleWorkflowServiceTerminateWorkflowExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.TerminateWorkflowExecution2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .terminateWorkflowExecution2({ xAmzTarget: XAmzTarget16.SimpleWorkflowServiceTerminateWorkflowExecution })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget16](src/models/xamz-target16.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.terminateWorkflowExecution2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.TerminateWorkflowExecution2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.terminateWorkflowExecution2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.TerminateWorkflowExecution2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>undeprecateActivityType2(request: Operations.UndeprecateActivityType2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UndeprecateActivityType2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can create new tasks of that activity type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.undeprecateActivityType2({
    xAmzTarget: XAmzTarget17.SimpleWorkflowServiceUndeprecateActivityType,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UndeprecateActivityType2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .undeprecateActivityType2({ xAmzTarget: XAmzTarget17.SimpleWorkflowServiceUndeprecateActivityType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget17](src/models/xamz-target17.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.undeprecateActivityType2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UndeprecateActivityType2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.undeprecateActivityType2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UndeprecateActivityType2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>undeprecateDomain2(request: Operations.UndeprecateDomain2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UndeprecateDomain2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.undeprecateDomain2({
    xAmzTarget: XAmzTarget18.SimpleWorkflowServiceUndeprecateDomain,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UndeprecateDomain2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .undeprecateDomain2({ xAmzTarget: XAmzTarget18.SimpleWorkflowServiceUndeprecateDomain })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget18](src/models/xamz-target18.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.undeprecateDomain2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UndeprecateDomain2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.undeprecateDomain2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UndeprecateDomain2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>undeprecateWorkflowType2(request: Operations.UndeprecateWorkflowType2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UndeprecateWorkflowType2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can create new executions of that type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.undeprecateWorkflowType2({
    xAmzTarget: XAmzTarget19.SimpleWorkflowServiceUndeprecateWorkflowType,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UndeprecateWorkflowType2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .undeprecateWorkflowType2({ xAmzTarget: XAmzTarget19.SimpleWorkflowServiceUndeprecateWorkflowType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget19](src/models/xamz-target19.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.undeprecateWorkflowType2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UndeprecateWorkflowType2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.undeprecateWorkflowType2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UndeprecateWorkflowType2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSwfError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

