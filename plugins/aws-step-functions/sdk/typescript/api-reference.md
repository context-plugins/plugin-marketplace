# Reference

> Source: [AwsStepFunctionsClient](src/client.ts)

## AwsStepFunctions

> Source: [AwsStepFunctions](src/resources/aws-step-functions.ts)

<details>
<summary><code>createActivity(request: AwsStepFunctions.CreateActivityRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.CreateActivityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateActivity's idempotency check is based on the activity name. If a following request has different tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.createActivity({ xAmzTarget: XAmzTarget.AwsStepFunctionsCreateActivity });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.CreateActivityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .createActivity({ xAmzTarget: XAmzTarget.AwsStepFunctionsCreateActivity })
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

**Direct**: `await client.awsStepFunctions.createActivity(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.CreateActivityError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.createActivity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.CreateActivityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStateMachine(request: AwsStepFunctions.CreateStateMachineRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.CreateStateMachineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a state machine. A state machine consists of a collection of states that can do work (Task states), determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true, it publishes version 1 as the first revision of the state machine. For additional control over security, you can encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a State Machine. The execution history and state machine definition will be encrypted with the key applied to the State Machine. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.createStateMachine({
    xAmzTarget: XAmzTarget4.AwsStepFunctionsCreateStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.CreateStateMachineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .createStateMachine({ xAmzTarget: XAmzTarget4.AwsStepFunctionsCreateStateMachine })
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

**Direct**: `await client.awsStepFunctions.createStateMachine(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.CreateStateMachineError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.createStateMachine(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.CreateStateMachineError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteActivity(request: AwsStepFunctions.DeleteActivityRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.DeleteActivityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an activity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.deleteActivity({ xAmzTarget: XAmzTarget1.AwsStepFunctionsDeleteActivity });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.DeleteActivityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .deleteActivity({ xAmzTarget: XAmzTarget1.AwsStepFunctionsDeleteActivity })
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

**Direct**: `await client.awsStepFunctions.deleteActivity(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.DeleteActivityError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.deleteActivity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.DeleteActivityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStateMachine(request: AwsStepFunctions.DeleteStateMachineRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.DeleteStateMachineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in less than a minute). 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.deleteStateMachine({
    xAmzTarget: XAmzTarget5.AwsStepFunctionsDeleteStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.DeleteStateMachineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .deleteStateMachine({ xAmzTarget: XAmzTarget5.AwsStepFunctionsDeleteStateMachine })
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

**Direct**: `await client.awsStepFunctions.deleteStateMachine(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.DeleteStateMachineError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.deleteStateMachine(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.DeleteStateMachineError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeActivity(request: AwsStepFunctions.DescribeActivityRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.DescribeActivityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.describeActivity({
    xAmzTarget: XAmzTarget2.AwsStepFunctionsDescribeActivity,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.DescribeActivityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .describeActivity({ xAmzTarget: XAmzTarget2.AwsStepFunctionsDescribeActivity })
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

**Direct**: `await client.awsStepFunctions.describeActivity(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.DescribeActivityError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.describeActivity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.DescribeActivityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeExecution(request: AwsStepFunctions.DescribeExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.DescribeExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you can use this API action to return information about the redrives of that execution. In addition, you can use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run. If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map Run dispatched them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.describeExecution({
    xAmzTarget: XAmzTarget10.AwsStepFunctionsDescribeExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.DescribeExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .describeExecution({ xAmzTarget: XAmzTarget10.AwsStepFunctionsDescribeExecution })
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

**Direct**: `await client.awsStepFunctions.describeExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.DescribeExecutionError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.describeExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.DescribeExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeMapRun(request: AwsStepFunctions.DescribeMapRunRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.DescribeMapRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run, this API action also returns information about the redrives of that Map Run. For more information, see Examining Map Run in the Step Functions Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.describeMapRun({ xAmzTarget: XAmzTarget14.AwsStepFunctionsDescribeMapRun });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.DescribeMapRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .describeMapRun({ xAmzTarget: XAmzTarget14.AwsStepFunctionsDescribeMapRun })
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

**Direct**: `await client.awsStepFunctions.describeMapRun(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.DescribeMapRunError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.describeMapRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.DescribeMapRunError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeStateMachine(request: AwsStepFunctions.DescribeStateMachineRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.DescribeStateMachineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if the stateMachineArn you specify is a state machine version ARN. This operat

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.describeStateMachine({
    xAmzTarget: XAmzTarget6.AwsStepFunctionsDescribeStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.DescribeStateMachineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .describeStateMachine({ xAmzTarget: XAmzTarget6.AwsStepFunctionsDescribeStateMachine })
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

**Direct**: `await client.awsStepFunctions.describeStateMachine(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.DescribeStateMachineError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.describeStateMachine(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.DescribeStateMachineError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeStateMachineForExecution(request: AwsStepFunctions.DescribeStateMachineForExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.DescribeStateMachineForExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.describeStateMachineForExecution({
    xAmzTarget: XAmzTarget7.AwsStepFunctionsDescribeStateMachineForExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.DescribeStateMachineForExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .describeStateMachineForExecution({
    xAmzTarget: XAmzTarget7.AwsStepFunctionsDescribeStateMachineForExecution,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctions.describeStateMachineForExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.DescribeStateMachineForExecutionError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.describeStateMachineForExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.DescribeStateMachineForExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getActivityTask(request: AwsStepFunctions.GetActivityTaskRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.GetActivityTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a taskToken with a null string. Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request). Polling with GetActivityTask can cause latency in some implementations. See Avoid Latency When Polling for Activity Tasks in the Step Functions Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.getActivityTask({ xAmzTarget: XAmzTarget17.AwsStepFunctionsGetActivityTask });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.GetActivityTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .getActivityTask({ xAmzTarget: XAmzTarget17.AwsStepFunctionsGetActivityTask })
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

**Direct**: `await client.awsStepFunctions.getActivityTask(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.GetActivityTaskError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.getActivityTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.GetActivityTaskError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExecutionHistory(request: AwsStepFunctions.GetExecutionHistoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.GetExecutionHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This API action is not supported by EXPRESS state machines.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.getExecutionHistory({
    xAmzTarget: XAmzTarget18.AwsStepFunctionsGetExecutionHistory,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.GetExecutionHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .getExecutionHistory({ xAmzTarget: XAmzTarget18.AwsStepFunctionsGetExecutionHistory })
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

**Direct**: `await client.awsStepFunctions.getExecutionHistory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.GetExecutionHistoryError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.getExecutionHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.GetExecutionHistoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listActivities(request: AwsStepFunctions.ListActivitiesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.ListActivitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the existing activities. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.listActivities({ xAmzTarget: XAmzTarget3.AwsStepFunctionsListActivities });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.ListActivitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .listActivities({ xAmzTarget: XAmzTarget3.AwsStepFunctionsListActivities })
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

**Direct**: `await client.awsStepFunctions.listActivities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.ListActivitiesError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.listActivities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.ListActivitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExecutions(request: AwsStepFunctions.ListExecutionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.ListExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted by time, with the most recent execution first. Running executions are sorted by their startDate or redriveDate, and other executions are sorted by their stopDate. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines. However, you may list EXPRESS children started by a map

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.listExecutions({ xAmzTarget: XAmzTarget11.AwsStepFunctionsListExecutions });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.ListExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .listExecutions({ xAmzTarget: XAmzTarget11.AwsStepFunctionsListExecutions })
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

**Direct**: `await client.awsStepFunctions.listExecutions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.ListExecutionsError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.listExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.ListExecutionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMapRuns(request: AwsStepFunctions.ListMapRunsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.ListMapRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call DescribeMapRun to obtain more information, if needed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.listMapRuns({ xAmzTarget: XAmzTarget15.AwsStepFunctionsListMapRuns });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.ListMapRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .listMapRuns({ xAmzTarget: XAmzTarget15.AwsStepFunctionsListMapRuns })
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

**Direct**: `await client.awsStepFunctions.listMapRuns(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.ListMapRunsError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.listMapRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.ListMapRunsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStateMachines(request: AwsStepFunctions.ListStateMachinesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.ListStateMachinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the existing state machines. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.listStateMachines({
    xAmzTarget: XAmzTarget8.AwsStepFunctionsListStateMachines,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.ListStateMachinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .listStateMachines({ xAmzTarget: XAmzTarget8.AwsStepFunctionsListStateMachines })
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

**Direct**: `await client.awsStepFunctions.listStateMachines(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.ListStateMachinesError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.listStateMachines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.ListStateMachinesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource(request: AwsStepFunctions.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.listTagsForResource({
    xAmzTarget: XAmzTarget19.AwsStepFunctionsListTagsForResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .listTagsForResource({ xAmzTarget: XAmzTarget19.AwsStepFunctionsListTagsForResource })
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

**Direct**: `await client.awsStepFunctions.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.ListTagsForResourceError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendTaskFailure(request: AwsStepFunctions.SendTaskFailureRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.SendTaskFailureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken failed. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.sendTaskFailure({ xAmzTarget: XAmzTarget20.AwsStepFunctionsSendTaskFailure });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.SendTaskFailureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .sendTaskFailure({ xAmzTarget: XAmzTarget20.AwsStepFunctionsSendTaskFailure })
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

**Direct**: `await client.awsStepFunctions.sendTaskFailure(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.SendTaskFailureError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.sendTaskFailure(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.SendTaskFailureError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendTaskHeartbeat(request: AwsStepFunctions.SendTaskHeartbeatRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.SendTaskHeartbeatError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers and Task states using the callback pattern, and optionally Task states using the job run pattern to report to Step Functions that the task represented by the specified taskToken is still making progress. This action resets the Heartbeat clock. The Heartbeat threshold is specified in the state machine's Amazon States Language definition (HeartbeatSeconds). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an ActivityTimedOut entry for activities, or a TaskTimedOut entry for tasks using the job run or callback pattern. The Timeout of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of SendTaskHeartbeat requests received. Use HeartbeatSeconds to configure the timeout interval for heartbeats.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.sendTaskHeartbeat({
    xAmzTarget: XAmzTarget21.AwsStepFunctionsSendTaskHeartbeat,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.SendTaskHeartbeatError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .sendTaskHeartbeat({ xAmzTarget: XAmzTarget21.AwsStepFunctionsSendTaskHeartbeat })
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

**Direct**: `await client.awsStepFunctions.sendTaskHeartbeat(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.SendTaskHeartbeatError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.sendTaskHeartbeat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.SendTaskHeartbeatError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendTaskSuccess(request: AwsStepFunctions.SendTaskSuccessRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.SendTaskSuccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken completed successfully.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.sendTaskSuccess({ xAmzTarget: XAmzTarget22.AwsStepFunctionsSendTaskSuccess });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.SendTaskSuccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .sendTaskSuccess({ xAmzTarget: XAmzTarget22.AwsStepFunctionsSendTaskSuccess })
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

**Direct**: `await client.awsStepFunctions.sendTaskSuccess(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.SendTaskSuccessError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.sendTaskSuccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.SendTaskSuccessError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startExecution(request: AwsStepFunctions.StartExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.StartExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a state machine execution. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn::states:::stateMachine: If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution. To start executions of a state machine version, call StartExecution and provide 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.startExecution({ xAmzTarget: XAmzTarget12.AwsStepFunctionsStartExecution });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.StartExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .startExecution({ xAmzTarget: XAmzTarget12.AwsStepFunctionsStartExecution })
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

**Direct**: `await client.awsStepFunctions.startExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.StartExecutionError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.startExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.StartExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSyncExecution(request: AwsStepFunctions.StartSyncExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.StartSyncExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.startSyncExecution({
    xAmzTarget: XAmzTarget23.AwsStepFunctionsStartSyncExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.StartSyncExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .startSyncExecution({ xAmzTarget: XAmzTarget23.AwsStepFunctionsStartSyncExecution })
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

**Direct**: `await client.awsStepFunctions.startSyncExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.StartSyncExecutionError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.startSyncExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.StartSyncExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopExecution(request: AwsStepFunctions.StopExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.StopExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an execution. This API action is not supported by EXPRESS state machines. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can stop an execution without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.stopExecution({ xAmzTarget: XAmzTarget13.AwsStepFunctionsStopExecution });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.StopExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .stopExecution({ xAmzTarget: XAmzTarget13.AwsStepFunctionsStopExecution })
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

**Direct**: `await client.awsStepFunctions.stopExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.StopExecutionError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.stopExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.StopExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: AwsStepFunctions.TagResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.tagResource({ xAmzTarget: XAmzTarget24.AwsStepFunctionsTagResource });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .tagResource({ xAmzTarget: XAmzTarget24.AwsStepFunctionsTagResource })
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

**Direct**: `await client.awsStepFunctions.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.TagResourceError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: AwsStepFunctions.UntagResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a tag from a Step Functions resource

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.untagResource({ xAmzTarget: XAmzTarget25.AwsStepFunctionsUntagResource });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .untagResource({ xAmzTarget: XAmzTarget25.AwsStepFunctionsUntagResource })
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

**Direct**: `await client.awsStepFunctions.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.UntagResourceError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMapRun(request: AwsStepFunctions.UpdateMapRunRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.UpdateMapRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.updateMapRun({ xAmzTarget: XAmzTarget16.AwsStepFunctionsUpdateMapRun });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.UpdateMapRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .updateMapRun({ xAmzTarget: XAmzTarget16.AwsStepFunctionsUpdateMapRun })
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

**Direct**: `await client.awsStepFunctions.updateMapRun(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.UpdateMapRunError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.updateMapRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.UpdateMapRunError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStateMachine(request: AwsStepFunctions.UpdateStateMachineRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctions.UpdateStateMachineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctions.updateStateMachine({
    xAmzTarget: XAmzTarget9.AwsStepFunctionsUpdateStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctions.UpdateStateMachineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctions
  .updateStateMachine({ xAmzTarget: XAmzTarget9.AwsStepFunctionsUpdateStateMachine })
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

**Direct**: `await client.awsStepFunctions.updateStateMachine(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctions.UpdateStateMachineError](src/resources/aws-step-functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctions.updateStateMachine(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctions.UpdateStateMachineError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat](src/resources/aws-step-functions-xamz-target-awsstepfunctions-createstat.ts)

<details>
<summary><code>createStateMachineAlias(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for a state machine that points to one or two versions of the same state machine. You can set your application to call StartExecution with an alias and update the version the alias uses without changing the client's code. You can also map an alias to split StartExecution requests between two versions of a state machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify. To create an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You can create up to 100 aliases for each state machine. You must delete unused aliases using the DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate r

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.createStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi.AwsStepFunctionsCreateStateMachineAlias,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat
  .createStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi.AwsStepFunctionsCreateStateMachineAlias,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi](src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-createstat-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.createStateMachineAlias(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-createstat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.createStateMachineAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat](src/resources/aws-step-functions-xamz-target-awsstepfunctions-deletestat.ts)

<details>
<summary><code>deleteStateMachineAlias(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions. When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.deleteStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AwsStepFunctionsDeleteStateMachineAlias,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat
  .deleteStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AwsStepFunctionsDeleteStateMachineAlias,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi](src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-deletestat-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.deleteStateMachineAlias(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-deletestat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.deleteStateMachineAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStateMachineVersion(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine version. After you delete a version, you can't call StartExecution using that version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate its in-progress executions. You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.deleteStateMachineVersion({
    xAmzTarget:
      XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AwsStepFunctionsDeleteStateMachineVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat
  .deleteStateMachineVersion({
    xAmzTarget:
      XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AwsStepFunctionsDeleteStateMachineVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi](src/models/xamz-target1-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-deletestat-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.deleteStateMachineVersion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-deletestat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.deleteStateMachineVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest](src/resources/aws-step-functions-xamz-target-awsstepfunctions-describest.ts)

<details>
<summary><code>describeStateMachineAlias(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about a state machine alias. Related operations: CreateStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.describeStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi.AwsStepFunctionsDescribeStateMachineAlias,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest
  .describeStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi.AwsStepFunctionsDescribeStateMachineAlias,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi](src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-describest-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.describeStateMachineAlias(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-describest.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.describeStateMachineAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem](src/resources/aws-step-functions-xamz-target-awsstepfunctions-liststatem.ts)

<details>
<summary><code>listStateMachineAliases(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.listStateMachineAliases({
    xAmzTarget:
      XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AwsStepFunctionsListStateMachineAliases,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem
  .listStateMachineAliases({
    xAmzTarget:
      XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AwsStepFunctionsListStateMachineAliases,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi](src/models/xamz-target1-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-liststatem-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.listStateMachineAliases(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-liststatem.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.listStateMachineAliases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStateMachineVersions(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in descending order of the version creation time. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: PublishStateMachineVersion DeleteStateMachineVersion

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.listStateMachineVersions({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AwsStepFunctionsListStateMachineVersions,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem
  .listStateMachineVersions({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AwsStepFunctionsListStateMachineVersions,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi](src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-liststatem-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.listStateMachineVersions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-liststatem.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.listStateMachineVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta](src/resources/aws-step-functions-xamz-target-awsstepfunctions-publishsta.ts)

<details>
<summary><code>publishStateMachineVersion(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.publishStateMachineVersion({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AwsStepFunctionsPublishStateMachineVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta
  .publishStateMachineVersion({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AwsStepFunctionsPublishStateMachineVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi](src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-publishsta-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.publishStateMachineVersion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-publishsta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.publishStateMachineVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat](src/resources/aws-step-functions-xamz-target-awsstepfunctions-updatestat.ts)

<details>
<summary><code>updateStateMachineAlias(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.UpdateStateMachineAliasRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.UpdateStateMachineAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing state machine alias by modifying its description or routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests made within a few seconds use the latest alias configuration. Executions started immediately after calling UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.updateStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi.AwsStepFunctionsUpdateStateMachineAlias,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.UpdateStateMachineAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat
  .updateStateMachineAlias({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi.AwsStepFunctionsUpdateStateMachineAlias,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi](src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-updatestat-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.updateStateMachineAlias(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.UpdateStateMachineAliasError](src/resources/aws-step-functions-xamz-target-awsstepfunctions-updatestat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.updateStateMachineAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.UpdateStateMachineAliasError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>publishStateMachineVersion2(request: Operations.PublishStateMachineVersion2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.PublishStateMachineVersion2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.publishStateMachineVersion2({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AwsStepFunctionsPublishStateMachineVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.PublishStateMachineVersion2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .publishStateMachineVersion2({
    xAmzTarget:
      XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AwsStepFunctionsPublishStateMachineVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi](src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-publishsta-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.publishStateMachineVersion2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.PublishStateMachineVersion2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.publishStateMachineVersion2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.PublishStateMachineVersion2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redriveExecution(request: Operations.RedriveExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RedriveExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt. For workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines. However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redrivin

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.redriveExecution({
    xAmzTarget: XAmzTarget1AwsStepFunctionsOperationsApi.AwsStepFunctionsRedriveExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RedriveExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .redriveExecution({ xAmzTarget: XAmzTarget1AwsStepFunctionsOperationsApi.AwsStepFunctionsRedriveExecution })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsStepFunctionsOperationsApi](src/models/xamz-target1-aws-step-functions-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.redriveExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RedriveExecutionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.redriveExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RedriveExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testState(request: Operations.TestStateRequest, options?: RequestOptions): ApiPromise&lt;undefined, Operations.TestStateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts the definition of a single state and executes it. You can test a state without creating a state machine or updating an existing state machine. Using this API, you can test the following: A state's input and output processing data flow An Amazon Web Services service integration request and response An HTTP Task request and response You can call this API on only one state at a time. The states that you can test include the following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role which must contain the required IAM permissions for the resources your state is accessing. For information about the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error. TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken service integration patterns, Parallel, or Map states.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.testState({
    xAmzTarget: XAmzTarget2AwsStepFunctionsOperationsApi.AwsStepFunctionsTestState,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.TestStateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .testState({ xAmzTarget: XAmzTarget2AwsStepFunctionsOperationsApi.AwsStepFunctionsTestState })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsStepFunctionsOperationsApi](src/models/xamz-target2-aws-step-functions-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.testState(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.TestStateError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.testState(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.TestStateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>validateStateMachineDefinition(request: Operations.ValidateStateMachineDefinitionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ValidateStateMachineDefinitionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based, structured language. You can validate that a state machine definition is correct without creating a state machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code review or Continuous Integration (CI) process to check state machine definitions before starting deployments. Run validation from a Git pre-commit hook to verify the definition before committing to your source repository. Validation will look for problems in your state machine definition and return a result and a list of diagnostic elements. The result value will be OK when your workflow definition can be successfully created or updated. Note the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL when the workflow definition contains errors that would prevent you from creating or updating your state machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, a

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.validateStateMachineDefinition({
    xAmzTarget: XAmzTarget3AwsStepFunctionsOperationsApi.AwsStepFunctionsValidateStateMachineDefinition,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ValidateStateMachineDefinitionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .validateStateMachineDefinition({
    xAmzTarget: XAmzTarget3AwsStepFunctionsOperationsApi.AwsStepFunctionsValidateStateMachineDefinition,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsStepFunctionsOperationsApi](src/models/xamz-target3-aws-step-functions-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.validateStateMachineDefinition(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ValidateStateMachineDefinitionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.validateStateMachineDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ValidateStateMachineDefinitionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StateMachines

> Source: [StateMachines](src/resources/state-machines.ts)

<details>
<summary><code>createStateMachine2(request: StateMachines.CreateStateMachine2Request, options?: RequestOptions): ApiPromise&lt;undefined, StateMachines.CreateStateMachine2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a state machine. A state machine consists of a collection of states that can do work (Task states), determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true, it publishes version 1 as the first revision of the state machine. For additional control over security, you can encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a State Machine. The execution history and state machine definition will be encrypted with the key applied to the State Machine. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stateMachines.createStateMachine2({
    xAmzTarget: XAmzTargetAwsStepFunctionsStateMachinesApi.AwsStepFunctionsCreateStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type StateMachines.CreateStateMachine2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stateMachines
  .createStateMachine2({
    xAmzTarget: XAmzTargetAwsStepFunctionsStateMachinesApi.AwsStepFunctionsCreateStateMachine,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStepFunctionsStateMachinesApi](src/models/xamz-target-aws-step-functions-state-machines-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stateMachines.createStateMachine2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StateMachines.CreateStateMachine2Error](src/resources/state-machines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stateMachines.createStateMachine2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StateMachines.CreateStateMachine2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStateMachine2(request: StateMachines.DeleteStateMachine2Request, options?: RequestOptions): ApiPromise&lt;undefined, StateMachines.DeleteStateMachine2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in less than a minute). 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stateMachines.deleteStateMachine2({
    xAmzTarget: XAmzTarget1AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDeleteStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type StateMachines.DeleteStateMachine2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stateMachines
  .deleteStateMachine2({
    xAmzTarget: XAmzTarget1AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDeleteStateMachine,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsStepFunctionsStateMachinesApi](src/models/xamz-target1-aws-step-functions-state-machines-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stateMachines.deleteStateMachine2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StateMachines.DeleteStateMachine2Error](src/resources/state-machines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stateMachines.deleteStateMachine2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StateMachines.DeleteStateMachine2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeStateMachine2(request: StateMachines.DescribeStateMachine2Request, options?: RequestOptions): ApiPromise&lt;undefined, StateMachines.DescribeStateMachine2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if the stateMachineArn you specify is a state machine version ARN. This operat

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stateMachines.describeStateMachine2({
    xAmzTarget: XAmzTarget2AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDescribeStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type StateMachines.DescribeStateMachine2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stateMachines
  .describeStateMachine2({
    xAmzTarget: XAmzTarget2AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDescribeStateMachine,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsStepFunctionsStateMachinesApi](src/models/xamz-target2-aws-step-functions-state-machines-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stateMachines.describeStateMachine2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StateMachines.DescribeStateMachine2Error](src/resources/state-machines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stateMachines.describeStateMachine2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StateMachines.DescribeStateMachine2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeStateMachineForExecution2(request: StateMachines.DescribeStateMachineForExecution2Request, options?: RequestOptions): ApiPromise&lt;undefined, StateMachines.DescribeStateMachineForExecution2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stateMachines.describeStateMachineForExecution2({
    xAmzTarget: XAmzTarget3AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDescribeStateMachineForExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type StateMachines.DescribeStateMachineForExecution2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stateMachines
  .describeStateMachineForExecution2({
    xAmzTarget: XAmzTarget3AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDescribeStateMachineForExecution,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsStepFunctionsStateMachinesApi](src/models/xamz-target3-aws-step-functions-state-machines-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stateMachines.describeStateMachineForExecution2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StateMachines.DescribeStateMachineForExecution2Error](src/resources/state-machines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stateMachines.describeStateMachineForExecution2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StateMachines.DescribeStateMachineForExecution2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStateMachines2(request: StateMachines.ListStateMachines2Request, options?: RequestOptions): ApiPromise&lt;undefined, StateMachines.ListStateMachines2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the existing state machines. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stateMachines.listStateMachines2({
    xAmzTarget: XAmzTarget4AwsStepFunctionsStateMachinesApi.AwsStepFunctionsListStateMachines,
  });
} catch (err) {
  // TODO: Handle 'err' of type StateMachines.ListStateMachines2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stateMachines
  .listStateMachines2({
    xAmzTarget: XAmzTarget4AwsStepFunctionsStateMachinesApi.AwsStepFunctionsListStateMachines,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsStepFunctionsStateMachinesApi](src/models/xamz-target4-aws-step-functions-state-machines-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stateMachines.listStateMachines2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StateMachines.ListStateMachines2Error](src/resources/state-machines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stateMachines.listStateMachines2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StateMachines.ListStateMachines2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStateMachine2(request: StateMachines.UpdateStateMachine2Request, options?: RequestOptions): ApiPromise&lt;undefined, StateMachines.UpdateStateMachine2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stateMachines.updateStateMachine2({
    xAmzTarget: XAmzTarget5AwsStepFunctionsStateMachinesApi.AwsStepFunctionsUpdateStateMachine,
  });
} catch (err) {
  // TODO: Handle 'err' of type StateMachines.UpdateStateMachine2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stateMachines
  .updateStateMachine2({
    xAmzTarget: XAmzTarget5AwsStepFunctionsStateMachinesApi.AwsStepFunctionsUpdateStateMachine,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5AwsStepFunctionsStateMachinesApi](src/models/xamz-target5-aws-step-functions-state-machines-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stateMachines.updateStateMachine2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StateMachines.UpdateStateMachine2Error](src/resources/state-machines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stateMachines.updateStateMachine2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StateMachines.UpdateStateMachine2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStepFunctionsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

