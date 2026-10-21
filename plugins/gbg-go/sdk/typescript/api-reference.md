# Reference

> Source: [GbgGoNextGenFlowCaptainApiClient](src/client.ts)

## Health

> Source: [Health](src/resources/health.ts)

<details>
<summary><code>health(options?: RequestOptions): ApiPromise&lt;JourneyHealthResponse, Health.HealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain the flow-captain health status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.health();
  // TODO: Handle 'response' of type JourneyHealthResponse
} catch (err) {
  // TODO: Handle 'err' of type Health.HealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.health.health().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyHealthResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.health()`

- **OnSuccess**: <code>[JourneyHealthResponse](src/models/journey-health-response.ts)</code>
- **OnError**: throws <code>[Health.HealthError](src/resources/health.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.health.health().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyHealthResponse, Health.HealthError&gt;</code>, with `result.value` of type <code>[JourneyHealthResponse](src/models/journey-health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerApIs

> Source: [CustomerApIs](src/resources/customer-ap-is.ts)

<details>
<summary><code>addDevice(request: CustomerApIs.AddDeviceRequest, options?: RequestOptions): ApiPromise&lt;JourneyDeviceStartResponse, CustomerApIs.AddDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Connect Secret

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerApIs.addDevice({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", scope: [Scope.Mobile] },
  });
  // TODO: Handle 'response' of type JourneyDeviceStartResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerApIs.AddDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerApIs.addDevice({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", scope: [Scope.Mobile] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyDeviceStartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyDeviceStartRequest](src/models/journey-device-start-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerApIs.addDevice(request)`

- **OnSuccess**: <code>[JourneyDeviceStartResponse](src/models/journey-device-start-response.ts)</code>
- **OnError**: throws <code>[CustomerApIs.AddDeviceError](src/resources/customer-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerApIs.addDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyDeviceStartResponse, CustomerApIs.AddDeviceError&gt;</code>, with `result.value` of type <code>[JourneyDeviceStartResponse](src/models/journey-device-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInstance(request: CustomerApIs.DeleteInstanceRequest, options?: RequestOptions): ApiPromise&lt;JourneyStateDeleteResponse, CustomerApIs.DeleteInstanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete instance

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerApIs.deleteInstance({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
  });
  // TODO: Handle 'response' of type JourneyStateDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerApIs.DeleteInstanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerApIs.deleteInstance({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyStateDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyStateDeleteRequest](src/models/journey-state-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerApIs.deleteInstance(request)`

- **OnSuccess**: <code>[JourneyStateDeleteResponse](src/models/journey-state-delete-response.ts)</code>
- **OnError**: throws <code>[CustomerApIs.DeleteInstanceError](src/resources/customer-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerApIs.deleteInstance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyStateDeleteResponse, CustomerApIs.DeleteInstanceError&gt;</code>, with `result.value` of type <code>[JourneyStateDeleteResponse](src/models/journey-state-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJourneyState(request: CustomerApIs.GetJourneyStateRequest, options?: RequestOptions): ApiPromise&lt;JourneyStateFetchResponse, CustomerApIs.GetJourneyStateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get State Data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerApIs.getJourneyState({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", filterKeys: ["/.*/"] },
  });
  // TODO: Handle 'response' of type JourneyStateFetchResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerApIs.GetJourneyStateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerApIs.getJourneyState({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", filterKeys: ["/.*/"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyStateFetchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyStateFetchRequest](src/models/journey-state-fetch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerApIs.getJourneyState(request)`

- **OnSuccess**: <code>[JourneyStateFetchResponse](src/models/journey-state-fetch-response.ts)</code>
- **OnError**: throws <code>[CustomerApIs.GetJourneyStateError](src/resources/customer-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerApIs.getJourneyState(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyStateFetchResponse, CustomerApIs.GetJourneyStateError&gt;</code>, with `result.value` of type <code>[JourneyStateFetchResponse](src/models/journey-state-fetch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskSchema(request: CustomerApIs.GetTaskSchemaRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskSchemaResponse, CustomerApIs.GetTaskSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Task Schema

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerApIs.getTaskSchema({ body: { taskId: "TkoviRO58Q8R7qPnAkLAqBAT" } });
  // TODO: Handle 'response' of type JourneyTaskSchemaResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerApIs.GetTaskSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerApIs.getTaskSchema({
  body: { taskId: "TkoviRO58Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskSchemaResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskSchemaRequest](src/models/journey-task-schema-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerApIs.getTaskSchema(request)`

- **OnSuccess**: <code>[JourneyTaskSchemaResponse](src/models/journey-task-schema-response.ts)</code>
- **OnError**: throws <code>[CustomerApIs.GetTaskSchemaError](src/resources/customer-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerApIs.getTaskSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskSchemaResponse, CustomerApIs.GetTaskSchemaError&gt;</code>, with `result.value` of type <code>[JourneyTaskSchemaResponse](src/models/journey-task-schema-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksSchema(request: CustomerApIs.GetTasksSchemaRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskListSchemaResponse, CustomerApIs.GetTasksSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Tasks Schema

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerApIs.getTasksSchema({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
  });
  // TODO: Handle 'response' of type JourneyTaskListSchemaResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerApIs.GetTasksSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerApIs.getTasksSchema({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskListSchemaResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskListSchemaRequest](src/models/journey-task-list-schema-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerApIs.getTasksSchema(request)`

- **OnSuccess**: <code>[JourneyTaskListSchemaResponse](src/models/journey-task-list-schema-response.ts)</code>
- **OnError**: throws <code>[CustomerApIs.GetTasksSchemaError](src/resources/customer-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerApIs.getTasksSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskListSchemaResponse, CustomerApIs.GetTasksSchemaError&gt;</code>, with `result.value` of type <code>[JourneyTaskListSchemaResponse](src/models/journey-task-list-schema-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startJourney(request: CustomerApIs.StartJourneyRequest, options?: RequestOptions): ApiPromise&lt;JourneyStartResponse, CustomerApIs.StartJourneyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start Journey

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerApIs.startJourney();
  // TODO: Handle 'response' of type JourneyStartResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerApIs.StartJourneyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerApIs.startJourney().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyStartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyStartRequest](src/models/journey-start-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerApIs.startJourney(request)`

- **OnSuccess**: <code>[JourneyStartResponse](src/models/journey-start-response.ts)</code>
- **OnError**: throws <code>[CustomerApIs.StartJourneyError](src/resources/customer-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerApIs.startJourney(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyStartResponse, CustomerApIs.StartJourneyError&gt;</code>, with `result.value` of type <code>[JourneyStartResponse](src/models/journey-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FlowDispatchService

> Source: [FlowDispatchService](src/resources/flow-dispatch-service.ts)

<details>
<summary><code>getJourneyState(request: FlowDispatchService.GetJourneyStateRequest, options?: RequestOptions): ApiPromise&lt;JourneyStateFetchResponse, FlowDispatchService.GetJourneyStateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get State Data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flowDispatchService.getJourneyState({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", filterKeys: ["/.*/"] },
  });
  // TODO: Handle 'response' of type JourneyStateFetchResponse
} catch (err) {
  // TODO: Handle 'err' of type FlowDispatchService.GetJourneyStateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.flowDispatchService.getJourneyState({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", filterKeys: ["/.*/"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyStateFetchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyStateFetchRequest](src/models/journey-state-fetch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flowDispatchService.getJourneyState(request)`

- **OnSuccess**: <code>[JourneyStateFetchResponse](src/models/journey-state-fetch-response.ts)</code>
- **OnError**: throws <code>[FlowDispatchService.GetJourneyStateError](src/resources/flow-dispatch-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.flowDispatchService.getJourneyState(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyStateFetchResponse, FlowDispatchService.GetJourneyStateError&gt;</code>, with `result.value` of type <code>[JourneyStateFetchResponse](src/models/journey-state-fetch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startJourney(request: FlowDispatchService.StartJourneyRequest, options?: RequestOptions): ApiPromise&lt;JourneyStartResponse, FlowDispatchService.StartJourneyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start Journey

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flowDispatchService.startJourney();
  // TODO: Handle 'response' of type JourneyStartResponse
} catch (err) {
  // TODO: Handle 'err' of type FlowDispatchService.StartJourneyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.flowDispatchService.startJourney().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyStartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyStartRequest](src/models/journey-start-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flowDispatchService.startJourney(request)`

- **OnSuccess**: <code>[JourneyStartResponse](src/models/journey-start-response.ts)</code>
- **OnError**: throws <code>[FlowDispatchService.StartJourneyError](src/resources/flow-dispatch-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.flowDispatchService.startJourney(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyStartResponse, FlowDispatchService.StartJourneyError&gt;</code>, with `result.value` of type <code>[JourneyStartResponse](src/models/journey-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OneTimeTokenService

> Source: [OneTimeTokenService](src/resources/one-time-token-service.ts)

<details>
<summary><code>addDevice(request: OneTimeTokenService.AddDeviceRequest, options?: RequestOptions): ApiPromise&lt;JourneyDeviceStartResponse, OneTimeTokenService.AddDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Connect Secret

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oneTimeTokenService.addDevice({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", scope: [Scope.Mobile] },
  });
  // TODO: Handle 'response' of type JourneyDeviceStartResponse
} catch (err) {
  // TODO: Handle 'err' of type OneTimeTokenService.AddDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oneTimeTokenService.addDevice({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT", scope: [Scope.Mobile] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyDeviceStartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyDeviceStartRequest](src/models/journey-device-start-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oneTimeTokenService.addDevice(request)`

- **OnSuccess**: <code>[JourneyDeviceStartResponse](src/models/journey-device-start-response.ts)</code>
- **OnError**: throws <code>[OneTimeTokenService.AddDeviceError](src/resources/one-time-token-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oneTimeTokenService.addDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyDeviceStartResponse, OneTimeTokenService.AddDeviceError&gt;</code>, with `result.value` of type <code>[JourneyDeviceStartResponse](src/models/journey-device-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceConnect(request: OneTimeTokenService.DeviceConnectRequest, options?: RequestOptions): ApiPromise&lt;JourneyDeviceConnectResponse, OneTimeTokenService.DeviceConnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connect or Refresh End User Device

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oneTimeTokenService.deviceConnect({
    body: {
      connectToken: "s4FUx8Ny8ijXRtFigz3x1_8rb9bd_5ZD",
      deviceInfo: { deviceId: "exampleDeviceId123", deviceName: "deviceName", deviceType: "deviceType" },
    },
  });
  // TODO: Handle 'response' of type JourneyDeviceConnectResponse
} catch (err) {
  // TODO: Handle 'err' of type OneTimeTokenService.DeviceConnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oneTimeTokenService.deviceConnect({
  body: {
    connectToken: "s4FUx8Ny8ijXRtFigz3x1_8rb9bd_5ZD",
    deviceInfo: { deviceId: "exampleDeviceId123", deviceName: "deviceName", deviceType: "deviceType" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyDeviceConnectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyDeviceConnectRequest](src/models/journey-device-connect-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oneTimeTokenService.deviceConnect(request)`

- **OnSuccess**: <code>[JourneyDeviceConnectResponse](src/models/journey-device-connect-response.ts)</code>
- **OnError**: throws <code>[OneTimeTokenService.DeviceConnectError](src/resources/one-time-token-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oneTimeTokenService.deviceConnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyDeviceConnectResponse, OneTimeTokenService.DeviceConnectError&gt;</code>, with `result.value` of type <code>[JourneyDeviceConnectResponse](src/models/journey-device-connect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TaskService

> Source: [TaskService](src/resources/task-service.ts)

<details>
<summary><code>getTaskSchema(request: TaskService.GetTaskSchemaRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskSchemaResponse, TaskService.GetTaskSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Task Schema

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.taskService.getTaskSchema({ body: { taskId: "TkoviRO58Q8R7qPnAkLAqBAT" } });
  // TODO: Handle 'response' of type JourneyTaskSchemaResponse
} catch (err) {
  // TODO: Handle 'err' of type TaskService.GetTaskSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.taskService.getTaskSchema({
  body: { taskId: "TkoviRO58Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskSchemaResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskSchemaRequest](src/models/journey-task-schema-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.taskService.getTaskSchema(request)`

- **OnSuccess**: <code>[JourneyTaskSchemaResponse](src/models/journey-task-schema-response.ts)</code>
- **OnError**: throws <code>[TaskService.GetTaskSchemaError](src/resources/task-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.taskService.getTaskSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskSchemaResponse, TaskService.GetTaskSchemaError&gt;</code>, with `result.value` of type <code>[JourneyTaskSchemaResponse](src/models/journey-task-schema-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasks(request: TaskService.GetTasksRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskListResponse, TaskService.GetTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get End User Tasks

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.taskService.getTasks({ body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" } });
  // TODO: Handle 'response' of type JourneyTaskListResponse
} catch (err) {
  // TODO: Handle 'err' of type TaskService.GetTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.taskService.getTasks({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskListRequest](src/models/journey-task-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.taskService.getTasks(request)`

- **OnSuccess**: <code>[JourneyTaskListResponse](src/models/journey-task-list-response.ts)</code>
- **OnError**: throws <code>[TaskService.GetTasksError](src/resources/task-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.taskService.getTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskListResponse, TaskService.GetTasksError&gt;</code>, with `result.value` of type <code>[JourneyTaskListResponse](src/models/journey-task-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksSchema(request: TaskService.GetTasksSchemaRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskListSchemaResponse, TaskService.GetTasksSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Tasks Schema

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.taskService.getTasksSchema({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
  });
  // TODO: Handle 'response' of type JourneyTaskListSchemaResponse
} catch (err) {
  // TODO: Handle 'err' of type TaskService.GetTasksSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.taskService.getTasksSchema({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskListSchemaResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskListSchemaRequest](src/models/journey-task-list-schema-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.taskService.getTasksSchema(request)`

- **OnSuccess**: <code>[JourneyTaskListSchemaResponse](src/models/journey-task-list-schema-response.ts)</code>
- **OnError**: throws <code>[TaskService.GetTasksSchemaError](src/resources/task-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.taskService.getTasksSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskListSchemaResponse, TaskService.GetTasksSchemaError&gt;</code>, with `result.value` of type <code>[JourneyTaskListSchemaResponse](src/models/journey-task-list-schema-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTask(request: TaskService.UpdateTaskRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskUpdateResponse, TaskService.UpdateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put End User Data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.taskService.updateTask({
    body: {
      instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT",
      taskId: "TkoviRO58Q8R7qPnAkLAqBAT",
      intent: Intent.Complete,
      context: { subject: { identity: {} } },
    },
  });
  // TODO: Handle 'response' of type JourneyTaskUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type TaskService.UpdateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.taskService.updateTask({
  body: {
    instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT",
    taskId: "TkoviRO58Q8R7qPnAkLAqBAT",
    intent: Intent.Complete,
    context: { subject: { identity: {} } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskUpdateRequest](src/models/journey-task-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.taskService.updateTask(request)`

- **OnSuccess**: <code>[JourneyTaskUpdateResponse](src/models/journey-task-update-response.ts)</code>
- **OnError**: throws <code>[TaskService.UpdateTaskError](src/resources/task-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.taskService.updateTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskUpdateResponse, TaskService.UpdateTaskError&gt;</code>, with `result.value` of type <code>[JourneyTaskUpdateResponse](src/models/journey-task-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InstanceManagement

> Source: [InstanceManagement](src/resources/instance-management.ts)

<details>
<summary><code>deleteInstance(request: InstanceManagement.DeleteInstanceRequest, options?: RequestOptions): ApiPromise&lt;JourneyStateDeleteResponse, InstanceManagement.DeleteInstanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete instance

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.instanceManagement.deleteInstance({
    body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
  });
  // TODO: Handle 'response' of type JourneyStateDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type InstanceManagement.DeleteInstanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.instanceManagement.deleteInstance({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyStateDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyStateDeleteRequest](src/models/journey-state-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.instanceManagement.deleteInstance(request)`

- **OnSuccess**: <code>[JourneyStateDeleteResponse](src/models/journey-state-delete-response.ts)</code>
- **OnError**: throws <code>[InstanceManagement.DeleteInstanceError](src/resources/instance-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.instanceManagement.deleteInstance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyStateDeleteResponse, InstanceManagement.DeleteInstanceError&gt;</code>, with `result.value` of type <code>[JourneyStateDeleteResponse](src/models/journey-state-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InteractionService

> Source: [InteractionService](src/resources/interaction-service.ts)

<details>
<summary><code>fetchInteraction(request: InteractionService.FetchInteractionRequest, options?: RequestOptions): ApiPromise&lt;JourneyInteractionFetchResponse3, InteractionService.FetchInteractionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch Interaction

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interactionService.fetchInteraction({
    body: { instanceId: "PiKR2O0IjyUR8KV3RviKt4we" },
  });
  // TODO: Handle 'response' of type JourneyInteractionFetchResponse3
} catch (err) {
  // TODO: Handle 'err' of type InteractionService.FetchInteractionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interactionService.fetchInteraction({
  body: { instanceId: "PiKR2O0IjyUR8KV3RviKt4we" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyInteractionFetchResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyInteractionFetchRequest](src/models/journey-interaction-fetch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interactionService.fetchInteraction(request)`

- **OnSuccess**: <code>[JourneyInteractionFetchResponse3](src/models/unions/journey-interaction-fetch-response3.ts)</code>
- **OnError**: throws <code>[InteractionService.FetchInteractionError](src/resources/interaction-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interactionService.fetchInteraction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyInteractionFetchResponse3, InteractionService.FetchInteractionError&gt;</code>, with `result.value` of type <code>[JourneyInteractionFetchResponse3](src/models/unions/journey-interaction-fetch-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitInteraction(request: InteractionService.SubmitInteractionRequest, options?: RequestOptions): ApiPromise&lt;JourneyInteractionSubmitResponse2, InteractionService.SubmitInteractionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit Interaction

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interactionService.submitInteraction({
    body: {
      instanceId: "PiKR2O0IjyUR8KV3RviKt4we",
      interactionId: "int-456",
      participants: [{ domainElementId: "foo", instruction: "open" }],
      context: { subject: { uid: "customer-789" } },
    },
  });
  // TODO: Handle 'response' of type JourneyInteractionSubmitResponse2
} catch (err) {
  // TODO: Handle 'err' of type InteractionService.SubmitInteractionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interactionService.submitInteraction({
  body: {
    instanceId: "PiKR2O0IjyUR8KV3RviKt4we",
    interactionId: "int-456",
    participants: [{ domainElementId: "foo", instruction: "open" }],
    context: { subject: { uid: "customer-789" } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyInteractionSubmitResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyInteractionSubmitRequest](src/models/journey-interaction-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interactionService.submitInteraction(request)`

- **OnSuccess**: <code>[JourneyInteractionSubmitResponse2](src/models/unions/journey-interaction-submit-response2.ts)</code>
- **OnError**: throws <code>[InteractionService.SubmitInteractionError](src/resources/interaction-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interactionService.submitInteraction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyInteractionSubmitResponse2, InteractionService.SubmitInteractionError&gt;</code>, with `result.value` of type <code>[JourneyInteractionSubmitResponse2](src/models/unions/journey-interaction-submit-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EndUserApIs

> Source: [EndUserApIs](src/resources/end-user-ap-is.ts)

<details>
<summary><code>deviceConnect(request: EndUserApIs.DeviceConnectRequest, options?: RequestOptions): ApiPromise&lt;JourneyDeviceConnectResponse, EndUserApIs.DeviceConnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connect or Refresh End User Device

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.endUserApIs.deviceConnect({
    body: {
      connectToken: "s4FUx8Ny8ijXRtFigz3x1_8rb9bd_5ZD",
      deviceInfo: { deviceId: "exampleDeviceId123", deviceName: "deviceName", deviceType: "deviceType" },
    },
  });
  // TODO: Handle 'response' of type JourneyDeviceConnectResponse
} catch (err) {
  // TODO: Handle 'err' of type EndUserApIs.DeviceConnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.endUserApIs.deviceConnect({
  body: {
    connectToken: "s4FUx8Ny8ijXRtFigz3x1_8rb9bd_5ZD",
    deviceInfo: { deviceId: "exampleDeviceId123", deviceName: "deviceName", deviceType: "deviceType" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyDeviceConnectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyDeviceConnectRequest](src/models/journey-device-connect-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.endUserApIs.deviceConnect(request)`

- **OnSuccess**: <code>[JourneyDeviceConnectResponse](src/models/journey-device-connect-response.ts)</code>
- **OnError**: throws <code>[EndUserApIs.DeviceConnectError](src/resources/end-user-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.endUserApIs.deviceConnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyDeviceConnectResponse, EndUserApIs.DeviceConnectError&gt;</code>, with `result.value` of type <code>[JourneyDeviceConnectResponse](src/models/journey-device-connect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasks(request: EndUserApIs.GetTasksRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskListResponse, EndUserApIs.GetTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get End User Tasks

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.endUserApIs.getTasks({ body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" } });
  // TODO: Handle 'response' of type JourneyTaskListResponse
} catch (err) {
  // TODO: Handle 'err' of type EndUserApIs.GetTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.endUserApIs.getTasks({
  body: { instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskListRequest](src/models/journey-task-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.endUserApIs.getTasks(request)`

- **OnSuccess**: <code>[JourneyTaskListResponse](src/models/journey-task-list-response.ts)</code>
- **OnError**: throws <code>[EndUserApIs.GetTasksError](src/resources/end-user-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.endUserApIs.getTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskListResponse, EndUserApIs.GetTasksError&gt;</code>, with `result.value` of type <code>[JourneyTaskListResponse](src/models/journey-task-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTask(request: EndUserApIs.UpdateTaskRequest, options?: RequestOptions): ApiPromise&lt;JourneyTaskUpdateResponse, EndUserApIs.UpdateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put End User Data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.endUserApIs.updateTask({
    body: {
      instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT",
      taskId: "TkoviRO58Q8R7qPnAkLAqBAT",
      intent: Intent.Complete,
      context: { subject: { identity: {} } },
    },
  });
  // TODO: Handle 'response' of type JourneyTaskUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type EndUserApIs.UpdateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.endUserApIs.updateTask({
  body: {
    instanceId: "PiIuACmx8Q8R7qPnAkLAqBAT",
    taskId: "TkoviRO58Q8R7qPnAkLAqBAT",
    intent: Intent.Complete,
    context: { subject: { identity: {} } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JourneyTaskUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[JourneyTaskUpdateRequest](src/models/journey-task-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.endUserApIs.updateTask(request)`

- **OnSuccess**: <code>[JourneyTaskUpdateResponse](src/models/journey-task-update-response.ts)</code>
- **OnError**: throws <code>[EndUserApIs.UpdateTaskError](src/resources/end-user-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.endUserApIs.updateTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JourneyTaskUpdateResponse, EndUserApIs.UpdateTaskError&gt;</code>, with `result.value` of type <code>[JourneyTaskUpdateResponse](src/models/journey-task-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## JourneyExecution

> Source: [JourneyExecution](src/resources/journey-execution.ts)

<details>
<summary><code>generateAccessToken(request: JourneyExecution.GenerateAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;AsTokenOauth2Response, JourneyExecution.GenerateAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an access token to authenticate API requests. If you're unfamiliar with the authentication process, check out the [authentication guide](/docs/go-v2/developer-integration/execute-customer-journeys/authenticate) for more details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.journeyExecution.generateAccessToken();
  // TODO: Handle 'response' of type AsTokenOauth2Response
} catch (err) {
  // TODO: Handle 'err' of type JourneyExecution.GenerateAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.journeyExecution.generateAccessToken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsTokenOauth2Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.journeyExecution.generateAccessToken(request)`

- **OnSuccess**: <code>[AsTokenOauth2Response](src/models/as-token-oauth2-response.ts)</code>
- **OnError**: throws <code>[JourneyExecution.GenerateAccessTokenError](src/resources/journey-execution.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.journeyExecution.generateAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsTokenOauth2Response, JourneyExecution.GenerateAccessTokenError&gt;</code>, with `result.value` of type <code>[AsTokenOauth2Response](src/models/as-token-oauth2-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GbgGoNextGenFlowCaptainApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

