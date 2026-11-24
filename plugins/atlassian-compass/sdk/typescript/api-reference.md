# Reference

> Source: [AtlassianCompassClient](src/client.ts)

## AttachmentRestController

> Source: [AttachmentRestController](src/resources/attachment-rest-controller.ts)

<details>
<summary><code>deleteApiSpec(request: AttachmentRestController.DeleteApiSpecRequest, options?: RequestOptions): ApiPromise&lt;string, AttachmentRestController.DeleteApiSpecError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the API spec file for a component.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentRestController.deleteApiSpec({
    componentId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type AttachmentRestController.DeleteApiSpecError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentRestController
  .deleteApiSpec({ componentId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentRestController.deleteApiSpec(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[AttachmentRestController.DeleteApiSpecError](src/resources/attachment-rest-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachmentRestController.deleteApiSpec(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, AttachmentRestController.DeleteApiSpecError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAttachment(request: AttachmentRestController.DeleteAttachmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, AttachmentRestController.DeleteAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.attachmentRestController.deleteAttachment({
    componentId: "00000000-0000-0000-0000-000000000000",
    forgeAppId: "some example string",
    key: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type AttachmentRestController.DeleteAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentRestController
  .deleteAttachment({
    componentId: "00000000-0000-0000-0000-000000000000",
    forgeAppId: "some example string",
    key: "some example string",
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
| <code>componentId</code> | <code>string</code> | - |
| <code>forgeAppId</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentRestController.deleteAttachment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AttachmentRestController.DeleteAttachmentError](src/resources/attachment-rest-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachmentRestController.deleteAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AttachmentRestController.DeleteAttachmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAttachment(request: AttachmentRestController.GetAttachmentRequest, options?: RequestOptions): ApiPromise&lt;Attachment, AttachmentRestController.GetAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentRestController.getAttachment({
    componentId: "00000000-0000-0000-0000-000000000000",
    forgeAppId: "some example string",
    key: "some example string",
  });
  // TODO: Handle 'response' of type Attachment
} catch (err) {
  // TODO: Handle 'err' of type AttachmentRestController.GetAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentRestController
  .getAttachment({
    componentId: "00000000-0000-0000-0000-000000000000",
    forgeAppId: "some example string",
    key: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Attachment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | - |
| <code>forgeAppId</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentRestController.getAttachment(request)`

- **OnSuccess**: <code>[Attachment](src/models/attachment.ts)</code>
- **OnError**: throws <code>[AttachmentRestController.GetAttachmentError](src/resources/attachment-rest-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachmentRestController.getAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Attachment, AttachmentRestController.GetAttachmentError&gt;</code>, with `result.value` of type <code>[Attachment](src/models/attachment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadApiSpec(request: AttachmentRestController.UploadApiSpecRequest, options?: RequestOptions): ApiPromise&lt;string, AttachmentRestController.UploadApiSpecError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload api specs for a component.

The request body should be a file with the api-spec content.

Example: This curl command uploads a spec file (swagger.yaml) for the component.
```bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/file/swagger.yaml
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentRestController.uploadApiSpec({
    componentId: "00000000-0000-0000-0000-000000000000",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type AttachmentRestController.UploadApiSpecError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentRestController
  .uploadApiSpec({ componentId: "00000000-0000-0000-0000-000000000000", file: new Uint8Array() })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | - |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentRestController.uploadApiSpec(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[AttachmentRestController.UploadApiSpecError](src/resources/attachment-rest-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachmentRestController.uploadApiSpec(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, AttachmentRestController.UploadApiSpecError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadAttachment(request: AttachmentRestController.UploadAttachmentRequest, options?: RequestOptions): ApiPromise&lt;Attachment, AttachmentRestController.UploadAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

The request body should be a file.

Example: This curl command attaches a file to a component.
```bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/attachment.txt
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachmentRestController.uploadAttachment({
    componentId: "00000000-0000-0000-0000-000000000000",
    forgeAppId: "some example string",
    key: "some example string",
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type Attachment
} catch (err) {
  // TODO: Handle 'err' of type AttachmentRestController.UploadAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachmentRestController
  .uploadAttachment({
    componentId: "00000000-0000-0000-0000-000000000000",
    forgeAppId: "some example string",
    key: "some example string",
    file: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Attachment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | - |
| <code>forgeAppId</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | - |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachmentRestController.uploadAttachment(request)`

- **OnSuccess**: <code>[Attachment](src/models/attachment.ts)</code>
- **OnError**: throws <code>[AttachmentRestController.UploadAttachmentError](src/resources/attachment-rest-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachmentRestController.uploadAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Attachment, AttachmentRestController.UploadAttachmentError&gt;</code>, with `result.value` of type <code>[Attachment](src/models/attachment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EntitlementRestController

> Source: [EntitlementRestController](src/resources/entitlement-rest-controller.ts)

<details>
<summary><code>evaluateEntitlements(request: EntitlementRestController.EvaluateEntitlementsRequest, options?: RequestOptions): ApiPromise&lt;EntitlementResponseDto, EntitlementRestController.EvaluateEntitlementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get entitlement results for a given user and site

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entitlementRestController.evaluateEntitlements({
    body: { entitlements: ["some example string"] },
  });
  // TODO: Handle 'response' of type EntitlementResponseDto
} catch (err) {
  // TODO: Handle 'err' of type EntitlementRestController.EvaluateEntitlementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entitlementRestController
  .evaluateEntitlements({ body: { entitlements: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitlementResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EntitlementRequestDto](src/models/entitlement-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entitlementRestController.evaluateEntitlements(request)`

- **OnSuccess**: <code>[EntitlementResponseDto](src/models/entitlement-response-dto.ts)</code>
- **OnError**: throws <code>[EntitlementRestController.EvaluateEntitlementsError](src/resources/entitlement-rest-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entitlementRestController.evaluateEntitlements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitlementResponseDto, EntitlementRestController.EvaluateEntitlementsError&gt;</code>, with `result.value` of type <code>[EntitlementResponseDto](src/models/entitlement-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>createCompassEvent(request: Events.CreateCompassEventRequest, options?: RequestOptions): ApiPromise&lt;undefined, Events.CreateCompassEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are allowed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.events.createCompassEvent({ body: { cloudId: "some example string", event: {} } });
} catch (err) {
  // TODO: Handle 'err' of type Events.CreateCompassEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .createCompassEvent({ body: { cloudId: "some example string", event: {} } })
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
| <code>body</code> | <code>[CreateStreamlinedEventRequest](src/models/create-streamlined-event-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.createCompassEvent(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Events.CreateCompassEventError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.createCompassEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Events.CreateCompassEventError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IncomingWebhooksRestController

> Source: [IncomingWebhooksRestController](src/resources/incoming-webhooks-rest-controller.ts)

<details>
<summary><code>handleWebhookInvocation(request: IncomingWebhooksRestController.HandleWebhookInvocationRequest, options?: RequestOptions): ApiPromise&lt;undefined, IncomingWebhooksRestController.HandleWebhookInvocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Third parties can call these inbound webhooks to dothings within compass, like create deployment events for webhooks coming from github

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.incomingWebhooksRestController.handleWebhookInvocation({
    webhookId: "some example string",
    body: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type IncomingWebhooksRestController.HandleWebhookInvocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomingWebhooksRestController
  .handleWebhookInvocation({ webhookId: "some example string", body: "some example string" })
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
| <code>webhookId</code> | <code>string</code> | - |
| <code>body</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomingWebhooksRestController.handleWebhookInvocation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[IncomingWebhooksRestController.HandleWebhookInvocationError](src/resources/incoming-webhooks-rest-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomingWebhooksRestController.handleWebhookInvocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, IncomingWebhooksRestController.HandleWebhookInvocationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](src/resources/metrics.ts)

<details>
<summary><code>insertMetricValue(request: Metrics.InsertMetricValueRequest, options?: RequestOptions): ApiPromise&lt;InsertMetricResponseDto, Metrics.InsertMetricValueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per user per minute are allowed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.insertMetricValue({
    body: { value: 1.5, metricDefinitionId: "some example string", componentId: "some example string" },
  });
  // TODO: Handle 'response' of type InsertMetricResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Metrics.InsertMetricValueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .insertMetricValue({
    body: { value: 1.5, metricDefinitionId: "some example string", componentId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsertMetricResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompassV1MetricsRequest](src/models/unions/compass-v1-metrics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.insertMetricValue(request)`

- **OnSuccess**: <code>[InsertMetricResponseDto](src/models/insert-metric-response-dto.ts)</code>
- **OnError**: throws <code>[Metrics.InsertMetricValueError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.insertMetricValue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsertMetricResponseDto, Metrics.InsertMetricValueError&gt;</code>, with `result.value` of type <code>[InsertMetricResponseDto](src/models/insert-metric-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PackageDependencies

> Source: [PackageDependencies](src/resources/package-dependencies.ts)

<details>
<summary><code>deleteLockFile(request: PackageDependencies.DeleteLockFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, PackageDependencies.DeleteLockFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete all the package dependencies associated with a particular source.The `sourceId` parameter needs to be Base64 encoded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.packageDependencies.deleteLockFile({
    componentId: "some example string",
    sourceId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type PackageDependencies.DeleteLockFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packageDependencies
  .deleteLockFile({ componentId: "some example string", sourceId: "some example string" })
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
| <code>componentId</code> | <code>string</code> | - |
| <code>sourceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packageDependencies.deleteLockFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PackageDependencies.DeleteLockFileError](src/resources/package-dependencies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packageDependencies.deleteLockFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PackageDependencies.DeleteLockFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadLockFile(request: PackageDependencies.UploadLockFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, PackageDependencies.UploadLockFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload package dependencies for a component.

The file with package dependency information. Currently, we only accept package-lock.json files that are below 2MB. \
\
The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where dependencies were found. \
\
The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to the lock file, with the "/" characters replaced with "_" characters.

Example: This curl command uploads a lock file to populate package dependencies for the component.
```bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/file/package-lock.json;type=application/json
--form componentId=
--form baseSourceUrl=
--form sourceId=
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.packageDependencies.uploadLockFile({
    sourceId: "some example string",
    baseSourceUrl: "some example string",
    componentId: "some example string",
    file: new Uint8Array(),
  });
} catch (err) {
  // TODO: Handle 'err' of type PackageDependencies.UploadLockFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packageDependencies
  .uploadLockFile({
    sourceId: "some example string",
    baseSourceUrl: "some example string",
    componentId: "some example string",
    file: new Uint8Array(),
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
| <code>sourceId</code> | <code>string</code> | - |
| <code>baseSourceUrl</code> | <code>string</code> | - |
| <code>componentId</code> | <code>string</code> | - |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packageDependencies.uploadLockFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PackageDependencies.UploadLockFileError](src/resources/package-dependencies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packageDependencies.uploadLockFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PackageDependencies.UploadLockFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AtlassianCompassError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

