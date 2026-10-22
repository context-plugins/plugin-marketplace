# Reference

> Source: [SkylightApiClient](src/client.ts)

## Windows

> Source: [Windows](src/resources/windows.ts)

<details>
<summary><code>instances(options?: RequestOptions): ApiPromise&lt;InstancesListResponse, Windows.InstancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.windows.instances();
  // TODO: Handle 'response' of type InstancesListResponse
} catch (err) {
  // TODO: Handle 'err' of type Windows.InstancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.windows.instances().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstancesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.windows.instances()`

- **OnSuccess**: <code>[InstancesListResponse](src/models/instances-list-response.ts)</code>
- **OnError**: throws <code>[Windows.InstancesError](src/resources/windows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.windows.instances().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstancesListResponse, Windows.InstancesError&gt;</code>, with `result.value` of type <code>[InstancesListResponse](src/models/instances-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pause(request: Windows.PauseRequest, options?: RequestOptions): ApiPromise&lt;InactiveOperationResponse, Windows.PauseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.windows.pause({ instanceId: "some example string" });
  // TODO: Handle 'response' of type InactiveOperationResponse
} catch (err) {
  // TODO: Handle 'err' of type Windows.PauseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.windows.pause({ instanceId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InactiveOperationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.windows.pause(request)`

- **OnSuccess**: <code>[InactiveOperationResponse](src/models/inactive-operation-response.ts)</code>
- **OnError**: throws <code>[Windows.PauseError](src/resources/windows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.windows.pause(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InactiveOperationResponse, Windows.PauseError&gt;</code>, with `result.value` of type <code>[InactiveOperationResponse](src/models/inactive-operation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resume(request: Windows.ResumeRequest, options?: RequestOptions): ApiPromise&lt;ActiveOperationResponse, Windows.ResumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.windows.resume({ instanceId: "some example string" });
  // TODO: Handle 'response' of type ActiveOperationResponse
} catch (err) {
  // TODO: Handle 'err' of type Windows.ResumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.windows.resume({ instanceId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActiveOperationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.windows.resume(request)`

- **OnSuccess**: <code>[ActiveOperationResponse](src/models/active-operation-response.ts)</code>
- **OnError**: throws <code>[Windows.ResumeError](src/resources/windows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.windows.resume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActiveOperationResponse, Windows.ResumeError&gt;</code>, with `result.value` of type <code>[ActiveOperationResponse](src/models/active-operation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>start(request: Windows.StartRequest, options?: RequestOptions): ApiPromise&lt;InstanceStartResponse, Windows.StartError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new Windows  instance.

- timeout_minutes: Optional timeout in minutes (default: 60)

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.windows.start({ body: {} });
  // TODO: Handle 'response' of type InstanceStartResponse
} catch (err) {
  // TODO: Handle 'err' of type Windows.StartError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.windows.start({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstanceStartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InstanceRequest](src/models/instance-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.windows.start(request)`

- **OnSuccess**: <code>[InstanceStartResponse](src/models/instance-start-response.ts)</code>
- **OnError**: throws <code>[Windows.StartError](src/resources/windows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.windows.start(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstanceStartResponse, Windows.StartError&gt;</code>, with `result.value` of type <code>[InstanceStartResponse](src/models/instance-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>state(request: Windows.StateRequest, options?: RequestOptions): ApiPromise&lt;InstanceStatusResponse, Windows.StateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.windows.state({ instanceId: "some example string" });
  // TODO: Handle 'response' of type InstanceStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Windows.StateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.windows.state({ instanceId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstanceStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.windows.state(request)`

- **OnSuccess**: <code>[InstanceStatusResponse](src/models/instance-status-response.ts)</code>
- **OnError**: throws <code>[Windows.StateError](src/resources/windows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.windows.state(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstanceStatusResponse, Windows.StateError&gt;</code>, with `result.value` of type <code>[InstanceStatusResponse](src/models/instance-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>terminate(request: Windows.TerminateRequest, options?: RequestOptions): ApiPromise&lt;InactiveOperationResponse, Windows.TerminateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.windows.terminate({ instanceId: "some example string" });
  // TODO: Handle 'response' of type InactiveOperationResponse
} catch (err) {
  // TODO: Handle 'err' of type Windows.TerminateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.windows.terminate({ instanceId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InactiveOperationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.windows.terminate(request)`

- **OnSuccess**: <code>[InactiveOperationResponse](src/models/inactive-operation-response.ts)</code>
- **OnError**: throws <code>[Windows.TerminateError](src/resources/windows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.windows.terminate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InactiveOperationResponse, Windows.TerminateError&gt;</code>, with `result.value` of type <code>[InactiveOperationResponse](src/models/inactive-operation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Interact

> Source: [Interact](src/resources/interact.ts)

<details>
<summary><code>click(request: Interact.ClickRequestParams, options?: RequestOptions): ApiPromise&lt;StandardResponse, Interact.ClickError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a click operation at the specified coordinates or current position

- If x and y are provided, click at those coordinates
- If x and y are omitted, click at the current cursor position
- Use button="left", clicks=1 for a single left click
- Use button="right", clicks=1 for a right click
- Use button="middle", clicks=1 for a middle click
- Use button="left", clicks=2 for a double click

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.click({ instanceId: "some example string", body: {} });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.ClickError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.click({ instanceId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ClickRequest](src/models/click-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.click(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Interact.ClickError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.click(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Interact.ClickError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>drag(request: Interact.DragRequestParams, options?: RequestOptions): ApiPromise&lt;StandardResponse, Interact.DragError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a drag operation along a path of coordinates

- path: List of points to drag through, each with 'x' and 'y' coordinates
- button: Mouse button to use for dragging (default: "left")

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.drag({ instanceId: "some example string", body: { path: [1] } });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.DragError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.drag({
  instanceId: "some example string",
  body: { path: [1] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[DragRequest](src/models/drag-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.drag(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Interact.DragError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.drag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Interact.DragError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>install(request: Interact.InstallRequest, options?: RequestOptions): ApiPromise&lt;PackageInstallResponse, Interact.InstallError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Install Chocolatey packages on a Windows instance. Find a list of packages here: https://community.chocolatey.org/packages.

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.install({
    instanceId: "some example string",
    body: { packages: ["some example string"] },
  });
  // TODO: Handle 'response' of type PackageInstallResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.InstallError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.install({
  instanceId: "some example string",
  body: { packages: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PackageInstallResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PackageInstallRequest](src/models/package-install-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.install(request)`

- **OnSuccess**: <code>[PackageInstallResponse](src/models/package-install-response.ts)</code>
- **OnError**: throws <code>[Interact.InstallError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.install(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PackageInstallResponse, Interact.InstallError&gt;</code>, with `result.value` of type <code>[PackageInstallResponse](src/models/package-install-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>keypress(request: Interact.KeypressRequest, options?: RequestOptions): ApiPromise&lt;StandardResponse, Interact.KeypressError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Press the specified keys simultaneously (e.g. ['ctrl', 'alt', 'delete'])

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.keypress({
    instanceId: "some example string",
    body: { keys: ["some example string"] },
  });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.KeypressError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.keypress({
  instanceId: "some example string",
  body: { keys: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[KeyRequest](src/models/key-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.keypress(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Interact.KeypressError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.keypress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Interact.KeypressError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>move(request: Interact.MoveRequest, options?: RequestOptions): ApiPromise&lt;StandardResponse, Interact.MoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move the mouse to the specified coordinates

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.move({ instanceId: "some example string", body: { x: 1, y: 1 } });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.MoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.move({
  instanceId: "some example string",
  body: { x: 1, y: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[MouseMoveRequest](src/models/mouse-move-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.move(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Interact.MoveError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.move(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Interact.MoveError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>screenshot(request: Interact.ScreenshotRequest, options?: RequestOptions): ApiPromise&lt;ScreenshotResponse, Interact.ScreenshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Take a screenshot of the instance

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.screenshot({ instanceId: "some example string" });
  // TODO: Handle 'response' of type ScreenshotResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.ScreenshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.screenshot({ instanceId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScreenshotResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.screenshot(request)`

- **OnSuccess**: <code>[ScreenshotResponse](src/models/screenshot-response.ts)</code>
- **OnError**: throws <code>[Interact.ScreenshotError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.screenshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScreenshotResponse, Interact.ScreenshotError&gt;</code>, with `result.value` of type <code>[ScreenshotResponse](src/models/screenshot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scroll(request: Interact.ScrollRequestParams, options?: RequestOptions): ApiPromise&lt;StandardResponse, Interact.ScrollError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Scroll at the specified coordinates

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.scroll({ instanceId: "some example string", body: { x: 1, y: 1 } });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.ScrollError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.scroll({
  instanceId: "some example string",
  body: { x: 1, y: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ScrollRequest](src/models/scroll-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.scroll(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Interact.ScrollError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.scroll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Interact.ScrollError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>type(request: Interact.TypeRequestParams, options?: RequestOptions): ApiPromise&lt;StandardResponse, Interact.TypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Type the specified text with optional delay between keystrokes

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.interact.type({
    instanceId: "some example string",
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Interact.TypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.interact.type({
  instanceId: "some example string",
  body: { text: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[TypeRequest](src/models/type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.interact.type(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Interact.TypeError](src/resources/interact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.interact.type(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Interact.TypeError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Agent

> Source: [Agent](src/resources/agent.ts)

<details>
<summary><code>answer(request: Agent.AnswerRequest, options?: RequestOptions): ApiPromise&lt;StandardResponse, Agent.AnswerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a human response to a waiting agent and resume its execution.

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.answer({
    agentId: "some example string",
    body: { message: "Yes, proceed with the download" },
  });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Agent.AnswerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.answer({
  agentId: "some example string",
  body: { message: "Yes, proceed with the download" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>agentId</code> | <code>string</code> | - |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.answer(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Agent.AnswerError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.answer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Agent.AnswerError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>run(request: Agent.RunRequest, options?: RequestOptions): ApiPromise&lt;StandardResponse, Agent.RunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a loop with Anthropic's computer use agent to perform tasks on the VM.

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.run({
    instanceId: "some example string",
    body: { query: "some example string" },
  });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Agent.RunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.run({
  instanceId: "some example string",
  body: { query: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ClaudeRequest](src/models/claude-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.run(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Agent.RunError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.run(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Agent.RunError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>status(request: Agent.StatusRequest, options?: RequestOptions): ApiPromise&lt;AgentStatusResponse, Agent.StatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current status of an agent for a specific instance.

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.status({ agentId: "some example string" });
  // TODO: Handle 'response' of type AgentStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Agent.StatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.status({ agentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>agentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.status(request)`

- **OnSuccess**: <code>[AgentStatusResponse](src/models/agent-status-response.ts)</code>
- **OnError**: throws <code>[Agent.StatusError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.status(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentStatusResponse, Agent.StatusError&gt;</code>, with `result.value` of type <code>[AgentStatusResponse](src/models/agent-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stop(request: Agent.StopRequest, options?: RequestOptions): ApiPromise&lt;StandardResponse, Agent.StopError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a running agent for a specific instance.

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.stop({ instanceId: "some example string" });
  // TODO: Handle 'response' of type StandardResponse
} catch (err) {
  // TODO: Handle 'err' of type Agent.StopError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.stop({ instanceId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.stop(request)`

- **OnSuccess**: <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: throws <code>[Agent.StopError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.stop(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardResponse, Agent.StopError&gt;</code>, with `result.value` of type <code>[StandardResponse](src/models/standard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FilesApi

> Source: [FilesApi](src/resources/files-api.ts)

<details>
<summary><code>download(request: FilesApi.DownloadRequest, options?: RequestOptions): ApiPromise&lt;FileDownloadResponse, FilesApi.DownloadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a secure download link for a file on the instance

Generates a presigned S3 URL for the client to download the file directly

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesApi.download({
    instanceId: "some example string",
    body: { key: "some example string" },
  });
  // TODO: Handle 'response' of type FileDownloadResponse
} catch (err) {
  // TODO: Handle 'err' of type FilesApi.DownloadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesApi.download({
  instanceId: "some example string",
  body: { key: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileDownloadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>Record&lt;string, string&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesApi.download(request)`

- **OnSuccess**: <code>[FileDownloadResponse](src/models/file-download-response.ts)</code>
- **OnError**: throws <code>[FilesApi.DownloadError](src/resources/files-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesApi.download(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileDownloadResponse, FilesApi.DownloadError&gt;</code>, with `result.value` of type <code>[FileDownloadResponse](src/models/file-download-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upload(request: FilesApi.UploadRequest, options?: RequestOptions): ApiPromise&lt;FileUploadResponse, FilesApi.UploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file from S3 to the VM

Takes an S3 URL (often from FileUploader component) and transfers it to the VM.
Updates the files.uploads array in the vm_instances table to track the file.

Requires API key authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesApi.upload({
    instanceId: "some example string",
    body: { s3Url: "some example string", fileName: "some example string" },
  });
  // TODO: Handle 'response' of type FileUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type FilesApi.UploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesApi.upload({
  instanceId: "some example string",
  body: { s3Url: "some example string", fileName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileUploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instanceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[S3VmUploadRequest](src/models/s3-vm-upload-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesApi.upload(request)`

- **OnSuccess**: <code>[FileUploadResponse](src/models/file-upload-response.ts)</code>
- **OnError**: throws <code>[FilesApi.UploadError](src/resources/files-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesApi.upload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileUploadResponse, FilesApi.UploadError&gt;</code>, with `result.value` of type <code>[FileUploadResponse](src/models/file-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkylightApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

